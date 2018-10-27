<?php
/* Header file for GateGenius */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<header class="main-header not-home">
		<div class="wrapper clearfix">
			<span class="hamburger active"></span>	
      <div class="nav-menu">
        <div class="top-menus">  
          <?php wp_nav_menu(array( 'theme_location' => 'hamburger-menu' )); ?>
        </div>
      </div>
			<h1 class="main-logo">
				<a href="<?php echo get_home_url(); ?>" title="GATEGENIUS">gate<span>genius</span></a>
			</h1>
			<div class="social-icons">
				<?php if (get_field('facebook_link','options')) { ?>
					<a href="#" title="Facebook" target="_blank"><i class="fa fa-facebook-f"></i></a>
				<?php } ?>
				<?php if (get_field('instagram_link','options')) { ?>
					<a href="#" title="Instagram" target="_blank"><i class="fa fa-instagram"></i></a>
				<?php } ?>
				<?php if (get_field('youtube_link','options')) { ?>
					<a href="#" title="Youtube" target="_blank"><i class="fa fa-youtube-play"></i></a>
				<?php } ?>
			</div>
		</div>
	</header>