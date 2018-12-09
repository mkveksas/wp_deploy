<?php
/*
Plugin Name: CDN Assets Loader
Description: Load CSS/JS assets from CDN instead of the local server.
Author: Chris Jones
Version: 1.0
*/

namespace IA_CDN_LOADER;

if( ! defined( 'ABSPATH' ) ) {
    exit;
}

add_action( 'template_redirect', function() {

    if( ! defined( 'CDN_URL' ) ) {
        return;
    }

    require_once plugin_dir_path(__FILE__) . '/src/CdnRewrite.php';
    $cdnRewrite = new CdnRewrite( CDN_URL, get_home_url(), CDN_VERSION_KEY , CDN_VERSION_MONTH);
    $cdnRewrite->add_filters();
});
