import $ from 'jquery';
import '@fancyapps/fancybox';
import Swiper from 'swiper';
import '../js/libs/ui.js';
import '../js/libs/jScrollPane.js';
import '../js/libs/mousewheel.js';

$(function () {
  $('.scroll-pane').jScrollPane({
    showArrows: false,
  });
});

var menu = ['1', '2', '3', '4'];
var mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 0,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + menu[index] + '</span>';
    },
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: {
      el: '.swiper-container-thumbs',
      slidesPerView: 5,
    },
  },
});

$(function () {
  $('.search-h').focus(function () {
    $('.icon-black').addClass('active');
    $('.icon-white').addClass('active');
  });

  $('.search-h').blur(function () {
    $('.icon-white').removeClass('active');
    $('.icon-black').removeClass('active');
  });
});

(function ($) {
  $(function () {
    $('.tabs__caption').on('click', 'span:not(.active)', function () {
      $(this)
        .addClass('active')
        .siblings()
        .removeClass('active')
        .closest('.tabs')
        .find('.tabs__content')
        .removeClass('active')
        .eq($(this).index())
        .addClass('active');
    });
  });
})(jQuery);

let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach((item) => {
    item.addEventListener('click', selectToggle);
  });

  selectItem.forEach((item) => {
    item.addEventListener('click', selectChoose);
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

$(document).click(function (e) {
  if ($(e.target).closest('.select').length) {
    return;
  }
  $('.select').removeClass('is-active');
});

$(function () {
  (function quantityProducts() {
    var $quantityArrowMinus = $('.button-minus');
    var $quantityArrowPlus = $('.button-plus');

    $quantityArrowMinus.click(quantityMinus);
    $quantityArrowPlus.click(quantityPlus);

    function quantityMinus() {
      var $quantityNum = $(this).siblings('.num-count');
      if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
      }
    }

    function quantityPlus() {
      var $quantityNum = $(this).siblings('.num-count');
      $quantityNum.val(+$quantityNum.val() + 1);
    }
  })();
});

$(document).ready(function () {
  $('.content_toggle').click(function () {
    $('.content_block').slideToggle(300, function () {
      if ($(this).is(':hidden')) {
        $('.content_toggle').html('Подробнее');
      } else {
        $('.content_toggle').html('Скрыть');
      }
    });
    return false;
  });
});

$(document).ready(function () {
  $('.hamburger-mobile').click(function () {
    $(this).toggleClass('is-active');
  });
});

$(document).ready(function () {
  $('.icon-search-mobile').click(function () {
    $('.search-mobile-active').toggleClass('active');
  });
});
$(document).click(function (e) {
  if ($(e.target).closest('.search-mobile-active, .icon-search-mobile').length) {
    return;
  }
  $('.search-mobile-active').removeClass('active');
});
$(document).ready(function () {
  $('.icon-close-search').click(function () {
    $('.search-mobile-active').removeClass('active');
  });
});

$(document).ready(function () {
  $('.hamburger-mobile, .icon-close, .close').on('click', function () {
    $('.hamburger-mobile-menu').fadeToggle();
    $('html').toggleClass('active');
  });
  $('.icon-close').on('click', function () {
    $('.hamburger-mobile').removeClass('is-active');
  });
});

$(document).ready(function () {
  $('.hamburger-mobile-menu-block-dropdown, .arrow-left, .close').on('click', function () {
    $(this).toggleClass('active');
    $('.hamburger-mobile').removeClass('is-active');
    $('.hamburger-mobile-menu').toggleClass('active');
    return false;
  });
  $('.arrow-left, .close').on('click', function () {
    $('.hamburger-mobile-menu-block-dropdown').removeClass('active');
  });
});

$(document).ready(function () {
  $('.block-filter-mobile-link').on('click', function () {
    $('.block-filter').fadeToggle();
    $('html').toggleClass('active');
  });
  $('.block-right').on('click', function () {
    $('.block-filter').fadeToggle();
    $('html').removeClass('active');
  });
});

$(document).ready(function () {
  $('.active-tires').click(function () {
    $(this).toggleClass('active');
    $('.tires').slideToggle();
  });
  $('.active-wheels').click(function () {
    $(this).toggleClass('active');
    $('.wheels').slideToggle();
  });
  $('.active-by-car').click(function () {
    $(this).toggleClass('active');
    $('.by-car').slideToggle();
  });
});

$(document).ready(function () {
  $('.click').on('click', function () {
    $('.list').fadeToggle();
  });
});

$(function () {
  $('#slider-range').slider({
    range: true,
    min: 0,
    max: 10690,
    values: [856, 4966],
    slide: function (event, ui) {
      $('#amount').val(ui.values[0]);
      $('#amount1').val(ui.values[1]);
    },
  });
  $('#amount').val($('#slider-range').slider('values', 0));
  $('#amount1').val($('#slider-range').slider('values', 1));
});

$(document).ready(function () {
  $('.filter-parameters-drop').click(function () {
    $(this).toggleClass('active');
    $('.dropdown-parameters').slideToggle();
  });
  $('.filter-auto-drop').click(function () {
    $(this).toggleClass('active');
    $('.dropdown-auto').slideToggle();
  });
});

$(document).ready(function () {
  $('[name=quantity]').bind('change keyup input click', function () {
    if (this.value.match(/[^0-9]/g)) {
      this.value = this.value.replace(/[^0-9]/g, '');
    }
  });
});

$(document).ready(function () {
  $('.hidden').click(function () {
    $('.regulation').slideToggle();
  });
});

$(document).ready(function () {
  $('.block-inf-product-mobile').click(function () {
    $(this).toggleClass('active').children('.dropdown').slideToggle();
  });
});
