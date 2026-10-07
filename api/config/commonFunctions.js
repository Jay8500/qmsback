// src/common/commonFunctions.js
// Helper functions that use items from commonModules

const CM = require('./commonModules'); // relative to same folder
const _ = CM._;
const dateFormat = CM.dateFormat;
const CryptoJS = CM.CryptoJS;
const clientRoutingFile = CM.clientRoutingFile; // may be used by pgadminOption

// -------------------- Formidable options & middleware -------------------------
const formidableOptions = {
  keepExtensions: true,
  allowEmptyFiles: true,
  // 1 TB max to match your previous setting; adjust if you want smaller
  maxFileSize: 1024 * 1024 * 1024 * 1024,
  multiples: true,
};

function formidableMiddleware() {
  return (req, res, next) => {
    if (!req.headers['content-type'].includes('multipart/form-data')) {
      return next();
    }
    const form = new CM.formidable.IncomingForm(formidableOptions);
    form.parse(req, (err, fields, files) => {
      if (err) {
       return next(err);
      }
      req.fields = fields;
      req.files = files; 
      req.body = req.body || {};
      if(fields && fields.data){
        req.body.data = Array.isArray(fields.data) ? fields.data[0] : fields.data;
      }
      next();
    });
  };
}

// -------------------- Crypto (AES) encrypt / decrypt --------------------------
function renderCrypto(type, data) {
  const secretKey = CM._clientConfig && CM._clientConfig.secretKey ? CM._clientConfig.secretKey : '';
  if (type === 'encrypt') {
    try {
      return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
    } catch (e) {
      console.error('renderCrypto.encrypt error:', e);
      throw e;
    }
  } else if (type === 'decrypt') {
    try {
       if(Array.isArray(data)){
         data = data[0];
       }
       if(typeof data === 'object' && data !== null && data.data){
         data = Array.isArray(data.data) ? data.data[0] : data.data;
       }
       if(!data || typeof data !== 'string'){
         throw new Error("Encrypted data is missing or not a string");
       }
       const bytes = CryptoJS.AES.decrypt(data,secretKey);
       const decryptedString =  bytes.toString(CryptoJS.enc.Utf8);
       if(!decryptedString){
         throw new Error("Decryption failed or returned an empty string");
       }
       return JSON.parse(decryptedString);
    } catch (e) {
      console.error('renderCrypto.decrypt error:', e);
      throw e;
    }
  } else {
    console.error('renderCrypto.decrypt error:', e);
    throw e

  }
}

// -------------------- pgadminOption (resolve client routing) -------------------
function pgadminOption(clientroutingdata) {
  if (!clientroutingdata) return null;
  // clientRoutingFile is an array (based on your original). We return the matching entry
  let responseData = null;
  _.forEach(clientRoutingFile, (row) => {
    if (row && Object.prototype.hasOwnProperty.call(row, clientroutingdata)) {
      responseData = row[clientroutingdata];
    }
  });
  return responseData;
}

// -------------------- date formatting helper ----------------------------------
const dateRegex = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(.\d+)?(Z|([+-]\d{2}:\d{2}))?)?$|^\d{2}\/\d{2}\/\d{4}$/;

