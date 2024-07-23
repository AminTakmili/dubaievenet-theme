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

    //mobile-menu

    $('.mobile-menu-icon').click(function () {
		$(this).find('.menu-ii').toggleClass('hidden');
		$(this).find('.close-ii').toggleClass('hidden');
		$('.menu-sidebar').toggleClass('open');
	});

    $('.menu-item-has-children').click(function () {
		if ($(this).hasClass('show')) {
			$(this).removeClass('show');
			$(this).children('.sub-menu').removeAttr('style');
		} else {
			$(this).addClass('show');
			var height = $(this).children('.sub-menu').prop('scrollHeight');
			//console.log(height)
			$(this).children('.sub-menu').css({ maxHeight: height });
		}
	});

})(jQuery);
