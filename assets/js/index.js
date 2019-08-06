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
     if (sc > 85) {
       $('.nav').addClass('nav--sticked');
     } else if (sc === 0) {
       $('.nav').removeClass('nav--sticked');
     }
  })

  const slider = document.querySelector('.main-section-slider');
  const controls = document.querySelectorAll('.slider-control');
  let currentSlide = 0;
  let control = controls[currentSlide];
  
  $(slider).click((e) => {
    e.preventDefault();
    e.stopPropagation();
    let currentControlIndex = null;
    
    for (let i = 0; i < control.children.length; i++) {
      if (e.target === control.children[i]) {
        currentControlIndex = i;
        //const root = document.documentElement;
        const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
        //root.style.setProperty('--containerWidth', w + "px");
        console.log(w);
        const xOffset = currentControlIndex*w;

        for (let i = 0; i < control.children.length; i++) {
          $(slider.children[i]).css({'transition' : 'transform 1.5s ease-in-out','transform' : `translateX(${-xOffset}px)`});
        }
    
        currentSlide = currentControlIndex;
        control = controls[currentSlide];
      } 
    }
  })
  console.log(control.children[0]);
})