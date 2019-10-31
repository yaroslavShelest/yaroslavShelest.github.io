$(document).ready(function () {
  /* Filter portfolio */
  /* Button wd */
  $('.button[filter="wd"]').click(function(){
    
    if($(this).attr('val')==='off'){
        
        $('.button[filter]').attr('val', 'off').removeClass('focused');
        
        $(this).attr('val','on').addClass('focused');
    
        $('.filter > div').hide(300);
        $('.filter > div[filter="wd"]').show(300);
    }  
  });
  /* Button ud */
  $('.button[filter="ud"]').click(function(){
    if($(this).attr('val')==='off'){
        
        $('.button[filter]').attr('val', 'off').removeClass('focused');
        
        $(this).attr('val','on').addClass('focused');;
    
        $('.filter > div').hide(300);
        $('.filter > div[filter="ud"]').show(300);
    }
  });
  /* Button moc */
  $('.button[filter="moc"]').click(function(){
    if($(this).attr('val')==='off'){
        
        $('.button[filter]').attr('val', 'off').removeClass('focused');
        
        $(this).attr('val','on').addClass('focused');;
    
        $('.filter > div').hide(300);
        $('.filter > div[filter="moc"]').show(300);
    }
    
  });
  /* Button all */
  $('.button[filter="all"]').click(function(){
    if($(this).attr('val')==='off'){
        
        $('.button[filter]').attr('val', 'off').removeClass('focused');
        
        $(this).attr('val','on').addClass('focused');;
    
        $('.filter > div').show(300);  
    }  
  });

/* Menu */
  $(function() {

    let header = $("#nav"),
        introH = $("#services").innerHeight(),
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
  }})
  
});