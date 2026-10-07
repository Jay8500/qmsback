// ====================================================================================
// HQMS API server: middleware, routes, static upload folder, start-up.
// ====================================================================================
const CM = require('../config/commonModules');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const util = require('../utilities/util');
const logResponseTime = require('../config/responsetimeloggers');
const commonRoutings = require('../commonRoutings/commonRoutingFiles');
const entityCache = require('../cache/entity-cache');
const vaccinationReminders = require('../vaccination/reminder-job');
const documentAlerts = require('../document-management/alert-job');
const riskReminders = require('../risk-management/reminder-job');

const express = CM.express;
const app = CM.app;
const http = require('http').createServer(app);
const _clientConfig = CM._clientConfig;

// CORS (Authorization header is used for the JWT access token)
app.use(cors({
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'contentType', 'Content-Type', 'Accept', 'Authorization',
        'authtoken', 'params', 'clienturl', 'istokenrequired'],
}));
app.use(CM.bodyParser.json({ limit: '5gb' }));
app.use(CM.bodyParser.urlencoded({ limit: '5gb', extended: true, parameterLimit: 50000 }));
app.use(logResponseTime);

// Slow down password guessing: max 20 login / refresh calls per minute per IP.
const authLimiter = rateLimit({
    windowMs: 60 * 1000,
    limit: 20,
    standardHeaders: true,
    legacyHeaders: false,
    message: { data: { status: 429, message: 'Too many attempts. Please wait a minute and try again.', data: [] } },
});
app.use(['/api/commonRoutings/fnGetLoginUser', '/api/commonRoutings/refresh'], authLimiter);

// All API calls: token check, then the common router.
app.use('/api/commonRoutings', util.verifyToken, commonRoutings);

// Health check
app.get('/get', (req, res) => {
    res.status(200).send(`HQMS API Service is working fine on ${_clientConfig.PORT}!!`);
});

// Master data cache: load every client once, then refresh in the background.
entityCache.preloadAllClients()
    .then(() => entityCache.startAutoRefresh())
    .catch((err) => console.error('[EntityCache] Failed to load clients on server start:', err));

// Vaccination reminders: daily job (08:00 India time) → bell notifications for due / overdue doses.
vaccinationReminders.start();

// Document Management alerts: daily job (08:15 India time) → bell notifications for license / MoU expiry
// and document review dates, per location alert settings.
documentAlerts.start();

// Risk Management reminders: daily job (08:30 India time) → QT review overdue, weekly High-risk re-evaluation,
// periodic reviews and mitigation due dates; re-runs the incident recurrence rules.
riskReminders.start();

// Uploaded documents (STATIC FOLDER — DO NOT CHANGE THE PATH)
app.use(express.static(CM.path.join(__dirname, '../../', 'AllDocumentsupload')));

http.listen(_clientConfig.PORT, () => {
    console.log(`Server running in ${_clientConfig.ENV_TYPE} mode on http://localhost:${_clientConfig.PORT}`);
});

module.exports = app;
