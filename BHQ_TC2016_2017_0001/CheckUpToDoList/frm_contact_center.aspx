﻿<%@ Page Title="" Language="C#" MasterPageFile="~/HeadToDoListNew.Master" AutoEventWireup="true" CodeBehind="frm_contact_center.aspx.cs" Inherits="CheckUpToDoList.frm_contact_center" %>

<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder_body" runat="server">
<table style="width:1270px;">
<tr>
    <td style="width:280px;border-right:1px dashed gray; vertical-align:top;"><iframe id="frm1" name="frm1" style="border:none;height:740px;width:280px;" src="frm_contact_center_search.aspx" runat="server"></iframe></td>
    <td style="width:960px; vertical-align:top;"><iframe id="frm2" runat="server" name="frm2" src="frm_contact_center_content.aspx" style="width:960px;height:740px;border:none;"></iframe></td>
</tr>
</table>
   <%--<script type="text/javascript">
       document.getElementById("frm2").onload = function () {
           calcHeight();
       };

       function calcHeight() {

           var frm_height = (document.getElementById('frm2').contentWindow.document.body.offsetHeight) + 'px';
           document.getElementById('frm2').style.height = frm_height;
           document.getElementById('ctl00_ContentPlaceHolder_body_frm1').style.height = frm_height;
       }
    </script>--%>
</asp:Content>
