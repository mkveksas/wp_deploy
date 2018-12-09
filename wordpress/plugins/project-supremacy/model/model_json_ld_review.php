<?php
/**
 * Model: GKTY_Model_JSON_LD_REVIEW
 * @package GKTY_Model
 */

/**
 * Model class <i>GKTY_Model_JSON_LD_REVIEW</i> represents group
 * @package GKTY_Model
 */

class GKTY_Model_JSON_LD_REVIEW extends WP_Widget {

	function __construct() {
		// Instantiate the parent object
		parent::__construct(
			// Base ID of your widget
			false,

			// Widget name will appear in UI
			__('Review Widget', 'wpb_widget_domain'),

			// Widget description
			array( 'description' => __( 'Project Supremacy - Review Widget', 'wpb_widget_domain' ), )  );
	}

	function widget( $args, $instance ) {
		// Widget output
		global $post;
		$ID = 0;
		if (!is_front_page()) {
			$ID = $post->ID;
		}
		$ps_review_widget = get_option('ps_review_widget');
		if ($ps_review_widget == '1' && (is_page() || is_front_page() || is_single()) && !isset($_COOKIE['ps_has_review'])) {
			echo "<link type='text/css' rel='stylesheet' href='".plugins_url()."/project-supremacy/css/fontawesome/css/font-awesome.min.css'>\n";
			echo "<script type='application/javascript'>var ps_review_state = 'minimized'; var ps_review_id = '$ID';</script>\n";
			echo "<script type='application/javascript' src='" . plugins_url() . "/project-supremacy/js/review_widget.js'></script>\n";

			$ps_review_widget_title = get_option('ps_review_widget_title');
			$ps_review_widget_description = get_option('ps_review_widget_description');
			$ps_review_widget_template = get_option('ps_review_widget_template');

            $ps_review_title_background_color = get_option('ps_review_title_background_color');
            $ps_review_title_text_color = get_option('ps_review_title_text_color');
            $ps_review_description_background_color = get_option('ps_review_description_background_color');
            $ps_review_description_text_color = get_option('ps_review_description_text_color');
            $ps_review_description_border = get_option('ps_review_description_border');
            $ps_review_input_text = get_option('ps_review_input_text');
            $ps_review_input_background = get_option('ps_review_input_background');
            $ps_review_input_border = get_option('ps_review_input_border');
            $ps_review_submit_hover = get_option('ps_review_submit_hover');
            $ps_review_font = get_option('ps_review_font');
            $ps_review_submit_text = get_option('ps_review_submit_text');
            $ps_review_submit_background = get_option('ps_review_submit_background');
            $ps_review_star_color = get_option('ps_review_star_color');

            if(empty($ps_review_title_background_color) || !isset($ps_review_title_background_color)) $ps_review_title_background_color = '#90D1E7';
            if(empty($ps_review_title_text_color) || !isset($ps_review_title_text_color)) $ps_review_title_text_color = '#000000';
            if(empty($ps_review_description_background_color) || !isset($ps_review_description_background_color)) $ps_review_description_background_color = 'rgb(248, 248, 248)';
            if(empty($ps_review_description_text_color) || !isset($ps_review_description_text_color)) $ps_review_description_text_color = '#057093';
            if(empty($ps_review_description_border) || !isset($ps_review_description_border)) $ps_review_description_border = '#90D1E7';
            if(empty($ps_review_input_text) || !isset($ps_review_input_text)) $ps_review_input_text = '#000000';
            if(empty($ps_review_input_background) || !isset($ps_review_input_background)) $ps_review_input_background = 'rgb(248, 248, 248)';
            if(empty($ps_review_input_border) || !isset($ps_review_input_border)) $ps_review_input_border = '#90D1E7';
            if(empty($ps_review_submit_hover) || !isset($ps_review_submit_hover)) $ps_review_submit_hover = '#90D1E7';
            if(empty($ps_review_font) || !isset($ps_review_font)) $ps_review_font = 'Open Sans';
            if(empty($ps_review_submit_text) || !isset($ps_review_submit_text)) $ps_review_submit_text = '#000000';
            if(empty($ps_review_submit_background) || !isset($ps_review_submit_background)) $ps_review_submit_background = '#FFFFFF';
            if(empty($ps_review_star_color) || !isset($ps_review_star_color)) $ps_review_star_color = '#000000';

			if ($ps_review_widget_template == false || empty($ps_review_widget_template)) {
				$ps_review_widget_template = '1';
			}

			?>
            <link href='https://fonts.googleapis.com/css?family=<?php echo $ps_review_font; ?>' rel='stylesheet' type='text/css'>
			<style>
                .ps_review_widget_body label {
                    font-family: "<?php echo str_replace('+', ' ', $ps_review_font) ?>" !important;
                }
                .ps_review_widget_body div {
                    font-family: "<?php echo str_replace('+', ' ', $ps_review_font) ?>" !important;
                }
                .ps_review_widget_body button {
                    font-family: "<?php echo str_replace('+', ' ', $ps_review_font) ?>" !important;
                }
				.ps_review_widget_body {
                    width: 290px !important;
                    height: 432px !important;
                    position: fixed !important;
                    background: #FFFFFF !important;
                    bottom: -395px;
                    z-index: 9999 !important;
                    right: 55px !important;
                    box-shadow: 0px 0px 10px -1px black !important;
                    transition: all 0.4s !important;
                    line-height: 1.6842 !important;
                    box-sizing: border-box !important;
				}
				.ps_review_widget_title {
                    background: <?php echo $ps_review_title_background_color ?> !important;
                    padding: 6px !important;
                    font-size: 15px !important;
                    font-weight: 700 !important;
                    cursor: pointer !important;
                    color: <?php echo $ps_review_title_text_color ?> !important;
				}
				.ps_review_widget_description {
                    background: <?php echo $ps_review_description_background_color ?> !important;
                    padding: 3px 8px 5px 8px !important;
                    font-size: 13px !important;
                    margin-top: 5px !important;
                    border-bottom: 2px solid <?php echo $ps_review_description_border ?> !important;
                    font-weight: 700 !important;
                    word-spacing: -1px !important;
                    line-height: 16px !important;
                    color: <?php echo $ps_review_description_text_color ?>;
				}
                .ps_review_field{
                    border-left: 5px solid <?php echo $ps_review_input_border ?>;
                    padding: 6px !important;
                    margin-top: 6px !important;
                    background: <?php echo $ps_review_input_background ?>;
                    margin-left: 6px !important;
                    margin-right: 6px !important;
                }
				.ps_review_field label {
					font-size: 12px !important;
                    display: block !important;
                    color: <?php echo $ps_review_input_text ?>;
                    margin-bottom: 0 !important;
                    font-weight: 700 !important;
				}
				.ps_review_field input,.ps_review_field textarea {
					font-size: 13px !important;
					background: white !important;
				}
				.ps_review_widget_body hr {
					height: 1px !important;
					border: 0 !important;
					background-color: rgba(51, 51, 51, 0.1) !important;
					line-height: 1.6842 !important;
					margin: 10px 0 2px 0 !important;
				}
                .ps_review_widget_save_template:hover {
                    background: <?php echo $ps_review_submit_hover ?> !important;
                }
                button.ps_review_widget_save_template {
                    margin-top: 8px !important;
                    font-size: 16px !important;
                    outline: 0 !important;
                    padding: 7px !important;
                    font-weight: 700 !important;
                    text-transform: none !important;
                    cursor: pointer !important;
                    width: 100% !important;
                    border-left: 0px solid !important;
                    border-right: 0px solid !important;
                    background: <?php echo $ps_review_submit_background ?> !important;
                    color: <?php echo $ps_review_submit_text ?> !important;
                    border: 1px solid #c1c1c1 !important;
                }
                .ps_review_widget_save:hover {
                    background: <?php echo $ps_review_submit_hover ?> !important;
                }
				button.ps_review_widget_save {
                    margin-top: 8px !important;
                    font-size: 16px !important;
                    outline: 0 !important;
                    padding: 7px !important;
                    font-weight: 700 !important;
                    text-transform: none !important;
                    cursor: pointer !important;
                    width: 100% !important;
                    border-left: 0px solid !important;
                    border-right: 0px solid !important;
                    background: <?php echo $ps_review_submit_background ?> !important;
                    color: <?php echo $ps_review_submit_text ?> !important;
                    border: 1px solid #c1c1c1 !important;
				}
				.ps_review_stars {
					margin-right: 10px;
					font-size: 23px !important;
					cursor: pointer !important;
					color: <?php echo $ps_review_star_color; ?> !important;
				}
				#ps_review_name {
					line-height: 1.6842 !important;
					width: 100% !important;
					padding: 5px !important;
					box-sizing: border-box !important;
					height: 30px !important;
					background-image: -webkit-linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0)) !important;
					border: 1px solid #eaeaea !important;
					border: 1px solid rgba(51, 51, 51, 0.1) !important;
					color: #707070 !important;
					color: rgba(51, 51, 51, 0.7) !important;
                    font: inherit !important;
				}
				#ps_review_body {
					line-height: 1.6842 !important;
					width: 100% !important;
					padding: 5px !important;
					box-sizing: border-box !important;
					height: 60px !important;
                    font: inherit !important;
                    max-height: 90px !important;
				}
                .ps_review_field input, .ps_review_field textarea {
                    font-size: 13px !important;
                    background: white !important;
                }


			</style>

			<?php

			$ps_review_fixed_position = get_option('ps_review_fixed_position');
			if ($ps_review_fixed_position == 0 || $ps_review_fixed_position == false) {
				echo "<style>.ps_review_widget_body {position: initial !important; width:99% !important;min-height: 392px;height: 100% !important;margin-bottom: 10px;}</style>";
			}

			?>

			<div class="ps_review_widget_body">
				<form class="ps_review_widget_form">
					<input type="hidden" name="action" value="gkty_new_review"/>
					<div class="ps_review_widget_title"><i class="fa fa-star"></i> <?php echo str_replace("\\'", "'", str_replace('\"', '"', $ps_review_widget_title));?></div>
					<div class="ps_review_widget_description"><i class="fa fa-info-circle"></i> <?php echo str_replace("\\'", "'", str_replace('\"', '"', $ps_review_widget_description));?></div>

					<div class="ps_review_field">
						<label for="ps_review_name" style="line-height: 30px;"><i class="fa fa-user"></i> Your Name:</label>
						<input type="text" placeholder="eg. John Smith" required id="ps_review_name" name="ps_review_name"/>
					</div>

					<div class="ps_review_field">
						<label for="ps_review_body" style="line-height: 30px;"><i class="fa fa-pencil"></i> Your Review:</label>
						<textarea placeholder="eg. I really like this website!" required id="ps_review_body" name="ps_review_body"></textarea>
					</div>

					<div class="ps_review_field">
						<label for="ps_review_stars" style="line-height: 30px;">Your Rating:</label>
						<input type="hidden" name="ps_review_stars" value="5" id="ps_review_stars"/>
						<div class="ps_review_stars_container">
							<span class="ps_review_stars star-1" data-value="1"><i class="fa fa-star"></i></span>
							<span class="ps_review_stars star-2" data-value="2"><i class="fa fa-star"></i></span>
							<span class="ps_review_stars star-3" data-value="3"><i class="fa fa-star"></i></span>
							<span class="ps_review_stars star-4" data-value="4"><i class="fa fa-star"></i></span>
							<span class="ps_review_stars star-5" data-value="5"><i class="fa fa-star"></i></span>
						</div>
					</div>

					<button class="ps_review_widget_save" type="submit"><i class="fa fa-paper-plane"></i> Submit Review</button>

				</form>
			</div>
			<?php
		}
	}

	function update( $new_instance, $old_instance ) {
		// Save widget options
	}

	function form( $instance ) {
		// Output admin widget options form
	}
}

// Review Widget Registration Function
function register_review_widget() {
	$ps_review_widget = get_option('ps_review_widget');
	if ($ps_review_widget == '1') {
		register_widget( 'GKTY_Model_JSON_LD_REVIEW' );
	}
}

add_action( 'widgets_init', 'register_review_widget' );