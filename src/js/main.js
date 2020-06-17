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
<<<<<<< HEAD

let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach((item) => {
    item.addEventListener('click', selectToggle);
  });

=======

let select = function () {
  let selectHeader = document.querySelectorAll('.select__header');
  let selectItem = document.querySelectorAll('.select__item');

  selectHeader.forEach((item) => {
    item.addEventListener('click', selectToggle);
  });

>>>>>>> c7378db041aef6f512d8f52c8f836fa869edbbce
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
<<<<<<< HEAD
  });
});

$(document).ready(function () {
  $('.hidden').click(function () {
    $('.regulation').slideToggle();
=======
>>>>>>> c7378db041aef6f512d8f52c8f836fa869edbbce
  });
});

$(document).ready(function () {
<<<<<<< HEAD
  $('.block-inf-product-mobile').click(function () {
    $(this).toggleClass('active').children('.dropdown').slideToggle();
  });
});

var myMap;
var placemarkCollections = {};
var placemarkList = {};

// Список городов и магазинов в них
var shopList = [
    {
        'cityName': 'Москва',
        'shops': [
            {'coordinates': [55.710443, 37.446048], 'name': 'Верейская улица, 7'},
            {'coordinates': [55.854587, 37.407780], 'name': 'Героев Панфиловцев, 26'}
        ]
    }
];

ymaps.ready(init);

function init() {

    // Создаем карту
    myMap = new ymaps.Map("map", {
        center: [56, 37],
        zoom: 8,
        controls: [
            'zoomControl'
        ],
        zoomMargin: [20]
    });

    for (var i = 0; i < shopList.length; i++) {

        // Добавляем название города в выпадающий список
        $('select#cities').append('<option value="' + i + '">' + shopList[i].cityName + '</option>');

        // Создаём коллекцию меток для города
        var cityCollection = new ymaps.GeoObjectCollection();

        for (var c = 0; c < shopList[i].shops.length; c++) {
            var shopInfo = shopList[i].shops[c];

            var shopPlacemark = new ymaps.Placemark(
                shopInfo.coordinates,
                {
                    hintContent: shopInfo.name,
                    balloonContent: shopInfo.name
                }
            );

            if (!placemarkList[i]) placemarkList[i] = {};
            placemarkList[i][c] = shopPlacemark;

            // Добавляем метку в коллекцию
            cityCollection.add(shopPlacemark);

        }

        placemarkCollections[i] = cityCollection;

        // Добавляем коллекцию на карту
        myMap.geoObjects.add(cityCollection);

    }

    $('select#cities').trigger('change');
}


// Переключение города
$(document).on('change', $('select#city'), function () {
    var cityId = $('select#cities').val();

    // Масштабируем и выравниваем карту так, чтобы были видны метки для выбранного города
    myMap.setBounds(placemarkCollections[cityId].getBounds(), {checkZoomRange:true}).then(function(){
        if(myMap.getZoom() > 15) myMap.setZoom(15); // Если значение zoom превышает 15, то устанавливаем 15.
    });

    $('#shops').html('');
    for (var c = 0; c < shopList[cityId].shops.length; c++) {
        $('#shops').append('<li value="' + c + '">' + shopList[cityId].shops[c].name + '</li>');
    }

});

// Клик на адрес
$(document).on('click', '#shops li', function () {

    var cityId = $('select#cities').val();
    var shopId = $(this).val();

    placemarkList[cityId][shopId].events.fire('click');
=======
  $('.hidden').click(function () {
    $('.regulation').slideToggle();
  });
});

$(document).ready(function () {
  $('.block-inf-product-mobile').click(function () {
    $(this).toggleClass('active').children('.dropdown').slideToggle();
  });
>>>>>>> c7378db041aef6f512d8f52c8f836fa869edbbce
});
