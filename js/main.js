$(window).on("load", function () {
  $("body").removeClass("overflow");
});
$(document).ready(function () {
  lazyLoad();
  /************************************ Fixed Header ************************************/
  $(this).scrollTop() >= 50
    ? $("header").addClass("fixed")
    : $("header").removeClass("fixed ");
  $(window).scroll(function () {
    $(this).scrollTop() >= 50
      ? $("header").addClass("fixed")
      : $("header").removeClass("fixed ");
  });
  /************************************ Navbar ************************************/
  $(".menu-btn").click(function () {
    if ($(".header-nav").is(":visible")) {
      $(".menu-btn").removeClass("active");
      $(".header-section").removeClass("opened_nav");
      $("body").removeClass("overflow");
      setTimeout(function () {
        $(".header-nav").hide();
      }, 500);
    } else {
      $(".header-nav").show();
      setTimeout(function () {
        $(".menu-btn").addClass("active");
        $(".header-section").addClass("opened_nav");
        $("body").addClass("overflow");
      }, 1);
    }
  });
  /************************************ Products Slider ************************************/
  var productsSwiper = new Swiper(".products-slider .swiper", {
    a11y: {
      enabled: false,
    },
    loop: true,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      540: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      767: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1199: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
    pagination: {
      el: ".products-slider .slider-pagination",
      clickable: true,
    },
    on: {
      init: function (swiper) {
        lazyLoad();
      },
    },
  });
});
