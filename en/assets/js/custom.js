/*jslint browser: true*/
/*global $, window, WOW, particlesJS, Typed*/

(function ($) {
    'use strict';

    var win = $(window),
        navbar = $('.navbar'),
        scrollUp = $(".scroll-up"),
        sideMenu = $(".side-menu");

    /*========== Start Wow Js ==========*/
    new WOW().init();


    /*========== Start Navbar Auto Change  ==========*/
    win.on('scroll', function () {
        if (win.scrollTop() > 50) {
            navbar.addClass('nav-fixed').removeClass('fixed-top');
        } else {
            navbar.addClass('fixed-top').removeClass('nav-fixed');
        }
    });

    /*========== Start Scroll For Navigation Menu ==========*/
    navbar.on('click', 'a', function (e) {
        e.preventDefault();
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top - 85
        }, 1000);
    });




    // Sync Navbar Links With Section
    $('body').scrollspy({
        target: '#navtoggler',
        offset: 100
    });
    //// COLLAPSED MENU CLOSE ON CLICK
    navbar.on('click', '.navbar-collapse', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });



    /*========== Side Menu ==========*/
    $(".side-menu-btn").on('click', function (e) {
        e.preventDefault();
        sideMenu.addClass('open-menu');
    });
    $(".close-side-menu").on('click', function (e) {
        e.preventDefault();
        sideMenu.removeClass('open-menu');
    });
    win.on('scroll', function () {
        sideMenu.removeClass('open-menu');
    });




    //// PARTICLES TRIGGER
    if ($("#particles-js")[0]) {
        particlesJS("particles-js", {
            "particles": {
                "number": {
                    "value": 60,
                    "density": {
                        "enable": true,
                        "value_area": 800
                    }
                },
                "color": {
                    "value": "#FFF"
                },
                "shape": {
                    "type": "circle",
                    "stroke": {
                        "width": 0,
                        "color": "#FFF"
                    },
                    "polygon": {
                        "nb_sides": 5
                    },
                    "image": {
                        "src": "img/github.svg",
                        "width": 100,
                        "height": 100
                    }
                },
                "opacity": {
                    "value": 0.5,
                    "random": false,
                    "anim": {
                        "enable": false,
                        "speed": 1,
                        "opacity_min": 0.1,
                        "sync": false
                    }
                },
                "size": {
                    "value": 3,
                    "random": true,
                    "anim": {
                        "enable": false,
                        "speed": 40,
                        "size_min": 0.1,
                        "sync": false
                    }
                },
                "line_linked": {
                    "enable": true,
                    "distance": 150,
                    "color": "#FFF",
                    "opacity": 0.4,
                    "width": 1
                },
                "move": {
                    "enable": true,
                    "speed": 6,
                    "direction": "none",
                    "random": false,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": false,
                        "rotateX": 600,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": {
                    "onhover": {
                        "enable": true,
                        "mode": "grab"
                    },
                    "onclick": {
                        "enable": true,
                        "mode": "push"
                    },
                    "resize": true
                },
                "modes": {
                    "grab": {
                        "distance": 140,
                        "line_linked": {
                            "opacity": 1
                        }
                    },
                    "bubble": {
                        "distance": 400,
                        "size": 40,
                        "duration": 2,
                        "opacity": 8,
                        "speed": 3
                    },
                    "repulse": {
                        "distance": 200,
                        "duration": 0.4
                    },
                    "push": {
                        "particles_nb": 4
                    },
                    "remove": {
                        "particles_nb": 2
                    }
                }
            },
            "retina_detect": true
        });

    }
    

    /*========== Start Counter To Js Statistics   ==========*/
    if ($(".count")[0]) {
        win.on('scroll.statistics', function () {
            var stat = $('.statistics');
            if ($(this).scrollTop() >= stat.offset().top - win.height() + 220) {
                $('.count').countTo();
                win.off('scroll.statistics');
            }
        });
    }
    /*========== Start Portfolio Trigger Filterizr Js ==========*/
    $("#control li").on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });

    // The Filterizr
    if ($("#filtr-container")[0]) {

        $('#filtr-container').filterizr({
            animationDuration: 0.4
        });
    }

    
   
    /*========== Start Header Typed Js ==========    */
    if ($("#type")[0]) {
        var element = new Typed('#type', {
                strings: ["build Best Digital products that function", "helps to grow your business", "Is a Creating Awesome Websites"],
                typeSpeed: 60,
                backSpeed: 10,
                loop: true
            });
    
    }
    
    /*========== End Header Typed Js ==========*/
    
    
    /*========== Start Magnigic Popup Js ==========*/
    if ($('.my-work')[0]) {

        $('.my-work').magnificPopup({
            delegate: 'a',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }
    

    /*========== Start OWL Carousel Js testimonial   ==========*/
    if ($('.slider-hero')[0]) {
        
        $(".slider-hero").owlCarousel({
            items: 1,
            nav: true,
            dots: true,
            smartSpeed: 1000,
            autoplay: 2000,
            loop: true,
            navText: ["<i class='fas fa-angle-left'></i>", "<i class='fas fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 1
                },
                1200: {
                    items: 1
                }
            }
        });
    }
    $(".slider-hero").on("translate.owl.carousel", function () {
        $(".info-header h1").removeClass("animated fadeInUp").css("opacity", "0");
        $(".info-header .text-header").removeClass("animated fadeInDown").css("opacity", "0");
        $(".info-header .banner-btn").removeClass("animated fadeInDown").css("opacity", "0");
    });

    $(".slider-hero").on("translated.owl.carousel", function () {
        $(".info-header h1").addClass("animated fadeInUp").css("opacity", "1");
        $(".info-header .text-header").addClass("animated fadeInDown").css("opacity", "1");
        $(".info-header .banner-btn").addClass("animated fadeInDown").css("opacity", "1");
    });


 
    
    
    
    /* ========== Start OWL Carousel Js testimonial   ==========*/
    if ($('.testimonial')[0]) {
        $('.testimonial').owlCarousel({
            loop: true,
            margin: 30,
            smartSpeed: 1000,
            autoplay: 2000,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    }
    /*========== Start OWL Carousel Js sponsor   ==========*/
    if ($('.sponsor')[0]) {
        $('.sponsor').owlCarousel({
            loop: true,
            margin: 30,
            smartSpeed: 1000,
            autoplay: 2000,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        });
    }

    function animateProgressBar() {
        $('.skill-box .progress-line > span').each(function () {
            var percent = $(this).data('percent');
            $(this).css({
                width: percent + '%',
                transition: 'width 1.7s linear'
            });
        });
    }

    if ($(".about")[0]) {
        $(window).on('scroll', function () {
            if ($(window).scrollTop() > $('.about').offset().top + 200) {
                animateProgressBar();
            }
        });
        if ($(window).scrollTop() > $('.about').offset().top + 200) {
            animateProgressBar();
        }
    }

    /*========== Start Scroll Up    ==========*/
    // Show And Hide Buttom Back To Top
    win.on('scroll', function () {
        if ($(this).scrollTop() >= 600) {
            scrollUp.show(300);
        } else {
            scrollUp.hide(300);
        }
    });
    // Back To 0 Scroll Top body
    scrollUp.on('click', function () {
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    });
    
    
    
       
    

    
    
    



}($));
