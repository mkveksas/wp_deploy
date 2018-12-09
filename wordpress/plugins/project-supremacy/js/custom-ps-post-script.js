jQuery.ajaxPrefilter(function( options ) {
    if ( options.url == '/wp-admin/admin-post.php' ) {
        options.url = ajaxurl.replace('ajax', 'post');
    }
});

(function ($) {

    function refreshMetaRobotsPreview() {
        var robots = [];
        robots.push($('#ps_seo_metarobots').val());
        if ($('#ps_seo_metarobots_follow_0').is(':checked')) {
            robots.push($('#ps_seo_metarobots_follow_0').val());
        } else {
            robots.push($('#ps_seo_metarobots_follow_1').val());
        }
        if ($('#ps_seo_metarobots_advanced').val() != 'none') {
            robots.push($('#ps_seo_metarobots_advanced').val());
        }

        if ($('#ps_meta_robots_enabled').val() == 1) {
            $('.meta-preview').html('&lt;meta name="robots" content="'+robots.join(',')+'"/&gt;');
        } else {
            $('.meta-preview').html('--- TURN ON META ROBOTS FIRST ---');
        }
    }

    String.prototype.contains = function(it) { return this.indexOf(it) != -1; };

    $(document).ready(function(){

        $('#ps_seo_metarobots').change(function(){
            refreshMetaRobotsPreview();
        });
        $('.slider-button').click(function(){
            setTimeout(function(){
                refreshMetaRobotsPreview();
            }, 500);
        });
        $('#ps_seo_metarobots_follow_0').click(function(){
            refreshMetaRobotsPreview();
        });
        $('#ps_seo_metarobots_follow_1').click(function(){
            refreshMetaRobotsPreview();
        });
        $('#ps_seo_metarobots_advanced').change(function(){
            refreshMetaRobotsPreview();
        });

        // Enabled SEO Button
        $('.slider-frame .slider-button').toggle(function(){
            var attr = $(this).attr('data-element');
            $(this).addClass('on').html('ON');
            $('#' + attr).val(1);
        },function(){
            var attr = $(this).attr('data-element');
            $(this).removeClass('on').html('OFF');
            $('#' + attr).val(0);
        });



        var shouldWork = $('.ps_editor').length;
        if (!shouldWork) return;

        ca.init();

        $('.upload-twitter').click(function(){
            tb_show( '', 'media-upload.php?type=image&amp;TB_iframe=true' );
            window.send_to_editor = function(html) {
                var imgurl = $('img',html).attr('src');
                $('#ps_seo_tw_img').val(imgurl);
                tb_remove();
            }
        });


        $('.upload-facebook').click(function(){
            tb_show( '', 'media-upload.php?type=image&amp;TB_iframe=true' );
            window.send_to_editor = function(html) {
                var imgurl = $('img',html).attr('src');
                $('#ps_seo_fb_img').val(imgurl);
                tb_remove();
            }
        });


        jQuery('#tabbed-nav-seo').zozoTabs({
            "theme": "green",
            "size": "large",
            "multiline": true,
            "rounded": true,
            "shadows": true,
            "animation": {"duration": 500, "effects": "slideRight"},
            "position": "bottom-left",
            "orientation": "horizontal"
        });

        // Populate title/desc on change
        $('.ps_editor').change(function(){
            var text = $(this).html();
            var id = $(this).attr('data-id');
            text = text.replace(/\&nbsp\;/g, ' ').replace(/\s+/g,' ').trim().replace(/<\/?[^>]+(>|$)/g, "");
            $('#'+id).val(text);
        });


        $('body').on('focus', '[contenteditable="true"]', function() {
            var $this = $(this);
            $this.data('before', $this.html());
            return $this;
        }).on('blur keyup paste input', '[contenteditable="true"]', function() {
            var $this = $(this);
            if ($this.data('before') !== $this.html()) {
                $this.data('before', $this.html());
                $this.trigger('change');
            }
            return $this;
        });

        // Revert back to old schema
        jQuery(document).on('click', '.button-revert-schema', function(e){

            jQuery.post(ajaxurl, 'action=gkty_revert_schema&post_id=' + jQuery('#post_ID').val())
                .done(function(d){
                    alert('Successfully reverted default JSON LD settings!');
                    document.location.reload();
                });
        });

    });

    var ca = {
        init: function() {
            ca.ca_calculate_content_length();
            ca.ca_calculate_title_length();
            ca.ca_calculate_description_length();

            ca.ca_keyword_title();
            ca.ca_keyword_desc();
            ca.ca_keyword_body();
            ca.ca_keyword_url();

            ca.ca_h1_keyword();
            ca.ca_h2_keyword();
            ca.ca_h3_keyword();

            ca.change_title_desc_dynamic();

            ca.ca_keyword_density();

            setTimeout(function(){ca.init()}, 400);
        },
        change_title_desc_dynamic: function() {

            var template = temp_title;
            template = template.replace("%%title%%", $('#title').val());
            template = template.replace("%%sitename%%", ajax_object.name);

            $('.ps_editor.title').attr('placeholder', template);

            var template = temp_desc;
            template = template.replace("%%title%%", $('#title').val());
            template = template.replace("%%sitename%%", ajax_object.name);
            if (template == "") {
                template = ca.get_content('text');
            }

            if (template.length > 153) {
                template = template.substring(0, 153) + '...';
            }

            $('.ps_editor.desc').attr('placeholder', template);

        },
        ca_h1_keyword: function() {
            var title = $('#title').val().toLowerCase();
            var keyword = $('#ps_seo_keyword').val().toLowerCase();
            if (keyword == '') {
                ca.generate_li('ca_h1_keyword', 'yellow', 'Your Target Keyword is not set.')
            }else if (title.contains(keyword)) {
                ca.generate_li('ca_h1_keyword', 'green', 'Your Target Keyword is in your Page H1.')
            } else {
                ca.generate_li('ca_h1_keyword', 'red', 'Your Target Keyword is <b>NOT</b> in your Page H1.')
            }
        },
        ca_h2_keyword: function() {
            var content = ca.get_content();
            if (content == '') content = '<div></div>';
            var tempDom = $('<div>').append($.parseHTML(content));

            var h2s = tempDom.find('h2');

            var contains = false;
            var keyword = $('#ps_seo_keyword').val().toLowerCase();

            if (h2s.length > 0) {
                h2s.each(function(){
                    var text = $(this).html().toLowerCase();
                    if (text.contains(keyword)) {
                        contains = true;
                    }
                });
            }

            if (keyword == '') {
                ca.generate_li('ca_h2_keyword', 'yellow', 'Your Target Keyword is not set.')
            }else if (h2s.length < 1) {
                ca.generate_li('ca_h2_keyword', 'yellow', 'H2 Tags are not found in your Page.')
            }else if (contains == true) {
                ca.generate_li('ca_h2_keyword', 'green', 'Your Target Keyword is in your Page H2.')
            } else {
                ca.generate_li('ca_h2_keyword', 'red', 'Your Target Keyword is <b>NOT</b> in your Page H2.')
            }
        },
        ca_h3_keyword: function() {
            var content = ca.get_content();
            if (content == '') content = '<div></div>';
            var tempDom = $('<div>').append($.parseHTML(content));

            var h2s = tempDom.find('h3');

            var contains = false;
            var keyword = $('#ps_seo_keyword').val().toLowerCase();

            if (h2s.length > 0) {
                h2s.each(function(){
                    var text = $(this).html().toLowerCase();
                    if (text.contains(keyword)) {
                        contains = true;
                    }
                });
            }

            if (keyword == '') {
                ca.generate_li('ca_h3_keyword', 'yellow', 'Your Target Keyword is not set.')
            }else if (h2s.length < 1) {
                ca.generate_li('ca_h3_keyword', 'yellow', 'H3 Tags are not found in your Page.')
            }else if (contains == true) {
                ca.generate_li('ca_h3_keyword', 'green', 'Your Target Keyword is in your Page H3.')
            } else {
                ca.generate_li('ca_h3_keyword', 'red', 'Your Target Keyword is <b>NOT</b> in your Page H3.')
            }
        },
        ca_keyword_density: function() {
            var keyword = $('#ps_seo_keyword').val().toLowerCase();
            if (keyword == '') {
                $('#ca_keyword_density').html('0.0%');
                return false;
            }

            var content = ca.get_content('text').replace(/\!/g, ' ').replace(/\?/g, ' ').toLowerCase();
            var reg = new RegExp(keyword, "g");
            var occurrences = (content.match(reg) || []).length;

            var words = ca.get_words(content, true);

            var totalWords = words.length;
            var a = occurrences;
            var b = totalWords;
            var c = a/b;
            var wordCount = c*100;
            $('#ca_keyword_density').html(wordCount.toFixed(2) + '%');
        },
        ca_keyword_title: function() {
            var title = ca.get_title_value().toLowerCase();
            var keyword = $('#ps_seo_keyword').val().toLowerCase();
            if (keyword == '') {
                ca.generate_li('ca_keyword_title', 'yellow', 'Your Target Keyword is not set.')
            }else if (title.contains(keyword)) {
                ca.generate_li('ca_keyword_title', 'green', 'Your Target Keyword is in your Page Title.')
            } else {
                ca.generate_li('ca_keyword_title', 'red', 'Your Target Keyword is <b>NOT</b> in your Page Title.')
            }
        },
        ca_keyword_desc: function() {
            var title = ca.get_desc_value().toLowerCase();
            var keyword = $('#ps_seo_keyword').val().toLowerCase();
            if (keyword == '') {
                ca.generate_li('ca_keyword_desc', 'yellow', 'Your Target Keyword is not set.')
            }else if (title.contains(keyword)) {
                ca.generate_li('ca_keyword_desc', 'green', 'Your Target Keyword is in your Page Description.')
            } else {
                ca.generate_li('ca_keyword_desc', 'red', 'Your Target Keyword is <b>NOT</b> in your Page Description.')
            }
        },
        ca_keyword_body: function() {
            var body = ca.get_content().toLowerCase();
            var keyword = $('#ps_seo_keyword').val().toLowerCase();
            if (keyword == '') {
                ca.generate_li('ca_keyword_body', 'yellow', 'Your Target Keyword is not set.')
            }else if (body.contains(keyword)) {
                ca.generate_li('ca_keyword_body', 'green', 'Your Target Keyword is in your Page Body.')
            } else {
                ca.generate_li('ca_keyword_body', 'red', 'Your Target Keyword is <b>NOT</b> in your Page Body.')
            }
        },
        ca_keyword_url: function() {
            var url = $('.ps_editor.url').html().toLowerCase();
            url = url.trim();
            var keyword = $('#ps_seo_keyword').val().toLowerCase().replace(/\ /g, '');
            var keyword_crte = $('#ps_seo_keyword').val().toLowerCase().replace(/\ /g, '-');
            keyword = keyword.trim();
            keyword_crte = keyword_crte.trim();
            if (keyword == '') {
                ca.generate_li('ca_keyword_url', 'yellow', 'Your Target Keyword is not set.')
            }else if (url.contains(keyword) || url.contains(keyword_crte)) {
                ca.generate_li('ca_keyword_url', 'green', 'Your Target Keyword is in your Page URL.')
            } else {
                ca.generate_li('ca_keyword_url', 'red', 'Your Target Keyword is <b>NOT</b> in your Page URL.')
            }
        },
        ca_calculate_content_length: function() {
            var wordCount = ca.get_words(ca.get_content('text'));
            $('#ca_content_length').html(wordCount);
        },
        ca_calculate_title_length: function() {
            var wordCount = ca.get_title();
            if (wordCount == 0) {
                wordCount = $('.ps_editor.title').attr('placeholder').replace(/\&nbsp\;/g, ' ').replace(/\s+/g,' ').trim().length;
            }
            if (wordCount > 55) {
                wordCount = '<span style="color:red">' + wordCount + '</span>';
            }
            $('#ca_title_length').html(wordCount);
        },
        ca_calculate_description_length: function() {
            var wordCount = ca.get_desc();
            if (wordCount == 0) {
                wordCount = $('.ps_editor.desc').attr('placeholder').replace(/\&nbsp\;/g, ' ').replace(/\s+/g,' ').trim().length;
            }
            if (wordCount > 156) {
                wordCount = '<span style="color:red">' + wordCount + '</span>';
            }
            $('#ca_desc_length').html(wordCount);
        },




        /** Utils **/
        generate_li: function(id, color, text) {
            $('#' + id).html('<i class="fa fa-circle '+color+'"></i> ' + text);
        },
        get_title: function() {
            return $('.ps_editor.title').html().replace(/\&nbsp\;/g, ' ').replace(/\s+/g,' ').trim().length;
        },
        get_title_value: function() {
            return $('.ps_editor.title').html();
        },
        get_desc: function() {
            return $('.ps_editor.desc').html().replace(/\&nbsp\;/g, ' ').replace(/\s+/g,' ').trim().length;
        },
        get_desc_value: function() {
            return $('.ps_editor.desc').html();
        },
        get_content: function(format) {
            if (typeof format == 'undefined') {
                format = 'html';
            }
            try {
                return tinyMCE.get('content').getContent({format : format});
            } catch (error) {
                var wpeditor = jQuery('#content-textarea-clone');
                if (wpeditor.length > 0) {
                    if (format == 'html') {
                        return wpeditor.text().replace(/\[.*?\]/g, "");
                    } else {
                        var content = wpeditor.text();
                        var rex = /(<([^>]+)>)/ig;
                        return content.replace(rex , "").replace(/\[.*?\]/g, "");
                    }
                } else {
                    return '';
                }
            }
        },
        get_words: function (s, b) {
            s = s.replace(/(^\s*)|(\s*$)/gi,"");//exclude  start and end white-space
            s = s.replace(/[ ]{2,}/gi," ");//2 or more space to 1
            s = s.replace(/\n /,"\n"); // exclude newline with a start spacing
            if (typeof b == 'undefined') {
                return s.split(' ').length;
            } else {
                return s.split(' ');
            }
        }
    };


})(jQuery);