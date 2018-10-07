<?php
/*
Template Name: Home
*/
get_header('home');
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
</main>
<?php 
get_footer();
?>