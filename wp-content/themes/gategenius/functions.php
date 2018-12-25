<?php
  // Enqueue scripts and styles
  function gate_genius_scripts() {
    wp_enqueue_style('main-style', get_stylesheet_uri(), array(), time(), false);  
    wp_enqueue_script('main-js', get_stylesheet_directory_uri() . '/assets/js/script.js', array('jquery'), time(), true);
    
    wp_localize_script('main-js', 'myData', array(
      'nonce' => wp_create_nonce('wp_rest'),
      'siteURL' => get_site_url(),
      'ajaxurl' => admin_url('admin-ajax.php'),
      'userID' => wp_get_current_user()->data->ID,
      'userloginname' => wp_get_current_user()->data->display_name,
      'todaysdate' => date('d-m-Y'),
      // 'redirectLink' => 
    ));
    wp_enqueue_style('raleway-font', 'https://fonts.googleapis.com/css?family=Raleway', array(), time(), false);
    wp_enqueue_style('opensans-font', 'https://fonts.googleapis.com/css?family=Open+Sans', array(), time(), false);
    wp_enqueue_style('mons-font', 'https://fonts.googleapis.com/css?family=Montserrat', array(), time(), false);
    wp_enqueue_style('font-awesome', 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css', array(), time(), false);
    wp_enqueue_script('jquery', 'http://code.jquery.com/jquery-1.11.0.min.js', array(), time(), true);
    wp_enqueue_script('jquery-migrate', 'http://code.jquery.com/jquery-migrate-1.2.1.min.js', array(), time(), true);
    wp_enqueue_style('slick-style', 'http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css', array(), time(), false);
    wp_enqueue_script('slick-js', 'http://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js', array('jquery'), time(), true);
    wp_enqueue_script('math-js', 'https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.1/MathJax.js?config=TeX-AMS-MML_HTMLorMML', array('jquery'), time(), true);
  }
  add_action('wp_enqueue_scripts', 'gate_genius_scripts');

  // Create options page ACF
  if( function_exists('acf_add_options_page') ) {
    acf_add_options_page(array(
      'page_title' 	=> 'Theme General Settings',
      'menu_title'	=> 'Theme Settings',
      'menu_slug' 	=> 'theme-general-settings',
      'capability'	=> 'edit_posts',
      'redirect'		=> true
    ));
    
    acf_add_options_sub_page(array(
      'page_title' 	=> 'Theme Header Settings',
      'menu_title'	=> 'Header',
      'parent_slug'	=> 'theme-general-settings',
    ));
    
    acf_add_options_sub_page(array(
      'page_title' 	=> 'Theme Footer Settings',
      'menu_title'	=> 'Footer',
      'parent_slug'	=> 'theme-general-settings',
    ));
  }

  // Register menus for GateGenius
  function register_my_menus() {
    register_nav_menus(
      array(
        'header-menu' => __( 'Main Menu' ),
        'extra-menu' => __( 'Extra Menu' ),
        'footer-menu1' => __( 'Footer Menu1' ),
        'footer-menu2' => __( 'Footer Menu2' ),
        'hamburger-menu' => __( 'Hamburger Menu' ),
      )
    );
  }
  add_action( 'init', 'register_my_menus' ); 

  // Generate Results for GATE Test
  // function create_post_type() {
  //   register_post_type( 'results',
  //     array(
  //       'labels' => array(
  //         'name' => __( 'Results' ),
  //         'singular_name' => __( 'Result' )
  //       ),
  //       'public' => true,
  //       'has_archive' => true,
  //     )
  //   );
  // }
  // add_action( 'init', 'create_post_type' );

  // function firsttheme_restapi_resources() {
  //   wp_enqueue_script('rest_js',get_template_directory_uri().'assets/js/rest.js',NULL,1.0,true);
  //   wp_localize_script('rest_js', 'myData', array(
  //     'nonce' => wp_create_nonce('wp_rest'),
  //     'siteURL' => get_site_url(),
  //     'ajaxurl' => admin_url('admin-ajax.php')
  //   ));
  // }
  // add_action('wp_enqueue_scripts','firsttheme_restapi_resources');

  /**
  * Add REST API support to an already registered post type News.
  */
  // add_action( 'init', 'my_custom_post_type_rest_support', 25 );
  // function my_custom_post_type_rest_support() {
  //   global $wp_post_types;
  
  //   //be sure to set this to the name of your post type!
  //   $post_type_name = 'results';
  //   if( isset( $wp_post_types[ $post_type_name ] ) ) {
  //     $wp_post_types[$post_type_name]->show_in_rest = true;
  //     $wp_post_types[$post_type_name]->rest_base = $post_type_name;
  //     $wp_post_types[$post_type_name]->rest_controller_class = 'WP_REST_Posts_Controller';
  //   }
  // }

  /**
   * Register a result post type, with REST API support
   *
   * Based on example at: http://codex.wordpress.org/Function_Reference/register_post_type
   */
  // function firsttheme_register_post_types() {
  //   /**
  //    * Post Type: Result.
  //    */
  //   $labels = array(
  //     "name" => __( "Results", "firsttheme" ),
  //     "all_items" => __( "All Results", "firsttheme" ),
  //     "add_new" => __( "Add New Result", "firsttheme" ),
  //     "singular_name" => __( "Result", "firsttheme" ),
  //     "plural_name" => __( "Results", "firsttheme" ),
  //     "archives" => __( "Results Archive", "firsttheme" ),
  //   );
  //   $args = array(
  //     "label" => __( "Result", "firsttheme" ),
  //     "labels" => $labels,
  //     "public" => true,
  //     "publicly_queryable" => true,
  //     "show_ui" => true,
  //     "has_archive" => true,
  //     "show_in_menu" => true,
  //     "exclude_from_search" => false,
  //     "capability_type" => "post",
  //     "hierarchical" => false,
  //     "rewrite" => array( "slug" => "results", "with_front" => true ),
  //     "query_var" => true,
  //     'show_in_rest'       => true,
  //     'rest_base'          => 'result',
  //     'rest_controller_class' => 'WP_REST_Posts_Controller',
  //   );
  //   register_post_type( "result", $args );
  // }
  // add_action( 'init', 'firsttheme_register_post_types' );

  // /* Hide UI of Result Post Type from user */
  // function firsttheme_remove_menu_items() {
  //     if( !current_user_can( 'administrator' ) ):
  //         remove_menu_page( 'edit.php?post_type=result' );
  //     endif;
  // }
  // add_action( 'admin_menu', 'firsttheme_remove_menu_items' );


  // /* Ajax for checking post Exist or not */
  // add_action('wp_ajax_checkPost','firsttheme_check_post_exist_or_not');

  // function firsttheme_check_post_exist_or_not(){
  //   $postTitle = $_POST['postTitle'];
  //   $result = array('status'=> 0);
  //   $my_post_query = new WP_Query(array('post_type'=>'result', 'post_status'=>'publish', 'name'=>$postTitle));

  //   if ( $my_post_query->have_posts() ) {
  //     while ($my_post_query->have_posts()) {
  //       $my_post_query->the_post();
  //       $result = array("status"=> 1, "id" => get_the_ID(), "content" => get_the_content(), 'name'=>$postTitle);
  //     } 
  //     wp_reset_postdata();
  //   }
    
  //   echo json_encode($result);
  //   die();
  // }


  
/* ----- Restrict non loged in users for notes, videos and quesion_paper/solution ----- */
add_action( 'template_redirect', 'redirect_non_logged_users_to_specific_page' );

function redirect_non_logged_users_to_specific_page() {
  global $post;
  if ( !is_user_logged_in() && preg_match('/logged-in/', $post->post_name) ) {
    $redirect_url = get_permalink();
    $redirect_url = str_replace('logged-in-', '', $redirect_url);
    wp_redirect( $redirect_url ); 
    exit;
   }
}


/**
 * Register a result post type, with REST API support
 *
 * Based on example at: http://codex.wordpress.org/Function_Reference/register_post_type
 */
function gateGenius_register_post_types() {
  /**
   * Post Type: Result.
   */
  $labels = array(
    "name" => __( "Results" ),
    "all_items" => __( "All Results" ),
    "add_new" => __( "Add New Result" ),
    "singular_name" => __( "Result" ),
    "plural_name" => __( "Results" ),
    "archives" => __( "Results Archive" ),
  );
  $args = array(
    "label" => __( "Result" ),
    "labels" => $labels,
    "public" => true,
    "publicly_queryable" => true,
    "show_ui" => true,
    "has_archive" => true,
    "show_in_menu" => true,
    "exclude_from_search" => false,
    "capability_type" => "post",
    "hierarchical" => false,
    "rewrite" => array( "slug" => "result", "with_front" => true ),
    "query_var" => true,
      'show_in_rest'       => true,
      'rest_base'          => 'result',
      'rest_controller_class' => 'WP_REST_Posts_Controller',
  );
  register_post_type( "result", $args );
}
add_action( 'init', 'gateGenius_register_post_types' );


/* Hide UI of Result Post Type from user */
function gateGenius_remove_menu_items() {
    if( !current_user_can( 'administrator' ) ):
        remove_menu_page( 'edit.php?post_type=result' );
    endif;
}
add_action( 'admin_menu', 'gateGenius_remove_menu_items' );

/* Ajax for checking post Exist or not */

add_action('wp_ajax_checkPost','gateGenius_check_post_exist_or_not');
add_action('wp_ajax_nopriv_checkPost','gateGenius_check_post_exist_or_not');
function gateGenius_check_post_exist_or_not(){
  require 'checkForPost.php';
}


?>

