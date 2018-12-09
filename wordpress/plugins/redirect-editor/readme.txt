=== airtight security formerly redirect editor and security ===
Contributors: PlanetZuda, justincwatt, weskoop
website link: https://planetzuda.com
security-flaw:security@planetzuda.com
Tags: wp-config, hide wordpress, redirect,  improve security, hacking, wordpress hide, hide wordpress version, hide, wordpress security,  wp security, firewall, hide readme, hide wordpress, hide wp generator, remove generator, hide WP,  SEO, Search engine optimization, 301, security, cyber security, security plugin, hackers, crime, windows live writer, rsd, really simple discovery, redirect, redirection, 301, 301 redirect, htaccess, redirect edit, editor, htaccess edit, 
Requires at least: 3.0 
Tested up to: 4.9.7
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Protect your WordPress website automatically without any interaction by you! wp-config is automatically protected, as is license.txt, readme.html, and your wp-content/uploads. We also help remove certain services logged out users could abuse to try and remotely break into your site without visiting your site directly. These also pose other issues from time to time. We also provide features you can use including a 301 redirect editor, that's very easy to use!  

== Description ==

We hide wordpress from scanners the best we can. We make it so you don't have to mess with code and block hackers from finding you using a search by making your WordPress plugins and themes directory more secure. 
We protect your wordpress security by blocking access to install.php, wp-config.php & readme.html. We hide the plugin directory and theme directory from malicious bots trying to find them to hack your wordpress site.  
We  Hide wordpress  version that is in wp_generator, so scanners looking for people who haven't updated yet are more likely not to find you, if you hadn't removed it.
We also provide Features, like the redirect editor, so you can easily get 301 redirects like you get with editing your .htaccess, but instead all you do is put in the name of the link and we do the rest for you without touching your htaccess! 

We currently provide WordPress security protection  for free! We removed Windows Live writer, RSD and other unneeded services for logged out users, as they can be used to remotely try and login, ddos attacks and can cost you money to your web host! We only allow these features to exist when you are logged in and actually need them. If you are logged in as a contributor or higher all of those features are available to you.
More features soon! 


We also have premium DDOS protection as well, which stops attackers from knocking your site offline.




Our redirect feature lets you redirect your posts, pages and more with ease and simplicity to make redirects for your website. Redirect editor is a great replacement to complicated plugins for managing redirects on your website. The redirect editor simply allows you to add a textarea to edit and manage your 301 redirect, one per line. 

Enter each redirect as follows. Use   the absolute URL of the 
destination to redirect to, separated by a space. Each redirect must 
be on its own line. You can put comments by using #. 


Below is an example of how to enter redirects in the redirect editor. As you can see each redirect has a new line and in our example there are two redirects.

    /2012/09/old-post/ http://www.example.com/2012/09/new-post/
 /2012/10/new-post/ http://www.example.com/2012/10/newer-post/
 
 All WordPress security is automatically applied.

After installing, go to Settings > Redirect Editor to configure.

== Installation ==

Extract the zip file, drop the contents in your wp-content/plugins/ directory, and then activate from the Plugins page.

== Frequently Asked Questions ==
= How secure is this plugin? =

This plugin has been adopted by Planet Zuda, a security company that has updated all of the security and   usability  of this plugin passing testing to show it is a secure plugin. To prove our WordPress security and feature plugin is secure we ran it through an exclusive invite-only bug bounty with only one small flaw found and fixed. Planet Zuda will be responsible for any  and all future updates.

= Does it support wildcard/regular expression matching? =

No, just simple string matching for the time being.

= Does it add in any features besides redirect? =
Yes, it protects wp-config, readme.html and license.txt from attackers. Logged out users can not use  windows live writer, really simply discovery among other services. If you are logged in as contributor or higher you may use the third party services. 
== Screenshots ==

1. Redirect editor is easy to use, you just type in the page you want redirected as shown in the example and then put the link to where we are redirecting to. It is the simplest redirect tool for seo and gives an accurate 301 response for WP. The other features help secure your site and currently happen in the background without any interaction, besides activating the plugin. 
   
== Changelog ==

= 1.7.7 =
Improved our plugin not interfering with the way your site looks.
Improved description of software.
improved descriptions in the code commnets of functionalities, why old code that we adopted is written funky, how our fixes handle things and other code documentation that is very important to any dev using the software.
== 1.7.5 ==
a few sites had issue with new security feature. Here is our solution to that problem
== 1.7.4 ==
new security feature 
== 1.7.3 ==

The security features working far better
Redirect editor should be improved, which should help those who have asked for improvements for site redirects to external domains.

== 1.7.2 == 
made admin side redirects less strict due to application purposes.
corrected bugs

== 1.7.1 ==
deletes readme.html and deletes license.txt. 
attempts to block install.php and wp-config.php. We do not hide wp-content/uploads/ as some people have legitimate reasons to going there.
Expect more updates soon, including a popular request for the redirect editor feature. 
 
== 1.7 ==
Hides license.txt, hides install.php readme.html, hides wp-config.php, hides wp-content/uploads/. All important areas of WordPress that need to be hidden.
== 1.6.2 ==
Very  important update! We accidentally removed the form functionality in version 1.6.1 by accident. We deeply apologize. 1.6.2 has patched that. 

== 1.6.1 ==
 * removed access to windows live writer, really simply discovery among others for logged out users. 
 * Anyone logged in as contributor or higher can use windows live writer, RSD, etc. This does not impact anyone who uses third party writing tools as long as they login.
 *  Updated code to block wp-config from attackers,  thanks to some friends who work for Sucuri. Cheers! 
 * more features coming in 1.7 for security. Coming soon! 
 * More updated code. 
 
== 1.6 ==
deny attackers access to wp-config 

== 1.5.1.1 ==
* Fixing an error in the redirect process that caused issues for a few sites.
== 1.5.1 ==
Update wasn't part of our planned release schedule, but due to a report by @awestbha we fixed an issue affecting sites with logged in users that didn't allow redirects if you were already logged in.


== 1.5.0 ==
latest WP version along with some changes to the app. Since this is adopted code, we did change wp_redirect to wp_safe_redirect. 
 This is the last 1.4.x update you should expect before 1.5 is released.  
== 1.4.3 ==
Improved code and updated description of plugin. Expect more updates from https://planetzuda.com . 
= 1.4 =
*Update immediately -- security update. 
*Plugin under new ownership by Planet Zuda, so the safety of redirect editor now is really good. 
* This was removed for 10 months due to abandoned by prior owner. He granted us access to take over. Thank you. 
= 1.3 =
* Fix CSS error causing redirect lines to all appear on a single line

= 1.2 =
* Minor fix for possible corrupted redirects options

= 1.1 =
* Prevent redirect plugin from running on every query, in the admin, etc (thanks Wes Koop)

= 1.0 =
* Initial version

== Upgrade Notice ==
=1.4=
Multiple bug fixes and complete security makeover
= 1.3 =
Bug fix

= 1.2 =
Bug fix

= 1.1 =
Performance enchancement

= 1.0 =
Initial version
