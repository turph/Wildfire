// How it works sections
$(document).ready(
function(){
    $("#mobileVoucher").click(function () {
        $("#do_mobileVoucher").show();
        $("#do_printVoucher").hide();
        $("#do_bothVoucher").hide();
        $("#do_mobileTicket_tb").hide();
        $("#do_mobileTicket_c3").hide();
        $("#do_eTicket").hide();
				$('.sideNav li a').removeClass();
				$('.sideNav #mobileVoucher').addClass("here");
    });
    $("#printVoucher").click(function () {
        $("#do_mobileVoucher").hide();
        $("#do_printVoucher").show();
        $("#do_bothVoucher").hide();
        $("#do_mobileTicket_tb").hide();
        $("#do_mobileTicket_c3").hide();
        $("#do_eTicket").hide();
				$('.sideNav li a').removeClass();
				$('.sideNav #printVoucher').addClass("here");
    });
    $("#bothVoucher").click(function () {
        $("#do_mobileVoucher").hide();
        $("#do_printVoucher").hide();
        $("#do_bothVoucher").show();
        $("#do_mobileTicket_tb").hide();
        $("#do_mobileTicket_c3").hide();
        $("#do_eTicket").hide();
				$('.sideNav li a').removeClass();
				$('.sideNav #bothVoucher').addClass("here");
    });
    $("#mobileTicket_tb").click(function () {
        $("#do_mobileVoucher").hide();
        $("#do_printVoucher").hide();
        $("#do_bothVoucher").hide();
        $("#do_mobileTicket_tb").show();
        $("#do_mobileTicket_c3").hide();
        $("#do_eTicket").hide();
				$('.sideNav li a').removeClass();
				$('.sideNav #mobileTicket_tb').addClass("here");
    });
    $("#mobileTicket_c3").click(function () {
        $("#do_mobileVoucher").hide();
        $("#do_printVoucher").hide();
        $("#do_bothVoucher").hide();
        $("#do_mobileTicket_tb").hide();
        $("#do_mobileTicket_c3").show();
        $("#do_eTicket").hide();
				$('.sideNav li a').removeClass();
				$('.sideNav #mobileTicket_c3').addClass("here");
    });
    $("#eTicket").click(function () {
        $("#do_mobileVoucher").hide();
        $("#do_printVoucher").hide();
        $("#do_bothVoucher").hide();
        $("#do_mobileTicket_tb").hide();
        $("#do_mobileTicket_c3").hide();
        $("#do_eTicket").show();
				$('.sideNav li a').removeClass();
				$('.sideNav #eTicket').addClass("here");
    });
    $("#viewDesktop").click(function () {
				$('#contentWrapper').removeClass();
				$('#contentWrapper').addClass("desktopWidth");
				$('#viewPhone').removeClass();
				$('#viewDesktop').addClass("here");
    });
    $("#viewPhone").click(function () {
				$('#contentWrapper').removeClass();
				$('#contentWrapper').addClass("phoneWidth");
				$('#viewDesktop').removeClass();
				$('#viewPhone').addClass("here");
    });
});