$(document).ready(function() {

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

  //Animate scroll on arrow click
  $("#arrow").on('click', function(event) {
    $('html, body').animate({
      scrollTop: $('#about').offset().top
    }, 800)
  })
})
