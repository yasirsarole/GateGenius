<?php
/* Footer file for GateGenius */
?>

<footer class="main-footer clearfix" role="contentinfo">
  <div class="wrapper">
    <p class="copy">
      <?php echo get_field('copyright_content','options'); ?>
      <a href="<?php echo get_field('redirect_url','options'); ?>" title="GateGenius">GateGenius</a>
    </p>
    <p class="developer">designed and developed by: <a href="https://www.linkedin.com/in/yasir-sarole-364864aa/" title="Developer" target="_blank">yasir sarole</a></p>
  </div>
</footer>

<?php wp_footer(); ?>
</body>