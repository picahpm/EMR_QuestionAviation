﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace CheckUpToDoList
{
    public partial class testCalendarMaster : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            TxtInvDate.Attributes.Add("onclick", "displayCalendar(document.getElementById('" + this.TxtInvDate.ClientID + "'),this)");
        }
    }
}