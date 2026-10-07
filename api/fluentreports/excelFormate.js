//*******************************************************************************//
//**********************API for Excel Dynamic Report-Master  ************************************//
//******************************************************************************/
var _ = require('lodash');
const express = require('express');
const path = require('path');
const excelData = require('./reportConfigFile')
var fs = require('fs');
const _lodash = require('lodash');
const appRoot = require('app-root-path');
const Excel = require('exceljs');
const dateFormat = require('dateformat');
const dataTypeCheck = require('./datatimesFormate');
// const _clientConfig = require('../../clientconfigdata/clientInfo');
const _clientConfig = require('../../clientconfigdata/clientDbobjects');
const _calseperatefilereport = require('./seperateexcelpdfreports');
const _envvar = require('../config/envvar')
let uploadRootDirdoc = 'AllDocumentsupload';
const app1 = express();
function autoFitColumn(worksheet) {
    const columnMax = {};
    worksheet.eachRow((row, rowNumber) => {
        let isFullyMergedRow = true;
        row.eachCell({ includeEmpty: true }, (cell => {
            if (!cell.isMerged) {
                isFullyMergedRow = false;
            }
        }));
        if (isFullyMergedRow) return;
        row.eachCell({ includeEmpty: true }, (cell, colNumber) => {

            if (cell.isMerged && cell.master.address !== cell.address) {
                return;
            }
            const value = cell.value ? cell.value.toString() : '';
            const length = value.length;
            if (!columnMax[colNumber]) {
                columnMax[colNumber] = length;
            } else {
                columnMax[colNumber] = Math.max(columnMax[colNumber], length)
            }
        })

    })

    Object.keys(columnMax).forEach(colNumber => {
        const colIndex = parseInt(colNumber, 10)
        worksheet.getColumn(colIndex).width = columnMax[colNumber] + 3;
    });
};
// function autoFitColumn(worksheet, startrow) {
//     const autoFitRowNumber = worksheet.getRow(startrow);
//     autoFitRowNumber.eachCell((cell, colNumber) => {
//         let maxLenght = 0;
//         worksheet.eachRow((row, rowNumber) => {
//             if (rowNumber < startrow) return;
//             const currentCell = row.getCell(colNumber);
//             if (currentCell.isMerged && currentCell.master.address !== currentCell.address) {
//                 return;
//             }
//             const value = currentCell.value?currentCell.value.toString():'';
//             maxLenght = Math.max(maxLenght,value.length);

