<?php
/**
 * Template Name: Contact us Webform
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

<?php while ( have_posts() ) : the_post(); ?>
	<article id="post-<?php the_ID(); ?>" <?php post_class('single-page'); ?> itemscope itemtype="http://schema.org/LocalBusiness">
		<header class="page-header has-breadcrumbs">
			<span class="entry-title"><?php the_title(); ?></span>
			<div class="breadcrumbs"><?php if(function_exists('bcn_display')){ bcn_display(); }?></div>
		</header><!-- .entry-header -->
		<div class="container">
			<div class="row">
				<div class="col-md-4">
					<div class="contact-info">
						<h3>Contact info</h3>
						<?php if(pwd_get_option("location")){ ?><h1 class="location-name"><span itemprop="name"><?php echo pwd_get_option("location"); ?></span></h1><?php } ?>
						<?php if(pwd_get_option('location-description')){ ?><p class="location-description" itemprop="description"><?php echo pwd_get_option('location-description'); ?></p><?php } ?>
						<p class="address" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
							<?php if(pwd_get_option("map_url")){ ?><a itemprop="url" href="<?php echo pwd_get_option("map_url"); ?>" target="_blank"><?php } ?>
							<span itemprop="streetAddress"><?php echo pwd_get_option("address"); ?></span> <br>
							<span itemprop="addressLocality"><?php echo pwd_get_option("addressLocality"); ?></span>,
							<span itemprop="addressRegion"><?php echo pwd_get_option("addressRegion"); ?></span> 
							<span itemprop="postalCode"><?php echo pwd_get_option("postalCode"); ?></span>
							<?php if(pwd_get_option("map_url")){ ?></a><?php } ?>
						</p>
						<?php if(pwd_get_option("phone")){ ?>
						<p class="phone"><span class="label">Telephone:</span> <a href="tel:<?php echo pwd_get_option("phone"); ?>"><span itemprop="telephone"><?php echo pwd_get_option("phone"); ?></span></a></p>
						<?php }?>
						<?php if(pwd_get_option("mobile")){ ?>
						<p class="mobile"><span class="label">Mobile:</span> <a href="tel:<?php echo pwd_get_option("mobile"); ?>"><span itemprop="telephone"><?php echo pwd_get_option("mobile"); ?></span></a></p>
						<?php }?>
						<?php if(pwd_get_option("fax")){ ?>
						<p class="fax"><span class="label">Fax:</span> <?php echo pwd_get_option("fax"); ?></p>
						<?php } ?>
						<?php if(pwd_get_option("email")){ ?>
						<p class="email"><span class="label">Email:</span> <a href="mailto:<?php echo pwd_get_option("email"); ?>"><?php echo pwd_get_option("email"); ?></a>
						</p><?php } ?>
					</div>
				</div>
				<div class="col-md-8 col-sm-6">
					<div id="content" role="main">
						<div class="entry-content">
							<?php the_content(); ?>
							<?php /* ?><form accept-charset="UTF-8" action="https://uz264.infusionsoft.com/app/form/process/1da6a2be1deadd222c9d0b41196c3f77" class="infusion-form" method="POST"> <?php */?>
								<form id="frmMain" accept-charset="UTF-8" action="https://uz264.infusionsoft.com/app/form/process/1da6a2be1deadd222c9d0b41196c3f77" class="infusion-form" method="POST" >
								<input name="inf_form_xid" type="hidden" value="1da6a2be1deadd222c9d0b41196c3f77" />
								<input name="inf_form_name" type="hidden" value="Contact Us Webform" />
								<input name="infusionsoft_version" type="hidden" value="1.45.0.53" />
								<div class="row">	
									<div class="col-md col-md-6">
										<div class="infusion-field">
											<input class="infusion-field-input-container large" placeholder="First Name *" id="inf_field_FirstName" name="inf_field_FirstName" type="text" />
										</div>
									</div>
									<div class="col-md col-md-6">
										<div class="infusion-field">
											<input class="infusion-field-input-container large" placeholder="Last Name *" id="inf_field_LastName" name="inf_field_LastName" type="text" />
										</div>
									</div>
								</div>
								<div class="row">	
									<div class="col-md col-md-6">
										<div class="infusion-field">
											<input class="infusion-field-input-container large" placeholder="Contact Number *" id="inf_field_Phone1" name="inf_field_Phone1" type="text" />
										</div>
									</div>
									<div class="col-md col-md-6">
										<div class="infusion-field">
											<input class="infusion-field-input-container large" placeholder="Email *" id="inf_field_Email" name="inf_field_Email" type="text" />
										</div>
									</div>
								</div>
								<div class="row">	
									<div class="col-md col-md-12">
										<div class="infusion-field">
											<textarea cols="24" id="inf_custom_EnquiryDetails" placeholder="Message *" name="inf_custom_EnquiryDetails" rows="5"></textarea>
										</div>
									</div>
								</div>
								<div class="row">	
									<div class="col-md col-md-12">
										<div class="infusion-field">
											<div class="g-recaptcha" data-sitekey="6Ld_GBATAAAAAMDQyJmB30mA6unoBtgW9fVlpbz9"></div>
										</div>
									</div>
								</div>
								<div class="row">	
									<div class="col-md col-md-12">
										<div class="infusion-submit">
											<input class="btn btn-primary" type="button" value="Submit" onclick="emind_form();" />
										</div>
									</div>
								</div>
							</form>
							<script type="text/javascript" src="https://uz264.infusionsoft.com/app/webTracking/getTrackingCode?trackingId=aedddbca8674e2a24a1e13a26079bdef"></script>
							<script src='https://www.google.com/recaptcha/api.js'></script>
						</div><!-- .entry-content -->				
					</div><!-- #content .site-content -->
				</div>
			</div>
		</div>
	</div>
	<div id="contact-map"> &nbsp; <!-- GOOGLE MAP API --> </div>
	<?php
	$address = esc_attr(strip_tags(do_shortcode('[pwd_option id="address"]')));
	$address = str_replace("\r", '',  $address);
	$address = str_replace("\n", ' ', $address);
	$address = str_replace("\t", ' ', $address);
	$lat 	 = do_shortcode('[pwd_option id="map_lat"]');
	$lng 	 = do_shortcode('[pwd_option id="map_lng"]');
	$zoom 	 = do_shortcode('[pwd_option id="map_zoom"]');
	?>
	<script src="http://maps.googleapis.com/maps/api/js?sensor=false"></script>
	<script type="text/javascript">
		/* <![CDATA[ */
		function initialize() {
			var myLatlng = new google.maps.LatLng(<?php echo $lat; ?>, <?php echo $lng; ?>);
			var mapOptions = {
				center: myLatlng,
				zoom: <?php echo $zoom; ?>,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				mapTypeControl:false,
				zoomControl: true,
				zoomControlOptions: {
					style: google.maps.ZoomControlStyle.SMALL
				},
				scrollwheel: false
			};
			var map = new google.maps.Map(document.getElementById("contact-map"), mapOptions); 
			var marker = new google.maps.Marker({
				position: myLatlng,
				map: map,
				title:"<?php echo $address;  ?>"
				// icon:"<?php echo get_template_directory_uri(); ?>/images/map-marker.png"
			});
		}
		google.maps.event.addDomListener(window, 'load', initialize);
		/* ]]> */
		function emind_form(){
			var ajaxUrl = "<?php echo admin_url('admin-ajax.php'); ?>?action=grecaptcha_check";
			var formData = jQuery("#frmMain").serializeArray();
			jQuery.post(ajaxUrl, formData).done(function (data) {
				if(data=="1"){
					jQuery("#frmMain").submit();
				}
			});
			return false;
		}
	</script>
</article><!-- #post-<?php the_ID(); ?> -->
<?php endwhile; // end of the loop. ?>

<?php get_template_part( 'inc/custom', 'clients' ); ?>

<?php  if( pwd_get_option('tagline')){ ?>

<div id="tagline" class="site-tagline">
	<div class="container">
		<?php echo pwd_get_option('tagline'); ?>
	</div>
</div>

<?php } ?>
<?php get_footer(); ?>