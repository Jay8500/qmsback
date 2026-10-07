const winston = require('winston');
const _envvar = require('./envvar');
require('winston-daily-rotate-file');
const appRoot = require('app-root-path');

/* ------------------------------------------------------
   SAFE SANITIZER — Converts any type of data safely
------------------------------------------------------- */
function safeData(data) {
  try {
    if (Buffer.isBuffer(data)) {
      return data.toString("base64");  // Convert blob/buffer
    }

    if (typeof data === "function") return "[Function]";
    if (typeof data === "undefined") return "[Undefined]";
    if (data instanceof Date) return data.toISOString();

    // Fix circular JSON + BigInt
    return JSON.parse(JSON.stringify(data, (key, value) => {
      if (typeof value === "bigint") return value.toString();
      return value;
    }));
  } catch (err) {
    return "[Unserializable Data]";
  }
}

/* ------------------------------------------------------
   LOG FORMAT
------------------------------------------------------- */
const logFormat = winston.format.combine(
  winston.format.timestamp(),
  winston.format.json()
);

/* ------------------------------------------------------
   LOG FILE ROTATION
------------------------------------------------------- */
let transport = new (winston.transports.DailyRotateFile)({
  filename: 'logs/hqms-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '10m',
  maxFiles: '30d',
  format: logFormat
});

/* ------------------------------------------------------
   EXCEPTION HANDLER
------------------------------------------------------- */
let excephandler = new (winston.transports.DailyRotateFile)({
  filename: 'logs/exceptions/hqms-exceptions-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  zippedArchive: true,
  maxSize: '10m',
  maxFiles: '30d',
  handleExceptions: true,
  level: 'error',
  format: logFormat
});

/* ------------------------------------------------------
   LOG ROTATION EVENTS
------------------------------------------------------- */
transport.on('new', function (newFilename) {
  if (_envvar.DEBUG) console.log("New log file:", newFilename);
  _envvar.appExceptionLogFile = `${appRoot}/${newFilename}`;
});

transport.on('rotate', function (oldFilename, newFilename) {
  if (_envvar.DEBUG) console.log("Rotated file:", oldFilename, "→", newFilename);
});

transport.on('archive', function (oldFilename) {
  if (_envvar.DEBUG) console.log("Archived file:", oldFilename);
});

/* ------------------------------------------------------
   LOGGER INSTANCE
------------------------------------------------------- */
const transports = [transport];
if (_envvar.DEBUG) {
  transports.push(new winston.transports.Console({ format: winston.format.simple() }));
}

const storeLogger = winston.createLogger({
  level: 'info',
  defaultMeta: { service: 'HQMS-Service' },
  transports,
  exceptionHandlers: [excephandler],
  exitOnError: false
});

/* ------------------------------------------------------
   LOGGER FUNCTION (USE IN PROJECT)
------------------------------------------------------- */
function logger(type, request, response, executionTime, message, error) {
  const _req = request ? {
    application: safeData(request.app),
    baseUrl: safeData(request.baseUrl),
    body: safeData(request.body),
    cookies: safeData(request.cookies),
    fresh: safeData(request.fresh),
    hostname: safeData(request.hostname),
    ip: safeData(request.ip),
    ips: safeData(request.ips),
    originalUrl: safeData(request.originalUrl),
    params: safeData(request.params),
    path: safeData(request.path),
    protocol: safeData(request.protocol),
    query: safeData(request.query),
    secure: safeData(request.secure),
    signedCookies: safeData(request.signedCookies),
    subdomains: safeData(request.subdomains),
    xhr: safeData(request.xhr),
    executionTime: executionTime || 0
  } : {};

  const _res = response ? {
    statusCode: response.statusCode,
    statusMessage: response.statusMessage,
    output: safeData(message),
    errorMessage: error ? safeData(error.message) : ""
  } : {};

  if (type.toUpperCase() === "FATAL") {
    storeLogger.error({ request: _req, response: _res });
  } else {
    storeLogger.info({ request: _req, response: _res });
  }
}

module.exports = logger;
