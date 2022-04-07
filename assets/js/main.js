(function ($) {
    "use strict"
    jQuery(document).ready(function () {
        /* start point */


        // Scroll To Top 
        $('.scrollup').on('click', function () {
            $("html").animate({
                "scrollTop": '0'
            }, 500);
        });
        $(window).on('scroll', function () {
            var toTopVisible = $('html').scrollTop();
            if (toTopVisible > 500) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        });

        // mobile menu
        document.querySelector(".lms-mobile-menu-trigger").addEventListener("click", togleMenu);
        function togleMenu() {
            var element = document.querySelector(".lms_main_nav");
            element.classList.toggle("mobile-menu-active");
        }
        // counterUp
        // $('.counter').counterUp({
        //     delay: 10,
        //     time: 1000
        // });

        // Countdown 
        // $('.countdown').downCount({
        //     date: '06/28/2025 12:00:00',
        //     offset: +6
        // }, function () {
        //     alert('Countdown done!');
        // });

        // nice-select
        $('select').niceSelect();


        // top-course-slider-active
        $('.top-course-slider-active').slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 5,
            adaptiveHeight: true,
            // nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            // prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        // feature course slider
        $('.feature-slider-active').slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 1,
            adaptiveHeight: true,
            // nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            // prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            // responsive: [
            //     {
            //         breakpoint: 1440,
            //         settings: {
            //             slidesToShow: 3
            //         }
            //     },
            //     {
            //         breakpoint: 992,
            //         settings: {
            //             slidesToShow: 2
            //         }
            //     },
            //     {
            //         breakpoint: 576,
            //         settings: {
            //             slidesToShow: 1
            //         }
            //     }
            // ]
        });
        // lms-instructor-slider-active
        $('.lms-instructor-slider-active').slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 4,
            // adaptiveHeight: true,
            responsive: [
                {
                    breakpoint: 1600,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1
                    }
                }
            ]
        });
        // testimonial-slider-active
        $('.testimonial-slider-active').slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 500,
            slidesToShow: 3,
            adaptiveHeight: true,
            // nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            // prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            // responsive: [
            //     {
            //         breakpoint: 1440,
            //         settings: {
            //             slidesToShow: 3
            //         }
            //     },
            //     {
            //         breakpoint: 992,
            //         settings: {
            //             slidesToShow: 2
            //         }
            //     },
            //     {
            //         breakpoint: 576,
            //         settings: {
            //             slidesToShow: 1
            //         }
            //     }
            // ]
        });


        // dbl product slider
        // $('.product-for').slick({
        //     slidesToShow: 1,
        //     slidesToScroll: 1,
        //     arrows: false,
        //     fade: true,
        //     asNavFor: '.product-nav'
        // });
        // $('.product-nav').slick({
        //     slidesToShow: 4,
        //     slidesToScroll: 1,
        //     asNavFor: '.product-for',
        //     dots: false,
        //     centerPadding: '10px',
        //     arrows: false,
        //     focusOnSelect: true
        // });

        // vdo popup activation header section
        $('.popup-link').magnificPopup({
            type: 'iframe',
            // other options
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',

                patterns: {
                    youtube: {
                        index: 'youtube.com/',

                        id: 'v=',

                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    },
                    vimeo: {
                        index: 'vimeo.com/',
                        id: '/',
                        src: '//player.vimeo.com/video/%id%?autoplay=1'
                    },
                    gmaps: {
                        index: '//maps.google.',
                        src: '%id%&output=embed'
                    }

                },

                srcAction: 'iframe_src',
            }
        });

        // food-price range-slider
        // $(function () {
        //     $("#slider-range").slider({
        //         range: true,
        //         min: 0,
        //         max: 500,
        //         values: [75, 300],
        //         slide: function (event, ui) {
        //             $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        //         }
        //     });
        //     $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        //         " - $" + $("#slider-range").slider("values", 1));
        // });


        //Language Switcher 
        // $(".lang-switcher").on("click", function(e){
        //     e.preventDefault();
        //     $(".lang-list").toggleClass("lang-list-open");
        // });

        // $(".lang-list li").each(function(){
        //     $(this).on("click", function(){
        //         var logoSrc = $(this).children(".flag").children("img").attr("src");
        //         var flagText = $(this).children("a").text() + '<span> <i class="fas fa-angle-down"></i></span>'; 
        //         $(".lang-switcher > .flag img").attr("src", logoSrc);
        //         $(".lang-switcher > a").html(flagText);
        //     });
        // });


        // init Isotope
        var $grid = $('.trendy-item-wrapper').isotope({
            // options
            itemSelector: '.element-item',
            // percentPosition: true,
            masonry: {
                columnWidth: 14.4,
                gutter: 15,
                horizontalOrder: true
            }
        });
        // filter items on button click
        $('.trendy-course-nav-wrapper').on('click', '.single-small-course-card-extend', function () {
            var filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
        });
        /* end point */
    });

    jQuery(window).on('load', function () {

        // WOW JS
        new WOW().init();

        // Preloader
        var preLoder = $("#preloader");
        preLoder.fadeOut(0);

    });
})(jQuery);
