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
    $('.footer-menus .menu-item-has-children').addClass('close');
    $('.footer-menus .menu-item-has-children').children('a').on('click', function(e) {
      e.preventDefault();
      if ($(this).parent().hasClass('close')) {
        // $('.hasChild').children('.sub-menu').slideUp(300);
        // $('.hasChild').removeClass('close');
        // $('.hasChild').removeClass('open');
        // $('.hasChild').addClass('close');
        $(this).parent().children('.sub-menu').slideDown(300);
        $(this).parent().removeClass('close');
        $(this).parent().addClass('open');
      } else if ($(this).parent().hasClass('open')) {
        $(this).parent().children('.sub-menu').slideUp(300);
        $(this).parent().removeClass('open');
        $(this).parent().addClass('close');
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
        $('.not-home .nav-menu').slideDown();
      } else {
        $(this).removeClass('inactive');
        $(this).addClass('active');
        $('.not-home .nav-menu').slideUp();
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

    // Js for exam page Keyboard
    if ($('body').hasClass('page-template-main-exam')) {
      document.getElementById("myinputbox").focus();
    }
    var answerVal = $('.input-answer').val();
    $('.numbers li').on('click', function() {
      answerVal = answerVal + $(this).text();
      $('.input-answer').val(answerVal);
      document.getElementById("myinputbox").focus();
    });

    $('.backspace').on('click', function() {
      answerVal = answerVal.substr(0, answerVal.length - 1);
      $('.input-answer').val(answerVal);
      document.getElementById("myinputbox").focus();
    });

    $('.clear-all').on('click', function() {
      answerVal = '';
      $('.input-answer').val(answerVal);
      document.getElementById("myinputbox").focus();
    });

    $('.back-arrow').on('click', function() {
      var input = document.getElementById('myinputbox');
      document.getElementById("myinputbox").focus();
      setCaretPosition(input, doGetCaretPosition(input) - 1);       
    });
    
    $('.forward-arrow').on('click', function() {
      var input = document.getElementById('myinputbox');
      document.getElementById("myinputbox").focus();
      setCaretPosition(input, doGetCaretPosition(input) + 1);           
    });     

    function setCaretPosition(ctrl, pos) {
      // Modern browsers
      if (ctrl.setSelectionRange) {
        ctrl.focus();
        ctrl.setSelectionRange(pos, pos);
      
      // IE8 and below
      } else if (ctrl.createTextRange) {
        var range = ctrl.createTextRange();
        range.collapse(true);
        range.moveEnd('character', pos);
        range.moveStart('character', pos);
        range.select();
      }
    }

    function doGetCaretPosition(oField) {
      // Initialize
      var iCaretPos = 0;
      // IE Support
      if (document.selection) {
        // Set focus on the element
        oField.focus();
        // To get cursor position, get empty selection range
        var oSel = document.selection.createRange();
        // Move selection start to 0 position
        oSel.moveStart('character', -oField.value.length);
        // The caret position is selection length
        iCaretPos = oSel.text.length;
      }
      // Firefox support
      else if (oField.selectionStart || oField.selectionStart == '0')
        iCaretPos = oField.selectionStart;
      // Return results
      return iCaretPos;
    }
    
    // Js for checbox answer on exam page
    $('.ans-options input:checkbox').on('click', function() {
      $('.ans-options input:checkbox').not(this).prop('checked', false);
    });
    
    // JS for calculator toggle
    $('.calculator-link').toggle(function() {
      $('.scientific-calculator').show();
    }, function() {
      $('.scientific-calculator').hide();
    });
    
    // JS for exam status toggle
    $('.slide-button').addClass('slide-open');
    $('.slide-button').on('click', function() {
      if ($(this).hasClass('slide-open')) {
        $(this).removeClass('slide-open');
        $(this).addClass('slide-close');
        $('.exam-types .question-type').addClass('fullwidth');
        $('.exam-status').addClass('translate-out');
      } else if ($(this).hasClass('slide-close')) {
        $(this).removeClass('slide-close');
        $(this).addClass('slide-open');
        $('.exam-types .question-type').removeClass('fullwidth');
        $('.exam-status').removeClass('translate-out');
      }
    });
    
    // Contact form submit js
    $('.contact-form form').on('submit', function() {
      $('.wpcf7-response-output').css('display','none');
    });

    // Js for exam page
    if ($('.qna-section .wysiwyg-content p').children('img').length) {
      $('.qna-section .wysiwyg-content p').children('img').parent().addClass('question-image');
    }

    $('.arrow-down').on('click', function() {
      var scrollHeight = $('.qna-section').innerHeight();
      $('.qna-section').animate({
        scrollTop: scrollHeight
      }, 1000);
    });

    $('.arrow-up').on('click', function() {
      $('.qna-section').animate({
        scrollTop: 0
      }, 1000);
    });
    
    // Notes and Question paper and solution accordion
    $('.paper-solution-container').first().show();
    $('span.year').addClass('close');
    $('span.year').first().addClass('open');
    $('span.year').first().removeClass('close');
    $('span.year').on('click', function(e) {
      e.preventDefault();
      if ($(this).hasClass('close')) {
        $('.paper-solution-container').slideUp(500);
        $('span.year').removeClass('close');
        $('span.year').removeClass('open');
        $('span.year').addClass('close');
        $(this).next('.paper-solution-container').slideDown(500);
        $(this).removeClass('close');
        $(this).addClass('open');
      } else if ($(this).hasClass('open')) {
        $(this).next('.paper-solution-container').slideUp(500);
        $(this).removeClass('open');
        $(this).addClass('close');
      }
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

  $(window).on('load resize', function() {
    if (window.innerWidth < 768) {
      $('#myinputbox').attr('readonly', 'true');
    } else {
      $('#myinputbox').removeAttr('readonly');
    }    

    // Js for contact page branches equal height
    if (window.innerWidth > 768) {
      $('.branches li').each(function() {
        var currentHeight = 0;
        $(this).height('auto');
        if ($(this).height() > currentHeight) {
          currentHeight = $(this).height();
        }
        $('.branches li').height(currentHeight);
      });
    } else {
      $('.branches li').height('auto');
    }

    if (window.innerWidth > 992) {
      $('.exam-status').height($('.question-type').height() - 3);
      var extraHeight = $('.exam-status .status-info').innerHeight() + $('.exam-status .subject-title').innerHeight();
      $('.choose-question-container').innerHeight($('.exam-status').height() - extraHeight);
    } else {
      $('.exam-status').height('auto');
    }      
  });
})(jQuery);