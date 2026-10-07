//*******************************************************************************//
//**********************API for PDF and EXCEL Reports  ************************************//

var _ = require('lodash');
const _dbSP = require("../config/dbSP");
var _pgdb = require("../dbConnect/pgDb");
const excelReport = require('./excelFormate');
const configFileData = require('./reportConfigFile');
const pdfFormat = require('./pdfFormate');
const csvFormate = require('./csvFormate');

async function commonFluentReportStructure(configResponce, req, res, reqHeadersParams, methodName) {
  let reqHeadersParams1 = reqHeadersParams.p_input;
  let apiResponse = { "status": 200, "message": "", data: [] };
  try {
    let checkDb = (configFileData.reports[methodName] && typeof configFileData.reports[methodName] === 'object')
    if (checkDb) {
      let dbResponse;
      const dbMethod = configFileData.reports[methodName].dbMethod != null ? configFileData.reports[methodName].dbMethod : reqHeadersParams1.excelupload;
      await _pgdb['dataBaseQry']()(configResponce, _dbSP.StoredProcedure[dbMethod], reqHeadersParams, 'processRequest', dbMethod).then((DBdataResponse) => {
        dbResponse = DBdataResponse;
      });
      /**Org deatiles */
      let orgParams = { "parFlag": "e", "parOrganizationId": reqHeadersParams1.orgId, "parAdvanceSearch": null, "parSessionId": '' };
      orgParams.parSessionId = reqHeadersParams1.parSessionId;
      let orgdataresponce;
      await _pgdb['dataBaseQry']()(configResponce, _dbSP.StoredProcedure['getHrOrganizationJs'], orgParams, 'processRequest').then((orgResponce) => {
        orgdataresponce = orgResponce;
      });
      // console.log('123',methodName,dbResponse);


      let output;
      switch (reqHeadersParams1.parExportTo) {
        case "Xlsx":
          output = await excelReport.excelreport(dbResponse, configFileData.reports[methodName], reqHeadersParams, methodName, req, configResponce,reqHeadersParams1);
          apiResponse = { status: 200, "message": "SUCCESS", data: output };
          break;
        case "Pdf":
          output = await pdfFormat.PDFreport(dbResponse, configFileData.reports[methodName], reqHeadersParams, methodName, req, configResponce,reqHeadersParams1);
          apiResponse = { status: 200, "message": "SUCCESS", data: output };
          break;
        case "Csv":
          output = await csvFormate.CSVreport(dbResponse, configFileData.reports[methodName], reqHeadersParams, methodName, req, configResponce,reqHeadersParams1);
          apiResponse = { status: 200, "message": "SUCCESS", data: output };
          break;
        default:
          apiResponse = { status: 404, "message": "Fail", data: [] };
          break;
      }
    } else {
      apiResponse = { status: 404, "message": `Method Not Found ${methodName}`, data: apiResponse };
    }
  } catch (error) {
    console.log(error, 'error');

    apiResponse = { status: 501, "message": "FAIL", data: error };
  }
  console.log(apiResponse, 'apiResponseapiResponse');

  return apiResponse;
}
module.exports = {
  reportsResponces: (configResponce, req, res, reqHeadersParams, methodName) => commonFluentReportStructure(configResponce, req, res, reqHeadersParams, methodName)
};
