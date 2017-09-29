// Nav Panel
$(document).ready(
function(){
	$("#section_location").click(function () {
		$("#detail_location").slideToggle(1000);
	});
	$("#section_entry").click(function () {
		$("#detail_entry").slideToggle(1000);
	});
	$("#section_advice").click(function () {
		$("#detail_advice").slideToggle(1000);
	});
	$("#section_include").click(function () {
		$("#detail_include").slideToggle(1000);
	});
	$("#section_upgrade").click(function () {
		$("#detail_upgrade").slideToggle(1000);
	});
});

$(document).ready(
function(){
$("#menu").click(function () {
		$("#navPanel").toggle();
	});
});
