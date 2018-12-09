

jQuery(document).ready(function($) {

	//$(".gallery .gallery-icon a").attr('rel', 'gallery').fancybox();

	$(".fancybox").fancybox();

	//$.scrollUp();

	//$('.home .site-header-image-bg').parallax("50%", 0.25);

	//$(".custom-gallery-masonry .gallery a").attr('rel', 'gallery').fancybox();

	$("#masthead").sticky({topSpacing:0});

	//$(".site-content .gallery .gallery-icon a").attr('rel', 'gallery').fancybox();



	/*  Doc: https://css-tricks.com/snippets/jquery/smooth-scrolling/  */

	// $('a[href*=#]:not([href=#])').click(function() {
	// 	if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	// 		var target = $(this.hash);
	// 		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	// 		if (target.length) {
	// 			$('html,body').animate({
	// 				scrollTop: target.offset().top
	// 			}, 1000);
	// 			return false;
	// 		}
	// 	}
	// });



});

jQuery(document).ready(function($) {

	$("ul.dropdown-menu").closest('li').children('a').append("<span class=\"submenu-arrow fa fa-chevron-down\" />");

    // Lv.1 Submenu arrow click
    $('.navbar-nav li .submenu-arrow').click(function(e){
    	e.preventDefault();
    	if($(this).hasClass('fa-chevron-down')){
    		$(this).parent().siblings('ul.dropdown-menu').stop(true,true).slideDown(300);
    		$(this).addClass('fa-chevron-up').removeClass('fa-chevron-down');
    	} else {
    		$(this).parent().siblings('ul.dropdown-menu').stop(true,true).slideUp(300);
    		$(this).addClass('fa-chevron-down').removeClass('fa-chevron-up');
    	}
    });
	$('.navbar-nav li .submenu-arrow').mouseout(function() {
	  $(this).addClass('fa-chevron-down').removeClass('fa-chevron-up');
	});
});