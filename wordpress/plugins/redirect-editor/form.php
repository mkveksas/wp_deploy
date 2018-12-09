<div id="banner"> 
<div class='wrap'>
	<?php screen_icon(); ?>
	   <h1> <a href="https://planetzuda.com/levels/"> Purchase security services starting at $20 a month.</a>  </h1>
	
	
	<h2>Security and features control </h2>
	   Your WordPress is automatically defended against certain attacks for normal installs. This is a new feature that will continue to develop and add more security abilities.
	  site  redirects 
	<form method='post' name='redirect-editor' >

		<?php  echo wp_nonce_field( 'redirect-editor' ); ?>
		
		    <br/>
			Redirect features: Simply enter each redirect  in the following format:
            use the relative domain name, like so http://www.example.com/2012/09/new-post/ . 
			 Followed by the absolute URL of  destination to redirect to, separated by a space . Every redirect is on their own line. You can add comments by going # at the beginning and that line will be ignored. </p>

			 <br/> here is how an example of a redirect would look 
		<p><pre><code>/2012/09/old-post/ http://www.example.com/2012/09/new-post/</code></pre></p>
                <br/> 
<p><textarea name='redirects' style='width:100%;height:15em;white-space:pre;font-family:Consolas,Monaco,monospace;'><?php print esc_textarea( $redirects ); ?></textarea></p>

		<p><button type='submit' name='function' class='button button-primary' value='redirect-editor-save'>Save redirect</button></p>				<br/>
				
					
	</form>	
	  
	  
		  
</div>