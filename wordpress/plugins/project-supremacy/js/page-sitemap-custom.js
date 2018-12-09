(function($){
    $(document).ready(function(){
        jQuery('#tabbed-nav-sitemap').zozoTabs({
            "theme": "white",
            "size": "medium",
            "multiline": true,
            "rounded": true,
            "shadows": true,
            "animation": {"duration": 500, "effects": "slideDown"},
            "position": "top-left",
            "orientation": "horizontal"
        });

        $('.save-sitemaps-settings').submit(function(e){
            e.preventDefault();
            $.post('/wp-admin/admin-post.php', $(this).serialize())
                .done(function(d){
                    alert('Sitemap settings successfully saved!');
                });
        });

    });
})(jQuery);