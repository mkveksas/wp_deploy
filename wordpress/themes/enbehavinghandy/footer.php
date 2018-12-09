<?php

/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package PWD Default Theme
 * @since PWD Default Theme 1.0
 */

?>

<?php  if( pwd_get_option('tagline') && is_front_page()){ ?>
<div id="tagline" class="site-tagline"><div class="container"> <?php echo pwd_get_option('tagline'); ?></div></div>
<?php } ?>
</div><!-- #main .site-main -->
<footer class="site-footer" role="contentinfo"><div class="footer-content"><div id="footer-sidebar"><div class="container"><div class="row"> <?php dynamic_sidebar( 'sidebar-footer' ); ?></div><hr><div class="row"> <?php dynamic_sidebar('sidebar-footer-2' ); ?></div></div></div></div><div class="footer-info"><div class="container"><div class="row"><div class="col-md-6"><div class="site-copyright"> <?php do_action( 'pwd_copyright' ); ?> <?php if(pwd_get_option('page_on_privacy')){ ?><a href="<?php echo get_permalink(pwd_get_option('page_on_privacy') ); ?>"><?php echo get_the_title(pwd_get_option('page_on_privacy') ); ?></a><?php } ?><br> <?php wp_nav_menu( array( 'theme_location' => 'footer', 'menu_class'=>'menu-footer list-inline pull-left', 'container' => 'ul','fallback_cb' => '', ) ); ?></div></div><div class="col-md-6 "><div class="site-info"> <?php //if( function_exists('pwd_footer_v2')){ pwd_footer_v2(); } <p><span>Website by </span> <a href="https://www.digitalmonopoly.com.au" id="dmlogo" target="_blank">DigitalMonopoly</a></p>?></div></div></div></div></div></footer>
<?php wp_footer(); ?>
<script type="text/javascript">
    for(var i = 0; i < afterJQ.length; i++) afterJQ[i]();
</script>
</body>
</html>