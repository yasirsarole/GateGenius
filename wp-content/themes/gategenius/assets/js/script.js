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
    $('.not-home .hamburger').on('click', function() {
      if ($(this).hasClass('active')) {
        $(this).removeClass('active');
        $(this).addClass('inactive');
        $('.not-home .nav-menu').show();
      } else {
        $(this).removeClass('inactive');
        $(this).addClass('active');
        $('.not-home .nav-menu').hide();
      }
    });
    $('#menu-hamburger-menu .menu-item-object-custom').children('a').each(function() {
      if ($(this).next('.sub-menu').length) {
        $(this).addClass('acc-inactive');
      }
    });
    $('#menu-hamburger-menu .menu-item-object-custom').children('a').on('click', function(e) {
      if ($(this).next('.sub-menu').length) {
        e.preventDefault();
      }
      if ($(this).hasClass('acc-inactive')) {
        $('#menu-hamburger-menu .menu-item-object-custom .sub-menu').parent().children('a').removeClass('acc-active');
        $('#menu-hamburger-menu .menu-item-object-custom .sub-menu').parent().children('a').addClass('acc-inactive');
        $('#menu-hamburger-menu .menu-item-object-custom .sub-menu').parent().children('a').next('.sub-menu').slideUp();
        $(this).next('.sub-menu').slideDown();
        $(this).removeClass('acc-inactive');
        $(this).addClass('acc-active');
      } else if ($(this).hasClass('acc-active')) {
        $(this).next('.sub-menu').slideUp();
        $(this).removeClass('acc-active');
        $(this).addClass('acc-inactive');
      }
    });

    $('#menu-hamburger-menu a').each(function() {
      $(this).removeClass('active-page')
      if (window.location.href === $(this).attr('href')) {
        $(this).addClass('active-page');
      };
    });
  });
  // Ready function end

  $(window).on('load', function() {
    // JS for displaying time on exam page
    var actualTime = $('.actual-left').text();
    var seconds = 60;
    var currentLeft = actualTime + ' : ' + seconds;
    $('.actual-left').text(currentLeft);

    function decreaseTime() {
      if ( seconds == 00 ) {
        seconds = 60;
        actualTime = actualTime - 1;

        if (actualTime < 10) {
          actualTime = '0' + actualTime;
        }              
      }
      seconds = seconds - 1;

      if (seconds < 10) {
        seconds = '0' + seconds;
      }      
    }

    var interval = setInterval(function() {
      decreaseTime();
      $('.actual-left').text(actualTime + ' : ' + seconds);
      if (actualTime == 00) {
        clearInterval(interval);
        $('.actual-left').text('00' + ' : ' + '00');
      }
    },1000);
  });
})(jQuery);