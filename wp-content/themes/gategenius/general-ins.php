<?php
/*
* Template for displaying general instructions
* Template Name: General Instruction
*/
get_header();
?>
<main class="website-main">
  <div class="heading-top">
    <div class="wrapper">
      <h2 class="instruction-top">instructions</h2>
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
      <h3 class="general-instruction">general instruction</h3>
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
  <div class="nextbutton">
    <div class="wrapper">
      <a href="<?php echo get_permalink(get_field('redirect_link')); ?>" title="Next">next ></a>
    </div>
  </div>
</main>
<?php get_footer(); ?>