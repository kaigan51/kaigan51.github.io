




$(function () {
  $("[id$=_button]").on('touchstart', function () {
    return $(".text").hide(), $("#" + $(this).attr("id").replace("_button", "_text")).fadeIn(100)
  })
  $("#hamburger").load("hamburger.html");

})

$(function () {

  /*
  $('.btn_top')
    .on('touchstart', function () {
      $(this).css('background-position', '0 -182px');
    }).on('touchend', function () {
      $(this).css('background-position', '');
    });
*/



  $(".trigger").on('touchend', function () {
    $(".menu").toggleClass("active");
    $("#contents").toggleClass("active");
    if ($('.menu').is('.active')) {
      setTimeout(function () {
        $(".btn_top").addClass("active");
      }, 100);

    } else {
      $(".btn_top").removeClass("active");
    }


  });

  //ドロップダウンリスト
  var show = 0;
  $('.profil').on('touchstart', function () {
    if (show == 0) {
      $('.container_menu ul').animate({
        'opacity': 0.6
      }, 800);
      $('.container_menu ul').animate({
        'margin-top': '25px',
        'margin-bottom': '200%',
      }, {
          duration: 900,
          queue: false
        });
      show = 1;

      $('.container_menu ul').css({
        'pointer-events': 'auto'
      });
    }
    else {
      $('.container_menu ul').animate({
        'opacity': 0
      }, 700);
      $('.container_menu ul').animate({
        'margin-bottom': '-120%'
      }, {
          duration: 800,
          queue: false
        });
      show = 0;

      $('.container_menu ul').css({
        'pointer-events': 'none'
      });
    }
  });

  var ua = navigator.userAgent;
  if (ua.indexOf('Android') > 0) {
    $(".container_menu,.section").css({
      "transform": "translateZ(0)",
      "-webkit-transform": "translateZ(0)",
    });


    $("#icon_btn").css({
      "transform": "translateZ(0 scale(1.3)",
      "-webkit-transform": "translateZ(0) scale(1.3)",
    });

  }


})













