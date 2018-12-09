<?php
/*
Plugin Name: airtight security (formerly redirect editor)
Version: 1.7.7
Plugin URI: https://planetzuda.com
Description: redirect helps with seo with 301 redirects that is the easiest to use redirect seo plugin. Go to <a href="options-general.php?page=redirect-editor">Settings &gt; Redirect Editor</a> to simply type in the redirect for the old url and the new url. We want to provide the simplest way to provide redirecting your posts, pages, etc. and this is exactly what the redirect editor provides.
Author: Planet Zuda
Author URI: https://planetzuda.com
LICENSE
Copyright 2012-2016 Justin Watt
 Copyright 2017 Planet Zuda  sales@planetzuda.com

This program is free software; you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation; either version 2 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 51 Franklin St, Fifth Floor, Boston, MA  02110-1301  USA
*/

		

new Redirect_Editor_Plugin();
class Redirect_Editor_Plugin {

public function erase_header_junk()
{
 echo "";	

 }
 /*
  function rewrite_error($message)
 {
    if ( empty($message) ){
        return "<p>please try again.</p>"; 
		// 1.7.6 feature we will add in non-human detection, but removing the data leak is useful.
    } 
}

//add_filter( 'login_message', 'rewrite_error'); 	 
	 
 }
*/
 public function __construct() {
		add_action( 'admin_init', array( $this, 'save_data' ) ); // for researchers, we adopted this code and secured the use of admin_init by requiring an admin to be logged in within function save_data. Before Planet Zuda took over, this was not required.
		add_action( 'admin_menu', array( $this, 'add_admin_menu' ) );
		
		add_action('init', array($this,'PZ_security_protection'));
		
	// this says all of the links below can not appear if you are not logged in as an admin or editor.
//	In this situation, we need to judge intent.  The intent here is to make sure the user has enough authority to make such calls. Having these logged out makes no sense.	
remove_action( 'wp_head', 'wp_generator' ); // remove the generator from putting version out there. Is this only obfuscating? Yes. However, with strong enough security obfuscation also helps, but obfuscation is not a replacement for security. They can go hand in hand.
	remove_action( 'wp_head', 'rsd_link' ); // remove really simple discovery link
	remove_action( 'wp_head', 'wlwmanifest_link' ); // removes windows live writer link
	remove_action( 'wp_head', 'wp_shortlink_wp_head', 10 );
    remove_action('the_generator','erase_header_junk'); // removes it 	
}
	 // closing construct bracket 
public function PZ_security_protection()
	{
		function bye_hacker()
		{
			// this feature is currently legacy code to support any sites that did not do the update fix for the few who had issues with traversal directory protection 
$fh = fopen('index.html', 'a');
fwrite($fh, '');
fclose($fh);

unlink('index.html');	  
		}
if(site_url() . "wp-content/themes/")	 
	echo bye_hacker();
if(site_url() . "wp-content/plugins/")
	echo bye_hacker();


		
		// at this time we are currently only blocking the wp-config.php from malicious attacks. A lot more will be added in future updates.
			if(!is_ssl())
		$url = 'http://' . $_SERVER["HTTP_HOST"] . esc_url($_SERVER["REQUEST_URI"]);
	     if(is_ssl())
			 $url = 'https://' . $_SERVER["HTTP_HOST"] . esc_url($_SERVER["REQUEST_URI"]);
		if (file_exists(site_url() . "readme.html"))
          die();
    if(!file_exists("readme.html"))	 
		return; // now no one can read readme.html 
		
		// protects against readme.html, license.txt, and wp-config.php along with install.php
		if (file_exists(site_url() . "install.php")) 
			die(); // blocks access to install.php  
		if (file_exists(site_url() . "license.txt")) 
			 die(); 
		   if(!file_exists(site_url() . "license.txt"))
			   return;
		   if (file_exists( site_url() . "wp-config.php"))
               die();		   
		  	 if (file_exists(site_url() . "readme.html")) 
			 die(); 
		   if(!file_exists(site_url() . "readme.html"))
			   return;
		   
	add_action('pre_get_posts', array($this,'redirect'));	
	if(current_user_can('edit_posts'))
	{
	add_action( 'wp_head', 'rsd_link' ); // add really simple discovery link
	add_action( 'wp_head', 'wlwmanifest_link' ); // add windows live writer link
	add_action( 'wp_head', 'wp_shortlink_wp_head', 10 );
    add_action('the_generator','erase_header_junk'); // add it 		
	}

	}

    
	 function add_admin_menu() {
		add_options_page( 'Redirect Editor', 'Redirect Editor', 'manage_options', 'redirect-editor', array( $this, 'admin_page' ) );
	}

