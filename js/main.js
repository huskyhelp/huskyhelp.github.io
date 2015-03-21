$(function(){
    if(!$(".navbar").hasClass("navbar-fallback")){
        $(window).scroll(function(){
            if($(window).scrollTop() > 70) $(".navbar, .nav-content").addClass("invert");
            else $(".navbar, .nav-content").removeClass("invert");
        });
    }
    $(document).ready(function(){
        $('.slick').slick({
            lazyLoad: 'ondemand',
            infinite: true,
            slidesToShow: 4,
            autoplay: true,
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1100,
                    settings: {
                        slidesToShow: 3
                    }
                }
            ]
        });
    });
});