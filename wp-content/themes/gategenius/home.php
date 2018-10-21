<?php
/*
Template Name: Home
*/
get_header('home');
get_header();
?>
<main class="website-main">
  <div class="wrapper">
    <?php wp_nav_menu(array( 'theme_location' => 'header-menu' )); ?>
    <?php wp_nav_menu(array( 'theme_location' => 'extra-menu' )); ?>
    <div class="gallery">
      <?php
        if( have_rows('slider_image') ):
          while ( have_rows('slider_image') ) : the_row();
      ?>    
      <?php $image = get_sub_field('images'); ?>
        <figure class="slider-image">
          <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
        </figure>
      <?php  
          endwhile;
        endif;
      ?>      
    </div>
    <div class="right-section-home">
    <?php if (is_user_logged_in()) { ?>
      <a class="student-login" href="<?php echo get_permalink(get_field('profile_redirect')); ?>" title="<?php echo get_field('login_title') ?>">
          <?php echo get_field('login_title') ?>
      </a>     
    <?php } else { ?>  
      <a class="student-login" href="<?php echo get_permalink(get_field('student_login')); ?>" title="<?php echo get_field('login_title') ?>">
          <?php echo get_field('login_title') ?>
      </a>
    <?php } ?>  
      <div class="results">
        <?php
          if( have_rows('results__images') ):
            while ( have_rows('results__images') ) : the_row();
        ?>    
        <?php 
          $image = get_sub_field('images'); 
          $name =  get_sub_field('name');
          $pointer =  get_sub_field('pointer');
          ?>
          <figure class="result-slider">
            <img src="<?php echo $image['url']; ?>" alt="<?php echo $image['alt']; ?>">
            <figcaption>
              <span><?php echo $name; ?></span>
              <span><?php echo $pointer; ?></span>
            </figcaption>
          </figure>
        <?php  
            endwhile;
          endif;
        ?>         
      </div>
    </div>
  </div>
</main>
<?php 
get_footer();
?>