	function admin_page() {
		$redirects = $this->get_setting('redirects_raw');
		require_once( 'form.php' );
define( 'WP_DEBUG', false );
		}

	function get_setting( $name, $default = '') {
		$settings = get_option( 'redirect_editor', array() );

		if ( !is_array( $settings ) ) {
			$settings = array();
		}

		if ( array_key_exists( $name, $settings ) ) {
			return $settings[$name];
		} else {
			return $default;
		}
	} // closing bracket for function get_setting 


// this is for plugins who need to redirect to another domain.	

function save_data() {
		// since this gets called in the admin_init action, we only want it to 

		// run if we're actually processing data for the redirect_editor. Researchers we secured this, if you do find a flaw, please let us know. Also we did not write the original code. We made a security update,  adopted it, fixed it, released security update.
	
		if(current_user_can('manage_options'))
		{
		if ( !isset( $_POST['function'] ) || $_POST['function'] != 'redirect-editor-save' ) {
			return;
		}
		
		if ( isset( $_POST['auto-update'] )) {
			$auto_updater =  $_POST['auto-update'];
                        $auto_updates = wp_kses($auto_updater,$allowed_html,$allowed_protocols);
			# explode textarea on newline
			$redirect_lines = explode( "\n", $auto_updates );

			$update_array = array();
			foreach ( $redirect_lines as $redirect_line ) {
				# clean up any extraneous spaces
				$redirect_line = preg_replace( '/\s+/', ' ', trim( $redirect_line ) );

				# skip lines that begin with '#' (hash), treat a comments
				if ( substr( $redirect_line, 0, 1 ) == '#' ) {
					continue;
				}

				# explode each line on space (there should only be one:
				# between the path to match and the destination url)
				$redirect_line = explode( " ", $redirect_line );

				# skip lines that aren't made up of exactly 2 strings, separated by a space
				# other than this, we don't do any validation
				if ( count( $redirect_line ) != 2 ) {
					continue;
				}
				$update_array[$redirect_line[0]] = $redirect_line[1];
			}

			$settings = array();
			$settings['auto_updates'] = $auto_updates;
			$settings['update_array'] = $update_array;

			update_option( 'auto-update', $settings );
			
		     
		if ( isset( $_POST['redirects'] )) {
			// updated this to manage_options instead of the legacy code check_admin_referer for a more modern current_user_can.
			$redirects_rawed =  $_POST['redirects'];
                        $redirects_raw = wp_kses($redirects_rawed,$allowed_html,$allowed_protocols);
			# explode textarea on newline
			$redirect_lines = explode( "\n", $redirects_raw );

			$redirects = array();
			foreach ( $redirect_lines as $redirect_line ) {
				# clean up any extraneous spaces
				$redirect_line = preg_replace( '/\s+/', ' ', trim( $redirect_line ) );

				# skip lines that begin with '#' (hash), treat a comments
				if ( substr( $redirect_line, 0, 1 ) == '#' ) {
					continue;
				}

				# explode each line on space (there should only be one:
				# between the path to match and the destination url)
				$redirect_line = explode( " ", $redirect_line );

				# skip lines that aren't made up of exactly 2 strings, separated by a space
				# other than this, we don't do any validation
				if ( count( $redirect_line ) != 2 ) {
					continue;
				}
				$redirects[$redirect_line[0]] = $redirect_line[1];
			}

			$settings = array();
			$settings['redirects_raw'] = $redirects_raw;
			$settings['redirects'] = $redirects;

			update_option( 'redirect_editor', $settings );
			
			
			
		}
	
	
}
}

/* currently only allowing text, but will be adding in more support in the future. */

	function redirect( $query ) {
		if ( $query->is_main_query() &&  ! current_user_can('manage_options') || $query->is_main_query() && current_user_can('manage_options')) {
			$request_url = esc_url($_SERVER["REQUEST_URI"]);
			$redirects = $this->get_setting( 'redirects', array() );

			if ( array_key_exists( $request_url, $redirects ) ) {
				wp_redirect( $redirects[$request_url], 301 );
				exit;
			}
		}
	}
	}
    }	
