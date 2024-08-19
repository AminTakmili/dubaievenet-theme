
import Swiper, { Navigation, Pagination, Autoplay, Scrollbar, Thumbs, EffectCards  } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Scrollbar, Thumbs,EffectCards ]);


(function ($) {


    const productTabbarSwiper = new Swiper(".product-tabbar-swiper", {
        freeMode: true,
        slidesPerView: "auto",
        watchSlidesProgress: true,
        spaceBetween: 6,

    });

    $(document).on("scroll", onScroll);

    $('.product-tabbar-swiper .swiper-slide a').on('click', function (e) {
        //e.preventDefault();
        $(document).off("scroll");

        // $('a').each(function () {
        //     $(this).removeClass('active');
        // })
        // $(this).addClass('active');

        var href = $(this).attr("href");
        var target = $(this).attr("href");
        target = $(target);

        $('html, body').stop().animate({ 'scrollTop': target.offset().top - 145 }, 100, 'swing', function () {
            //window.location.hash = href;
            $(document).on("scroll", onScroll);
        });
    });
    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        $('.product-tabbar-swiper .swiper-slide').each(function () {
            var currLink = $(this).find('a');
            var refElement = $(currLink.attr("href"));
                // console.log(currLink.attr("href"),$(currLink.attr("href")))
            if ((refElement.position().top + 150) <= scrollPos && refElement.position().top + refElement.height() > (scrollPos)) {
                $('*.product-tabbar-swiper .swiper-slide a').removeClass("active");
                currLink.addClass("active");
                let index = $('.product-tabbar-swiper .swiper-slide').index(this);
                productTabbarSwiper.slideTo(index);
            }
            else {
                // currLink.removeClass("active");
            }
        });
    }
})(jQuery);
