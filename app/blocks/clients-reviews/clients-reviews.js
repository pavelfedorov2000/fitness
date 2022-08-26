app.clubReviews = {
    name: 'clubReviews',
    description: 'your script description',
    init() {
        new Swiper('.club-reviews-slider', {
            //loop: true,
            slidesPerView: 'auto',
            //centerSlides: true,
            spaceBetween: 56,
            speed: 1000,
            autoplay: {
                delay: 3000,
            },
            scrollbar: {
                el: ".swiper-scrollbar",
                draggable: true,
            },
            /* breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                992: {
                    slidesPerView: 4,
                }
            }, */
        });
    },
};
