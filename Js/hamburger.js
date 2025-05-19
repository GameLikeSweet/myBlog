$(function() {
  $('#hamburger').on('click', function () {
    $(this).toggleClass('open');
    $('aside').toggleClass('open');
  });
});
