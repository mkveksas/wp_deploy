<?php
/**
 * Plugin Name: Project Supremacy Plugin
 * Plugin URI: http://projectsupremacy.com
 * Description: This plugin provides the functionality to tracking keyword by Google.com
 * Version: 2.4.78
 * Author: ProjectSupremacy (admin@projectsupremacy.com)
 * Author URI: http://projectsupremacy.com
 */

// Force Show Plugin ---> replace FALSE with TRUE
define("PS_FORCE_SHOW", FALSE);

// Turn off notices
@ini_set('display_errors', 0);
@error_reporting(0);

// Developer Updates
define('PS_DEV_UPDATES', FALSE);

// Turn this on to debug requests
define('PS_DEBUG', FALSE);

// In case of bad servers, turn following two settings to TRUE
define('BAD_SERVER', FALSE);
define('APPENGINE_PROXY', FALSE);
define('APPENGINE_URL', 'http://evident-ethos-112513.appspot.com/run?url=');

// License meta
define('PLICENSE_PRODUCT_NAME', 'PSPLUGIN');

// PS Path
define( 'PS_PATH', dirname(__FILE__));

require_once ( 'main.php' );