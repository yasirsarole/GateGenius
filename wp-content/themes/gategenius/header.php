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
	<header class="main-header">
		<div class="wrapper clearfix">	
			<h1 class="main-logo">
				<a href="<?php echo get_home_url(); ?>" title="Home">gate<span>genius</span></a>
			</h1>
			<div class="social-icons">
				<a href="#" title="Facebook" target="_blank"><i class="fab fa-facebook-f"></i></a>
				<a href="#" title="Instagram" target="_blank"><i class="fab fa-instagram"></i></a>
				<a href="#" title="Youtube" target="_blank"><i class="fab fa-youtube"></i></a>
			</div>
		</div>
	</header>