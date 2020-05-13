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
      $('.icon-black').addClass('active');
      $('.icon-white').addClass('active');
  });
});

$(document).click( function(e){
  if ( $(e.target).closest('.search-h').length ) {
      return;
  }

  $('.icon-white').addClass('active');
  $('.icon-black').addClass('active');
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


// function viewObject(objectId){
//     $('[data-objectId]').removeClass('active');				
//     $('[data-objectId='+objectId+']').addClass('active');

//     // Выделяем все метки в синий
//     objectManager.objects.each(function (item) {
//       objectManager.objects.setObjectOptions(item.id, {
//           preset: 'islands#blueIcon'
//       });
//   });

//   // Выделяем выбранную метку в красный
//   objectManager.objects.setObjectOptions(objectId, {
//       preset: 'islands#redDotIcon'
//   });

//   // Центруем по метке
//   myMap.setCenter(objectManager.objects.getById(objectId).geometry.coordinates, 15, {
//       checkZoomRange: true
//   });
// }

// $(document).on('click', '[data-objectId]', function(){
// 	var objectId=$(this).attr('data-objectId');
// 	viewObject(objectId);
// });

var numCount = document.querySelector('.num-count');
var plusBtn = document.querySelector('.button-plus');
var minusBtn = document.querySelector('.button-minus');
plusBtn.onclick = function() {
  var qty = parseInt(numCount.value);
  qty = qty + 1;
  numCount.value = qty;
}
minusBtn.onclick = function() {
  var qty = parseInt(numCount.value);
  qty = qty - 1;
  numCount.value = qty;
}

