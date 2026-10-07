module.exports = {
  StoredProcedure: {
    getFnTrainingWrite: {
      SpName: "fn_training_write",
      Schema: [
        { type: "json", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnEntityValueGet: {
      SpName: "fn_entity_value_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnTrainingWriteCreate: {
      SpName: "fn_training_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnTacultyWriteCreate: {
      SpName: "fn_faculty_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnTrainingMasterListGet: {
      SpName: "fn_training_master_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnFacultyListGet: {
      SpName: "fn_faculty_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnFacultyDashboardStatsGet: {
      SpName: "fn_faculty_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnTrainingDashboardStatsGet: {
      SpName: "fn_training_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnFacultyAssignmentWriteGet: {
      SpName: "fn_faculty_assignment_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnTrainingListGet: {
      SpName: "fn_training_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnFacultyGet: {
      SpName: "fn_faculty_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnTrainingFacultyDropdownGet: {
      SpName: "fn_training_faculty_dropdown",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnAuditTemplateWrite: {
      SpName: "fn_audit_template_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnAuditDashboardStats: {
      SpName: "fn_audit_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnAuditTemplateGet: {
      SpName: "fn_audit_template_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnAuditScheduleWrite: {
      SpName: "fn_audit_schedule_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnAuditScheduleGet: {
      SpName: "fn_audit_schedule_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnScheduleAuditDashboardStatsGet: {
      SpName: "fn_schedule_audit_dashboard_stats_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnAuditReportGet: {
      SpName: "fn_audit_report_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnHandHygieneAuditStatsGet: {
      SpName: "fn_hand_hygiene_audit_stats_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnHandHygieneAuditGrid: {
      SpName: "fn_hand_hygiene_audit_grid",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnDepartmentWiseAuditReportGet: {
      SpName: "fn_department_wise_audit_report_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnRecentComplianceComparisonGet: {
      SpName: "fn_recent_compliance_comparison_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnNonComplianceAuditsGet: {
      SpName: "fn_non_compliance_audits_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnAssessmentTemplateWrite: {
      SpName: "fn_assessment_template_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnAssessmentDashboardStatsGet: {
      SpName: "fn_assessment_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnTrainingScheduleDashboardStatsGet: {
      SpName: "fn_training_schedule_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnAssessmentTemplateList: {
      SpName: "fn_assessment_template_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnTemplateListGet: {
      SpName: "fn_template_list_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ],
    },
    fnTrainingScheduleWriteSave: {
      SpName: "fn_training_schedule_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingScheduleListGet: {
      SpName: "fn_training_schedule_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnserveDateGet: {
      SpName: "fn_get_server_datetime",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnAttendanceListGet: {
      SpName: "fn_attendance_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingAttendanceDashboardStats: {
      SpName: "fn_training_attendance_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnAttendanceWriteSave: {
      SpName: "fn_attendance_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingEmployeeReportGet: {
      SpName: "fn_training_employee_report",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingReportsDashboardStats: {
      SpName: "fn_training_reports_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingScoreWiseReport: {
      SpName: "fn_training_score_wise_report",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingFacultyWiseReport: {
      SpName: "fn_training_faculty_wise_report",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingTrendReport: {
      SpName: "fn_training_trend_report",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingFeedbackWrite: {
      SpName: "fn_training_feedback_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingFeedbackList: {
      SpName: "fn_training_feedback_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingCertificateIssue: {
      SpName: "fn_training_certificate_issue",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingCertificateIssueList: {
      SpName: "fn_training_certificate_issue_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingCompetencyWrite: {
      SpName: "fn_training_competency_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    //License Tracker
    fnLicenseWrite: {
      SpName: "fn_license_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnLicenseGetDetailGet: {
      SpName: "fn_license_get_detail",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnLicenseDashboardSummaryGet: {
      SpName: "fn_license_dashboard_summary",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    //MOU Tracker
    fnMouWrite: {
      SpName: "fn_mou_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnMouGetDetailGet: {
      SpName: "fn_mou_get_detail",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnMouDashboardSummaryGet: {
      SpName: "fn_mou_dashboard_summary",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    //Version Control
    fnDocumentWrite: {
      SpName: "fn_document_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnDocumentGetDetail: {
      SpName: "fn_document_get_detail",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnDocumentDashboardSummary: {
      SpName: "fn_document_dashboard_summary",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    // Document Management — Version Control approval (SUBMIT / APPROVE / REJECT)
    fnDocumentApprovalWrite: {
      SpName: "fn_document_approval_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    // Document Management — Document Library (approved documents) and view / download log
    fnDocumentLibraryGet: {
      SpName: "fn_document_library_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnDocumentViewLogWrite: {
      SpName: "fn_document_view_log_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    // Document Management — Quality Worklist and alert settings
    fnDocumentWorklistGet: {
      SpName: "fn_document_worklist_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnDocAlertSettingGet: {
      SpName: "fn_doc_alert_setting_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnDocAlertSettingWrite: {
      SpName: "fn_doc_alert_setting_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    // Document Management — License renewal and renewal history
    fnLicenseRenewalWrite: {
      SpName: "fn_license_renewal_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnLicenseRenewalHistoryGet: {
      SpName: "fn_license_renewal_history_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    //Training Report
    fnTrainingReport: {
      SpName: "fn_training_report",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingWiseReportGet: {
      SpName: "fn_training_wise_report_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingEmployeeReportGet: {
      SpName: "fn_training_employee_report_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    //Audit Report
    fnAuditScheduleReport: {
      SpName: "fn_audit_schedule_report",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    //Risk Management
    fnRiskDashboardStats: {
      SpName: "fn_risk_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnRiskReport: {
      SpName: "fn_risk_report",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnRiskScoringWrite: {
      SpName: "fn_risk_scoring_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnRiskGetById: {
      SpName: "fn_risk_get_by_id",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnRiskGetList: {
      SpName: "fn_risk_get_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnRiskWrite: {
      SpName: "fn_risk_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    // Risk Management — SRS workflow (report, department scoring, QT review, reopen, amend, linked items)
    fnRiskReportWrite: {
      SpName: "fn_risk_report_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnRiskWorkflowWrite: {
      SpName: "fn_risk_workflow_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnRiskDetailGet: {
      SpName: "fn_risk_detail_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnRiskListGet: {
      SpName: "fn_risk_list_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnRiskDashboardGet: {
      SpName: "fn_risk_dashboard_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    // Incident Management — SRS workflow (report, assign, investigate, HOD review, close, escalate, rules)
    fnIncidentReportWrite: {
      SpName: "fn_incident_report_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIncidentWorkflowWrite: {
      SpName: "fn_incident_workflow_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIncidentDetailGet: {
      SpName: "fn_incident_detail_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIncidentListGet: {
      SpName: "fn_incident_list_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIncidentDashboardGet: {
      SpName: "fn_incident_dashboard_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIncidentRuleGet: {
      SpName: "fn_incident_rule_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIncidentRuleWrite: {
      SpName: "fn_incident_rule_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIncidentOfficerListGet: {
      SpName: "fn_incident_officer_list_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    //Incident Management
    fnIncidentDropDownList: {
      SpName: "fn_incident_drop_down_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIncidentWrite: {
      SpName: "fn_incident_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnCapaActionWrite: {
      SpName: "fn_capa_action_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIncidentGetGrid: {
      SpName: "fn_incident_get_grid",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIncidentDashboardStats: {
      SpName: "fn_incident_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIncidentCharts: {
      SpName: "fn_incident_charts",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //Tasks & Assignments
    fnTaskWrite: {
      SpName: "fn_task_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTaskGetList: {
      SpName: "fn_task_get_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTaskDashboardStats: {
      SpName: "fn_task_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    // Conduct Audits
    fnConductAuditGet: {
      SpName: "fn_conduct_audit_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnConductAuditWrite: {
      SpName: "fn_conduct_audit_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnProviderWrite: {
      SpName: "fn_provider_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnProviderGet: {
      SpName: "fn_provider_master_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnLicenseMasterWrite: {
      SpName: "fn_license_master_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnLicenseMasterGet: {
      SpName: "fn_license_master_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingAttendanceResponseWriteSave: {
      SpName: "fn_training_attendance_response_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingAttendanceWrite: {
      SpName: "fn_training_attendance_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingAssessmentGet: {
      SpName: "fn_training_assessment_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingAttendeeResponseWrite: {
      SpName: "fn_training_attendee_response_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingFeedbackGet: {
      SpName: "fn_training_feedback_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingFeedbackResponseWrite: {
      SpName: "fn_training_feedback_response_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    //Training Feedback
    fnTrainingFeedbackLists: {
      SpName: "fn_training_feedback_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingFeedbackDashboardStats: {
      SpName: "fn_training_feedback_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingFeedbackCharts: {
      SpName: "fn_training_feedback_charts",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    ////Committee management module
    //1)Manage Committee
    fnCommitteeWrite: {
      SpName: "fn_committee_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnCommitteeGetGrid: {
      SpName: "fn_committee_get_grid",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnCommitteeDashboardStats: {
      SpName: "fn_committee_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    //2)Schedule Committee Meeting
    fnMeetingWrite: {
      SpName: "fn_meeting_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnMeetingGetGrid: {
      SpName: "fn_meeting_get_grid",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnMeetingDashboardStatsGet: {
      SpName: "fn_schedule_committee_meeting_dashboard_stats_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //Meeting Attendance
    fnMeetingAttendaceWrite: {
      SpName: "fn_meeting_attendace_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    //3)Manage Meeting MoM's
    fnMomWrite: {
      SpName: "fn_mom_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnMomGetGrid: {
      SpName: "fn_mom_get_grid",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnManageMeetingMomDashboardStats: {
      SpName: "fn_manage_meeting_mom_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //4)Committee Report
    fnCommitteeReportsGetGrid: {
      SpName: "fn_committee_reports_get_grid",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    //Capa Summary
    fnCapaSummaryGet: {
      SpName: "fn_capa_summary_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    ///Vaccination Management
    fnVaccineMasterWrite: {
      SpName: "fn_vaccine_master_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnVaccineMasterGrid: {
      SpName: "fn_vaccine_master_grid",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnVaccineMasterDashboardStats: {
      SpName: "fn_vaccine_master_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    // Category master
    fnKpiCategory: {
      SpName: "fn_kpi_category",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnKpiCategoryGrid: {
      SpName: "fn_kpi_category_grid",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    // KPI Master
    fnKpiWrite: {
      SpName: "fn_kpi_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnKpiListGet: {
      SpName: "fn_kpi_list_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    // KPI Data capture
    fnKpiDataCaptureGet: {
      SpName: "fn_kpi_data_capture_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    //KPI Reports
    fnKpiDashboardStats: {
      SpName: "fn_kpi_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    //KPI CAPA Summary
    fnKpiCapaSummaryList: {
      SpName: "fn_kpi_capa_summary_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnKpiCharts: {
      SpName: "fn_kpi_charts",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnKpiWrite: {
      SpName: "fn_kpi_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnVaccinationCampaignWrite: {
      SpName: "fn_vaccination_campaign_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnVaccinationScheduleGet: {
      SpName: "fn_vaccination_schedule_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnVaccinationScheduleStats: {
      SpName: "fn_vaccination_schedule_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnVaccineAdministrationGet: {
      SpName: "fn_vaccine_administration_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnVaccineAdministrationWrite: {
      SpName: "fn_vaccine_administration_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    // Vaccination — bulk uploads (SRS 2.1 Vaccine Master, 2.3 Vaccination Details)
    fnVaccineMasterBulkWrite: {
      SpName: "fn_vaccine_master_write_bulkupload",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnVaccinationDetailsUpload: {
      SpName: "fn_vaccination_details_upload",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    // Vaccination — certificate data (PDF made in commonRoutingFiles.js) and public QR check
    fnVaccinationCertificateGet: {
      SpName: "fn_vaccination_certificate_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnVaccinationCertificateVerify: {
      SpName: "fn_vaccination_certificate_verify",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    // Vaccination — AEFI (adverse events following immunization) register
    fnVaccinationAefiGet: {
      SpName: "fn_vaccination_aefi_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnVaccinationAefiWrite: {
      SpName: "fn_vaccination_aefi_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    // Vaccination — previous vaccination history (employee requests, approvals)
    fnVaccinationHistoryGet: {
      SpName: "fn_vaccination_history_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnVaccinationHistoryWrite: {
      SpName: "fn_vaccination_history_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    // Vaccination — controlled correction of a completed dose (Admin / Quality)
    fnVaccinationCorrectionWrite: {
      SpName: "fn_vaccination_correction_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    // Vaccination — policy / SOP versions
    fnVaccinationPolicyGet: {
      SpName: "fn_vaccination_policy_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnVaccinationPolicyWrite: {
      SpName: "fn_vaccination_policy_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    // Vaccination — "Vaccinated By" list (all active staff at the session location)
    fnVaccinationStaffListGet: {
      SpName: "fn_vaccination_staff_list_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTrainingCertificateGet: {
      SpName: "fn_training_certificate_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnVaccinationDetailsCharts: {
      SpName: "fn_vaccination_details_charts",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnVaccinationDetailsGet: {
      SpName: "fn_vaccination_details_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },

    //Patient Safety
    fnCpMasterWrite: {
      SpName: "fn_cp_master_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnCpMasterGet: {
      SpName: "fn_cp_master_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnCpAuditWrite: {
      SpName: "fn_cp_audit_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnCpAuditGrid: {
      SpName: "fn_cp_audit_grid",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnCpDashboardStats: {
      SpName: "fn_cp_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnCpDashboardCharts: {
      SpName: "fn_cp_dashboard_charts",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIpsgDashboardStats: {
      SpName: "fn_ipsg_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIpsgDashboardCharts: {
      SpName: "fn_ipsg_dashboard_charts",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIpsgAuditGrid: {
      SpName: "fn_ipsg_audit_grid",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIpsgAuditWrite: {
      SpName: "fn_ipsg_audit_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIpsgMasterGet: {
      SpName: "fn_ipsg_master_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIpsgMasterWrite: {
      SpName: "fn_ipsg_master_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnSurveyCatagoryMasterWrite: {
      SpName: "fn_survey_catagory_master_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnSurveyCatagoryMasterGet: {
      SpName: "fn_survey_catagory_master_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnSafetyCultureSurveyWrite: {
      SpName: "fn_safety_culture_survey_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnSafetyCultureSurveyGet: {
      SpName: "fn_safety_culture_survey_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnSafetyCultureDashboardStats: {
      SpName: "fn_safety_culture_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnSafetyCultureDashboardCharts: {
      SpName: "fn_safety_culture_dashboard_charts",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnIpsgAuditGet: {
      SpName: "fn_ipsg_audit_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnPremTemplateGet: {
      SpName: "fn_prem_template_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnPremTemplateWrite: {
      SpName: "fn_prem_template_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnPremFeedbackWrite: {
      SpName: "fn_prem_feedback_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnSafetyCultureSurveyResponseWrite: {
      SpName: "fn_safety_culture_survey_response_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    // Employee Satisfaction Survey
    fnEssSurveyWrite: {
      SpName: "fn_ess_survey_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnEssSurveyGet: {
      SpName: "fn_ess_survey_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //Dashboard
    fnEssSurveyDashboardGet: {
      SpName: "fn_ess_survey_dashboard_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //CHARTS
    fnFbEssCharts: {
      SpName: "fn_fb_ess_charts",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //Survey Response ,CAPA,REMARKS
    fnEssSurveyResponseWrite: {
      SpName: "fn_ess_survey_response_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnSafetyCultureSurveyReport: {
      SpName: "fn_safety_culture_survey_report",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnEssSurveyReport: {
      SpName: "fn_ess_survey_report",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //PROM
    fnPromTemplateGet: {
      SpName: "fn_prom_template_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnPromTemplateWrite: {
      SpName: "fn_prom_template_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnPromFeedbackWrite: {
      SpName: "fn_prom_feedback_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnPromFeedbackGet: {
      SpName: "fn_prom_feedback_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnPromDashboardStats: {
      SpName: "fn_prom_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //Grievance & Complaint Management
    fnComplaintWrite: {
      SpName: "fn_complaint_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnComplaintGet: {
      SpName: "fn_complaint_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnFbComplaintDashboardStats: {
      SpName: "fn_fb_complaint_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnFbComplaintCharts: {
      SpName: "fn_fb_complaint_charts",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //Care Continuity Master
    fnPromCcTemplateWrite: {
      SpName: "fn_prom_cc_template_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnPromCcTemplateGet: {
      SpName: "fn_prom_cc_template_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnCareContinuityGet: {
      SpName: "fn_care_continuity_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnCareContinuityWrite: {
      SpName: "fn_care_continuity_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //PREM
    fnPremFeedbackGet: {
      SpName: "fn_prem_feedback_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnPremDashboardStats: {
      SpName: "fn_prem_dashboard_stats",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnFbPremDfCharts: {
      SpName: "fn_fb_prem_df_charts",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnFbPremDSfCharts: {
      SpName: "fn_fb_prem_dsf_charts",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnFbPremOPfCharts: {
      SpName: "fn_fb_prem_opf_charts",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnFbPromCharts: {
      SpName: "fn_fb_prom_charts",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //security
    //Role
    fnRoleWrite: {
      SpName: "fn_role_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnRoleGet: {
      SpName: "fn_role_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //Organization
    fnOrganizationWrite: {
      SpName: "fn_organization_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnSecurityDropdownGet: {
      SpName: "fn_security_dropdown_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnOrganizationDetails: {
      SpName: "fn_organization_details",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnOrgApprovalWrite: {
      SpName: "fn_org_approval_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //Location
    fnLocationWrite: {
      SpName: "fn_location_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnLocationDetails: {
      SpName: "fn_location_details",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //Module Document Mapping
    fnModuleWrite: {
      SpName: "fn_module_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnModuleList: {
      SpName: "fn_module_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnModuleDocumentMapWrite: {
      SpName: "fn_module_document_map_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //Document
    fnDocumentMasterWrite: {
      SpName: "fn_document_master_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnDocumentMasterList: {
      SpName: "fn_document_master_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnModuleDocumentMapList: {
      SpName: "fn_module_document_map_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //New User
    fnUserWrite: {
      SpName: "fn_user_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnUserGet: {
      SpName: "fn_user_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //Access Role
    fnRoleDocAccessList: {
      SpName: "fn_role_doc_access_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnRoleDocAccessWrite: {
      SpName: "fn_role_doc_access_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //Access User
    fnUserDocAccessList: {
      SpName: "fn_user_doc_access_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnUserDocAccessWrite: {
      SpName: "fn_user_doc_access_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //Password Policy
    fnPasswordPolicyWrite: {
      SpName: "fn_password_policy_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnPasswordPolicyList: {
      SpName: "fn_password_policy_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnGetLoginUser: {
      SpName: "fn_get_login_user",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    refresh: {
      SpName: "fn_get_login_user",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnUserPermissionsList: {
      SpName: "fn_user_permissions_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnUserSessionWrite: {
      SpName: "fn_user_session_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnApprovalWorkflowConfigWrite: {
      SpName: "fn_approval_workflow_config_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnApprovalWorkflowConfigList: {
      SpName: "fn_approval_workflow_config_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fn_my_workspace_listApi: {
      SpName: "fn_my_workspace_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fn_my_workspace_calendarApi: {
      SpName: "fn_my_workspace_calendar_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnDashboardChartsApi: {
      SpName: "fn_dashboard_charts",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnHrDashboardChartsApi: {
      SpName: "fn_hr_dashboard_charts",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnNtfcnListApi: {
      SpName: "fn_notification_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnNtfcnWriteApi: {
      SpName: "fn_notification_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnSettingListApi: {
      SpName: "fn_setting_list",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnSettingWriteApi: {
      SpName: "fn_setting_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    //Entity
    fnCommonGridGet: {
      SpName: "fn_common_grid_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnEntityMasterWrite: {
      SpName: "fn_entity_master_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnEntityMasterGet: {
      SpName: "fn_entity_master_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnEntityGrid: {
      SpName: "fn_entity_grid",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnResponseScaleWrite: {
      SpName: "fn_response_scale_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnResponseScaleGet: {
      SpName: "fn_response_scale_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnQuestionMasterWrite: {
      SpName: "fn_question_master_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnQuestionMasterGet: {
      SpName: "fn_question_master_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTemplateGet: {
      SpName: "fn_template_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnTemplatewrite: {
      SpName: "fn_template_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnScheduleGet: {
      SpName: "fn_schedule_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnScheduleWrite: {
      SpName: "fn_schedule_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
     fnAppStngGet: {
      SpName: "fn_application_setting_get",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnAppStngWrite: {
      SpName: "fn_application_setting_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    },
    fnHqmsUserMobileEmailOtpWrite: {
      SpName: "fn_hqms_user_mobile_email_otp_write",
      Schema: [
        { type: "jsonb", column: "p_input", direction: "IN", alias: "p_input" },
      ]
    }
  }
};
