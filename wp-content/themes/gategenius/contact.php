<?php
/*
* Template for contact us
* Template Name: Contact Us
*/
get_header();
?>
<main class="website-main">
  <div class="wrapper">
    <div class="contact-main">
      <h2><?php echo get_the_title(); ?></h2>
      <div class="branch-form-container">
        <div class="branch-info">
          <ul class="branches">
            <?php
            if( have_rows('branch_info') ):
              while ( have_rows('branch_info') ) : the_row();

              $imageUrl = get_sub_field('image')['url'];
              $imageAlt = get_sub_field('image')['alt'];
              $address = get_sub_field('address');
            ?>
            <li>
              <figure class="branch-image">
                <img src="<?php echo $imageUrl ?>" alt="<?php echo $imageAlt ?>">
              </figure>
              <?php echo wpautop($address); ?>
            </li>
            <?php    
              endwhile;
            endif;
            ?>
          </ul>        
        </div>
        <div class="contact-form">
          <?php echo do_shortcode('[contact-form-7 id="311" title="Contact US"]'); ?>
        </div>
      </div>  
    </div>
    <div id="map-canvas">
      <iframe src="https://www.google.com/maps/d/embed?mid=115r6RxzgFujXnJUZDU_dJa5IK3CT7ZjR" width="640" height="480"></iframe>      
    </div>
  </div>
</main>
<?php get_footer(); ?>