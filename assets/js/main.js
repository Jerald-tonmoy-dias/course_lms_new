(function ($) {
    "use strict"
    jQuery(document).ready(function () {
        /* start point */
        //mobile menu
        $('#main-menu').meanmenu({
            meanMenuContainer: '.mobile-menu',
            meanScreenWidth: "991.99"
        });

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

        // category activation


        // counterUp
        $('.counter').counterUp({
            delay: 10,
            time: 1000
        });

        // Countdown 
        $('.countdown').downCount({
            date: '06/28/2025 12:00:00',
            offset: +6
        }, function () {
            alert('Countdown done!');
        });


        // nice-select
        $('select').niceSelect();

        // hero slider
        $('.hero-slider-active').slick({
            dots: true,
            infinite: true,
            arrows: false,
            autoplay: true,
            speed: 300,
            fade: true,
            slidesToShow: 1,
            responsive: [
                {
                    breakpoint: 575.99,
                    settings: {
                        dots: false
                    }
                }
            ]
        });

        // sidebar-product-slider
        $('.sidebar-product-slider').slick({
            dots: false,
            infinite: true,
            arrows: true,
            speed: 300,
            slidesToShow: 1,
            nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
        });

        // popular-product-slider
        $('.popular-product-slider').slick({
            dots: false,
            infinite: true,
            arrows: true,
            speed: 300,
            slidesToShow: 4,
            rows: 3,
            nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                        rows: 3
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                        rows: 2
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

        // popular-product-slider refresh
        $("#all-tab, #sale-tab, #rated-tab, #discount-tab").click(function () {
            $('.popular-product-slider').slick('refresh');
        });

        // popular-product-slider-2
        $('.popular-product-slider-2').slick({
            dots: false,
            infinite: true,
            arrows: true,
            speed: 300,
            slidesToShow: 4,
            adaptiveHeight: true,
            nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
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

        // weekly-product-slider
        $('.weekly-product-slider').slick({
            dots: false,
            infinite: true,
            arrows: true,
            speed: 300,
            slidesToShow: 4,
            adaptiveHeight: true,
            rows: 2,
            nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
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

        // categories-product-slider
        $('.categories-product-slider').slick({
            dots: false,
            infinite: true,
            arrows: true,
            speed: 300,
            slidesToShow: 6,
            nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 5
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 4
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });

        // feedback-slider-active
        $('.feedback-slider-active').slick({
            dots: true,
            infinite: true,
            arrows: false,
            speed: 300,
            slidesToShow: 1,
            nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>'
        });

        // product-landing-slider
        $('.product-landing-slider').slick({
            dots: false,
            infinite: true,
            arrows: true,
            speed: 300,
            fade: true,
            autoplay: true,
            slidesToShow: 1,
            nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false
                    }
                }

            ]
        });

        //  brands-slider-active
        $('.brands-slider-active').slick({
            dots: false,
            infinite: true,
            arrows: false,
            autoplay: true,
            centerMode: true,
            centerPadding: '50px',
            speed: 700,
            slidesToShow: 7,
            nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            responsive: [
                {
                    breakpoint: 1440,
                    settings: {
                        slidesToShow: 4,
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }

            ]
        });

        //  blog-slider-active
        $('.blog-slider-active').slick({
            dots: false,
            infinite: true,
            arrows: true,
            autoplay: true,
            speed: 700,
            slidesToShow: 3,
            nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 1,
                    }
                }

            ]
        });

        // dbl product slider
        $('.product-for').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.product-nav'
        });
        $('.product-nav').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            asNavFor: '.product-for',
            dots: false,
            centerPadding: '10px',
            arrows: false,
            focusOnSelect: true
        });

        // vdo popup activation
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

        // post slider active
        $('.post-slider-active').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: false,
            arrows: true,
            nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            responsive: [{

            }]
        });

        // mblog-slider
        $('.mblog-slider-active').slick({
            dots: false,
            infinite: true,
            arrows: true,
            nextArrow: '<button class="slick-next"><i class="fas fa-arrow-right"></i></button>',
            prevArrow: '<button class="slick-prev"><i class="fas fa-arrow-left"></i></button>',
            speed: 300,
            slidesToShow: 1
        });
        // food-price range-slider
        $(function () {
            $("#slider-range").slider({
                range: true,
                min: 0,
                max: 500,
                values: [75, 300],
                slide: function (event, ui) {
                    $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
                }
            });
            $("#amount").val("$" + $("#slider-range").slider("values", 0) +
                " - $" + $("#slider-range").slider("values", 1));
        });


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

        // vdo popup activation
        // $('.popup-link').magnificPopup({
        //     type: 'iframe',
        //     // other options
        //     iframe: {
        //         markup: '<div class="mfp-iframe-scaler">'+
        //                 '<div class="mfp-close"></div>'+
        //                 '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
        //                 '</div>',

        //         patterns: {
        //         youtube: {
        //             index: 'youtube.com/', 

        //             id: 'v=', 

        //             src: 'https://www.youtube.com/embed/%id%?autoplay=1' 
        //         },
        //         vimeo: {
        //             index: 'vimeo.com/',
        //             id: '/',
        //             src: '//player.vimeo.com/video/%id%?autoplay=1'
        //         },
        //         gmaps: {
        //             index: '//maps.google.',
        //             src: '%id%&output=embed'
        //         }

        //         },

        //         srcAction: 'iframe_src',
        //     }
        //     });


        // isotope filter test start
        // external js: isotope.pkgd.js

        // init Isotope
        var $grid = $('.trendy-item-wrapper').isotope({
            // options
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