//         })
//         worksheet.getColumn(colNumber).width = maxLenght+3
//     })
// };
async function generateXLSXReportAsync(response, dymData, reqHeadersParams, methodName, req, configResponce, reqHeadersParams1) {
    let clientroutingdata = req.headers.clienturl != '' ? req.headers.clienturl : '';
    var uploadFolder = path.join(__dirname, "../../../", clientroutingdata);
    app1.use(express.static(uploadFolder));
    let payloadparams = reqHeadersParams1
    let reportReadersRows = payloadparams.parReportHeaders;
    var workbook = new Excel.Workbook();
    var worksheet = workbook.addWorksheet(reportReadersRows.parRptScreenName, excelData.options);
    let currentdate1 = new Date().toISOString().substring(0, 10);
    let currentdate = currentdate1.replace(/-/g, "_");
    let reportsDownloadDir = "Reports";
    let exlReportD = `${appRoot}/${uploadRootDirdoc}`;
    let exlReportDf = `${appRoot}/${uploadRootDirdoc}/${clientroutingdata}`;
    let exlReportDirs = `${appRoot}/${uploadRootDirdoc}/${clientroutingdata}/${reportsDownloadDir}`;
    let exlReportDir = `${appRoot}/${uploadRootDirdoc}/${clientroutingdata}/${reportsDownloadDir}/${currentdate}`;
    let repData1 = _.filter(dymData.DatacolumnsList, { xlsx: true });
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
    const exlreportname = path.join(exlReportDir, reportReadersRows.parRptScreenName + '-' + Date.now() + '.xlsx');
    let replaceVar = typeof dymData.FilterRptColmunsData != null ? dymData['FilterRptColmunsData'] : '';
    let rownumber = 0;
    /** header dynamically print from config file and set header color*/
    let reportColumns = [];
    let dynamicreportColumns = [];
    let summary = [];
    let Deatiles = [];
    if (payloadparams.parSelectedColumns != "" && payloadparams.parSelectedColumns != null) {
        dynamicreportColumns = payloadparams.parSelectedColumns.split(_envvar.excelseperator);
        let dataset = []
        _.forEach(dymData.DatacolumnsList, (tt, inxtt) => {
            for (i of dynamicreportColumns) {
                if (i == tt.field) {
                    dataset.push(tt)
                }
            }
        });
        reportColumns = dataset.map(items => items.header);
        dynamicreportColumns = dataset.map(items => items.field);
    }
    else if (replaceVar.hasOwnProperty('LeaveDynamicHeaderPrint')) {
        if (payloadparams.parFlag == 'summary' || payloadparams.parFlag == 'history' || payloadparams.parFlag == 'detaile') {
            if (payloadparams.parFlag == 'summary') {
                summary = _.filter(repData1, { myFlagSummary: true });
                reportColumns = summary.map(items => items.header);
                dynamicreportColumns = summary.map(items => items.field);
            } else {
                Deatiles = _.filter(repData1, { myFlagDeatile: true });
                reportColumns = Deatiles.map(items => items.header);
                dynamicreportColumns = Deatiles.map(items => items.field);
            }
        } else {
            reportColumns = repData1.map(items => items.header);
            dynamicreportColumns = repData1.map(items => items.field);
        }
    } else {
        reportColumns = repData1.map(items => items.header);
        dynamicreportColumns = repData1.map(items => items.field);
    };
    let currentRow = worksheet.lastRow ? worksheet.lastRow.number + 1 : 1;
    let columnCount = reportColumns.length + 1;
    if (columnCount === 1 || columnCount === 2) {
        columnCount = columnCount + 6;
    };
    const mergeEndColumn = worksheet.getColumn(columnCount).letter;
    const calculateMaxLabelLength = (reportReadersRows, replaceVar) => {
        let maxLen = 12;
        let labels = [];
        labels.push("Report");
        labels.push("Print Date & Time");
        // labels.push(reportReadersRows.parDateHeaderTypeName || "Date");
        for (let key in reportReadersRows) {
            if (reportReadersRows.hasOwnProperty(key) && replaceVar[key]) {
                labels.push(replaceVar[key]);
            }
        }
        labels.forEach(label => {
            if (label.length > maxLen) {
                maxLen = label.length;
            }
        });
        return maxLen + 2;
    };
    const formatMergedField = (label, value, maxLen) => {
        let padding = maxLen - label.length;
        if (padding < 0) padding = 1;
        let spacing = ' '.repeat(padding).replace(/ /g, '\u00A0');
        return `${label}${spacing}: ${value}`;
    };
    const dynamicMaxLen = calculateMaxLabelLength(reportReadersRows, replaceVar);
    const MERGE_STYLE = {
        font: { size: 12, bold: true, name: 'Consolas' },
        alignment: { horizontal: 'left', vertical: 'middle' },
        fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF0F0F0' } },
        border: {
            top: { style: 'thin', color: { argb: 'FFA8A8A8' } },
            bottom: { style: 'thin', color: { argb: 'FFA8A8A8' } },
        }
    };
    let reportNameRow = worksheet.getRow(currentRow++);
    reportNameRow.getCell(1).value = formatMergedField("Report", reportReadersRows.parRptScreenName, dynamicMaxLen);
    worksheet.mergeCells(`A${reportNameRow.number}:${mergeEndColumn}${reportNameRow.number}`);
    Object.assign(reportNameRow.getCell(1), MERGE_STYLE);
    if (reportReadersRows.hasOwnProperty('parFromDt')) {
        let dateLabel = reportReadersRows.parDateHeaderTypeName || 'Date';
        let dateValue = reportReadersRows.parFromDt === reportReadersRows.parToDt
            ? reportReadersRows.parFromDt
            : `${reportReadersRows.parFromDt} - ${reportReadersRows.parToDt}`;

        let dateRow = worksheet.getRow(currentRow++);
        dateRow.getCell(1).value = formatMergedField(dateLabel, dateValue, dynamicMaxLen);
        worksheet.mergeCells(`A${dateRow.number}:${mergeEndColumn}${dateRow.number}`);
        Object.assign(dateRow.getCell(1), MERGE_STYLE);
    }
    if (replaceVar.hasOwnProperty('LeaveDynamicHeaderPrint')) {
        let dynReportsFilterHeaders = {};

        for (let key in reportReadersRows) {
            if (reportReadersRows.hasOwnProperty(key) && replaceVar[key]) {
                dynReportsFilterHeaders[replaceVar[key]] = reportReadersRows[key];
            }
        }
        const keys = Object.keys(dynReportsFilterHeaders);
        keys.forEach((key) => {
            let dynRow = worksheet.getRow(currentRow++);
            dynRow.getCell(1).value = formatMergedField(key, dynReportsFilterHeaders[key], dynamicMaxLen);
            worksheet.mergeCells(`A${dynRow.number}:${mergeEndColumn}${dynRow.number}`);
            Object.assign(dynRow.getCell(1), MERGE_STYLE);
        });
    };
    let printDateRow = worksheet.getRow(currentRow++);
    printDateRow.getCell(1).value = formatMergedField("Print Date & Time", dateFormat(Date.now(), "dd-mmm-yyyy hh:MM:ss TT"), dynamicMaxLen);
    worksheet.mergeCells(`A${printDateRow.number}:${mergeEndColumn}${printDateRow.number}`);
    Object.assign(printDateRow.getCell(1), MERGE_STYLE);

    let inputData = [];
    if (response.error_cd != 1) {
        if (methodName == "fnModuleList" && response.data.length > 0) {
            inputData = JSON.parse(JSON.stringify(response.data[0].module));
        } else {
            inputData = JSON.parse(JSON.stringify(response.data));
        }
    }
    if (repData1.length > 0) {
        if (Array.isArray(reportColumns)) {
            reportColumns.unshift('S.No.');
        }
    }
    let dynautofillstartrow = worksheet.lastRow ? worksheet.lastRow.number + 1 : 1;
    let as = worksheet.addRow(reportColumns);
    const headerCellAdress = as._cells.map((cell) => cell.address);
    headerIndex = 0
    while (headerIndex < reportColumns.length) {
        worksheet.getCell(`'${headerCellAdress[headerIndex]}'`).fill = excelData.headerColors
        worksheet.getCell(`'${headerCellAdress[headerIndex]}'`).font = excelData.headerColors
        worksheet.getCell(`'${headerCellAdress[headerIndex]}'`).alignment = { vertical: 'middle', horizontal: 'center' }
        headerIndex++;
    };
    /**END */

    function formatIndian(num) {
        if (num === null || num === undefined || isNaN(num)) return '';
        const rawString = num.toFixed(2);
        const isNegative = rawString.startsWith('-');
        let [integerPart, decimalPart] = rawString.replace('-', '').split('.');
        let lastThree = integerPart.substring(integerPart.length - 3);
        let rest = integerPart.substring(0, integerPart.length - 3);
        if (rest !== '') {
            rest = rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
        }
        let formatted = rest + (rest ? ',' : '') + lastThree + '.' + decimalPart;
        return (isNegative ? '-' : '') + formatted;
    };
/**Static Reports For seperate File */
    if (methodName == "fnCapaSummaryGet") {
        fnCapaSummaryGet = _calseperatefilereport.fnCapaSummaryGetXL(inputData, worksheet, rownumber,excelData);
    }

    let hasAmountColumns = false;
    let columnTotals = {};
    const amountColumnsMap = {}

    _.forEach(repData1, (colDef, index) => {
        const excelColumnIndex = index + 2;
        if (colDef.dataType === 'amount') {
            columnTotals[colDef.field] = 0
            amountColumnsMap[excelColumnIndex] = colDef.field
            hasAmountColumns = true;
        }
    });
    let persentage = [];
    if (repData1.length > 0) {
        _.forEach(inputData, (InputRec, InRecIndex) => {
            const serialNumber = InRecIndex + 1;
            var rowVal = [serialNumber];
            for (const i in InputRec) {
                if (typeof InputRec[i] === "string") {
                    InputRec[i] = InputRec[i].trim();
                }
            }
            _.forEach(repData1, (colDef, index2) => {
                const fieldName = colDef.field;
                let cellValue = ''
                if (colDef.percentage) {
                    cellValue = InputRec[fieldName] != null || undefined || '' ? InputRec[fieldName] + ' %' : '';

                } else {
                    cellValue = InputRec[fieldName];
                }

                if (colDef.dataType === 'amount') {
                    if (typeof cellValue === 'string') {
                        cellValue = cellValue.replace(/,/g, '');
                    }
                    let numericValue = parseFloat(cellValue || 0.00);
                    if (!isNaN(numericValue)) {
                        columnTotals[fieldName] += numericValue;
                    }
                    rowVal.push(numericValue);
                }
                else if (colDef.dataType === 'percentage') {
                    console.log(index2 + 1, 'index2');
                    let numericValue = parseFloat(cellValue || 0);
                    rowVal.push(numericValue);
                    persentage.push(index2 + 2)

                }
                else {
                    rowVal.push(cellValue);
                }

            });
            let row = worksheet.addRow(rowVal);
            persentage.forEach(colindex => {
                const cell = row.getCell(colindex);
                cell.numFmt = '0"%"';
                cell.alignment = { horizontal: 'right', vertical: 'middle' };
            })
            _.forEach(amountColumnsMap, (fieldName, colIndex) => {
                const cell = row.getCell(parseInt(colIndex));
                const rawValue = cell.value;
                cell.value = formatIndian(rawValue);
                cell.numFmt = '@';
                cell.alignment = { horizontal: 'right', vertical: 'middle' };
            });
            row.getCell(1).alignment = { horizontal: 'center', vertical: 'middle' };
            row.eachCell({ includeEmpty: true }, cell => {
                if (InRecIndex % 2 === 0) {
                    cell.fill = excelData.rowsColors;
                }
                const rawValue = cell.value;
                if (!isNaN(rawValue) && rawValue !== null && rawValue !== '') {
                    cell.alignment = { horizontal: 'right', vertical: 'middle' };
                }
            });
        });
    }
    /** END of data loop */
    const TOTAL_ROW_STYLE = {
        font: { bold: true, color: { argb: 'FFFFFFFF' } },
        fill: { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4174A9' } },
        border: { top: { style: 'thick' }, bottom: { style: 'thick' } }
    };
    if (hasAmountColumns) {
        const firstAmountColIndex = _.findKey(amountColumnsMap, () => true);
        const mergeEndIndex = firstAmountColIndex ? (parseInt(firstAmountColIndex) - 1) : (repData1.length + 1);
        const mergeStartLetter = worksheet.getColumn(1).letter;
        const mergeEndLetter = worksheet.getColumn(mergeEndIndex).letter;
        let totalRow = worksheet.addRow([]);
        _.forEach(repData1, (colDef, index) => {
            const excelColumnIndex = index + 2;
            const cell = totalRow.getCell(excelColumnIndex);
            if (excelColumnIndex === 2) {
                totalRow.getCell(1).value = 'Grand Total';
                Object.assign(totalRow.getCell(1), TOTAL_ROW_STYLE);
                totalRow.getCell(1).alignment = { horizontal: 'center', vertical: 'middle' };
            }
            if (colDef.dataType === 'amount') {
                const totalValue = columnTotals[colDef.field];
                cell.value = formatIndian(totalValue);
                cell.numFmt = '@';
                cell.alignment = { horizontal: 'right', vertical: 'middle' };
            } else {
                cell.value = null;
            }
            Object.assign(cell, TOTAL_ROW_STYLE);
        });
        worksheet.mergeCells(`${mergeStartLetter}${totalRow.number}:${mergeEndLetter}${totalRow.number}`);
    }
    /**END */
    /**auto fit cell data start */
    worksheet.addRow([]);
    // autoFitColumn(worksheet, dynautofillstartrow)
    autoFitColumn(worksheet)
    worksheet.columns.forEach(reportColumns => {
        reportColumns.border = excelData.reportHeader;
    });
    worksheet.columns.forEach((col) => {
        col.style.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' }, };
    });
    /**auto fit cell data end */

    await workbook.xlsx.writeFile(exlreportname)
        .then(() => {
            console.log('succes')
        })
        .catch(error => {
            console.log('error', error)
        });

    if (_clientConfig.DEBUG) { console.log(`${payloadparams.parRptScreenName}` + ' ' + ' Report exl report generated') };
    return exlreportname;
}
module.exports = {
    excelreport: (response, dymData, reqHeadersParams, methodName, req, configResponce, reqHeadersParams1) => generateXLSXReportAsync(response, dymData, reqHeadersParams, methodName, req, configResponce, reqHeadersParams1)
};