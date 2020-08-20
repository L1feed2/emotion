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

var config = {
  endDate: '2020-08-20 12:00', // 12 часов 1 марта 2017 года
  timeZone: 'Europe/Kiev', // Киевское время
  hours: $('#hours'),
  minutes: $('#minutes'),
  seconds: $('#seconds')
};

moment(config);


// слфйдер
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
      breakpoint: 550,
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