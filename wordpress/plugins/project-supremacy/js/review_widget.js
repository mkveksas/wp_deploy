(function ($) {

    $(document).ready(function($){

        jQuery('.ps_review_widget_title').click(function(){
            if (ps_review_state == 'minimized') {
                $('.ps_review_widget_body').css('bottom', '0px');
                ps_review_state = 'maximized';
            } else {
                $('.ps_review_widget_body').css('bottom', '-395px');
                ps_review_state = 'minimized';
            }
        });

        jQuery('.ps_review_stars').click(function(){
            var value = $(this).attr('data-value');
            $('#ps_review_stars').val(value);
        });

        jQuery('.ps_review_stars').hover(function(){
            var value = $(this).attr('data-value');
            $(this).find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
            switch (value) {
                case "1":
                    $('.star-2').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    $('.star-3').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    $('.star-4').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    $('.star-5').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    break;
                case "2":
                    $('.star-1').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');

                    $('.star-3').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    $('.star-4').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    $('.star-5').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    break;
                case "3":
                    $('.star-1').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    $('.star-2').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');

                    $('.star-4').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    $('.star-5').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    break;
                case "4":
                    $('.star-1').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    $('.star-2').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    $('.star-3').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');

                    $('.star-5').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    break;
                case "5":
                    $('.star-1').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    $('.star-2').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    $('.star-3').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    $('.star-4').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    break;
            }
        });

        var return_stars_value = '5';
        $('.ps_review_stars_container')
            .mouseenter(function(){
                return_stars_value = $('#ps_review_stars').val();
                console.log(return_stars_value);
        })
            .mouseleave(function(){
                return_stars_value = $('#ps_review_stars').val();
                console.log(return_stars_value);
            switch (return_stars_value) {
                case "1":
                    $('.star-2').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    $('.star-3').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    $('.star-4').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    $('.star-5').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    break;
                case "2":
                    $('.star-1').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    $('.star-2').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');

                    $('.star-3').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    $('.star-4').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    $('.star-5').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    break;
                case "3":
                    $('.star-1').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    $('.star-2').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    $('.star-3').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');

                    $('.star-4').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    $('.star-5').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    break;
                case "4":
                    $('.star-1').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    $('.star-2').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    $('.star-3').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    $('.star-4').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');

                    $('.star-5').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star-o');
                    break;
                case "5":
                    $('.star-1').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    $('.star-2').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    $('.star-3').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    $('.star-4').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    $('.star-5').find('i').removeClass('fa-star-o').removeClass('fa-star').addClass('fa-star');
                    break;
            }
        });

        jQuery('.ps_review_widget_form').submit(function(e){
            e.preventDefault();
            var data = $(this).serializeArray();
            data.push({
                name : 'ID',
                value: ps_review_id
            });
            $.post(ajaxurl, data)
                .done(function(d){
                    $('.ps_review_widget_body').fadeOut();
                    alert('Thank you for submitting your review!');
                });
        });

    });

    /*function renderWidget() {
        $.post(ajaxurl, 'action=gkty_render_review_widget')
            .done(function(d){
                var html = $(d);
                $('body').append(html);
            });
    }*/

})(jQuery);