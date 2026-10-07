// Risk Management reminders (Risk SRS 2.3 NABH high-risk protocol, review reminders): every day at 08:30 India
// time, for every client database, fn_risk_reminders_generate sends bell notifications for High risks waiting for
// QT review past 7 days, weekly re-evaluation of open High risks, periodic reviews due and mitigation past its due
// date; it also re-runs the incident recurrence rules (auto-risk) as a safety net. Each reminder is sent once.
// node-cron is already a dependency.
const cron = require('node-cron');
const pgDb = require('../dbConnect/pgDb');
const dbConfig = require('../../clientconfigdata/clientDbobjects');

const SCHEDULE = process.env.HQMS_RISK_REMINDER_CRON || '30 8 * * *';

async function runOnce() {
    const clients = dbConfig.StoredProcedure || {};
    for (const key of Object.keys(clients)) {
        const clientCfg = clients[key];
        if (!clientCfg || !clientCfg.pgdbConfig) continue;
        try {
            const result = await pgDb.getPool(clientCfg).query(`SELECT public.fn_risk_reminders_generate('{}'::jsonb) AS data`);
            const out = result.rows[0]?.data;
            const counts = out?.data?.[0] ? ` (reminders ${out.data[0].reminders}, recipients ${out.data[0].recipients})` : '';
            console.log(`[RiskReminders] ${key}: ${out?.error_msg}${counts}`);
        } catch (err) {
            // The function is missing until db/changes/risk 02_functions/010 is run on that database.
            console.error(`[RiskReminders] ${key}: ${err.message}`);
        }
    }
}

function start() {
    if (!cron.validate(SCHEDULE)) {
        console.error(`[RiskReminders] invalid schedule "${SCHEDULE}" — job not started`);
        return;
    }
    cron.schedule(SCHEDULE, runOnce, { timezone: 'Asia/Kolkata' });
}

module.exports = { start, runOnce };
