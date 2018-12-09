<?php
/**
 * @Author: Wisan
 * @Date:   2015-05-18 07:57:02
 * @Last Modified by:   Wisan
 * @Last Modified time: 2015-05-18 07:59:46
 */
function pwd_share_buttons() {
	?>
	<div class="share-buttons">
	<a class="twitter" title="Recommend on Twitter" href="https://twitter.com/intent/tweet?source=webclient&amp;text=<?php echo rawurlencode(strip_tags(get_the_title())) ?> <?php echo urlencode(get_permalink($post->ID)); ?>" target="blank" rel="nofollow"><span>Twitter</span></a>
	<a class="facebook" title="Recommend on Facebook" href="https://www.facebook.com/sharer/sharer.php?u=<?php echo urlencode(get_permalink($post->ID)); ?>&amp;t=<?php echo rawurlencode(strip_tags(get_the_title())) ?>" target="blank" rel="nofollow"><span>Facebook</span></a>
	<a class="googleplus" title="Recommend on Google+" href="https://plusone.google.com/_/+1/confirm?hl=de&amp;url=<?php echo urlencode(get_permalink($post->ID)); ?>&amp;title=<?php echo rawurlencode(strip_tags(get_the_title())) ?>" target="blank" rel="nofollow"><span>Google+</span></a>
	</div>
	<?php }