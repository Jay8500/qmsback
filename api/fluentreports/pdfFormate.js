

//********************** fluentreports common pdf report ************************************//
//******************************************************************************/
const express = require('express');
const app1 = express();
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json({ limit: '200mb' });
var _ = require('lodash');
var _lodash = require('lodash');
const Report = require('fluentreports').Report;
const path = require('path');
var fs = require('fs');
const appRoot = require('app-root-path');
const dateFormat = require('dateformat');
const reportconfig = require('./reportConfigFile');
const dataTypeCheck = require('./datatimesFormate');
// const _clientConfig = require('../../clientconfigdata/clientInfo');
const _clientConfig = require('../../clientconfigdata/clientDbobjects');
let now = new Date(); let uploadRootDirdoc = 'AllDocumentsupload';
const _calseperatefilereport = require('./seperateexcelpdfreports');

const _envvar = require('../config/envvar')

// Indian number format helper (works without ICU)
function formatIndianNumber(num) {
    if (num == null || num === "" || isNaN(num)) return "";
    num = parseFloat(num);
    const parts = num.toFixed(2).split(".");
    let integerPart = parts[0];
    const lastThree = integerPart.slice(-3);
    const otherNumbers = integerPart.slice(0, -3);
    const formatted =
        (otherNumbers ? otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + "," : "") +
        lastThree;
    return formatted + "." + parts[1];
}

