<?php
/*
* Template for about us page
* Template Name: About Us
*/
get_header();
?>
<main class="website-main">
  <div class="wrapper">
    <div class="about-container">
      <h2><?php echo get_the_title(); ?></h2>
      <figure class="about-banner">
        <img src="<?php echo get_field('banner')['url'] ?>" alt="<?php echo get_field('banner')['url'] ?>">
      </figure>
      <div class="about-main">
        <?php echo wpautop(get_field('about_us_content')); ?>
      </div>
    </div>
  </div>
</main>
<?php get_footer(); ?>