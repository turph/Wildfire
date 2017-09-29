var  mn = $(".sectionNav");
    mns = "sectionNav-scrolled";
    hdr = $('.hero').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});

$(document).ready(
function(){
    $("#sectionMenuArrow").click(function () {
        $(".sectionMenu").toggle();
    });
    $(".sectionMenu a").click(function () {
        $(".sectionMenu").hide();
    });

});
