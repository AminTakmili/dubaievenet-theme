(function ($) {

    $('.list-show-more .list-show-more-btn').click(function () {
      
        if ($(this).parents('.list-show-more').hasClass('show')) {
            $(this).parents('.list-show-more').removeClass('show');
            $(this).prev('.list-content').removeAttr('style');
        } else {
            $(this).parents('.list-show-more').addClass('show');
            var height = $(this).prev('.list-content').prop('scrollHeight');
            $(this).prev('.list-content').css({ maxHeight: height });
        }
    });

})(jQuery);
