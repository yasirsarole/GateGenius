<?php
/*
* Template for admission guide
* Template Name: Admission Guide
*/
get_header();
?>
<main class="website-main">
  <div class="wrapper">
    <div class="admission-main">
      <h2><?php echo get_the_title(); ?></h2>
      <?php
        while ( have_posts() ) :
          the_post();
          echo wpautop(get_the_content()); 
        endwhile;
      ?>      
    </div>
  </div>
</main>
<?php get_footer(); ?>