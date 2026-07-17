"use strict";


jQuery(document).ready(function ($) {

    jQuery(window).load(function () {
        jQuery(".loaded").fadeOut();
        jQuery(".preloader").delay(1000).fadeOut("slow");
    });
    /*---------------------------------------------*
     * Mobile menu
     ---------------------------------------------*/
    $(document).on('click', '.navbar-collapse.in', function (e) {
        if ($(e.target).is('a')) {
            $(this).collapse('hide');
        }
    });

    $('ul.navbar-nav li').hover(function () {
        $(this).children('ul').stop(true, false, true).fadeToggle(300);
    });
    /*---------------------------------------------*
     * STICKY scroll
     ---------------------------------------------*/

    $("").localScroll();

    /*---------------------------------------------*
     * WOW
     ---------------------------------------------*/

    var wow = new WOW({
        mobile: false // trigger animations on mobile devices (default is true)
    });
    wow.init();


    /*---------------------------------------------*
     * Counter 
     ---------------------------------------------*/

    $('.statistic-counter').counterUp({
        delay: 10,
        time: 2000
    });



    /* ---------------------------------------------------------------------
     Carousel
     ---------------------------------------------------------------------= */

    $('.main_home_slider').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        navText: [
            "<i class='lnr lnr-chevron-left'></i>",
            "<i class='lnr lnr-chevron-right'></i>"
        ],
        autoplayHoverPause: true

    });

    $('.main_team').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText: [
            "<i class='lnr lnr-chevron-left'></i>",
            "<i class='lnr lnr-chevron-right'></i>"
        ],
        autoplayHoverPause: true

    });

    $('.main_work1_content').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: true,
        navText: [
            "prew",
            "next"
        ],
        autoplayHoverPause: true

    });
    $('.main_work1_team').owlCarousel({
        responsiveClass: true,
        autoplay: false,
        items: 1,
        loop: true,
        dots: true,
        nav: false,
        navText: [
            "prew",
            "next"
        ],
        autoplayHoverPause: true

    });


// main-menu-scroll + auto-hide header (visible at the top of the page,
// hidden once scrolled down, revealed again by hovering near the top edge)

    var $autohideHeader = jQuery('.header.navbar-fixed-top');
    jQuery('<div class="nav-hover-zone"></div>').prependTo('body');
    var navHideTimeout;

    function updateHeaderScrollState() {
        var top = jQuery(document).scrollTop();
        var height = 5;

        if (top > height) {
            $autohideHeader.addClass('menu-scroll').addClass('nav-autohide');
        } else {
            $autohideHeader.removeClass('menu-scroll').removeClass('nav-autohide');
        }
    }

    jQuery(window).scroll(updateHeaderScrollState);
    updateHeaderScrollState();

    function showAutohideHeader() {
        clearTimeout(navHideTimeout);
        $autohideHeader.addClass('nav-visible');
    }

    function scheduleHideAutohideHeader() {
        clearTimeout(navHideTimeout);
        navHideTimeout = setTimeout(function () {
            $autohideHeader.removeClass('nav-visible');
        }, 300);
    }

    jQuery('.nav-hover-zone, .header.navbar-fixed-top')
        .on('mouseenter', showAutohideHeader)
        .on('mouseleave', scheduleHideAutohideHeader);

// scroll Up

    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $('.scrollup').fadeIn('slow');
        } else {
            $('.scrollup').fadeOut('slow');
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({scrollTop: 0}, 1000);
        return false;
    });

    $('.main_mix_content').imagesLoaded(function () {
        // images have loaded
    });


    //End
});







