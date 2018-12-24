<?php global $question_counter; ?>
<?php
  if(get_sub_field('a')){
    $correctAnswer = 'A';
  }else if(get_sub_field('b')){
    $correctAnswer = 'B';
  } else if(get_sub_field('c')){
    $correctAnswer = 'C';
  } else if(get_sub_field('d')){
    $correctAnswer = 'D';
  }

  if(get_sub_field('one')){
    $questionMark = 1;
  } else if(get_sub_field('two')){
    $questionMark = 2;
  }
?>
<div class="main-section mcq-type invisible" data-question-id="<?php echo 'question-id-'.$question_counter; ?>" data-correct-answer="<?php echo $correctAnswer; ?>" data-question-marks="<?php echo $questionMark; ?>" data-marks-scored="0">
  <div class="questype-marks">
    <span class="question-type-name">Question Type : MCQ</span>
    <span class=negative-marks>Marks for correct answer <span class="positive">1</span> | Negative Marks <span class="negative">1/3</span></span>
  </div>
  <div class="question-number clearfix">
    <span class="question-no">Question No. 1</span>
    <figure class="arrow-down">
      <img src="../wp-content/themes/gategenius/assets/images/arrow-down.png" alt="Arrow Down">
    </figure>
  </div>
  <div class="qna-section clearfix">
    <div class="wysiwyg-content">
    <?php echo wpautop(get_sub_field('question_input_mcq')); ?>
    </div>
    <div class="ans-options">
      <div class="input-container input-one">
        <input type="checkbox" name="A" id="first" value="A">
        <label for="first">A</label>
      </div>
      <div class="input-container input-two">
        <input type="checkbox" name="B" id="second" value="B">
        <label for="second">B</label>    
      </div>
      <div class="input-container input-three">
        <input type="checkbox" name="C" id="third" value="C">
        <label for="third">C</label>    
      </div>
      <div class="input-container input-four">
        <input type="checkbox" name="D" id="fourth" value="D">
        <label for="fourth">D</label>                          
      </div>
    </div>
    <figure class="arrow-up">
      <img src="../wp-content/themes/gategenius/assets/images/arrow-up.png" alt="Arrow Up">
    </figure>	    
  </div>
</div>
<?php $question_counter++; ?>