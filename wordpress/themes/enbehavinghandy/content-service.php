<?php
/**
 * The template used for displaying page content in single-service.php
 *
 * @package PWD Default Theme
 * @since PWD Default Theme 1.0
 */
?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
  <div class="thumbnail">
        <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute( 'echo=0' ); ?>" rel="bookmark">
          <?php
          if ( has_post_thumbnail() ) {
            the_post_thumbnail('thumbnail',array('class'=>'img-responsive'));
        }
        else {
            echo '<img alt="file name" src="' . get_bloginfo( 'stylesheet_directory' ) . '/images/thumbnail-default.png"  class="img-responsive"/>';
        }
        ?>
    </a>
</div>      
<header class="entry-header">
  <h3 class="entry-title">
  <?php if(get_post_meta(get_the_ID(),'pwd_test_image_2', true)){ ?>
                <img  src="<?php echo get_post_meta(get_the_ID(),'pwd_test_image_2', true); ?>" alt="<?php the_title_attribute(); ?>">
                <?php }else{ ?>
                <i class="fa <?php echo get_post_meta(get_the_id(),'pwd_fa_icon','true' ); ?>"></i>
                <?php } ?>
                <?php the_title(); ?></h3>
</header><!-- .entry-header -->
<div class="entry-content">
  <?php the_excerpt(); ?>
<a class="readmore" href="<?php the_permalink() ?>">Read More</a>
</div><!-- .entry-content -->
</article><!-- #post-<?php the_ID(); ?> -->
