(function($) {
  $(document).ready(function() {
    // Home page main slider
    $('.gallery').slick({
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 3500,
      arrows: false
    });

    // Home page result slider
    $('.results').slick({
      adaptiveHeight: true,
      autoplay: true,
      autoplaySpeed: 5000,
      arrows: false,
      fade: true
    });

    // FAQ accordion
    $('.answer').hide();
    $('.answer').first().show();
    $('.question').first().addClass('open');
    $('.question').addClass('close');
    $('.question').on('click', function() {
      if ($(this).hasClass('close')) {
        $('.answer').slideUp(500);
        $('.question').removeClass('close');
        $('.question').removeClass('open');
        $('.question').addClass('close');
        $(this).next('.answer').slideDown(500);
        $(this).removeClass('close');
        $(this).addClass('open');
      } else if ($(this).hasClass('open')) {
        $(this).next('.answer').slideUp(500);
        $(this).removeClass('open');
        $(this).addClass('close');
      }
    });
  });
})(jQuery);