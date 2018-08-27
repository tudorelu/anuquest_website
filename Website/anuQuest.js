
$(function () {
  $(window).on("load resize", function () {
    $(".fill-screen").css("height", window.innerHeight);
    // autoplays the video on load.
    var video = $("#frontVideo")[0];
    video.play();
    debugger;
    // For front background
    // the video does not work for mobiles and will only show the image
    // cannot use youtube links due to youtube T&Cs
    // $(".frontBackground").background({
    //   source: {
    //     poster: "../../images/lake.jpg",
    //     // mp4: "../../images/bikes.mp4"
    //     video: "https://www.youtube.com/embed/TBa4PoXqlPo"
    //     // ,
    //     // webm: "http://example.com/video.webm",
    //     // mp4: "http://example.com/video.mp4",
    //     // ogg: "http://example.com/video.ogv"
    //   }
    // });
  });
  // add Bootstrap's scrollspy
  $('body').scrollspy({
    target: '.navbar',
    offset: 160
  });
});
