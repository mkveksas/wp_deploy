<?php
/**
 * The template for displaying image attachments.
 *
 * @package PWD Default Theme
 * @since PWD Default Theme 1.0
 */
get_header();
?>

<?php while ( have_posts() ) : the_post(); ?>

	<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

		<div id="content" class="content-area image-attachment" role="main">
	
				<div class="nopadding col-md-9 com-sm-9">

					<div class="entry-content">
						<div class="entry-attachment">
							<div class="attachment">
								<?php
								$attachments = array_values( get_children( array(
									'post_parent'    => $post->post_parent,
									'post_status'    => 'inherit',
									'post_type'      => 'attachment'
										//'post_mime_type' => 'image',
										//'order'          => 'ASC',
										//'orderby'        => 'menu_order ID'
									) ) );
								foreach ( $attachments as $k => $attachment ) {
									if ( $attachment->ID == $post->ID )
										break;
								}
								$k++;
									// If there is more than 1 attachment in a gallery
								if ( count( $attachments ) > 1 ) {
									if ( isset( $attachments[ $k ] ) )
											// get the URL of the next image attachment
										$next_attachment_url = get_attachment_link( $attachments[ $k ]->ID );
									else
											// or get the URL of the first image attachment
										$next_attachment_url = get_attachment_link( $attachments[ 0 ]->ID );
								} else {
										// or, if there's only 1 image, get the URL of the image
									$next_attachment_url = wp_get_attachment_url();
								}
								?>
								<a href="<?php echo $next_attachment_url; ?>" title="<?php echo esc_attr( get_the_title() ); ?>" rel="attachment">
									<?php
										$attachment_size = apply_filters( 'pwd_attachment_size', array( 1200, 1200 ) ); // Filterable image size.
										echo wp_get_attachment_image( $post->ID, $attachment_size,array('class'=>'attachment'));
										?>
									</a>
								</div><!-- .attachment -->

							</div>
						</div><!-- .entry-content -->

					</div>
					<div class="nopadding col-md-3 com-sm-3">
						<div class="sidebar-image">
							<header class="image-header">
								<h1 class="entry-title"><?php the_title(); ?></h1>
								<div class="entry-meta">
									<?php
									$metadata = wp_get_attachment_metadata();
									printf( __( 'Published <span class="entry-date"><time class="entry-date" datetime="%1$s">%2$s</time></span> at <a href="%3$s" title="Link to full-size image">%4$s &times; %5$s</a> in <a href="%6$s" title="Return to %7$s" rel="gallery">%8$s</a>', 'pwd' ),
										esc_attr( get_the_date( 'c' ) ),
										esc_html( get_the_date() ),
										wp_get_attachment_url(),
										$metadata['width'],
										$metadata['height'],
										get_permalink( $post->post_parent ),
										esc_attr( get_the_title( $post->post_parent ) ),
										get_the_title( $post->post_parent )
										);
										?>
										<?php edit_post_link( __( 'Edit', 'pwd' ), '<span class="sep"> | </span> <span class="edit-link">', '</span>' ); ?>
									</div><!-- .entry-meta -->

								</header><!-- .entry-header -->

								<div class="entry-caption">
									<?php the_content(); ?>
									<?php wp_link_pages( array( 'before' => '<div class="page-links">' . __( 'Pages:', 'pwd' ), 'after' => '</div>' ) ); ?>
								</div>

							

								<?php comments_template(); ?>


								<nav id="image-navigation" class="site-navigation">
									<span class="previous-image"><?php previous_image_link( false, __( '<i class="fa fa-angle-left"></i> Previous', 'pwd' ) ); ?></span>
									<span class="next-image"><?php next_image_link( false, __( 'Next <i class="fa fa-angle-right"></i>', 'pwd' ) ); ?></span>
								</nav><!-- #image-navigation -->


							</div>
						</div>
				
<div class="clear"></div>

				</div><!-- #content .site-content -->
			</article><!-- #post-<?php the_ID(); ?> -->

		<?php endwhile; // end of the loop. ?>

		<?php get_footer(); ?>