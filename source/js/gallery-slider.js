'use strict';

(function () {
  let slider = document.querySelector('.gallery');
  let slideList = slider.querySelector('.gallery__list');
  let slideCollection = slider.querySelectorAll('.gallery__item');
  let btnPrev = slider.querySelector('.gallery__btn--prev');
  let btnNext = slider.querySelector('.gallery__btn--next');

  let activeClass = 'gallery__item--selected';

  let sliderOperations = {
    findActiveSlide: function () {
      for (let i = 0; i < slideCollection.length; i++) {
        if (slideCollection[i].classList.contains(activeClass)) {
          return i;
        }
      }
    },

    scrollList: function () {
      let active = this.findActiveSlide();
      slideList.style.transform = 'translateX(-161px)';
    }
  }

  sliderOperations.scrollList();

  btnPrev.addEventListener('click', function () {
    sliderOperations.scrollList();
  });

  btnNext.addEventListener('click', function () {
    console.log('Next');
  });
})();
