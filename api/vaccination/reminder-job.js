// Vaccination reminders (SRS 2.x2): every day at 08:00 India time, for every client database,
// fn_vaccination_reminders_generate creates bell notifications for doses due (T-7 / T-3 / T-1 and the
// vaccine's own reminder days) and overdue (+1 / +3). Each reminder is sent once, so a restart or a
// second run on the same day sends nothing new. node-cron is already a dependency.
const cron = require('node-cron');
const pgDb = require('../dbConnect/pgDb');
const dbConfig = require('../../clientconfigdata/clientDbobjects');

const SCHEDULE = process.env.HQMS_VACC_REMINDER_CRON || '0 8 * * *';

async function runOnce() {
    const clients = dbConfig.StoredProcedure || {};
    for (const key of Object.keys(clients)) {
        const clientCfg = clients[key];
        if (!clientCfg || !clientCfg.pgdbConfig) continue;
        try {
            const result = await pgDb.getPool(clientCfg).query(`SELECT public.fn_vaccination_reminders_generate('{}'::jsonb) AS data`);
            const msg = result.rows[0]?.data?.error_msg;
            console.log(`[VaccinationReminders] ${key}: ${msg}`);
        } catch (err) {
            // The function is missing until db/changes/vaccination 02_functions/017 is run on that database.
            console.error(`[VaccinationReminders] ${key}: ${err.message}`);
        }
    }
}

function start() {
    if (!cron.validate(SCHEDULE)) {
        console.error(`[VaccinationReminders] invalid schedule "${SCHEDULE}" — job not started`);
        return;
    }
    cron.schedule(SCHEDULE, runOnce, { timezone: 'Asia/Kolkata' });
}

module.exports = { start, runOnce };
