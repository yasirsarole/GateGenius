<?php
/*
* Template for pdf and youtube links
* Template Name: Download Links
*/
get_header();
?>
<main class="website-main">
  <div class="wrapper">
		<div class="download-main">
			<h2><?php echo get_the_title(); ?></h2>
			<?php
				if( have_rows('link_type') ):
					while ( have_rows('link_type') ) : the_row();
							if( get_row_layout() == 'question_paperssolution' ):
			?>
			<div class="paper-solution">
				<h3 class="semester"><?php echo get_sub_field('semester'); ?></h3>
				<?php
				if( have_rows('papers') ):
					while ( have_rows('papers') ) : the_row();
				?>
				<div class="subject-info">
					<span class="subject-name"><?php echo get_sub_field('subject_name') ?></span>
					<?php if (get_sub_field('paper')) { ?>
					<a href="<?php echo get_sub_field('paper'); ?>" title="Paper" class="question-paper" target="_blank">
					question paper
					</a>
					<?php } ?>
					<?php if (get_sub_field('solution')) { ?>
					<a href="<?php echo get_sub_field('solution'); ?>" title="Solution" class="solution-paper" target="_blank">
					solution
					</a>
					<?php } ?>					
				</div>
				<?php	
					endwhile;
				endif;
				?>				
			</div>
			<?php	elseif( get_row_layout() == 'notes' ): ?>
			<?php elseif( get_row_layout() == 'youtube'): ?>
			<?php
							endif;
					endwhile;
				endif;
			?>
		</div>
  </div>
</main>
<?php get_footer(); ?>