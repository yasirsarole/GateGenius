<?php
/*
* Template for conducting Test
* Template Name: Test
*/
get_header();
?>
<?php if (is_user_logged_in()) { ?>
<main class="website-main">
  <div class="top-inst">
    <div class="wrapper">
      <span class="test-name">ME-Mechanical Engineering 2018</span>
      <div class="paper-instructions">
        <a href="#" class="question-paper">question paper</a>
        <a href="#" class="instructions">instructions</a>
      </div>
    </div>
  </div>
  <div class="scientific-calculator">  
    <iframe src="https://www.tcsion.com/OnlineAssessment/ScientificCalculator/Calculator.html" frameborder="0"></iframe>
  </div>
  <div class="time-left">
    <?php
      $time = 5; 
      $time = sprintf("%02d", $time)
    ?>
    <span class="time">time left : </span>
    <span class="actual-left"><?php echo $time; ?></span>       
  </div>
</main>
<?php } else {
  $homeUrl = get_home_url().'/login';
  header("Location: $homeUrl");
  die();
} ?>
<?php get_footer(); ?>