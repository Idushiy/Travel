jQuery(document).ready(function($) {


// var $menu = $("#menu").mmenu({
//                "extensions": [
//                   "fx-menu-zoom",
//                   "fx-panels-zoom",
//                   "pagedim-black",
//                    "theme-dark"
//                ],
//                "offCanvas": {
//                   "position": "right"
//                },
//                "navbars": [
//                   {
//                    //  "position": "top"
//                   }
//                ]

//       });
//    var $icon = $("#my-icon");
// var API = $menu.data( "mmenu" );

// $.mmenu.configuration.classNames.fixedElements = {
//    fixed: "Fixed"
// };

// $icon.on( "click", function() {
//    API.open();
// });






   /* $('.open-popup-link').magnificPopup({
        type:'inline',
        midClick: true // Allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source in href.
    });*/



    $('.image-link').magnificPopup({type:'image'});

//     $.fn.equivalent = function (){
//             //запишем значение jQuery выборки к которой будет применена эта функция в локальную переменную $blocks
//         var $blocks = $(this),
//             //примем за максимальную высоту - высоту первого блока в выборке и запишем ее в переменную maxH
//             maxH    = $blocks.eq(0).height();

//         //делаем сравнение высоты каждого блока с максимальной
//         $blocks.each(function(){
//             maxH = ( $(this).height() > maxH ) ? $(this).height() : maxH;
//             /*
//             Этот блок можно записать так:
//             if ( $(this).height() > maxH ) {
//                 maxH = $(this).height();
//             }
//             */
//         });

//         //устанавливаем найденное максимальное значение высоты для каждого блока jQuery выборки
//         $blocks.height(maxH);
//     }

//     //применяем нашу функцию в элементам jQuery выборки - $('.nav')
//    // $('.odin').equivalent();

//  //   $('.other_img').click({})

//  $(".tabs").lightTabs();

    // $( "#slider-range" ).slider({
    //   range: true,
    //   min: 1,
    //   max: 15000,
    //   values: [ 75, 3000 ],
    //   slide: function( event, ui ) {
    //     $( "#amount_left" ).val(ui.values[ 0 ]);
    //     $( "#amount_right" ).val(ui.values[ 1 ]);
    //   }
    // });


    // $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
    //   " - $" + $( "#slider-range" ).slider( "values", 1 ) );

   $("input[name=phone_field]").mask("+7 (999) 999-99-99");


    //main slider
    var owl = $('#main_slider');
    owl.owlCarousel({
        items:1,
        dots:true,
        loop:true,
        //animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:4500,
        autoplayHoverPause:true
    });

    $(".main_slider_arrow_right").click(function() {
        owl.trigger('next.owl.carousel');
    });
    $(".main_slider_arrow_left").click(function() {
        owl.trigger('prev.owl.carousel');
    });




    function numberSlider() {
        var size = window.innerWidth;
        if (size >= 1200) {
            return 4
        } else {
            return 2
        }
    }

   var owl2 = $('#main_partners_slider');
    owl2.owlCarousel({
        items: numberSlider() ,
        loop:true,
        autoplay:true,
        autoplayTimeout:4500,
        autoplayHoverPause:true

    });
// Custom Navigation Events
    $(".partners_arrow_right").click(function() {
        owl2.trigger('next.owl.carousel');
    });
    $(".partners_arrow_left").click(function() {
        owl2.trigger('prev.owl.carousel');
    });

    // $('.podbor_zag').click(function(){
    //  $(this).parent().toggleClass('open');
    // });
    //  $('.cvet_ul li').click(function(){
    //     $(this).toggleClass('active');
    // });


    var owl3 = $('#spec_slider');
    owl3.owlCarousel({
        items:1,
        dots:false,
        loop:true,
        autoplay:true,
        autoplayTimeout:4500,
        autoplayHoverPause:true


    });
// Custom Navigation Events
    $(".spec_arrow_right").click(function() {
        owl3.trigger('next.owl.carousel');
    });
    $(".spec_arrow_left").click(function() {
        owl3.trigger('prev.owl.carousel');
    });



    $("#podp_form").submit(function(){
        var form = $(this);
        var error = false;
        form.find('input').each( function(){
            if ($(this).val() == '') {
                alert('Заполните поле "'+$(this).attr('placeholder')+'"!');
                error = true;
            }
        });
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: '/post.php',

                data: data,
                beforeSend: function(data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function(data){
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        alert('Заявка отправлена!');

                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function(data) {
                    form.find('input[type="submit"]').prop('disabled', false);
                }

            });
        }
        return false;
    });
    $("#form_call").submit(function(){
        var form = $(this);
        var error = false;
        form.find('input').each( function(){
            if ($(this).val() == '') {
                alert('Заполните поле "'+$(this).attr('placeholder')+'"!');
                error = true;
            }
        });
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: '/post2.php',

                data: data,
                beforeSend: function(data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function(data){
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        alert('Заявка отправлена!');

                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function(data) {
                    form.find('input[type="submit"]').prop('disabled', false);
                }

            });
        }
        return false;
    });
    $("#podp_form2").submit(function(){
        var form = $(this);
        var error = false;
        form.find('input').each( function(){
            if ($(this).val() == '') {
                alert('Заполните поле "'+$(this).attr('placeholder')+'"!');
                error = true;
            }
        });
        if (!error) {
            var data = form.serialize();
            $.ajax({
                type: 'POST',
                url: '/post.php',

                data: data,
                beforeSend: function(data) {
                    form.find('input[type="submit"]').attr('disabled', 'disabled');
                },
                success: function(data){
                    if (data['error']) {
                        alert(data['error']);
                    } else {
                        alert('Заявка отправлена!');

                    }
                },
                error: function (xhr, ajaxOptions, thrownError) {
                    alert(xhr.status);
                    alert(thrownError);
                },
                complete: function(data) {
                    form.find('input[type="submit"]').prop('disabled', false);
                }

            });
        }
        return false;
    });

