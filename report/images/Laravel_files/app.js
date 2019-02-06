/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/app.js":
/*!*****************************!*\
  !*** ./resources/js/app.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */
__webpack_require__(/*! ./main */ "./resources/js/main.js");

__webpack_require__(/*! ./landing */ "./resources/js/landing.js");

/***/ }),

/***/ "./resources/js/landing.js":
/*!*********************************!*\
  !*** ./resources/js/landing.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! landingv5.js | Bulkit | CSS Ninja */

/* ==========================================================================
Landing kit 6 JS file 
========================================================================== */
$(document).ready(function ($) {
  "use strict"; //Handle pricing period switcher

  $('.combo-button .button').on('click', function () {
    $('.combo-button .button.is-active').removeClass('is-active');
    $(this).addClass('is-active');
    $('.plan-price, .price-per').toggleClass('is-hidden');
  }); //Update the image after the carousel slide change

  $('.css-carousel input').on('change', function () {
    var targetImage = $(this).attr('data-testimonial-image');
    $('.testimonials-cover.is-active').removeClass('is-active');
    $('#' + targetImage).addClass('is-active');
  }); //Current css carousel slide 

  var currentDot = 1; //Simulate Autoplay for the Css carousel

  setInterval(function () {
    currentDot = currentDot + 1;

    if (currentDot < 5) {
      $(".css-carousel label:nth-child(" + currentDot + ")").trigger('click');
    } else {
      currentDot = 1;
      $(".css-carousel label:first-child").trigger('click');
    }
  }, 3000); //Scroll reveal definitions

  window.sr = ScrollReveal(); // Simple reveal

  sr.reveal('.is-title-reveal', {
    origin: 'bottom',
    distance: '20px',
    duration: 600,
    delay: 100,
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    container: window.document.documentElement,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.2
  }); // Left reveal

  sr.reveal('.is-left-reveal', {
    origin: 'left',
    distance: '20px',
    duration: 500,
    delay: 150,
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    container: window.document.documentElement,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.4
  }); // Right reveal

  sr.reveal('.is-right-reveal', {
    origin: 'right',
    distance: '20px',
    duration: 500,
    delay: 150,
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    container: window.document.documentElement,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.4
  }); // Revealing multiple icons

  sr.reveal('.is-icon-reveal', {
    origin: 'bottom',
    distance: '20px',
    duration: 600,
    delay: 100,
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    container: window.document.documentElement,
    mobile: true,
    reset: true,
    useDelay: 'always',
    viewFactor: 0.2
  }, 100); // Revealing multiple posts

  sr.reveal('.is-post-reveal', {
    origin: 'bottom',
    distance: '20px',
    duration: 600,
    delay: 100,
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    container: window.document.documentElement,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.2
  }, 160); // Revealing multiple cards

  sr.reveal('.is-card-reveal', {
    origin: 'bottom',
    distance: '20px',
    duration: 600,
    delay: 100,
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    container: window.document.documentElement,
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.2
  }, 160); // Revealing multiple dots

  sr.reveal('.is-dot-reveal', {
    origin: 'bottom',
    distance: '20px',
    duration: 600,
    delay: 100,
    rotate: {
      x: 0,
      y: 0,
      z: 0
    },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    container: window.document.documentElement,
    mobile: true,
    reset: true,
    useDelay: 'always',
    viewFactor: 0.2
  }, 160);
});

/***/ }),

/***/ "./resources/js/main.js":
/*!******************************!*\
  !*** ./resources/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! main.js | Bulkit | CSS Ninja */

