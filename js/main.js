$(document).ready(function(){
    $('.navbar-nav a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
    });
    
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $('header').addClass('py-2');
            $('header').css('background-color','rgba(0,0,0,0.6)');
            $('.navbar-brand').addClass('small-logo');
        } else {
            $('header').removeClass('py-2');
            $('.navbar-brand').removeClass('small-logo');
            $('header').css('background-color','rgba(0,0,0,0.3)');
        }
    });
    
    
    
    
});