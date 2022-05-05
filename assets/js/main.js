(function ($) {
  "use strict";
  jQuery(document).ready(function () {
    /* start point */

    // Scroll To Top
    $(".scrollup").on("click", function () {
      $("html").animate(
        {
          scrollTop: "0",
        },
        500
      );
    });
    $(window).on("scroll", function () {
      var toTopVisible = $("html").scrollTop();
      if (toTopVisible > 500) {
        $(".scrollup").fadeIn();
      } else {
        $(".scrollup").fadeOut();
      }
    });

    // mobile menu
    document
      .querySelector(".lms-mobile-menu-trigger")
      .addEventListener("click", togleMenu);
    function togleMenu() {
      var element = document.querySelector(".lms-mobile-sidebar");
      element.classList.toggle("mobile-menu-active");
    }

    // close mobile menu
    document
      .querySelector(".close-trigger")
      .addEventListener("click", closeMenu);
    function closeMenu() {
      var element = document.querySelector(".lms-mobile-sidebar");
      element.classList.remove("mobile-menu-active");
      //   console.log(element);
    }

    //"cart-box
    document.getElementById("cart-box").addEventListener("click", toggleCart);
    function toggleCart() {
      var element = document.querySelector(".header-lms-cart-dropdown");
      element.classList.toggle("show");
      console.log(element);
    }

    // counterUp
    $(".counter").counterUp({
      delay: 10,
      time: 1000,
    });

    // nice-select
    $("select").niceSelect();

    // tab-product-slider-active
    $(".tab-product-slider-active").slick({
      rows: 2,
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    // tab-product-slider-active refresh
    $('button[data-bs-toggle="tab"]').on("shown.bs.tab", function (e) {
      $(".tab-product-slider-active").slick("setPosition");
    });

    // top-course-slider-active
    $(".top-course-slider-active").slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 5,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 1440,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    // feature course slider
    $(".feature-slider-active").slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 1,
      adaptiveHeight: true,
    });

    // lms-instructor-slider-active
    $(".lms-instructor-slider-active").slick({
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
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
          },
        },
        {
          breakpoint: 576,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    // testimonial-slider-active
    $(".testimonial-slider-active").slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 3,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    // student-slider-active
    $(".student-slider-active").slick({
      dots: true,
      infinite: true,
      arrows: false,
      speed: 500,
      slidesToShow: 2,
      adaptiveHeight: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    // vdo popup activation header section
    $(".popup-link").magnificPopup({
      type: "iframe",
      // other options
      iframe: {
        markup:
          '<div class="mfp-iframe-scaler">' +
          '<div class="mfp-close"></div>' +
          '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
          "</div>",

        patterns: {
          youtube: {
            index: "youtube.com/",

            id: "v=",

            src: "https://www.youtube.com/embed/%id%?autoplay=1",
          },
          vimeo: {
            index: "vimeo.com/",
            id: "/",
            src: "//player.vimeo.com/video/%id%?autoplay=1",
          },
          gmaps: {
            index: "//maps.google.",
            src: "%id%&output=embed",
          },
        },

        srcAction: "iframe_src",
      },
    });

    // init Isotope
    var $grid = $(".trendy-item-wrapper").isotope({
      // options
      itemSelector: ".element-item",
      // percentPosition: true,
      masonry: {
        columnWidth: 14.4,
        gutter: 15,
        horizontalOrder: true,
      },
    });

    // filter items on button click
    $(".trendy-course-nav-wrapper").on(
      "click",
      ".single-small-course-card-extend",
      function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({ filter: filterValue });
      }
    );

    // mobile app menu
    let mobileSrch = document.getElementById("mobile-search-id");
    let overlay = document.getElementById("mobile-overlay-active");
    let searchContent = document.getElementById("search-content-area-id");
    let mobileSearchid = document.getElementById("mobile-search-button-id");
    let mobilecloseid = document.getElementById("mobile-close-button-id");

    // show mobile searchbar
    mobileSrch.addEventListener("click", activeSearchbar);

    function activeSearchbar() {
      overlay.classList.toggle("overlay");
      mobileSrch.classList.toggle("active");
      searchContent.classList.toggle("active");
      mobileSearchid.classList.toggle("d-none");
      mobilecloseid.classList.toggle("d-none");
    }

    // show searchbar
    let mobilesearchbarshowhide = document.getElementById("showsearchbar");

    mobilesearchbarshowhide.addEventListener("click", () => {
      overlay.classList.toggle("show");
    });

    // large device sidebar
    // document.querySelector(".large-button-holder").click(function () {
    //   console.log("hey nigga");
    //   document.querySelector(this).classList.toggle("click");
    //   document.querySelector(".sidebar").classList.toggle("show");
    // });
    // document.querySelector(".feat-btn").click(function () {
    //   document.querySelector("nav ul .feat-show").classList.toggle("show");
    //   document.querySelector("nav ul .first").classList.toggle("rotate");
    // });
    // document.querySelector(".serv-btn").click(function () {
    //   document.querySelector("nav ul .serv-show").classList.toggle("show1");
    //   document.querySelector("nav ul .second").classList.toggle("rotate");
    // });
    // document.querySelector("nav ul li").click(function () {
    //   document
    //     .querySelector(this)
    //     .classList.add("active")
    //     .siblings()
    //     .removeClass("active");
    // });

    $(".btn").click(function () {
      $(this).toggleClass("click");
      $(".sidebar").toggleClass("show");
    });
    $(".feat-btn").click(function () {
      $("nav ul .feat-show").toggleClass("show");
      $("nav ul .first").toggleClass("rotate");
    });
    $(".serv-btn").click(function () {
      $("nav ul .serv-show").toggleClass("show1");
      $("nav ul .second").toggleClass("rotate");
    });
    $("nav ul li").click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });

    /* end point */
  });

  jQuery(window).on("load", function () {
    // WOW JS
    new WOW().init();

    // Preloader
    var preLoder = $("#preloader");
    preLoder.fadeOut(0);
  });
})(jQuery);
