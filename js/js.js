
(function ($) {

  $.fn.menumaker = function (options) {

    var cssmenu = $(this), settings = $.extend({
      title: "Menu",
      format: "dropdown",
      sticky: false
    }, options);

    return this.each(function () {
      cssmenu.prepend('<div id="menu-button">' + settings.title + '</div>');
      $(this).find("#menu-button").on('click', function () {
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

      multiTg = function () {
        cssmenu.find(".has-sub-b").prepend('<span class="submenu-button"></span>');
        cssmenu.find('.submenu-button').on('click', function () {
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

      resizeFix = function () {
        if ($(window).width() > 768) {
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

(function ($) {
  $(document).ready(function () {

    $(document).ready(function () {
      $("#cssmenu").menumaker({
        title: "<h1 style='font-size:.25rem;margin:0;color:white;font-weight:bold;'>计算机工程学院</h1>",
        format: "multitoggle"
      });

      // $("#cssmenu").prepend("<div id='menu-line'></div>");

      var foundActive = false, activeElement, linePosition = 0, menuLine = $("#cssmenu #menu-line"), lineWidth, defaultPosition, defaultWidth;

      $("#cssmenu > ul > li").each(function () {
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

      $("#cssmenu > ul > li").hover(function () {
        activeElement = $(this);
        lineWidth = activeElement.width();
        // linePosition = activeElement.position().left;
        menuLine.css("width", lineWidth);
        menuLine.css("left", linePosition);
      },
        function () {
          menuLine.css("left", defaultPosition);
          menuLine.css("width", defaultWidth);
        });

    });


  });
})(jQuery);

// banner swiper start
window.onload = function () {

  var mySwiper = new Swiper('.banner', {
    direction: 'horizontal', // 垂直切换选项
    loop: true, // 循环模式选项
    //鼠标移上去变小手
    // grabCursor : true,
    //切换速度
    speed: 1500,
    autoplay: {
      delay: 3000
    },
    // 如果需要分页器
    // pagination: {
    //   el: '.swiper-pagination',
    // },
    //切换效果
    effect: 'fade',
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
    }, 320: {
      slidesPerView: 1,
      spaceBetween: 10,
    }
  }
});

// teacher swiper End
    function getTop(clsName){ 
            var obj = document.getElementsByClassName(clsName)[0];
            return obj.getBoundingClientRect().top;
        }
        function getDom(clsName){
            var obj=document.getElementsByClassName(clsName)[0];
            return obj;
        }

        
        window.addEventListener('scroll',function(){
            var scrollT=document.documentElement.scrollTop||document.body.scrollTop;

            /*第二页动画的触发*/
            if(getTop('inform-group')<860){
                getDom('inform-group').classList.add('animated');
                getDom('inform-group').classList.add('fadeInDown');
            };
            if(getTop('specialty')<850){
              getDom('subjects').classList.add('animated');
              getDom('subjects').classList.add('fadeInLeft');
          };
          if(getTop('subjects1')<850){
            getDom('subjects1').classList.add('animated');
            getDom('subjects1').classList.add('fadeInRight');
        };
        if(getTop('teacher')<850){
          getDom('case').classList.add('animated');
          getDom('case').classList.add('fadeInDown');
      };
      if(getTop('cooperation')<850){
        getDom('school').classList.add('animated');
        getDom('school').classList.add('fadeInLeftBig');
        getDom('scenery').classList.add('animated');
        getDom('scenery').classList.add('fadeInRightBig');
    };
  })
  //   if(getTop('footer1')<850){
  //     getDom('footer1').classList.add('animated');
  //     getDom('footer1').classList.add('bounceInUp');
  // };
//   if(getTop('footer2')<850){
//     getDom('footer2').classList.add('animated');
//     getDom('footer2').classList.add('pulse');
// };

  
        
        //获取顶部距离
        // function a(as) {
        //  return as.getBoundingClientRect().top;
        //   }
        //   console.log(a(banner))
// ---------------------------------------------index-----------------------------
//vue
//nav
new Vue({
  el: '#cssmenu',
  data: {
    nav1: "经贸首页",
    nav2: "学院首页",
    nav3: "学院概况",
    nav4: "师资队伍",
    nav5: "专业介绍",
    nav6: "教学科研",
    nav7: "党建工作",
    nav8: "学团工作",
    nav9: "就业创业",
    nav10: "校企合作",
    nav11: "课程资源",
    site03: [
      { url: '<a href="./catalog.html">学院介绍</a>' },
      { url: '<a href="./catalog.html">学院领导</a>' },
      { url: '<a href="./catalog.html">机构设置</a>' },
    ],
    site04: [
      { url: '<a href="./catalog.html">教研室</a>' },
      { url: '<a href="./catalog.html">教学团队</a>' }
    ],
    site06: [
      { url: '<a href="./catalog.html">教学成果</a>' },
      { url: '<a href="./catalog.html">科研服务</a>' },
      { url: '<a href="./catalog.html">技能竞赛</a>' },
      { url: '<a href="./catalog.html">竞赛月</a>' },
    ],
    site07: [
      { url: '<a href="./catalog.html">理论学习</a>' },
      { url: '<a href="./catalog.html">党务指导</a>' },
      { url: '<a href="./catalog.html">支部动态</a>' },
    ],
    site08: [
      { url: '<a href="./catalog.html">队伍建设</a>' },
      { url: '<a href="./catalog.html">学风建设</a>' },
      { url: '<a href="./catalog.html">社团活动</a>' },
      { url: '<a href="./catalog.html">学生风采</a>' },
      { url: '<a href="./catalog.html">学生资助</a>' },
    ],
    site09: [
      { url: '<a href="./catalog.html">创业指导</a>' },
      { url: '<a href="./catalog.html">就业指导</a>' },
      { url: '<a href="./catalog.html">招聘信息</a>' },
      { url: '<a href="./catalog.html">优秀毕业生</a>' },
    ],
    site10: [
      { url: '<a href="./catalog.html">企业简介</a>' },
      { url: '<a href="./catalog.html">合作交流</a>' },
    ]
  }
})
//swiper
new Vue({
  el: '#banner',
  data: {
    title1: "<a href='main.html'>大雪就要来了，一个翻天覆地的经贸学院</a>",
    p1: "<a href=./main.html '>大雪就要来了，一个翻天覆地的经贸学院大雪就要来了，一个翻天覆地的经贸学院大雪就要来了，一个翻天覆地的经贸学院大雪就要来了，一个翻天覆地的经贸学院</a>",
    title2: "<a href='main.html'>计算机工程学院</a>",
    p2: "<a href='./main.html'>换届仪式上通报了新一届理事会及常务理事名单，表决通过了新一届会长、副会长、秘书长提名。郑州大学网络中心主任李占波成功当选新一届郑州市计算机学会会长，河南经贸职业学院计</a>",
    title3: "<a href='main.html'>郑州市计算机学会副会长单位</a>",
    p3: "<a href='#'>3月29日下午，郑州市计算机学会换届仪式暨高性能主题论坛在郑州工程技术学院举行。中国计算机学会前理事长清华大学郑纬民教授，中科院计算所国家超算济南中心主任张云泉研究员，郑州市科协副主席马国明、河南计算机学会理事长周清雷，CCF分部主席甘勇，郑州工程技术学院校领导薛培军、校长助理王文武及来自郑州各高校和企业的理事40余人参加了此次换届仪式。换届仪式由郑州市计算机学会常务副秘书长王嫣主持</a>",
    title4: "<a href='main.html'>计算机工程学院</a>",
    p4: "<a href='#'>计算机工程学院计算机工程学院计算机工程学院计算机工程学院计算机工程学院</a>",
  }
})
//news
new Vue({
  el: '#news',
  data: {
    title1: "计算机工程学院“树立远大目标",
    title2: "成功举办“信息安全攻防校际联赛信息安全攻防校际联",
    title3: "党总支预备党员转正大会教学楼4213、4214、",
    title4: "党总支预备党员转正大会教学楼4213、4214、",
    title5: "走向优秀，为经贸助力，为中原添彩走向优秀，为经贸助力，为中原添彩",
    title6: "计算机工程学院2018级校外参观这里",
    p1: "为了帮助大学生找到自己奋斗的目标，以满腔热情投入到学习与工作中，帮助学生更好创业，计算机工程学院于12月13日晚特邀关工委冯连波教授开展“树立远大目标，搏击创新时代”专题讲座。",
    p2: "2018年12月12日下午，“信息安全攻防校际联赛”在我校移动安全实训室拉开战幕",
    p3: "党总支于2018年12月12日在教学楼4213、4214、4214三个教室举行预",
    p4: "这里是对新闻标题的一些概述这里是对新闻标题的一些概述这里是对新闻标题的一些概述这里是对新闻标题的一些概述这里是对新闻标题的一些概述",
    p5: "为提高学生干部在校各方面能力，充分发挥个人在校价值，从而充实个人，为校争光。计算机工程学院特邀关工委冯连波教授于12月11日在4211教室举行“走向优秀，为经贸助力，为中原添彩”报告",
    p6: "为提高18级新生的专业认知度增强专业学习兴趣，明确职业发展方向，按照计算机工程学院的统一部署，12月11日，计",

  }
})

//notice
new Vue({
  el: '#notice',
  data: {
    affiche1: "关于2015届毕业生以及往届毕业生返知关于2015届毕业生以及往届毕业生返知关于2015届毕业生以及往届毕业生返知关于2015届毕业生以及往届毕业生返知关于2015届毕业生以及往届毕业生返知关于2015届毕业生以及往届毕业生返知关于2015届毕业生以及往届毕业生返知",
    tm1: "2018-12-14",
    affiche2: "资助中心致中、高考生的两封信",
    tm2: "2017-06-06",
    affiche3: "立足岗位做贡献，让中原更加出彩",
    tm3: "2018-06-14",
    affiche4: "计算机工程学院党总支预备党员转正大会圆满结束",
    tm4: "2018-06-05",
    affiche5: "河南经贸职业学院当选为郑州市计算机学会副会长单位",
    tm5: "2018-03-29",
    affiche6: "河南经贸职业学院的合作项目被授予第三届省级产学研合作试点项目",
    tm6: "2018-03-14",
  }
})

//active
new Vue({
  el: '#active',
  data: {
    affiche1: "计算机工程学院开展环保快递活动关于2015届毕业生以及往届毕业生返校补考通生以及往届毕业生返校补考通知",
    tm1: "2018-11-13",
    affiche2: "计算机工程学院第一届学代会正式召关于2015届毕业生以及往届毕业生返校补考通生以及往届毕业生返校补考通知关于2015届毕业生以及往届毕业生返校补考通生以及往届毕业生返校补考通知开",
    tm2: "2018-05-11",
    affiche3: "感怀清明，遥寄相思",
    tm3: "2018-04-10",
    affiche4: "计算机工程学院——“紫荆山公益行”",
    tm4: "2018-12-14",
    affiche5: "计算机工程学院——学院学生会招新",
    tm5: "2018-12-16",
    affiche6: "信息管理系艺格工作室举办PS大赛",
    tm6: "2018-12-14",
  }
})

//specialty
new Vue({
  el: '#specialty',
  data: {
    title1: "计算机应用技术（普招）",
    subjects1: "Java 程序设计、Java Web 程序设计、JavaEE 框架技术、MySql 数据库应用、Android 应用开发、HTML5 应用技术、Web 前端交互技术、Python 大数据编程、Hadoop 基础应用、商务能力、新媒体营销、计算机网络技术、Linux 操作系统等。",
    title2: "计算机应用技术（对口）",
    subjects2: "图形图像应用技术、HTML5 应用技术、界面设计、MySQL 数据库技术、PHP 程序设计、PHP 项目开发、Linux 操作系统、云计算应用技术、计算机网络技术、路由交换技术、信息安全技术等。",
    title3: "软件技术（普招）",
    subjects3: "本专业以 PHP 应用开发为主线，培养具有很强实践能力的 PHP 软件开发工程师、前端开发工程师、网页设计师、数据库开发工程师、软件测试工程师等相关技能型专门人才",
   
    title4: "数字媒体应用技术（普招）",
    subjects4: "设计素描、设计色彩、数字摄影与后期、图形图像软件应用、三维角色模型、三维角色动画、 数字贴图艺术、C#程序基础、Unity 引擎设计、Unity 程序设计、Unity VR 应用开发、游戏界面设计、游戏特效。",
    title5: "信息安全与管理（普招）",
    subjects5: "思科网络技术、信息安全技术、网络安全产品调试与部署、移动安全接入系统应用、网络安全攻防技术、Linux 系统管理、HTML5 应用技术、MySQL 数据库技术、Java 程序设计、Python 程序设计。",
    title6: "动漫制作技术（普招）",
    subjects6: "设计素描、设计色彩、设计思维训练、速写与艺术解剖学、图形图像软件应用、数字摄影与后期、动画剧本与分镜头设计、动画角色造型设计、原动画设计、flash 动画设计与制作、三维动画建模、三维动画特效、影视动画后期编辑与合成、影视动画项目实训、次时代游戏角色。",
    title7: "动漫制作技术（软件学院）",
    subjects7: "设计素描、设计色彩、设计思维训练、速写与艺术解剖学、图形图像软件应用、数字摄影与    后期、动画剧本与分镜头设计、影视动画后期编辑与合成、影视动画项目实训、C4D 动画设计、栏目包装。",
    title8: "计算机应用技术（软件学院）",
    subjects8: "计算机导论、图形图像软件应用、网页设计与制作(CSS+DIV)、Web 前端交互技术、HTML5 应用技术、前端项目开发、界面设计、平面设计项目实训、新媒体营销等。",
  }
})

//school
new Vue({
  el: '#school',
  data: {
    company1: "河南金马工贸有限公司",
    tm1: "2018年12月12日",
    src1: "郑州市南四环金马钢材市场",
    company2: "河南云和数据信息技术有限公司",
    tm2: "2015年03月18日",
    src2: "郑州市高新区冬青街26号河南省电子商务产业园3号楼一层",
    company3: "河南杨金科技外包产业园建设投资有限公司",
    tm3: "2015年03月18日",
    src3: "郑州市金水科教园区（龙湖北岸）杨金路139号",
    company4: "郑州软通合力计算机技术有限公司",
    tm4: "2013年05月10日",
    src4: "郑州市金水区东风路28号院21号楼17层1717号",
  }
})
//footer nav
new Vue({
  el: '#footernav',
  data: {
    footernav1: "经贸首页",
    footernav2: "学院首页",
    footernav10: "专业介绍",
    footernav11: "精品课程",
    footernav3: [
      { title: '<a href="./catalog.html">学院概况</a>' },
      { title: '<a href="./catalog.html">学院介绍</a>' },
      { title: '<a href="./catalog.html">学院领导</a>' },
      { title: '<a href="./catalog.html">机构设置</a>' }

    ],
    footernav4: [
      { title: '<a href="./catalog.html">师资队伍</a>' },
      { title: '<a href="./catalog.html">教研室</a>' },
      { title: '<a href="./catalog.html">教学团队</a>' }
    ],
    footernav5: [
      { title: '<a href="./catalog.html">教学科研</a>' },
      { title: '<a href="./catalog.html">教学成果</a>' },
      { title: '<a href="./catalog.html">科研服务</a>' },
      { title: '<a href="./catalog.html">技能竞赛</a>' },
      { title: '<a href="./catalog.html">竞赛月</a>' },

    ],
    footernav6: [
      { title: '<a href="./catalog.html">党建工作</a>' },
      { title: '<a href="./catalog.html">理论学习</a>' },
      { title: '<a href="./catalog.html">党务指导</a>' },
      { title: '<a href="./catalog.html">支部动态</a>' },

    ],
    footernav7: [
      { title: '<a href="./catalog.html">学团工作</a>' },
      { title: '<a href="./catalog.html">队伍建设</a>' },
      { title: '<a href="./catalog.html">学风建设</a>' },
      { title: '<a href="./catalog.html">社团活动</a>' },
      { title: '<a href="./catalog.html">学生风采</a>' },
      { title: '<a href="./catalog.html">学生资助</a>' },
    ],
    footernav8: [
      { title: '<a href="./catalog.html">就业创业</a>' },
      { title: '<a href="./catalog.html">创业指导</a>' },
      { title: '<a href="./catalog.html">就业指导</a>' },
      { title: '<a href="./catalog.html">招聘信息</a>' },
      { title: '<a href="./catalog.html">优秀毕业生</a>' },

    ],
    footernav9: [
      { title: '<a href="./catalog.html">校企合作</a>' },
      { title: '<a href="./catalog.html">企业简介</a>' },
      { title: '<a href="./catalog.html">合作交流</a>' }
    ],
  }
})

// ---------------------------------------------main-----------------------------
new Vue({
  el:'#catalog',
  data:{
    left:[
      {url:'<a href="">学团工作</a>'},
      {url:'<a href="">队伍建设</a>'},
      {url:'<a href="">学风建设</a>'},
      {url:'<a href="">社团活动</a>'},
      {url:'<a href="">学生风采</a>'},
      {url:'<a href="">学生资助</a>'},
    ],
    right:[
      {working:'<a href="./main.html ">《新时期、同目标、共命运》深入学习十九大精神”主题班会</a>'},
      {working:'<a href="./main.html ">“给老师的一封信”主题班会</a>'},
      {working:'<a href="./main.html ">计算机工程学院“合奏中国梦，喜迎十九大”主题班会</a>'},
      {working:'<a href="./main.html ">计算机工程学院“合奏中国梦，喜迎十九大”主题班会</a>'},
      {working:'<a href="./main.html ">计算机工程学院2017级迎新工作顺利展开</a>'},
      {working:'<a href="./main.html ">资助中心致中、高考生的两封信</a>'},
      {working:'<a href="./main.html ">缅怀革命先烈，学习人民英雄</a>'},
      {working:'<a href="./main.html ">河南经贸Linux社团在专业技能展示汇报中荣获二等奖</a>'},
      {working:'<a href="./main.html ">计算机工程学院——“紫荆山公益行”</a>'},
      {working:'<a href="./main.html ">计算机工程学院学生干部培训大会</a>'},
      {working:'<a href="./main.html ">计算机工程学院——学院学生会招新</a>'},
      {working:'<a href="./main.html ">计算机工程学院2015-2016学年第一学期期初专业座谈会</a>'},
      {working:'<a href="./main.html ">计算机工程学院举行系部学生会招新动员大会</a>'},
      {working:'<a href="./main.html ">第二十五届运动会通讯稿</a>'},
      {working:'<a href="./main.html ">勇于挑战自我 打造精英团队</a>'},
      {working:'<a href="./main.html ">关于校园文化讲座：第二讲 “沟通与团队”</a>'},
      {working:'<a href="./main.html ">举办“以班级文化建设来提升学生干部文化素养”讲座</a>'},
      {working:'<a href="./main.html ">信息管理系学团工作计划</a>'},
      {working:'<a href="./main.html ">关于召开河南经贸职业学院信息管理系2015年度学生代表大会与学生会干部换届选举工作方案</a>'},
      {working:'<a href="./main.html ">河 南 经 贸 职 业 学 院　2015年上半年校历</a>'},
      {working:'<a href="./main.html ">2014—2015学年第一学期辅导员工作会议</a>'},
      {working:'<a href="./main.html ">2013数字媒体技术专业期末集中实训成效显著</a>'},
      {working:'<a href="./main.html ">河南新干线计算机技术有限公司 招聘</a>'},
      {working:'<a href="./main.html ">关于2015届毕业生返校补考通知</a>'},
      {working:'<a href="./main.html ">关于2011级学生第五学期校内外实训方式选择的通知</a>'},
      {working:'<a href="./main.html ">2013年上半年教学校历</a>'},
      {working:'<a href="./main.html ">健康的心理，为你添上飞翔的翅膀</a>'},



    ],


  }
})


// ---------------------------------------------main-----------------------------
new Vue({
  el:'#main',
  data:{
    title:"河南省华安保全智能有限公司专场招聘会",
    contenttop:"12月20日下午四点五十，计算机工程学院在5301教室组织召开“河南省华安保全智能有限公司专场招聘会”，为同学们进行专场招聘以及就业指导工作。河南华安保全智能发展有限公司华安保全数据服务中心郭倩经理、人力资源部马晓莎、数据服务中心主管李唐代表参会，计算机工程学院由李金萌老师代表参会。河南华安保全智能发展有限公司（以下简称“华安保全”）是河南省最大、实力最强、最专业的保全公司。 是中国安防协会会员单位、河南省安防协会会员单位、郑州市安防协会副理事长单位。2010年被评为“中国安防报警服务业三十强”和 “平安城市建设推荐优秀安防工程企业”。 是郑州市唯一一家承担全市金融网点与110联网的企业。涉及金融、机关、学校、医院、厂矿、商业店铺等各行各业。 与海康威视合作强强联手成功上市，打造行业民族品牌，做中国最专业的保全服务公司。招聘会现场，河南省华安保全智能发展有限公司代表们简单向大家介绍了公司的发展概况，企业文化，工作岗位以及薪酬福利待遇等。然后，由各个学生提出自己的疑惑或者感兴趣的话题，并由公司人力资源部马晓莎作出仔细又专业的解答，增进了大家对该公司的了解。此次招聘会让同学们了解到了当前就业形势的严峻，更好地拓宽了同学们的就业渠道，也让他们获得了一定的面试技巧，受到了同学们的好评。相信大家今后会把就业看成是展示自己的一个平台，充分发挥自身的才干，让梦腾飞，为社会贡献。",
    contentbottom:"12月20日下午四点五十，计算机工程学院在5301教室组织召开“河南省华安保全智能有限公司专场招聘会”，为同学们进行专场招聘以及就业指导工作。河南华安保全智能发展有限公司华安保全数据服务中心郭倩经理、人力资源部马晓莎、数据服务中心主管李唐代表参会，计算机工程学院由李金萌老师代表参会。河南华安保全智能发展有限公司（以下简称“华安保全”）是河南省最大、实力最强、最专业的保全公司。",
  }
})

