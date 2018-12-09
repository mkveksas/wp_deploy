<?php

/**
 * Adds PWD_Address_Widget widget.
 */

class PWD_Address_Widget extends WP_Widget {

	/**
	 * Register widget with WordPress.
	 */

	function __construct() {

		parent::__construct(

			'pwd_address_widget', // Base ID
			__('PWD Address Widget', 'pwd'), // Name
			array( 'description' => __( 'A PWD Address Widget', 'pwd' ), ) // Args

			);

	}


	/**
	 * Front-end display of widget.
	 *
	 * @see WP_Widget::widget()
	 *
	 * @param array $args     Widget arguments.
	 * @param array $instance Saved values from database.
	 */

	public function widget( $args, $instance ) {

		$title = apply_filters( 'widget_title', $instance['title'] );

		echo $args['before_widget'];


		if ( ! empty( $title ) ) echo $args['before_title'] . $title . $args['after_title'];

		
		?>

		<div class="pwd-address" itemscope itemtype="http://schema.org/LocalBusiness">

			<?php if(pwd_get_option("map_image")){ ?>

			<p class="image-map">
				<a href="<?php echo pwd_get_option("map_url"); ?>" target="_blank">
					<img src="<?php echo pwd_get_option("map_image"); ?>" alt="<?php echo esc_attr(pwd_get_option("address")); ?>" class="mini-map" />
				</a>
			</p>
			<?php } ?>

			<h3 class="location" itemprop="name"><?php echo pwd_get_option("location"); ?></h3>
			<p class="address" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress">
				
				<?php if(pwd_get_option("map_url")){ ?><a itemprop="url" href="<?php echo pwd_get_option("map_url"); ?>" target="_blank"><?php } ?>
				<span itemprop="streetAddress"><?php echo pwd_get_option("address"); ?></span> <br>
				<span itemprop="addressLocality"><?php echo pwd_get_option("addressLocality"); ?></span>,
				<span itemprop="addressRegion"><?php echo pwd_get_option("addressRegion"); ?></span> 
				<span itemprop="postalCode"><?php echo pwd_get_option("postalCode"); ?></span>


				<?php if(pwd_get_option("map_url")){ ?></a><?php } ?>

			</p>

			<ul class="socials">
				<?php if(pwd_get_option("facebook")){ ?>    <li class="social facebook"><a href="<?php echo pwd_get_option("facebook"); ?>" target="_blank"><i class="fa fa-facebook"></i></a></li><?php } ?>
				<?php if(pwd_get_option("twitter")){ ?>     <li class="social twitter"><a href="<?php echo pwd_get_option("twitter"); ?>" target="_blank"><i class="fa fa-twitter"></i></a></li><?php } ?>
				<?php if(pwd_get_option("google-plus")){ ?> <li class="social google-plus"><a href="<?php echo pwd_get_option("google-plus"); ?>" target="_blank"><i class="fa fa-google-plus"></i></a></li><?php } ?>
				<?php if(pwd_get_option("instagram")){ ?> <li class="social instagram"><a href="<?php echo pwd_get_option("instagram"); ?>" target="_blank"><i class="fa fa-instagram"></i></a></li><?php } ?>
				<?php if(pwd_get_option("pinterest")){ ?> <li class="social pinterest"><a href="<?php echo pwd_get_option("pinterest"); ?>" target="_blank"><i class="fa fa-pinterest"></i></a></li><?php } ?>
				<?php if(pwd_get_option("youtube")){ ?>     <li class="social youtube"><a href="<?php echo pwd_get_option("youtube"); ?>" target="_blank"><i class="fa fa-youtube"></i></a></li><?php } ?>
				<?php if(pwd_get_option("linkedin")){ ?>    <li class="social linkedin"><a href="<?php echo pwd_get_option("linkedin"); ?>" target="_blank"><i class="fa fa-linkedin"></i></a></li><?php } ?>
				<?php if(pwd_get_option("feed")){ ?>        <li class="social feed"><a href="<?php echo pwd_get_option("feed"); ?>" target="_blank"><i class="fa fa-rss"></i></a></li><?php } ?>
			</ul>
			<div class="clear"></div>
			<?php if(pwd_get_option("email")){ ?>
			<p class="email"><a href="mailto:<?php echo pwd_get_option("email"); ?>"><?php echo pwd_get_option("email"); ?></a>
			</p><?php } ?>

			<?php if(pwd_get_option("phone")){ ?>
			<p class="phone"><a href="tel:<?php echo pwd_get_option("phone"); ?>"><span class="AVANSERnumber" itemprop="telephone"><?php echo pwd_get_option("phone"); ?></span></a></p>
			<?php }?>

			<?php if(pwd_get_option("fax")){ ?>
			<p class="fax"><?php echo pwd_get_option("fax"); ?></p>
			<?php } ?>
			<div class="clear"></div>
			<p class="openhour">Opening Hours : <br/>Monday - Friday 7am - 7pm</p>
			
			
			<?php 
			// global $pwd_options;
			// $openingHours =  $pwd_options['openingHours']; // pwd_get_option("openingHours");

			// if (count($openingHours)>0) {
			// 	echo '<h3>Hours:</h3>';
			// 	foreach ($openingHours as $key => $value) {
			// 		echo '<meta property="openingHours" content="'.$value.'">'.$value.'<br/>';
			// 	}
			// }

			?>



		</div>

		<?php

		

		echo $args['after_widget'];

	}


