const auth = require('../security/auth');
const _clientConfig = require('../../clientconfigdata/clientDbobjects');

/*****************************************************
    TOKEN VERIFICATION MIDDLEWARE
    - Public calls (login screen, refresh, logout) pass without a token.
    - Every other call needs a valid, unexpired ACCESS token (a refresh token is rejected).
    - The verified user is attached as req.auth = { user_id, user_name, org_id }.
    - The session check (session must be active and belong to this user) runs in the
      router after the request payload is decrypted.
******************************************************/
function unauthorized(res, message, code) {
    return res.status(401).send({ code, data: { status: 401, message, data: [] } });
}

const verifyToken = (req, res, next) => {
    if (auth.PUBLIC_METHODS.has(req.path)) return next();

    const header = req.headers['authorization'] || '';
    const token = header.replace(/^Bearer\s+/i, '');
    if (!token) return unauthorized(res, 'Auth token is not supplied', 'TOKEN_MISSING');

    try {
        const claims = auth.verifyTokenOfType(token, 'access');
        req.auth = { user_id: claims.sub, user_name: claims.user_name, org_id: claims.org_id };
        next();
    } catch (err) {
        if (_clientConfig.DEBUG) console.log('verifyToken:', err.name);
        return err.name === 'TokenExpiredError'
            ? unauthorized(res, 'Token is Expired', 'TOKEN_EXPIRED')
            : unauthorized(res, 'Token is not valid', 'TOKEN_INVALID');
    }
};

module.exports = { verifyToken };
