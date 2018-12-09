jQuery(document).ready(function($) {


    tinymce.PluginManager.add('ps_youtube_embed', function(editor, url) {


        editor.addButton('ps_youtube_embed', {

            image: ajax_object.plugins_url + '/project-supremacy/css/tinymce_youtube/youtube.png',
            tooltip: 'Project Sup - YouTube Embed',
            onclick: open_youTube
        });

        function open_youTube() {

            editor.windowManager.open({

                title: 'Project Sup - Select YouTube Video',
                width: 900,
                height: 525,
                url: ajax_object.plugins_url + '/project-supremacy/inc/tinymce_youtube/youTube.php'
            })
        }

    });
});