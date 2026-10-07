var _ = require('lodash');
const dateFormat = require('dateformat');
const appRoot = require('app-root-path');
var fs = require('fs');
module.exports = {

    fnCapaSummaryGetXL: function (inputData, worksheet, rownumber, excelData) {
        let moduleCont = {};
        let headers = ["S.No", "Module", "Type", "Written CAPA", "Action taken", "Written By", "Date & Time"];
        let repData1 = ["module_name", "sub_module_name", "write_capa", "action_taken", "created_by", "created_at"];
        let as = worksheet.addRow(headers);
        const headerCellAdress = as._cells.map((cell) => cell.address);
        headerIndex = 0
        while (headerIndex < headers.length) {
            worksheet.getCell(`'${headerCellAdress[headerIndex]}'`).fill = excelData.headerColors
            worksheet.getCell(`'${headerCellAdress[headerIndex]}'`).font = excelData.headerColors
            worksheet.getCell(`'${headerCellAdress[headerIndex]}'`).alignment = { vertical: 'middle', horizontal: 'center' }
            headerIndex++;
        };
        rownumber = worksheet.lastRow ? worksheet.lastRow.number : rownumber;
        let headerStartRow = rownumber + 1;
        inputData.forEach(item => { moduleCont[item.module_name] = (moduleCont[item.module_name] || 0) + 1; })
        // let row = 2;
        let sno = 1;
        let printed = {};
        inputData.forEach(item => {
            worksheet.getCell(`C${headerStartRow}`).value = item.sub_module_name;
            worksheet.getCell(`D${headerStartRow}`).value = item.write_capa;
            worksheet.getCell(`E${headerStartRow}`).value = item.action_taken;
            worksheet.getCell(`F${headerStartRow}`).value = item.created_by;
            worksheet.getCell(`G${headerStartRow}`).value = item.created_at;
            if (!printed[item.module_name]) {
                const count = moduleCont[item.module_name];
                worksheet.getCell(`A${headerStartRow}`).value = sno++;
                worksheet.getCell(`B${headerStartRow}`).value = item.module_name;
                if (count > 1) {
                    worksheet.mergeCells(headerStartRow, 1, headerStartRow + count - 1, 1);
                    worksheet.mergeCells(headerStartRow, 2, headerStartRow + count - 1, 2);
                }
                worksheet.getCell(`A${headerStartRow}`).alignment = {
                    horizontal: "center",
                    vertical: "middle"
                }
                worksheet.getCell(`B${headerStartRow}`).alignment = {
                    horizontal: "center",
                    vertical: "middle"
                }
                worksheet.getCell(`A${headerStartRow}`).font = {
                    bold: true
                }
                worksheet.getCell(`B${headerStartRow}`).font = {
                    bold: true
                };
                printed[item.module_name] = true
            }
            headerStartRow++;
        })
    },

    fnCapaSummaryGetpdf: async function (repdatastring, Report, replaceVar, pdfreportname, reportReadersRows, dynamicConvertObject, payloadparams, orgdataresponcedeatiles) {
        let columnsLables = ["S.No", "Module", "Type", "Written CAPA", "Action taken", "Written By", "Date & Time"];
        let reportColumns = ["module_name", "sub_module_name", "write_capa", "action_taken", "created_by", "created_at"];
        let repData = JSON.parse(repdatastring);
        let paperSize = 'A4';
        let landscape = true;
        // linewidth = ' 824.89';
        let dime = "842";
        const SNO_WIDTH = 32;
        let DATA_COLUMN_WIDTH = 0;
        let fontSize1 = 10;

        var rowNo = 0;
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
            // console.log(finalColumns,'finalColumns');
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
        let moduleCont = {}
        repData.forEach(item => { moduleCont[item.module_name] = (moduleCont[item.module_name] || 0) + 1; })
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
        console.log(moduleCont, 'moduleCont');

        let previousmodule = "";
        let sno = 1;
        let gropRow = 0;
        const resultReport = await new Report(pdfreportname)
            .data(repData)
            .pageHeader(headerFUnction)
            .pageFooter(footerFunction)
            // .detail(detail)
            .detail(function (r, row) {
                let sNo = "";
                let module = "";
                let firstRow = false;
                let secondrow = false;
                if (previousmodule !== row.module_name) {
                    sNo = sno++;
                    module = row.module_name;
                    previousmodule = row.module_name;
                    gropRow = 0;
                    firstRow = true;
                }
                let groupSize = moduleCont[row.module_name] || 1;
                let leableRow = gropRow === Math.floor((groupSize - 1) / 2);
                secondrow = gropRow === groupSize - 1;
                let moduleLeable = leableRow ? row.module_name : "";
                gropRow++;
                r.band([
                    {
                        data: sNo, width: SNO_WIDTH, align: "right", fontSize: 7.5,
                        border: { left: 1, right: 1, top: firstRow ? 1 : 0, bottom: secondrow ? 1 : 0, color: "#adadad" }
                    },
                    {
                        data: module, width: DATA_COLUMN_WIDTH, align: "left", fontSize: 7.5,
                        border: { left: 1, right: 1, top: firstRow ? 1 : 0, bottom: secondrow ? 1 : 0, color: "#adadad" }
                    },
                    { data: row.sub_module_name, width: DATA_COLUMN_WIDTH, align: "left", fontSize: 7.5 },
                    { data: row.write_capa, width: DATA_COLUMN_WIDTH, align: "left", fontSize: 7.5 },
                    { data: row.action_taken, width: DATA_COLUMN_WIDTH, align: "left", fontSize: 7.5 },
                    { data: row.created_by, width: DATA_COLUMN_WIDTH, align: "left", fontSize: 7.5 },
                    { data: row.created_at, width: DATA_COLUMN_WIDTH, align: "left", fontSize: 7.5 },
                ], { wrap: true, border: 1, borderColor: "#adadad", padding: 3 })
            })
            .landscape(landscape)
            .paper(paperSize)
            .margins(20)
            .render();
        console.log(pdfreportname, 'pdfreportname');

        return pdfreportname;
    }
}