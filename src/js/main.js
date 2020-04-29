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
      // клик внутри элемента 
      return;
  }
  // клик снаружи элемента 
  $('.search-h').removeClass('active');
  $('.icon-black').removeClass('active');
  $('.icon-white').removeClass('active');
});