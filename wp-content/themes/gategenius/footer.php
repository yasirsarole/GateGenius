<?php
/* Footer file for GateGenius */
?>

<footer class="main-footer clearfix" role="contentinfo">
  <div class="wrapper">
    <span class="quick-link">quick links:</span>
    <div class="footer-menus">
      <?php wp_nav_menu(array( 'theme_location' => 'footer-menu1' )); ?>
      <?php wp_nav_menu(array( 'theme_location' => 'footer-menu2' )); ?>
    </div>
    <div class="bottom-info">    
      <p class="copy">
        <?php echo get_field('copyright_content','options'); ?>
        <a href="<?php echo get_field('redirect_url','options'); ?>" title="GateGenius">GateGenius</a>
      </p>
      <p class="developer">designed and developed by: <a href="https://www.linkedin.com/in/yasir-sarole-364864aa/" title="Developer" target="_blank">yasir sarole</a></p>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>