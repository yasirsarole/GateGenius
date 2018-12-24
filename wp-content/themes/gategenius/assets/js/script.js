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

    $('main').add('footer').on('click', function() {
      $('.hamburger').removeClass('inactive');
      $('.hamburger').addClass('active');
      $('.not-home .nav-menu').slideUp();      
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
    
    // Mobile status slider down
    $('.status-info-mobile').addClass('close');
    $('.status-info-mobile').on('click', function() {
      if ($(this).hasClass('close')) {
        $(this).removeClass('close');
        $(this).addClass('open');
        $(this).next().next('.exam-status').show();        
      } else if ($(this).hasClass('open')) {
        $(this).removeClass('open');
        $(this).addClass('close');
        $(this).next().next('.exam-status').hide();        
      }
    });

    // Js for exam page
    $('.papers .paper-name').first().children('span').addClass('active-section');
    $('.papers .paper-name').children('span').on('click', function() {
      $('.papers .paper-name').children('span').removeClass('active-section');
      $(this).addClass('active-section');
    });
  });
  // Ready function end

  $(window).on('load', function() {
    // JS for displaying time on exam page
    var actualTime = '';
    $('.question-type .main-section').each(function(i) {
      actualTime = i;
    });
    actualTime = Math.ceil(1.8*(actualTime+1));
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
      seconds = seconds - 30;

      if (seconds < 10) {
        seconds = '0' + seconds;
      }      
    }

    var interval = setInterval(function() {
      decreaseTime();
      $('.actual-left').text(actualTime + ' : ' + seconds);
      if (actualTime == 00 && seconds == 00) {
        clearInterval(interval);
        $('.actual-left').text('00' + ' : ' + '00');
          EvaluateMarks();
      }
    },1000);

    // Gate Exam

    $('.paper-types').attr('data-active-paper', 'type-1');
    $('.qna-section-main').attr('data-active-exam-type', 'type-1');

    $('.exam-types').each(function(){
      $(this).attr('data-active-question', $(this).find('.question-type .main-section').data('question-id'));
    });

    var getActiveExamType = $('.qna-section-main').attr('data-active-exam-type');
    var getActiveQuestionNo = $("[data-exam-type='" + getActiveExamType + "']").attr('data-active-question');
    
    // make exam type visible
    // console.log($("[data-exam-type='" + getActiveExamType + "']"));
    if($("[data-exam-type='" + getActiveExamType + "']").hasClass('invisible')){
      $("[data-exam-type='" + getActiveExamType + "']").removeClass('invisible');
      $("[data-exam-type='" + getActiveExamType + "']").addClass('visible');
    }

    // make question visible
    if($("[data-exam-type='" + getActiveExamType + "']").find("[data-question-id='" + getActiveQuestionNo + "']").hasClass('invisible')) {
      $("[data-exam-type='" + getActiveExamType + "']").find("[data-question-id='" + getActiveQuestionNo + "']").removeClass('invisible');
      $("[data-exam-type='" + getActiveExamType + "']").find("[data-question-id='" + getActiveQuestionNo + "']").addClass('visible');
    }

    // status update
    $("[data-exam-type='" + getActiveExamType + "']").find('.exam-status .question-status span').first().removeClass('not-visited');
    $("[data-exam-type='" + getActiveExamType + "']").find('.exam-status .question-status span').first().addClass('not-answered');

    $("[data-exam-type='" + getActiveExamType + "']").find('.status-info .answered').attr('data-before-content', $("[data-exam-type='" + getActiveExamType + "']").find('.question-status .answered').length);
    $("[data-exam-type='" + getActiveExamType + "']").find('.status-info .not-answered').attr('data-before-content', $("[data-exam-type='" + getActiveExamType + "']").find('.question-status .not-answered').length);

    updateQuestionStatuses();
    



  });

  function EvaluateMarks(){
    // Marks Evaluation Goes Here
    var totalMarks = 0;
    var outOfMarks = 0;

    // Calculate OutOf Marks
    $("[data-question-marks]").each(function(){
    outOfMarks += Number($(this).attr('data-question-marks'));
    });

    // Calculate Scored Marks with nagitive making
    $("[data-marks-scored]").each(function(){
    totalMarks += Number($(this).attr('data-marks-scored'));
    });

    var postTitle = myData.userloginname + " - " + myData.userID;
    var content = myData.todaysdate + " - " + totalMarks + " / " + outOfMarks;

    var postData = {
      "title": postTitle,
      "content": content,
      "status": "publish"
    }


    jQuery.ajax({
      method: "POST",
      url: myData.ajaxurl,
      data: {
        action: 'checkPost',
        postTitle: postTitle  
      },
      success: function(res){
        res = JSON.parse(res);
        if(res['status'] == 0) {
          createPostMethod();
        }else {
          postData.content = res['content'] + "\n" + postData.content;
          updatePostMethod(res['id']);
        }
      }
    });

    function createPostMethod(){
      fetch(myData.siteURL+"/index.php/wp-json/wp/v2/result",{
          method: "POST",
          headers:{
              'Content-Type': 'application/json;charset=UTF-8',
              'accept': 'application/json',
              'X-WP-Nonce': myData.nonce
          },
          body:JSON.stringify({
              title: postData.title,
              content: postData.content,
              status: 'publish'
          })
      }).then(function(){
            // redirect User to thankyou page
            console.log('Result Created');
      });
    }

    function updatePostMethod(id){
      fetch(myData.siteURL+'/index.php/wp-json/wp/v2/result/'+id,{
          method: "PUT",
          headers:{
              'Content-Type': 'application/json;charset=UTF-8',
              'accept': 'application/json',
              'X-WP-Nonce': myData.nonce
          },
          body:JSON.stringify({
              title: postData.title,
              content: postData.content,
              fields: {
                user_name: postData.fields.user_name
              },
              status: 'publish'
          })
      }).then(function(){
            // redirect user to thank you page
            console.log('Result Updated');
      });
    }
  }

  $(window).on('load, resize', function() {
    if (window.innerWidth < 768) {
      $('.myinputbox-keyboard').attr('readonly', 'true');
    } else {
      $('.myinputbox-keyboard').removeAttr('readonly');
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

  // Search implementation

  $("#search-query").on("keyup", function() {
    var g = $(this).val().toLowerCase();
    $(".questionsandans .answer").each(function() {
      if( $(this).css('display') === 'block' ) {
        $(this).prev('.question').removeClass('open');
        $(this).prev('.question').addClass('close');
        $(this).css('display','none');
      }
    });
    $(".questionsandans .question span").each(function() {
      var s = $(this).text().toLowerCase();
      $(this).closest('.question')[ s.indexOf(g) !== -1 ? 'show' : 'hide' ]();
    });
  });


  $('.paper-types .paper-name').on('click',function(){
    var clickedPaper = $(this).attr('data-id');
    var currPaper = $('.paper-types').attr('data-active-paper');
    if(clickedPaper == currPaper){
      return false;
    }
    $('.paper-types').attr('data-active-paper', clickedPaper);
    $('.qna-section-main').attr('data-active-exam-type', clickedPaper);
    makeActiveQuestion(currPaper);
    if($("[data-exam-type='" + clickedPaper + "']").find('.exam-status .question-status span').first().hasClass('not-visited')){
      $("[data-exam-type='" + clickedPaper + "']").find('.exam-status .question-status span').first().removeClass('not-visited');
      $("[data-exam-type='" + clickedPaper + "']").find('.exam-status .question-status span').first().addClass('not-answered');
    }
    updateQuestionStatuses();
  });


  function makeActiveQuestion(currPaper) {
    var currQuestionNo = $("[data-exam-type='" + currPaper + "']").attr('data-active-question');

    var getActiveExamType = $('.qna-section-main').attr('data-active-exam-type');
    var getActiveQuestionNo = $("[data-exam-type='" + getActiveExamType + "']").attr('data-active-question');


    updateClassByDataValue(currPaper,currQuestionNo);
    updateClassByDataValue(getActiveExamType, getActiveQuestionNo);

  }


  function updateClassByDataValue(dataValue, questionId){
    // make in-visible
    if($("[data-exam-type='" + dataValue + "']").hasClass('visible') && $("[data-exam-type='" + dataValue + "']").find("[data-question-id='" + questionId + "']").hasClass('visible')){
      $("[data-exam-type='" + dataValue + "']").removeClass('visible');
      $("[data-exam-type='" + dataValue + "']").addClass('invisible');

      $("[data-exam-type='" + dataValue + "']").find("[data-question-id='" + questionId + "']").removeClass('visible');
      $("[data-exam-type='" + dataValue + "']").find("[data-question-id='" + questionId + "']").addClass('invisible');
      // $("[data-exam-type='" + dataValue + "']").attr('data-active-question','');
      // console.log("Type "+dataValue);
      // console.log("Invisible Question "+questionId);
    } else if($("[data-exam-type='" + dataValue + "']").hasClass('invisible') && $("[data-exam-type='" + dataValue + "']").find("[data-question-id='" + questionId + "']").hasClass('invisible')) {
      // make visible
      $("[data-exam-type='" + dataValue + "']").removeClass('invisible');
      $("[data-exam-type='" + dataValue + "']").addClass('visible');

      $("[data-exam-type='" + dataValue + "']").find("[data-question-id='" + questionId + "']").removeClass('invisible');
      $("[data-exam-type='" + dataValue + "']").find("[data-question-id='" + questionId + "']").addClass('visible');
      // var setIt = $("[data-exam-type='" + dataValue + "']").attr('data-active-question');
      // console.log("Type "+dataValue);
      // console.log("Visible Question "+questionId);
      $("[data-exam-type='" + dataValue + "']").attr('data-active-question',questionId);
    }
  }
  


  function updateQuestionStatuses(){
    updateStatusNotVisited();
    updateStatusNotAnswered();
    updateStatusAnswered();
    updateStatusAnsweredAndMarkForReview();
    updateStatusMarkForReview();
  }

  $('.question-status .not-visited').on('click',function(){
    var ID = 'question-id-'+ $(this).attr('data-before-content');

    var activeExamType = $('.paper-types').attr('data-active-paper');
    var activeQuestion = $("[data-exam-type='" + activeExamType + "']").attr('data-active-question');

    // console.log("Active"+activeQuestion);
    // console.log("Clicked"+ID);
    // toggle Question visiblity
    if(activeQuestion != ID){
      $('.paper-types').attr('data-active-paper', activeExamType);
      // $('.qna-section-main').attr('data-active-exam-type', activeExamType);
      // $('.qna-section-main').attr('data-active-exam-type', activeExamType);
      toggleQuestionVisibility(activeExamType,activeQuestion,ID);
    }
    
    if($(this).hasClass('not-visited')){
      $(this).removeClass('not-visited');
      $(this).addClass('not-answered');
    }
    updateQuestionStatuses();
  });

  function toggleQuestionVisibility(activeExamType,oldQuestion, newQuestion){
    updateClassByDataValue(activeExamType,oldQuestion);
    updateClassByDataValue(activeExamType,newQuestion);
  }

  $('a.save-next').on('click',function(e){
    e.preventDefault();
    var activeExamTypeSave = $('.paper-types').attr('data-active-paper');
    var activeQuestionNoSave = $("[data-exam-type='" + activeExamTypeSave + "']").attr('data-active-question');;
    var flag = false;

    if($("[data-exam-type='" + activeExamTypeSave + "']").find("[data-question-id='" + activeQuestionNoSave + "']").hasClass('mcq-type')){
      $("[data-exam-type='" + activeExamTypeSave + "']").find("[data-question-id='" + activeQuestionNoSave + "']").find('.ans-options input').each(function(){
        if($(this).prop("checked")){
          // flag;
          flag = true;
          return false;
        }
      });
    }else if($("[data-exam-type='" + activeExamTypeSave + "']").find("[data-question-id='" + activeQuestionNoSave + "']").hasClass('nat-type')){
      if($("[data-exam-type='" + activeExamTypeSave + "']").find("[data-question-id='" + activeQuestionNoSave + "']").find('.answer-field input').val()){
        flag = true;
      }
    }

    if(flag){
      // Answer is available
      changeQuestion();
    }
  });

  $('a.mark-review').on('click',function(e){
    e.preventDefault();
    var activeExamTypeReview = $('.paper-types').attr('data-active-paper');
    var activeQuestionNoReview = $("[data-exam-type='" + activeExamTypeReview + "']").attr('data-active-question');;
    var flag2 = false;

    if($("[data-exam-type='" + activeExamTypeReview + "']").find("[data-question-id='" + activeQuestionNoReview + "']").hasClass('mcq-type')){
      $("[data-exam-type='" + activeExamTypeReview + "']").find("[data-question-id='" + activeQuestionNoReview + "']").find('.ans-options input').each(function(){
        if($(this).prop("checked")){
          // flag2;
          flag2 = true;
          return false;
        }
      });
    }else if($("[data-exam-type='" + activeExamTypeReview + "']").find("[data-question-id='" + activeQuestionNoReview + "']").hasClass('nat-type')){
      if($("[data-exam-type='" + activeExamTypeReview + "']").find("[data-question-id='" + activeQuestionNoReview + "']").find('.answer-field input').val()){
        flag2 = true;
      }
    }
    if(flag2){
      markReviewChangeQuestion('answered');
    } else {
      markReviewChangeQuestion();
    }
  });

  function markReviewChangeQuestion(status=''){
    var activeExamTypeReview = $('.paper-types').attr('data-active-paper');
    var activeQuestionReview = $("[data-exam-type='" + activeExamTypeReview + "']").attr('data-active-question');;

    // Evaluation of Answered Question
    if(status){
      var answer;
      if($("[data-exam-type='" + activeExamTypeReview + "']").find("[data-question-id='" + activeQuestionReview + "']").hasClass('mcq-type')){
        // check mcq Question
        $("[data-exam-type='" + activeExamTypeReview + "']").find("[data-question-id='" + activeQuestionReview + "']").find('.ans-options input').each(function(){
          if($(this).prop("checked")){
            answer = $(this).val();
            return false;
          }
        });
        var currMark = $("[data-exam-type='" + activeExamTypeReview + "']").find("[data-question-id='" + activeQuestionReview + "']").attr('data-question-marks');
        if($("[data-exam-type='" + activeExamTypeReview + "']").find("[data-question-id='" + activeQuestionReview + "']").attr('data-correct-answer') == answer){
          $("[data-exam-type='" + activeExamTypeReview + "']").find("[data-question-id='" + activeQuestionReview + "']").attr('data-marks-scored', currMark);
        }else{
          var minusMark = -(Number(currMark))/3;
          $("[data-exam-type='" + activeExamTypeReview + "']").find("[data-question-id='" + activeQuestionReview + "']").attr('data-marks-scored', minusMark);
        }
      } else if($("[data-exam-type='" + activeExamTypeReview + "']").find("[data-question-id='" + activeQuestionReview + "']").hasClass('nat-type')){
      var answer = Number($("[data-exam-type='" + activeExamTypeReview + "']").find("[data-question-id='" + activeQuestionReview + "']").find('.answer-field input').val());
      var currMark = $("[data-exam-type='" + activeExamTypeReview + "']").find("[data-question-id='" + activeQuestionReview + "']").attr('data-question-marks');
      var correctAnswer = Number($("[data-exam-type='" + activeExamTypeReview + "']").find("[data-question-id='" + activeQuestionReview + "']").attr('data-correct-answer'));

      if(answer === correctAnswer){
        $("[data-exam-type='" + activeExamTypeReview + "']").find("[data-question-id='" + activeQuestionReview + "']").attr('data-marks-scored', currMark);
      }else{
        var minusMark = -(Number(currMark))/3;
        $("[data-exam-type='" + activeExamTypeReview + "']").find("[data-question-id='" + activeQuestionReview + "']").attr('data-marks-scored', minusMark);
      }
    }
    }

    var activeExamTypeLasQuestion = $("[data-exam-type='" + activeExamTypeReview + "']").find('.question-type .main-section').last().attr('data-question-id');
    var lastExamType = $('.exam-types').last().attr('data-exam-type');

    if(activeQuestionReview == activeExamTypeLasQuestion){
      if(activeExamTypeReview != lastExamType){
        if(!status){
          updateCurrentQuestionStatusReview(activeQuestionReview,activeExamTypeReview);
        } else {
          updateCurrentQuestionStatusAnswereReview(activeQuestionReview,activeExamTypeReview);
        }
        // change status to review
        var nextExam = findNextExamType(activeExamTypeReview);
        var nextExamQuestion = findQuestion(nextExam);
        updateCurrentQuestionStatusNotAnswered(nextExamQuestion,nextExam);

        updateClassByDataValue(activeExamTypeReview,activeQuestionReview);
        updateClassByDataValue(nextExam,nextExamQuestion);
    
        $('.paper-types').find("[data-id='" + activeExamTypeReview + "']").find('span').removeClass('active-section');
        $('.paper-types').find("[data-id='" + nextExam + "']").find('span').addClass('active-section');
        $('.paper-types').attr('data-active-paper', nextExam);
        $('.qna-section-main').attr('data-active-exam-type', nextExam);
      } else {
        // only update status to mark review
        if(!status){
          updateCurrentQuestionStatusReview(activeQuestionReview,activeExamTypeReview);
        } else {
          updateCurrentQuestionStatusAnswereReview(activeQuestionReview,activeExamTypeReview);
        }
      }
    } else {
      if(!status){
        updateCurrentQuestionStatusReview(activeQuestionReview,activeExamTypeReview);
      } else {
        updateCurrentQuestionStatusAnswereReview(activeQuestionReview,activeExamTypeReview);
      }
      var nextExamQuestion = findNextQuestion(activeExamTypeReview,activeQuestionReview);
      updateCurrentQuestionStatusNotAnswered(nextExamQuestion,activeExamTypeReview);

      updateClassByDataValue(activeExamTypeReview,activeQuestionReview);
      updateClassByDataValue(activeExamTypeReview,nextExamQuestion);
    }
    updateQuestionStatuses();
  }


  function changeQuestion(){
    var activeExamTypeChangeQuestion = $('.paper-types').attr('data-active-paper');
    var activeQuestionChangeQuestion = $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").attr('data-active-question');;

    var activeExamTypeLasQuestion = $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find('.question-type .main-section').last().attr('data-question-id');
    var lastExamType = $('.exam-types').last().attr('data-exam-type');
    

    // update selected answer to data attribute
    var answer;
    if($("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find("[data-question-id='" + activeQuestionChangeQuestion + "']").hasClass('mcq-type')){
      // check mcq Question
      $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find("[data-question-id='" + activeQuestionChangeQuestion + "']").find('.ans-options input').each(function(){
        if($(this).prop("checked")){
          answer = $(this).val();
          return false;
        }
      });
      var currMark = $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find("[data-question-id='" + activeQuestionChangeQuestion + "']").attr('data-question-marks');
      if($("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find("[data-question-id='" + activeQuestionChangeQuestion + "']").attr('data-correct-answer') == answer){
        $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find("[data-question-id='" + activeQuestionChangeQuestion + "']").attr('data-marks-scored', currMark);
      }else{
        var minusMark = -(Number(currMark))/3;
        $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find("[data-question-id='" + activeQuestionChangeQuestion + "']").attr('data-marks-scored', minusMark);
      }
    } else if($("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find("[data-question-id='" + activeQuestionChangeQuestion + "']").hasClass('nat-type')){
      var answer = Number($("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find("[data-question-id='" + activeQuestionChangeQuestion + "']").find('.answer-field input').val());
      var currMark = $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find("[data-question-id='" + activeQuestionChangeQuestion + "']").attr('data-question-marks');
      var correctAnswer = Number($("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find("[data-question-id='" + activeQuestionChangeQuestion + "']").attr('data-correct-answer'));

      if(answer === correctAnswer){
        $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find("[data-question-id='" + activeQuestionChangeQuestion + "']").attr('data-marks-scored', currMark);
      }else{
        var minusMark = -(Number(currMark))/3;
        $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find("[data-question-id='" + activeQuestionChangeQuestion + "']").attr('data-marks-scored', minusMark);
      }
    }

    // $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find("[data-question-id='" + activeQuestionChangeQuestion + "']")

    if(activeQuestionChangeQuestion == activeExamTypeLasQuestion){
      if(activeExamTypeChangeQuestion != lastExamType){
        updateCurrentQuestionStatusAnswered(activeQuestionChangeQuestion,activeExamTypeChangeQuestion);
        // change status from not-answered to answered
        var nextExam = findNextExamType(activeExamTypeChangeQuestion);
        var nextExamQuestion = findQuestion(nextExam);
        updateCurrentQuestionStatusNotAnswered(nextExamQuestion,nextExam);

        updateClassByDataValue(activeExamTypeChangeQuestion,activeQuestionChangeQuestion);
        updateClassByDataValue(nextExam,nextExamQuestion);

        $('.paper-types').find("[data-id='" + activeExamTypeChangeQuestion + "']").find('span').removeClass('active-section');
        $('.paper-types').find("[data-id='" + nextExam + "']").find('span').addClass('active-section');
        $('.paper-types').attr('data-active-paper', nextExam);
        $('.qna-section-main').attr('data-active-exam-type', nextExam);
      } else {
        // only update status not-answered to answered
        updateCurrentQuestionStatusAnswered(activeQuestionChangeQuestion,activeExamTypeChangeQuestion);
      }
    } else {
      updateCurrentQuestionStatusAnswered(activeQuestionChangeQuestion,activeExamTypeChangeQuestion);
      var nextExamQuestion = findNextQuestion(activeExamTypeChangeQuestion,activeQuestionChangeQuestion);
      updateCurrentQuestionStatusNotAnswered(nextExamQuestion,activeExamTypeChangeQuestion);

      updateClassByDataValue(activeExamTypeChangeQuestion,activeQuestionChangeQuestion);
      updateClassByDataValue(activeExamTypeChangeQuestion,nextExamQuestion);
    }
    updateQuestionStatuses();
  }

  function updateCurrentQuestionStatusNotAnswered(activeQuestionChangeQuestion,activeExamTypeChangeQuestion){
    var questionNo = activeQuestionChangeQuestion;
    var questionNo_array = questionNo.split('-');
    questionNo = questionNo_array[questionNo_array.length-1];
    if ($("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").hasClass('not-visited')){
      $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").removeClass('not-visited');
      $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").addClass('not-answered');
    }
  }

  function updateCurrentQuestionStatusAnswered(activeQuestionChangeQuestion,activeExamTypeChangeQuestion){
    var questionNo = activeQuestionChangeQuestion;
        var questionNo_array = questionNo.split('-');
        questionNo = questionNo_array[questionNo_array.length-1];
        if ($("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").hasClass('not-answered')){
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").removeClass('not-answered');
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").addClass('answered');
        } else if ($("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").hasClass('mark-review')){
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").removeClass('mark-review');
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").addClass('answered');
        } else if ($("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").hasClass('answered-and-marked')){
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").removeClass('answered-and-marked');
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").addClass('answered');
        }
  }

  function updateCurrentQuestionStatusReview(activeQuestionChangeQuestion,activeExamTypeChangeQuestion){
    var questionNo = activeQuestionChangeQuestion;
        var questionNo_array = questionNo.split('-');
        questionNo = questionNo_array[questionNo_array.length-1];
        if ($("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").hasClass('not-answered')){
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").removeClass('not-answered');
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").addClass('mark-review');
        } else if ($("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").hasClass('answered')){
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").removeClass('answered');
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").addClass('mark-review');
        } else if ($("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").hasClass('answered-and-marked')){
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").removeClass('answered-and-marked');
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").addClass('mark-review');
        }
  }

  function updateCurrentQuestionStatusAnswereReview(activeQuestionChangeQuestion,activeExamTypeChangeQuestion){
    var questionNo = activeQuestionChangeQuestion;
        var questionNo_array = questionNo.split('-');
        questionNo = questionNo_array[questionNo_array.length-1];
        if ($("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").hasClass('not-answered')){
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").removeClass('not-answered');
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").addClass('answered-and-marked');
        } else if ($("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").hasClass('answered')){
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").removeClass('answered');
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").addClass('answered-and-marked');
        } else if ($("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").hasClass('mark-review')){
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").removeClass('mark-review');
          $("[data-exam-type='" + activeExamTypeChangeQuestion + "']").find(".question-status span[data-before-content='" + questionNo + "']").addClass('answered-and-marked');
        }
  }

  function findNextExamType(currExamType){
    return $("[data-exam-type='" + currExamType + "']").next().attr('data-exam-type');
  }
  function findQuestion(examType){
    return $("[data-exam-type='" + examType + "']").attr('data-active-question');
  }
  function findNextQuestion(examType,currQuestion){
    return $("[data-exam-type='" + examType + "']").find("[data-question-id='" + currQuestion + "']").next().attr('data-question-id');
  }

  function updateStatusNotAnswered(){
    var getActiveExamTypeStatus = $('.paper-types').attr('data-active-paper');
    $("[data-exam-type='" + getActiveExamTypeStatus + "']").find('.status-info .not-answered').first().attr('data-before-content', $("[data-exam-type='" + getActiveExamTypeStatus + "']").find('.question-status .not-answered').length);
  }
  function updateStatusNotVisited(){
    var getActiveExamTypeStatus = $('.paper-types').attr('data-active-paper');
    $("[data-exam-type='" + getActiveExamTypeStatus + "']").find('.status-info .not-visited').first().attr('data-before-content', $("[data-exam-type='" + getActiveExamTypeStatus + "']").find('.question-status .not-visited').length);
  }
  function updateStatusAnswered(){
    var getActiveExamTypeStatus = $('.paper-types').attr('data-active-paper');
    $("[data-exam-type='" + getActiveExamTypeStatus + "']").find('.status-info .answered').first().attr('data-before-content', $("[data-exam-type='" + getActiveExamTypeStatus + "']").find('.question-status .answered').length);
  }
  function updateStatusAnsweredAndMarkForReview(){
    var getActiveExamTypeStatus = $('.paper-types').attr('data-active-paper');
    $("[data-exam-type='" + getActiveExamTypeStatus + "']").find('.status-info .answered-and-marked').first().attr('data-before-content', $("[data-exam-type='" + getActiveExamTypeStatus + "']").find('.question-status .answered-and-marked').length);
  }
  function updateStatusMarkForReview(){
    var getActiveExamTypeStatus = $('.paper-types').attr('data-active-paper');
    $("[data-exam-type='" + getActiveExamTypeStatus + "']").find('.status-info .mark-review').first().attr('data-before-content', $("[data-exam-type='" + getActiveExamTypeStatus + "']").find('.question-status .mark-review').length);
  }

})(jQuery);