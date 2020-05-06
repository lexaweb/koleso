import $ from "jquery";
import '@fancyapps/fancybox';
import Swiper from "swiper";

$(document).ready(() => {
  svg4everybody();

  var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

$(function(){
  $('.search-h').click(function(){
      $('.search-h').addClass('active');
      $('.icon-black').addClass('active');
      $('.icon-white').addClass('active');
  });
});

$(document).click( function(e){
  if ( $(e.target).closest('.search-h').length ) {
      return;
  }
  $('.search-h').removeClass('active');
  $('.icon-black').removeClass('active');
  $('.icon-white').removeClass('active');
});

const selectSingle = document.querySelector('.__select');
const selectSingle_title = selectSingle.querySelector('.__select__title');
const selectSingle_labels = selectSingle.querySelectorAll('.__select__label');

// Toggle menu
selectSingle_title.addEventListener('click', () => {
  if ('active' === selectSingle.getAttribute('data-state')) {
    selectSingle.setAttribute('data-state', '');
  } else {
    selectSingle.setAttribute('data-state', 'active');
  }
});

// Close when click to option
for (let i = 0; i < selectSingle_labels.length; i++) {
  selectSingle_labels[i].addEventListener('click', (evt) => {
    selectSingle_title.textContent = evt.target.textContent;
    selectSingle.setAttribute('data-state', '');
  });
}

(function($) {
  $(function() {
    
    $('.tabs__caption').on('click', 'span:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });
  })(jQuery);