<?php

/**
 * The Template for displaying all single posts.
 *
 * @package PWD Default Theme
 * @since PWD Default Theme 1.0
 */


get_header(); ?>

<div class="container" >
	<div class="page-header page-for-posts-header  has-breadcrumbs">
				<div class="entry-title"><?php echo get_the_title(get_option('page_for_posts')); ?></div>
				<div class="breadcrumbs"><?php if(function_exists('bcn_display')){ bcn_display(); }?></div>
			</div><!-- .entry-header -->
	<div class="row">
		<div class="col-md-8 col-sm-8">
			<div id="content" class="site-content archive-content" role="main">
				<?php while ( have_posts() ) : the_post(); ?>
					<?php get_template_part( 'content', 'single' ); ?>
					<?php pwd_content_nav( 'nav-below' ); ?>
					<?php
					// If comments are open or we have at least one comment, load up the comment template
					if ( comments_open() || '0' != get_comments_number() )
						comments_template( '', true );
					?>
				<?php endwhile; // end of the loop. ?>
			</div><!-- #content .site-content -->
		</div><!-- .col-md-9  -->
		<div class="col-md-4 col-sm-4">
			<?php get_sidebar(); ?>
		</div><!-- col-md-4 -->
	</div><!-- .row -->
</div>

<?php get_footer(); ?>