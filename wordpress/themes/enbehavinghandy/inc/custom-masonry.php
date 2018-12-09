<!--/ Start CTA Container /-->
<div id = "masonry"  class="page-section">

	<div class="container-fluidx"> 
		<div class="custom-masonry">

			<?php

			$args = array(
				'post_type'          => 'service',
				'orderby'            => 'menu_order',
				'order'              => 'ASC',
				'posts_per_page'     => 12,
				// 'meta_query' => array(
				// 	array(
				// 		'key' => 'featured',
				// 		'value' => '1',
				// 		'compare' => '=='
				// 		)
				// 	)
				);

			$the_query = new WP_Query( $args );

			if($the_query->post_count>0){

				while ($the_query->have_posts()) : $the_query->the_post(); ?>
				
				<?php  $layout =  get_field('image_layout'); ?>

				<?php switch ($layout) { 

					case 'horizontal':  ?>

					<div class="post-grid nopadding  item-2 col-sm-6 col-xs-12 stamp ">
						<div class="thumbnail">

							<?php
							if ( has_post_thumbnail() ) {
								the_post_thumbnail('horizontal',array('class'=>'img-responsive'));
							}
							?>

							<div class="caption">
								<div class="caption-content">
									<div class="icon"><i class="fa fa-file-image-o"></i></div>
									<h3><?php the_title( ); ?></h3>
									<?php the_excerpt(); ?>
									<p><a href="<?php the_permalink(); ?>" class="btn-link">Read more</a></p>
								</div>
							</div>
						</div> 

					</div>

					<?php 		break;  

					case 'vertical':  ?>

					<div class="post-grid item nopadding item-1 col-sm-3 col-xs-6  ">
						<div class="thumbnail">

							<?php
							if ( has_post_thumbnail() ) {
								the_post_thumbnail('vertical',array('class'=>'img-responsive'));
							}
							?>

							<div class="caption">
								<div class="caption-content">
									<div class="icon"><i class="fa fa-file-image-o"></i></div>
									<h3><?php the_title( ); ?></h3>
									<?php the_excerpt(); ?>
									<p><a href="<?php the_permalink(); ?>" class="btn-link">Read more</a></p>
								</div>
							</div>
						</div> 

					</div>

					<?php break;  ?>


					<?php 	default:  ?>

					<div class="post-grid item nopadding item-1 col-sm-3 col-xs-12 ">
						<a class="thumbnail-link" href="<?php the_permalink() ?>" title="<?php the_title_attribute(); ?>">
						<div class="thumbnail view-first">
							
								<?php
								if ( has_post_thumbnail() ) {
									the_post_thumbnail('grid',array('class'=>'img-responsive'));
								}
								?>
							
							<div class="caption">
								<div class="caption-content">
									<div class="icon">
										<?php if(get_post_meta(get_the_ID(),'pwd_test_image', true)){ ?>
										<img src="<?php echo get_post_meta(get_the_ID(),'pwd_test_image', true); ?>" alt="<?php the_title_attribute(); ?>">
										<?php }else{ ?>
										<i class="fa fa-file-image-o"></i>
										<?php } ?>
									</div>
									<div class="info">
									<h3 class="title"><?php the_title( ); ?></h3>
									<?php //the_excerpt(); ?>
									<a class="readmore" href="<?php the_permalink() ?>">Read More</a>
									</div>
								</div>
							</div>
						</div>
						</a>
					</div>

					<?php 		break;  
				} ?>
				
				

				<?php

				endwhile;

			} 
			wp_reset_postdata();
			?>




		</div>
	</div>

	<script type="text/javascript">
afterJQ.push( function() { 
		jQuery(document).ready(function($) {

			var $container = $('.custom-masonry');

			$container.imagesLoaded( function() {
				$container.masonry({
					columnWidth: '.item',
					itemSelector: '.item'
				});

				$stamp =$container.find('.stamp');

				$container.masonry( 'stamp', $stamp );

				$container.masonry('layout');


			});


			$('.post-grid').hover(function() {
				$(this).find('.icon').addClass('animated fadeOutUp');
			}, function() {
				$(this).find('.icon').removeClass('animated fadeOutUp');
			});

			$('.post-grid').hover(function() {
				$(this).find('.info').addClass('animated fadeOutDown');
			}, function() {
				$(this).find('.info').removeClass('animated fadeOutDown');
			});


			


		});
});
	</script> 


</div>
<!--/ ENDCTA Container /--> 

