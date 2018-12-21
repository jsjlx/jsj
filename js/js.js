
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
      title: "<h1 style='font-size:.25rem;margin:0;color:white;font-weight:bold;'>计算机工程学院</h1>",
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
  spaceBetween: 25,
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

  //vue
//nav
  new Vue({
    el: '#cssmenu',
    data:{
      nav1:"经贸首页",
      nav2:"学院首页",
      nav3:"学院概况",
      nav4:"师资队伍",
      nav5:"专业介绍",
      nav6:"教学科研",
      nav7:"党建工作",
      nav8:"学团工作",
      nav9:"就业创业",
      nav10:"校企合作",
      nav11:"课程资源",
      site03:[
        {url:'<a href="">学院介绍</a>'},
        {url:'<a href="">学院领导</a>'},
        {url:'<a href="">机构设置</a>'},
      ],
      site04:[
        {url:'<a href="#">教研室</a>'},
        {url:'<a href="#">教学团队</a>'}
      ],
      site06:[
        {url:'<a href="#">教学成果</a>'},
        {url:'<a href="#">科研服务</a>'},
        {url:'<a href="#">技能竞赛</a>'},
        {url:'<a href="#">竞赛月</a>'},
      ],
      site07:[
        {url:'<a href="#">理论学习</a>'},
        {url:'<a href="#">党务指导</a>'},
        {url:'<a href="#">支部动态</a>'},
      ],
      site08:[
        {url:'<a href="#">队伍建设</a>'},
        {url:'<a href="#">学风建设</a>'},
        {url:'<a href="#">社团活动</a>'},
        {url:'<a href="#">学生风采</a>'},
        {url:'<a href="#">学生资助</a>'},
      ],
      site09:[
        {url:'<a href="#">创业指导</a>'},
        {url:'<a href="#">就业指导</a>'},
        {url:'<a href="#">招聘信息</a>'},
        {url:'<a href="#">优秀毕业生</a>'},
      ],
    }
  })
  //swiper
  new Vue({
    el:'#banner',
    data:{
      title1:"<a href='main.html'>大雪就要来了，一个翻天覆地的经贸学院</a>",
      p1:"<a href=#'>大雪就要来了，一个翻天覆地的经贸学院大雪就要来了，一个翻天覆地的经贸学院大雪就要来了，一个翻天覆地的经贸学院大雪就要来了，一个翻天覆地的经贸学院</a>",
      title2:"<a href='main.html'>计算机工程学院</a>",
      p2:"<a href='#'>换届仪式上通报了新一届理事会及常务理事名单，表决通过了新一届会长、副会长、秘书长提名。郑州大学网络中心主任李占波成功当选新一届郑州市计算机学会会长，河南经贸职业学院计</a>",
      title3:"<a href='main.html'>郑州市计算机学会副会长单位</a>",
      p3:"<a href='#'>3月29日下午，郑州市计算机学会换届仪式暨高性能主题论坛在郑州工程技术学院举行。中国计算机学会前理事长清华大学郑纬民教授，中科院计算所国家超算济南中心主任张云泉研究员，郑州市科协副主席马国明、河南计算机学会理事长周清雷，CCF分部主席甘勇，郑州工程技术学院校领导薛培军、校长助理王文武及来自郑州各高校和企业的理事40余人参加了此次换届仪式。换届仪式由郑州市计算机学会常务副秘书长王嫣主持</a>",
      title4:"<a href='main.html'>计算机工程学院</a>",
      p4:"<a href='#'>计算机工程学院计算机工程学院计算机工程学院计算机工程学院计算机工程学院</a>",
    }
  })
  //news
  new Vue({
    el:'#news',
    data:{
      title1:"计算机工程学院“树立远大目标，搏击创新时代”专题讲座",
      title2:"成功举办“信息安全攻防校际联赛信息安全攻防校际联",
      title3:"党总支预备党员转正大会教学楼4213、4214、",
      title4:"党总支预备党员转正大会教学楼4213、4214、",
      title5:"走向优秀，为经贸助力，为中原添彩走向优秀，为经贸助力，为中原添彩",
      title6:"计算机工程学院2018级校外参观这里",
      p1:"为了帮助大学生找到自己奋斗的目标，以满腔热情投入到学习与工作中，帮助学生更好创业，计算机工程学院于12月13日晚特邀关工委冯连波教授开展“树立远大目标，搏击创新时代”专题讲座。",
      p2:"2018年12月12日下午，“信息安全攻防校际联赛”在我校移动安全实训室拉开战幕",
      p3:"党总支于2018年12月12日在教学楼4213、4214、4214三个教室举行预",
      p4:"这里是对新闻标题的一些概述这里是对新闻标题的一些概述这里是对新闻标题的一些概述这里是对新闻标题的一些概述这里是对新闻标题的一些概述",
      p5:"为提高学生干部在校各方面能力，充分发挥个人在校价值，从而充实个人，为校争光。计算机工程学院特邀关工委冯连波教授于12月11日在4211教室举行“走向优秀，为经贸助力，为中原添彩”报告",
      p6:"为提高18级新生的专业认知度增强专业学习兴趣，明确职业发展方向，按照计算机工程学院的统一部署，12月11日，计",

    }
  })
  //notice
  new Vue({
    el:'#notice',
    data:{
      affiche1:"关于2015届毕业生以及往届毕业生返校补考通生以及往届毕业生返校补考通知",
      tm1:"2015-12-14",
      affiche2:"关于2015届毕业生以及往届毕业生返校补考通生以及往届毕业生返校补考通知",
      tm2:"2015-12-14",
      affiche3:"关于2015届毕业生以及往届毕业生返校补考通生以及往届毕业生返校补考通知",
      tm3:"2015-12-14",
      affiche4:"关于2015届毕业生以及往届毕业生返校补考通生以及往届毕业生返校补考通知",
      tm4:"2015-12-14",
      affiche5:"关于2015届毕业生以及往届毕业生返校补考通生以及往届毕业生返校补考通知",
      tm5:"2015-12-14",
      affiche6:"关于2015届毕业生以及往届毕业生返校补考通生以及往届毕业生返校补考通知",
      tm6:"2015-12-14",
    }
  })

  //active
  new Vue({
    el:'#active',
    data:{
      affiche1:"关于2015届毕业生以及往届毕业生返校补考通生以及往届毕业生返校补考通知",
      tm1:"2015-12-14",
      affiche2:"关于2015届毕业生以及往届毕业生返校补考通生以及往届毕业生返校补考通知",
      tm2:"2015-12-14",
      affiche3:"关于2015届毕业生以及往届毕业生返校补考通生以及往届毕业生返校补考通知",
      tm3:"2015-12-14",
      affiche4:"关于2015届毕业生以及往届毕业生返校补考通生以及往届毕业生返校补考通知",
      tm4:"2015-12-14",
      affiche5:"关于2015届毕业生以及往届毕业生返校补考通生以及往届毕业生返校补考通知",
      tm5:"2015-12-14",
      affiche6:"关于2015届毕业生以及往届毕业生返校补考通生以及往届毕业生返校补考通知",
      tm6:"2015-12-14",
    }
  })



