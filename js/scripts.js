$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".fade-btn").click(function () {
    $(".fade-in").fadeToggle();
    $(".fade-out").fadeToggle();
  });

  $('.slide-up-btn').click(function(){
    $(".slide-up").slideUp("slow");
  });

  $('.slide-down-btn').click(function(){
    $(".slide-down").slideDown("fast", function(){
      $(".slide-down").css({"background-color" : "skyblue"});
    });
  });

  $('.slide-toggle-btn').click(function(){
    $(".slide-toggle").slideToggle("fast");
  });
});
