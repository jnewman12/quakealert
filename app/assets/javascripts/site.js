//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    /*
    $('.page-scroll a').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
    I think for this, they tried to make the href an anchor, not sure
*/

    $('.page-scroll a').bind('click', function(event){
        $('html, body').animate({
            scrollTop: $("#features").offset().top
        }, 1500);
        event.preventDefault();
    });


    $('.page-test a').click(function(event){
        $('html, body').stop().animate({
            scrollTop: $("#test1").offset().top
        }, 100);
        event.preventDefault();
    });

/*
    $("#button").click(function(){
    $('html, body').animate({
        scrollTop: $("#f").offset().top
    }, 2000);
    event.preventDefault();
   });
*/   

});
