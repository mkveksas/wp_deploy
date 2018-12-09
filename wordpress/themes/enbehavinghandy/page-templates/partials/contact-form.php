<?php //var_dump( $queried_object ); ?>
<style type="text/css">
.beta-base .preheader, .beta-base .header, .beta-base .sidebar, .beta-base .body, .beta-base .footer, #mainContent {
    text-align: left;
}
.beta-base .preheader, .beta-base .header, .beta-base .body, .beta-base .sidebar, .beta-base .leftSidebar, .beta-base .rightSidebar, .beta-base .footer {
    margin: 0;
    padding: 0;
    border: none;
    white-space: normal;
    line-height: normal;
}
.beta-base .title, .beta-base .subtitle, .beta-base .text, .beta-base img {
    margin: 0;
    padding: 0;
    background: none;
    border: none;
    white-space: normal;
    line-height: normal;
}
.beta-base .bodyContainer td.preheader{
    padding: 10px 0;
}
.beta-base .bodyContainer td.header {
    padding: 0;
    height: 30px;
}
.beta-base .bodyContainer td.body, .beta-base .bodyContainer td.footer,
.beta-base .bodyContainer td.sidebar, .beta-base .bodyContainer td.leftSidebar, .beta-base .bodyContainer td.rightSidebar {
    padding: 20px;
}
.beta-base .bodyContainer td.header p, .beta-base .bodyContainer td.preheader p, .beta-base .bodyContainer td.body p,
.beta-base .bodyContainer td.footer p, .beta-base .bodyContainer td.sidebar p,
.beta-base .bodyContainer td.leftSidebar p, .beta-base .bodyContainer td.rightSidebar p {
    margin: 0;
    color: inherit;
}
.beta-base .bodyContainer td.header div.title, .beta-base .bodyContainer td.preheader div.title, .beta-base .bodyContainer td.body div.title,
.beta-base .bodyContainer td.footer div.title, .beta-base .bodyContainer td.sidebar div.title,
.beta-base .bodyContainer td.leftSidebar div.title, .beta-base .bodyContainer td.rightSidebar div.title,
.beta-base .bodyContainer td.header div.subtitle, .beta-base .bodyContainer td.preheader div.subtitle, .beta-base .bodyContainer td.body div.subtitle,
.beta-base .bodyContainer td.footer div.subtitle, .beta-base .bodyContainer td.sidebar div.subtitle,
.beta-base .bodyContainer td.leftSidebar div.subtitle, .beta-base .bodyContainer td.rightSidebar div.subtitle,
.beta-base .bodyContainer td.header div.text, .beta-base .bodyContainer td.preheader div.text, .beta-base .bodyContainer td.body div.text, .beta-base .bodyContainer td.body div.text div,
.beta-base .bodyContainer td.footer div.text, .beta-base .bodyContainer td.sidebar div.text,
.beta-base .bodyContainer td.leftSidebar div.text, .beta-base .bodyContainer td.rightSidebar div.text {
    overflow: auto;
}
.beta-base .optout {
    margin-bottom: 10px;
    margin-top: 10px;
}
div.infusion-captcha {
    width: 220px;
    padding: 10px;
}
div.infusion-captcha input, div.infusion-captcha select, div.infusion-captcha textarea {
    width: 95%;
    display: inline-block;
    vertical-align: middle;
}
table.infusion-field-container td.infusion-field-input-container input[type='text'],
table.infusion-field-container td.infusion-field-input-container input[type='password'],
table.infusion-field-container td.infusion-field-input-container textarea {
    width: 98%; /* must be 98% to make the snippet-menu line up due to border width */
    margin: 0;
}
table.infusion-field-container td.infusion-field-input-container select {
    width: 101%;
    *width: 102%; /* this one for IE */
    margin: 0;
}
table.infusion-field-container td.infusion-field-label-container {
    padding-right: 5px;
}
td.header .image-snippet img {
    vertical-align: bottom;
}
#webformErrors {
    color: #990000;
    font-size: 14px;
}
html, body {
    margin: 0;
    padding: 0;
    height: 100%;
}
.infusion-form {
    margin: 0;
    height: 100%;
}
.infusion-option {
    display: block;
    text-align: left;
}
</style>
<style type="text/css">
.beta-font-b h1, .beta-font-b h2, .beta-font-b h3, .beta-font-b h4, .beta-font-b h5, .beta-font-b h6 {
    font-family: arial,sans-serif;
}
.beta-font-b h1 {font-size: 24px;}
.beta-font-b h2 {font-size: 20px;}
.beta-font-b h3 {font-size: 14px;}
.beta-font-b h4 {font-size: 12px;}
.beta-font-b h5 {font-size: 10px;}
.beta-font-b h6 {font-size: 8px;}
.beta-font-b address {font-style: italic;}
.beta-font-b pre {font-family: Courier New, monospace;}
.beta-font-b .title, .beta-font-b .title p {
    font-size: 20px;
    font-weight: bold;
    font-family: arial,sans-serif;
}
.beta-font-b .subtitle, .beta-font-b .subtitle p {
    font-size: 11px;
    font-weight: normal;
    font-family: arial,sans-serif;
}
.beta-font-b .text, .beta-font-b p {
    font-size: 12px;
    font-family: arial,sans-serif;
}
.beta-font-b .preheader .text, .beta-font-b .preheader .text p {
    font-size: 11px;
    font-family: arial,sans-serif;
}
.beta-font-b .footer a {
    font-size: 11px;
    font-family: arial,sans-serif;
}
.beta-font-b .footer .text {
    font-size: 10px;
    font-family: verdana,sans-serif;
}
.beta-font-b .sidebar .title, .beta-font-b .leftSidebar .title, .beta-font-b .rightSidebar .title {
    font-size: 15px;
    font-weight: bold;
    font-family: arial,sans-serif;
}
.beta-font-b .sidebar .subtitle, .beta-font-b .leftSidebar .subtitle, .beta-font-b .rightSidebar .subtitle {
    font-size: 12px;
    font-family: arial, sans-serif;
}
.beta-font-b .sidebar .text, .beta-font-b .sidebar .text p, .beta-font-b .leftSidebar .text, .beta-font-b .rightSidebar .text {
    font-size: 11px;
    font-family: arial, sans-serif;
}
.infusion-field-label-container {
    font-size: 14px;
    font-family: arial,sans-serif;
}
.infusion-field-input-container {
    color: #000000;
    font-size: 12px;
}
.infusion-option label {
    color: #000000;
    font-size: 14px;
    font-family: arial,sans-serif;
}
</style>
<style type="text/css">
.default .background{
background-color:#ffffff;
;
}
.default .title{
color:#000000;
;
}
.default .subtitle{
color:#000000;
;
}
.default .text{
color:#000000;
;
}
.default a{
color:#0645ad;
;
}
.default .background .preheader .text{
color:#1a242e;
;
}
.default .background .preheader a{
color:#0645ad;
;
}
.default .header{
background-color:#FFFFFF;
;
}
.default .header .title{
color:#000000;
;
}
.default .header .subtitle{
color:#000000;
;
}
.default .header .text{
color:#000000;
;
}
.default .header .a{
color:#157DB8;
;
}
.default .hero{
background-color:#B73931;
;
}
.default .hero .title{
color:#FFFFFF;
;
}
.default .hero .subtitle{
color:#FFFFFF;
;
}
.default .hero .text{
color:#FFFFFF;
;
}
.default .hero .a{
color:#157DB8;
;
}
.default .quote{
background-color:#70231E;
;
}
.default .quote:after{
border-color:#70231E transparent transparent transparent;
;
}
.default .quote .title{
color:#FFFFFF;
;
}
.default .quote .subtitle{
color:#FFFFFF;
;
}
.default .quote .text{
color:#FFFFFF;
;
}
.default .quote .a{
color:#157DB8;
;
}
.default .body{
background-color:#ffffff;
;
}
.default .main{
background-color:#FFFFFF;
;
}
.default .main .title{
color:#000000;
;
}
.default .main .subtitle{
color:#000000;
;
}
.default .main .text{
color:#000000;
;
}
.default .main .a{
color:#157DB8;
;
}
.default .sidebar{
background-color:#FFFFFF;
;
}
.default .sidebar .title{
color:#000000;
;
}
.default .sidebar .subtitle{
color:#000000;
;
}
.default .sidebar .text{
color:#000000;
;
}
.default .sidebar .a{
color:#157DB8;
;
}
.default .leftSidebar{
background-color:#ffffff;
;
}
.default .leftSidebar .title{
color:#f15c25;
;
}
.default .leftSidebar .subtitle{
color:#669940;
;
}
.default .rightSidebar{
background-color:#ffffff;
;
}
.default .rightSidebar .title{
color:#f15c25;
;
}
.default .rightSidebar .subtitle{
color:#669940;
;
}
.default .footer{
background-color:#FFFFFF;
;
}
.default .footer .text{
color:#0D0D0D;
;
}
.default .footer .title{
color:#000000;
;
}
.default .footer a{
color:#1B3BDE;
;
}
.default .footer .subtitle{
color:#000000;
;
}
.default .infusion-field-label-container{
font-size:14px;
;
}
.default .infusion-field-label-container{
font-family:Arial;
;
}
.default .infusion-field-label-container{
color:#000000;
    width: 35%;
;
}
.default .infusion-field-input{
font-size:14px;
;
}
.default .infusion-option label{
font-size:14px;
;
}
.default .infusion-option label{
font-family:Arial;
;
}
.default .infusion-option label{
color:#000000;
;
}
.default .webFormBodyContainer{
border-width:0px;
;
}
.default .webFormBodyContainer{
border-style:Hidden;
;
}
.default .webFormBodyContainer{
border-color:#000000;
;
}
	.infusion-field-label-container {
		display:none;	
		
	}
		.bodyContainer {
		width:100% !important;
	}



}
</style>
<style type="text/css">
.infusion-field-label-container {
text-align:Left;
}
.infusion-field-input-container {
width:200px;
}
.infusion-field-label-container {
vertical-align:Middle;
}
.bodyContainer {
width:425px;
}
</style>
<script src="https://uz264.infusionsoft.com/app/webTracking/getTrackingCode?trackingId=aedddbca8674e2a24a1e13a26079bdef&b=1.59.0.51" type="text/javascript">
</script>
<div class="text" id="webformErrors" name="errorContent">
</div>
<form accept-charset="UTF-8" action="https://uz264.infusionsoft.com/app/form/process/bcd6e5b7e2ddb798eee2bdcde4261275" class="infusion-form" method="POST" name="Contact Us Sidebar" onsubmit="var form = document.forms[0];
var resolution = document.createElement('input');
resolution.setAttribute('id', 'screenResolution');
resolution.setAttribute('type', 'hidden');
resolution.setAttribute('name', 'screenResolution');
var resolutionString = screen.width + 'x' + screen.height;
resolution.setAttribute('value', resolutionString);
form.appendChild(resolution);
var pluginString = '';
if (window.ActiveXObject) {
    var activeXNames = {'AcroPDF.PDF':'Adobe Reader',
        'ShockwaveFlash.ShockwaveFlash':'Flash',
        'QuickTime.QuickTime':'Quick Time',
        'SWCtl':'Shockwave',
        'WMPLayer.OCX':'Windows Media Player',
        'AgControl.AgControl':'Silverlight'};
    var plugin = null;
    for (var activeKey in activeXNames) {
        try {
            plugin = null;
            plugin = new ActiveXObject(activeKey);
        } catch (e) {
            // do nothing, the plugin is not installed
        }
        pluginString += activeXNames[activeKey] + ',';
    }
    var realPlayerNames = ['rmockx.RealPlayer G2 Control',
        'rmocx.RealPlayer G2 Control.1',
        'RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)',
        'RealVideo.RealVideo(tm) ActiveX Control (32-bit)',
        'RealPlayer'];
    for (var index = 0; index &lt; realPlayerNames.length; index++) {
        try {
            plugin = new ActiveXObject(realPlayerNames[index]);
        } catch (e) {
            continue;
        }
        if (plugin) {
            break;
        }
    }
    if (plugin) {
        pluginString += 'RealPlayer,';
    }
} else {
    for (var i = 0; i &lt; navigator.plugins.length; i++) {
        pluginString += navigator.plugins[i].name + ',';
    }
}
pluginString = pluginString.substring(0, pluginString.lastIndexOf(','));
var plugins = document.createElement('input');
plugins.setAttribute('id', 'pluginList');
plugins.setAttribute('type', 'hidden');
plugins.setAttribute('name', 'pluginList');
plugins.setAttribute('value', pluginString);
form.appendChild(plugins);
var java = navigator.javaEnabled();
var javaEnabled = document.createElement('input');
javaEnabled.setAttribute('id', 'javaEnabled');
javaEnabled.setAttribute('type', 'hidden');
javaEnabled.setAttribute('name', 'javaEnabled');
javaEnabled.setAttribute('value', java);
form.appendChild(javaEnabled);">
<input name="inf_form_xid" type="hidden" value="bcd6e5b7e2ddb798eee2bdcde4261275" /><input name="inf_form_name" type="hidden" value="Contact Us Sidebar" /><input name="infusionsoft_version" type="hidden" value="1.59.0.51" />
<div class="default beta-base beta-font-b" id="mainContent" style="height:100%">
<table cellpadding="10" cellspacing="0" class="background" style="width: 100%; height: 100%">
<tbody>
<tr>
<td align="center" valign="top">
<table bgcolor="#FFFFFF" cellpadding="20" cellspacing="0" class="bodyContainer webFormBodyContainer" width="100%">
<tbody>
<tr>
<td bgcolor="#FFFFFF" class="body" sectionid="body" valign="top">
<div>
<table class="infusion-field-container" style="width:100%;">
<tbody>
<tr>
<td class="infusion-field-label-container">
<label for="inf_custom_ServiceType">Service Type *</label>
</td>
<td class="infusion-field-input-container" style="width:200px;">
	<?php 
		$disabled = '';
		if (( $queried_object->post_name == 'building-maintenance') || ( $queried_object->post_name == 'property-management')): 
		$disabled = 'disabled';
		endif;
	?>
