

// let logger = require('./winston');

// let startHrTime,write,end,chunks,found;
// let elapsedHrTime,elapsedTimeInMs;
// let excludeRoutes = [];
// const _envvar = require('./envvar');

// function logResponseTime(req, res, next) {
    
//   if (_envvar.DEBUG) {console.log("***start logResponseTime****")};

//     startHrTime = process.hrtime();
//     write = res.write;
//     end = res.end;
//     chunks = [];
//     found = false;

//     if(excludeRoutes.length>0){
//       if (_envvar.DEBUG) {console.log("***there are routes to exclude****")};
//       found = excludeRoutes.find(function(indexItem){
//         return (req.path.toUpperCase().indexOf(indexItem.toUpperCase())==-1)?false:true;
//       });
//     }
    
//   if (!found) {
//     if (_envvar.DEBUG) { console.log("******** !found initiated*****") }
//     res.write = function newWrite(chunk) {
//       if (res.statusCode != 404) {
//         if (_envvar.DEBUG) { console.log("******** res.write initiated*****") }
//         chunks.push(chunk);
//         write.apply(res, arguments);
//       }
//       else{
//         write.apply(res, arguments);
//       }
//     };

//     //* res.end is used to quickly end the response without any data
//     res.end = function newEnd(chunk) {
//       if (_envvar.DEBUG) { console.log("******** res.end initiated*****") }
//       if (res.statusCode != 404) {
//         if (chunk) { chunks.push(chunk); }
//         end.apply(res, arguments);
//       }
//       else{
//         end.apply(res, arguments);
//         if (_envvar.DEBUG) { console.log("********"+ res.statusCode+"*****") }
//       }
//     };
  
//       res.on("finish", () => {
//         if (_envvar.DEBUG) {console.log("******** on finish initiated*****")}
//         elapsedHrTime = process.hrtime(startHrTime);
//         elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
//         logger('info', req, res,elapsedTimeInMs, typeof chunks[0]!="string"?Buffer.concat(chunks).toString('utf8'):"");   
//       });   
      
//       // process.on('unhandledRejection', (reason, callback) =>{
//       process.on('unhandledRejection', (err) =>{
//         if (_envvar.DEBUG) {console.log('******************Unhandled Rejection occured, need to fix this: ', err)};           
//         elapsedHrTime = process.hrtime(startHrTime);
//         elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
//         logger('fatal',req,res, elapsedTimeInMs, typeof chunks[0]!="string"?Buffer.concat(chunks).toString('utf8'):"",err);                     
//         process.exit(1) 
//       });

//       process.on('uncaughtException', (err) => {
//         if (_envvar.DEBUG) {console.error('******************UnCaught error occured, need to fix this: ', err)};           
//         elapsedHrTime = process.hrtime(startHrTime);
//         elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;
//         logger('fatal', req,res, elapsedTimeInMs, typeof chunks[0]!="string"?Buffer.concat(chunks).toString('utf8'):"",err);         
//         process.exit(2)
//       });

//     }
//     if (_envvar.DEBUG) {console.log("***end logResponseTime****")};
//     next();

// }

// module.exports = logResponseTime;
const logger = require('./winston');
const _envvar = require('./envvar');

let excludeRoutes = []; // Routes to skip logging
let listenersAttached = false;

// Attach global process error listeners once
if (!listenersAttached) {
  process.on('unhandledRejection', (err) => {
    console.error('Unhandled Rejection:', err);
    logger('FATAL', null, null, 0, '', err);
  });

  process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
    logger('FATAL', null, null, 0, '', err);
  });

  listenersAttached = true;
}

/**
 * Convert any type of chunk to Buffer safely
 */
function toBuffer(chunk, encoding) {
  try {
    if (Buffer.isBuffer(chunk)) return chunk;
    if (typeof chunk === 'string') return Buffer.from(chunk, encoding);
    if (typeof chunk === 'number') return Buffer.from(chunk.toString());
    if (Array.isArray(chunk) || typeof chunk === 'object') return Buffer.from(JSON.stringify(chunk));
    return Buffer.from(String(chunk));
  } catch (err) {
    return Buffer.from('[Unserializable Data]');
  }
}

/**
 * Express middleware to log response time and body safely
 */
function logResponseTime(req, res, next) {
  if (_envvar.DEBUG) console.log('***start logResponseTime***');

  const startHrTime = process.hrtime();
  const originalWrite = res.write.bind(res);
  const originalEnd = res.end.bind(res);
  const chunks = [];

  // Check if current route should be excluded
  const shouldExclude = excludeRoutes.some(route =>
    req.path.toUpperCase().includes(route.toUpperCase())
  );

  if (!shouldExclude) {

    // Override res.write
    res.write = (chunk, encoding, callback) => {
      if (res.statusCode !== 404 && chunk) chunks.push(toBuffer(chunk, encoding));
      return originalWrite(chunk, encoding, callback);
    };

    // Override res.end
    res.end = (chunk, encoding, callback) => {
      if (res.statusCode !== 404 && chunk) chunks.push(toBuffer(chunk, encoding));
      return originalEnd(chunk, encoding, callback);
    };

    // Log when response finishes
    res.on('finish', () => {
      const elapsedHrTime = process.hrtime(startHrTime);
      const elapsedTimeInMs = elapsedHrTime[0] * 1000 + elapsedHrTime[1] / 1e6;

      let responseBody = '';
      if (chunks.length > 0) {
        const buf = Buffer.concat(chunks);

        // Max size for logging
        const maxLogSize = 1024; // 1 KB
        if (buf.length > maxLogSize) {
          responseBody = buf.slice(0, maxLogSize).toString('base64') + '...[truncated]';
        } else {
          responseBody = buf.toString('base64'); // safely encode binary data
        }
      }

      logger('INFO', req, res, elapsedTimeInMs, responseBody);
    });
  }

  if (_envvar.DEBUG) console.log('***end logResponseTime***');
  next();
}

module.exports = logResponseTime;
