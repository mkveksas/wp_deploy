<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package PWD Default Theme
 * @since PWD Default Theme 1.0
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
	<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5H755BV');</script>
<!-- End Google Tag Manager -->
	
	<meta charset="<?php bloginfo( 'charset' ); ?>" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	
	<title><?php wp_title(); ?> </title>
	
	<?php if(pwd_get_option('favicon')){ ?>
	<link rel="icon" type="image/png" href="<?php echo pwd_get_option('favicon') ?>">
	<?php }else{ ?>
	<link rel="icon" type="image/png" href="<?php echo get_template_directory_uri(); ?>/favicon.png">
	<?php } ?>
	
	<link rel="profile" href="http://gmpg.org/xfn/11" />
	<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>" />

<!--[if lt IE 9]>
<script src="<?php echo get_template_directory_uri(); ?>/js/html5.js" type="text/javascript"></script>
<![endif]-->
<script>(function(){document.documentElement.className='js'})();</script>
<script>var afterJQ = [];</script>

<meta name="google-site-verification" content="3OZjEv394_ksqbHPseubYpMbC9C0mqoJUCQVR2PdQ1k" />
<link href='https://fonts.googleapis.com/css?family=Merriweather:400,400italic,300italic,300,700,700italic,900,900italic' rel='stylesheet' type='text/css'>

<?php wp_head(); ?>


<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');

fbq('init', '1716430155300868');
fbq('track', "PageView");</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=1716430155300868&ev=PageView&noscript=1"
/></noscript>
<!-- End Facebook Pixel Code -->

<?php if(is_front_page() || is_page( 921 ) || is_page( 920 ) || is_page( 919 ) || is_page( 918 ) || is_page( 917 )) { ?>
<!-- Facebook Pixel Code -->
<script>
!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '414035832087213');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=414035832087213&ev=PageView&noscript=1"
/></noscript>
<!-- DO NOT MODIFY -->
<!-- End Facebook Pixel Code -->
<?php } ?>

</head>

<body <?php body_class(); ?> >
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5H755BV"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
		<?php do_action( 'before' ); ?>

<header id="masthead" class="site-header" role="banner"><div class="navbar navbar-default navbar-static-top" role="navigation"><div class="container"><div class="row"><div class="col-md-2 col-sm-2 col-xs-12"><div class="navbar-header" itemscope itemtype="http://schema.org/Organization"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse"> <i class="fa fa-bars"></i> <i class="fa fa-times"></i> </button><a id="logo" class="navbar-brand" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" rel="home" itemprop="url"> <?php if(pwd_get_option('logo')){ ?> <img src="<?php echo pwd_get_option('logo'); ?>" alt="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?> logo" itemprop="logo"> <?php }else{ ?> <span><?php bloginfo( 'name' ); ?></span> <?php } ?> </a></div></div><div class="col-md-10 col-sm-10 col-xs-12"><div class="navbar-collapse collapse "> <?php wp_nav_menu( array( 'theme_location' => 'primary','menu_class' => 'nav navbar-nav navbar-right','container' => 'ul' , 'walker' => new wp_bootstrap_navwalker(),'fallback_cb' => '' )); ?></div></div></div></div></div> </header>
		<div id="featured-aside" class="site-featured featured-fullscreen">
			<?php
			$header_image 			= get_header_image();
			$header_image_width 	= get_custom_header()->width;
			$header_image_height 	= get_custom_header()->height;
			if ( is_singular() && has_post_thumbnail( $post->ID ) && ( /* $src, $width, $height */ $image = wp_get_attachment_image_src( get_post_thumbnail_id( $post->ID ), array( $header_image_width, $header_image_height ) ) ) && $image[1] >= $header_image_width ) :
				// Houston, we have a new header image!
				$header_image =  $image[0]; 
			endif;
			?>
			<div class="site-header-image-bg" style="width:100%; height:<?php echo $header_image_height; ?>px; background:url(<?php echo $header_image; ?>) center center no-repeat;">
				<?php 
				if(is_front_page()){
					get_template_part( 'inc/custom', 'slideshow' );
				}
				?>
			</div>
		</div><!-- #featured-aside -->
		<div id="main" class="site-main">
