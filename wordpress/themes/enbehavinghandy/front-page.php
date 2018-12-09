<?php

/**
 * The template for displaying front page.
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
<?php get_template_part( 'inc/custom', 'cta' ); ?>
<?php get_template_part( 'inc/custom', 'masonry' ); ?>
<div id="front-page" class="front-content" role="main">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<?php while ( have_posts() ) : the_post(); ?>
					<?php the_content(); ?>
				<?php endwhile; // end of the loop. ?>
			</div>
		</div>
	</div>
</div> <!-- #front-page .site-content -->
<?php //get_template_part( 'inc/custom', 'service-carousel' ); ?>
<?php //get_template_part( 'inc/custom', 'cta-masonry' ); ?>
<?php //get_template_part( 'inc/custom', 'service-icon' ); ?>
<?php //get_template_part( 'inc/custom', 'service-list' ); ?>
<?php //get_template_part( 'inc/custom', 'service-tabs' ); ?>
<?php //get_template_part( 'inc/custom', 'product-filter' ); ?>
<?php get_template_part( 'inc/custom', 'clients' ); ?>
<?php get_template_part( 'inc/custom', 'testimonial' ); ?>
<div class="page-section">
		<div class="container">
<div id="widget-container" class="ekomi-widget-container ekomi-widget-sf1220085bf3bbaf00de4"></div> <script type="text/javascript"> (function (w) { w['_ekomiWidgetsServerUrl'] = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//widgets.ekomi.com'; w['_customerId'] = 122008; w['_ekomiDraftMode'] = true; w['_language'] = 'en'; if(typeof(w['_ekomiWidgetTokens']) !== 'undefined'){ w['_ekomiWidgetTokens'][w['_ekomiWidgetTokens'].length] = 'sf1220085bf3bbaf00de4'; } else { w['_ekomiWidgetTokens'] = new Array('sf1220085bf3bbaf00de4'); } if(typeof(ekomiWidgetJs) == 'undefined') { ekomiWidgetJs = true; var scr = document.createElement('script');scr.src = 'https://sw-assets.ekomiapps.de/static_resources/widget.js'; var head = document.getElementsByTagName('head')[0];head.appendChild(scr); } })(window); </script>
<div class="clear"></div>
	</div>
</div>
<?php get_footer(); ?>