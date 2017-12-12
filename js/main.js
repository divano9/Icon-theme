$(document).ready(function () {
    $('.navbar-nav a, .landing .container > a').click(function () {
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
    });

    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 150) {
            $('header').addClass('py-2');
            $('header').css('background-color', 'rgba(0,0,0,0.6)');
            $('.navbar-brand').addClass('small-logo');
        } else {
            $('header').removeClass('py-2');
            $('.navbar-brand').removeClass('small-logo');
            $('header').css('background-color', 'rgba(0,0,0,0.3)');
        }
    });


//ROUND SLIDER (PROCENTI)


    $(window).scroll(function () {
        percent();
    });
    percent();


    function percent() {
        var vh = $(window).height();
        var scroll = $(window).scrollTop();

        $('.cont').each(function () {
            var position = $(this).offset().top;

            if (position < vh + scroll - 100) {
                var val = parseInt($(this).attr('data-pct'));
                var $circle = $(this).find('.svg .bar');


                var r = $circle.attr('r');
                var c = Math.PI * (r * 2);



                var pct = ((100 - val) / 100) * c;

                $circle.css({strokeDashoffset: pct});
            }


        });
    }

    if ($('.owl-carousel').length > 0) {
        $('.team').owlCarousel({
            loop: true,
            margin: 10,
            dots: false,
            nav: true,
            navText: ['<','>'],
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        });

    }
    
     var currentRating = $('#example-fontawesome-o').data('current-rating');

        $('.stars-example-fontawesome-o .current-rating')
            .find('span')
            .html(currentRating);

        $('.stars-example-fontawesome-o .clear-rating').on('click', function(event) {
            event.preventDefault();

            $('#example-fontawesome-o')
                .barrating('clear');
        });
    
    $('#example-fontawesome-o').barrating({
            theme: 'fontawesome-stars-o',
            showSelectedRating: false,
            initialRating: currentRating,
            onSelect: function(value, text) {
                if (!value) {
                    $('#example-fontawesome-o')
                        .barrating('clear');
                } else {
                    $('.stars-example-fontawesome-o .current-rating')
                        .addClass('hidden');

                    $('.stars-example-fontawesome-o .your-rating')
                        .removeClass('hidden')
                        .find('span')
                        .html(value);
                }
            },
            onClear: function(value, text) {
                $('.stars-example-fontawesome-o')
                    .find('.current-rating')
                    .removeClass('hidden')
                    .end()
                    .find('.your-rating')
                    .addClass('hidden');
            }
        });




});