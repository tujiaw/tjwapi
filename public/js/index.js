$(function() {
    'use strict';

    $('#types a').on('click', function() {
        $('#content-frame').attr('src', $(this).attr('href'));
        $('#types li').removeClass('active');
        $(this).parent().addClass('active');
        return false;
    })
});