<select id="inf_custom_ServiceType" name="inf_custom_ServiceType"><option value="">Please select one</option><option value="Handyman">Handyman</option><option value="Carpentry">Carpentry</option><option value="Plumbing & Gas">Plumbing & Gas</option><option value="Electrical">Electrical</option><option value="Cleaning">Cleaning</option><option value="Renovations">Renovations</option><option value="Tiling & Flooring">Tiling & Flooring</option><option value="Rubbish Removal">Rubbish Removal</option><option value="Helixfix - Cracked Wall">Helixfix - Cracked Wall</option><option value="Gutter & Roof Repair">Gutter & Roof Repair</option><option value="Painting">Painting</option><option value="Office Relocations">Office Relocations</option><option value="Pool Service">Pool Service</option><option value="Building Maintenance" <?php if ( $queried_object->post_name == 'building-maintenance') { echo "selected"; } ?>>Building Maintenance</option><option value="Property Management" <?php if ( $queried_object->post_name == 'property-management') { echo "selected"; } ?>>Property Management</option></select>
</td>
</tr>
</tbody>
</table>
</div>
<div>
<table class="infusion-field-container" style="width:100%;">
<tbody>
<tr>
<td class="infusion-field-label-container">
<label for="inf_field_FirstName">First Name *</label>
</td>
<td class="infusion-field-input-container" style="width:200px;">
<input class="infusion-field-input-container" id="inf_field_FirstName" name="inf_field_FirstName" placeholder="First Name *" type="text" />
</td>
</tr>
<tr>
<td class="infusion-field-label-container">
<label for="inf_field_LastName">Last Name *</label>
</td>
<td class="infusion-field-input-container" style="width:200px;">
<input class="infusion-field-input-container" id="inf_field_LastName" name="inf_field_LastName" placeholder="Last Name *" type="text" />
</td>
</tr>
</tbody>
</table>
</div>
<div>
<table class="infusion-field-container" style="width:100%;">
<tbody>
<tr>
<td class="infusion-field-label-container">
<label for="inf_field_Email">Email *</label>
</td>
<td class="infusion-field-input-container" style="width:200px;">
<input class="infusion-field-input-container" id="inf_field_Email" name="inf_field_Email" placeholder="Email *" type="text" />
</td>
</tr>
</tbody>
</table>
</div>
<div>
<table class="infusion-field-container" style="width:100%;">
<tbody>
<tr>
<td class="infusion-field-label-container">
<label for="inf_field_Phone1">Phone 1</label>
</td>
<td class="infusion-field-input-container" style="width:200px;">
<input class="infusion-field-input-container" id="inf_field_Phone1" name="inf_field_Phone1" placeholder="Phone" type="text" />
</td>
</tr>
</tbody>
</table>
</div>
<div>
<table class="infusion-field-container" style="width:100%;">
<tbody>
<tr>
<td class="infusion-field-label-container">
<label for="inf_custom_MessagefromContactUsForm">Message *</label>
</td>
<td class="infusion-field-input-container"   style="width:200px;">
<textarea cols="24" id="inf_custom_MessagefromContactUsForm" name="inf_custom_MessagefromContactUsForm" placeholder="Message *" rows="5"></textarea>
</td>
</tr>
</tbody>
</table>
</div>
<div>
<div style="height:15px; line-height:15px;">
&nbsp;
</div>
</div>
<div>
<div class="infusion-submit" style="text-align:center;">
<button style="width:180px; height:32px; background-color:#A93337; color:#FFFFFF; font-size:14px; font-family:Georgia; border-color:#000000; border-style:Hidden; border-width:1px; -moz-border-radius:3px;border-radius:3px;" type="submit" value="Submit">Submit</button>
</div>
</div>
</td>
</tr>
</tbody>
</table>
</td>
</tr>
</tbody>
</table>
</div>
</form>