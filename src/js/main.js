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

(function($) {
  $(function() {
    
    $('.tabs__caption').on('click', 'span:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('.tabs').find('.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });
  })(jQuery);



  let select = function () {
    let selectHeader = document.querySelectorAll('.select__header');
    let selectItem = document.querySelectorAll('.select__item');

    selectHeader.forEach(item => {
        item.addEventListener('click', selectToggle)
    });

    selectItem.forEach(item => {
        item.addEventListener('click', selectChoose)
    });

    function selectToggle() {
        this.parentElement.classList.toggle('is-active');
    }

    function selectChoose() {
        let text = this.innerText,
            select = this.closest('.select'),
            currentText = select.querySelector('.select__current');
        currentText.innerText = text;
        select.classList.remove('is-active');

    }

};


select();

$(document).click( function(e){
  if ( $(e.target).closest('.select').length ) {
      return;
  }
  $('.select').removeClass('is-active');
});