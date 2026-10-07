
module.exports = {
    "options": {//sheet name colours
        "pageSetup": { paperSize: 9, orientation: 'landscape' },
        "properties": { tabColor: { argb: 'FFC0000' } }
    },
    "reportHeader": {
        "top": { style: "thin" },
        "left": { style: "thin" },
        "bottom": { style: "thin" },
        "right": { style: "thin" },
    },
    "headerColors": {// report headers
        // font: "Calibri",
        fontstyle: "bold",
        bold: true,
        size: '13',
        type: 'pattern', //  Excel header Type
        pattern: 'solid',          //  Excel Header Pattern
        fgColor: { argb: '4174a9' },
        color: { argb: "ffffff" },
        alignment: { vertical: 'middle', horizontal: 'center' }
    },
    "greenHeadColor": {// report headers
        // font: "Calibri",
        fontstyle: "bold",
        bold: true,
        size: '13',
        type: 'pattern', //  Excel header Type
        pattern: 'solid',          //  Excel Header Pattern
        fgColor: { argb: 'CCFF99' },
        color: { argb: "1E1919" },
        alignment: { vertical: 'middle', horizontal: 'center' }
    },
    'reportNameColor': {
        fgColor: { argb: 'ffffff' },
    },
    'rowsColors': {
        size: '13',
        type: 'pattern', //  Excel header Type
        pattern: 'solid',                    //  Excel Header Pattern
        fgColor: { argb: 'ffececec' },
        // color: { argb: "#ffffff" }
    },
    'titlecolor': {
        size: '16',
        type: 'pattern',
        pattern: 'solid',
        fgColor: { argb: 'ffececec' },
        horizontal: 'center',
        vertical: 'middle'
    },

    "paperConfigurations": {
        "A4-landscape": {
            "linewidth": 837.89,
            "printBy": { left: 635, right: 430 },
            "margins": { left: 5, top: 5, bottom: 5, right: 5 },
            "titlewidth": 842
        },
        "A4-potrait": {
            "linewidth": 824.89,
            "printBy": { left: 345, right: 295 },
            "margins": { left: 20, top: 50, bottom: 50, right: 10 },
            "titlewidth": 595
        },
        "A3-landscape": {
            "printBy": { left: 986, right: 400 },
            "linewidth": 1187.89,
            "margins": { left: 5, top: 5, bottom: 5, right: 5 },
            "titlewidth": 1191
        },
        "A3-potrait": {
            "printBy": { left: 600, right: 900 },
            "linewidth": 830.89,
            "margins": { left: 5, top: 5, bottom: 5, right: 5 },
            "titlewidth": 850
        }
    },
    "reports": {
        /**Training Master & Faculty*/ //pending 
        "fnTrainingMasterListGet": {
            "dbMethod": "fnTrainingMasterListGet",                                       //Database and connect methods Name
            "FileName": "Training Master & Faculty",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Training Master & Faculty",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "training_name",
                    "header": "Training Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "description",
                    "header": "Description",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "mode_of_training_name",
                    "header": "Training Mode",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "faculty_type_name",
                    "header": "Faculty Type",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "faculty_name",
                    "header": "Faculty Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "department_name",
                    "header": "Faculty Designation",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "status",
                    "header": "Status",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }

            ],
        },
        "fnFacultyGet": {
            "dbMethod": "fnFacultyGet",                                       //Database and connect methods Name
            "FileName": "Faculty List",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Faculty List",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "faculty_type",
                    "header": "Faculty Type",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "name",
                    "header": "Faculty Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "designation_name",
                    "header": "Faculty Designation",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "status",
                    "header": "Status",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }

            ],
        },
        /**Audit Master */
        "fnAuditTemplateGet": {
            "dbMethod": "fnAuditTemplateGet",                                       //Database and connect methods Name
            "FileName": "Audit Master",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Audit Master",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "audit_template_code",
                    "header": "Audit ID",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "audit_name",
                    "header": "Audit Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "audit_type",
                    "header": "Audit Type",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "category_type",
                    "header": "Category",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "total_sections",
                    "header": "Sections",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "total_questions",
                    "header": "Questions",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "status",
                    "header": "Status",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }

            ],
        },
        "fnAuditScheduleGet": {
            "dbMethod": "fnAuditScheduleGet",                                       //Database and connect methods Name
            "FileName": "Training Master & Faculty",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Training Master & Faculty",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "audit_name",
                    "header": "Audit Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "audit_title",
                    "header": "Audit Title",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "audit_type_name",
                    "header": "Audit Type",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "department_name",
                    "header": "Department",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "auditor_name",
                    "header": "Auditor",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "auditee_name",
                    "header": "Auditee",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "audit_date",
                    "header": "Audit Date",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "schedule_status",
                    "header": "Audit Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }

            ],
        },
        "fnConductAuditGet": {
            "dbMethod": "fnConductAuditGet",                                       //Database and connect methods Name
            "FileName": "Conduct Audits",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Conduct Audits",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "audit_title",
                    "header": "Audit Title",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "department_name",
                    "header": "Department",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "audit_location_name",
                    "header": "Location",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "auditor_name",
                    "header": "Auditor",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "auditee_name",
                    "header": "Auditee",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "audit_date",
                    "header": "Audit Date",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "audit_compliance",
                    "header": "Compliance (%)",
                    "dataType": "number",
                    "percentage": true,
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }

            ],
        },
        /**Audit Report */
        "fnAuditReportGet": {
            "dbMethod": "fnAuditReportGet",                                       //Database and connect methods Name
            "FileName": "Audit Report",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Audit Report",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "audit_name",
                    "header": "Audit Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "audit_title",
                    "header": "Audit Title",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "department_name",
                    "header": "Department",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "auditor_name",
                    "header": "Auditor",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "auditee_name",
                    "header": "Auditee",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "audit_date",
                    "header": "Audit Date",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }

            ],
        },




        "fnDocumentGetDetail": {
            "dbMethod": "fnDocumentGetDetail",                                       //Database and connect methods Name
            "FileName": "Version Control",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Version Control",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "document_no",
                    "header": "Document No",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "document_name",
                    "header": "Document Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "data_entry_type",
                    "header": "Document Type",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "current_version",
                    "header": "Current Version",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }

            ],
        },
        "fnMouGetDetailGet": {
            "dbMethod": "fnMouGetDetailGet",                                       //Database and connect methods Name
            "FileName": "MOU Tracker",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "MOU Tracker",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "mou_no",
                    "header": "MoU / Legal No",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "partner_org",
                    "header": "Partner Organization",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "agreement_date",
                    "header": "Date of Agreement",
                    "dataType": "srting",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "expiry_date",
                    "header": "Date of Expiry",
                    "dataType": "srting",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },


                {
                    "field": "status",
                    "header": "Status",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }

            ],
        },
        "fnLicenseGetDetailGet": {
            "dbMethod": "fnLicenseGetDetailGet",                                       //Database and connect methods Name
            "FileName": "License Tracker",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "License Tracker",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "license_name_no",
                    "header": "License Name & No",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "provider_name",
                    "header": "Provider / Vendor ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "assigned_to",
                    "header": "Assigned To",
                    "dataType": "srting",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "issue_date",
                    "header": "Date of Issue",
                    "dataType": "srting",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "expiry_date",
                    "header": "Date of Expiry",
                    "dataType": "srting",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "renewal_application_date",
                    "header": "Renewal Date",
                    "dataType": "srting",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },


                {
                    "field": "status",
                    "header": "Status",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }

            ],
        },
        "fnLicenseMasterGet": {
            "dbMethod": "fnLicenseMasterGet",                                       //Database and connect methods Name
            "FileName": "License Master List",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "License Master List",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "license_name",
                    "header": "License Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "category_name",
                    "header": "Category Type",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "renewal_frequency_months",
                    "header": "Renewal Frequency Months",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "description",
                    "header": "Description",
                    "dataType": "srting",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }, {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "status",
                    "header": "Status",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }

            ],
        },

        "fnProviderGet": {
            "dbMethod": "fnProviderGet",                                       //Database and connect methods Name
            "FileName": "Providers List",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Providers List",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "provider_name",
                    "header": "Provider",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "provider_type",
                    "header": "Provider Type",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "contact_person",
                    "header": "Contact Person",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "mobile_no1",
                    "header": "Contact No.",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "email_id",
                    "header": "Email",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "web_url",
                    "header": "Weburl",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "status",
                    "header": "Status",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }

            ],
        },

        "fnTrainingFeedbackLists": {
            "dbMethod": "fnTrainingFeedbackLists",                                       //Database and connect methods Name
            "FileName": "Training Feedback",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Training Feedback",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "training_name",
                    "header": "Training Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "faculty_name",
                    "header": "Faculty Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "total_no_of_fbs",
                    "header": "Total No. of Feedbacks",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "score",
                    "header": "Score",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "feedback_dt",
                    "header": "Feedback Date & Time",
                    "width": 100,
                    "dataType": "date",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }
            ],
        },
        "fnTrainingMasterListGet": {
            "dbMethod": "fnTrainingMasterListGet",                                       //Database and connect methods Name
            "FileName": "Training Master & Faculty",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Training Master & Faculty",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "training_name",
                    "header": "Training Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "mode_of_training_name",
                    "header": "Training Mode",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "faculty_type_name",
                    "header": "Faculty Type",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "faculty_name",
                    "header": "Faculty Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "department_name",
                    "header": "Faculty Designation",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "description",
                    "header": "Description",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "status",
                    "header": "Status",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }
            ],
        },
        "fnAssessmentTemplateList": {
            "dbMethod": "fnAssessmentTemplateList",                                       //Database and connect methods Name
            "FileName": "Assessment Management",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Assessment Management",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "training_name",
                    "header": "Training Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "assessment_type_name",
                    "header": "Assessment Type",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "total_score",
                    "header": "Total Score",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "total_questions",
                    "header": "Total Questions ",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "pass_mark",
                    "header": "Pass Mark",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }
            ],
        },
        /**Schedule Training */
        "fnTrainingScheduleListGet": {
            "dbMethod": "fnTrainingScheduleListGet",                                       //Database and connect methods Name
            "FileName": "Schedule Training",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Schedule Training",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "training_name",
                    "header": "Training Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "faculty_name",
                    "header": "Faculty Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "mode_of_training",
                    "header": "Mode of Training",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "attendance_type",
                    "header": "Attendance Type",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "from_dt",
                    "header": "From Time",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "to_dt",
                    "header": "To Time",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "schedule_status",
                    "header": "Schedule Status",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }
            ],
        },
        /**Training Attendance */
        "fnAttendanceListGet": {
            "dbMethod": "fnAttendanceListGet",                                       //Database and connect methods Name
            "FileName": "Training Attendance",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Training Attendance",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "training_name",
                    "header": "Training Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "mode_of_training",
                    "header": "Mode of Training",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "venue_name",
                    "header": "Venue",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "from_date_time",
                    "header": "Starting Date & Time",
                    "dataType": "timestamp",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "to_date_time",
                    "header": "Ending Date & Time",
                    "dataType": "timestamp",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }
            ],
        },
        "fnTrainingWiseReportGet": {
            "dbMethod": "fnTrainingWiseReportGet",                                       //Database and connect methods Name
            "FileName": "Training Reports",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Training Reports",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "training_name",
                    "header": "Training Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "faculty_name",
                    "header": "Faculty Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "mode_of_training",
                    "header": "Mode of Training",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "training_period",
                    "header": "Training Period",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "batch",
                    "header": "Batch",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "total_training_hours",
                    "header": "Total Training Hours",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "width": 100,
                    "dataType": "string",
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }
            ],
        },
        //PROM (Patient-Reported Outcome Measure) PROM Feedback History
        "fnPromFeedbackGet": {
            "dbMethod": "fnPromFeedbackGet",                                       //Database and connect methods Name
            "FileName": "PROM Feedback History",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "PROM Feedback History",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "uhid",
                    "header": "UHID",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "patient_name",
                    "header": "Patient Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "age",
                    "header": "Age",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "room",
                    "header": "Room No",
                    "dataType": "number",
                    "width": 100,
                    "pdf": false,
                    "xlsx": false,
                    "csv": false
                },
                {
                    "field": "admitted_unit_name",
                    "header": "Admitted Unit",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "diagnosis",
                    "header": "Diagnosis",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "treatment_period",
                    "header": "Treatment Period",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "care_continuity_req",
                    "header": "Care Continuity Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "prom_type_name",
                    "header": "Feedback Type",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },
        //CP Master List
        "fnCpMasterGet": {
            "dbMethod": "fnCpMasterGet",                                       //Database and connect methods Name
            "FileName": "CP Master List",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "CP Master List",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "cp_type",
                    "header": "CP Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "department_name",
                    "header": "Department",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "sections.length",
                    "header": "Sections",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }
            ],
        },
        "fnCpAuditGrid": {
            "dbMethod": "fnCpAuditGrid",                                       //Database and connect methods Name
            "FileName": "Clinical Pathway Audits",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Clinical Pathway Audits",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "uhid",
                    "header": "UHID",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "cp_type_name",
                    "header": "CP type",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "department_name",
                    "header": "Department",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "consultant_name",
                    "header": "Consultant",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "doa_name",
                    "header": "DOA",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "dos_name",
                    "header": "DOS",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "dod_name",
                    "header": "DOD",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "compliance",
                    "header": "Compliance",
                    "dataType": "percentage",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },
        "fnSafetyCultureSurveyGet": {
            "dbMethod": "fnSafetyCultureSurveyGet",                                       //Database and connect methods Name
            "FileName": "Safety Culture Survey List",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Safety Culture Survey List",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "survey_name",
                    "header": "Culture Survey Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "participants",
                    "header": "Participants",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "from_date",
                    "header": "From Date",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "to_date",
                    "header": "To Date",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "total_participants",
                    "header": "Total Participants",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "total_satisfactory_pct",
                    "header": "Total Satisfactory",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },
        "fnVaccineMasterGrid": {
            "dbMethod": "fnVaccineMasterGrid",                                       //Database and connect methods Name
            "FileName": "Vaccination Master",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Vaccination Master",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "vaccine_code",
                    "header": "Vaccine Code",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "vaccine_name",
                    "header": "Vaccine Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "manufacture_name",
                    "header": "Manufacturer",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "total_row_cnt",
                    "header": "Dosages",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },


                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },

        "fnVaccinationScheduleGet": {
            "dbMethod": "fnVaccinationScheduleGet",                                       //Database and connect methods Name
            "FileName": "Vaccine Schedules",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Vaccine Schedules",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "campaign_name",
                    "header": "Campaign Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "vaccine_name",
                    "header": "Vaccine Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "venue_name",
                    "header": "Venue",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "start_date",
                    "header": "Scheduled From",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "end_date",
                    "header": "Scheduled To",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "capacity",
                    "header": "Capacity",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },
        /**Vaccination Listing */
        "fnVaccinationDetailsGet": {
            "dbMethod": "fnVaccinationDetailsGet",                                       //Database and connect methods Name
            "FileName": "Vaccine Schedules",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Vaccine Schedules",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "user_display_name",
                    "header": "Employee Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "vaccine_name",
                    "header": "Vaccine Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "department_name",
                    "header": "Department",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "dosage",
                    "header": "Dosages Status",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "brand_batch_no",
                    "header": "Vaccine Brand/ Batch Details",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "last_vaccinated_date",
                    "header": "Last Vaccinated Date",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "next_vaccine_dt",
                    "header": "Next Vaccination Date",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "next_vaccine_status",
                    "header": "Next Vaccination Status",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": false,
                    "xlsx": false,
                    "csv": false
                },
            ],
        },
        /** Incident Management */
        "fnIncidentGetGrid": {
            "dbMethod": "fnIncidentGetGrid",                                       //Database and connect methods Name
            "FileName": "Incident Management",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Incident Management",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "incident_code",
                    "header": "Incident ID ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "happened_to_name",
                    "header": "Happened To ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "incd_happnd_ref_name",
                    "header": "Happener Name ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "incident_location_name",
                    "header": "Location ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "reported_by",
                    "header": "Reported By ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Incident Date & Time ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "reason_for_incident",
                    "header": "Reason for the Incident ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "incd_act_status",
                    "header": "Incident Status ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },
        /** Risk Management*/
        "fnRiskGetList": {
            "dbMethod": "fnRiskGetList",                                       //Database and connect methods Name
            "FileName": "Incident Management",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Incident Management",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "risk_number",
                    "header": "Risk ID",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "risk_type",
                    "header": "Risk Type",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "location",
                    "header": "Location",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "department",
                    "header": "Department  ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "Reported_by",
                    "header": "Reported By ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "date_of_risk",
                    "header": "Date & Time of Risk ",
                    "dataType": "timestamp",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "description",
                    "header": "Description ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "impact_type",
                    "header": "Impact",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "risk_status",
                    "header": "Risk Status ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },
        /** PREM */
        "fnPremFeedbackGet": {
            "dbMethod": "fnPremFeedbackGet",                                       //Database and connect methods Name
            "FileName": "PREM ",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "PREM ",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "uhid",
                    "header": "UHID ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "department_name",
                    "header": "Department  ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "issue_type_name",
                    "header": "Issue   ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "description",
                    "header": "Description ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },
        /** Satisfaction Survey */
        "fnEssSurveyGet": {
            "dbMethod": "fnEssSurveyGet",                                       //Database and connect methods Name
            "FileName": "Satisfaction Survey ",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Satisfaction Survey ",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "survey_name",
                    "header": "Survey Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "participants_type_name",
                    "header": "Participants",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "from_date",
                    "header": "From Date",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "to_date",
                    "header": "To Date",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "total_participants_cnt",
                    "header": "Total Participants",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "total_satisfactory_cnt",
                    "header": "Total Satisfactory",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },
        /** Grievance & Complaint Management */
        "fnComplaintGet": {
            "dbMethod": "fnComplaintGet",                                       //Database and connect methods Name
            "FileName": "Grievance & Complaint Management ",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Grievance & Complaint Management ",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "full_name",
                    "header": "Employee Profile",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "role_name",
                    "header": "Role",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "complaint_type_name",
                    "header": "Type of Complaint",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "description",
                    "header": "Complaint Description",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "happened_on",
                    "header": "Happened On",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },
        /** IPSG Measures*/
        "fnIpsgAuditGrid": {
            "dbMethod": "fnIpsgAuditGrid",                                       //Database and connect methods Name
            "FileName": "IPSG Measures",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "IPSG Measures",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "ipsg_id",
                    "header": "IPSG ID",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "department_name",
                    "header": "Department",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "auditor_name",
                    "header": "Auditor",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "audit_date",
                    "header": "Audit Date",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "compliance_name",
                    "header": "Compliance",
                    "dataType": "number",
                    "percentage": true,
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "completed_goals_name",
                    "header": "Completed Goals",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": false,
                    "xlsx": false,
                    "csv": false
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": false,
                    "xlsx": false,
                    "csv": false
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": false,
                    "xlsx": false,
                    "csv": false
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": false,
                    "xlsx": false,
                    "csv": false
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },
        /** Category Master List*/
        "fnKpiCategoryGrid": {
            "dbMethod": "fnKpiCategoryGrid",                                       //Database and connect methods Name
            "FileName": "Category Master List",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Category Master List",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "category_name",
                    "header": "Category Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "catgegory_short_code",
                    "header": "	Category Code",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "description",
                    "header": "Description ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },
        /** KPI Master List*/
        "fnKpiListGet": {
            "dbMethod": "fnKpiListGet",                                       //Database and connect methods Name
            "FileName": "KPI Master List",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "KPI Master List",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "kpi_code",
                    "header": "KPI Id",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "kpi_name",
                    "header": "KPI Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "category_name",
                    "header": "Catgeory",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "department_name",
                    "header": "Department",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "kpi_type_name",
                    "header": "Indicator",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "frequency_name",
                    "header": "Frequency",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "unit_of_measure_name",
                    "header": "Unit of Measure",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },
        /** KPI CAPA Summary*/
        "fnKpiCapaSummaryList": {
            "dbMethod": "fnKpiCapaSummaryList",                                       //Database and connect methods Name
            "FileName": "KPI CAPA Summary",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "KPI CAPA Summary",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "kpi_code",
                    "header": "KPI Code",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "kpi_name",
                    "header": "KPI Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "kpi_type_name",
                    "header": "Indicator",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "department_name",
                    "header": "Department",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "frequency_name",
                    "header": "Data Capture Period",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "unit_of_measure_name",
                    "header": "UOM",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "kpi_formula",
                    "header": "Formula",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "target_benchmark",
                    "header": "Target",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "",
                    "header": "Overall Compliance (%)",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "kpi_actual_score_status",
                    "header": "KPI Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },
        /** Schedule Committee Meeting*/
        "fnMeetingGetGrid": {
            "dbMethod": "fnMeetingGetGrid",                                       //Database and connect methods Name
            "FileName": "Schedule Committee Meeting",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Schedule Committee Meeting",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "meeting_code",
                    "header": "Meeting ID",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "meeting_name",
                    "header": "Meeting Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "committee_name",
                    "header": "Committee Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "committee_type_name",
                    "header": "Committee Type",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "chair_person_name",
                    "header": "Chair Person",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "meeting_date",
                    "header": "Meeting Date",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "meeting_period",
                    "header": "Meeting Period",
                    "dataType": "timestamp",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "venue_name",
                    "header": "Venue",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Meeting Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },
        /** Manage Committee*/
        "fnCommitteeGetGrid": {
            "dbMethod": "fnCommitteeGetGrid",                                       //Database and connect methods Name
            "FileName": "Manage Committee",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Manage Committee",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "committee_code",
                    "header": "Committee ID",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "committee_name",
                    "header": "Committee Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "committee_type",
                    "header": "Committee Type",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "chairperson",
                    "header": "Chair Person",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "co_ordinator",
                    "header": "Co-Ordinator",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "remainder_frequency",
                    "header": "Remainder Frequency",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },
        /** Manage Meeting MoM's*/
        "fnMomGetGrid": {
            "dbMethod": "fnMomGetGrid",                                       //Database and connect methods Name
            "FileName": "Manage Meeting MoM's",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Manage Meeting MoM's",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "meeting_code",
                    "header": "Meeting ID",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "meeting_name",
                    "header": "Meeting Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "meeting_period",
                    "header": "Meeting Period",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "committee_name",
                    "header": "Committee",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "co_ordinator",
                    "header": "Assigned To",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
            ],
        },
        /** Committee Reports*/
        "fnCommitteeReportsGetGrid": {
            "dbMethod": "fnCommitteeReportsGetGrid",                                       //Database and connect methods Name
            "FileName": "Committee Reports",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Committee Reports",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "committee_name",
                    "header": "Committee Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "committee_type_name",
                    "header": "Committee Type",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "meeting_name",
                    "header": "Meeting Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "meeting_period",
                    "header": "Meeting Period",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "chair_person_name",
                    "header": "Chair Person",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "co_ordinator_name",
                    "header": "Co-Ordinator",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "meeting_date",
                    "header": "Meeting Date ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }
            ],
        },
        /** Tasks & Assignments*/
        "fnTaskGetList": {
            "dbMethod": "fnTaskGetList",                                       //Database and connect methods Name
            "FileName": "Tasks & Assignments",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Tasks & Assignments",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "task_code",
                    "header": " Task ID",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "task_name",
                    "header": "Task Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "assigned_to",
                    "header": "Assigned To",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "role",
                    "header": "Role",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "task_description",
                    "header": "Task Description",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "task_status",
                    "header": "Task Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }
            ],
        },
        /** CAPA Summary List*/
        "fnCapaSummaryGet": {
            "dbMethod": "fnCapaSummaryGet",                                       //Database and connect methods Name
            "FileName": "CAPA Summary List",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "CAPA Summary List",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [],
        },
        /** Modules List*/
        "fnModuleList": {
            "dbMethod": "fnModuleList",                                       //Database and connect methods Name
            "FileName": "ModulesList",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "ModulesList",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "module_name",
                    "header": "Module Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "module_route",
                    "header": "Route",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "module_icon",
                    "header": "Icon",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }
            ],
        },
        /**Document*/
        "fnDocumentMasterList": {
            "dbMethod": "fnDocumentMasterList",                                       //Database and connect methods Name
            "FileName": "Document",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Document",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "document_name",
                    "header": "Document ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "primary_url",
                    "header": "Primary Url",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "secondary_url",
                    "header": "Secondary Url",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "description",
                    "header": "Description",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }
            ],
        },
        /**Role List*/
        "fnRoleGet": {
            "dbMethod": "fnRoleGet",                                       //Database and connect methods Name
            "FileName": "Role List",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Role List",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "role_name",
                    "header": "Role Name ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "role_short_name",
                    "header": "Role Code",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "role_desc",
                    "header": "Description",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }
            ],
        },
        /**New User*/
        "fnUserGet": {
            "dbMethod": "fnUserGet",                                       //Database and connect methods Name
            "FileName": "New User",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "New User",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "user_name",
                    "header": "User Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "designation_name",
                    "header": "Designation",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "department_name",
                    "header": "Department",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "email_id",
                    "header": "Email",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "mobile_no",
                    "header": "Mobile No.",
                    "dataType": "number",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "address1",
                    "header": "Address",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }
            ],
        },
        /**Approval Workflow List*/
        "fnApprovalWorkflowConfigList": {
            "dbMethod": "fnApprovalWorkflowConfigList",                                       //Database and connect methods Name
            "FileName": "Approval Workflow List",
            "sheetType": "A4",
            "fontsize": 9,
            "pdfOrientation": true,
            "paper": "A4-potrait",
            "titleName": "Approval Workflow List",
            "FilterRptColmunsData": { "LeaveDynamicHeaderPrint": "", "parFromDt": "From Date", "parToDt": "To Date" },
            "DatacolumnsList": [
                {
                    "field": "approval_workflow_name",
                    "header": "Approval Workflow Name",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "module_name",
                    "header": "Module",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "document_name",
                    "header": "Document ",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_by",
                    "header": "Created By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "created_at",
                    "header": "Created on",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "updated_by",
                    "header": "Modified By",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },

                {
                    "field": "updated_at",
                    "header": "Last Modified",
                    "dataType": "date",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                },
                {
                    "field": "status",
                    "header": "Status",
                    "dataType": "string",
                    "width": 100,
                    "pdf": true,
                    "xlsx": true,
                    "csv": true
                }
            ],
        },

    }
}


