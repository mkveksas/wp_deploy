<?php
/**
 * Template Name: Testimonials
 *
 * This is the template that displays Full-width pages.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package PWD Default Theme
 * @since PWD Default Theme 1.0
 */

get_header(); ?>

<header class="page-header has-breadcrumbs">
	<div class="container" itemscope itemtype="http://schema.org/Article">
		<h1 class="entry-title" itemprop="name"><?php the_title(); ?></h1>
		<div class="breadcrumbs"><?php if(function_exists('bcn_display')){ bcn_display(); }?></div>
	</div>
</header>
<div class="container">
	<div class="row">
		<div class="col-md-9 col-sm-9">
			
			<?php while ( have_posts() ) : the_post(); ?>
				<?php get_template_part( 'content', 'page' ); ?>
			<?php endwhile; // end of the loop. ?>

			<?php 
			$args = array(
				'post_type' 		=> 'testimonial',
				'orderby' 			=> 'menu_order',
				'order'				=> 'ASC',
				'posts_per_page' 	=> -1
				);

			$the_query = new WP_Query( $args );
			?>

			<?php if ( $the_query->have_posts() ) : ?>
				
				<div id="faq-accordion" class="testimonial-accordion">
					<?php while ( $the_query->have_posts() ) : $the_query->the_post(); ?>
						<h3><i class="fa fa-quote-left"></i> <?php the_title( ); ?> <i class="fa fa-angle-down"></i><i class="fa fa-angle-up"></i></h3>
						<div><i class="fa fa-quote-left"></i><?php the_content( ); ?><i class="fa fa-quote-right"></i></div>
					<?php endwhile; ?>
				</div>

				<script type="text/javascript">

					jQuery(document).ready(function($) {

						$('#faq-accordion').accordion({
							heightStyle: "content"
						});

					});

				</script> 

			<?php endif;  ?>
			<?php wp_reset_postdata(); ?>
		</div>
		<div class="col-md-3 col-sm-3 hidden-xs">
			<?php get_sidebar('page'); ?>
		</div>
	</div>
</div>

<?php get_footer(); ?>