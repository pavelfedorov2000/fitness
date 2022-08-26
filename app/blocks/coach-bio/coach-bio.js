app.coachBio = {
    name: 'coachBio',
    description: 'your script description',
    init() {
        new Swiper('.coach-music-slider', {
            loop: true,
            slidesPerView: 6,
            //spaceBetween: 30,
            speed: 1000,
            /* autoplay: {
                delay: 3000,
            }, */
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                576: {
                    slidesPerView: 2,
                },
                1025: {
                    slidesPerView: 6,
                }
            },
        });
    },
};
