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


//увеличения изображения стр 9
    Zoomerang
        .config({
            maxHeight: 800,
            maxWidth: 800,
            bgColor: '#000',
            bgOpacity: .85
        })
        .listen('.zoom-img');
//КОНЕЦ увеличения изображения стр 9

//аккордион, контекстная реклама. десктоп стр 10
    $(".s-accordion .panel").on('click', function() {
        var $this = $(this);
        $this.css('width','55%');
        $(".s-accordion .panel").addClass('active-tab');
        $this.siblings('div').css('width','15%');
        $this.siblings($this).removeClass('active-tab');
    });
//КОНЕЦ аккордион, контекстная реклама. десктоп стр 10

    CustomSlideCircle();

});

//схема работы. круги. стр 10
function CustomSlideCircle() {
    $('.circle').each(function (i, elem) {
        var thisCircle = $(this);
        var circle =  $('.circle');
        var prev = i-1;
        var next = i+1;

        var arrowRight = thisCircle.find('.right-arrow-circle');
        var arrowLeft = thisCircle.find('.left-arrow-circle');
        var elemNextStyle =  circle.get(next);
        var elemPrevStyle =  circle.get(prev);

        var one =  circle.get(0);
        var two =  circle.get(1);
        var three =  circle.get(2);

        arrowRight.on('click', function () {
            thisCircle.toggleClass('circle_active');
            $(elemNextStyle).toggleClass('circle_active');
            if(next == 2) {
                $(one).css('z-index', '3');
                $(two).css('z-index', '4');
            }
            if(next == 3) {
                $(three).css('z-index', '5');
            }
        });

        arrowLeft.on('click', function () {
            thisCircle.toggleClass('circle_active');
            $(elemPrevStyle).toggleClass('circle_active');
            if(prev == 2) {
                var three =  circle.get(2);
                $(three).css('z-index', '2');
            }
        });
    })
}
//КОНЕЦ схема работы. круги. стр 10
