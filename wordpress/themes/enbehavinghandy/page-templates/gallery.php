<?php
/**
 * Template Name: Galleries
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
	<div id="content" role="main">
		<?php while ( have_posts() ) : the_post(); ?>
			<?php get_template_part( 'content', 'page' ); ?>
		<?php endwhile; // end of the loop. ?>

		<div id="gallery-filter">
			<div class="mixitup" role="main">
				<div class="control-bar sandbox-control-bar clearfix">
					<ul class="nav  nav-pills ">
						<li role="presentation"  ><a href="#" class="filter active" data-filter="all">All</a></li>
						<?php
						$terms = get_terms( 'gallery_category' );
						if ( ! empty( $terms ) && ! is_wp_error( $terms ) ){
							foreach ( $terms as $term ) {	
								echo ' <li role="presentation"  ><a href="#" class="filter" data-filter=".item-type-'.$term->slug.'">'.$term->name.'</a></li>';
							}
						}
						?>
					</ul>
				</div>
				<?php
				$i = 1;		
				$args = array(
					'post_type' => 'gallery',
					'posts_per_page' => -1,
					);
				$gallery_query = new WP_Query( $args );

				if ( $gallery_query->have_posts() ) {
					echo '<div class="items-filter items row">';
					while ( $gallery_query->have_posts() ) { $gallery_query->the_post();
						$gallery_categorys = get_the_terms( get_the_id(), 'gallery_category' );
						$gallery_filter =  "";
						if ( ! empty( $gallery_categorys ) && ! is_wp_error( $gallery_categorys ) ){
							foreach ( $gallery_categorys as $gallery_category ) {	
								$gallery_filter .=' item-type-'.$gallery_category->slug;
							}
						} 
						?>
						<div class="<?php echo $hidden_items; ?>col-sm-3 col-md-3 mix <?php echo $gallery_filter; ?>">
							<div class="item item-gallery">
								<a class="item-thumbnail" href="<?php the_permalink(); ?>">
									<?php
									if ( has_post_thumbnail() ) {
										the_post_thumbnail('gallery',array('class'=>'img-responsive'));
									}
									else {
										echo '<img class="img-responsive" alt="file name" src="' . get_bloginfo( 'stylesheet_directory' ) . '/images/thumbnail-default.png" />';
									}
									?>
								</a>
								<div class="caption">
									<h3 class="title"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
								</div>
							</div>
						</div>
						<?php
					}
					echo '</div>';
				}
				wp_reset_postdata();
				?>
			</div>
			<script type="text/javascript">
				jQuery(document).ready(function($) {
					$('.mixitup').mixItUp(
					{
						animation: {
							duration: 400,
							effects: 'fade stagger(0ms) scale(0.39)',
							easing: 'cubic-bezier(0.39, 0.575, 0.565, 1)'
						}
					}
					); 
				});

			</script>
		</div>
	</div><!-- #content -->
</div>
</div>

<?php get_footer(); ?>