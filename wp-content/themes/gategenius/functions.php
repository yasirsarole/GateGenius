<?php
function gate_genius_scripts() {
  wp_enqueue_style('main-style', get_stylesheet_uri(), array(), time(), false);  
  wp_enqueue_style('fonts', 'https://fonts.googleapis.com/css?family=Roboto+Slab', array(), time(), false);
  wp_enqueue_style('font-awesome', 'https://use.fontawesome.com/releases/v5.3.1/css/all.css', array(), time(), false);
}
add_action('wp_enqueue_scripts', 'gate_genius_scripts');
?>