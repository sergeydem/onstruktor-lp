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
    loadClientsSlider();
    loadProductSlider();
    loadProductSlider1();
    loadCatalogProduct();
    $(".toggle-text").each(textToggle);
    $(".toggle-text-link").on('click',linkToggle);


//HOVER BUTTON в таб на стр ИМ стр 13
    $(".table-container-footer .btn-pink").each(function (index, elem) {
        var elemIndex = index + 2;
        var _this = $(this);
        _this.hover(function(){
            $(".table-container-body tr td:nth-of-type(" + elemIndex + ")").css({"background-color": "rgba(68,125,152,.07)",  "transition": "all 0.3s ease-in"});
        },function(){
            $(".table-container-body tr td:nth-of-type(" + elemIndex + ")").css({"background-color": "transparent",  "transition": "all 0.3s ease-in"});
        }).click(function () {
            $(".table-container-body tr td").each(function () {
                if ($(this).hasClass( "clicked" )) $(this).removeClass("clicked")
            });

            $(".table-container-body tr td:nth-of-type(" + elemIndex + ")").addClass("clicked");
        });
    });
//END HOVER BUTTON в таб на стр ИМ стр 13
//таблица на стр ИМ
    var $body = $(".table-container-body"),
        $header = $(".table-container-header"),
        $footer = $(".table-container-footer");

// Get ScrollBar width(From: http://bootstrap-table.wenzhixin.net.cn/)
    var scrollBarWidth = (function () {
        var inner = $('<p/>').addClass('fixed-table-scroll-inner'),
            outer = $('<div/>').addClass('fixed-table-scroll-outer'),
            w1, w2;
        outer.append(inner);
        $('body').append(outer);
        w1 = inner[0].offsetWidth;
        outer.css('overflow', 'scroll');
        w2 = inner[0].offsetWidth;
        if (w1 === w2) {
            w2 = outer[0].clientWidth;
        }
        outer.remove();
        return w1 - w2;
    })();

// Scroll horizontal
    $body.on('scroll', function () {
        $header.scrollLeft($(this).scrollLeft());
        $footer.scrollLeft($(this).scrollLeft());
    });

// Redraw Header/Footer
    var redraw = function() {
        var tds = $body.find("> table > tbody > tr:first-child > td");
        tds.each(function (i) {
            var width = $(this).innerWidth(),
                lastPadding = (tds.length -1 == i ? scrollBarWidth : 0);
            lastHeader = $header.find("th:eq("+i+")").innerWidth(width + lastPadding);
            lastFooter = $footer.find("th:eq("+i+")").innerWidth(width + lastPadding);
        });
    };

// Selection
    $body.find("> table > tbody > tr > td").click(function(e) {
        $body.find("> table > tbody > tr").removeClass("info");
        $(e.target).parent().addClass('info');
    });

// Listen to Resize Window
    $(window).resize(redraw);
    redraw();
//конец таблицы на стр ИМ






//Google Maps JS
    var locations = [
        ['<b>Name 1</b><br>Address Line 1<br>Bismarck, ND 58501<br>Phone: 701-555-1234<br><a href="#" >Link<a> of some sort.', 47.84208743, 35.14388347, 4],
        ['<b>Name 2</b><br>Address Line 1<br>Fargo, ND 58103<br>Phone: 701-555-4321<br><a href="#" target="_blank">Link<a> of some sort.', 50.42897675, 30.507653, 5]
        /*
         * Next point on map
         *   -Notice how the last number within the brackets incrementally increases from the prior marker
         *   -Use http://itouchmap.com/latlong.html to get Latitude and Longitude of a specific address
         *   -Follow the model below:
         *      ['<b>Name 3</b><br>Address Line 1<br>City, ST Zipcode<br>Phone: ###-###-####<br><a href="#" target="_blank">Link<a> of some sort.', ##.####, -##.####, #]
         */
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 6,
        /* Zoom level of your map */
        center: new google.maps.LatLng(48.86415588, 31.5623405),
        /* coordinates for the center of your map */
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[i][1], locations[i][2]),
            map: map
        });

        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infowindow.setContent(locations[i][0]);
                infowindow.open(map, marker);
            }
        })(marker, i));
    }

