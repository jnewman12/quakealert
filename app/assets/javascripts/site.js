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
*/

    $('.page-scroll a').click(function(){
        $('html, body').animate({
            scrollTop: $("#test").offset().top
        }, 2000);
        event.preventDefault();
    });

    $('.page-test a').click(function(){
        $('html, body').animate({
            scrollTop: $("#test1").offset().top
        }, 1500);
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