/* ==========================================================================
Website core JS file 
========================================================================== */
$(document).ready(function ($) {
  "use strict"; //Disable sidebar links in development

  $('.is-submenu').each(function () {
    $(this).attr('href', 'javascript:void(0);');
  }); //Mobile menu toggle

  if ($('.custom-burger').length) {
    $('.custom-burger').on("click", function () {
      var menu_id = $(this).attr('data-target');
      $(this).toggleClass('is-active');
      $("#" + menu_id).toggleClass('is-active');
      $('.navbar.is-light').toggleClass('is-dark-mobile');
    });
  } //Highlight current page navbar menu item


  if ($('.nav').length) {
    // Get current page URL
    var url = window.location.href; // remove # from URL

    url = url.substring(0, url.indexOf("#") == -1 ? url.length : url.indexOf("#")); // remove parameters from URL

    url = url.substring(0, url.indexOf("?") == -1 ? url.length : url.indexOf("?")); // select file name

    url = url.substr(url.lastIndexOf("/") + 1); // If file name not available

    if (url == '') {
      url = 'index.html';
    } // Loop all menu items


    $('.nav .navbar-item, li.has-children ul li a.is-submenu, a.footer-nav-link').each(function () {
      // select href
      var href = $(this).attr('href'); // Check filename

      if (url == href) {
        // Add active class
        $(this).addClass('is-active');
      }
    });
  } //Page loader


  if ($('.pageloader').length) {
    $('.pageloader').toggleClass('is-active');
    $(window).on('load', function () {
      var pageloaderTimeout = setTimeout(function () {
        $('.pageloader').toggleClass('is-active');
        $('.infraloader').toggleClass('is-active');
        clearTimeout(pageloaderTimeout);
      }, 700);
    });
  } //Website sidebar


  $(".navigation-menu > li.has-children a.parent-link").on("click", function (i) {
    i.preventDefault();

    if (!$(this).parent().hasClass("active")) {
      $(".navigation-menu li ul").slideUp();
      $(this).next().slideToggle();
      $(".navigation-menu li").removeClass("active");
      $(this).parent().addClass("active");
    } else {
      $(this).next().slideToggle();
      $(".navigation-menu li").removeClass("active");
    }
  }); //sidebar category toggle

  $('.category-link').on("click", function () {
    $('.category-link.is-active').removeClass('is-active');
    $(this).addClass('is-active');
  }); //Sidebar close button

  $('.hamburger-btn').on("click", function () {
    $('#navigation-trigger .menu-toggle .icon-box-toggle, .navigation-close .menu-toggle .icon-box-toggle, .navigation-trigger .menu-toggle .icon-box-toggle, .navigation-close .menu-toggle .icon-box-toggle').toggleClass('active');
  }); //Menu buttons sync

  $('#navigation-trigger, .navigation-trigger, .navigation-close').on("click", function () {
    $('.side-navigation-menu').toggleClass('is-active');
  }); //Data navigation menu setup

  $('.category-link').on("click", function () {
    var category_id = $(this).attr('data-navigation-menu');
    $('.navigation-menu-wrapper').addClass('is-hidden');
    $("#" + category_id).removeClass('is-hidden');
  }); //Manage close links visibility to display only one at a time

  $('.side-navigation-menu').on("mouseenter", function () {
    $('#navigation-trigger').css('opacity', '0');
    $('.navigation-close').css('opacity', '1');
  });
  $('.side-navigation-menu').on("mouseleave", function () {
    $('#navigation-trigger').css('opacity', '1');
    $('.navigation-close').css('opacity', '0');
  }); // Popovers init

  if ($('[data-toggle="popover"]').length) {
    $('[data-toggle="popover"]').ggpopover();
  } // tooltips init


  if ($('[data-toggle="tooltip"]').length) {
    $('[data-toggle="tooltip"]').ggtooltip();
  } //Responsive toggle 


  $('.custom-burger').on('click', function () {
    $(this).find('.icon-box-toggle').toggleClass('active');
  }); //Navbar fade

  if ($('.navbar-wrapper.navbar-fade.navbar-light').length) {
    $(".navbar-wrapper.navbar-fade").wrap('<div class="navbar-placeholder"></div>');
    $(".navbar-placeholder").height(jQuery(".navbar-wrapper.navbar-fade").outerHeight());
    $(window).on('scroll', function () {
      // this will work when your window scrolled.
      var height = $(window).scrollTop(); //getting the scrolling height of window

      if (height > 65) {
        $(".navbar-wrapper.navbar-fade.is-transparent").removeClass('is-transparent navbar-light').addClass('navbar-faded');
      } else {
        $(".navbar-wrapper").removeClass('navbar-faded').addClass('is-transparent navbar-light');
      }
    });
  } //Navbar fade


  if ($('.navbar-wrapper.navbar-fade.navbar-default').length) {
    $(".navbar-wrapper.navbar-fade").wrap('<div class="navbar-placeholder"></div>');
    $(".navbar-placeholder").height(jQuery(".navbar-wrapper.navbar-fade").outerHeight());
    $(window).on('scroll', function () {
      // this will work when your window scrolled.
      var height = $(window).scrollTop(); //getting the scrolling height of window

      if (height > 65) {
        $(".navbar-wrapper.navbar-fade.is-transparent").removeClass('is-transparent').addClass('navbar-faded');
      } else {
        $(".navbar-wrapper").removeClass('navbar-faded').addClass('is-transparent');
      }
    });
  } //Navbar Clone


  if ($('.is-cloned').length) {
    $(window).scroll(function () {
      // this will work when your window scrolled.
      var height = $(window).scrollTop(); //getting the scrolling height of window

      if (height > 50) {
        $(".is-cloned").addClass('is-active');
      } else {
        $(".is-cloned").removeClass('is-active');
      }
    });
  } //Attribute background images


  if ($('.has-background-image').length) {
    $(".has-background-image").each(function () {
      var bgImage = $(this).attr('data-background');

      if (bgImage !== undefined) {
        $(this).css('background-image', 'url(' + bgImage + ')');
      }
    });
  } //Media card background images


  if ($('.media-card-image').length) {
    $(".media-card-image").each(function () {
      var mediaCardImage = $(this).attr('data-background');

      if (mediaCardImage !== undefined) {
        $(this).css('background-image', 'url(' + mediaCardImage + ')');
      }
    });
  } //Parallax setup


  function parallaxBG() {
    $('.parallax').prepend('<div class="parallax-overlay"></div>');
    $(".parallax").each(function () {
      var attrImage = $(this).attr('data-background');
      var attrColor = $(this).attr('data-color');
      var attrOpacity = $(this).attr('data-color-opacity');
      var attrPositionX = $(this).attr('data-position-x');

      if (attrImage !== undefined) {
        $(this).css('background-image', 'url(' + attrImage + ')');
      }

      if (attrColor !== undefined) {
        $(this).find(".parallax-overlay").css('background-color', '' + attrColor + '');
      }

      if (attrOpacity !== undefined) {
        $(this).find(".parallax-overlay").css('opacity', '' + attrOpacity + '');
      }

      if (attrPositionX !== undefined) {
        $(this).css('background-position-x', '' + attrPositionX + '');
      }
    });
  }

  parallaxBG();

  if ("ontouchstart" in window) {
    document.documentElement.className = document.documentElement.className + " touch";
  }

  if (!$("html").hasClass("touch")) {
    $(".parallax").css("background-attachment", "fixed");
  }

  function fullscreenFix() {
    var h = $('body').height();
    $(".content-b").each(function (i) {
      if ($(this).innerHeight() > h) {
        $(this).closest(".fullscreen").addClass("overflow");
      }
    });
  }

  $(window).resize(fullscreenFix);
  fullscreenFix();

  function backgroundResize() {
    var windowH = $(window).height();
    $(".parallax").each(function (i) {
      var path = $(this);
      var contW = path.width();
      var contH = path.height();
      var imgW = path.attr("data-img-width");
      var imgH = path.attr("data-img-height");
      var ratio = imgW / imgH;
      var diff = 0;
      diff = diff ? diff : 0;
      var remainingH = 0;

      if (path.hasClass("parallax") && !$("html").hasClass("touch")) {
        remainingH = windowH - contH;
      }

      imgH = contH + remainingH + diff;
      imgW = imgH * ratio;

      if (contW > imgW) {
        imgW = contW;
        imgH = imgW / ratio;
      }

      path.data("resized-imgW", imgW);
      path.data("resized-imgH", imgH);
      path.css("background-size", imgW + "px " + imgH + "px");
    });
  }

  $(window).resize(backgroundResize);
  $(window).focus(backgroundResize);
  backgroundResize();

  function parallaxPosition(e) {
    var heightWindow = $(window).height();
    var topWindow = $(window).scrollTop();
    var bottomWindow = topWindow + heightWindow;
    var currentWindow = (topWindow + bottomWindow) / 2;
    $(".parallax").each(function (i) {
      var path = $(this);
      var height = path.height();
      var top = path.offset().top;
      var bottom = top + height;

      if (bottomWindow > top && topWindow < bottom) {
        var imgH = path.data("resized-imgH");
        var min = 0;
        var max = -imgH + heightWindow;
        var overflowH = height < heightWindow ? imgH - height : imgH - heightWindow;
        top = top - overflowH;
        bottom = bottom + overflowH;
        var value = 0;

        if ($('.parallax').is(".titlebar")) {
          value = min + (max - min) * (currentWindow - top) / (bottom - top) * 2;
        } else {
          value = min + (max - min) * (currentWindow - top) / (bottom - top);
        }

        var orizontalPosition = path.attr("data-oriz-pos");
        orizontalPosition = orizontalPosition ? orizontalPosition : "50%";
        $(this).css("background-position", orizontalPosition + " " + value + "px");
      }
    });
  }

  if (!$("html").hasClass("touch")) {
    $(window).resize(parallaxPosition);
    $(window).scroll(parallaxPosition);
    parallaxPosition();
  }

  if (navigator.userAgent.match(/Trident\/7\./)) {
    $('body').on("mousewheel", function () {
      event.preventDefault();
      var wheelDelta = event.wheelDelta;
      var currentScrollPosition = window.pageYOffset;
      window.scrollTo(0, currentScrollPosition - wheelDelta);
    });
  } // Back to Top button behaviour


  var pxShow = 600;
  var scrollSpeed = 500;
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= pxShow) {
      $("#backtotop").addClass('visible');
    } else {
      $("#backtotop").removeClass('visible');
    }
  });
  $('#backtotop a').on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, scrollSpeed);
    return false;
  }); // Chat widget button

  var chatShow = 100;
  $(window).on('scroll', function () {
    if ($(window).scrollTop() >= chatShow) {
      $("#bulchat").addClass('visible');
    } else {
      $("#bulchat").removeClass('visible');
    }
  }); //Tabs Nav

  var $tabsNav = $('.tabs-nav'),
      $tabsNavLis = $tabsNav.children('li');
  $tabsNav.each(function () {
    var $this = $(this);
    $this.next().children('.tab-content').stop(true, true).hide().first().show();
  });
  $tabsNavLis.on('click', function (e) {
    var $this = $(this);
    $this.siblings().removeClass('active').end().addClass('active');
    $this.parent().next().children('.tab-content').stop(true, true).hide().siblings($this.find('a').attr('href')).fadeIn();
    e.preventDefault();
  });
  var hash = window.location.hash;
  var anchor = $('.tabs-nav a[href="' + hash + '"]');

  if (anchor.length === 0) {
    $(".tabs-nav li:first").addClass("active").show();
    $(".tab-content:first").show();
  } else {
    anchor.parent('li').click();
  } //Navigation Tabs


  $('.navigation-tabs ul li').on('click', function () {
    var tab_id = $(this).attr('data-tab');
    $(this).siblings('li').removeClass('is-active');
    $(this).closest('.navigation-tabs').children('.navtab-content').removeClass('is-active'); //$('.navtab-content').removeClass('is-active');

    $(this).addClass('is-active');
    $("#" + tab_id).addClass('is-active');
  }); //Scrollspy nav

  $('li.scrollnav-item').on('click', function () {
    $('li.scrollnav-item.is-active').removeClass('is-active');
    $(this).addClass('is-active');
  }); //Preloader

  $(window).on('load', function () {
    // makes sure the whole site is loaded 
    $('#status').fadeOut(); // will first fade out the loading animation 

    $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 

    $('body').delay(350).css({
      'overflow': 'visible'
    });
  }); //Datepicker initialization

  if ($('#is-datepicker').length) {
    $('#is-datepicker').dateDropper();
  } //Timepicker initialization


  if ($('#is-timepicker').length) {
    $('#is-timepicker').timeDropper({
      primaryColor: '#4FC1EA',
      borderColor: "#4FC1EA",
      backgroundColor: "#FFF",
      init_animation: 'fadeIn'
    });
  } //Animates an item with g-item class on hover


  $('.g-item').on("mouseenter", function () {
    $(this).addClass('gelatine');
  });
  $('.g-item').on("mouseleave", function () {
    $(this).removeClass('gelatine');
  });
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

      if ($(".nav-primary").hasClass("nav-primary-fixed")) {
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 40
          }, 750);
          return false;
        }
      } else {
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top - 80
          }, 750);
          return false;
        }
      }
    }
  }); //Basic slick carousel (testimonials)

  if ($('.testimonials').length) {
    $('.testimonials').slick({
      dots: true,
      infinite: true,
      speed: 500,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      autoplay: true
    });
  } //Styled slick carousel (testimonials in landing v5)


  if ($('.styled-testimonials').length) {
    $('.styled-testimonials').slick({
      dots: true,
      infinite: true,
      speed: 500,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      autoplay: true,
      arrows: false
    });
  } //Vertical slick carousel (vertical testimonials)


  if ($('.vertical-testimonials').length) {
    $('.vertical-testimonials').slick({
      autoplay: true,
      arrows: false,
      dots: false,
      slidesToShow: 4,
      centerPadding: "0",
      centerMode: true,
      draggable: false,
      infinite: true,
      pauseOnHover: false,
      swipe: false,
      touchMove: false,
      vertical: true,
      speed: 1000,
      autoplaySpeed: 2500,
      useTransform: true,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      adaptiveHeight: true
    });
  } //Flat slick carousel


  if ($('.flat-testimonials').length) {
    $('.flat-testimonials').slick({
      dots: true,
      infinite: true,
      speed: 500,
      cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: true
    });
  } //Image slick carousel


  if ($('.image-carousel').length) {
    $('.image-carousel').slick({
      centerMode: true,
      dots: true,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 2000,
      centerPadding: '60px',
      prevArrow: "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
      nextArrow: "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
      slidesToShow: 3,
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }]
    });
  } //Single image slick carousel


  if ($('.single-image-carousel').length) {
    $('.single-image-carousel').slick({
      infinite: true,
      dots: true,
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      prevArrow: "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
      nextArrow: "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: false,
          //centerPadding: '40px',
          slidesToShow: 1
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: false,
          //centerPadding: '40px',
          slidesToShow: 1
        }
      }]
    });
  } //Multiple images slick carousel


  if ($('.multiple-image-carousel').length) {
    $('.multiple-image-carousel').slick({
      infinite: true,
      dots: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: "<div class='slick-custom is-prev'><i class='fa fa-chevron-left'></i></div>",
      nextArrow: "<div class='slick-custom is-next'><i class='fa fa-chevron-right'></i></div>",
      responsive: [{
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      }, {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }]
    });
  } //Video embed init


  if ($('#video-embed').length) {
    Video('#video-embed');
  } //Counter up init


  if ($('.counter').length) {
    $('.counter').counterUp({
      delay: 10,
      time: 1000
    });
  } //Chosen select init


  if ($('.chosen-select').length) {
    $(".chosen-select").chosen({
      disable_search_threshold: 6,
      width: '100%'
    });
  } //Chosen select multiple init


  if ($('.chosen-multiple').length) {
    $(".chosen-multiple").chosen({
      disable_search_threshold: 10,
      max_selected_options: 5,
      width: '100%'
    });
  } //Accordion init


  var $accor = $('.accordion');
  $accor.each(function () {
    $(this).toggleClass('ui-accordion ui-widget ui-helper-reset');
    $(this).find('h3').addClass('ui-accordion-header ui-helper-reset ui-state-default ui-accordion-icons ui-corner-all');
    $(this).find('div').addClass('ui-accordion-content ui-helper-reset ui-widget-content ui-corner-bottom');
    $(this).find("div").hide();
  });
  var $trigger = $accor.find('h3');
  $trigger.on('click', function (e) {
    var location = $(this).parent();

    if ($(this).next().is(':hidden')) {
      var $triggerloc = $('h3', location);
      $triggerloc.removeClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideUp(300);
      $triggerloc.find('span').removeClass('ui-accordion-icon-active');
      $(this).find('span').addClass('ui-accordion-icon-active');
      $(this).addClass('ui-accordion-header-active ui-state-active ui-corner-top').next().slideDown(300);
    }

    e.preventDefault();
  });
  $(".toggle-container").hide();
  $('.trigger, .trigger.opened').on('click', function (a) {
    $(this).toggleClass('active');
    a.preventDefault();
  });
  $(".trigger").on('click', function () {
    $(this).next(".toggle-container").slideToggle(300);
  });
  $(".trigger.opened").addClass("active").next(".toggle-container").show(); //Cover video

  if ($('.covervid-video').length) {
    $('.covervid-video').coverVid(1920, 1080);
  }
});

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*************************************************************!*\
  !*** multi ./resources/js/app.js ./resources/sass/app.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/Maen/web/digital_gravity/resources/js/app.js */"./resources/js/app.js");
module.exports = __webpack_require__(/*! /Users/Maen/web/digital_gravity/resources/sass/app.scss */"./resources/sass/app.scss");


/***/ })

/******/ });