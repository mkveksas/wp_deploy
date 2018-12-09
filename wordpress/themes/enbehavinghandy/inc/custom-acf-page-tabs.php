<?php if( have_rows('tabs') ): ?>

	<?php
		$page_tab_nav 		= '';
		$page_tab_content 	= '';
		$i = 1;
	?>

	<?php while ( have_rows('tabs') ) : the_row(); ?>

		<?php

		$name 		= get_sub_field('name');
		$content 	= get_sub_field('content');
		$bg 		= get_sub_field('bg');
		

		$page_tab_nav 	 	.='<li class="col-md-4 nopadding"><a href="#page-tabs-'.$i.'"><span>'.$name.'</span></a></li>';

		$page_tab_content 	.= '<div id="page-tabs-'.$i.'" class="ui-tabs-pane page-tabs-content" style="background:url('.$bg['url'].') no-repeat scroll center center /cover;">';
		$page_tab_content 	.= '	<div class="container">';
		$page_tab_content 	.= '		<div class="row">';
		$page_tab_content 	.= '			<div class="col-md-6">'.wpautop($content).'</div>';
		$page_tab_content 	.= '		</div>';
		$page_tab_content 	.= '	</div>';
		$page_tab_content 	.= '</div>';

		$i++;

		?>



	<?php endwhile; ?>

	<div id="page-tabs" class="page-section-tabs">
		<div class="page-tabs-header">
			<div class="container-fluid">
				<ul class="ui-tabs-nav page-tabs-nav row"><?php echo $page_tab_nav; ?></ul>
			</div>
		</div>
		<?php echo $page_tab_content; ?>
	</div>


	<script type="text/javascript">
		jQuery(document).ready(function($) {
			$('#page-tabs').tabs({ show: { effect: 'slide', direction: 'right', duration: 400 }});
		});
	</script> 


<?php  endif; ?>