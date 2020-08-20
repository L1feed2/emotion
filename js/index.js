$('.header__toggler').click(function () {
  $(this).toggleClass('header__toggler--active');
  $('.header__nav').toggleClass('header__nav--open');
  $('body').toggleClass('body--dark');
})



// валидация формы

// только цифры
function validate(evt) {
  var theEvent = evt || window.event;
  var key = theEvent.keyCode || theEvent.which;
  key = String.fromCharCode(key);
  var regex = /[0-9]|\./;
  if (!regex.test(key)) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}


// таймер

function timer(f_time) {
  function timer_go() {
    var n_time = Date.now();
    var diff = f_time - n_time;
    if(diff <= 0) return false;
    var left = diff % 1000;

    //секунды
    diff = parseInt(diff / 1000);
    var s = diff % 60;
    if(s < 10) {
      $(".seconds_1").html(0);
      $(".seconds_2").html(s);
    }else {
      $(".seconds_1").html(parseInt(s / 10));
      $(".seconds_2").html(s % 10);
    }
    //минуты
    diff = parseInt(diff / 60);
    var m = diff % 60;
    if(m < 10) {
      $(".minutes_1").html(0);
      $(".minutes_2").html(m);
    }else {
      $(".minutes_1").html(parseInt(m / 10));
      $(".minutes_2").html(m % 10);
    }
    //часы
    diff = parseInt(diff / 60);
    var h = diff % 24;
    if(h < 10) {
      $(".hours_1").html(0);
      $(".hours_2").html(h);
    }else {
      $(".hours_1").html(parseInt(h / 10));
      $(".hours_2").html(h % 10);
    }
    //дни
    var d = parseInt(diff / 24);
    if(d < 10) {
      $(".days_1").html(0);
      $(".days_2").html(d);
    }else {
      $(".days_1").html(parseInt(d / 10));
      $(".days_2").html(d % 10);
    }
    setTimeout(timer_go, left);
  }
  setTimeout(timer_go, 0);
}

$(document).ready(function() {
  var time = $(".timer").attr("data-finish");
  timer(time);
});


// слайдер
$('.slider__body').slick({
  slidesToShow: 5,
  rtl: false,
  slidesToScroll: 2,
  // infinite: true,
  centerMode: true,
  variableWidth: true,
  infinite: true,
  focusOnSelect: true,
  // touchMove: true,
  nextArrow: '<div class="slider__arrow slider__next"><span class="icon-triangle-right"></span></div>',
  prevArrow: '<div class="slider__arrow slider__prev"><span class="icon-triangle-right"></span></div>',
  responsive: [
    {
      breakpoint: 700,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        appendArrows: '.slider__arrows',
        animationSpeed: 1000
      }
    }
  ]
});
// function slickPause() {
// 	   $('.slider__body').slick('slickPause');
// }
// slickPause();
// $('.slider__body').mouseover(function() {
// 	   $('.slider__body').slick('slickPlay')
// });
// $('.slider__body').mouseout(function() {
// 	   slickPause();
// });