<?php

/**
 * Admin page : schema
 * @package GKTY_Page_CSchema
 */

/**
 * Page class that handles backend page <i>dashboard ( for admin )</i> with form generation and processing
 * @package GKTY_Page_Converter
 */

if (!class_exists('GKTY_Page_Schema')) {
    class GKTY_Page_Schema
    {
        /**
         * Page slug
         */
        const PAGE_ID = 'gkty_page_schema';

        /**
         * Page hook
         * @var string
         */
        protected $pageHook;

        /**
         * Constructs new page object and adds entry to Wordpress admin menu
         */
        function __construct()
        {
            $this->pageHook = add_submenu_page('ps_plicense', __('Schema Markup', 'fcp_lang'), __('Schema Markup', 'fcp_lang'), 'manage_options', self::PAGE_ID, array(&$this, 'generate'));
            add_action('load-' . $this->pageHook, array(&$this, 'init'));
            add_action('admin_print_scripts-' . $this->pageHook, array($this, 'enqueue_scripts'));
            add_action('admin_print_styles-' . $this->pageHook, array($this, 'enqueue_styles'));
        }

        /**
         * Init Process
         */
        function init()
        {
            if (isset($_GET['action']) && ($_GET['action'] == 'trash_p')) {
                GKTY_Model_Project::removeRecord(intval($_GET['p_id']));
                wp_redirect(remove_query_arg(array('action', 'p_id')));
                exit;
            }

        }

        /**
         * enqueue scripts of plugin
         */
        function enqueue_scripts()
        {
            //wp_enqueue_script('gkty-bootstrap-js');
            wp_enqueue_script('gkty-admin-js');
            wp_localize_script('gkty-admin-js', 'ajax_object', array('ajax_url' => admin_url('admin-ajax.php')));
            wp_enqueue_script('gkty-zozo-js');
            wp_enqueue_script('gkty-zozo-css');

            wp_register_script('page-spectrum', GKTY_Manager::$pluginURL . '/js/bootstrap/js/spectrum.js', array('jquery'), null);
            wp_enqueue_script('page-spectrum');

            wp_register_script('page-schema-custom.js', GKTY_Manager::$pluginURL . '/js/page-schema-custom.js', array('jquery'), null);
            wp_enqueue_script('page-schema-custom.js');
            wp_deregister_script('fancybox');
            wp_deregister_script('jquery.fancybox');
            wp_deregister_script('jquery_fancybox');
            wp_deregister_script('jquery-fancybox');
            // register main fancybox script
            wp_register_script('jquery-fancybox', GKTY_Manager::$pluginURL . '/js/fancybox/jquery.fancybox-1.3.6.js', array('jquery'), '1.3.6', true);
            wp_enqueue_script('jquery-fancybox');

            wp_enqueue_script('thickbox');
            wp_enqueue_script('media-upload');
        }

        /**
         * enqueue style sheets of plugin
         */
        function enqueue_styles()
        {
            wp_enqueue_style('gkty-bootstrap-css');
            wp_enqueue_style('gkty-fontawesome-css');
            wp_enqueue_style('gkty-admin-css');
            wp_register_style('gkty-zozo-css', GKTY_Manager::$pluginURL . '/css/zozo.tabs.min.css', array(), null, 'all');
            wp_register_style('spectrum-css', GKTY_Manager::$pluginURL . '/js/bootstrap/css/spectrum.css', array(), null, 'all');
            wp_enqueue_style('spectrum-css');
            wp_enqueue_style('gkty-zozo-css');
            wp_enqueue_style('fancybox', GKTY_Manager::$pluginURL . '/js/fancybox/jquery.fancybox-1.3.6.css', false, '1.3.6', 'screen');

            wp_enqueue_style('thickbox'); // call to media files in wp
        }

        /** generate page script */
        function generate()
        {
			$ps_allowed_pages_for_schema = get_option('ps_allowed_pages_for_schema');
			if (!$ps_allowed_pages_for_schema) {
				$ps_allowed_pages_for_schema = '';
			} else {
				$ps_allowed_pages_for_schema = join(',', $ps_allowed_pages_for_schema);
			}

			$ps_always_allow_schema = get_option('ps_always_allow_schema');
			if (!$ps_always_allow_schema) {
				$ps_always_allow_schema = '';
			} else {
				$ps_always_allow_schema = 'checked';
			}

	        $ps_disable_page_loading = get_option('ps_disable_page_loading');
			if ($ps_disable_page_loading == false) {
				$ps_disable_page_loading = 0;
			} else {
				$ps_disable_page_loading = 1;
			}

            ?>
			<script>
				var allowed_pages = '<?php echo $ps_allowed_pages_for_schema;?>';
				var disable_pages = <?php echo $ps_disable_page_loading; ?>;
			</script>
            <style>

				.btn-add-fields {
					margin-bottom:10px;
				}

	            .review-body {
		            background: white;
		            border-radius: 5px;
		            box-shadow: 0 0 5px -1px black;
		            padding: 20px;
	            }

	            input.form-control-array, .remove-form-control-array {
		            float: left;
	            }

	            button.remove-form-control-array {
		            background: #D9534F;
		            color: white;
		            border: 1px solid #D43F3A;
		            width: 22px;
		            height: 22px;
		            padding: 0;
		            margin: 6px;
		            border-radius: 3px;
	            }

	            .form-control-array-group {
		            clear:both;
	            }

                .image-title {
                    text-align: center;
                }

                .image-box {
                    box-shadow: 0px 0px 9px -1px;
                    border-radius: 5px;
                    text-align: center;
                    padding-bottom: 8px;
                    margin-bottom: 30px;
                }
                .image-box img.attachment-thumbnail.size-thumbnail {
                    border-radius: 5px;
                    margin-bottom: 5px;
                }
                .schema-body {
	                width: 100%;
	                background: white;
	                min-height: 400px;
	                box-shadow: 0px 0px 3px -1px;
	                border-radius: 5px;
	                padding: 15px;
                }
                .schema-box {
	                margin-bottom: 15px;
	                overflow: hidden;
	                padding-left: 10px;
	                box-shadow: 0px 0px 2px 0px;
	                border-radius: 4px;
	                background: #F3F3F3;
	                transition: all 0.4s;
                }
                .schema-box .form-control {
	                max-width: 400px;
                }
                .schema-box.down {
	                height: 55px;
	                background: #EBFFE8;
                }
                h3.schema-title {
	                font-size: 22px;
	                margin-top: 18px;
	                margin-bottom: 22px;
                }
	            .btn-minimize, .btn-trash {
		            width: 24px;
		            height: 24px;
		            font-size: 14px;
		            margin-top: -3px;
		            font-weight:bold;
	            }
                .btn-trash {
	                position: absolute;
	                right: 65px;
                }
                .form-group .form-group {
	                margin-left: 30px;
                }
                .btn-remove-group {
	                width: 16px;
	                height: 16px;
	                padding: 0 !important;
	                transition: all 0.4s;
	                opacity: 0.5;
	                line-height: 0 !important;
	                margin-right: 5px;
                }
	            .btn-remove-group:hover {
		            opacity: 1;
		            color: #ffffff;
	                background-color: #d9534f;
	                border-color: #d43f3a;
	            }
                .btn-new-array {
	                margin-top: 5px;
                }
	            .form-control-array {
		            margin-bottom:2px;
	            }
	            .google-map {
		            width: 500px;
		            height: 400px;
	            }
            </style>

            <link rel="stylesheet" type="text/css" href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/css/bootstrap.css"/>
            <script type="text/javascript" src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/js/bootstrap.js"></script>

	        <script type="text/javascript" src="//code.jquery.com/ui/1.11.4/jquery-ui.js"></script>
	        <link rel="stylesheet" type="text/css" href="//code.jquery.com/ui/1.11.4/themes/smoothness/jquery-ui.css"/>

	        <h2><i class="fa fa-code"></i> Schema Markup Settings</h2>

	        <div class="alert alert-info" role="alert">
		        <b><i class="fa fa-info-circle"></i> Info</b><br>
		        <p>You can use this feature to quickly make your website be better at indexing / ranking on search engines by providing generated structured data (<a href="http://schema.org">http://schema.org</a>) which helps search engines know a little bit more about your website.
		        <br>Choose your schema type, set up the fields accordingly and you'll see results in no time!</p>
	        </div>

	        <div id="tabbed-nav" data-role="z-tabs">
		        <ul>
			        <li><a><i class="fa fa-code"></i> Default Schema Markup</a></li>
			        <li><a><i class="fa fa-file-code-o"></i> Per Page Schema Markup</a></li>
			        <li><a><i class="fa fa-flag"></i> Allowed Schema Pages</a></li>
			        <li><a><i class="fa fa-bug"></i> Schema Validator</a></li>
		        </ul>
		        <div>
			        <div>
				        <p><b><i class="fa fa-info-circle"></i> Default Schemas</b> will be present on all your pages, including your homepage. To use different schemas per page, switch over to the next section.</p>
				        <div class="schema-body">

					        <div class="new-schema">
						        <button class="btn btn-success btn-new-schema"><i class="fa fa-plus"></i> Add New Schema</button>
						        <button class="btn btn-primary btn-save-schema"><i class="fa fa-save"></i> Save</button>
					        </div>
					        <div class="new-schema-dialog" style="display: none;">
						        <label for="schema_type">Schema Type:</label>
						        <select id="schema_type" name="schema_type">
<!--									<option value="Service">Service</option>-->
									<option value="Person">Person</option>
									<option value="Review">Review</option>
									<option value="VideoObject">Video</option>

									<option value="LocalBusiness">Local Business</option>
									<optgroup label="Affiliate Types">
										<option value="Product">Product</option>
									</optgroup>
									<optgroup label="Business Types">
										<option value="AccountingService">AccountingService</option>
										<option value="Attorney">Attorney</option>
										<option value="AutoBodyShop">AutoBodyShop</option>
										<option value="AutoDealer">AutoDealer</option>
										<option value="AutoPartsStore">AutoPartsStore</option>
										<option value="AutoRental">AutoRental</option>
										<option value="AutoRepair">AutoRepair</option>
										<option value="AutoWash">AutoWash</option>
										<option value="Bakery">Bakery</option>
										<option value="BarOrPub">BarOrPub</option>
										<option value="BeautySalon">BeautySalon</option>
										<option value="BedAndBreakfast">BedAndBreakfast</option>
										<option value="BikeStore">BikeStore</option>
										<option value="BookStore">BookStore</option>
										<option value="CafeOrCoffeeShop">CafeOrCoffeeShop</option>
										<option value="ChildCare">ChildCare</option>
										<option value="ClothingStore">ClothingStore</option>
										<option value="ComputerStore">ComputerStore</option>
										<option value="DaySpa">DaySpa</option>
										<option value="Dentist">Dentist</option>
										<option value="DryCleaningOrLaundry">DryCleaningOrLaundry</option>
										<option value="Electrician">Electrician</option>
										<option value="ElectronicsStore">ElectronicsStore</option>
										<option value="EmergencyService">EmergencyService</option>
										<option value="EntertainmentBusiness">EntertainmentBusiness</option>
										<option value="EventVenue">EventVenue</option>
										<option value="ExerciseGym">ExerciseGym</option>
										<option value="FinancialService">FinancialService</option>
										<option value="Florist">Florist</option>
										<option value="FoodEstablishment">FoodEstablishment</option>
										<option value="FurnitureStore">FurnitureStore</option>
										<option value="GardenStore">GardenStore</option>
										<option value="GeneralContractor">GeneralContractor</option>
										<option value="GolfCourse">GolfCourse</option>
										<option value="HVACBusiness">HVACBusiness</option>
										<option value="HairSalon">HairSalon</option>
										<option value="HardwareStore">HardwareStore</option>
										<option value="HealthAndBeautyBusiness">HealthAndBeautyBusiness</option>
										<option value="HobbyShop">HobbyShop</option>
										<option value="HobbyShop or Store">HobbyShop or Store</option>
										<option value="HomeAndConstructionBusiness">HomeAndConstructionBusiness</option>
										<option value="HomeGoodsStore">HomeGoodsStore</option>
										<option value="Hospital">Hospital</option>
										<option value="Hotel">Hotel</option>
										<option value="HousePainter">HousePainter</option>
										<option value="InsuranceAgency">InsuranceAgency</option>
										<option value="JewelryStore">JewelryStore</option>
										<option value="LiquorStore">LiquorStore</option>
										<option value="Locksmith">Locksmith</option>
										<option value="LodgingBusiness">LodgingBusiness</option>
										<option value="MedicalClinic">MedicalClinic</option>
										<option value="MensClothingStore">MensClothingStore</option>
										<option value="MobilePhoneStore">MobilePhoneStore</option>
										<option value="Motel">Motel</option>
										<option value="MotorcycleDealer">MotorcycleDealer</option>
										<option value="MotorcycleRepair">MotorcycleRepair</option>
										<option value="MovingCompany">MovingCompany</option>
										<option value="MusicStore">MusicStore</option>
										<option value="NailSalon">NailSalon</option>
										<option value="NightClub">NightClub</option>
										<option value="Notary">Notary</option>
										<option value="OfficeEquipmentStore">OfficeEquipmentStore</option>
										<option value="Optician">Optician</option>
										<option value="PetStore">PetStore</option>
										<option value="Physician">Physician</option>
										<option value="Plumber">Plumber</option>
										<option value="ProfessionalService">ProfessionalService</option>
										<option value="RVPark">RVPark</option>
										<option value="RealEstateAgent">RealEstateAgent</option>
										<option value="Residence">Residence</option>
										<option value="Restaurant">Restaurant</option>
										<option value="RoofingContractor">RoofingContractor</option>
										<option value="School">School</option>
										<option value="SelfStorage">SelfStorage</option>
										<option value="ShoeStore">ShoeStore</option>
										<option value="SkiResort">SkiResort</option>
										<option value="SportingGoodsStore">SportingGoodsStore</option>
										<option value="SportsClub">SportsClub</option>
										<option value="Store">Store</option>
										<option value="TattooParlor">TattooParlor</option>
										<option value="Taxi">Taxi</option>
										<option value="TennisComplex">TennisComplex</option>
										<option value="TireShop">TireShop</option>
										<option value="ToyStore">ToyStore</option>
										<option value="TravelAgency">TravelAgency</option>
										<option value="VeterinaryCare">VeterinaryCare</option>
										<option value="WholesaleStore">WholesaleStore</option>
										<option value="Winery">Winery</option>
									</optgroup>

								</select>
						        <button class="btn btn-success btn-create-schema"><i class="fa fa-plus"></i> Add</button>
						        <button class="btn btn-danger btn-cancel-schema"><i class="fa fa-close"></i> Cancel</button>
					        </div>

				        </div>
			        </div>
			        <div>
				        <p><b><i class="fa fa-info-circle"></i> Per Page Schemas</b> will be present only on specific pages that you select, overriding the previously set default schemas.</p>
				        <div class="form-group">
					        <label for="page-selector">Select a Page:</label>
					        <select id="page-selector" class="form-control">
						        <option value="">-- SELECT A PAGE/POST --</option>
					        </select>
				        </div>

				        <div class="schema-body-per-page hide">
					        <div class="new-schema-per-page">
						        <button class="btn btn-success btn-new-schema-per-page"><i class="fa fa-plus"></i> Add New Schema</button>
						        <button class="btn btn-primary btn-save-schema-per-page"><i class="fa fa-save"></i> Save</button>
					        </div>
					        <div class="new-schema-dialog-per-page" style="display: none;">
						        <label for="schema_type_per_page">Schema Type:</label>
						        <select id="schema_type_per_page" name="schema_type_per_page">

							        <option value="Review">Review</option>
							        <option value="VideoObject">Video</option>

									<option value="LocalBusiness">Local Business</option>
									<optgroup label="Affiliate Types">
										<option value="Product">Product</option>
									</optgroup>
									<optgroup label="Business Types">
										<option value="AccountingService">AccountingService</option>
										<option value="Attorney">Attorney</option>
										<option value="AutoBodyShop">AutoBodyShop</option>
										<option value="AutoDealer">AutoDealer</option>
										<option value="AutoPartsStore">AutoPartsStore</option>
										<option value="AutoRental">AutoRental</option>
										<option value="AutoRepair">AutoRepair</option>
										<option value="AutoWash">AutoWash</option>
										<option value="Bakery">Bakery</option>
										<option value="BarOrPub">BarOrPub</option>
										<option value="BeautySalon">BeautySalon</option>
										<option value="BedAndBreakfast">BedAndBreakfast</option>
										<option value="BikeStore">BikeStore</option>
										<option value="BookStore">BookStore</option>
										<option value="CafeOrCoffeeShop">CafeOrCoffeeShop</option>
										<option value="ChildCare">ChildCare</option>
										<option value="ClothingStore">ClothingStore</option>
										<option value="ComputerStore">ComputerStore</option>
										<option value="DaySpa">DaySpa</option>
										<option value="Dentist">Dentist</option>
										<option value="DryCleaningOrLaundry">DryCleaningOrLaundry</option>
										<option value="Electrician">Electrician</option>
										<option value="ElectronicsStore">ElectronicsStore</option>
										<option value="EmergencyService">EmergencyService</option>
										<option value="EntertainmentBusiness">EntertainmentBusiness</option>
										<option value="EventVenue">EventVenue</option>
										<option value="ExerciseGym">ExerciseGym</option>
										<option value="FinancialService">FinancialService</option>
										<option value="Florist">Florist</option>
										<option value="FoodEstablishment">FoodEstablishment</option>
										<option value="FurnitureStore">FurnitureStore</option>
										<option value="GardenStore">GardenStore</option>
										<option value="GeneralContractor">GeneralContractor</option>
										<option value="GolfCourse">GolfCourse</option>
										<option value="HVACBusiness">HVACBusiness</option>
										<option value="HairSalon">HairSalon</option>
										<option value="HardwareStore">HardwareStore</option>
										<option value="HealthAndBeautyBusiness">HealthAndBeautyBusiness</option>
										<option value="HobbyShop">HobbyShop</option>
										<option value="HobbyShop or Store">HobbyShop or Store</option>
										<option value="HomeAndConstructionBusiness">HomeAndConstructionBusiness</option>
										<option value="HomeGoodsStore">HomeGoodsStore</option>
										<option value="Hospital">Hospital</option>
										<option value="Hotel">Hotel</option>
										<option value="HousePainter">HousePainter</option>
										<option value="InsuranceAgency">InsuranceAgency</option>
										<option value="JewelryStore">JewelryStore</option>
										<option value="LiquorStore">LiquorStore</option>
										<option value="Locksmith">Locksmith</option>
										<option value="LodgingBusiness">LodgingBusiness</option>
										<option value="MedicalClinic">MedicalClinic</option>
										<option value="MensClothingStore">MensClothingStore</option>
										<option value="MobilePhoneStore">MobilePhoneStore</option>
										<option value="Motel">Motel</option>
										<option value="MotorcycleDealer">MotorcycleDealer</option>
										<option value="MotorcycleRepair">MotorcycleRepair</option>
										<option value="MovingCompany">MovingCompany</option>
										<option value="MusicStore">MusicStore</option>
										<option value="NailSalon">NailSalon</option>
										<option value="NightClub">NightClub</option>
										<option value="Notary">Notary</option>
										<option value="OfficeEquipmentStore">OfficeEquipmentStore</option>
										<option value="Optician">Optician</option>
										<option value="PetStore">PetStore</option>
										<option value="Physician">Physician</option>
										<option value="Plumber">Plumber</option>
										<option value="ProfessionalService">ProfessionalService</option>
										<option value="RVPark">RVPark</option>
										<option value="RealEstateAgent">RealEstateAgent</option>
										<option value="Residence">Residence</option>
										<option value="Restaurant">Restaurant</option>
										<option value="RoofingContractor">RoofingContractor</option>
										<option value="School">School</option>
										<option value="SelfStorage">SelfStorage</option>
										<option value="ShoeStore">ShoeStore</option>
										<option value="SkiResort">SkiResort</option>
										<option value="SportingGoodsStore">SportingGoodsStore</option>
										<option value="SportsClub">SportsClub</option>
										<option value="Store">Store</option>
										<option value="TattooParlor">TattooParlor</option>
										<option value="Taxi">Taxi</option>
										<option value="TennisComplex">TennisComplex</option>
										<option value="TireShop">TireShop</option>
										<option value="ToyStore">ToyStore</option>
										<option value="TravelAgency">TravelAgency</option>
										<option value="VeterinaryCare">VeterinaryCare</option>
										<option value="WholesaleStore">WholesaleStore</option>
										<option value="Winery">Winery</option>
									</optgroup>


						        </select>
						        <button class="btn btn-success btn-create-schema-per-page"><i class="fa fa-plus"></i> Add</button>
						        <button class="btn btn-danger btn-cancel-schema-per-page"><i class="fa fa-close"></i> Cancel</button>
					        </div>

				        </div>
			        </div>
					<div>
						<p><b><i class="fa fa-info-circle"></i> Allowed Schema Pages</b> are the pages that you select where the default schema will appear if there are no set Per Page Schema settings for that particular page.</p>

						<input type="checkbox" id="ps_always_allow_schema" name="ps_always_allow_schema" <?php echo $ps_always_allow_schema; ?> value="1"/>
						<label for="ps_always_allow_schema"> Always show Default Schema on Pages <small>(applies only to Pages/Posts without set Per Page Schema)</small></label>

						<div class="allowed_schema_pages_container">
						<table id="allowed_schema_pages" class="table table-hover table-stripped">
							<tbody>

							</tbody>
						</table>
						</div>
						<button class="btn btn-success btn-select-all-allowed-pages"><i class="fa fa-asterisk"></i> Select All</button>
						<button class="btn btn-primary btn-save-allowed-pages"><i class="fa fa-save"></i> Save Changes</button>
					</div>
					<div>
						<p><b><i class="fa fa-info-circle"></i> Schema Validator</b> is used to view how the search engines see Schema Markups on your pages.</p>
						<p>If by any chance you are having troubles with using Schema Validator, you can always use Google's official <a target="_blank" href="https://developers.google.com/structured-data/testing-tool/">Structured Data Testing Tool HERE</a>.</p>
						<div class="form-group">
							<label for="validator-page-selector">Select a Page:</label>
							<select id="validator-page-selector" class="form-control">
								<option value="http://<?php echo $_SERVER['SERVER_NAME'];?>" selected>Homepage</option>
							</select>
						</div>
						<div class="form-group">
							<button type="button" class="btn btn-success btn-run-validation"><i class="fa fa-code"></i> Run Schema Validation Test</button>
						</div>
						<hr>

						<h3><i class="fa fa-cogs"></i> Output <small class="validation-result"></small></h3>
						<pre class="pre-output">Run Schema Validation Test to see the results here.</pre>

						<style>
							.pre-output {
								font-family: 'Consolas';
								background: #ECECEC;
								padding: 15px;
								border-radius: 5px;
							}
						</style>

					</div>
		        </div>
	        </div>

	        <h2><i class="fa fa-star"></i> Review Widget</h2>

	        <div class="alert alert-info" role="alert">
		        <b><i class="fa fa-info-circle"></i> Info</b><br>
		        <p>You can turn on the review widget so your users can leave their reviews for your products / pages / posts. Simply enable it, select a template and review widget will be available on all your pages/posts.</p>
		        <p>In order to turn on the Review Widget, please go to <a target="_blank" href="<?php echo admin_url(); ?>widgets.php">Widgets</a> and drag it into your sidebar.</p>
	        </div>

	        <div class="review-body">

		        <form class="save-review-widget">

			        <?php
			            $ps_review_widget = get_option('ps_review_widget');
			            $ps_per_page_review = get_option('ps_per_page_review');
			            $ps_review_fixed_position = get_option('ps_review_fixed_position');
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

			            if ($ps_review_widget_title == false || empty($ps_review_widget_title)) {
				            $ps_review_widget_title = '';
			            }

			            if ($ps_review_widget_description == false || empty($ps_review_widget_description)) {
				            $ps_review_widget_description = '';
			            }

			            if ($ps_per_page_review == false || empty($ps_per_page_review)) {
							$ps_per_page_review = '';
			            } else {
				            if ($ps_per_page_review == '1') {
								$ps_per_page_review = 'checked';
				            }
			            }

			            if ($ps_review_fixed_position == false || empty($ps_review_fixed_position)) {
				            $ps_review_fixed_position = '';
			            } else {
				            if ($ps_review_fixed_position == '1') {
					            $ps_review_fixed_position = 'checked';
				            }
			            }

					$ps_per_page_review = ($ps_per_page_review == 'checked') ? 'on' : '';
					$ps_per_page_review_enabled = ($ps_per_page_review == 'on') ? 1 : 0;

					$ps_review_fixed_position = ($ps_review_fixed_position == 'checked') ? 'on' : '';
					$ps_review_fixed_position_enabled = ($ps_review_fixed_position == 'on') ? 1 : 0;

			        ?>

		        <div class="row">
			        <div class="col-md-12">
				        <div class="form-group">
							<div class="slider-frame">
								<span class="slider-button <?php echo $ps_per_page_review; ?>" data-element="ps_per_page_review"><?php echo ($ps_per_page_review == 'on') ? "ON": "OFF"; ?></span>
							</div>
							<input type="hidden" name="ps_per_page_review" id="ps_per_page_review" value="<?php echo $ps_per_page_review_enabled;?> ">
							<label class="slider-label">Enable Per Page Reviews <small>(Reviews will be assigned accordingly to the page on which the user was when leaving a review. Leave this unchecked to have reviews be global - all reviews are applied to homepage reviews)</small></label>
							<div class="clear"></div>
				        </div>
				        <div class="form-group">
							<div class="slider-frame">
								<span class="slider-button <?php echo $ps_review_fixed_position; ?>" data-element="ps_review_fixed_position"><?php echo ($ps_review_fixed_position == 'on') ? "ON": "OFF"; ?></span>
							</div>
							<input type="hidden" name="ps_review_fixed_position" id="ps_review_fixed_position" value="<?php echo $ps_review_fixed_position_enabled;?> ">
							<label class="slider-label">Use Fixed Widget Position <small>(Un-check this to let your review widget follow the widget area parent, instead of having fixed bottom right position)</small></label>
							<div class="clear"></div>
				        </div>
			        </div>
		        </div>

			        <!-- Templates CSS -->
			        <style>

                        #ps_review_name {
                            line-height: 1.6842;
                            width: 100%;
                            padding: 5px;
                            box-sizing: border-box;
                            height: 30px;
                            background-image: -webkit-linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 0));
                            border: 1px solid #eaeaea;
                            border: 1px solid rgba(51, 51, 51, 0.1);
                            color: #707070;
                            color: rgba(51, 51, 51, 0.7);
                        }
                        #ps_review_body {
                            line-height: 1.6842;
                            width: 100%;
                            padding: 5px;
                            box-sizing: border-box;
                            height: 60px;
                            max-height: 90px;
                        }
                        .ps_review_widget_body label {
                            font-family: "<?php echo str_replace('+', ' ', $ps_review_font) ?>";
                        }
                        .ps_review_widget_body div {
                            font-family: "<?php echo str_replace('+', ' ', $ps_review_font) ?>";
                        }
                        .ps_review_widget_body button {
                            font-family: "<?php echo str_replace('+', ' ', $ps_review_font) ?>";
                        }
				        .ps_review_widget_body {
                            width: 290px;
                            height: 432px;
                            position: fixed;
                            background: #FFFFFF;
                            bottom: -395px;
                            z-index: 9999;
                            right: 55px;
                            box-shadow: 0px 0px 10px -1px black;
                            transition: all 0.4s;
                            line-height: 1.6842;
                            box-sizing: border-box;
				        }
				        .ps_review_widget_title {
                            background: <?php echo $ps_review_title_background_color ?>;
                            padding: 6px;
                            font-size: 15px;
                            font-weight: 700;
                            cursor: pointer;
                            color: <?php echo $ps_review_title_text_color ?>;
				        }
				        .ps_review_widget_description {
                            background: <?php echo $ps_review_description_background_color ?>;
                            padding: 3px 8px 5px 8px;
                            font-size: 13px;
                            margin-top: 5px;
                            border-bottom: 2px solid <?php echo $ps_review_description_border ?>;
                            font-weight: 700;
                            word-spacing: -1px;
                            line-height: 16px;
                            color: <?php echo $ps_review_description_text_color ?>;
				        }
                        .ps_review_field{
                            border-left: 5px solid <?php echo $ps_review_input_border ?>;
                            padding: 6px;
                            margin-top: 6px;
                            background: <?php echo $ps_review_input_background ?>;
                            margin-left: 6px;
                            margin-right: 6px;
                        }
				        .ps_review_field label {
					        font-size: 12px;
                            display: block;
                            color: <?php echo $ps_review_input_text ?>;
                            margin-bottom: 0;
                            font-weight: 700;
				        }
				        .ps_review_field input,.ps_review_field textarea {
					        font-size: 13px;
					        background: white;
				        }
				        .ps_review_widget_body hr {
					        margin-bottom: 2px;
				        }
                        .ps_review_widget_save_template:hover {
                            background: <?php echo $ps_review_submit_hover ?>;
                        }
                        button.ps_review_widget_save_template {
                            margin-top: 8px;
                            font-size: 16px;
                            outline: 0;
                            padding: 7px;
                            font-weight: 700;
                            text-transform: none;
                            cursor: pointer;
                            width: 100%;
                            border-left: 0px solid !important;
                            border-right: 0px solid !important;
                            background: <?php echo $ps_review_submit_background ?>;
                            color: <?php echo $ps_review_submit_text ?>;
                            border: 1px solid #c1c1c1;
                        }
                        .ps_review_widget_save:hover {
                            background: #90D1E7 !important;
                        }
				        button.ps_review_widget_save {
                            margin-top: 8px;
                            font-size: 16px;
                            outline: 0;
                            padding: 7px;
                            font-weight: 700;
                            text-transform: none;
                            cursor: pointer;
                            width: 100%;
                            border-left: 0px solid !important;
                            border-right: 0px solid !important;
                            background: <?php echo $ps_review_submit_background ?> !important;
                            color: <?php echo $ps_review_submit_text ?> !important;
                            border: 1px solid #c1c1c1;
				        }
				        .ps_review_stars {
					        font-size: 20px;
					        cursor: pointer;
                            color: <?php echo $ps_review_star_color; ?> !important;
				        }
				        .template-body img {
					        width: 100%;
					        box-shadow: 0px 0px 2px 0px;
					        opacity: 0.3;
					        transition: all 0.4s;
					        cursor: pointer;
				        }
				        .template-body img:hover {
					        opacity: 1;
				        }
				        .template-body.selected img {
					        opacity: 1;
					        border: 2px solid #428BCA;
				        }
			        </style>

	            <div class="row">
		            <div class="col-md-4">
			            <h4><i class="fa fa-gears"></i> Settings</h4>
			            <div class="form-group">
							<label for="ps_review_widget_title">Widget Title:</label>
							<input type="text" class="form-control" placeholder="eg. Widget Title" required id="ps_review_widget_title" value="<?php echo $ps_review_widget_title; ?>" name="ps_review_widget_title"/>
						</div>
			            <div class="form-group">
				            <label for="ps_review_widget_description">Widget Description:</label>
				            <textarea class="form-control" placeholder="eg. Widget Description" required id="ps_review_widget_description" name="ps_review_widget_description"><?php echo $ps_review_widget_description; ?></textarea>
			            </div>
			            <div class="form-group">
				            <button class="btn btn-primary" type="submit"><i class="fa fa-save"></i> Save Changes</button>
			            </div>


			            <hr>

			            <h4><i class="fa fa-code"></i> Displaying Reviews</h4>
			            <div class="alert alert-info" role="alert">
				            <b><i class="fa fa-info-circle"></i> Info</b><br>
				            <p>In order to have your reviews displayed on some page, please use the shortcode from below in one of your pages/posts. If you have <b>Enable Per Page Reviews</b> checked on, the page that has the shortcode
					            will show only reviews from that specific page, otherwise it will show all of reviews on that page.</p>
			            </div>
			            <pre>[ps_reviews]</pre>

		            </div>
                    <link href='https://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>
                    <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
                    <link href='https://fonts.googleapis.com/css?family=Roboto+Condensed' rel='stylesheet' type='text/css'>
                    <link href='https://fonts.googleapis.com/css?family=Lato' rel='stylesheet' type='text/css'>
                    <link href='https://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
                    <link href='https://fonts.googleapis.com/css?family=Montserrat' rel='stylesheet' type='text/css'>
                    <link href='https://fonts.googleapis.com/css?family=Source+Sans+Pro' rel='stylesheet' type='text/css'>
                    <link href='https://fonts.googleapis.com/css?family=PT+Sans' rel='stylesheet' type='text/css'>
                    <link href='https://fonts.googleapis.com/css?family=Ubuntu' rel='stylesheet' type='text/css'>
                    <link href='https://fonts.googleapis.com/css?family=Droid+Sans' rel='stylesheet' type='text/css'>
                    <link href='https://fonts.googleapis.com/css?family=Merriweather' rel='stylesheet' type='text/css'>
		            <div class="col-md-8">
			            <input type="hidden" name="ps_review_widget_template" id="ps_review_widget_template" value="<?php echo $ps_review_widget_template; ?>"/>
			            <h4><i class="fa fa-photo"></i> Customize <small>- combine colors and make your own template for widget</small></h4>
			            <hr>
			            <div class="row">
				            <div class="col-md-6">
                                <div class="form-group">
                                    <label for="ps_review_font">Choose Widget Font:</label>
                                    <select class="form-control" id="ps_review_font" name="ps_review_font">
                                        <option value="Open+Sans">Open Sans</option>
                                        <option value="Roboto">Roboto</option>
                                        <option value="Roboto+Condensed">Roboto Condensed</option>
                                        <option value="Lato">Lato</option>
                                        <option value="Oswald">Oswald</option>
                                        <option value="Montserrat">Montserrat</option>
                                        <option value="Source+Sans+Pro">Source Sans Pro</option>
                                        <option value="PT+Sans">PT Sans</option>
                                        <option value="Ubuntu">Ubuntu</option>
                                        <option value="Droid+Sans">Droid Sans</option>
                                        <option value="Merriweather">Merriweather</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="ps_review_title_background_color">Title Background Color:</label>
                                    <input type="text" class="form-control" id="ps_review_title_background_color" value="<?php echo $ps_review_title_background_color ?>" name="ps_review_title_background_color"/>
                                </div>

                                <div class="form-group">
                                    <label for="ps_review_title_text_color">Title Text Color:</label>
                                    <input type="text" class="form-control" id="ps_review_title_text_color" value="<?php echo $ps_review_title_text_color ?>" name="ps_review_title_text_color"/>
                                </div>

                                <div class="form-group">
                                    <label for="ps_review_description_background_color">Description Background Color:</label>
                                    <input type="text" class="form-control" id="ps_review_description_background_color" value="<?php echo $ps_review_description_background_color ?>" name="ps_review_description_background_color"/>
                                </div>

                                <div class="form-group">
                                    <label for="ps_review_description_text_color">Description Color:</label>
                                    <input type="text" class="form-control" id="ps_review_description_text_color" value="<?php echo $ps_review_description_text_color ?>" name="ps_review_description_text_color"/>
                                </div>

                                <div class="form-group">
                                    <label for="ps_review_description_border">Description Border Color:</label>
                                    <input type="text" class="form-control" id="ps_review_description_border" value="<?php echo $ps_review_description_border ?>" name="ps_review_description_border"/>
                                </div>

                                <div class="form-group">
                                    <label for="ps_review_input_text">Input Text Color:</label>
                                    <input type="text" class="form-control" id="ps_review_input_text" value="<?php echo $ps_review_input_text ?>" name="ps_review_input_text"/>
                                </div>

                                <div class="form-group">
                                    <label for="ps_review_input_background">Input Background Color:</label>
                                    <input type="text" class="form-control" id="ps_review_input_background" value="<?php echo $ps_review_input_background ?>" name="ps_review_input_background"/>
                                </div>
                                <div class="form-group">
                                    <label for="ps_review_input_border">Input Border Color:</label>
                                    <input type="text" class="form-control" id="ps_review_input_border" value="<?php echo $ps_review_input_border ?>" name="ps_review_input_border"/>
                                </div>

                                <div class="form-group">
                                    <label for="ps_review_submit_text">Submit Button Text Color:</label>
                                    <input type="text" class="form-control" id="ps_review_submit_text" value="<?php echo $ps_review_submit_text ?>" name="ps_review_submit_text"/>
                                </div>
                                <div class="form-group">
                                    <label for="ps_review_submit_background">Submit Button Background Color:</label>
                                    <input type="text" class="form-control" id="ps_review_submit_background" value="<?php echo $ps_review_submit_background ?>" name="ps_review_submit_background"/>
                                </div>

                                <div class="form-group">
                                    <label for="ps_review_submit_hover">Submit Button Hover Color:</label>
                                    <input type="text" class="form-control" id="ps_review_submit_hover" value="<?php echo $ps_review_submit_hover ?>" name="ps_review_submit_hover"/>
                                </div>


								<div class="form-group">
									<label for="ps_review_star_color">Stars Color:</label>
									<input type="text" class="form-control" id="ps_review_star_color" value="<?php echo $ps_review_star_color ?>" name="ps_review_star_color"/>
								</div>

                                <button type="button" class="btn btn-danger reset_widget_colors"><i class="fa fa-refresh"></i> Reset Defaults Colors</button>

				            </div>
                            <script>
                                var ps_review_title_background_color = "<?php echo $ps_review_title_background_color ?>";
                                var selected_font = "<?php echo $ps_review_font ?>";
                            </script>
				            <div class="col-md-6">
                                <div class="ps_review_widget_body" style="position: initial;height: 397px;">
                                    <form class="ps_review_widget_form">
                                        <input type="hidden" name="action" value="gkty_new_review"/>
                                        <div class="ps_review_widget_title"><i class="fa fa-star"></i> <?php echo $ps_review_widget_title;?></div>
                                        <div class="ps_review_widget_description"><i class="fa fa-info-circle"></i> <?php echo $ps_review_widget_description;?></div>

                                        <div class="ps_review_field">
                                            <label for="ps_review_name"><i class="fa fa-user"></i> Your Name:</label>
                                            <input type="text" placeholder="eg. John Smith" id="ps_review_name" name="ps_review_name"/>
                                        </div>

                                        <div class="ps_review_field">
                                            <label for="ps_review_body"><i class="fa fa-pencil"></i> Your Review:</label>
                                            <textarea placeholder="eg. I really like this website!" id="ps_review_body" name="ps_review_body"></textarea>
                                        </div>

                                        <div class="ps_review_field">
                                            <label for="ps_review_stars">Your Rating:</label>
                                            <input type="hidden" name="ps_review_stars" value="5" id="ps_review_stars"/>
                                            <div class="ps_review_stars_container">
                                                <span class="ps_review_stars star-1" data-value="1"><i class="fa fa-star"></i></span>
                                                <span class="ps_review_stars star-2" data-value="2"><i class="fa fa-star"></i></span>
                                                <span class="ps_review_stars star-3" data-value="3"><i class="fa fa-star"></i></span>
                                                <span class="ps_review_stars star-4" data-value="4"><i class="fa fa-star"></i></span>
                                                <span class="ps_review_stars star-5" data-value="5"><i class="fa fa-star"></i></span>
                                            </div>
                                        </div>

                                        <button class="ps_review_widget_save_template" type="button"><i class="fa fa-paper-plane"></i> Submit Review</button>

                                    </form>
                                </div>
				            </div>
			            </div>
		            </div>
	            </div>

		        </form>

	        </div>


	        <h2><i class="fa fa-book"></i> Manage Reviews</h2>

			<div class="alert alert-info" role="alert">
				<b><i class="fa fa-info-circle"></i> Info</b><br>
				<p>Overview and management of all reviews left either for homepage or for a single page.</p>
			</div>

	        <div class="review-body">
				<div id="tabbed-nav-manage-review" data-role="z-tabs">
					<ul>
						<li><a><i class="fa fa-code"></i> Homepage Reviews</a></li>
						<li><a><i class="fa fa-file-code-o"></i> Per Page Reviews</a></li>
					</ul>
					<div>
						<div>
							<p><b><i class="fa fa-info-circle"></i> Homepage Reviews</b> will be populated when either user leaves a review on your homepage or if he leaves a review anywhere on the website while you have "Enable Per Page Reviews" checked.</p>
							<div class="schema-body-review">
								<button class="btn btn-primary btn-save-schema-review"><i class="fa fa-save"></i> Save</button>
							</div>
						</div>
						<div>
							<p><b><i class="fa fa-info-circle"></i> Per Page Reviews</b> will be populated only by leaving a review on specific pages while "Enable Per Page Reviews" is checked on.</p>
							<div class="form-group">
								<label for="page-selector-review">Select a Page:</label>
								<select id="page-selector-review" class="form-control">
									<option value="">-- SELECT A PAGE/POST --</option>
								</select>
							</div>

							<div class="schema-body-per-page-review hide">
								<button class="btn btn-primary btn-save-schema-per-page-review"><i class="fa fa-save"></i> Save Changes</button>
							</div>
						</div>
					</div>
				</div>
	        </div>


			<?php
        }
    }
}