//     var owl4 = $('#clients_carousel');
//         owl4.owlCarousel({
//                 items:5,
//                 pagination:false,
//                 addClassActive:true
//             });
// // Custom Navigation Events
//     $(".cl_next").click(function() {
//         owl4.trigger('owl.next');
//     })
//     $(".cl_prev").click(function() {
//         owl4.trigger('owl.prev');
//     })

    $.datepicker.regional['ru'] = {
        closeText: 'Закрыть',
        prevText: '&#x3c;Пред',
        nextText: 'След&#x3e;',
        currentText: 'Сегодня',
        monthNames: ['Январь','Февраль','Март','Апрель','Май','Июнь',
            'Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'],
        monthNamesShort: ['Янв','Фев','Мар','Апр','Май','Июн',
            'Июл','Авг','Сен','Окт','Ноя','Дек'],
        dayNames: ['воскресенье','понедельник','вторник','среда','четверг','пятница','суббота'],
        dayNamesShort: ['вск','пнд','втр','срд','чтв','птн','сбт'],
        dayNamesMin: ['Вс','Пн','Вт','Ср','Чт','Пт','Сб'],
        dateFormat: 'dd.mm.yy',
        firstDay: 1,
        isRTL: false
    };
    $.datepicker.setDefaults($.datepicker.regional['ru']);

    $('#datepicker').datepicker({
        showOn: 'both'

    });



    $("#city").css({"display":"none"})
    $("#night-drop").css({"display":"none"})
    $("#passagir-drop").css({"display":"none"})
    $(".name-city").click(function(){
        if (document.getElementById('city').style.display === "none") {
            $("#night-drop").hide()
            $("#passagir-drop").hide()
            $("#city").show()
        }
        else {
            $("#city").hide()
        }
    })


    $(".city div").click(function(){
        var valCity = $(this).text();
        var dataId = $(this).attr('data-id');
        $(".name-city").val(valCity);
        $(".id-city").val(dataId);
        $(".city ").hide();
    })

    $("#night").click(function(){
        if (document.getElementById('night-drop').style.display === "none") {
            $("#city").hide()
            $("#passagir-drop").hide()
            $("#night-drop").show()

        }
        else {
            $("#night-drop").hide()
        }
    })


    $(".night-drop div").click(function(){
        var valCity = $(this).text();
        $("#night").val(valCity);
        $(".night-drop ").hide();
    })

    $("#passagir").click(function(){
        if (document.getElementById('passagir-drop').style.display === "none") {
            $("#night-drop").hide()
            $("#city").hide()
            $("#passagir-drop").show();

        }
        else {
            $("#passagir-drop").hide()
        }
    })


    $(".passagir-drop div").click(function(){
        var valCity = $(this).text();
        $("#passagir").val(valCity);
        $(".passagir-drop ").hide();
    })
    $("#ui-datepicker-div").hide();


});