function formatDateString(value, key) {
  try {
    if (!value) return '';
    if (dateRegex.test(value)) {
      return dateFormat(value, 'dd-mmm-yyyy');
    } else {
      if (key === 'current_date') {
        return dateFormat(Date.now(), 'dd-mmm-yyyy') || '';
      }
      if (key === 'current_timestamp') {
        return dateFormat(Date.now(), 'dd-mmm-yyyy hh:MM:ss TT') || '';
      }
      return value || '';
    }
  } catch (err) {
    console.error('formatDateString error:', err);
    return value || '';
  }
}
function recursiveHandle(data, baseurlsss) {
  const stack = [data];
  while (stack.length) {
    const cur = stack.pop();
    if (!cur || typeof cur !== "object") continue;
    const localpath = cur.image_file_folder_name || cur.image_file_name;
    if (localpath) {
      if (CM.fs.existsSync(localpath)) {
        let urlpath = localpath.replace(/\\/g, "/");
        let uploadPath = CM.path.join(CM.appRoot.path, 'Uploads').replace(/\\/g, "/");
        if (urlpath.startsWith(uploadPath)) {
          urlpath = urlpath.slice(uploadPath.length);
        }
        if (!urlpath.startsWith("/"))
          urlpath = "/" + urlpath
        cur.fileORimageURL = `${baseurlsss}${urlpath}`
      } else {
        cur.fileORimageURL = null
      }
    }
    if (Array.isArray(cur)) {
      stack.push(...cur)
    } else {
      Object.values(cur).forEach(v => stack.push(v));
    }
  }
  return data
}
const UPLOAD_FOLDERS = {
  pdf: 'pdf',
  xlsx: 'xlsx',
  doc: 'doc',
  docx: 'doc',
  png: 'png',
  jpg: 'jpg',
  jpeg: 'jpg',
  default: 'others',
};

/**
 * Save uploaded file to folder based on client, module, current date, and extension.
 * @param {string} fileName - original uploaded file name
 * @param {string} clientName - client identifier
 * @param {string} moduleName - module name
 * @returns {string|null} relative URL for DB
 */


const path = CM.path;
const appRoot = CM.appRoot
function processFile(fileName, clientName = 'defaultClient', moduleName = 'defaultModule') {
  if (!fileName) return null;

  // Determine file extension
  const ext = (path.extname(fileName) || '').replace('.', '').toLowerCase();
  const folderName = UPLOAD_FOLDERS[ext] || UPLOAD_FOLDERS.default;

  // Use current date: YYYYMMDD
  const currentDate = new Date();
  const dateFolder = `${currentDate.getFullYear()}${String(currentDate.getMonth() + 1).padStart(2, '0')}${String(currentDate.getDate()).padStart(2, '0')}`;

  // Final folder: /Uploads/{client}/{module}/{YYYYMMDD}/{ext}/
  const folder = path.join(appRoot, 'Uploads', clientName, moduleName, dateFolder, folderName);

  // Ensure folder exists
  if (!CM.fs.existsSync(folder)) CM.fs.mkdirSync(folder, { recursive: true });

  // Unique file name
  const newFileName = `${Date.now()}_${fileName}`;
  const srcPath = path.join(appRoot, 'TempUploads', fileName); // temp folder
  const destPath = path.join(folder, newFileName);

  // Move file
  if (CM.fs.existsSync(srcPath)) {
    CM.fs.renameSync(srcPath, destPath);
  } else {
    console.warn(`File not found in temp folder: ${srcPath}`);
    return null;
  }

  // Return relative URL for DB
  const relativeUrl = path.relative(appRoot, destPath).replace(/\\/g, '/');
  return `/${relativeUrl}`;
}

/**
 * Recursively process JSON object and save images in `image` arrays
 * Updates `image_file_folder_name` field automatically
 */
function processJsonFiles(obj, clientName = 'defaultClient', moduleName = 'defaultModule') {
  if (Array.isArray(obj)) {
    obj.forEach((item) => processJsonFiles(item, clientName, moduleName));
  } else if (typeof obj === 'object' && obj !== null) {
    Object.keys(obj).forEach((key) => {
      if (key.toLowerCase() === 'image' && Array.isArray(obj[key])) {
        obj[key].forEach((imgObj) => {
          if (imgObj.uploadFileName) {
            const savedUrl = processFile(imgObj.uploadFileName, clientName, moduleName);
            imgObj.image_file_folder_name = savedUrl || '';
          }
        });
      } else {
        processJsonFiles(obj[key], clientName, moduleName); // recursive
      }
    });
  }
}


// -------------------- Export helpers ------------------------------------------
module.exports = {
  formidableOptions,
  formidableMiddleware,
  renderCrypto,
  pgadminOption,
  dateRegex,
  formatDateString,
  processFile,
  processJsonFiles,
  recursiveHandle
};
