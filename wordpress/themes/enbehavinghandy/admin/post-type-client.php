<?php
function register_post_type_client_init() {

	$post_type_labels = array(
		'name' 				 => _x( 'Clients', 'post type general name' ),
		'singular_name' 	 => _x( 'Client', 'post type singular name' ),
		'add_new' 			 => _x( 'Add New', 'client item' ),
		'add_new_item' 		 => __( 'Add New Client' ),
		'edit_item' 		 => __( 'Edit Client' ),
		'new_item' 			 => __( 'New Client' ),
		'view_item' 		 => __( 'View Client' ),
		'search_items' 		 => __( 'Search Clients' ),
		'not_found' 		 =>  __( 'No Clients found' ),
		'not_found_in_trash' => __( 'No Clients found in the trash' ),
		'parent_item_colon'  => ''
		);

	$args = array(
		'labels' 			=> $post_type_labels,
		'singular_label' 	=> _x( 'Client', 'post type singular label' ),
		'public' 			=> true,
		'show_ui' 			=> true,
		'_builtin' 			=> false,
		'_edit_link' 		=> 'post.php?post=%d',
		'capability_type' 	=> 'post',
		'hierarchical' 		=> false,
		'rewrite' 			=> array( 'slug' => 'client' ),
		'query_var' 		=> 'client',
		'menu_position' 	=> 5,
		'menu_icon'			=>'dashicons-universal-access-alt',
		'supports' 			=> array( 'title', 'editor', 'thumbnail' ),
		);
	// Register the post type
	register_post_type( 'client',$args);

}

add_action( 'init', 'register_post_type_client_init' );