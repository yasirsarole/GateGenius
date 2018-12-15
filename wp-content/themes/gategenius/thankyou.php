<?php
/*
Template Name: Thank You
*/
get_header();
?>
<main class="website-main">
  <div class="thank-you-content">
    <?php $redirectPage = get_field('redirect_page'); ?>
    <p class="thank-you"><?php echo get_field('thank_you_message'); ?></p>
    <a href="<?php echo get_permalink($redirectPage); ?>">
    <?php echo get_field('redirect_link_text'); ?>
    </a>
  </div>
</main>
<?php get_footer(); ?>