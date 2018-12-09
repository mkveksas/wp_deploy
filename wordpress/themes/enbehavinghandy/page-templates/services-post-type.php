<?php 
/* 
	Template Name: Services - Content Page 
	Template Post Type: page, service
*/
/* This is a Page template for additional section of the service post type */


get_header(); ?>

<?php 
	/* get the Custom Fields now */
	
	
	$queried_object = get_queried_object();

	
	
	?>
<div class="single-page" <?php post_class(); ?> itemscope itemtype="http://schema.org/Article">

	<header class="page-header has-breadcrumbs">
		<h1 class="entry-title" itemprop="name"><?php the_title(); ?></h1>
		<div class="breadcrumbs"><?php if(function_exists('bcn_display')){ bcn_display(); }?></div>
	</header><!-- .entry-header -->

	<div class="container">
		<!-- Description -->
		<div class="row">
			<div class="col-md-12 col-sm-12">
				<div id="content" role="main">
				<div class="row">
					<div class="col-md-12 col-sm-12">
					<?php while ( have_posts() ) : the_post(); ?>
						<?php get_template_part( 'content', 'page' ); ?>
					<?php endwhile; // end of the loop. ?>
	
					<?php 
					/*
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
					wp_reset_postdata();*/
					?>
						
					</div>
					</div>
	
				</div><!-- #content -->
			</div>
		
			<!--div class="col-md-4 col-sm-4">
				<div id="sidebar" class="widget-area" role="complementary">
				<?php do_action( 'before_sidebar' ); ?>
				<?php dynamic_sidebar( 'sidebar-service' ); ?>
				</div>
				</div-->
		</div>
		<!-- Why Choose Us Section -->
		<div class="row">
			<div class="col-md-12 col-sm12">
				<div class="feature-one">
					<h1><?php echo get_field( 'wcu_heading_title',$queried_object ); ?></h1>
					
					<?php /* repeater fields */
						// check if the repeater field has rows of data
						$codes = '';
						if( have_rows('wcu_list') ):
							$i = 0;
							$rowCount = count( get_field('wcu_list',$queried_object) ); //GET THE COUNT 
							$filler ='';
						 	// loop through the rows of data
						    while ( have_rows('wcu_list') ) : the_row();
						
						        // display a sub field value
						        
						        
						        if ($i % 4 == 0) :
									$codes=$codes . '<div class="row">[filler]</div>';
						        endif;
						        
						        $filler = $filler . '<div class="col-md-3">
														<div class="feature-content">
															<i class="fa fa-check-circle-o"><h3>' . get_sub_field('wcu_list_title') .'</h3></i>
															<p>' . get_sub_field('wcu_list_description') .'</p>
														</div>
													</div>';
								if (($i % 4 == 3) || ($i == $rowCount-1))  :
									$codes = str_replace('[filler]', $filler, $codes);
									$filler='';
								endif;
								$i++;
						    endwhile;
							echo $codes;
						else :
						
						    // no rows found
						
						endif;

					?>
					<!--div class="row ">
						<div class="col-md-3">
							<div class="feature-content">
								<i class="fa fa-check-circle-o"><h3>Experienced</h3></i>
								<p>We have been around for 20 YEARS</p>
							</div>
						</div>
						<div class="col-md-3">
							<div class="feature-content">
								<i class="fa fa-check-circle-o"><h3>Experienced</h3></i>
								<p>We have been around for 20 YEARS. We have been around for 20 YEARS. We have been around for 20 YEARS</p>
							</div>						</div>
						<div class="col-md-3 ">
							<div class="feature-content">
								<i class="fa fa-check-circle-o"><h3>Experienced</h3></i>
								<p>We have been around for 20 YEARS</p>
							</div>						</div>
						<div class="col-md-3 ">
							<div class="feature-content">
								<i class="fa fa-check-circle-o"><h3>Experienced</h3></i>
								<p>We have been around for 20 YEARS</p>
							</div>						</div>
					</div>
							<div class="row ">
						<div class="col-md-3 ">
							<div class="feature-content">
								<i class="fa fa-check-circle-o"><h3>Experienced</h3></i>
								<p>We have been around for 20 YEARS</p>
							</div>						</div>
						<div class="col-md-3 ">
							<div class="feature-content">
								<i class="fa fa-check-circle-o"><h3>Experienced</h3></i>
								<p>We have been around for 20 YEARS</p>
							</div>						</div>
						<div class="col-md-3 ">
							<div class="feature-content">
								<i class="fa fa-check-circle-o"><h3>Experienced</h3></i>
								<p>We have been around for 20 YEARS</p>
							</div>						</div>
						<div class="col-md-3 ">
							<div class="feature-content">
								<i class="fa fa-check-circle-o"><h3>Experienced</h3></i>
								<p>We have been around for 20 YEARS</p>
							</div>						</div>
					</div-->
				</div>
			</div>
		</div>
		<!-- Provided Services @ call to action-->
		<div class="row">
			<div class="col-md-6 col-xs-12">
				<div class="call-to-action">
					<h4><?php echo get_field( 'service_included_title',$queried_object ); ?></h4>
					<ul class="services-list">
						<?php /* repeater fields */
						// check if the repeater field has rows of data
						if( have_rows('service_included_list') ):

						 	// loop through the rows of data
						    while ( have_rows('service_included_list') ) : the_row();
						
						        // display a sub field value
						        
								?>
								<li><?php echo  get_sub_field('service_included_list_value'); ?></li>
						<?php
						    endwhile;
						
						else :
						
						    // no rows found
						
						endif;

					?>

						<!--li>Plumbing & Gas</li>
						<li>Electrical</li>
						<li>Cleaning</li>
						<li>Renovations</li>
						<li>Painting</li-->
					</ul>
				</div>
			</div>
			<div class="col-md-6 col-xs-12">
				<div class="contact-form">
				<h4><?php echo get_field( 'contact_from_title',$queried_object ); ?></h4>
				<?php //gravity_form(5, false, false, false, '', true, 12); ?>
				<?php include(locate_template('page-templates/partials/contact-form.php')); ?>
				</div>
			</div>
		</div>
		<!-- Processes -->
		<div class="row">
			<div class="col-md-12 col-sm12">
				<div class="feature-two">
					<h1><?php echo get_field( 'process_title',$queried_object ); ?></h1>
					<?php /* repeater fields */
						// check if the repeater field has rows of data
						$pcodes = '';
						if( have_rows('process_list') ):
							$j = 0;
							$rowCount = count( get_field('process_list',$queried_object) ); //GET THE COUNT 
							$pfiller ='';
						 	// loop through the rows of data
						    while ( have_rows('process_list') ) : the_row();
						
						        // display a sub field value
						        
						        
						        if ($j % 4 == 0) :
									$pcodes=$pcodes . '<div class="row">[filler]</div>';
						        endif;
						        
						        $pfiller = $pfiller . '<div class="col-md-3">
														<div class="feature-content">
															<i class="fa fa-check-circle-o"><h3>' . get_sub_field('process_list_title') .'</h3></i>
															<p>' . get_sub_field('process_list_description') .'</p>
														</div>
													</div>';
								if (($j % 4 == 3) || ($j == $rowCount-1))  :
									$pcodes = str_replace('[filler]', $pfiller, $pcodes);
									$pfiller='';
								endif;
								$j++;
						    endwhile;
							echo $pcodes;
						else :
						
						    // no rows found
						
						endif;

					?>
					<!--div class="row row-eq-height">
						<div class="col-md-3">
							<div class="feature-content">
								<i class="fa fa-check-circle-o"><h3>Experienced</h3></i>
								<p>We have been around for 20 YEARS</p>
							</div>						</div>
						<div class="col-md-3">
							<div class="feature-content">
								<i class="fa fa-check-circle-o"><h3>Experienced</h3></i>
								<p>We have been around for 20 YEARS</p>
							</div>						</div>
					</div>
										<div class="row row-eq-height">
						<div class="col-md-3">
							<div class="feature-content">
								<i class="fa fa-check-circle-o"><h3>Experienced</h3></i>
								<p>We have been around for 20 YEARS</p>
							</div>						</div>
						<div class="col-md-3">
							<div class="feature-content">
								<i class="fa fa-check-circle-o"><h3>Experienced</h3></i>
								<p>We have been around for 20 YEARS</p>
							</div>						</div>
					</div-->
				</div>
			</div>
		</div>
	</div>
</div>

<?php get_footer(); ?>


