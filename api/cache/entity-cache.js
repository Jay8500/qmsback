const pgDb = require('../dbConnect/pgDb');
const dbConfig = require('../../clientconfigdata/clientDbobjects');
const REFRESH_INTERVAL_MS = 30 * 60 * 1000; // 30 minutes
const CACHE_ENABLED = true;
class EntityCache {
    constructor() {
        this.store = new Map();
        this.refreshTimer = null;
    }

    findClientConfig(clientroutingdata) {
        const allClients = dbConfig.StoredProcedure;

        for (const key of Object.keys(allClients)) {
            if (key === clientroutingdata) {
                return allClients[key];
            }
        }
        return null;
    }

    // Uses the shared pool of this client database (same pool as all API calls).
    getPool(clientroutingdata) {
        const clientCfg = this.findClientConfig(clientroutingdata);
        if (!clientCfg || !clientCfg.pgdbConfig) return null;
        return pgDb.getPool(clientCfg);
    }

    async load(clientroutingdata) {
        try {
            const pool = this.getPool(clientroutingdata);
            if (!pool) return;
            const result = await pool.query(
                `SELECT public.fn_entity_master_get(NULL) AS data`
            );
            const json = result.rows[0].data;
            const entities = json.data || json;
            const version = json.version || 1;
            const generatedAt = json.generated_at || new Date().toISOString();
            this.store.set(clientroutingdata, { entities, version, generatedAt });
            // console.log(`[EntityCache] Loaded "${clientroutingdata}" (v${version}, ${Object.keys(entities).length} entities)`);
        } catch (err) {
            // console.error(`[EntityCache] Load failed for "${clientroutingdata}"`, err);
        }
    };
    async preloadAllClients() {
        const allClients = dbConfig.StoredProcedure || {};
        const clientKeys = Object.keys(allClients);
        // console.log(`[EntityCache] Preloading ${clientKeys.length} client(s) on initial startup...`);
        for (const clientKey of clientKeys) {
            await this.load(clientKey);
        }
        // console.log(`[EntityCache] Initial client loading complete.`);
    };

    getAll(clientroutingdata) {
        const cache = this.store.get(clientroutingdata);
        if (!cache) return { version: 0, generated_at: null, entities: {} };
        return {
            version: cache.version,
            generated_at: cache.generatedAt,
            entities: cache.entities
        };
    }

    getEntity(clientroutingdata, identifiers) {
        const cache = this.store.get(clientroutingdata);
        if (!cache) return { version: 0, generated_at: null, entities: {} };
        if (!identifiers) {
            return this.getAll(clientroutingdata);
        }
        const lookupList = Array.isArray(identifiers) ? identifiers : [identifiers];
        const result = {};

        for (const key of Object.keys(cache.entities)) {
            const entityValue = cache.entities[key];
            for (const lookup of lookupList) {
                const lookupStr = String(lookup).toUpperCase().trim();
                const matchesCode = key.toUpperCase().trim() === lookupStr;
                const matchesId = entityValue && entityValue.entity_id !== undefined
                    ? String(entityValue.entity_id).toUpperCase().trim() === lookupStr
                    : false;

                if (matchesCode || matchesId) {
                    result[key] = entityValue;
                    break;
                }
            }
        }
        return {
            version: cache.version,
            generated_at: cache.generatedAt,
            entities: result
        };
    }

    async ensureLoaded(clientroutingdata) {
        if (!this.store.has(clientroutingdata)) {
            await this.load(clientroutingdata);
        }
    };

    async refreshAll() {
        const clients = Array.from(this.store.keys());
        for (const client of clients) {
            await this.load(client);
        }
    }

    /** Starts the interval */
    startAutoRefresh() {
        if (!CACHE_ENABLED) {
            return;
        }

        if (this.refreshTimer) return;

        this.refreshTimer = setInterval(() => {
            this.refreshAll();
        }, REFRESH_INTERVAL_MS);

    }

    stopAutoRefresh() {
        if (this.refreshTimer) {
            clearInterval(this.refreshTimer);
            this.refreshTimer = null;
        }
    }
}

module.exports = new EntityCache();