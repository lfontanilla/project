$(function() {
  $('.thumbnail').hover(function() {
    $(this).find('.hover-widget').fadeIn();
  }, function() {
    $(this).find('.hover-widget').fadeOut();
  });
});