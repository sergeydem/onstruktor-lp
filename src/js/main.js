$( document ).ready(function() {


//TABS стр 3
    wrapper   = $(".tabs-im");
    tabs      = wrapper.find(".tab-im");
    tabToggle = wrapper.find(".tab-toggle-im");
    function openTab() {
        var content     = $(this).parent().next(".content"),
            activeItems = wrapper.find(".active");
        if(!$(this).hasClass('active')) {
            $(this).add(content).add(activeItems).toggleClass('active');
            wrapper.css('min-height', '400px' );
        }
    };
    tabToggle.on('click', openTab);
    tabToggle.first().trigger('click');
//END TABS стр 3


//слайдер работ на стр 8
    $('.slider-work-im').owlCarousel({
        loop:true,
        margin:50,
        autoplay:true,
        smartSpeed:2000,
        autoplayTimeout:7000,
        dots: false,
        nav: true,
        navText : ["",""],
        rewindNav : true,
        responsive:{
            0:{
                items:1,
                dots: true,
                nav: false
            },
            600:{
                items:1,
                dots: true,
                nav: false
            },
            1000:{
                items:1
            }
        }
    });
//END слайдер работ на стр 8

//блок результаты seo. переключение между слайдами
    function seoChangeButton(fisrt, second, slideOne, slideTwo) {
        $('.btn_arrow'+fisrt).addClass('active-button');
        $('.result-seo .btn_arrow'+ second).removeClass('active-button');
        $('.result-content'+slideOne).css('display', 'block');
        $('.result-content'+slideTwo).css('display', 'none');
    }

    $(".result-seo .btn_arrow.first-btn").on('click', function () {
        seoChangeButton('.first-btn', '.second-btn' , '.first-slide', '.second-slide');
    });
    $(".result-seo .btn_arrow.second-btn").on('click', function () {
        seoChangeButton( '.second-btn','.first-btn', '.second-slide', '.first-slide');
    });
//END блок результаты seo. переключение между слайдами

});
