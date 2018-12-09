<!--/ Start CTA Container /-->
<div id = "cta-masonry"  class="page-section">
  <div class="container"> 
    <div class="custom-cta-masonry" class="custom-cta 1">

      <?php

      $args = array(
       'post_type'		 	=> 'service',
       'orderby' 			=> 'menu_order',
       'order'				=> 'ASC',
       'posts_per_page' 	=> 8
       );
      $the_query = new WP_Query( $args );

      if($the_query->post_count>0){

       $i		= 0;
       $col 	= 3;

       while ($the_query->have_posts()) : $the_query->the_post(); ?>

       <div class="item col-md-3 col-sm-6 <?php echo get_post_meta(get_the_id(),'col-md-',true ); ?> col-sm-<?php echo get_post_meta(get_the_id(),'col-sm-',true );  ?>">
         <div class="featured-list">
          <div class="container-fluid">
            <div class="row">
              <div class="col-md-3">
                <a href="<?php the_permalink(); ?>" title="<?php the_title_attribute( 'echo=0' ); ?>" rel="bookmark">
                  <i class="fa <?php echo get_post_meta(get_the_id(),'pwd_fa_icon','true' ); ?>"></i>
                </a>
              </div>

              <div class="col-md-9 nopadding">
                <h2 class="featured-list-title"><a href="<?php the_permalink(); ?>" title="<?php the_title_attribute( 'echo=0' ); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
                <div class="featured-list-summary">
                  <?php the_excerpt(); ?>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <?php

      endwhile;

    } 
    wp_reset_postdata();
    ?>
  </div>
</div>

<script type="text/javascript">

  jQuery(document).ready(function($) {

    var $container = $('.custom-cta-masonry');

    $container.imagesLoaded( function() {
      $container.masonry({
       // columnWidth: 200,
        itemSelector: '.item'
      });
    });


  });

</script> 



</div>
<!--/ ENDCTA Container /--> 

