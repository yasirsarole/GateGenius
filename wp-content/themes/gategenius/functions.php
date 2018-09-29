<?php

// Enqueue scripts and styles
function gate_genius_scripts() {
  wp_enqueue_style('main-style', get_stylesheet_uri(), array(), time(), false);  
  wp_enqueue_style('fonts', 'https://fonts.googleapis.com/css?family=Roboto+Slab', array(), time(), false);
  wp_enqueue_style('font-awesome', 'https://use.fontawesome.com/releases/v5.3.1/css/all.css', array(), time(), false);
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
?>