const express = require('express');
const router = express.Router();
const CM = require('../config/commonModules');
const CF = require('../config/commonFunctions');
const { autoProcessUploads } = require('../config/formidablehelper');
const fluentreports = require('../fluentreports/fluentreportsapi');
const entityCache = require('../cache/entity-cache');
const auth = require('../security/auth');
const vaccinationCertificate = require('../vaccination/certificate-pdf');

const uploadRootDirefdoc = 'AllDocumentsupload';

// ====================================================================================
// Helpers
// ====================================================================================

// Adds fileOrImageUrl / fileType to every object that carries storage_path or file_name.
function attechedFilesImage(data, imageHTTPURL) {
    const stack = [data];
    const uploadpath = CM.path.join(CM.appRoot.path, uploadRootDirefdoc).replace(/\\/g, '/');
    while (stack.length) {
        const cur = stack.pop();
        if (!cur || typeof cur !== 'object') continue;
        const localpath = cur.storage_path || cur.file_name;
        if (localpath) {
            if (CM.fs.existsSync(localpath)) {
                let urlpath = localpath.replace(/\\/g, '/');
                if (urlpath.toLowerCase().startsWith(uploadpath.toLowerCase())) urlpath = urlpath.slice(uploadpath.length);
                if (!urlpath.startsWith('/')) urlpath = '/' + urlpath;
                cur.fileOrImageUrl = `${imageHTTPURL}${urlpath}`;
                cur.fileType = 'HTTP';
            } else if (cur.file_storage_location === 'BLOB database') {
                cur.fileOrImageUrl = null;
                cur.fileType = 'BLOB';
            } else {
                cur.fileOrImageUrl = null;
                cur.fileType = null;
            }
        }
        stack.push(...(Array.isArray(cur) ? cur : Object.values(cur)));
    }
    return data;
}

const send = (res, apiResponse) => res.send(CF.renderCrypto('encrypt', apiResponse));

function clientConfig(req) {
    const client = req.headers.clienturl || '';
    return { client, config: client ? CF.pgadminOption(client) : null };
}

// Serves each client's own upload folder once (it used to be added again on every GET).
const staticClients = new Set();
function serveClientFolder(client) {
    if (!client || staticClients.has(client)) return;
    staticClients.add(client);
    CM.app.use(express.static(CM.path.join(__dirname, '../../../../', client)));
}

// Every authenticated call must carry an active session that belongs to the token's user.
async function sessionProblem(req, config, methodName, sessionId) {
    if (!req.auth || auth.PRE_SESSION_METHODS.has('/' + methodName)) return null;
    if (!sessionId) return { code: 'SESSION_REQUIRED', message: 'Session is required' };
    const session = await auth.getSession(CM._pgdb.getPool(config), sessionId);
    if (!session || session.user_id !== req.auth.user_id) return { code: 'SESSION_INVALID', message: 'Session is not valid' };
    if (!session.is_active) {
        return session.action === 'SUPERSEDED'
            ? { code: 'SESSION_SUPERSEDED', message: 'You logged in from another browser or device' }
            : { code: 'SESSION_ENDED', message: 'Session has ended. Please log in again' };
    }
    return null;
}

const sessionRejected = (res, problem) =>
    res.status(401).send({ code: problem.code, data: { status: 401, message: problem.message, data: [] } });

// DB result → API response (same rules the screens already rely on).
function toGetResponse(dbResponse, imageHTTPURL) {
    if (!dbResponse || dbResponse.Status === 999) return { status: 501, message: 'FAIL', data: [] };
    if (dbResponse.Status === 204) return { status: 204, message: dbResponse.Message, data: [] };
    if (Array.isArray(dbResponse.data) && dbResponse.data.length) dbResponse.data = attechedFilesImage(dbResponse.data, imageHTTPURL);
    dbResponse = CF.recursiveHandle(dbResponse, imageHTTPURL);
    if (dbResponse.error_cd == 1) return { status: 501, message: dbResponse.message, data: dbResponse.data ?? [] };
    return { status: 200, message: 'SUCCESS', data: dbResponse.data ?? [] };
}

function toPostResponse(dbResponse) {
    if (!dbResponse || dbResponse.Status === 999) return { status: 501, message: 'Error', data: [] };
    if (dbResponse.error_cd == 1) return { status: 501, message: dbResponse.error_msg || 'Error', data: dbResponse.data ?? [] };
    if (dbResponse.data != null) return { status: 200, message: dbResponse.error_msg || 'SUCCESS', data: dbResponse.data };
    return { status: 204, message: dbResponse.error_msg || 'ERROR', data: [] };
}

function readGetParams(req) {
    return CF.renderCrypto('decrypt', req.headers.params);
}

// ====================================================================================
// Token refresh: needs a valid REFRESH token and the active session it belongs to.
// ====================================================================================
router.get('/refresh', async (req, res) => {
    const { config } = clientConfig(req);
    try {
        const p = readGetParams(req)?.p_input || {};
        const claims = auth.verifyTokenOfType(p.refresh_token, 'refresh');
        const session = p.session_id ? await auth.getSession(CM._pgdb.getPool(config), p.session_id) : null;
        if (!session || !session.is_active || session.user_id !== claims.sub) {
            return send(res, { status: 401, message: 'Session has ended', data: [] });
        }
        const tokens = auth.signTokens({ user_id: claims.sub, user_name: claims.user_name, org_id: claims.org_id });
        return send(res, { status: 200, message: 'SUCCESS', data: [tokens] });
    } catch (err) {
        return send(res, { status: 401, message: 'Refresh failed', data: [] });
    }
});

