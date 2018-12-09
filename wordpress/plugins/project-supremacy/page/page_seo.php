<?php

/**
 * Admin page : dashboard
 * @package GKTY_Page_SEO
 */

/**
 * Page class that handles backend page <i>dashboard ( for admin )</i> with form generation and processing
 * @package GKTY_Page_Converter
 */

if (!class_exists('GKTY_Page_SEO')) {
    class GKTY_Page_SEO
    {
        /**
         * Page slug
         */
        const PAGE_ID = 'gkty_page_seo';

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
            $this->pageHook = add_submenu_page('ps_plicense', __('SEO Settings', 'fcp_lang'), __('SEO Settings', 'fcp_lang'), 'manage_options', self::PAGE_ID, array(&$this, 'generate'));
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

	        wp_register_script('page-seo-custom.js', GKTY_Manager::$pluginURL . '/js/page-seo-custom.js', array('jquery'), null);
	        wp_enqueue_script('page-seo-custom.js');
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
            wp_enqueue_style('gkty-zozo-css');
            wp_enqueue_style('fancybox', GKTY_Manager::$pluginURL . '/js/fancybox/jquery.fancybox-1.3.6.css', false, '1.3.6', 'screen');

            wp_enqueue_style('thickbox'); // call to media files in wp
        }


        /** generate page script */
        function generate()
        {
	        $ps_disable_page_loading = get_option('ps_disable_page_loading');
            if ($ps_disable_page_loading == false) {
                $ps_disable_page_loading = 0;
            } else {
                $ps_disable_page_loading = 1;
            }

	        ?>

	        <script>
		        var disable_pages = <?php echo $ps_disable_page_loading; ?>;
	        </script>
            <style>
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
            </style>

            <link rel="stylesheet" type="text/css"
                  href="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/css/bootstrap.css">
            <script type="text/javascript"
                    src="//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.0.3/js/bootstrap.js"></script>

            <h2><i class="fa fa-bank"></i> SEO Settings</h2>

            <div class="alert alert-info" role="alert">
                <b><i class="fa fa-info-circle"></i> Info</b><br>
                <p>On this page you will be able to change the default settings for Project Supremacy SEO. Please note that the first three text boxes (Default SEO) only apply when you are not using a static page as your Front Page. Meaning, they will be active
                only when you have your latest posts displayed on Front Page.</p>
            </div>

            <div id="wrap" class="container wrap row ">

                <form class="save-seo-settings">

                <div id="tabbed-nav-seos">
                    <ul>
                        <li><a><i class="fa fa-gears"></i> Global Settings</a></li>
                        <li><a><i class="fa fa-gears"></i> Allowed Pages</a></li>
                        <li><a><i class="fa fa-gears"></i> Default Titles/Descriptions</a></li>
                    </ul>
                    <div>
                        <div>
                            <?php
                            $ps_meta_keywords = get_option('ps_meta_keywords');
                            $ps_meta_keywords_state = ($ps_meta_keywords == 1) ? 'on' : '';

                            $ps_use_default_seo = get_option('ps_use_default_seo');
                            $ps_use_default_seo_state = ($ps_use_default_seo == 1) ? 'on' : '';

                            $ps_default_title = get_option('ps_default_title');
                            $ps_default_desc = get_option('ps_default_desc');
                            $ps_default_keyword = get_option('ps_default_keyword');

                            ?>

                            <p><b><i class="fa fa-info-circle"></i> Default SEO Title</b> if you are not using a static front page for your main WordPress page, you need to set this to change SEO Title</p>

                            <div class="form-group">
                                <input placeholder="eg. My Site Title" type="text" class="form-control" id="ps_default_title" name="ps_default_title" value="<?php echo $ps_default_title; ?>"/>
                            </div>

                            <p><b><i class="fa fa-info-circle"></i> Default SEO Description</b> if you are not using a static front page for your main WordPress page, you need to set this to change SEO Description</p>

                            <div class="form-group">
                                <textarea placeholder="eg. This is a description for my website" class="form-control" rows="5" id="ps_default_desc" name="ps_default_desc"><?php echo $ps_default_desc; ?></textarea>
                            </div>

                            <p><b><i class="fa fa-info-circle"></i> Default SEO Keyword</b> if you are not using a static front page for your main WordPress page, you need to set this to change Meta Keyword</p>

                            <div class="form-group">
                                <input placeholder="eg. My Keyword" type="text" class="form-control" id="ps_default_keyword" name="ps_default_keyword" value="<?php echo $ps_default_keyword; ?>"/>
                            </div>

                            <p><b><i class="fa fa-info-circle"></i> Use Target Keyword as Meta Keywords</b> if you set this to ON, Target Keywords from your Pages/Posts will be rendered as Meta Keywords tag inside your page source.</p>

                            <div class="slider-frame" style="float:none;">
                                <span class="slider-button <?php echo $ps_meta_keywords_state; ?>" data-element="ps_meta_keywords"><?php echo ($ps_meta_keywords_state == 'on') ? "ON": "OFF"; ?></span>
                            </div>
                            <input type="hidden" name="ps_meta_keywords" id="ps_meta_keywords" value="<?php echo $ps_meta_keywords;?> ">

                            <hr>

                            <button class="button button-primary button-lg" type="submit"><i class="fa fa-save"></i> Save Changes</button>

                        </div>
                        <div>
                            <p><b><i class="fa fa-info-circle"></i> Allowed SEO Pages</b> are the pages that you select where the Project Supremacy SEO will be enabled.</p>
                            <div class="allowed_schema_pages_container">
                                <!-- Get enabled pages -->
                                <?php
                                $p = get_option('ps_seo');
                                $allowed_pages = array();
                                if (is_array($p)) {
                                    foreach($p as $id=>$page) {
                                        if ($page['enabled'] == '1') $allowed_pages[] = $id;
                                    }
                                }
                                $allowed_pages = join(',', $allowed_pages);
                                ?>
                                <script>var allowed_seo_pages = '<?php echo $allowed_pages; ?>';</script>
                                <table id="allowed_schema_pages" class="table table-hover table-stripped">
                                    <tbody>
                                    <tr><td><i class="fa fa-refresh fa-spin"></i> Loading Pages</td></tr>
                                    </tbody>
                                </table>
                            </div>
                            <button class="btn btn-success btn-select-all-allowed-pages-seo"><i class="fa fa-asterisk"></i> Check All</button>
                            <button class="btn btn-warning btn-deselect-all-allowed-pages-seo"><i class="fa fa-asterisk"></i> Uncheck All</button>

                            <hr>

                            <button class="button button-primary button-lg" type="submit"><i class="fa fa-save"></i> Save Changes</button>

                        </div>
                        <div>
                            <?php
                            $ps_seo_default_values = get_option('ps_default_seo_values');

                            $post_types = array('post','page');
                            foreach(get_post_types( array('_builtin'=>false, 'public'=>true),'names' ) as $k=>$p) {
                                $post_types[] = $p;
                            }

                            // POST TYPES
                            $changesDone = false;
                            foreach($post_types as $p) {
                                if (!isset($ps_seo_default_values[$p])) {
                                    $pa = array(
                                        'title'=>'%%title%% - %%sitename%%',
                                        'desc'=> '',
                                        'noindex_follow'=>0
                                    );
                                    $ps_seo_default_values[$p] = $pa;
                                    $changesDone = true;
                                }
                            }
                            if ($changesDone) update_option('ps_default_seo_values', $ps_seo_default_values);

                            // TAXONOMIES
                            $changesDone = false;
                            $taxonomies = get_taxonomies();
                            foreach($taxonomies as $p) {
                                if (!isset($ps_seo_default_values[$p])) {
                                    $pa = array(
                                        'title'=>'%%title%% - Archive - %%sitename%%',
                                        'desc'=> '',
                                        'noindex_follow'=>0
                                    );
                                    $ps_seo_default_values[$p] = $pa;
                                    $changesDone = true;
                                }
                            }
                            if ($changesDone) update_option('ps_default_seo_values', $ps_seo_default_values);

                            $ps_seo_default_values = get_option('ps_default_seo_values');
                            $c = 0;

                            foreach($ps_seo_default_values as $ptK=>$val)  { if ($ptK == '') continue; ?>
                                <h4><b><i class="fa fa-info-circle"></i> <?php echo ucfirst($ptK); ?></b></h4>
                                <div class="form-group">
                                    <label for="title-<?php echo $id;?>">Title template:</label>
                                    <input type="text" name="ds[<?php echo $ptK; ?>][title]" id="title-<?php echo $id;?>" class="form-control" value="<?php echo $val['title'];?>"/>
                                </div>
                                <div class="form-group">
                                    <label for="desc-<?php echo $id;?>">Description template:</label>
                                    <textarea rows="3" name="ds[<?php echo $ptK; ?>][desc]" id="desc-<?php echo $id;?>" class="form-control"><?php echo $val['desc'];?></textarea>
                                </div>
                                <div class="form-group">
                                    <input type="hidden" name="ds[<?php echo $ptK; ?>][noindex_follow]" value="0">
                                    <input type="checkbox" name="ds[<?php echo $ptK; ?>][noindex_follow]" value="1" id="noindex_follow-<?php echo $id;?>" <?php echo ($val['noindex_follow'] == 1) ? 'checked' : '';?>>
                                    <label for="noindex_follow-<?php echo $id;?>"><code>noindex, follow</code></label>
                                </div>
                                <hr>
                            <?php $c++; } ?>

                            <button class="button button-primary button-lg" type="submit"><i class="fa fa-save"></i> Save Changes</button>

                        </div>

                    </div>



                </div>

                </form>

            </div>
            <?php


        }
    }
}
