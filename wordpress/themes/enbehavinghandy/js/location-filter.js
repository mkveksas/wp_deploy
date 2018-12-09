/* 
* @Author: Wisan
* @Date:   2015-04-16 12:58:29
* @Last Modified by:   Wisan
* @Last Modified time: 2015-07-01 13:28:26
*/

jQuery(function($){


	var map;
	var InfoWindow;
	var locationIDs			= [];
	var locationMarkers 	= [];
	var locationInfo		= [];


	function deleteMarkers(map) {

		for (var i = 0; i <locationIDs.length; i++) {
			locationMarkers[locationIDs[i]].setMap(map);
		}

		locationMarkers	= [];
		locationIDs		= [];
		locationInfo 	= [];

	}

	function setMarkers(map, locations) {

		var obj = $.parseJSON(locations);

		var image = {
			url: marker_url,
			size: new google.maps.Size(40, 60),
			origin: new google.maps.Point(0,0),
			anchor: new google.maps.Point(0, 60)
		};

		var latlng_pos=[];

		$.each( obj, function( index, location ) {

			//console.log(location.id);

			var myLatLng = new google.maps.LatLng(location.lat, location.lng);

			latlng_pos.push(myLatLng);

			var marker 	 = new google.maps.Marker({
				position: myLatLng,
				map: map,
				icon: image,
				title: location.name
			});

			var contentString = '<div class="infowindowContent">'+
			'<div class="container-fluid">'+
			'<div class="row">'+
			'	<div class="col-md-6 col-sm-6">'+
			'		<h3 class="firstHeading">'+location.name+'</h3>'+
			'		<p class="address">'+location.address+'</p>'+
			'		<strong class="service-title">SERVICES</strong>'+
			'		<div class="service">'+location.services+'</div>'+
			'	</div>'+
			'	<div class="col-md-6 col-sm-6">'+
			'		<div class="right-box">'+
			'			<a class="btn btn-default btn-lg" href="'+location.booking_url+'" >make a booking</a>'+
			'			<a class="btn btn-primary btn-lg" href="'+location.permalink+'" >View Location</a>'+
			'			<p><img class="img-responsive" src="'+location.thumbnail_url+'" ></p>'+
			'		</div>'+
			'	</div>'+
			'</div>'+
			'</div>'+
			'</div>';


			locationInfo[location.id] = contentString;

			infowindow = new google.maps.InfoWindow();

			google.maps.event.addListener(marker, 'click', function() {

				infowindow.close();


				infowindow.setContent(locationInfo[location.id]);

				infowindow.open(map,marker);
			});


			locationIDs.push(location.id);
			locationMarkers[location.id] = marker;
		});

if(locationIDs.length > 0){

	var latlngbounds = new google.maps.LatLngBounds( );
	for ( var i = 0; i < latlng_pos.length; i++ ) {
		latlngbounds.extend( latlng_pos[ i ] );
	}
	map.fitBounds( latlngbounds );
}else{

	alert('find not found');
}

}

function initialize() {
	var myLatlng = new google.maps.LatLng(default_lat, default_lng);
	var mapOptions = {
		center: myLatlng,
		zoom: default_zoom,
		mapTypeId: google.maps.MapTypeId.ROADMAP,
		mapTypeControl:false,
		zoomControl: true,
		zoomControlOptions: {
			style: google.maps.ZoomControlStyle.SMALL
		},
		scrollwheel: false,
		styles:[{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
	};

	map = new google.maps.Map(document.getElementById("location-map"), mapOptions);


	$.post(ajax_object.ajaxurl, {
		action: 'location_filter',
		post_code: $(this).find('.post_code').val(),
		service: $(this).find('.service').val()
	}, function(locations) {
			//console.log(locations);
			setMarkers(map,locations)
		});
}


if ( typeof default_lat !== 'undefined' ){
	initialize();
}

$('#location_filter_form').submit(function(event) {

	$.post(ajax_object.ajaxurl, {
		action: 'location_filter',
		post_code: $(this).find('.post_code').val(),
		service: $(this).find('.service').val()
	}, function(data) {
		deleteMarkers(null);
		setMarkers(map,data);
	});

	return false;
});


});