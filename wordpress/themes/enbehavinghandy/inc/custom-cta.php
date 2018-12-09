<!--/ Start CTA Container /-->
<div id="cta" class="page-section">
	<div class="cta-container">
		<div class="container"> 
			<div class="custom-cta row">

				<?php

				$args = array(
					'post_type'		 	=> 'cta',
					'orderby' 			=> 'menu_order',
					'order'				=> 'ASC',
					'posts_per_page' 	=> 3
					);

				$the_query = new WP_Query( $args );

				if($the_query->post_count>0){

					$i		= 0;
					$col 	= 3;

					while ($the_query->have_posts()) : $the_query->the_post(); ?>
					<div class="col-md-<?php echo  12/$col; ?> col-sm-<?php echo  12/$col; ?>">
						<div class="featured-list">
							<div class="container-fluid">
								<div class="row">
									<div class="col-md-3">
										
											<?php if(has_post_thumbnail()){ ?>
											<?php the_post_thumbnail(); ?>
											<?php }else{ ?>
											<i class="fa <?php echo get_post_meta(get_the_id(),'pwd_fa_icon','true' ); ?>"></i>
											<?php } ?>
										
									</div>

									<div class="col-md-9 nopadding">
										<div class="featured-list-title">
											
												<?php the_title(); ?>
											
										</div>
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
	</div>
	<!--/ ENDCTA Container /--> 
</div>
