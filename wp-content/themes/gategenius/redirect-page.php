<?php
/*
* Template for exam page redirect
* Template Name: Redirect Exam
*/
get_header();
?>
<?php if (is_user_logged_in()) { ?>
<main class="website-main">
  <div class="wrapper">
    <?php
    if( have_rows('redirect_links') ):
    ?>
    <div class="redirect-links">
    <?php
        while ( have_rows('redirect_links') ) : the_row();
        $Link = get_sub_field('link');
        $Title = get_sub_field('title');
    ?>
      <a href="<?php echo get_permalink($Link); ?>" title="<?php echo $Title; ?>"><?php echo $Title; ?></a>
    <?php    
        endwhile;
    ?>
    </div>
    <?php    
    endif;
    ?>    
  </div>
</main>
<?php } else {
  $homeUrl = get_home_url().'/login';
  header("Location: $homeUrl");
  die();
} ?>
<?php get_footer(); ?>