<?php

/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * @package PWD Default Theme
 * @since PWD Default Theme 1.0
 */

get_header(); ?>

<div <?php post_class('single-page'); ?> itemscope itemtype="http://schema.org/Article">
 <header class="page-header has-breadcrumbs">
    <h1 class="entry-title" itemprop="name"><?php the_title(); ?></h1>
    <div class="breadcrumbs"><?php if(function_exists('bcn_display')){ bcn_display(); }?></div>
</header><!-- .entry-header -->
<div class="container">
    <div class="row">
        <div class="col-md-9 col-sm-9">
            <div id="content" role="main">
                <?php while ( have_posts() ) : the_post(); ?>
                 <article id="post-<?php the_ID(); ?>" >
                    <div class="entry-content" itemprop="description">
                        <?php the_content(); ?>
                        <?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'Pages:', 'pwd' ), 'after' => '</div>' ) ); ?>
                        <?php edit_post_link( __( 'Edit', 'pwd' ), '<span class="edit-link">', '</span>' ); ?>
                    </div><!-- .entry-content -->
                </article><!-- #post-<?php the_ID(); ?> -->
                <?php comments_template( '', true ); ?>
            <?php endwhile; // end of the loop. ?>
        </div><!-- #content .site-content -->
    </div>
    <div class="col-md-3 col-sm-3 hidden-xs">
        <?php get_sidebar('page'); ?>
    </div>
</div>
</div>
</div>
<?php get_footer(); ?>