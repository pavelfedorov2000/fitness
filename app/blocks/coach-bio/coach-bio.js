app.coachBio = {
    name: 'coachBio',
    description: 'your script description',
    init() {
        new Swiper('.coach-music-slider', {
            loop: true,
            slidesPerView: 'auto',
            speed: 1000,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1025: {
                    slidesPerView: 6,
                }
            },
        });
    },
};
