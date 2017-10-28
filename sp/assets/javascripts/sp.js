




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


})

$(document).ready(function () {
  //文字曲げる
  $(".top_logo.top").arctext({ radius: 400, dir: 1 });
  $(".top_logo.down").arctext({ radius: 400, dir: -1 });
});













