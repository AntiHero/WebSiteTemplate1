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
     if (sc > 85) {
       $('.nav').addClass('nav--sticked');
     } else if (sc === 0) {
       $('.nav').removeClass('nav--sticked');
     }
  })

  // $('.bxslider').bxSlider({
  //   mode: 'horizontal',
  //   moveSlides: 1,
  //   slideMargin: 40,
  //   infiniteLoop: true,
  //   minSlides: 1,
  //   maxSlides: 1,
  //   speed: 1200,
  // })
})