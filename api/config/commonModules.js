// Central place for shared libraries, configuration and the Express app.
// Only what the API code actually uses is exported.

const express = require('express');
const bodyParser = require('body-parser');
const _ = require('lodash');
const fs = require('fs');
const path = require('path');
const formidable = require('formidable');
const CryptoJS = require('crypto-js');
const dateFormat = require('dateformat');
const appRoot = require('app-root-path');

// Client & DB config
const _clientConfig = require('../../clientconfigdata/clientDbobjects');
const clientRoutingFile = _clientConfig;
const _dbSP = require('../config/dbSP');
const _pgdb = require('../dbConnect/pgDb');

const jsonParser = bodyParser.json({ limit: '5gb' });

// The single Express app (middleware and routes are added in api/routes/routes.js)
const app = express();

// Parses multipart/form-data (file uploads) into req.body / req.files; other requests pass through.
function formidableMiddleware(options = {}) {
    const defaultOptions = {
        keepExtensions: true,
        allowEmptyFiles: true,
        maxFileSize: 1024 * 1024 * 1024 * 1024, // 1TB
        multiples: true,
        ...options
    };
    return (req, res, next) => {
        if (!(req.headers['content-type'] || '').includes('multipart/form-data')) {
            return next();
        }
        const form = new formidable.IncomingForm(defaultOptions);
        form.parse(req, (err, fields, files) => {
            if (err) console.log('Form parsing error', err);
            req.body = fields;
            req.files = files;
            next();
        });
    };
}

module.exports = {
    express,
    bodyParser,
    jsonParser,
    _,
    fs,
    path,
    formidable,
    CryptoJS,
    dateFormat,
    appRoot,
    _clientConfig,
    clientRoutingFile,
    _dbSP,
    _pgdb,
    formidableMiddleware,
    app
};