// ====================================================================================
// Logout: ends the session on the server (the access token stops working with it).
// ====================================================================================
router.get('/logout', async (req, res) => {
    const { config } = clientConfig(req);
    try {
        const p = readGetParams(req)?.p_input || {};
        if (config && p.session_id && p.user_id) {
            await auth.endSession(CM._pgdb.getPool(config), p.session_id, p.user_id, p.reason === 'IDLE' ? 'IDLE' : 'LOGOUT');
        }
        return send(res, { status: 200, message: 'Logout successfully', data: [] });
    } catch (err) {
        return send(res, { status: 204, message: 'Logout failed', data: [] });
    }
});

// ====================================================================================
// POST — all save calls
// ====================================================================================
router.post('/:methodName', CM.formidableMiddleware(), async (req, res) => {
    const { client, config } = clientConfig(req);
    const methodName = req.params.methodName;
    const spDefinition = CM._dbSP.StoredProcedure[methodName];
    if (!config) return send(res, { status: 204, message: 'No client found!!', data: [] });
    if (!spDefinition) return send(res, { status: 501, message: `Unknown method ${methodName}`, data: [] });

    try {
        const payload = CF.renderCrypto('decrypt', req.body.data);
        const firstInput = Array.isArray(payload?.p_input) ? payload.p_input[0] : payload?.p_input;
        const problem = await sessionProblem(req, config, methodName, firstInput?.session_id);
        if (problem) return sessionRejected(res, problem);

        const fileresult = await autoProcessUploads(payload, req.files, client,
            config.pgdbConfig.imagesavetype, config.pgdbConfig.remainingfilesavetype);
        const dbResponse = await CM._pgdb.dataBaseQry()(config, spDefinition, fileresult, 'processRequest', methodName);
        return send(res, toPostResponse(dbResponse));
    } catch (error) {
        return send(res, { status: 501, message: 'FAIL', data: [] });
    }
});

// ====================================================================================
// GET — lists, details, reports (export) and the entity cache
// ====================================================================================
router.get('/:methodName', CM.jsonParser, async (req, res) => {
    const { client, config } = clientConfig(req);
    const methodName = req.params.methodName;
    if (!config) return send(res, { status: 501, message: `Subdomain ${client} is not registered in our system.`, data: [] });

    let params;
    try {
        params = readGetParams(req);
    } catch (err) {
        return res.status(400).send({ status: 400, message: 'Invalid params header', data: [] });
    }

    try {
        const problem = await sessionProblem(req, config, methodName, params?.p_input?.session_id);
        if (problem) return sessionRejected(res, problem);

        // Background check from the open app: answers 200 while the session is active,
        // otherwise the 401 above (SESSION_SUPERSEDED / SESSION_ENDED) logs the browser out.
        if (methodName === 'sessionStatus') return send(res, { status: 200, message: 'ACTIVE', data: [] });
        serveClientFolder(client);

        // Master data (entity values) from the in-memory cache.
        if (methodName === 'entityCacheGet') {
            try {
                await entityCache.ensureLoaded(client);
            } catch (err) {
                console.error(`[entityCacheGet] Load failed for "${client}", using cached data if available`, err.message);
            }
            const rawCodes = params?.p_input?.entity_codes;
            const requestedCodes = rawCodes ? rawCodes.split('|').map((c) => c.trim()).filter((c) => c) : null;
            return send(res, { status: 200, message: 'SUCCESS', data: entityCache.getEntity(client, requestedCodes) });
        }

        const spDefinition = CM._dbSP.StoredProcedure[methodName];
        if (!spDefinition) return send(res, { status: 501, message: `Unknown method ${methodName}`, data: [] });

        // Starting a session (login → location): only for the logged-in user; older sessions end.
        if (methodName === 'fnUserSessionWrite') {
            if (params?.p_input?.user_id !== req.auth?.user_id) return sessionRejected(res, { code: 'SESSION_INVALID', message: 'Session is not valid' });
            await auth.supersedeOtherSessions(CM._pgdb.getPool(config), req.auth.user_id);
        }

        if (params.parFromDt === '') params.parFromDt = null;
        if (params.parToDt === '') params.parToDt = null;

        const imageHTTPURL = config.pgdbConfig.ENV_API_URL;

        // Excel / PDF / CSV export
        if (params?.p_input?.parExportTo) {
            const report = await fluentreports.reportsResponces(config, req, res, params, methodName);
            const reportDir = `${CM.appRoot}\\${uploadRootDirefdoc}`;
            if (params.p_input.parExportTo === 'Csv' || CM.fs.existsSync(report.data)) {
                report.data = CM._.replace(report.data, reportDir, imageHTTPURL).replace(/\\/g, '/');
            }
            return send(res, report);
        }

        const cursorType = methodName === 'fnGetLoginUser' ? 'processReqLogin' : 'processRequest';
        const dbResponse = await CM._pgdb.dataBaseQry()(config, spDefinition, params, cursorType, methodName);
        const response = toGetResponse(dbResponse, imageHTTPURL);
        // Vaccination certificate: the PDF (with the verification QR) is made here from the DB row.
        if (methodName === 'fnVaccinationCertificateGet' && response.status === 200 && response.data?.[0]) {
            const pdf = await vaccinationCertificate.buildPdf(response.data[0], params?.p_input?.verify_base_url);
            response.data[0].pdf_base64 = pdf.toString('base64');
        }
        return send(res, response);
    } catch (error) {
        console.log(error, 'error');
        return send(res, { status: 501, message: 'FAIL', data: [] });
    }
});

module.exports = router;
