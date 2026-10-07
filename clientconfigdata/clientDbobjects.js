

module.exports = {
    /**secretKey */
    secretKey: 'wonderfullife~!@#$%^&*()_+',
    DEBUG: false,
    PORT: 3054,// server port
    ENV_TYPE: 'LIVE',//running environment

    ENV_API_URL: "http://localhost:3054",
    StoredProcedure: {//localhost server
        "localhost": {
            pgdbConfig: {
                host: "172.30.28.107",
                port: 5432,
                database: "hqms_dev_m",
                user: 'postgres',
                password: 'Suvarna$123',
                ENV_API_URL: "http://localhost:3054",
                imagesavetype: "path",//base64
                remainingfilesavetype: "path"//blob
            }
        },

    }
}

