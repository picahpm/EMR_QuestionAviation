﻿using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Drawing;
using System.Data;
using System.Linq;
using System.Text;
using System.Windows.Forms;
using DBCheckup;

namespace BKvs2010.UserControlEMR
{
    public partial class ChestXrayUC : UserControl
    {
        public ChestXrayUC()
        {
            InitializeComponent();
        }

        private trn_patient_regi _PatientRegis;
        public trn_patient_regi PatientRegis
        {
            get { return _PatientRegis; }
            set
            {
                if (value == null)
                {
                    Clear();
                }
                else
                {
                    try
                    {
                        List<trn_chest_xray> PatientChestXray = value.trn_chest_xrays.ToList();

                        HisResult = PatientChestXray
                                    .Where(x => x.tcx_en_no != value.tpr_en_no)
                                    .GroupBy(x => x.tcx_en_no)
                                    .Select((x, i) => new HistoryResult
                                    {
                                        en = x.Key,
                                        visitDate = x.Select(y => y.tcx_order_date.Value).OrderBy(y => y).FirstOrDefault()
                                    }).OrderByDescending(x => x.visitDate).ToList();

                        BsCurrentResultDtl = new BindingSource();
                        CurrentResultDetail curDtl = PatientChestXray
                                                     .Where(x => x.tcx_en_no == value.tpr_en_no)
                                                     .Select(x => new CurrentResultDetail
                                                     {
                                                         OrderDate = x.tcx_order_date,
                                                         OverseenBy = x.tcx_overseen_by,
                                                         ResultDate = x.tcx_result_date,
                                                         ResultName = x.tcx_order_name,
                                                         ResultText = x.tcx_result
                                                     }).FirstOrDefault();
                        if (curDtl == null) curDtl = new CurrentResultDetail();
                        BsCurrentResultDtl.DataSource = curDtl;

                        int inxHR = 1;
                        HisResult.ForEach(x => x.index = inxHR++);
                        foreach (HistoryResult hr in HisResult)
                        {
                            HistoryResultDetail reDtl = PatientChestXray
                                                        .Where(x => x.tcx_en_no == hr.en)
                                                        .Select(x => new HistoryResultDetail
                                                        {
                                                            en = x.tcx_en_no,
                                                            OrderDate = x.tcx_order_date,
                                                            OverseenBy = x.tcx_overseen_by,
                                                            ResultDate = x.tcx_result_date,
                                                            ResultName = x.tcx_order_name,
                                                            ResultText = x.tcx_result
                                                        }).FirstOrDefault();
                            hr.HistoryResultDetails.Add(reDtl);
                        }

                        BsResult = new BindingSource();
                        BsResult.DataSource = HisResult;
                        BsResultDtl = new BindingSource();
                        BsResultDtl.DataSource = BsResult;
                        BsResultDtl.DataMember = "HistoryResultDetails";
                        GridHistory.DataSource = BsResult;
                        txtOldOrder.DataBindings.Add(new Binding("Text", BsResultDtl, "ResultName", true));
                        txtOldOrderDate.DataBindings.Add(new Binding("Text", BsResultDtl, "OrderDate", true) { FormatString = "dd/MM/yyyy" });
                        txtOldOrderTime.DataBindings.Add(new Binding("Text", BsResultDtl, "OrderDate", true) { FormatString = "HH:mm:ss" });
                        txtOldResultDate.DataBindings.Add(new Binding("Text", BsResultDtl, "ResultDate", true) { FormatString = "dd/MM/yyyy" });
                        txtOldResultTime.DataBindings.Add(new Binding("Text", BsResultDtl, "ResultDate", true) { FormatString = "HH:mm:ss" });
                        txtOldOverSeenBy.DataBindings.Add(new Binding("Text", BsResultDtl, "OverseenBy", true));
                        txtOldResult.DataBindings.Add(new Binding("Text", BsResultDtl, "resultText", true));

                        txtOrder.DataBindings.Add(new Binding("Text", BsCurrentResultDtl, "ResultName", true));
                        txtOrderDate.DataBindings.Add(new Binding("Text", BsCurrentResultDtl, "OrderDate", true) { FormatString = "dd/MM/yyyy" });
                        txtOrderTime.DataBindings.Add(new Binding("Text", BsCurrentResultDtl, "OrderDate", true) { FormatString = "HH:mm:ss" });
                        txtResultDate.DataBindings.Add(new Binding("Text", BsCurrentResultDtl, "ResultDate", true) { FormatString = "dd/MM/yyyy" });
                        txtResultTime.DataBindings.Add(new Binding("Text", BsCurrentResultDtl, "ResultDate", true) { FormatString = "HH:mm:ss" });
                        txtOverSeenBy.DataBindings.Add(new Binding("Text", BsCurrentResultDtl, "OverseenBy", true));
                        txtResulttext.DataBindings.Add(new Binding("Text", BsCurrentResultDtl, "resultText", true));

                        bsPatientRegis.DataSource = value;
                        _PatientRegis = value;
                        this.Enabled = true;
                    }
                    catch (Exception ex)
                    {
                        Clear();
                        Program.MessageError(this.Name, "patientRegis", ex, false);
                    }
                }
            }
        }

        private BindingSource BsResult;
        private BindingSource BsResultDtl;
        private BindingSource BsCurrentResultDtl;
        private List<HistoryResult> HisResult;

        public void Clear()
        {
            this.Enabled = false;
            bsPatientRegis.DataSource = new trn_patient_regi();
            _PatientRegis = null;
        }
        public void EndEdit()
        {
            DateTime dateNow = Program.GetServerDateTime();
            string user_name = Program.CurrentUser == null ? null : Program.CurrentUser.mut_username;
        }
    }
}
