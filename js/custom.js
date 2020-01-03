(function ($) {
    'use strict'

// AOS section
     AOS.init();

// owl-carousel section
    var owl = $('.owl-carousel');
        owl.owlCarousel({
            items:4,
            loop:true,
            margin:10,
            autoplay:true,
            autoplayTimeout:2000,
            autoplayHoverPause:true,
            responsiveClass:true,
            responsive:{
                0:{
                    items:2,
                    nav:true
                },
                600:{
                    items:3,
                    nav:false
                },
                1000:{
                    items:4,
                    nav:true,
                    loop:true
                }
            }
        });
    

// lightbox section
        lightbox.option({
          'resizeDuration': 200,
          'wrapAround': true
        });


}) (jQuery);