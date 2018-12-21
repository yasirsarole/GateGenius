<?php
/*
* Template for conducting Test
* Template Name: Test
*/
get_header();
?>
<?php if (is_user_logged_in()) { ?>
<main class="website-main">
  <div class="top-inst">
    <div class="wrapper">
      <span class="test-name">ME-Mechanical Engineering 2018</span>
      <div class="paper-instructions">
        <a href="#" class="question-paper">question paper</a>
        <a href="#" class="instructions">instructions</a>
      </div>
    </div>
	</div>
	<div class="top-exam-info">
		<div class="wrapper">
			<div class="left-info">
				<div class="calculator-parent">
					<div class="arrow-section">
						<span class="subject-info">mechanical engineeri...</span>
					</div>
					<div class="calculator">
						<a href="#" class="calculator-link" title="Calculator"></a>
						<div class="scientific-calculator">  
							<iframe src="https://www.tcsion.com/OnlineAssessment/ScientificCalculator/Calculator.html" frameborder="0"></iframe>
						</div>
					</div>
				</div>
				<div class="time-parent clearfix">
					<span class="section">section</span>
					<div class="time-left">
						<?php
							$time = 5; 
							$time = sprintf("%02d", $time)
						?>
						<span class="time">time left : </span>
						<span class="actual-left"></span>       
					</div>
				</div>
				<div class="paper-types">
					<ul class="papers">
						<?php $count = 0; ?>
						<?php
							if( have_rows('paper_types') ):
								while ( have_rows('paper_types') ) : the_row();
								$paperName = get_sub_field('paper_name');
								$count++;
						?>
						<li class="paper-name" data-id="<?php echo 'type'.$count ?>" data-active=""><span><?php echo $paperName; ?></span></li>	
						<?php
								endwhile;
							endif;
						?>
					</ul>
				</div>
			</div>
			<div class="right-info">
				<?php
					$userName = wp_get_current_user()->data->display_name;
				?>  
				<figure class="student-top-image">
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
				<span class="student-top-name"><?php echo $userName; ?></span>
			</div>
		</div>
	</div>
	<div class="qna-section-main" data-papertype-active="">
		<?php $counter = 0; ?>
		<div class="wrapper">
			<?php
				if( have_rows('paper_types') ):
					while ( have_rows('paper_types') ) : the_row();
					$counter++;
			?>
				<div class="exam-types" data-target="<?php ?>">
					<div class="status-info-mobile"></div>
					<div class="question-type" data-target="<?php echo 'type'.$counter; ?>">					
						<?php
						if( have_rows('question_type') ):
							while ( have_rows('question_type') ) : the_row();
									if( get_row_layout() == 'multiple_choice' ):
										get_template_part('template-parts/mcq', 'type');
									elseif( get_row_layout() == 'nat' ): 
										get_template_part('template-parts/nat', 'type');
									endif;
							endwhile;
						endif;
						?>
					</div>
					<div class="exam-status">
						<span class="slide-button"></span>
						<div class="status-info">
							<span class="answered">Answered</span>
							<span class="not-answered">Not Answered</span>
							<span class="not-visited">Not Visited</span>
							<span class="mark-review">Marked for Review</span>
							<span class="answered-and-marked">Answered & Marked for Review (will be considered for evaluation)</span>
						</div>
						<span class="subject-title">Dynamic Subject Name</span>
						<div class="choose-question-container">
							<span class="choose-question">Choose a Question</span>
							<ul class="status-images">
								<div class="question-status status-info">
								<?php
								if( have_rows('question_type') ):
									$count = 1;
									while ( have_rows('question_type') ) : the_row();
								?>
									<span class="not-answered" data-before-content="<?php echo $count; ?>"></span>
								<?php
									$count++;		
									endwhile;
								endif;
								?>
								</div>
							</ul>							
						</div>
					</div>
					<div class="save-next-parent">
						<div class="left-buttons">
							<a href="#" class="mark-review" title="Mark for Review & Next">Mark for Review & Next</a>
							<a href="#" class="clear-res" title="Clear Response">Clear Response</a>
							<a href="#" class="save-next" title="Save & Next">Save & Next</a>
						</div>
						<div class="submit-section">
							<a href="#" class="submit" title="You are not required to click on 'Submit' button. The system will auto submit the test at the end">Submit</a>
						</div>
					</div>
				</div>							
			<?php
					endwhile;
				endif;
			?>
		</div>		
	</div>	
</main>
<?php } else {
  $homeUrl = get_home_url().'/login';
  header("Location: $homeUrl");
  die();
} ?>
<?php get_footer(); ?>