//school
  new Vue({
    el:'#school',
    data:{
      company1:"河南金马工贸有限公司",
      tm1:"2018年12月12日",
      src1:"郑州市南四环金马钢材市场",
      company2:"河南金马工贸有限公司",
      tm2:"2018年12月12日",
      src2:"郑州市南四环金马钢材市场",
      company3:"河南金马工贸有限公司",
      tm3:"3018年13月13日",
      src3:"郑州市南四环金马钢材市场",
      company4:"河南金马工贸有限公司",
      tm4:"4018年14月14日",
      src4:"郑州市南四环金马钢材市场",
    }
  })
//footer nav
  new Vue({
    el:'#footernav',
    data:{
      footernav1:"经贸首页",
      footernav2:"学院首页",
      footernav10:"专业介绍",
      footernav11:"精品课程",
      footernav3:[
        {title:'<a href="">学院概况</a>'},
        {title:'<a href="">学院介绍</a>'},
        {title:'<a href="">学院领导</a>'},
        {title:'<a href="">机构设置</a>'}

      ],
      footernav4:[
        {title:'<a href="">师资队伍</a>'},
        {title:'<a href="">教研室</a>'},
        {title:'<a href="">教学团队</a>'}
      ],
      footernav5:[
        {title:'<a href="">教学科研</a>'},
        {title:'<a href="">教学成果</a>'},
        {title:'<a href="">科研服务</a>'},
        {title:'<a href="">技能竞赛</a>'},
        {title:'<a href="">竞赛月</a>'},

      ],
      footernav6:[
        {title:'<a href="">党建工作</a>'},
        {title:'<a href="">理论学习</a>'},
        {title:'<a href="">党务指导</a>'},
        {title:'<a href="">支部动态</a>'},

      ],
      footernav7:[
        {title:'<a href="">学团工作</a>'},
        {title:'<a href="">队伍建设</a>'},
        {title:'<a href="">学风建设</a>'},
        {title:'<a href="">社团活动</a>'},
        {title:'<a href="">学生风采</a>'},
        {title:'<a href="">学生资助</a>'},
      ],
      footernav8:[
        {title:'<a href="">就业创业</a>'},
        {title:'<a href="">创业指导</a>'},
        {title:'<a href="">就业指导</a>'},
        {title:'<a href="">招聘信息</a>'},
        {title:'<a href="">优秀毕业生</a>'},

      ],
      footernav9:[
        {title:'<a href="">校企合作</a>'},
        {title:'<a href="">企业简介</a>'},
        {title:'<a href="">合作交流</a>'}
      ],
    }
  })

