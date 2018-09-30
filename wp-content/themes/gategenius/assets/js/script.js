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
  });
})(jQuery);