//END Google Maps JS

    //Google Maps JS
    var locations1 = [
        ['<b>Name 1</b><br>Address Line 1<br>Bismarck, ND 58501<br>Phone: 701-555-1234<br><a href="#" >Link<a> of some sort.', 47.84208743, 35.14388347, 4],
        ['<b>Name 2</b><br>Address Line 1<br>Fargo, ND 58103<br>Phone: 701-555-4321<br><a href="#" target="_blank">Link<a> of some sort.', 50.42897675, 30.507653, 5]
        /*
         * Next point on map
         *   -Notice how the last number within the brackets incrementally increases from the prior marker
         *   -Use http://itouchmap.com/latlong.html to get Latitude and Longitude of a specific address
         *   -Follow the model below:
         *      ['<b>Name 3</b><br>Address Line 1<br>City, ST Zipcode<br>Phone: ###-###-####<br><a href="#" target="_blank">Link<a> of some sort.', ##.####, -##.####, #]
         */
    ];

    var map1 = new google.maps.Map(document.getElementById('map1'), {
        zoom: 6,
        /* Zoom level of your map */
        center: new google.maps.LatLng(48.86415588, 31.5623405),
        /* coordinates for the center of your map */
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow1 = new google.maps.InfoWindow();

    var marker1, k;

    for (k = 0; k < locations1.length; k++) {
        marker1 = new google.maps.Marker({
            position: new google.maps.LatLng(locations1[k][1], locations1[k][2]),
            map: map1
        });

        google.maps.event.addListener(marker1, 'click', (function(marker1, k) {
            return function() {
                infowindow1.setContent(locations1[k][0]);
                infowindow1.open(map1, marker1);
            }
        })(marker1, k));
    }

//END Google Maps JS


    //initiate the plugin and pass the id of the div containing gallery images
    $("#zoom_01").elevateZoom({
        zoomType: "inner",
        gallery:'gal1',
        cursor: 'crosshair',
        galleryActiveClass: 'active',
        imageCrossfade: true,
        loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif'});

//pass the images to Fancybox
    $("#zoom_01").bind("click", function(e) {
        var ez =   $('#zoom_01').data('elevateZoom');
        $.fancybox(ez.getGalleryList());
        return false;
    });



//стр 6 . лайк
    $(".like").on('click', function () {
        $(this).find('.put-like').toggleClass("active-like");
    });
//Конец стр 6 . лайк

//стр 7. кол-во тоарв
    $('.btn_nimus_plus').click(function(e) {
        e.preventDefault();

        fieldName = $(this).attr('data-field');
        type = $(this).attr('data-type');
        var input = $("input[name='" + fieldName + "']");
        var currentVal = parseInt(input.val());
        if (!isNaN(currentVal)) {
            if (type == 'minus') {

                if (currentVal > input.attr('min')) {
                    input.val(currentVal - 1).change();
                }
                if (parseInt(input.val()) == input.attr('min')) {
                    $(this).attr('disabled', true);
                }

            } else if (type == 'plus') {

                if (currentVal < input.attr('max')) {
                    input.val(currentVal + 1).change();
                }
                if (parseInt(input.val()) == input.attr('max')) {
                    $(this).attr('disabled', true);
                }

            }
        } else {
            input.val(0);
        }
    });
    $('.input-number').focusin(function() {
        $(this).data('oldValue', $(this).val());
    });
    $('.input-number').change(function() {

        minValue = parseInt($(this).attr('min'));
        maxValue = parseInt($(this).attr('max'));
        valueCurrent = parseInt($(this).val());

        name = $(this).attr('name');
        if (valueCurrent >= minValue) {
            $(".btn_nimus_plus[data-type='minus'][data-field='" + name + "']").removeAttr('disabled')
        } else {
            alert('Sorry, the minimum value was reached');
            $(this).val($(this).data('oldValue'));
        }
        if (valueCurrent <= maxValue) {
            $(".btn_nimus_plus[data-type='plus'][data-field='" + name + "']").removeAttr('disabled')
        } else {
            alert('Sorry, the maximum value was reached');
            $(this).val($(this).data('oldValue'));
        }

    });
//стр 7. кол-во тоарв



});

//больше текста в карточке
var ellipsestext = "...";
var moretext     = "подробнее";
var lesstext     = "скрыть";

function textToggle(){
    var content = $(this).html();
    var showChar     = 400;   // How many characters are shown by default
    if(content.length > showChar) {

        var contentExcert = content.substr(0, showChar);
        var contentRest = content.substr(showChar, content.length - showChar);
        var html = contentExcert + '<span class="toggle-text-ellipses">' + ellipsestext + ' </span> <span class="toggle-text-content"><span class="contentRest">' + contentRest + '</span><a href="javascript:;" class="toggle-text-link">' + moretext + '</a></span>';

        $(this).html(html);
    }
}
//больше текста в карточке
function linkToggle(){
    if($(this).hasClass("less")) {
        $(this).removeClass("less");
        $(this).html(moretext);
    } else {
        $(this).addClass("less");
        $(this).html(lesstext);
    }

    $('.toggle-text-ellipses').toggle();
    $('.contentRest').toggle();
    return false;
}




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

//cслайдер клиентов стр 11
function loadClientsSlider(){
    $('.clients-slider').slick({
        centerMode: true,
        infinite: true,
        slidesToShow: 3,
        focusOnSelect: true,
        centerPadding: '60px',
        speed: 2000,
        autoplay: true,
        autoplaySpeed: 8000,
        arrows: true,
        pauseOnFocus: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: false
                }
            }
        ]
    });
}
//КОНЕЦ cслайдер клиентов стр 11

//cслайдер товара стр 6
function loadCatalogProduct(){
    $('.catalog-product-slider').slick({
        infinite: true,
        slidesToShow: 1,
        speed: 2000,
        autoplay: false,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='material-icons'>chevron_left</i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='material-icons'>chevron_right</i></button>"
    });
}
//КОНЕЦ cслайдер товара стр 6

//слайдер товара в карточке стр 7
function loadProductSlider(){
    $('.product-img-main').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow:"<button type='button' class='slick-prev pull-left'><i class='material-icons'>chevron_left</i></button>",
        nextArrow:"<button type='button' class='slick-next pull-right'><i class='material-icons'>chevron_right</i></button>",
        fade: true,
        adaptiveHeight: true,
        asNavFor: '.product-img-preview'
    });
    $('.product-img-preview').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.product-img-main',
        dots: false,
        nav: false,
        arrows: false,
        focusOnSelect: true

    });

}
//КОНЕЦ слайдер товара в карточке стр 7

function loadProductSlider1(){
    $('.product-img-main1').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        adaptiveHeight: true,
        asNavFor: '.product-img-preview1'
    });
    $('.product-img-preview1').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.product-img-main1',
        dots: false,
        nav: true,
        arrows: true,
        vertical: true,
        centerMode: false,
        verticalSwiping: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    vertical: false,
                    swipeToSlide: true,
                    verticalSwiping: false,
                    nav: false,
                    arrows: false
                }
            }
        ]
    });

}