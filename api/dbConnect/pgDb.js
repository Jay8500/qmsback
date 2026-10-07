const pg = require('pg');
const _lodash = require('lodash');
const fs = require('fs');
const _envvar = require('../config/envvar');
const auth = require('../security/auth');

// ---------------- Connection pools ----------------
// One pool per client database, created on first use and reused by every request
// (creating a new pg.Pool per request leaked connections).
const pools = new Map();

function getPool(configResponce) {
    const cfg = configResponce.pgdbConfig;
    const key = `${cfg.host}|${cfg.port}|${cfg.database}|${cfg.user}`;
    if (!pools.has(key)) {
        const pool = new pg.Pool(cfg);
        pool.on('error', (err) => logError(`pg pool error: ${err.message}`));
        pools.set(key, pool);
    }
    return pools.get(key);
}

// ---------------- Error logging ----------------
function logError(err) {
    if (_envvar.appErrorFile) {
        fs.appendFile(_envvar.appErrorFile, ` ${err}\n`, () => { });
    }
}

// ---------------- Call one stored function ----------------
// Every function in dbSP.js takes a single json/jsonb parameter (p_input). The value is
// sent as a bound parameter ($1), never pasted into the SQL text.
async function callFunction(configResponce, currentObj, payload) {
    const param = (currentObj.Schema || [])[0];
    if (!param) throw new Error(`No parameter defined for ${currentObj.SpName}`);
    const cast = param.type === 'json' ? 'json' : 'jsonb';
    const value = payload && Object.prototype.hasOwnProperty.call(payload, param.column) ? payload[param.column] : null;
    const sql = `select * from ${currentObj.SpName}(${param.column} := $1::${cast})`;

    const client = await getPool(configResponce).connect();
    try {
        await client.query('BEGIN');
        const results = await client.query(sql, [value == null ? null : JSON.stringify(value)]);
        await client.query('COMMIT');
        const row = results.rows[0];
        return row ? row[Object.keys(row)[0]] : null;
    } catch (err) {
        try { await client.query('ROLLBACK'); } catch (e) { }
        throw err;
    } finally {
        client.release();
    }
}

// ---------------- Generic request (GET and POST) ----------------
async function processRequest(configResponce, currentObj, payload) {
    try {
        const data_set = await callFunction(configResponce, currentObj, payload);
        if (_lodash.isEmpty(data_set)) return { Status: 204, Message: 'The requested record not found' };
        return data_set;
    } catch (err) {
        logError(err);
        return { Status: 999, Message: err.message, data: [] };
    }
}

// ---------------- Login ----------------
// Tokens are issued only when fn_get_login_user accepts the user name and password.
async function processReqLogin(configResponce, currentObj, payload) {
    try {
        const data_set = await callFunction(configResponce, currentObj, payload);
        if (_lodash.isEmpty(data_set)) return { Status: 204, Message: 'The requested record not found' };
        const user = Array.isArray(data_set.data) ? data_set.data[0] : null;
        if (String(data_set.error_cd) === '0' && user && user.user_id) {
            const tokens = auth.signTokens({
                user_id: user.user_id,
                user_name: payload?.p_input?.user_name,
                org_id: payload?.p_input?.org_id,
            });
            user.accessToken = tokens.accessToken;
            user.refreshToken = tokens.refreshToken;
            // Is this user already logged in elsewhere? The login screen asks before ending that session.
            const { rows } = await getPool(configResponce).query(
                // start_time is stored in UTC → send it as an ISO string with Z.
                `select count(*)::int as cnt,
                        to_char(max(start_time), 'YYYY-MM-DD"T"HH24:MI:SS"Z"') as since
                   from public.user_session where user_id = $1 and is_active = true`,
                [user.user_id]
            );
            user.other_active_sessions = rows[0]?.cnt || 0;
            user.other_session_since = rows[0]?.since || null;
        }
        return data_set;
    } catch (err) {
        logError(err);
        return { Status: 999, Message: err.message, data: [] };
    }
}

// ---------------- Export ----------------
// dataBaseQry()(configResponce, spDefinition, payload, cursorType, methodName) is kept for every caller.
module.exports = {
    getPool,
    dataBaseQry: () => (configResponce, currentObj, payload, cursorType) => {
        return cursorType === 'processReqLogin'
            ? processReqLogin(configResponce, currentObj, payload)
            : processRequest(configResponce, currentObj, payload);
    }
};
