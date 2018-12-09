<?php
/**
 * Template Name: Services
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

<div class="single-page" <?php post_class(); ?> itemscope itemtype="http://schema.org/Article">

	<header class="page-header has-breadcrumbs">
		<h1 class="entry-title" itemprop="name"><?php the_title(); ?></h1>
		<div class="breadcrumbs"><?php if(function_exists('bcn_display')){ bcn_display(); }?></div>
	</header><!-- .entry-header -->

	<div class="container">

		<div class="row">
		<div class="col-md-8 col-sm-8">
			<div id="content" role="main">
			<div class="row">
				<?php while ( have_posts() ) : the_post(); ?>
					<?php get_template_part( 'content', 'page' ); ?>
				<?php endwhile; // end of the loop. ?>

				<?php 
				
				$args = array(
					'post_type' 		=> 'service',
					'orderby' 			=> 'menu_order',
					'order'				=> 'ASC',
					'posts_per_page' 	=> -1
					);
				
				$the_query = new WP_Query( $args );

				if ( $the_query->have_posts() ) :
					echo '<div class="row">';
					while ( $the_query->have_posts() ) : $the_query->the_post();
						echo '<div class="col-md-4 col-sm-4">';
						get_template_part( 'content','service');
						echo '</div>';
					endwhile;
					echo '</div>';
				endif; 
				wp_reset_postdata();
				?>
				</div>

			</div><!-- #content -->
		</div>
	
		<div class="col-md-4 col-sm-4">
			<div id="sidebar" class="widget-area" role="complementary">
	<?php do_action( 'before_sidebar' ); ?>
	<?php dynamic_sidebar( 'sidebar-service' ); ?>
			</div>
		</div>
	</div>
</div>
</div>

<?php get_footer(); ?>