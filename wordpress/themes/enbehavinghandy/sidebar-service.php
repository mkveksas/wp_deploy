<?php
/**
 * The Sidebar containing the main widget areas.
 *
 * @package PWD Default Theme
 * @since PWD Default Theme 1.0
 */
?>
<div id="sidebar" class="widget-area" role="complementary">
	<?php do_action( 'before_sidebar' ); ?>


	<div class="service-menu">
		
		<?php
		$args = array(
			'post_type' 		=> 'service',
			'orderby' 		=> 'menu_order',
			'order'			=> 'ASC',
			'posts_per_page' 	=> -1
			);

		$the_query = new WP_Query( $args );

		if ( $the_query->have_posts() ) : ?>

		<?php while ( $the_query->have_posts() ) : $the_query->the_post();

		$image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), 'medium');
		?>

		<div class="list" style="background:url(<?php echo $image[0]; ?>)  no-repeat scroll center center  transparent; ">
			<a href="<?php the_permalink(); ?>" title="<?php the_title_attribute( 'echo=0' ); ?>" rel="bookmark">
				<div class="featured">
					<div class="row">
						<div class="col-md-4">
							<div class="icon">
								<?php if(get_post_meta(get_the_ID(),'pwd_test_image', true)){ ?>
								<img src="<?php echo get_post_meta(get_the_ID(),'pwd_test_image', true); ?>" alt="<?php the_title_attribute(); ?>">
								<?php }else{ ?>
								<i class="fa <?php echo get_post_meta(get_the_id(),'pwd_fa_icon','true' ); ?>"></i>
								<?php } ?>
							</div>
						</div>
						<div class="col-md-8 nopadding">
							<h3 class="title"><?php the_title(); ?></h3>
						</div>
					</div>
				</div>
			</a>
		</div>

	<?php endwhile; ?>
<?php endif; ?>

<?php wp_reset_postdata();?>

</div>

</div>
<!-- #secondary .widget-area --> 
