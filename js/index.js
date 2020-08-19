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
  centerMode: true,
  slidesToShow: 5,
})