//fluentreports common pdf report
async function generatePDFReportAsync(response, dymData, reqHeadersParams, methodName, req, configResponce, reqHeadersParams1) {
    let clientroutingdata = req.headers.clienturl != '' ? req.headers.clienturl : '';
    var uploadFolder = path.join(__dirname, "../../../", clientroutingdata);
    app1.use(express.static(uploadFolder));
    let orgdataresponcedeatiles = null
    let payloadparams = reqHeadersParams1;
    let reportReadersRows = payloadparams.parReportHeaders;
    let paperconfig = reportconfig.paperConfigurations[dymData['paper']];
    let currentdate1 = new Date().toISOString().substring(0, 10);
    let currentdate = currentdate1.replace(/-/g, "_");
    let suvarnalogoDir = `${appRoot}/${_clientConfig.suvarnalogofolder}`;
    let reportsDownloadDir = "Reports";
    let exlReportD = `${appRoot}/${uploadRootDirdoc}`;
    let exlReportDf = `${appRoot}/${uploadRootDirdoc}/${clientroutingdata}`;
    let exlReportDirs = `${appRoot}/${uploadRootDirdoc}/${clientroutingdata}/${reportsDownloadDir}`;
    let exlReportDir = `${appRoot}/${uploadRootDirdoc}/${clientroutingdata}/${reportsDownloadDir}/${currentdate}`;
    let repdatastring = null;
    if (methodName == "fnModuleList" && response.data.length > 0) {
        repdatastring = JSON.stringify(response.data[0].module);
    } else {
        repdatastring = JSON.stringify(response.data);
    }
    let repData = JSON.parse(repdatastring);
    let repData1 = _.filter(dymData.DatacolumnsList, { pdf: true });
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
    let pdfreportname = "";
    pdfreportname = path.join(exlReportDir, reportReadersRows.parRptScreenName + '-' + Date.now() + '.pdf');
    var pdfseperateFileMethods = ["fnCapaSummaryGet"];
    let seperatePDFFormatesFilefor = [];
    _lodash.forEach(pdfseperateFileMethods, (dsds, ddd) => {
        if (methodName === dsds) {
            seperatePDFFormatesFilefor.push(dsds)
        }
    })
    let replaceVar = typeof dymData.FilterRptColmunsData != null ? dymData['FilterRptColmunsData'] : '';
    let dynReportsFilterHeaders = [];
    for (let key in reportReadersRows) {
        if (reportReadersRows.hasOwnProperty(key) && replaceVar[key]) {
            dynReportsFilterHeaders[replaceVar[key]] = reportReadersRows[key]
        }
    }
    let dynamicConvertObject = Object.keys(dynReportsFilterHeaders).map(key => ({ [key]: dynReportsFilterHeaders[key] }));

    repData = repData.map(obj => {
        const filteredObject = {};
        repData1.forEach(column => {
            if (obj.hasOwnProperty(column.field)) {
                filteredObject[column.field] = obj[column.field];
            }
        })
        return filteredObject;
    })
    let paperSize = 'A4';
    let landscape = false;
    var dime;
    var linewidth
    if (repData1.length > 0) {
        if (repData1.length <= 8) {
            // console.log("lakshmipathi")
            landscape = false;
            paperSize = 'A4';
            linewidth = ' 837.89';
            dime = "595"
        }
        else if (repData1.length >= 5 && repData1.length <= 10) {
            landscape = true;
            // console.log("case 1")
            paperSize = 'A4';
            linewidth = ' 824.89';
            dime = "842";
        }
        else if (repData1.length > 10 && repData1.length <= 15) {
            landscape = false;
            // console.log("case 2")
            paperSize = 'A3';
            linewidth = '1187.89';
            dime = "842";
        }
        else if (repData1.length > 15 && repData1.length <= 20) {
            landscape = true;
            // console.log("case 3")
            paperSize = 'A3';
            linewidth = ' 830.89';
            dime = "1191";
        }
        else if (repData1.length >= 20 && repData1.length <= 25) {
            landscape = false;
            // console.log("case 4")
            paperSize = 'A2';
            dime = "1191";
        }
        else if (repData1.length >= 25 && repData1.length <= 30) {
            landscape = true;
            // console.log("case 5")
            paperSize = 'A2';
            dime = "1684";
        }
        else if (repData1.length >= 30 && repData1.length <= 45) {
            landscape = false;
            // console.log("case 6")
            paperSize = 'A1';
            dime = "1684";
        }
        else if (repData1.length >= 45 && repData1.length <= 50) {
            landscape = true;
            // console.log("case 7")
            paperSize = 'A1';
            dime = "2384";
        }
        else if (repData1.length >= 50 && repData1.length <= 55) {
            landscape = false;
            // console.log("case 8")
            paperSize = 'A0';
            dime = "2384";
        }
        else if (repData1.length >= 55 && repData1.length <= 70) {
            landscape = false;
            // console.log("case 9")
            paperSize = 'A0';
            dime = "3370";
        }
        else {
            landscape = false;
            // console.log("case 10")
            paperSize = 'A1';
            dime = "791";
        }
        // console.log(repData1.length, 'ddddddddddddd')
        // paperSize = 'A4';
    }

    let headerWIth;
    let fontSize;
    let reportColumns = [];
    if (payloadparams.parSelectedColumns != "" && payloadparams.parSelectedColumns != null) {
        let dynamicreportColumns = payloadparams.parSelectedColumns.split(_envvar.excelseperator);
        _.forEach(dymData.DatacolumnsList, (tt, inxtt) => {
            for (i of dynamicreportColumns) {
                if (i == tt.field) {
                    reportColumns.push(tt)
                }
            }
        });
    }
    else if (replaceVar.hasOwnProperty('LeaveDynamicHeaderPrint')) {
        if (payloadparams.parFlag == 'summary' || payloadparams.parFlag == 'detaile' || payloadparams.parFlag == 'history') {
            if (payloadparams.parFlag == 'summary') {
                reportColumns = _.filter(repData1, { myFlagSummary: true });
            } else {
                reportColumns = _.filter(repData1, { myFlagDeatile: true });
            }
        } else {
            reportColumns = repData1
        }
    } else {
        reportColumns = repData1
    }
    const SNO_WIDTH = 32;
    let DATA_COLUMN_WIDTH = 0;
    let fontSize1 = 10;
    let detailsBand = [];
    var rowNo = 0;
    if (methodName == seperatePDFFormatesFilefor) {
        if (methodName == 'fnCapaSummaryGet') {//Income Declaration Report screens           
            pdfreportname = await _calseperatefilereport.fnCapaSummaryGetpdf(repdatastring, Report, replaceVar, pdfreportname, reportReadersRows, dynamicConvertObject, payloadparams, orgdataresponcedeatiles)
            return pdfreportname
        }

    } else {
        const headerFUnction = function (rpt, data) {
            let availaWidth;
            rpt.addY(-20);
            availaWidth = dime !== undefined ? dime - 20 - 20 : 900;
            rpt.newline();
            let defaultIMg = orgdataresponcedeatiles != null ? orgdataresponcedeatiles.image[0].image_file_folder_name : `${appRoot}/defaultimage/logo.png`
            if (defaultIMg) {
                if (fs.existsSync(defaultIMg)) {
                    rpt.band([
                        {
                            data: rpt.image(
                                defaultIMg || '',
                                { width: 80, height: 45, x: availaWidth - 60 }
                            )
                        }
                    ]);
                    rpt.addY(-30);
                }
            }
            // --- constants ---
            const HEADER_FONT = { fontBold: true, fontsize: 12, wrap: true, lineBreak: true };
            const COLON_WIDTH = 10;
            const TOTAL_WIDTH = availaWidth || 950; // dynamic width

            // --- build header rows ---
            let headerRows = [];

            // // Report
            if (replaceVar.hasOwnProperty('LeaveDynamicHeaderPrint')) {
                headerRows.push({ label: "Report", value: reportReadersRows.parRptScreenName });

                // Date filter
                if (reportReadersRows.parFromDt && reportReadersRows.parToDt) {
                    let dateValue = reportReadersRows.parFromDt === reportReadersRows.parToDt
                        ? reportReadersRows.parFromDt
                        : `${reportReadersRows.parFromDt} - ${reportReadersRows.parToDt}`;
                    headerRows.push({ label: reportReadersRows.parDateHeaderTypeName || "Date", value: dateValue });
                }

                // Dynamic filters
                _.forEach(dynamicConvertObject, (dyn) => {
                    const [key, val] = Object.entries(dyn)[0];
                    headerRows.push({ label: key, value: val });
                });

                // --- print header rows ---
                headerRows.forEach(row => {
                    rpt.band([
                        { data: row.label, width: 100, align: "left", ...HEADER_FONT },
                        { data: ":", width: COLON_WIDTH, align: "center", ...HEADER_FONT },
                        { data: row.value, width: TOTAL_WIDTH - 100 - COLON_WIDTH, align: "left", ...HEADER_FONT }
                    ]);
                });
            };

            let headerRows2 = []
            if (!replaceVar.hasOwnProperty('LeaveDynamicHeaderPrint')) {
                headerRows2.push({ label: "Report", value: reportReadersRows.parRptScreenName });
                if ((reportReadersRows.hasOwnProperty('parFromDt') && (reportReadersRows.hasOwnProperty('parFromDt')))) {
                    headerRows2.push({ label: `${reportReadersRows.parDateHeaderTypeName}`, value: `${reportReadersRows.parFromDt} - ${reportReadersRows.parToDt}` });
                }
                headerRows2.forEach(row => {
                    rpt.band([
                        { data: row.label, width: 100, align: "left", ...HEADER_FONT },
                        { data: ":", width: COLON_WIDTH, align: "center", ...HEADER_FONT },
                        { data: row.value, width: TOTAL_WIDTH - 200 - COLON_WIDTH, align: "left", ...HEADER_FONT }
                    ]);
                });
            }
            rpt.addY(1);
            /**line based on header total length */
            rpt.line(rpt.getCurrentX(), rpt.getCurrentY(), availaWidth + 19, rpt.getCurrentY(), { borderColor: '#bbb3b3' });
            rpt.addY(-20);
            rpt.newline(2);
            let columnsLables = []
            _.forEach(reportColumns, (repcol, indx) => {
                columnsLables.push(repcol.header)
            });
            columnsLables.unshift('S.No.');
            const remainingWidth = availaWidth - SNO_WIDTH;
            const dataColumnCount = columnsLables.length - 1;
            DATA_COLUMN_WIDTH = remainingWidth / dataColumnCount;
            fontSize1 = Math.floor((DATA_COLUMN_WIDTH / 100) * 6.5);
            const finalColumns = columnsLables.map((header, index) => {
                if (index === 0) {
                    return { data: header, width: SNO_WIDTH, fontSize: 9, align: "center", valign: "middle", fontBold: true };
                }
                return { data: header, width: DATA_COLUMN_WIDTH, fontSize: 9, align: "center", valign: "middle", fontBold: true };
            });
            rpt.band(finalColumns, {
                border: 1,
                borderColor: "#A8A8A8",
                fill: "#4174a9",
                textColor: "#ffffff",
                padding: 3,
                wrap: true,
                align: "center",
                valign: "middle"
            });
        };
        const totals = {};
        let hasSnoColumn = false;
        let rowNodet = 0;


        const detail = function (rpt, data) {
            rowNodet += 1;
            const detailsBand = [];
            if (rowNodet === 1) {
                hasSnoColumn = reportColumns.some(col => col.header.toLowerCase().includes('s.no'));
            }
            if (!hasSnoColumn) {
                detailsBand.push({ data: rowNodet, width: SNO_WIDTH, fontSize: 7.5, align: 2 });
            }
            let isAmount = ''
            _.forEach(reportColumns, (dyncol) => {
                let value = ''
                if (dyncol.percentage) {
                    value = data[dyncol.field] != null || undefined || '' ? data[dyncol.field] + ' %' : data[dyncol.field];
                } else {
                    value = data[dyncol.field];
                }
                isAmount = dyncol.dataType && dyncol.dataType.toLowerCase() === "amount";
                ispercentage = dyncol.dataType && dyncol.dataType.toLowerCase() === "percentage";
                const isDetailAmount = dyncol.dataType && (String(dyncol.dataType).toLowerCase() === "number" || String(dyncol.dataType).toLowerCase() === "amount" || String(dyncol.dataType).toLowerCase() === "percentage");
                if (isAmount) {
                    let numVal = parseFloat(String(value).replace(/,/g, "")) || 0;
                    totals[dyncol.field] = (totals[dyncol.field] || 0) + numVal;
                    value = formatIndianNumber(numVal);
                } else if (ispercentage) {
                    let numVal = parseFloat(value || 0) || 0;

                    value = `${numVal}%`;

                }

                detailsBand.push({ data: value, width: DATA_COLUMN_WIDTH, fontSize: 7.5, align: isDetailAmount ? 3 : 1 });
            });
            rpt.band(detailsBand, {
                wrap: true,
                border: 1,
                borderColor: "#adadad",
                fill: (rowNodet % 2 === 0 ? "#ececec" : "#ffffff"),
                padding: 3
            });

        };
        const footerFunction = function (rpt) {
            try {
                rpt.line(rpt.currentX(), rpt.maxY() + 1, rpt.maxX(), rpt.maxY() + 1, { borderColor: '#bbb3b3' });
                rpt.pageNumber({
                    text: "Page {0} of {1}",
                    footer: true,
                    x: rpt.currentX(),
                    y: rpt.maxY() + 3,
                    align: "right",
                    fontSize: 7.2
                });


                rpt.print(
                    "Print Date & Time : " + dateFormat(Date.now(), "dd-mmm-yyyy hh:MM:ss TT"),
                    {
                        x: rpt.currentX(),
                        y: rpt.maxY() + 3,
                        align: "left",
                        fontSize: 7.2
                    }
                );
            } catch (err) {
                console.log("ERROR in footer", err);
            }
        };
        const resultReport = await new Report(pdfreportname)
            .data(repData)
            .pageHeader(headerFUnction)
            .pageFooter(footerFunction)
            .detail(detail)
            .landscape(landscape)
            .paper(paperSize)
            .margins(20)
            .render();

        return pdfreportname;
    }

}
module.exports = {
    PDFreport: (response, dymData, reqHeadersParams, methodName, req, configResponce, reqHeadersParams1) => generatePDFReportAsync(response, dymData, reqHeadersParams, methodName, req, configResponce, reqHeadersParams1)
};