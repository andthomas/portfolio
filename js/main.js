$(document).ready(function() {

  $(window).load(function() {
  // Animate loader off screen
  $(".se-pre-con").fadeOut("slow");;
  });

  $(".container").animate({opacity: '1'}, 'slow');

  //Animate arrow
  $('#arrow').on('mouseenter', function(){
    $("#arrow").animate({opacity: '0.3'}, 'medium');
  })
  $('#arrow').on('mouseleave', function(){
    $("#arrow").animate({opacity: '1'}, 'medium');
  })

  //Animate menu
  $('.nav').on('mouseenter', function(){
    $(this).animate({opacity: '0.3'}, 'fast');
  })
  $('.nav').on('mouseleave', function(){
    $(this).animate({opacity: '1'}, 'fast');
  })

  $('.button').on('mouseenter', function(){
    $(this).animate({opacity: '0.3'}, 'fast');
  })
  $('.button').on('mouseleave', function(){
    $(this).animate({opacity: '1'}, 'fast');
  })

  //Animate scroll on arrow click
  $("#arrow").on('click', function() {
    $('html, body').animate({
      scrollTop: $('#skills').offset().top
    }, 800)
  })
  $("#arrow2").on('click', function() {
    $('html, body').animate({
      scrollTop: $('#projects').offset().top
    }, 800)
  })
  $("#skillsLink").on('click', function() {
    $('html, body').animate({
      scrollTop: $('#skills').offset().top
    }, 800)
  })
  $("#projectsLink").on('click', function() {
    $('html, body').animate({
      scrollTop: $('#projects').offset().top
    }, 800)
  })
  $("#contactLink").on('click', function() {
    $('html, body').animate({
      scrollTop: $('#contact').offset().top
    }, 800)
  })

});
