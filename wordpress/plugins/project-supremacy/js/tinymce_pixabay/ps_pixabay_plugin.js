jQuery(document).ready(function($) {

    tinymce.PluginManager.add('ps_pixabay_embed', function(editor, url) {


        editor.addButton('ps_pixabay_embed', {

            image: ajax_object.plugins_url + '/project-supremacy/css/tinymce_pixabay/pixabay.png',
            tooltip: 'Project Sup - Pixabay Images',
            onclick: open_Pixabay
        });

        function open_Pixabay() {

            editor.windowManager.open({

                title: 'Project Sup - Select Pixabay Image',
                width: 780,
                height: 525,
                url: ajax_object.plugins_url + '/project-supremacy/inc/tinymce_pixabay/pixabay.php'
            }, {
                PixabayAPI: PixabayAPI,
                PixabayUsername: PixabayUsername,
                ajaxurl: ajaxurl,
                plugins_url: ajax_object.plugins_url,
                upload_dir: ajax_object.upload_dir

            })
        }

    });
});