//paralax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();
  $('.jumbotron img').css({
    transform: 'translate(0px, ' + wScroll / 4 + '%)',
  });
  $('.jumbotron h1').css({
    transform: 'translate(0px, ' + wScroll / 2 + '%)',
  });
  $('.jumbotron p').css({
    transform: 'translate(0px, ' + wScroll / 1.2 + '%)',
  });

  //   Projects
  if (wScroll > $('.projects').offset().top - 50) {
    $('.projects .col-md-4').addClass('muncul');
  }
});
