﻿
$(document).ready(function () {
    $("#txtVisitDate").datepicker({ dateFormat: 'dd/mm/yy', inline: true
    });
    $("#txtBirthDate").datepicker({ dateFormat: 'dd/mm/yy', inline: true
    });
    $("#txtDOB").datepicker({ dateFormat: 'dd/mm/yy', inline: true
    });
    $("#txtDateHaveExam").datepicker({ dateFormat: 'dd/mm/yy', inline: true
    });
    $("#txtMedicationStartDate").datepicker({ dateFormat: 'dd/mm/yy', inline: true
    });

    if ($("#rdMainQuestion17_yes").attr("checked")) {
        $("#divQuestion17Yes").show();
    } else {
        $("#divQuestion17Yes").hide();
    }
    $("#rdMainQuestion17_no").click(function () {
        $("#divQuestion17Yes").slideUp("slow", function () {
            $("#txtQuestion17Yes").val("");
        });
    });
    $("#rdMainQuestion17_yes").click(function () {
        $("#divQuestion17Yes").slideDown("slow", function () {
            $("#txtQuestion17Yes").val("");
            $("#divQuestion17Yes").show();
        });
    });
    if ($("#rdMainQuestion18_yes").attr("checked")) {
        $("#divQuestion18Yes").show();
    } else {
        $("#divQuestion18Yes").hide();
    }
    $("#rdMainQuestion18_no").click(function () {
        $("#divQuestion18Yes").slideUp("slow", function () {
            $("#txtQuestion18Yes").val("");
        });
    });
    $("#rdMainQuestion18_yes").click(function () {
        $("#divQuestion18Yes").slideDown("slow", function () {
            $("#txtQuestion18Yes").val("");
            $("#divQuestion18Yes").show();
        });
    });
    if ($("#rdMainQuestion19_yes").attr("checked")) {
        $("#divQuestion19Yes").show();
    } else {
        $("#divQuestion19Yes").hide();
    }
    $("#rdMainQuestion19_no").click(function () {
        $("#divQuestion19Yes").slideUp("slow", function () {
            $("#txtQuestion19Yes").val("");
        });
    });
    $("#rdMainQuestion19_yes").click(function () {
        $("#divQuestion19Yes").slideDown("slow", function () {
            $("#txtQuestion19Yes").val("");
            $("#divQuestion19Yes").show();
        });
    });
    if ($("#rdMainQuestion20_yes").attr("checked")) {
        $("#divQuestion20Yes").show();
    } else {
        $("#divQuestion20Yes").hide();
    }
    $("#rdMainQuestion20_no").click(function () {
        $("#divQuestion20Yes").slideUp("slow", function () {
            $("#txtQuestion20Yes").val("");
        });
    });
    $("#rdMainQuestion20_yes").click(function () {
        $("#divQuestion20Yes").slideDown("slow", function () {
            $("#txtQuestion20Yes").val("");
            $("#divQuestion20Yes").show();
        });
    });
    if ($("#rdMainQuestion21_yes").attr("checked")) {
        $("#divQuestion21Yes").show();
    } else {
        $("#divQuestion21Yes").hide();
    }
    $("#rdMainQuestion21_no").click(function () {
        $("#divQuestion21Yes").slideUp("slow", function () {
            $("#txtQuestion21Yes").val("");
        });
    });
    $("#rdMainQuestion21_yes").click(function () {
        $("#divQuestion21Yes").slideDown("slow", function () {
            $("#txtQuestion21Yes").val("");
            $("#divQuestion21Yes").show();
        });
    });
    if ($("#rdMainQuestion22_yes").attr("checked")) {
        $("#divQuestion22Yes").show();
    } else {
        $("#divQuestion22Yes").hide();
    }
    $("#rdMainQuestion22_no").click(function () {
        $("#divQuestion22Yes").slideUp("slow", function () {
            $("#txtQuestion22Yes").val("");
        });
    });
    $("#rdMainQuestion22_yes").click(function () {
        $("#divQuestion22Yes").slideDown("slow", function () {
            $("#txtQuestion22Yes").val("");
            $("#divQuestion22Yes").show();
        });
    });
    if ($("#rdMainQuestion23_yes").attr("checked")) {
        $("#divQuestion23Yes").show();
    } else {
        $("#divQuestion23Yes").hide();
    }
    $("#rdMainQuestion23_no").click(function () {
        $("#divQuestion23Yes").slideUp("slow", function () {
            $("#txtQuestion23Yes").val("");
        });
    });
    $("#rdMainQuestion23_yes").click(function () {
        $("#divQuestion23Yes").slideDown("slow", function () {
            $("#txtQuestion23Yes").val("");
            $("#divQuestion23Yes").show();
        });
    });
    if ($("#rdMainQuestion24_yes").attr("checked")) {
        $("#divQuestion24Yes").show();
    } else {
        $("#divQuestion24Yes").hide();
    }
    $("#rdMainQuestion24_no").click(function () {
        $("#divQuestion24Yes").slideUp("slow", function () {
            $("#txtQuestion24Yes").val("");
        });
    });
    $("#rdMainQuestion24_yes").click(function () {
        $("#divQuestion24Yes").slideDown("slow", function () {
            $("#txtQuestion24Yes").val("");
            $("#divQuestion24Yes").show();
        });
    });
    if ($("#rdMainQuestion25_yes").attr("checked")) {
        $("#divQuestion25Yes").show();
    } else {
        $("#divQuestion25Yes").hide();
    }
    $("#rdMainQuestion25_no").click(function () {
        $("#divQuestion25Yes").slideUp("slow", function () {
            $("#txtQuestion25Yes").val("");
        });
    });
    $("#rdMainQuestion25_yes").click(function () {
        $("#divQuestion25Yes").slideDown("slow", function () {
            $("#txtQuestion25Yes").val("");
            $("#divQuestion25Yes").show();
        });
    });
    if ($("#rdMainQuestion26_yes").attr("checked")) {
        $("#divQuestion26Yes").show();
    } else {
        $("#divQuestion26Yes").hide();
    }
    $("#rdMainQuestion26_no").click(function () {
        $("#divQuestion26Yes").slideUp("slow", function () {
            $("#txtQuestion26Yes").val("");
        });
    });
    $("#rdMainQuestion26_yes").click(function () {
        $("#divQuestion26Yes").slideDown("slow", function () {
            $("#txtQuestion26Yes").val("");
            $("#divQuestion26Yes").show();
        });
    });
    if ($("#rdMainQuestion27_yes").attr("checked")) {
        $("#divQuestion27Yes").show();
    } else {
        $("#divQuestion27Yes").hide();
    }
    $("#rdMainQuestion27_no").click(function () {
        $("#divQuestion27Yes").slideUp("slow", function () {
            $("#txtQuestion27Yes").val("");
        });
    });
    $("#rdMainQuestion27_yes").click(function () {
        $("#divQuestion27Yes").slideDown("slow", function () {
            $("#txtQuestion27Yes").val("");
            $("#divQuestion27Yes").show();
        });
    });
    if ($("#rdMainQuestion28_yes").attr("checked")) {
        $("#divQuestion28Yes").show();
    } else {
        $("#divQuestion28Yes").hide();
    }
    $("#rdMainQuestion28_no").click(function () {
        $("#divQuestion28Yes").slideUp("slow", function () {
            $("#txtQuestion28Yes").val("");
        });
    });
    $("#rdMainQuestion28_yes").click(function () {
        $("#divQuestion28Yes").slideDown("slow", function () {
            $("#txtQuestion28Yes").val("");
            $("#divQuestion28Yes").show();
        });
    });
    if ($("#rdMainQuestion29_yes").attr("checked")) {
        $("#divQuestion29Yes").show();
    } else {
        $("#divQuestion29Yes").hide();
    }
    $("#rdMainQuestion29_no").click(function () {
        $("#divQuestion29Yes").slideUp("slow", function () {
            $("#txtQuestion29Yes").val("");
        });
    });
    $("#rdMainQuestion29_yes").click(function () {
        $("#divQuestion29Yes").slideDown("slow", function () {
            $("#txtQuestion29Yes").val("");
            $("#divQuestion29Yes").show();
        });
    });
    if ($("#rdMainQuestion30_yes").attr("checked")) {
        $("#divQuestion30Yes").show();
    } else {
        $("#divQuestion30Yes").hide();
    }
    $("#rdMainQuestion30_no").click(function () {
        $("#divQuestion30Yes").slideUp("slow", function () {
            $("#txtQuestion30Yes").val("");
        });
    });
    $("#rdMainQuestion30_yes").click(function () {
        $("#divQuestion30Yes").slideDown("slow", function () {
            $("#txtQuestion30Yes").val("");
            $("#divQuestion30Yes").show();
        });
    });
    if ($("#rdMainQuestion31_yes").attr("checked")) {
        $("#divQuestion31Yes").show();
    } else {
        $("#divQuestion31Yes").hide();
    }
    $("#rdMainQuestion31_no").click(function () {
        $("#divQuestion31Yes").slideUp("slow", function () {
            $("#txtQuestion31Yes").val("");
        });
    });
    $("#rdMainQuestion31_yes").click(function () {
        $("#divQuestion31Yes").slideDown("slow", function () {
            $("#txtQuestion31Yes").val("");
            $("#divQuestion31Yes").show();
        });
    });
    if ($("#rdMainQuestion32_yes").attr("checked")) {
        $("#divQuestion32Yes").show();
    } else {
        $("#divQuestion32Yes").hide();
    }
    $("#rdMainQuestion32_no").click(function () {
        $("#divQuestion32Yes").slideUp("slow", function () {
            $("#txtQuestion32Yes").val("");
        });
    });
    $("#rdMainQuestion32_yes").click(function () {
        $("#divQuestion32Yes").slideDown("slow", function () {
            $("#txtQuestion32Yes").val("");
            $("#divQuestion32Yes").show();
        });
    });
    if ($("#rdMainQuestion33_yes").attr("checked")) {
        $("#divQuestion33Yes").show();
    } else {
        $("#divQuestion33Yes").hide();
    }
    $("#rdMainQuestion33_no").click(function () {
        $("#divQuestion33Yes").slideUp("slow", function () {
            $("#txtQuestion33Yes").val("");
        });
    });
    $("#rdMainQuestion33_yes").click(function () {
        $("#divQuestion33Yes").slideDown("slow", function () {
            $("#txtQuestion33Yes").val("");
            $("#divQuestion33Yes").show();
        });
    });
    if ($("#rdMainQuestion34_yes").attr("checked")) {
        $("#divQuestion34Yes").show();
    } else {
        $("#divQuestion34Yes").hide();
    }
    $("#rdMainQuestion34_no").click(function () {
        $("#divQuestion34Yes").slideUp("slow", function () {
            $("#txtQuestion34Yes").val("");
        });
    });
    $("#rdMainQuestion34_yes").click(function () {
        $("#divQuestion34Yes").slideDown("slow", function () {
            $("#txtQuestion34Yes").val("");
            $("#divQuestion34Yes").show();
        });
    });
    if ($("#rdMainQuestion35_yes").attr("checked")) {
        $("#divQuestion35Yes").show();
    } else {
        $("#divQuestion35Yes").hide();
    }
    $("#rdMainQuestion35_no").click(function () {
        $("#divQuestion35Yes").slideUp("slow", function () {
            $("#txtQuestion35Yes").val("");
        });
    });
    $("#rdMainQuestion35_yes").click(function () {
        $("#divQuestion35Yes").slideDown("slow", function () {
            $("#txtQuestion35Yes").val("");
            $("#divQuestion35Yes").show();
        });
    });
    if ($("#rdMainQuestion36_yes").attr("checked")) {
        $("#divQuestion36Yes").show();
    } else {
        $("#divQuestion36Yes").hide();
    }
    $("#rdMainQuestion36_no").click(function () {
        $("#divQuestion36Yes").slideUp("slow", function () {
            $("#txtQuestion36Yes").val("");
        });
    });
    $("#rdMainQuestion36_yes").click(function () {
        $("#divQuestion36Yes").slideDown("slow", function () {
            $("#txtQuestion36Yes").val("");
            $("#divQuestion36Yes").show();
        });
    });
    if ($("#rdMainQuestion37_yes").attr("checked")) {
        $("#divQuestion37Yes").show();
    } else {
        $("#divQuestion37Yes").hide();
    }
    $("#rdMainQuestion37_no").click(function () {
        $("#divQuestion37Yes").slideUp("slow", function () {
            $("#txtQuestion37Yes").val("");
        });
    });
    $("#rdMainQuestion37_yes").click(function () {
        $("#divQuestion37Yes").slideDown("slow", function () {
            $("#txtQuestion37Yes").val("");
            $("#divQuestion37Yes").show();
        });
    }); 
    if ($("#rdMainQuestion38_yes").attr("checked")) {
        $("#divQuestion38Yes").show();
    } else {
        $("#divQuestion38Yes").hide();
    }
    $("#rdMainQuestion38_no").click(function () {
        $("#divQuestion38Yes").slideUp("slow", function () {
            $("#txtQuestion38Yes").val("");
        });
    });
    $("#rdMainQuestion38_yes").click(function () {
        $("#divQuestion38Yes").slideDown("slow", function () {
            $("#txtQuestion38Yes").val("");
            $("#divQuestion38Yes").show();
        });
    });
    if ($("#rdMainQuestion39_yes").attr("checked")) {
        $("#divQuestion39Yes").show();
    } else {
        $("#divQuestion39Yes").hide();
    }
    $("#rdMainQuestion39_no").click(function () {
        $("#divQuestion39Yes").slideUp("slow", function () {
            $("#txtQuestion39Yes").val("");
        });
    });
    $("#rdMainQuestion39_yes").click(function () {
        $("#divQuestion39Yes").slideDown("slow", function () {
            $("#txtQuestion39Yes").val("");
            $("#divQuestion39Yes").show();
        });
    });
    if ($("#rdMainQuestion40_yes").attr("checked")) {
        $("#divQuestion40Yes").show();
    } else {
        $("#divQuestion40Yes").hide();
    }
    $("#rdMainQuestion40_no").click(function () {
        $("#divQuestion40Yes").slideUp("slow", function () {
            $("#txtQuestion40Yes").val("");
        });
    });
    $("#rdMainQuestion40_yes").click(function () {
        $("#divQuestion40Yes").slideDown("slow", function () {
            $("#txtQuestion40Yes").val("");
            $("#divQuestion40Yes").show();
        });
    });
    if ($("#rdMainQuestion41_yes").attr("checked")) {
        $("#divQuestion41Yes").show();
    } else {
        $("#divQuestion41Yes").hide();
    }
    $("#rdMainQuestion41_no").click(function () {
        $("#divQuestion41Yes").slideUp("slow", function () {
            $("#txtQuestion41Yes").val("");
        });
    });
    $("#rdMainQuestion41_yes").click(function () {
        $("#divQuestion41Yes").slideDown("slow", function () {
            $("#txtQuestion41Yes").val("");
            $("#divQuestion41Yes").show();
        });
    });
    if ($("#rdMainQuestion42_yes").attr("checked")) {
        $("#divQuestion42Yes").show();
    } else {
        $("#divQuestion42Yes").hide();
    }
    $("#rdMainQuestion42_no").click(function () {
        $("#divQuestion42Yes").slideUp("slow", function () {
            $("#txtQuestion42Yes").val("");
        });
    });
    $("#rdMainQuestion42_yes").click(function () {
        $("#divQuestion42Yes").slideDown("slow", function () {
            $("#txtQuestion42Yes").val("");
            $("#divQuestion42Yes").show();
        });
    });
    if ($("#rdMainQuestion44_yes").attr("checked")) {
        $("#divQuestion44Yes").show();
    } else {
        $("#divQuestion44Yes").hide();
    }
    $("#rdMainQuestion44_no").click(function () {
        $("#divQuestion44Yes").slideUp("slow", function () {
            $("#txtQuestion44Yes").val("");
        });
    });
    $("#rdMainQuestion44_yes").click(function () {
        $("#divQuestion44Yes").slideDown("slow", function () {
            $("#txtQuestion44Yes").val("");
            $("#divQuestion44Yes").show();
        });
    });

});