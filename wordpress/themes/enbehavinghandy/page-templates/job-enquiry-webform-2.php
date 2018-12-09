<?php

/**
 * Template Name: Job Enquiry Webform 2
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

<div <?php post_class('single-page'); ?> itemscope itemtype="http://schema.org/Article">
	<header class="page-header has-breadcrumbs">
		<h1 class="entry-title"><?php echo get_the_title($parent_id );?></h1>
		<div class="breadcrumbs"><?php if(function_exists('bcn_display')){ bcn_display(); }?></div>
	</header><!-- .entry-header -->
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div id="content" role="main">

					<?php while ( have_posts() ) : the_post(); ?>

						<?php get_template_part( 'content', 'page' ); ?>

						<form accept-charset="UTF-8" action="https://uz264.infusionsoft.com/app/form/process/240f5f3a7607b69ad8d44ad21aef5daf" class="infusion-form" method="POST">
							<input name="inf_form_xid" type="hidden" value="240f5f3a7607b69ad8d44ad21aef5daf" />
							<input name="inf_form_name" type="hidden" value="Job Enquiry Webform" />

							<input name="infusionsoft_version" type="hidden" value="1.47.0.44" />
							<div class="infusion-field row">
								<label class="col-md col-md-3" for="inf_custom_EnquiryType">Enquiry Type *</label>
								<div class="col-md col-md-9">
									<select class="large" id="inf_custom_EnquiryType" name="inf_custom_EnquiryType"><option value="">Please select one</option><option value="Job Request">Job Request</option><option value="Price Enquiry">Price Enquiry</option></select>
								</div>
							</div>
							<div class="infusion-field row">
								<label class="col-md col-md-3" for="inf_custom_EnquiryDetails">Enquiry Details *</label>
								<div class="col-md col-md-9">
									<textarea cols="24" id="inf_custom_EnquiryDetails" name="inf_custom_EnquiryDetails" rows="5"></textarea>
								</div>
							</div>
							<div class="infusion-field row">
								<label class="col-md col-md-3" for="inf_custom_Jobtobedone">Job to be done</label>
								<div class="col-md col-md-9">
									<select class="large" id="inf_custom_Jobtobedone" name="inf_custom_Jobtobedone"><option value="">Please select one</option><option value="ASAP">ASAP</option><option value="Within 1 week">Within 1 week</option><option value="Within 1 month">Within 1 month</option><option value="In the future">In the future</option></select>
								</div>
							</div>
							<div class="infusion-field row">
								<label class="col-md col-md-3" for="inf_field_FirstName">First Name *</label>
								<div class="col-md col-md-9">
									<input class="infusion-field-input-container large" id="inf_field_FirstName" name="inf_field_FirstName" type="text" />
								</div>
							</div>
							<div class="infusion-field row">
								<label class="col-md col-md-3" for="inf_field_LastName">Last Name *</label>
								<div class="col-md col-md-9">
									<input class="infusion-field-input-container large" id="inf_field_LastName" name="inf_field_LastName" type="text" />
								</div>
							</div>
							<div class="infusion-field row">
								<label class="col-md col-md-3" for="inf_field_Phone1">Contact Number *</label>
								<div class="col-md col-md-9">
									<input class="infusion-field-input-container large" id="inf_field_Phone1" name="inf_field_Phone1" type="text" />
								</div>
							</div>
							<div class="infusion-field row">
								<label class="col-md col-md-3" for="inf_field_Email">Email *</label>
								<div class="col-md col-md-9">
									<input class="infusion-field-input-container large" id="inf_field_Email" name="inf_field_Email" type="text" />
								</div>
							</div>
							<div class="infusion-field row">
								<label class="col-md col-md-3" for="inf_custom_JobStreetAddress">Street Address *</label>
								<div class="col-md col-md-9">
									<input class="infusion-field-input-container large" id="inf_custom_JobStreetAddress" name="inf_custom_JobStreetAddress" type="text" />
								</div>
							</div>
							<div class="infusion-field row">
								<label class="col-md col-md-3" for="inf_custom_JobCity">City *</label>
								<div class="col-md col-md-9">
									<input class="infusion-field-input-container large" id="inf_custom_JobCity" name="inf_custom_JobCity" type="text" />
								</div>
							</div>
							<div class="infusion-field row">
								<label class="col-md col-md-3" for="inf_custom_JobState">State</label>
								<div class="col-md col-md-9">
									<select class="large" id="inf_custom_JobState" name="inf_custom_JobState"><option selected="selected" value="WA">WA</option><option value="VIC">VIC</option><option value="ACT">ACT</option><option value="QLD">QLD</option><option value="NT">NT</option><option value="SA">SA</option><option value="NSW">NSW</option><option value="TAS">TAS</option></select>
								</div>
							</div>
							<div class="infusion-field row">
								<label class="col-md col-md-3" for="inf_custom_JobPostCode">Post Code *</label>
								<div class="col-md col-md-9">
									<input class="infusion-field-input-container large" id="inf_custom_JobPostCode" name="inf_custom_JobPostCode" type="text" />
								</div>
							</div>

							<div class="infusion-field row">
								<label class="col-md col-md-3" for="inf_custom_JobPostCode"></label>
								<div class="col-md col-md-9">
									<div class="col-md col-md-9">
										<div class="g-recaptcha" data-sitekey="6Ld_GBATAAAAAMDQyJmB30mA6unoBtgW9fVlpbz9"></div>
									</div>
								</div>
							</div>

							<div class="infusion-submit row">
								<div class="col-md col-md-9 col-md-offset-3">
									<input class="btn btn-primary" type="button" value="Submit" onclick="emind_form();"/>
								</div>
							</div>

						</form>
						<script type="text/javascript" src="https://uz264.infusionsoft.com/app/webTracking/getTrackingCode?trackingId=aedddbca8674e2a24a1e13a26079bdef"></script>
						<script src='https://www.google.com/recaptcha/api.js'></script>
					<?php endwhile; // end of the loop. ?>
				</div>
			</div>
		</div>
	</div>
</div>
<script type="text/javascript">
	function emind_form(){
		var ajaxUrl = "<?php echo admin_url('admin-ajax.php'); ?>?action=grecaptcha_check";
		var formData = jQuery("#frmjob").serializeArray();
		jQuery.post(ajaxUrl, formData).done(function (data) {
			if(data=="1"){
				jQuery("#frmjob").submit();
			}
		});
		return false;
	}
</script>
<?php get_footer(); ?>