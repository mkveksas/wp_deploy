var functions;

(function ($) {

    $(document).ready(function(){

        $(document).on('click', '#stylefee', function(){
            if ($(this).is(':checked')) {
                $('#instructions').removeAttr('disabled');
            } else {
                $('#instructions').attr('disabled', 'disabled');
            }
        });

        functions.submit_iNeedArticles();
        functions.submit_iWriter();

        functions.get_iNeedArticles_table();
        functions.get_iWriter_table();
        functions.get_iWriter_table_pending();

        functions.refresh_articles_table();
        functions.remove_article_modal();
        functions.view_and_insert();
        functions.recheck_all();
        functions.recheck_single();
        functions.existing_page();
        functions.existing_post();

        functions.retract_keywords();
        functions.archive_project();
        functions.view_articles();
        functions.view_article();

        functions.show_review_article();

        functions.approve_article();
        functions.request_rewrite();
        functions.reject_article();
    });


    functions = {
        approve_article: function(){
            $(document).on('click', '.approve_article', function(){
                var data = jQuery('.review_article_form').serializeArray();
                data.push({name:'operation',value:'approve'});
                if (data.comment == '') {
                    alert('Comment cannot be empty when approving an article, please write some comment!');
                    return;
                }
                if (data.rate == '1' || data.rate == '2') {
                    alert('When approving articles, rating must be from 3-5!');
                    return;
                }
                $.post(ajaxurl, data).done(function (d) {
                    var m = $('#review_article_modal');
                    alert('Successfully approved an article');
                    m.modal('hide');
                    functions.get_iWriter_table_pending();
                });
            });
        },
        request_rewrite: function(){
            $(document).on('click', '.request_rewrite', function(){
                var data = jQuery('.review_article_form').serializeArray();
                data.push({name:'operation',value:'request_rewrite'});
                if (data.comment == '') {
                    alert('Comment cannot be empty when requesting an article rewrite, please write some comment!');
                    return;
                }
                delete data.rate;
                $.post(ajaxurl, data).done(function (d) {
                    var m = $('#review_article_modal');
                    alert('Successfully requested a rewrite for an article');
                    m.modal('hide');
                    functions.get_iWriter_table_pending();
                });
            });
        },
        reject_article: function(){
            $(document).on('click', '.reject_article', function(){
                var data = jQuery('.review_article_form').serializeArray();
                data.push({name:'operation',value:'reject'});
                if (data.comment == '') {
                    alert('Comment cannot be empty when rejecting an article, please write some comment!');
                    return;
                }
                if (data.rate == '4' || data.rate == '5') {
                    alert('When rejecting articles, rating must be from 1-3!');
                    return;
                }
                $.post(ajaxurl, data).done(function (d) {
                    var m = $('#review_article_modal');
                    alert('Successfully rejected an article');
                    m.modal('hide');
                    functions.get_iWriter_table_pending();
                });
            });
        },
        show_review_article: function () {
            $(document).on('click', '.review_article', function () {
                var pid = $(this).attr('data-pid');
                var aid = $(this).attr('data-aid');

                var data = {
                    action: 'gkty_review_article',
                    proj_id: pid,
                    article_id: aid
                };

                $.post(ajaxurl, data).done(function (d) {
                    var m = $('#review_article_modal');
                    m.find('.title').html(d.title);
                    m.find('#pid').val(pid);
                    m.find('#aid').val(aid);
                    m.find('.review_img').attr('src', d.img_url);



                    m.modal();
                });
            });
        },
        view_article: function(){
            $(document).on('click', '.view_article', function() {
                var button = $(this);
                $('#spintax').bootstrapToggle('off');
                var data = {
                    action: 'gkty_view_article',
                    pid: $(this).attr('data-pid'),
                    aid: $(this).attr('data-aid')
                };
                $.post(ajaxurl, data).done(function(dData){
                    button.prop('disabled', false);

                    $('#view_article_modal').modal('show');
                    $('#title_a').val(dData.title);
                    $('#body_a').html(dData.body);

                    $('.form-group.spintax').hide();

                    $('#create_post').off();
                    $("#create_post").click(function(){
                        $('#view_article_modal .modal-footer .btn').prop('disabled', true);

                        var data = {
                            action: 'gkty_create_iNeedArticles',
                            post_type: 'post',
                            post_title: $('#title_a').val(),
                            post_content: $('#body_a').val()
                        };

                        $.post(ajaxurl, data).done(function(dDataP) {
                            $('#view_article_modal .modal-footer .btn').prop('disabled', false);
                            if(dDataP.result == "success"){
                                $('#view_article_modal').modal('hide');
                                alert('Post successfully created!');
                            }else{
                                $('#view_article_modal').modal('hide');
                                alert('Unexpected error oared, please try again!');
                            }
                        });
                    });

                    $('#create_page').off();
                    $("#create_page").click(function(){
                        $('#view_article_modal .modal-footer .btn').prop('disabled', true);

                        var data = {
                            action: 'gkty_create_iNeedArticles',
                            post_type: 'page',
                            post_title: $('#title_a').val(),
                            post_content: $('#body_a').val()
                        };

                        $.post(ajaxurl, data).done(function(dDataP) {
                            $('#view_article_modal .modal-footer .btn').prop('disabled', false);
                            if(dDataP.result == "success"){
                                $('#view_article_modal').modal('hide');
                                alert('Page successfully created!');
                            }else{
                                $('#view_article_modal').modal('hide');
                                alert('Unexpected error oared, please try again!');
                            }
                        });
                    });
                })
            });
        },
        view_articles: function() {
            $(document).on('click', '.view_articles', function(){
                var button = $(this);
                var data = {
                    action: 'gkty_view_articles',
                    pid: $(this).attr('data-project-id')
                };
                button.prop('disabled', true);
                jQuery.post(ajaxurl, data).done(function(d){
                    button.prop('disabled', false);

                    if (d.status != 'ok') {
                        alert('Error while fetching articles!');
                        return false;
                    }

                    var rows = '';

                    if ($.isArray(d.article)) {
                        for(var i = 0; i < d.article.length; i++) {
                            var article = d.article[i];
                            var buttons = '<td><button data-aid="'+article.id+'" data-pid="'+data.pid+'" class="btn btn-success btn-xs view_article" title="View this article"><i class="fa fa-download"></i></button></td>';
                            var title = '<td>'+article.title+'</td>';
                            rows += '<tr>' + buttons + title + '</tr>';
                        }
                    } else {
                        var article = d.article;
                        var buttons = '<td><button data-aid="'+article.id+'" data-pid="'+data.pid+'" class="btn btn-success btn-xs view_article" title="View this article"><i class="fa fa-download"></i></button></td>';
                        var title = '<td>'+article.title+'</td>';
                        rows += '<tr>' + buttons + title + '</tr>';
                    }


                    var table = '<table class="table table-stripped table-hover"><tbody>' + rows + '</tbody></table>';

                    $('#view_articles_modal').find('.modal-body').empty().append(table);

                    $('#view_articles_modal').modal();


                });
            });
        },
        retract_keywords: function() {
            $(document).on('click', '.retract_keywords', function(){
                var button = $(this);
                var data = {
                    action: 'gkty_retract_keywords',
                    pid: $(this).attr('data-project-id')
                };
                button.prop('disabled', true);
                jQuery.post(ajaxurl, data).done(function(d){
                    if (d.status == "ERROR") {
                        alert(d.message);
                    } else {
                        alert(d.message);
                        //functions.get_iWriter_table();
                    }
                    button.prop('disabled', false);
                });
            });
        },
        archive_project: function(){
            $(document).on('click', '.archive_project', function(){
                var button = $(this);
                var data = {
                    action: 'gkty_archive_project',
                    pid: $(this).attr('data-project-id')
                };
                button.prop('disabled', true);
                jQuery.post(ajaxurl, data).done(function(d){
                    if (d.status == "ERROR") {
                        alert(d.message);
                    } else {
                        alert(d.message);
                        //functions.get_iWriter_table();
                    }
                    button.prop('disabled', false);
                });
            });
        },
        submit_iWriter: function(){
            $('#submit_iWriter_form').submit(function(e) {
                e.preventDefault();

                var button = $(this).find('button[type="submit"]');

                var data = $(this).serialize();

                button.prop('disabled', true);
                jQuery.post(ajaxurl, data).done(function(d){
                    if (d.status == "ERROR") {
                        alert(d.message);
                    } else {
                        alert(d.message);
                        //functions.get_iWriter_table();
                    }
                    button.prop('disabled', false);
                });
            });
        },
        get_iWriter_table_pending: function(){
            var table = $('#iWriter_table_pending').DataTable({

                "sServerMethod": "POST",
                "ajax": {
                    "url": "/wp-admin/admin-post.php",
                    "dataSrc": "article"
                },

                "dom": '<"top"lif<"datatable-actions-iwriter">>rt<"bottom"ip><"clear">',
                //"responsive": true,
                "bDestroy": true,
                "bPaginate": true,
                "bAutoWidth": true,
                "bFilter": true,
                "iDisplayLength": 20,
                "aLengthMenu": [[10, 20, 50, 100], [10, 20, 50, 100]],
                "aaSorting": [[1, 'desc']],
                "aoColumns": [
                    {
                        "bSearchable": true,
                        "sClass": "text-center",
                        "bSortable": false,
                        "mRender": function(data, type, row){
                            return '<button data-pid="'+row.project+'" data-aid="'+row.id+'" class="btn btn-warning btn-xs review_article" title="Review this article"><i class="fa fa-star"></i> Review</button>';
                        },
                        "asSorting": ["desc", "asc"]
                    },
                    {
                        "bSearchable": true,
                        "sClass": "text-center",
                        "bSortable": true,
                        "mData": 'title',
                        "mRender": function(data, type, row){
                            return data;
                        },
                        "asSorting": ["desc", "asc"]
                    }
                ],
                "fnServerParams": function (aoData) {
                    var f = {
                        name: "action",
                        value: "view_review"
                    };
                    aoData.push(f);
                },
                "fnCreatedRow": function( nRow, aData, iDataIndex ) {

                }
            });
        },
        get_iWriter_table: function(){
            var table = $('#iWriter_table').DataTable({

                "sServerMethod": "POST",
                "ajax": {
                    "url": "/wp-admin/admin-post.php",
                    "dataSrc": "project"
                },

                "dom": '<"top"lif<"datatable-actions-iwriter">>rt<"bottom"ip><"clear">',
                //"responsive": true,
                "bDestroy": true,
                "bPaginate": true,
                "bAutoWidth": true,
                "bFilter": true,
                "iDisplayLength": 20,
                "aLengthMenu": [[10, 20, 50, 100], [10, 20, 50, 100]],
                "aaSorting": [[1, 'desc']],
                "aoColumns": [
                    {
                        "bSearchable": true,
                        "sClass": "text-center",
                        "bSortable": false,
                        "mRender": function(data, type, row){
                            var html = '';
                            if (row.completed > 0) {
                                html += '<button type="button" class="btn btn-success view_articles" title="View completed articles" data-project-id="'+row.id+'"><i class="fa fa-eye"></i></button> ';
                            }
                            html += '<button type="button" class="btn btn-warning retract_keywords" title="Retract all open keywords for this project" data-project-id="'+row.id+'"><i class="fa fa-ban"></i></button> ';
                            html += '<button type="button" class="btn btn-danger archive_project" title="Archive this project" data-project-id="'+row.id+'"><i class="fa fa-trash-o"></i></button>';
                            return html;
                        },
                        "asSorting": ["desc", "asc"]
                    },
                    {
                        "bSearchable": true,
                        "sClass": "text-center",
                        "bSortable": true,
                        "mData": 'title',
                        "mRender": function(data, type, row){
                            return data;
                        },
                        "asSorting": ["desc", "asc"]
                    },
                    {
                        "bSearchable": true,
                        "sClass": "text-center",
                        "bSortable": true,
                        "mRender": function(data, type, row){
                            return "<small><b>Open:</b> " + row.open + "<br>" + "<b>In Use:</b> " + row.in_use + "<br>" + "<b>Pending Review:</b> " + row.pending_review + "<br>" + "<b>Completed:</b> " + row.completed + "</small>";
                        },
                        "asSorting": ["desc", "asc"]
                    },
                    {
                        "bSearchable": true,
                        "sClass": "text-center",
                        "bSortable": true,
                        "mData": 'status',
                        "mRender": function(data, type, row){
                            return data.toUpperCase();
                        },
                        "asSorting": ["desc", "asc"]
                    }
                ],
                "fnServerParams": function (aoData) {
                    var f = {
                        name: "action",
                        value: "datatable_iWriter"
                    };
                    aoData.push(f);
                },
                "fnCreatedRow": function( nRow, aData, iDataIndex ) {

                }
            });
        },
        submit_iNeedArticles: function(){
            $('#submit_iNeedArticles_form').submit(function(e){
                e.preventDefault();

                // Check if style fee is checked and no instructions have been set
                if ($('#stylefee').is(':checked')) {
                    if ($('#instructions').val() == '') {
                        alert('Please insert some instructions if you enabled Style fee.');
                        return;
                    }
                }

                var button = $(this).find('button[type="submit"]');

                var data = $(this).serialize();

                button.prop('disabled', true);
                jQuery.post(ajaxurl, data).done(function(d){
                    if (d.status == "ERROR") {
                        alert(d.message);
                    } else {
                        alert(d.message);
                        functions.get_iNeedArticles_table();
                    }
                    button.prop('disabled', false);
                });
            });
        },
        get_iNeedArticles_table: function(){
            var table = $('#iNeedArticles_table').DataTable({
                "dom": '<"top"li<"datatable-actions">>rt<"bottom"ip><"clear">',
                "responsive": true,
                "bProcessing": true,
                "bDestroy": true,
                "bPaginate": true,
                "bAutoWidth": true,
                "bFilter": true,
                "bServerSide": true,
                "sServerMethod": "POST",
                "sAjaxSource": "/wp-admin/admin-post.php",
                "iDisplayLength": 20,
                "aLengthMenu": [[10, 20, 50, 100], [10, 20, 50, 100]],
                "aaSorting": [[1, 'desc']],
                "aoColumns": [
                    {
                        "bSearchable": true,
                        "sClass": "text-center",
                        "bSortable": false,
                        "mData": 'article',
                        "mRender": function(data, type, row){
                            var html = '';
                            if (row['status'] == "2") {
                                html += '<button type="button" class="btn btn-primary" id="view_article" title="View/Insert article!" data-aid="'+data+'"><i class="fa fa-file-word-o"></i></button> ';
                            }

                            html += '<button type="button" class="btn btn-success" id="recheck_article_single" title="Check article status!" data-aid="'+data+'" data-bid="'+row['batch']+'"><i class="fa fa-refresh"></i></button> ';

                            html += '<button type="button" class="btn btn-danger" id="remove_article" title="Remove article!" data-aid="'+data+'"><i class="fa fa-trash-o"></i></button>';
                            return html;
                        },
                        "asSorting": ["desc", "asc"]
                    },
                    {
                        "bSearchable": true,
                        "sClass": "text-center",
                        "bSortable": true,
                        "mData": 'batch',
                        "mRender": function(data, type, row){
                            return data;
                        },
                        "asSorting": ["desc", "asc"]
                    },
                    {
                        "bSearchable": true,
                        "sClass": "text-center",
                        "bSortable": false,
                        "mData": 'article',
                        "mRender": function(data, type, row){
                            return data;
                        },
                        "asSorting": ["desc", "asc"]
                    },
                    {
                        "bSearchable": true,
                        "sClass": "text-center",
                        "bSortable": true,
                        "mData": 'keywords',
                        "mRender": function(data, type, row){
                            return data;
                        },
                        "asSorting": ["desc", "asc"]
                    },
                    {
                        "bSearchable": true,
                        "sClass": "text-center",
                        "bSortable": true,
                        "mData": 'status',
                        "mRender": function(data, type, row){
                            var html = '';
                            if (data == "0") {
                                html += '<button type="button" class="btn btn-danger" data-toggle="tooltip" data-placement="top" title="Article unassigned!"><i class="fa fa-circle"></i></button>';
                            }
                            if (data == "1.5") {
                                html += '<button type="button" class="btn btn-warning" data-toggle="tooltip" data-placement="top" title="Article being written!"><i class="fa fa-circle-o"></i></button>';
                            }

                            if (data == "2") {
                                html += '<button type="button" class="btn btn-success" data-toggle="tooltip" data-placement="top" title="Article completed!"><i class="fa fa-check-circle-o"></i></button>';
                            }
                            return html;
                        },
                        "asSorting": ["desc", "asc"]
                    }

                ],
                "fnInitComplete": function(settings, json) {
                    $('.datatable-actions').html(
                        '<button style="margin-left:10px" type="button" class="btn btn-primary btn-xs pull-right" id="refresh_articles_table"><i class="fa fa-refresh"></i> Refresh Table</button>' +
                        '<button style="margin-left:10px" type="button" class="btn btn-primary btn-xs pull-right" id="recheck_articles_table"><i class="fa fa-arrow-circle-down"></i> Recheck all Articles</button>'
                    )
                },
                "fnServerParams": function (aoData) {
                    var filters = $('#custom_clickbank_filters').serializeArray();
                    for(var i = 0; i < filters.length; i++) {
                        var filter = filters[i];
                        aoData.push(filter);
                    }
                    var f = {
                        name: "action",
                        value: "datatable_iNeedArticles"
                    };
                    aoData.push(f);
                },
                "fnCreatedRow": function( nRow, aData, iDataIndex ) {

                }
            });
        },
        refresh_articles_table: function(){
            $(document).on('click', '#refresh_articles_table', function(){

                functions.get_iNeedArticles_table();

            });

        },
        remove_article_modal: function() {
            var article_id = null;

            $(document).on('click', '#remove_article', function () {
                $('#remove_article_modal').modal('show');
                article_id = $(this).data('aid');
            });

            $(document).on('click', '#remove_this_article', function () {

                var button = $(this);
                button.prop('disabled', true);

                var data = {
                    action: 'gkty_remove_iNeedArticles',
                    article: article_id
                };

                $.post(ajaxurl, data).done(function(dData){
                    button.prop('disabled', false);
                    if (dData.status == "OK") {
                        functions.get_iNeedArticles_table();
                        $('#remove_article_modal').modal('hide');
                    }else{
                        $('#remove_article_modal').modal('hide');
                        alert('There was some error, please try again!');
                    }
                })
            });
        },
        view_and_insert: function() {
            $(document).on('click', '#view_article', function() {

                $('#spintax').bootstrapToggle('off');

                var button = $(this);
                button.prop('disabled', true);

                var data = {
                    action: 'gkty_load_iNeedArticles',
                    article: $(this).data('aid')
                };

                $.post(ajaxurl, data).done(function(dData){
                    button.prop('disabled', false);

                    $('#view_article_modal').modal('show');
                    $('#title_a').val(dData.data.title);
                    $('#body_a').html(dData.data.body);
                    $('.form-group.spintax').show();

                    $(document).on("click", "div.form-group.spintax > div", function(){
                        if($("#spintax").prop("checked")) {
                            $('#body_a').html(dData.data.spun);
                        }else{
                            $('#body_a').html(dData.data.body);
                        }
                    });

                    $("#create_post").click(function(){
                        $('#view_article_modal .modal-footer .btn').prop('disabled', true);

                        var data = {
                            action: 'gkty_create_iNeedArticles',
                            post_type: 'post',
                            post_title: $('#title_a').val(),
                            post_content: $('#body_a').val()
                        };

                        $.post(ajaxurl, data).done(function(dDataP) {
                            $('#view_article_modal .modal-footer .btn').prop('disabled', false);
                            if(dDataP.result == "success"){
                                $('#view_article_modal').modal('hide');
                                alert('Post successfully created!');
                            }else{
                                $('#view_article_modal').modal('hide');
                                alert('Unexpected error oared, please try again!');
                            }
                        });
                    });

                    $("#create_page").click(function(){
                        $('#view_article_modal .modal-footer .btn').prop('disabled', true);

                        var data = {
                            action: 'gkty_create_iNeedArticles',
                            post_type: 'page',
                            post_title: $('#title_a').val(),
                            post_content: $('#body_a').val()
                        };

                        $.post(ajaxurl, data).done(function(dDataP) {
                            $('#view_article_modal .modal-footer .btn').prop('disabled', false);
                            if(dDataP.result == "success"){
                                $('#view_article_modal').modal('hide');
                                alert('Page successfully created!');
                            }else{
                                $('#view_article_modal').modal('hide');
                                alert('Unexpected error oared, please try again!');
                            }
                        });
                    });
                })
            })
        },
        recheck_all: function(){
            $(document).on('click', '#recheck_articles_table', function(){

                $('#pr-progress-bar-articles').removeClass('hide');

                var data = {
                    action: 'gkty_recheck_articles_table'
                };

                $.post(ajaxurl, data).done(function(dData){
                    $('#pr-progress-bar-articles').addClass('hide');
                    functions.get_iNeedArticles_table();
                })
            });
        },
        recheck_single: function() {
            $(document).on('click', '#recheck_article_single', function() {

                $('#pr-progress-bar-articles').removeClass('hide');

                var data = {
                    action: 'gkty_recheck_single_article',
                    article: $(this).data('aid'),
                    batch: $(this).data('bid')
                };

                $.post(ajaxurl, data).done(function(dData){
                    $('#pr-progress-bar-articles').addClass('hide');
                    if (dData.status == "OK") {
                        alert(dData.message);
                        functions.get_iNeedArticles_table();
                    }else{
                        alert(dData.message);
                    }
                })
            })
        },
        existing_page: function() {
            $(document).on('click', '#edit_page', function(){
                var append = false;

                $('#view_article_modal').modal('hide');
                $('#body_a1').val($('#body_a').val());
                $('#view_pages_modal').modal('show');

                $(document).on('click', '#a_create_page', function() {

                    $('#a_create_page').prop('disabled', true);

                    if($("#append_page").prop("checked")) {
                        append = true;
                    }else{
                        append = false;
                    }

                    var data = {
                        action: 'gkty_append_post_page',
                        post_type: 'page',
                        post_id: $('.select_page').val(),
                        append: append,
                        post_content: $('#body_a').val()
                    };

                    $.post(ajaxurl, data).done(function(dData) {
                        alert('Page successfully updated!');
                        $('#a_create_page').prop('disabled', false);
                        $('#view_posts_modal').modal('hide');
                    });

                });

            })
        },
        existing_post: function() {
            $(document).on('click', '#edit_post', function(){
                var append = false;

                $('#view_article_modal').modal('hide');
                $('#body_a2').val($('#body_a').val());
                $('#view_posts_modal').modal('show');

                $(document).on('click', '#a_create_post', function() {
                    $('#a_create_post').prop('disabled', true);

                    if($("#append_post").prop("checked")) {
                        append = true;
                    }else{
                        append = false;
                    }

                    var data = {
                        action: 'gkty_append_post_page',
                        post_type: 'post',
                        post_id: $('.select_post').val(),
                        append: append,
                        post_content: $('#body_a2').val()
                    };

                    $.post(ajaxurl, data).done(function(dData) {
                        alert('Post successfully updated!');
                        $('#a_create_post').prop('disabled', false);
                        $('#view_posts_modal').modal('hide');
                    });

                });
            })
        }
    }


})(jQuery);