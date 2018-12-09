<?php

/**
 * Template Name: Location Page
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
				<div class="col-md-8">
					<div id="content" role="main">

						<?php while ( have_posts() ) : the_post(); ?>

							<?php get_template_part( 'content', 'page' ); ?>

							<?php comments_template( '', true ); ?>
	
						<?php endwhile; // end of the loop. ?>
						
					</div>
				</div>
				<div class="col-md-4 col-sm-4 hidden-xs">
					<h3>Contact us</h3>
					<style type="text/css">
						.beta-base .preheader, .beta-base .header, .beta-base .sidebar, .beta-base .body, .beta-base .footer, #mainContent {
							text-align: left;
						}
						.beta-base .preheader, .beta-base .header, .beta-base .body, .beta-base .sidebar, .beta-base .leftSidebar, .beta-base .rightSidebar, .beta-base .footer {
							margin: 0;
							padding: 0;
							border: none;
							white-space: normal;
							line-height: normal;
						}
						.beta-base .title, .beta-base .subtitle, .beta-base .text, .beta-base img {
							margin: 0;
							padding: 0;
							background: none;
							border: none;
							white-space: normal;
							line-height: normal;
						}
						.beta-base .bodyContainer td.preheader{
							padding: 10px 0;
						}
						.beta-base .bodyContainer td.header {
							padding: 0;
							height: 30px;
						}
						.beta-base .bodyContainer td.body, .beta-base .bodyContainer td.footer,
						.beta-base .bodyContainer td.sidebar, .beta-base .bodyContainer td.leftSidebar, .beta-base .bodyContainer td.rightSidebar {
							padding: 20px;
						}
						.beta-base .bodyContainer td.header p, .beta-base .bodyContainer td.preheader p, .beta-base .bodyContainer td.body p,
						.beta-base .bodyContainer td.footer p, .beta-base .bodyContainer td.sidebar p,
						.beta-base .bodyContainer td.leftSidebar p, .beta-base .bodyContainer td.rightSidebar p {
							margin: 0;
							color: inherit;
						}
						.beta-base .bodyContainer td.header div.title, .beta-base .bodyContainer td.preheader div.title, .beta-base .bodyContainer td.body div.title,
						.beta-base .bodyContainer td.footer div.title, .beta-base .bodyContainer td.sidebar div.title,
						.beta-base .bodyContainer td.leftSidebar div.title, .beta-base .bodyContainer td.rightSidebar div.title,
						.beta-base .bodyContainer td.header div.subtitle, .beta-base .bodyContainer td.preheader div.subtitle, .beta-base .bodyContainer td.body div.subtitle,
						.beta-base .bodyContainer td.footer div.subtitle, .beta-base .bodyContainer td.sidebar div.subtitle,
						.beta-base .bodyContainer td.leftSidebar div.subtitle, .beta-base .bodyContainer td.rightSidebar div.subtitle,
						.beta-base .bodyContainer td.header div.text, .beta-base .bodyContainer td.preheader div.text, .beta-base .bodyContainer td.body div.text, .beta-base .bodyContainer td.body div.text div,
						.beta-base .bodyContainer td.footer div.text, .beta-base .bodyContainer td.sidebar div.text,
						.beta-base .bodyContainer td.leftSidebar div.text, .beta-base .bodyContainer td.rightSidebar div.text {
							overflow: auto;
						}
						.beta-base .optout {
							margin-bottom: 10px;
							margin-top: 10px;
						}
						div.infusion-captcha {
							width: 220px;
							padding: 10px;
						}
						div.infusion-captcha input, div.infusion-captcha select, div.infusion-captcha textarea {
							width: 95%;
							display: inline-block;
							vertical-align: middle;
						}
						table.infusion-field-container td.infusion-field-input-container input[type='text'],
						table.infusion-field-container td.infusion-field-input-container input[type='password'],
						table.infusion-field-container td.infusion-field-input-container textarea {
							width: 98%; /* must be 98% to make the snippet-menu line up due to border width */
							margin: 0;
						}
						table.infusion-field-container td.infusion-field-input-container select {
							width: 101%;
							*width: 102%; /* this one for IE */
							margin: 0;
						}
						table.infusion-field-container td.infusion-field-label-container {
							padding-right: 5px;
						}
						td.header .image-snippet img {
							vertical-align: bottom;
						}
						#webformErrors {
							color: #990000;
							font-size: 14px;
						}
						html, body {
							margin: 0;
							padding: 0;
							height: 100%;
						}
						.infusion-form {
							margin: 0;
							height: 100%;
						}
						.infusion-option {
							display: block;
							text-align: left;
						}
					</style>
					<style type="text/css">
						.beta-font-b h1, .beta-font-b h2, .beta-font-b h3, .beta-font-b h4, .beta-font-b h5, .beta-font-b h6 {
							font-family: arial,sans-serif;
						}
						.beta-font-b h1 {font-size: 24px;}
						.beta-font-b h2 {font-size: 20px;}
						.beta-font-b h3 {font-size: 14px;}
						.beta-font-b h4 {font-size: 12px;}
						.beta-font-b h5 {font-size: 10px;}
						.beta-font-b h6 {font-size: 8px;}
						.beta-font-b address {font-style: italic;}
						.beta-font-b pre {font-family: Courier New, monospace;}
						.beta-font-b .title, .beta-font-b .title p {
							font-size: 20px;
							font-weight: bold;
							font-family: arial,sans-serif;
						}
						.beta-font-b .subtitle, .beta-font-b .subtitle p {
							font-size: 11px;
							font-weight: normal;
							font-family: arial,sans-serif;
						}
						.beta-font-b .text, .beta-font-b p {
							font-size: 12px;
							font-family: arial,sans-serif;
						}
						.beta-font-b .preheader .text, .beta-font-b .preheader .text p {
							font-size: 11px;
							font-family: arial,sans-serif;
						}
						.beta-font-b .footer a {
							font-size: 11px;
							font-family: arial,sans-serif;
						}
						.beta-font-b .footer .text {
							font-size: 10px;
							font-family: verdana,sans-serif;
						}
						.beta-font-b .sidebar .title, .beta-font-b .leftSidebar .title, .beta-font-b .rightSidebar .title {
							font-size: 15px;
							font-weight: bold;
							font-family: arial,sans-serif;
						}
						.beta-font-b .sidebar .subtitle, .beta-font-b .leftSidebar .subtitle, .beta-font-b .rightSidebar .subtitle {
							font-size: 12px;
							font-family: arial, sans-serif;
						}
						.beta-font-b .sidebar .text, .beta-font-b .sidebar .text p, .beta-font-b .leftSidebar .text, .beta-font-b .rightSidebar .text {
							font-size: 11px;
							font-family: arial, sans-serif;
						}
						.infusion-field-label-container {
							font-size: 14px;
							font-family: arial,sans-serif;
						}
						.infusion-field-input-container {
							color: #000000;
							font-size: 12px;
						}
						.infusion-option label {
							color: #000000;
							font-size: 14px;
							font-family: arial,sans-serif;
						}
					</style>
					<style type="text/css">
						.default .background{
							background-color:#ffffff;
						;
						}
						.default .title{
							color:#000000;
						;
						}
						.default .subtitle{
							color:#000000;
						;
						}
						.default .text{
							color:#000000;
						;
						}
						.default a{
							color:#0645ad;
						;
						}
						.default .background .preheader .text{
							color:#1a242e;
						;
						}
						.default .background .preheader a{
							color:#0645ad;
						;
						}
						.default .header{
							background-color:#FFFFFF;
						;
						}
						.default .header .title{
							color:#000000;
						;
						}
						.default .header .subtitle{
							color:#000000;
						;
						}
						.default .header .text{
							color:#000000;
						;
						}
						.default .header .a{
							color:#157DB8;
						;
						}
						.default .hero{
							background-color:#B73931;
						;
						}
						.default .hero .title{
							color:#FFFFFF;
						;
						}
						.default .hero .subtitle{
							color:#FFFFFF;
						;
						}
						.default .hero .text{
							color:#FFFFFF;
						;
						}
						.default .hero .a{
							color:#157DB8;
						;
						}
						.default .quote{
							background-color:#70231E;
						;
						}
						.default .quote:after{
							border-color:#70231E transparent transparent transparent;
						;
						}
						.default .quote .title{
							color:#FFFFFF;
						;
						}
						.default .quote .subtitle{
							color:#FFFFFF;
						;
						}
						.default .quote .text{
							color:#FFFFFF;
						;
						}
						.default .quote .a{
							color:#157DB8;
						;
						}
						.default .body{
							background-color:#ffffff;
						;
						}
						.default .main{
							background-color:#FFFFFF;
						;
						}
						.default .main .title{
							color:#000000;
						;
						}
						.default .main .subtitle{
							color:#000000;
						;
						}
						.default .main .text{
							color:#000000;
						;
						}
						.default .main .a{
							color:#157DB8;
						;
						}
						.default .sidebar{
							background-color:#FFFFFF;
						;
						}
						.default .sidebar .title{
							color:#000000;
						;
						}
						.default .sidebar .subtitle{
							color:#000000;
						;
						}
						.default .sidebar .text{
							color:#000000;
						;
						}
						.default .sidebar .a{
							color:#157DB8;
						;
						}
						.default .leftSidebar{
							background-color:#ffffff;
						;
						}
						.default .leftSidebar .title{
							color:#f15c25;
						;
						}
						.default .leftSidebar .subtitle{
							color:#669940;
						;
						}
						.default .rightSidebar{
							background-color:#ffffff;
						;
						}
						.default .rightSidebar .title{
							color:#f15c25;
						;
						}
						.default .rightSidebar .subtitle{
							color:#669940;
						;
						}
						.default .footer{
							background-color:#FFFFFF;
						;
						}
						.default .footer .text{
							color:#0D0D0D;
						;
						}
						.default .footer .title{
							color:#000000;
						;
						}
						.default .footer a{
							color:#1B3BDE;
						;
						}
						.default .footer .subtitle{
							color:#000000;
						;
						}
						.default .infusion-field-label-container{
							font-size:14px;
						;
						}
						.default .infusion-field-label-container{
							font-family:Arial;
						;
						}
						.default .infusion-field-label-container{
							color:#000000;
							width: 35%;
						;
						}
						.default .infusion-field-input{
							font-size:14px;
						;
						}
						.default .infusion-option label{
							font-size:14px;
						;
						}
						.default .infusion-option label{
							font-family:Arial;
						;
						}
						.default .infusion-option label{
							color:#000000;
						;
						}
						.default .webFormBodyContainer{
							border-width:0px;
						;
						}
						.default .webFormBodyContainer{
							border-style:Hidden;
						;
						}
						.default .webFormBodyContainer{
							border-color:#000000;
						;
						}
					</style>
					<style type="text/css">
						.infusion-field-label-container {
							text-align:Left;
						}
						.infusion-field-input-container {
							width:200px;
						}
						.infusion-field-label-container {
							vertical-align:Middle;
						}
						.bodyContainer {
							width:425px;
						}
					</style>
					
					<?php if ( is_active_sidebar( 'sidebar-location' ) ) : ?>
						<ul id="sidebar">
							<?php dynamic_sidebar( 'sidebar-location' ); ?>
						</ul>
					<?php endif; ?>
					<?php if (is_page( 921 )) { ?>
				<div id="widget-container" class="ekomi-widget-container ekomi-widget-sf1220085bf3bbaf10756"></div> <script type="text/javascript"> (function (w) { w['_ekomiWidgetsServerUrl'] = (document.location.protocol == 'https:' ? 'https:' : 'http:') + '//widgets.ekomi.com'; w['_customerId'] = 122008; w['_ekomiDraftMode'] = true; w['_language'] = 'en'; if(typeof(w['_ekomiWidgetTokens']) !== 'undefined'){ w['_ekomiWidgetTokens'][w['_ekomiWidgetTokens'].length] = 'sf1220085bf3bbaf10756'; } else { w['_ekomiWidgetTokens'] = new Array('sf1220085bf3bbaf10756'); } if(typeof(ekomiWidgetJs) == 'undefined') { ekomiWidgetJs = true; var scr = document.createElement('script');scr.src = 'https://sw-assets.ekomiapps.de/static_resources/widget.js'; var head = document.getElementsByTagName('head')[0];head.appendChild(scr); } })(window); </script>
				   <?php } ?>
				</div>
			</div>
		</div>
	</div>


<?php get_footer(); ?>