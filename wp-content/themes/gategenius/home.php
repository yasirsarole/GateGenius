<?php
/*
Template Name: Home
*/
get_header();
?>
<main class="website-main">
  <div class="wrapper">
    <?php wp_nav_menu(array( 'theme_location' => 'header-menu' )); ?>
    <?php wp_nav_menu(array( 'theme_location' => 'extra-menu' )); ?>
    <div class="gallery">
      <?php
        if( have_rows('slider_images') ):
          while ( have_rows('slider_images') ) : the_row();
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
  </div>
</main>
<?php 
get_footer();
?>