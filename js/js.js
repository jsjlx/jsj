
(function($) {

    $.fn.menumaker = function(options) {
        
        var cssmenu = $(this), settings = $.extend({
          title: "Menu",
          format: "dropdown",
          sticky: false
        }, options);
  
        return this.each(function() {
          cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
          $(this).find("#menu-button").on('click', function(){
            $(this).toggleClass('menu-opened');
            var mainmenu = $(this).next('ul');
            if (mainmenu.hasClass('open')) { 
              mainmenu.hide().removeClass('open');
            }
            else {
              mainmenu.show().addClass('open');
              if (settings.format === "dropdown") {
                mainmenu.find('ul').show();
              }
            }
          });
  
          cssmenu.find('li ul').parent().addClass('has-sub');
  
          multiTg = function() {
            cssmenu.find(".has-sub-b").prepend('<span class="submenu-button"></span>');
            cssmenu.find('.submenu-button').on('click', function() {
              $(this).toggleClass('submenu-opened');
              if ($(this).siblings('ul').hasClass('open')) {
                $(this).siblings('ul').removeClass('open').hide();
              }
              else {
                $(this).siblings('ul').addClass('open').show();
              }
            });
          };
  
          if (settings.format === 'multitoggle') multiTg();
          else cssmenu.addClass('dropdown');
  
          if (settings.sticky === true) cssmenu.css('position', 'fixed');
  
          resizeFix = function() {
            if ($( window ).width() > 768) {
              cssmenu.find('ul').show();
            }
  
            if ($(window).width() <= 768) {
              cssmenu.find('ul').hide().removeClass('open');
            }
          };
          resizeFix();
          return $(window).on('resize', resizeFix);
  
        });
    };
  })(jQuery);
  
  (function($){
  $(document).ready(function(){
  
  $(document).ready(function() {
    $("#cssmenu").menumaker({
      title: "<h1 style='font-size:.20rem;margin:0;color:white;'>计算机工程学院</h1>",
      format: "multitoggle"
    });       
  
    // $("#cssmenu").prepend("<div id='menu-line'></div>");
  
  var foundActive = false, activeElement, linePosition = 0, menuLine = $("#cssmenu #menu-line"), lineWidth, defaultPosition, defaultWidth;
  
  $("#cssmenu > ul > li").each(function() {
    if ($(this).hasClass('active')) {
      activeElement = $(this);
      foundActive = true;
    }
  });
  
  if (foundActive === false) {
    activeElement = $("#cssmenu > ul > li").first();
  }
  
  defaultWidth = lineWidth = activeElement.width();
  
  defaultPosition = linePosition = activeElement.position().left;
  
  menuLine.css("width", lineWidth);
  menuLine.css("left", linePosition);
  
  $("#cssmenu > ul > li").hover(function() {
    activeElement = $(this);
    lineWidth = activeElement.width();
    // linePosition = activeElement.position().left;
    menuLine.css("width", lineWidth);
    menuLine.css("left", linePosition);
  }, 
  function() {
    menuLine.css("left", defaultPosition);
    menuLine.css("width", defaultWidth);
  });
  
  });
  
  
  });
  })(jQuery);

// banner swiper start
window.onload = function() {
   
    var mySwiper = new Swiper ('.banner', {
      direction: 'horizontal', // 垂直切换选项
      loop: true, // 循环模式选项
      //鼠标移上去变小手
      // grabCursor : true,
      //切换速度
      speed: 1500,
      autoplay: {
        delay:3000
      },
      // 如果需要分页器
      // pagination: {
      //   el: '.swiper-pagination',
      // },
      //切换效果
      effect : 'fade',
      fadeEffect: {
        crossFade: true,
      },
      
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      
      // 如果需要滚动条
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      // },
      //强制加载所有图片
      // preloadImages:false,
    })        
}
//banner swiper End


// teacher swiper
var swiper = new Swiper('.case', {
  slidesPerView: 4,
  spaceBetween: 50,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});

// teacher swiper End

  




