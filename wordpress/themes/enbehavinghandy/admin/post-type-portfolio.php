<?php

class pwd_portfolio {

	/* Class constructor */
    public function __construct()
    {
		add_action('init',array($this,'register_post_type'));
		add_action('init',array($this,'add_taxonomy'));
		add_action('manage_portfolio_posts_columns',array($this,'columns'),10,2);
		add_action('manage_portfolio_posts_custom_column',array($this,'column_data'),11,2);
		add_action('admin_head',array($this,'add_styles'));
		add_filter('posts_join',array($this,'join'),10,1);
		add_filter('posts_orderby',array($this,'set_default_sort'),20,2);
		
	}

	 /* Method which registers the post type */
	function register_post_type() {

		$labels = array(
			'name'               => _x( 'Portfolios','post type general name','pwd'),
			'singular_name'      => _x( 'Portfolio','post type general name','pwd'),
			'menu_name'         =>  __('Portfolios','pwd'),
			'name_admin_bar'    =>  __('Portfolio','pwd'),
			'add_new'           =>  __('Add New','pwd'),
			'add_new_item'      =>  __('Add New Portfolio','pwd'),
			'new_item'          =>  __('New Portfolio','pwd'),
			'edit_item'         =>  __('Edit Portfolio','pwd'),
			'view_item'         =>  __('View Portfolio','pwd'),
			'all_items'         =>  __('All Portfolios','pwd'),
			'search_items'      =>  __('Search Portfolios','pwd'),
			'parent_item_colon' =>  __('Parent Portfolio','pwd'),
			'not_found'         =>  __('No Portfolios Found','pwd'),
			'not_found_in_trash'=>  __('No Portfolios Found in Trash','pwd')
			);

		$args = array(
			'labels'              => $labels,
			'public'              => true,
			'exclude_from_search' => false,
			'publicly_queryable'  => true,
			'show_ui'             => true,
			'show_in_nav_menus'   => true,
			'show_in_menu'        => true,
			'show_in_admin_bar'   => true,
			'menu_position'       => 5,
			'menu_icon'           => 'dashicons-admin-appearance',
			'capability_type'     => 'post',
			'hierarchical'        => false,
			'supports'            => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments' ),
			'has_archive'         => true,
			'rewrite'             => array( 'slug' => 'portfolio' ),
			'query_var'           => true
			);
		register_post_type( 'portfolio', $args );

	}

	/* Method to attach the taxonomy to the post type */
	function add_taxonomy() {

		
		$labels = array(
			'name'              => _x( 'Portfolio Types','taxonomy general name', 'pwd' ),
			'singular_name'     => _x( 'Portfolio Type','taxonomy general name', 'pwd' ),
			'search_items'      => __( 'Search Types','pwd' ),
			'all_items'         => __( 'All Types','pwd' ),
			'parent_item'       => __( 'Parent Type','pwd' ),
			'parent_item_colon' => __( 'Parent Type:','pwd' ),
			'edit_item'         => __( 'Edit Type','pwd' ),
			'update_item'       => __( 'Update Type','pwd' ),
			'add_new_item'      => __( 'Add New Type','pwd' ),
			'new_item_name'     => __( 'New Type Name','pwd' ),
			'menu_name'         => __( 'Portfolio Types','pwd' ),
			);

		$args = array(
			'hierarchical'      => true,
			'labels'            => $labels,
			'show_ui'           => true,
			'show_admin_column' => true,
			'query_var'         => true,
			'rewrite'           => array( 'slug' => 'type' ),
			);

		register_taxonomy('portfolio_type',array('portfolio'),$args);


		$labels = array(
			'name'                       => _x( 'Portfolio Tags','taxonomy general name', 'pwd' ),
			'singular_name'              => _x( 'Portfolio Tag','taxonomy general name', 'pwd' ),
			'search_items'               => __( 'Portfolio Tags','pwd' ),
			'popular_items'              => __( 'Popular Portfolio Tags','pwd' ),
			'all_items'                  => __( 'All Portfolio Tags','pwd' ),
			'parent_item'                => null,
			'parent_item_colon'          => null,
			'edit_item'                  => __( 'Edit Portfolio Tag','pwd' ),
			'update_item'                => __( 'Update Portfolio Tag','pwd' ),
			'add_new_item'               => __( 'Add New Portfolio Tag','pwd' ),
			'new_item_name'              => __( 'New Portfolio Tag Name','pwd' ),
			'separate_items_with_commas' => __( 'Separate Portfolio Tags with commas','pwd' ),
			'add_or_remove_items'        => __( 'Add or remove Portfolio Tags','pwd' ),
			'choose_from_most_used'      => __( 'Choose from most used Portfolio Tags','pwd' ),
			'not_found'                  => __( 'No Portfolio Tags found','pwd' ),
			'menu_name'                  => __( 'Portfolio Tags','pwd' ),
			);

			$args = array(
				'hierarchical'          => false,
				'labels'                => $labels,
				'show_ui'               => true,
				'show_admin_column'     => true,
				'update_count_callback' => '_update_post_term_count',
				'query_var'             => true,
				'rewrite'               => array( 'slug' => 'portfolio-tag' ),
				);

			register_taxonomy('portfolio_tag','portfolio',$args);
	}

	function columns($columns) {

		//unset($columns['cb']);
		unset($columns['title']);
		unset($columns['taxonomy-portfolio_type']);
		unset($columns['taxonomy-portfolio_tag']);
		unset($columns['comments']);
		unset($columns['date']);
		unset($columns['author']);

		$columns['pwd_thumbnail'] 			= '';
		$columns['title'] 					=  __('Title','pwd' );
		$columns['taxonomy-portfolio_type'] =  __('Portfolio Types','pwd' );
		$columns['taxonomy-portfolio_tag'] 	=  __('Portfolio Tags','pwd' );
		$columns['date'] 					=  __('Date','pwd' );

		
		return $columns;
	}

	function column_data($column,$post_id) {
		//echo $column.'<hr>';
		switch($column) {
			// case 'title' :
			// echo 'CUSTOM TITLE';
			// break;
			case 'pwd_thumbnail' :
	 		echo get_the_post_thumbnail( $post_id,array(50,50) );
				break;
		}
	}

	function join($wp_join) {
		global $wpdb;
		// Enter Code 
		return ($wp_join);
	}

	function set_default_sort($orderby, $query) {
		global $wpdb;
		// Enter Code 
		return $orderby;
	}

	function add_styles(){
		 echo '<style type="text/css">
	           .column-pwd_thumbnail{width: 40px!important;}
	         </style>';
	}
}

new pwd_portfolio();
?>