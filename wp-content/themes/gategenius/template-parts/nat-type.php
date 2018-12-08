<div class="main-section nat-type">
  <div class="questype-marks">
		<span class="question-type-name">Question Type : MCQ</span>
		<?php
			if (get_sub_field('one') === true) {
				$marks = 1;
			} elseif (get_sub_field('two') === true) {
				$marks = 2;
			}
		?>
    <span class=negative-marks>Marks for correct answer <span class="positive"><?php echo $marks; ?></span> | Negative Marks <span class="negative"><?php echo $marks; ?>/3</span></span>
  </div>
  <div class="question-number clearfix">
    <span class="question-no">Question No. 1</span>
    <figure class="arrow-down">
      <img src="../wp-content/themes/gategenius/assets/images/arrow-down.png" alt="Arrow Down">
    </figure>
  </div>
  <div class="qna-section clearfix">
    <div class="wysiwyg-content">
    <?php echo wpautop(get_sub_field('question_input_nat')); ?>
    </div>
    <div class="answer-field">
		<input type="text" class="input-answer" id="myinputbox">
		<div class="numeric-keyboard">
			<span class="backspace">backspace</span>
			<ul class="numbers">
				<li>7</li>
				<li>8</li>
				<li>9</li>
				<li>4</li>
				<li>5</li>
				<li>6</li>
				<li>1</li>
				<li>2</li>
				<li>3</li>
				<li>0</li>
				<li>.</li>
				<li>-</li>
			</ul>
			<div class="arrows">
				<span class="back-arrow"><i class="fa fa-long-arrow-left" aria-hidden="true"></i></span>
				<span class="forward-arrow"><i class="fa fa-long-arrow-right" aria-hidden="true"></i></span>
			</div>
			<span class="clear-all">clear all</span>
		</div>		
	</div>
	<figure class="arrow-up">
      <img src="../wp-content/themes/gategenius/assets/images/arrow-up.png" alt="Arrow Up">
	</figure>
  </div>
</div>