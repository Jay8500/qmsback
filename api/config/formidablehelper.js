const fs = require("fs");
const path = require("path");
const appRoot = require("app-root-path");

function sanitizeClientName(name) {
    return (name || "DefaultClient").toString().trim().replace(/\s+/g, "_");
}

function getDateFolder() {
    const d = new Date();
    const mm = `${d.getMonth() + 1}`.padStart(2, "0");
    const dd = `${d.getDate()}`.padStart(2, "0");
    const yyyy = d.getFullYear();
    return `${mm}_${dd}_${yyyy}`;
}

function ensureFolder(folder) {
    if (!fs.existsSync(folder)) {
        fs.mkdirSync(folder, { recursive: true });
    }
}

function toBase64(filepath) {
    return fs.readFileSync(filepath).toString("base64");
}

function ext(name) {
    return path.extname(name).replace(".", "").toLowerCase();
}

// ─────────────────────────────────────────────────────────────────────────────
// FILE TYPE DETECTION — all common types
// ─────────────────────────────────────────────────────────────────────────────
const FILE_TYPES = {
    image: [
        "jpg", "jpeg", "png", "gif", "bmp", "webp",
        "tiff", "tif", "svg", "ico", "heic", "heif",
        "avif", "jfif", "pjpeg", "pjp", "raw", "cr2",
        "nef", "orf", "sr2"
    ],
    video: [
        "mp4", "mkv", "avi", "mov", "wmv", "flv",
        "webm", "mpeg", "mpg", "3gp", "3g2", "m4v",
        "ts", "mts", "m2ts", "vob", "ogv", "rm", "rmvb"
    ],
    audio: [
        "mp3", "wav", "aac", "flac", "ogg", "m4a",
        "wma", "aiff", "aif", "opus", "amr", "mid", "midi"
    ],
    pdf: ["pdf"],
    excel: [
        "xls", "xlsx", "xlsm", "xlsb",
        "xltx", "xltm", "xlam", "ods"
    ],
    word: [
        "doc", "docx", "odt", "rtf", "txt", "wps"
    ],
    presentation: [
        "ppt", "pptx", "pps", "ppsx", "odp", "key"
    ],
    csv: ["csv", "tsv"],
    archive: [
        "zip", "rar", "7z", "tar", "gz", "bz2",
        "xz", "tgz"
    ],
    code: [
        "js", "ts", "html", "css", "json", "xml",
        "py", "java", "c", "cpp", "cs", "php",
        "rb", "go", "rs", "swift", "kt", "sql"
    ],
    font: ["ttf", "otf", "woff", "woff2", "eot"],
    other: []
};

function getFileCategory(extension) {
    for (const [category, extensions] of Object.entries(FILE_TYPES)) {
        if (extensions.includes(extension)) return category;
    }
    return "other";
}

