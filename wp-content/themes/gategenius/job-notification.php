<?php
/*
* Template for Jobs
* Template Name: Job Notification
*/
get_header();
?>

<div class="job-container">
	<?php $title = (get_field('job_table_title') ? get_field('job_table_title') : 'Available Jobs Details'); ?>
	<h3 class="title"><?php echo $title; ?></h3>
	<?php if(have_rows('jobs')) { $job_count = 1; ?>
		<ul class="job job-list">
			<li class="job label srno">Sr. No.</li>
			<li class="job label start date">Post Date</li>
			<li class="job label name">Post Name</li>
			<li class="job label last date">Last Date</li>
			<li class="job label link">More Information</li>
			<li class="job label status">Status</li>
		<?php while(have_rows('jobs')) { the_row(); ?>
			<li class="job srno"><?php echo $job_count; ?></li>
			<li class="job start date"><?php echo get_sub_field('job_post_date'); ?></li>
			<li class="job name"><?php echo get_sub_field('post_name'); ?></li>
			<li class="job last date"><?php echo get_sub_field('last_date'); ?></li>
			<li class="job link"><a href="<?php echo get_sub_field('job_link'); ?>" target="_blank">Get Details</a></li>
			<li class="job status <?php echo get_sub_field('status') ? 'available' : 'not-available';?>"><?php echo get_sub_field('status') ? 'Available' : 'NA'; ?></li>
		<?php $job_count++; } ?>
		</ul>
	<?php } ?>
</div>
<?php get_footer(); ?>