	/**
	 * Back-end widget form.
	 *
	 * @see WP_Widget::form()
	 *
	 * @param array $instance Previously saved values from database.
	 */

	public function form( $instance ) {

		if ( isset( $instance[ 'title' ] ) ) {

			$title = $instance[ 'title' ];

		}

		else {

			$title = __( '', 'pwd' );

		}

		?>

		<p>
			<label for="<?php echo $this->get_field_id( 'title' ); ?>"><?php _e( 'Title:','pwd' ); ?></label> 
			<input class="widefat" id="<?php echo $this->get_field_id( 'title' ); ?>" name="<?php echo $this->get_field_name( 'title' ); ?>" type="text" value="<?php echo esc_attr( $title ); ?>" />
		</p>

		<div class="pwd-address" itemscope itemtype="http://schema.org/LocalBusiness">

			<?php if(pwd_get_option("map_image")){ ?>

			<p class="image-map">
				<a href="<?php echo pwd_get_option("map_url"); ?>" target="_blank">
					<img src="<?php echo pwd_get_option("map_image"); ?>" alt="<?php echo esc_attr(pwd_get_option("address")); ?>" class="mini-map" />
				</a>
			</p>
			<?php } ?>

			<h3 class="location" ><?php echo pwd_get_option("location"); ?></h3>
			<p class="address" itemprop="address" itemscope itemtype="http://schema.org/PostalAddress"><i class="fa fa-map-marker"></i> 
				
				<?php if(pwd_get_option("map_url")){ ?><a href="<?php echo pwd_get_option("map_url"); ?>" target="_blank"><?php } ?>
				
				<span itemprop="streetAddress"><?php echo pwd_get_option("address"); ?></span>
				<span itemprop="postalCode"><?php echo pwd_get_option("postalCode"); ?></span>
				<span itemprop="addressLocality">><?php echo pwd_get_option("addressLocality"); ?></span>
				
				<?php /* //
				https://schema.org/PostalAddress 
				?>
			
      			<div itemscope itemtype="http://schema.org/PostalAddress">
				 	<span itemprop="name">Google Inc.</span>
				 	P.O. Box<span itemprop="postOfficeBoxNumber">1234</span>
					 <span itemprop="addressLocality">Mountain View</span>,
					 <span itemprop="addressRegion">CA</span>
					 <span itemprop="postalCode">94043</span>
					 <span itemprop="addressCountry">United States</span>
				</div>
				<?php */ ?>


				<?php if(pwd_get_option("map_url")){ ?></a><?php } ?>

			</p>

			<?php if(pwd_get_option("phone")){ ?>
			<p class="phone"><a href="tel:<?php echo pwd_get_option("phone"); ?>"><i class="fa fa-phone"></i> <span class="AVANSERnumber" itemprop="telephone"><?php echo pwd_get_option("phone"); ?></span></a></p>
			<?php }?>

			<?php if(pwd_get_option("fax")){ ?>
			<p class="fax"><i class="fa fa-print"></i> <span itemprop="faxNumber"><?php echo pwd_get_option("fax"); ?></span></p>
			<?php } ?>

			<?php if(pwd_get_option("email")){ ?>
			<p class="email"><i class="fa fa-envelope"></i> <a href="mailto:<?php echo pwd_get_option("email"); ?>"><span itemprop="email"><?php echo pwd_get_option("email"); ?></span></a>
			</p><?php } ?>

		</div>


		<?php 

	}



	/**
	 * Sanitize widget form values as they are saved.
	 *
	 * @see WP_Widget::update()
	 *
	 * @param array $new_instance Values just sent to be saved.
	 * @param array $old_instance Previously saved values from database.
	 *
	 * @return array Updated safe values to be saved.
	 */

	public function update( $new_instance, $old_instance ) {

		$instance = array();

		$instance['title'] = ( ! empty( $new_instance['title'] ) ) ? strip_tags( $new_instance['title'] ) : '';

		return $instance;

	}


} // class PWD_Address_Widget

register_widget( 'PWD_Address_Widget' );
