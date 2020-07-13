import $ from 'jquery';
import '@fancyapps/fancybox';
import Swiper from 'swiper';
import '../js/libs/ui.js';
// import '../js/libs/mousewheel.js';
// import '../js/libs/jScrollPane.js';

// $(function () {
//   $('.scroll-pane').jScrollPane({
//     showArrows: false,
//   });
// });

$(document).ready(function() {
  $(".fancybox").fancybox();
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


  var myMap;
  var placemarkCollections = {};
  var placemarkList = {};

     // Список городов и магазинов в них
  var shopList = [
    {
        'cityName': 'Москва',
        'shops': [
            {'coordinates': [55.710443, 37.446048], 'name': 'Верейская улица, 7'},
            {'coordinates': [55.854587, 37.407780], 'name': 'Героев Панфиловцев, 26'},
            {'coordinates': [55.710443, 37.446048], 'name': 'Верейская улица, 7'},
            {'coordinates': [55.854587, 37.407780], 'name': 'Героев Панфиловцев, 26'},
            {'coordinates': [55.710443, 37.446048], 'name': 'Верейская улица, 7'},
            {'coordinates': [55.854587, 37.407780], 'name': 'Героев Панфиловцев, 26'},
            {'coordinates': [55.710443, 37.446048], 'name': 'Верейская улица, 7'},
            {'coordinates': [55.854587, 37.407780], 'name': 'Героев Панфиловцев, 26'},
            {'coordinates': [55.710443, 37.446048], 'name': 'Верейская улица, 7'},
            {'coordinates': [55.854587, 37.407780], 'name': 'Героев Панфиловцев, 26'},
            {'coordinates': [55.710443, 37.446048], 'name': 'Верейская улица, 7'},
            {'coordinates': [55.854587, 37.407780], 'name': 'Героев Панфиловцев, 26'},
            {'coordinates': [55.710443, 37.446048], 'name': 'Верейская улица, 7'},
            {'coordinates': [55.854587, 37.407780], 'name': 'Героев Панфиловцев, 26'}
        ]
    }
];
ymaps.ready(init);


function init() {
    // Создаем карту
    if ("map") {



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
});

  var ssb = {
    aConts  : [],
    mouseY : 0,
    N  : 0,
    asd : 0, /*active scrollbar element*/
    sc : 0,
    sp : 0,
    to : 0,
    // constructor
    scrollbar : function (cont_id) {
      var cont = document.getElementById(cont_id);
      
      // perform initialization
      if (! ssb.init()) return false;
      
      var cont_clone = cont.cloneNode(false);
      cont_clone.style.overflow = "hidden";
      cont.parentNode.appendChild(cont_clone);
      cont_clone.appendChild(cont);
      cont.style.position = 'absolute';
      cont.style.left = cont.style.top = '0px';
      cont.style.width = cont.style.height = '100%';
      
      // adding new container into array
      ssb.aConts[ssb.N++] = cont;
      
       cont.sg = false;
      
      //creating scrollbar child elements
      cont.st = this.create_div('ssb_st', cont, cont_clone);
      cont.sb = this.create_div('ssb_sb', cont, cont_clone);
      cont.su = this.create_div('ssb_up', cont, cont_clone);
      cont.sd = this.create_div('ssb_down', cont, cont_clone);
      
      // on mouse down processing
      cont.sb.onmousedown = function (e) {
        if (! this.cont.sg) {
          if (! e) e = window.event;
          
          ssb.asd = this.cont;
          this.cont.yZ = e.screenY;
          this.cont.sZ = cont.scrollTop;
          this.cont.sg = true;
          
          // new class name
          this.className = 'ssb_sb ssb_sb_down';
        }
        return false;
      }
      // on mouse down on free track area - move our scroll element too
      cont.st.onmousedown = function (e) {
        if (! e) e = window.event;
        ssb.asd = this.cont;
        
        ssb.mouseY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        for (var o = this.cont, y = 0; o != null; o = o.offsetParent) y += o.offsetTop;
        this.cont.scrollTop = (ssb.mouseY - y - (this.cont.ratio * this.cont.offsetHeight / 2) - this.cont.sw) / this.cont.ratio;
        this.cont.sb.onmousedown(e);
      }
      
      // onmousedown events
      cont.su.onmousedown = cont.su.ondblclick = function (e) { ssb.mousedown(this, -1); return false; }
      cont.sd.onmousedown = cont.sd.ondblclick = function (e) { ssb.mousedown(this,  1); return false; }
      
      //onmouseout events
      cont.su.onmouseout = cont.su.onmouseup = ssb.clear;
      cont.sd.onmouseout = cont.sd.onmouseup = ssb.clear;
      
      // on mouse over - apply custom class name: ssb_sb_over
      cont.sb.onmouseover = function (e) {
        if (! this.cont.sg) this.className = 'ssb_sb ssb_sb_over';
        return false;
      }
      
      // on mouse out - revert back our usual class name 'ssb_sb'
      cont.sb.onmouseout  = function (e) {
        if (! this.cont.sg) this.className = 'ssb_sb';
        return false;
      }
      
      // onscroll - change positions of scroll element
      cont.ssb_onscroll = function () {
        this.ratio = (this.offsetHeight - 2 * this.sw) / this.scrollHeight;
        this.sb.style.top = Math.floor(this.sw + this.scrollTop * this.ratio) + 'px';
      }
      
      // scrollbar width
      cont.sw = 1;
      
      // start scrolling
      cont.ssb_onscroll();
      ssb.refresh();
      
      // binding own onscroll event
      cont.onscroll = cont.ssb_onscroll;
      return cont;
    },
    
    // initialization
    init : function () {
      if (window.oper || (! window.addEventListener && ! window.attachEvent)) { return false; }
      
      // temp inner function for event registration
      function addEvent (o, e, f) {
        if (window.addEventListener) { o.addEventListener(e, f, false); ssb.w3c = true; return true; }
        if (window.attachEvent) return o.attachEvent('on' + e, f);
        return false;
      }
      
      // binding events
      addEvent(window.document, 'mousemove', ssb.onmousemove);
      addEvent(window.document, 'mouseup', ssb.onmouseup);
      addEvent(window, 'resize', ssb.refresh);
      return true;
    },
    
    // create and append div finc
    create_div : function(c, cont, cont_clone) {
      var o = document.createElement('div');
      o.cont = cont;
      o.className = c;
      cont_clone.appendChild(o);
      return o;
    },
    // do clear of controls
    clear : function () {
      clearTimeout(ssb.to);
      ssb.sc = 0;
      return false;
    },
    // refresh scrollbar
    refresh : function () {
      for (var i = 0, N = ssb.N; i < N; i++) {
        var o = ssb.aConts[i];
        o.ssb_onscroll();
        o.sb.style.width = o.st.style.width = o.su.style.width = o.su.style.height = o.sd.style.width = o.sd.style.height = o.sw + 'px';
        o.sb.style.height = Math.ceil(Math.max(o.sw * .5, o.ratio * o.offsetHeight) + 1) + 'px';
      }
    },
    // arrow scrolling
    arrow_scroll : function () {
      if (ssb.sc != 0) {
        ssb.asd.scrollTop += 6 * ssb.sc / ssb.asd.ratio;
        ssb.to = setTimeout(ssb.arrow_scroll, ssb.sp);
        ssb.sp = 32;
      }
    },
    
    /* event binded functions : */
    // scroll on mouse down
    mousedown : function (o, s) {
      if (ssb.sc == 0) {
        // new class name
        o.cont.sb.className = 'ssb_sb ssb_sb_down';
        ssb.asd = o.cont;
        ssb.sc = s;
        ssb.sp = 400;
        ssb.arrow_scroll();
      }
    },
    // on mouseMove binded event
    onmousemove : function(e) {
      if (! e) e = window.event;
      // get vertical mouse position
      ssb.mouseY = e.screenY;
      if (ssb.asd.sg) ssb.asd.scrollTop = ssb.asd.sZ + (ssb.mouseY - ssb.asd.yZ) / ssb.asd.ratio;
    },
    // on mouseUp binded event
    onmouseup : function (e) {
      if (! e) e = window.event;
      var tg = (e.target) ? e.target : e.srcElement;
      if (ssb.asd && document.releaseCapture) ssb.asd.releaseCapture();
      
      // new class name
      if (ssb.asd) ssb.asd.sb.className = (tg.className.indexOf('scrollbar') > 0) ? 'ssb_sb ssb_sb_over' : 'ssb_sb';
      document.onselectstart = '';
      ssb.clear();
      // ssb.asd.sg = false;
    }
  }
  
  window.onload = function() {
    ssb.scrollbar('container'); // scrollbar initialization
  }

$(function(){
    $(window).scroll(function() {
        if($(this).scrollTop() >= 103) {
            $('.header').addClass('active');
        }
        else{
            $('.header').removeClass('active');
        }
    });
});
  