//*******************************************************************************//
//**********************API for Excel Dynamic Report-Master  ************************************//
//******************************************************************************/
var _ = require('lodash');
const path = require('path');
const express = require('express');
const app1 = express();
var fs = require('fs');
const appRoot = require('app-root-path');
const dataTypeCheck = require('./datatimesFormate');
const csv = require('fast-csv');
const { Console } = require('console');
let uploadRootDirdoc = 'AllDocumentsupload';
async function generateXLSXReportAsync(response, dymData, reqHeadersParams, methodName, req, configResponce,reqHeadersParams1) {
    let clientroutingdata = req.headers.clienturl != '' ? req.headers.clienturl : '';
    var uploadFolder = path.join(__dirname, "../../../", clientroutingdata);
    app1.use(express.static(uploadFolder));
    const csvStrem = csv.format({ headers: true });
   
    let reportReadersRows = reqHeadersParams1.parReportHeaders;
    let currentdate1 = new Date().toISOString().substring(0, 10);
    let currentdate = currentdate1.replace(/-/g, "_");
    let repData1 = _.filter(dymData.DatacolumnsList, { csv: true });
    const dynamicreportColumns = repData1.map(items => items.field);
    let reportColumns = repData1.map(items => items.header);
    let reportsDownloadDir = "Reports";
    let exlReportD = `${appRoot}/${uploadRootDirdoc}`;
    let exlReportDf = `${appRoot}/${uploadRootDirdoc}/${clientroutingdata}`;
    let exlReportDirs = `${appRoot}/${uploadRootDirdoc}/${clientroutingdata}/${reportsDownloadDir}`;
    let exlReportDir = `${appRoot}/${uploadRootDirdoc}/${clientroutingdata}/${reportsDownloadDir}/${currentdate}`;
    if (!fs.existsSync(exlReportD)) {
        fs.mkdirSync(exlReportD)
    };
    if (!fs.existsSync(exlReportDf)) {
        fs.mkdirSync(exlReportDf)
    };
    if (!fs.existsSync(exlReportDirs)) {
        fs.mkdirSync(exlReportDirs)
    };
    if (!fs.existsSync(exlReportDir)) {
        fs.mkdirSync(exlReportDir)
    };
    
    const exlreportname = path.join(exlReportDir, reportReadersRows.parRptScreenName + '-' + Date.now() + '.csv');
    let inputData = [];

    if (response.error_cd != 1) {
        inputData = JSON.parse(JSON.stringify(response.data));
    }
    let rowval2 = [];
    _.forEach(inputData, (InputRec, InRecIndex) => { // 473
        let rowVal = {};
        /**double spaces removed */
        for (const i in InputRec) {
            if (typeof InputRec[i] === "string") {
                InputRec[i] = InputRec[i].trim();
            }
        }
        inputDataKeys = Object.keys(inputData[0]);
        inputDataValues = Object.values(inputData[InRecIndex]);
        _.forEach(dynamicreportColumns, (selCol, selIndex) => {
            let temp1 = inputDataKeys[selIndex]
            let hedFeeHeadmatched = inputDataKeys.includes(selCol);
            if (hedFeeHeadmatched) {
                if (isNaN(temp1) == false) {
                    temp1 = parseFloat(InputRec[selCol] != null ? InputRec[selCol] : 0.00);
                    rowVal[selCol] = temp1;
                    //  rowVal.push(temp1)
                } else {
                    if (InputRec[selCol] != null) {
                        InputRec[selCol] = isFinite(InputRec[selCol]) == true ? ((InputRec[selCol] == null || InputRec[selCol] == "") ? InputRec[selCol] : parseFloat(InputRec[selCol])) : InputRec[selCol];
                        // rowVal.push(InputRec[selCol]);
                        rowVal[selCol] = InputRec[selCol];
                    } else {
                        rowVal[selCol] = InputRec[selCol];
                    }
                }
            };
        });
        rowval2.push(rowVal)
    });

    // /**END */
    var ws = fs.createWriteStream(exlreportname);
    csvStrem.pipe(ws)
    csvStrem.write(reportColumns);
    rowval2.forEach(obj => {
        const keys = Object.keys(obj);
        const values = keys.map(key => obj[key]);
        csvStrem.write(values);
    })
    csvStrem.end();
    csvStrem.on('finish', () => {
        console.log('CSV File has been written successfully.');
    })
    csvStrem.on('error', (err) => {
        console.log('Error writing CSV file : ', err);
    })
    return exlreportname
}
module.exports = {
    CSVreport: (response, dymData, reqHeadersParams, methodName, req, configResponce,reqHeadersParams1) => generateXLSXReportAsync(response, dymData, reqHeadersParams, methodName, req, configResponce,reqHeadersParams1)
};