function getTypeFolder(extension) {
    const folderMap = {
        image: "images",
        video: "videos",
        audio: "audio",
        pdf: "pdf",
        excel: "excel",
        word: "word",
        presentation: "presentations",
        csv: "csv",
        archive: "archives",
        code: "code",
        font: "fonts",
        other: "other"
    };
    return folderMap[getFileCategory(extension)] || "other";
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN ENTRY — detects base64 (mobile) or multipart (browser / Angular)
// ─────────────────────────────────────────────────────────────────────────────
function autoProcessUploads(body, files, clientName, imageSaveType = "PATH", remainingType = "PATH") {
    const uploadedFiles = [];
    Object.values(files || {}).forEach(f => {
        if (Array.isArray(f)) uploadedFiles.push(...f);
        else uploadedFiles.push(f);
    });
    const clientFolder = path.join(appRoot.path, "AllDocumentsupload", sanitizeClientName(clientName));
    ensureFolder(clientFolder);
    const ctx = { clientFolder, imageSaveType, remainingType };
    // Mobile app sends data_trans_type: 'base64'
    const isBase64Mode = body && body.p_input && body.p_input[0] && body.p_input[0].data_trans_type && body.p_input[0].data_trans_type.toString().toLowerCase() === "base64";
    if (isBase64Mode) {
        recursiveHandleBase64(body, ctx);
    } else {
        recursiveHandle(body, uploadedFiles, ctx);
    }

    return body;
}

// ─────────────────────────────────────────────────────────────────────────────
// BROWSER / ANGULAR — formidable multipart files
// ─────────────────────────────────────────────────────────────────────────────
function recursiveHandle(obj, uploadedFiles, ctx) {
    const visited = new WeakSet();
    const stack = [obj];

    while (stack.length) {
        const cur = stack.pop();
        if (!cur || typeof cur !== "object") continue;
        if (visited.has(cur)) continue;
        visited.add(cur);

        if (!Array.isArray(cur) && cur.upload_file_name) {
            handleFile(cur, uploadedFiles, ctx);
        }

        if (Array.isArray(cur)) {
            cur.forEach(v => { if (v && typeof v === "object") stack.push(v); });
        } else {
            Object.values(cur).forEach(v => { if (v && typeof v === "object") stack.push(v); });
        }
    }
}

function handleFile(fileObj, uploadedFiles, ctx) {
    if (!fileObj || !fileObj.upload_file_name) return;
    const tragname = fileObj.upload_file_name.trim().toLowerCase();
    const match = uploadedFiles.find(f => f.originalFilename ?.trim().toLowerCase() === tragname || f.name ?.trim().toLowerCase() === tragname
    );
    if (!match) return;

    const filename = match.originalFilename || match.name;
    const filepath = match.filepath || match.path;
    const extension = ext(filename);
    const savePath = buildSavePath(ctx.clientFolder, extension, filename);

    saveFileObj(fileObj, filepath, savePath, extension, ctx, false);
}

// ─────────────────────────────────────────────────────────────────────────────
// MOBILE — base64 encoded files
// ─────────────────────────────────────────────────────────────────────────────
function recursiveHandleBase64(obj, ctx) {
    const visited = new WeakSet();
    const stack = [obj];

    while (stack.length) {
        const cur = stack.pop();
        if (!cur || typeof cur !== "object") continue;
        if (visited.has(cur)) continue;
        visited.add(cur);

        if (!Array.isArray(cur) && cur.upload_file_name && cur.file_data) {
            handleFileBase64(cur, ctx);
        }

        if (Array.isArray(cur)) {
            cur.forEach(v => { if (v && typeof v === "object") stack.push(v); });
        } else {
            Object.values(cur).forEach(v => { if (v && typeof v === "object") stack.push(v); });
        }
    }
}

function handleFileBase64(fileObj, ctx) {
    if (!fileObj || !fileObj.upload_file_name || !fileObj.file_data) return;

    const filename = fileObj.upload_file_name.trim();
    const extension = ext(filename);
    const base64Clean = fileObj.file_data.replace(/^data:[^;]+;base64,/, "");
    const savePath = buildSavePath(ctx.clientFolder, extension, filename);

    saveFileObj(fileObj, base64Clean, savePath, extension, ctx, true);
    fileObj.file_data = undefined; // remove raw base64 from body
}

// ─────────────────────────────────────────────────────────────────────────────
// SHARED — build path, save logic
// ─────────────────────────────────────────────────────────────────────────────
function buildSavePath(clientFolder, extension, filename) {
    const fullFolderPath = path.join(clientFolder, getTypeFolder(extension), getDateFolder());
    ensureFolder(fullFolderPath);
    return path.join(fullFolderPath, `${Date.now()}_${filename}`);
}

// source = filepath string (browser) | base64 string (mobile)
function saveFileObj(fileObj, source, savePath, extension, ctx, isBase64Mode) {
    const category = getFileCategory(extension);

    if (category === "image") {
        if (ctx.imageSaveType.toUpperCase() === "BASE64") {
            fileObj.storage_path = isBase64Mode ? source : toBase64(source);
            fileObj.image_storage_location = "BLOB Database";
        } else {
            writeToDisk(source, savePath, isBase64Mode);
            fileObj.storage_path = savePath;
            fileObj.image_storage_location = "OS";
        }
        fileObj.image_type = extension;
        return;
    }

    // All non-image types (video, audio, pdf, excel, word, presentation,
    //                       csv, archive, code, font, other)
    const fileTypeMap = {
        video: "video",
        audio: "audio",
        pdf: "pdf",
        excel: "excel",
        word: "word",
        presentation: "presentation",
        csv: "csv",
        archive: "archive",
        code: "code",
        font: "font",
        other: extension   // unknown → raw extension
    };

    if (ctx.remainingType.toUpperCase() === "BLOB") {
        fileObj.file_folder_name = isBase64Mode ? source : toBase64(source);
        fileObj.file_storage_location = "BLOB Database";
    } else {
        writeToDisk(source, savePath, isBase64Mode);
        fileObj.storage_path = savePath;
        fileObj.file_storage_location = "OS";
    }

    fileObj.file_type = fileTypeMap[category] || extension;
    fileObj.file_ext = extension;
}

function writeToDisk(source, savePath, isBase64Mode) {
    if (isBase64Mode) {
        fs.writeFileSync(savePath, Buffer.from(source, "base64"));
    } else {
        fs.copyFileSync(source, savePath);
    }
}

module.exports = { autoProcessUploads };
