
$(function () {
  $(window).on("load resize", function () {
    $(".fill-screen").css("height", window.innerHeight);
    //scales the video to take the whole window
    $('.gameVideo').css('width', window.innerWidth);
    $('.gameVideo').css('height', window.innerHeight - 50);
    $('#top').css('height', window.innerHeight - 50);
    if ($('#homeTab').hasClass("active")){
      //unmute the video
      console.log("unmute video");
    }else{
      //mute the video
      console.log("mute video");
    }
    // autoplays the video on load.
    var video = $("#frontVideo")[0];
    console.log("starting the video")
    video.play();
  });
  // add Bootstrap's scrollspy
  $('body').scrollspy({
    target: '.navbar',
    offset: 160
  });

  // for smooth scrolling
  $('nav a, #downBtn').bind('click', function(){
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 60
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
  })

  // initialse the wow script
  new WOW().init();
});
