(function($) {

    $(document).ready(function(){
        if (disable_pages != 1) {

            $.get(ajaxurl, 'action=gkty_load_pages').done(function (d) {
                var pages = allowed_seo_pages.split(',');
                if (d.length > 0) {
                    $('#allowed_schema_pages tbody').empty();
                } else {
                    $('#allowed_schema_pages tbody').empty();
                    $('#allowed_schema_pages tbody').append('<tr><td>You don\'t have any pages/posts on your website.</td></tr>');
                    return;
                }
                for (var i = 0; i < d.length; i++) {
                    var p = d[i];
                    var checked = '';
                    if (inArray(p.ID, pages)) checked = 'checked';
                    $('#allowed_schema_pages tbody').append(
                        '<tr><td><input type="checkbox" id="chkbox-' + i + '" class="allowed_page" ' + checked + ' value="' + p.ID + '"></td><td><label for="chkbox-' + i + '">' + p.post_title + ' - (' + ((p.ID == ajax_object.front_page) ? 'HOME' : p.post_type.toUpperCase()) + ')</label></td></tr>'
                    );

                }
            }).fail(function () {
                $('#allowed_schema_pages tbody').empty();
                $('#allowed_schema_pages tbody').append('<tr><td>Failed to load the Pages. Please go to All Pages/Posts and update PS SEO settings in bulk from there.</td></tr>');
                return;
            });

        } else {
            $('#allowed_schema_pages tbody').empty();
            $('#allowed_schema_pages tbody').append('<tr><td>Loading of Pages/Posts is disabled. Please go to All Pages/Posts and update Allowed SEO Pages in bulk from there.</td></tr>');
            return;
        }
    });


    $(document).on('submit', '.save-seo-settings', function(e){
        e.preventDefault();

        var data = $(this).serializeArray();
        data.push({
            name: "action",
            value: "gkty_save_allowed_pages_seo"
        });

        var ids = [];
        var bad_ids = [];
        $('.allowed_page').each(function(){
            if ($(this).is(':checked')) {
                ids.push($(this).val())
            } else {
                bad_ids.push($(this).val())
            }
        });
        data.push({
            name: 'allowed_pages',
            value: ids.join(',')
        });
        data.push({
            name: 'disallowed_pages',
            value: bad_ids.join(',')
        });

        $.post(ajaxurl, data).done(function(d){
            alert('Successfully saved PS SEO changes!');
        });
    });

})(jQuery);