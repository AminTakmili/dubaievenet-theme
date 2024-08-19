
import Swiper, { Navigation, Pagination, Autoplay, Scrollbar, Thumbs, EffectCards  } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay, Scrollbar, Thumbs,EffectCards ]);

(function () {

    const swipers = document.querySelectorAll('[data-swiper]');

    swipers.forEach((swiper) => {
        let options = swiper.dataset.swiper ? JSON.parse(swiper.dataset.swiper) : {};
        // console.log(swiper)
        new Swiper(swiper, options);
    });


    const CitySw = new Swiper(".list-of-singers", {

        spaceBetween: 60,
        slidesPerView: "auto",
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

    });
    const SingerSw = new Swiper(".list-of-city", {

        spaceBetween: 30,
        slidesPerView: "auto",
        slidesPerView: "auto",
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },

    });

    const HomeSlider = new Swiper(".home-slider", {

        // effect: "cards",
        perSlideRotate: 4,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        autoplay: {
            delay: 4000
        },
    });
    const productSlider = new Swiper(".product-slider", {

        perSlideRotate: 4,
        autoHeight: true,
        spaceBetween: 10,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        },
        // autoplay: {
        //     delay: 4000
        // },
    });

})();
