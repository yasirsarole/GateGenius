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
    $('.question').addClass('close');
    $('.question').first().addClass('open');
    $('.question').first().removeClass('close');
    $('.question').on('click', function(e) {
      e.preventDefault();
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

    // JS for footer
    $('.footer-menus .menu-item').each(function() {
      if ($(this).children('.sub-menu').length) {
        $(this).addClass('hasChild');
      }
    });
    $('.hasChild').addClass('close');
    $('.hasChild').on('click', function(e) {
      e.preventDefault();
      if ($(this).hasClass('close')) {
        // $('.hasChild').children('.sub-menu').slideUp(300);
        // $('.hasChild').removeClass('close');
        // $('.hasChild').removeClass('open');
        // $('.hasChild').addClass('close');
        $(this).children('.sub-menu').slideDown(300);
        $(this).removeClass('close');
        $(this).addClass('open');
      } else if ($(this).hasClass('open')) {
        $(this).children('.sub-menu').slideUp(300);
        $(this).removeClass('open');
        $(this).addClass('close');
      }
    });

    // Login Page Js
    $('.page-template-login .um input[type=submit].um-button').val('Sign In');
    $("<span>Login</span>").insertBefore(".page-template-login div.um-form");
    $('.page-template-login div.um-form').prev('span').addClass('login-heading');
    $('.page-template-login .main-content .um-logout').next('.login-heading').hide();

    // General Instructions page JS
    $('.ready-to-begin').attr('disabled','disabled');

    $('.ready-to-begin').click(function() {
      if ($('.ready-to-begin').attr('disabled') == "disabled") {
        return false;
      }
      else {
          $('.ready-to-begin').trigger('click');
      }
    });
        
    $('.previousbutton input[type="checkbox"]').on('click', function() {
      if ($('.previousbutton input[type="checkbox"]:checked').length) {
        $('.ready-to-begin').removeAttr('disabled');
        $('.ready-to-begin').css('cssText','cursor:pointer;');
      } else {
        $('.ready-to-begin').attr('disabled','disabled');
        $('.ready-to-begin').css('cssText','cursor:not-allowed;');
      }
    });

    // Hamburger Js
    $('.nav-menu .hamburger').on('click', function() {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).addClass('inactive');
      } else {
        $(this).removeClass('inactive');
        $(this).addClass('active');
      }
    });
  });
  // Ready function end

  // $(window).on('load resize', function() {
  //   var mainHeight = $('main').outerHeight();
  //   var actualHeight = $(window).height() - $('footer').outerHeight() - $('header').outerHeight();
  //   console.log(mainHeight);
  //   console.log(actualHeight);
  //   if (mainHeight < actualHeight) {
  //     $('main').height(actualHeight)
  //   } else {
  //     $('main').height('auto');
  //   }
  // });
  // Load resize end
})(jQuery);