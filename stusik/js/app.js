$(document).ready(function () {
/* Counter*/
let time = 2;
let cc = 1;
$(window).scroll(function(){

$('#achievements').each(function(){
  let
  cPos = $(this).offset().top,
  topWindow = $(window).scrollTop();
  if(cPos < topWindow + 200 ){
    if(cc<2){
  $('span').each(function(){
    let 
    i = 1,
    num = $(this).data('num'),
    step = 1500 * time / num,
    that = $(this),
    int = setInterval(function(){
      if (i <= num) {
        that.html(i);
      }
      else {
        clearInterval(int);
      }
      i++;
    },step);
  });
  cc = 2;
}
}
});
})
/* Menu*/
$(function() {

    let header = $("#nav"),
        introH = $("#about").innerHeight(),
        scrollOffset = $(window).scrollTop();
    /* Fixed Header */
    $(window).on("scroll", function() {
        scrollOffset = $(this).scrollTop();

        checkScroll(scrollOffset);
    });

    function checkScroll(scrollOffset) {
        if( scrollOffset >= introH ) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
	}
	/* Scroll to click */
	$("[data-scroll]").on("click", function(event) {
        event.preventDefault();


        let blockId = $(this).data('scroll')
        let  blockOffset = $(blockId).offset().top;
       
       
        $("html, body").animate({
            scrollTop:  blockOffset
        }, 400); // Scroll time
    });
})
});

