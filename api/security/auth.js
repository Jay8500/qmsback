// Authentication for /api/commonRoutings: JWT access / refresh tokens and session checks.
const jwt = require('jsonwebtoken');
const _clientConfig = require('../../clientconfigdata/clientDbobjects');

// Token lifetimes; HQMS_ACCESS_TTL / HQMS_REFRESH_TTL (e.g. '20s', '1h') override them for testing.
const ACCESS_TTL = process.env.HQMS_ACCESS_TTL || '1h';
const REFRESH_TTL = process.env.HQMS_REFRESH_TTL || '1d';
const SESSION_CACHE_MS = 30 * 1000;

// Calls allowed without an access token (login screen and token refresh).
const PUBLIC_METHODS = new Set([
    '/fnOrganizationDetails',
    '/fnGetLoginUser',
    '/refresh',
    '/logout',
    '/fnHqmsUserMobileEmailOtpWrite',
    // Vaccination certificate check behind the QR code (only a random verify code, no login).
    '/fnVaccinationCertificateVerify',
]);
// Calls allowed with a valid token but before a session exists (login: location step).
const PRE_SESSION_METHODS = new Set(['/fnUserSessionWrite']);

// ---------------- Tokens ----------------
function signTokens({ user_id, user_name, org_id }) {
    const claims = { sub: user_id, user_name, org_id };
    return {
        accessToken: jwt.sign({ ...claims, typ: 'access' }, _clientConfig.secretKey, { expiresIn: ACCESS_TTL }),
        refreshToken: jwt.sign({ ...claims, typ: 'refresh' }, _clientConfig.secretKey, { expiresIn: REFRESH_TTL }),
    };
}

// Returns the claims, or throws (expired / invalid / wrong type).
function verifyTokenOfType(token, typ) {
    const claims = jwt.verify(token, _clientConfig.secretKey);
    if (claims.typ !== typ || !claims.sub) throw new Error('Token is not valid');
    return claims;
}

// ---------------- Session state (short cache; cleared on logout / supersede) ----------------
const sessionCache = new Map();

async function getSession(pool, sessionId) {
    const hit = sessionCache.get(sessionId);
    if (hit && Date.now() - hit.at < SESSION_CACHE_MS) return hit.row;
    const { rows } = await pool.query(
        'select user_id, is_active, action from public.user_session where user_session_id = $1',
        [sessionId]
    );
    const row = rows[0] || null;
    sessionCache.set(sessionId, { at: Date.now(), row });
    return row;
}

function forgetSession(sessionId) {
    sessionCache.delete(sessionId);
}

// Ends the user's other active sessions (one active session per user → SESSION_SUPERSEDED elsewhere).
async function supersedeOtherSessions(pool, userId) {
    const { rows } = await pool.query(
        `update public.user_session
            set is_active = false, end_time = timezone('UTC', now()), action = 'SUPERSEDED',
                updated_at = timezone('UTC', now())
          where user_id = $1 and is_active = true
      returning user_session_id`,
        [userId]
    );
    rows.forEach((r) => forgetSession(r.user_session_id));
}

async function endSession(pool, sessionId, userId, reason) {
    await pool.query(
        `update public.user_session
            set is_active = false, end_time = timezone('UTC', now()), action = $3,
                updated_at = timezone('UTC', now())
          where user_session_id = $1 and user_id = $2 and is_active = true`,
        [sessionId, userId, reason]
    );
    forgetSession(sessionId);
}

module.exports = {
    PUBLIC_METHODS,
    PRE_SESSION_METHODS,
    signTokens,
    verifyTokenOfType,
    getSession,
    supersedeOtherSessions,
    endSession,
};
