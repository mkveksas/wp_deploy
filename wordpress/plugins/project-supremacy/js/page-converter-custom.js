(function ($) {

    $(document).ready(function($){

        $(document).on('click', '.btn-upload', function() {
            tb_show('', 'media-upload.php?type=image&amp;TB_iframe=true');
            return false;
        });

        $(document).on('click', '.btn-convert', function(){
            var button = $(this);
            var conf = confirm('This will create another copy of selected image in your Media Library with JPEG mime type. Proceed?');
            if (conf) {

                var remove = confirm("Do you wish to remove the original image upon converting it to JPEG?");

                var id = $(this).attr('data-id');
                var action = 'gkty_convert_image';
                var data = [
                    {
                        name: 'action',
                        value: action
                    },
                    {
                        name: 'id',
                        value: id
                    },
                    {
                        name: 'remove',
                        value: remove
                    }
                ];
                $.post(ajaxurl, data)
                    .done(function(d){
                        alert(d.message);
                        if (remove) {
                            button.parents('.col-md-2').fadeOut();
                        }
                    });
            }
        });


    });

})(jQuery);