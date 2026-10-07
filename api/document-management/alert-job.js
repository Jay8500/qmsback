// Document Management alerts (SRS 2.1 / 2.4): every day at 08:15 India time, for every client database,
// fn_doc_alerts_generate creates bell notifications for licenses / MoUs nearing or past expiry and approved
// documents due for review, using each location's alert settings (Quality Worklist > Alert Settings).
// Each alert is sent once, so a restart or a second run on the same day sends nothing new.
// node-cron is already a dependency.
const cron = require('node-cron');
const pgDb = require('../dbConnect/pgDb');
const dbConfig = require('../../clientconfigdata/clientDbobjects');

const SCHEDULE = process.env.HQMS_DOC_ALERT_CRON || '15 8 * * *';

async function runOnce() {
    const clients = dbConfig.StoredProcedure || {};
    for (const key of Object.keys(clients)) {
        const clientCfg = clients[key];
        if (!clientCfg || !clientCfg.pgdbConfig) continue;
        try {
            const result = await pgDb.getPool(clientCfg).query(`SELECT public.fn_doc_alerts_generate('{}'::jsonb) AS data`);
            const out = result.rows[0]?.data;
            const counts = out?.data?.[0] ? ` (alerts ${out.data[0].alerts}, recipients ${out.data[0].recipients})` : '';
            console.log(`[DocumentAlerts] ${key}: ${out?.error_msg}${counts}`);
        } catch (err) {
            // The function is missing until db/changes/document-management 02_functions/026 is run on that database.
            console.error(`[DocumentAlerts] ${key}: ${err.message}`);
        }
    }
}

function start() {
    if (!cron.validate(SCHEDULE)) {
        console.error(`[DocumentAlerts] invalid schedule "${SCHEDULE}" — job not started`);
        return;
    }
    cron.schedule(SCHEDULE, runOnce, { timezone: 'Asia/Kolkata' });
}

module.exports = { start, runOnce };
