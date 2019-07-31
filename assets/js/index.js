console.log('hello');

$(document).ready(() => {
  $('.nav-icon').click(() => {
    $('.full-nav-wrapper').addClass('open-nav');
    $('body').css('overflow', 'hidden');
  })

  $('.full-nav__close').click(() => {
    $('.full-nav-wrapper').removeClass('open-nav');
    $('body').css('overflow-y', 'scroll');
  })

  $(window).scroll(() => {
    let sc = $(window).scrollTop();
    console.log(sc);
     if (sc > 100) {
       $('.nav').addClass('nav--sticked');
     } else {
       $('.nav').removeClass('nav--sticked');
     }
  })
})