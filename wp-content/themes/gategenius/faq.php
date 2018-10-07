<?php
/*
Template Name: FAQ
*/
get_header('home');
?>
<main class="website-main">
  <div class="wrapper">
    <div class="questionsandans">
      <h2><?php echo get_the_title(); ?></h2>    
    <?php
    if( have_rows('faq') ):
      while ( have_rows('faq') ) : the_row();

      $question = get_sub_field('question');
      $answer = get_sub_field('answer');
    ?>
      <p class="question">
        <span><?php echo $question; ?></span>
      </p>
      <div class="answer"><?php echo wpautop($answer); ?></div>
    <?php      
      endwhile;
    endif;
    ?>
    </div>    
  </div>
</main>
<?php 
get_footer();
?>