<?php
function register_post_type_location_init() {
  $labels = array(
    'name' 					=> _x( 'Locations','post type general name','pwd'),
    'singular_name' 		=> _x( 'Location','post type general name','pwd'),
    'add_new' 				=>  __( 'Add New','pwd'),
    'add_new_item' 			=>  __( 'Add New Location','pwd'),
    'edit_item' 			=>  __( 'Edit Location','pwd'),
    'new_item' 				=>  __( 'New Location','pwd'),
    'all_items' 			=>  __( 'All Locations','pwd'),
    'view_item' 			=>  __( 'View Location','pwd'),
    'search_items' 			=>  __( 'Search Locations','pwd'),
    'not_found' 			=>  __( 'No locations found','pwd'),
    'not_found_in_trash' 	=>  __( 'No locations found in Trash', 'pwd'),
    'menu_name' 			=>  __( 'Locations','pwd')
    );
  $args = array(
    'labels' 				=> $labels,
    'public' 				=> true,
    'publicly_queryable' 	=> true,
    'show_ui' 				=> true, 
    'show_in_menu' 			=> true, 
    'query_var' 			=> true,
    'rewrite' 				=> array( 'slug' => 'location' ),
    'capability_type' 		=> 'page',
    'has_archive' 			=> true, 
    'hierarchical' 			=> true,
    'menu_position'         => 8,
    'menu_icon'             => 'dashicons-location',
    'supports' 				=> array( 'title', 'editor', 'thumbnail', 'excerpt','page-attributes' )
    ); 
  register_post_type( 'location', $args );

  // Register and configure Service Tag taxonomy
  $taxonomy_labels = array(
    'name'                  => _x( 'Services Tag', 'taxonomy general name','pwd'),
    'singular_name'         => _x( 'Service Tag', 'taxonomy singular name','pwd'),
    'search_items'          =>  __( 'Search Services','pwd'),
    'all_items'             => __( 'All Services Tag','pwd'),
    'parent_item'           => __( 'Parent Services Tag','pwd'),
    'parent_item_colon'     => __( 'Parent Service Tag','pwd'),
    'edit_item'             => __( 'Edit Service Tag','pwd'),
    'update_item'           => __( 'Update Service Tag','pwd'),
    'add_new_item'          => __( 'Add New Service Tag','pwd'),
    'new_item_name'         => __( 'New Service Tag','pwd'),
    'menu_name'             => __( 'Service Tags','pwd')
    );

  register_taxonomy( 'service_tag', 'location', array(
    'hierarchical'  => false,
    'labels'        => $taxonomy_labels,
    'show_ui'       => true,
    'query_var'     => true,
    'rewrite'       => array( 'slug' => 'service_tag','pwd')
    )
  );

}
add_action( 'init', 'register_post_type_location_init' );



function pwd_location_styles_init() {

    //echo pwd_get_option('page_on_location');

    //if(is_page(pwd_get_option('page_on_location'))){
      wp_enqueue_script( 'ajax-script', get_stylesheet_directory_uri().'/js/location-filter.js', array('jquery'), 1.0 ); // jQuery will be included automatically
      wp_localize_script( 'ajax-script', 'ajax_object', array( 'ajaxurl' => admin_url( 'admin-ajax.php' ) ) ); // setting ajaxurl
    //}
}
add_action('init', 'pwd_location_styles_init');



add_action( 'wp_ajax_location_filter', 'pwd_location_filter' );
add_action( 'wp_ajax_nopriv_location_filter', 'pwd_location_filter' );

function pwd_location_filter() {


    $locations = array();

    $meta_query = array();
    $tax_query =  array();

    if(isset($_POST['post_code']) && $_POST['post_code']!= ""){

        $meta_query[] = array(
            'key'     => 'post_code',
            'value'   => $_POST['post_code'],
            );
    }

    if(isset($_POST['service']) && $_POST['service']!= ""){

        $tax_query[] = array(
            'taxonomy' => 'service_tag',
            'field'    => 'slug',
            'terms'    => array( $_POST['service'] ),
            );
    }


    $args = array(
        'post_type' => 'location',
        'orderby' => 'menu_order title',
        'order'   => 'ASC',
        'meta_query' => $meta_query,
        'tax_query' =>$tax_query,
        'posts_per_page' => -1
        );


    $query = new WP_Query( $args );

    if (  $query->have_posts() ) {

        while (  $query->have_posts() ) {   $query->the_post();

            $post_id    = get_the_id();
            $map        =  get_post_meta($post_id, 'location', true );
            $services   = "";

            $terms = get_the_terms($post_id, 'service_tag' );

            if ( !empty( $terms ) ) {

             $services ='<ul class="services-tag">';

             foreach ( $terms as $term ) {
                 $services .=' <li>'.$term->name.'</li>';
             }

             $services .='</ul>';
         }

         $locations[$post_id]['id'] =  $post_id;
         $locations[$post_id]['name'] =  get_the_title();
         $locations[$post_id]['content'] = get_the_content( );

         if(wp_get_attachment_image_src( get_post_thumbnail_id( $post_id ), 'thumbnail' )){
            $locations[$post_id]['thumbnail_url'] =  wp_get_attachment_image_src( get_post_thumbnail_id( $post_id ), 'thumbnail' );
            $locations[$post_id]['image_full_rul'] = wp_get_attachment_image_src( get_post_thumbnail_id($post_id ), 'full' );
        }else{
            $locations[$post_id]['thumbnail_url'] = get_bloginfo( 'stylesheet_directory' ) . '/images/thumbnail-default.png';
            $locations[$post_id]['image_full_rul'] =get_bloginfo( 'stylesheet_directory' ) . '/images/slider.png';
        }

        $locations[$post_id]['address'] = $map['address'];
        $locations[$post_id]['lat']     = $map['lat'];
        $locations[$post_id]['lng']     = $map['lng'];

        $locations[$post_id]['post_code'] = get_post_meta($post_id, 'post_code', true );

        $locations[$post_id]['services']    = $services;
        $locations[$post_id]['permalink']   = get_permalink();
        $locations[$post_id]['booking_url']     = get_permalink(pwd_get_option('page_on_booking') );

    }

}

wp_reset_postdata();



echo json_encode( $locations );  

die();
}