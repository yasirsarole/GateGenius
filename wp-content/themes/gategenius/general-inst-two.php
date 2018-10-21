<?php
/*
* Template for displaying general instructions
* Template Name: General Instructions 2
*/
get_header();
?>
<?php if (is_user_logged_in()) { ?>
<main class="website-main">
  <div class="heading-top">
    <div class="wrapper">
      <h2 class="instruction-top">other important instructions</h2>
    </div>
  </div>
  <div class="wrapper">
  <div class="mobile-right-section">
      <?php
        $userName = wp_get_current_user()->data->display_name;
      ?>  
        <figure class="student-image">
          <?php  
            if (function_exists ( 'mt_profile_img' ) ) {
              $student_id = wp_get_current_user()->data->ID;
              mt_profile_img( $student_id, array(
                'size' => 'thumbnail',
                'attr' => array( 'alt' => 'Alternative Text' ),
                'echo' => true )
              );
            }
          ?>           
        </figure>
        <span class="student-name"><?php echo $userName; ?></span>
    </div>    
    <div class="left-section">
      <h3 class="general-instruction">paper specific instructions</h3>
      <h6 class="subject">ME: Mechanical Engineering</h6>
      <div class="duration clearfix">
        <span class="time"><i>Duration</i> : 180 minutes</span>
        <span class="marks"><i>Total Marks</i> : 100</span>
      </div>
      <div class="instruction-content">
        <?php
        while ( have_posts() ) :
          the_post();
          echo wpautop(get_the_content()); 
        endwhile;
        ?>
      </div>
    </div>
    <div class="right-section">
      <?php
        $userName = wp_get_current_user()->data->display_name;
      ?>  
        <figure class="student-image">
          <?php  
            if (function_exists ( 'mt_profile_img' ) ) {
              $student_id = wp_get_current_user()->data->ID;
              mt_profile_img( $student_id, array(
                'size' => 'thumbnail',
                'attr' => array( 'alt' => 'Alternative Text' ),
                'echo' => true )
              );
            }
          ?>           
        </figure>
        <span class="student-name"><?php echo $userName; ?></span>
    </div>
  </div>
  <div class="nextbutton previousbutton">
    <div class="wrapper clearfix">
      <input type="checkbox" name="declaration">
      <p class="declaration"><span>Declaration by the Candidate:</span> I have read and understood all the instructions. All the computer hardware allotted to me are in proper working condition. I declare that I am not carrying any prohibited gadgets like mobile phone, bluetooth devices, wrist watches, etc. and any prohibited material with me into the examination hall. I agree that if found to be non-complaint with the above declaration, I shall be liable to be debarred from this examination and / or to disciplinary action, which may include ban from future examinations / tests.</p>
      <a href="<?php echo get_permalink(get_field('redirect_link')); ?>" title="Next" class="desktop-previous">< previous</a>
      <a href="<?php echo get_permalink(get_field('test_link')); ?>" class="ready-to-begin">I am ready to begin</a>
      <a href="<?php echo get_permalink(get_field('redirect_link')); ?>" title="Next" class="mobile-previous">< previous</a>
    </div>
  </div>
</main>
<?php } else {
  $homeUrl = get_home_url().'/login';
  header("Location: $homeUrl");
  die();
} ?>
<?php get_footer(); ?>