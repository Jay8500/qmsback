module.exports = {

  uploadFileyTpesAllowed: /pdf|PDF|rar|jpeg|jpg|png|xlsx|xlsb||docx|txt/,    // Allowed file Type for File upload , Multer                                           // Max file size allowed for Upload, Multer

  //**************************errorfile, log file for client Location *********/    
  // Application error , Errorfile folder
  logFileFolder: 'errorlogs',
  appErrorFileFolder: 'errorfile',
  errorFileName: 'hqms-errorFile',
  errorFileExt: '.log',
  appErrorFile: '',
  excelseperator: '^',


  //**************************Application exception, log files ******** */    
  appExceptionLogFileFolder: 'exceptions',
  exceptionFileName: 'hqms-exceptions',
  appExceptionLogFile: '',

 
}; 
