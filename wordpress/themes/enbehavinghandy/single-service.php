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

<div class="single-page" <?php post_class(); ?> itemscope itemtype="http://schema.org/Article">

    <header class="page-header has-breadcrumbs">
        <h1 class="entry-title" itemprop="name"><?php the_title(); ?></h1>
        <div class="breadcrumbs"><?php if(function_exists('bcn_display')){ bcn_display(); }?></div>
    </header><!-- .entry-header -->

    <div class="container">

        <div class="row">

            <div class="col-md-8 col-sm-8 test">

               <div id="content" class="site-content" role="main">

                <?php while ( have_posts() ) : the_post(); ?>
                    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

                        <div class="entry-content">
                            <?php the_content(); ?>
                        </div><!-- .entry-content -->

                      

                    </article><!-- #post-<?php the_ID(); ?> -->
                <?php endwhile; ?>
				   <?php if (is_single( 224 )) { ?>
				<div id="widget-container" class="ekomi-widget-container ekomi-widget-sf1220085bf3bbaf10756"></div> <script type="text/javascript"> (function (w) { w['_ekomiWidgetsServerUrl'] = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//widgets.ekomi.com'; w['_customerId'] = 122008; w['_ekomiDraftMode'] = true; w['_language'] = 'en'; if(typeof(w['_ekomiWidgetTokens']) !== 'undefined'){ w['_ekomiWidgetTokens'][w['_ekomiWidgetTokens'].length] = 'sf1220085bf3bbaf10756'; } else { w['_ekomiWidgetTokens'] = new Array('sf1220085bf3bbaf10756'); } if(typeof(ekomiWidgetJs) == 'undefined') { ekomiWidgetJs = true; var scr = document.createElement('script');scr.src = 'https://sw-assets.ekomiapps.de/static_resources/widget.js'; var head = document.getElementsByTagName('head')[0];head.appendChild(scr); } })(window); </script>
				   <?php } ?>
            </div><!-- #content .site-content -->

        </div><!-- .col-md-8 -->

        <div class="col-md-4 col-sm-4">
            <?php get_sidebar('service'); ?>
        </div><!-- col-md-4 -->

    </div><!-- .row -->
</div><!-- .containe -->
</div>

<?php get_footer(); ?>