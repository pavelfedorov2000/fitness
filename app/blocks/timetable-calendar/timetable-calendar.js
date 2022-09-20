app.timetableCalendar = {
    name: 'timetableCalendar',
    description: 'your script description',
    init() {
        new Swiper('.timetable-tape', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 32,
            speed: 1000,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1025: {
                    spaceBetween: 30,
                    slidesPerView: 7,
                }
            },
        });

        new Swiper('.events-tape', {
            loop: true,
            slidesPerView: 'auto',
            spaceBetween: 32,
            speed: 1000,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            breakpoints: {
                1025: {
                    spaceBetween: 50,
                    slidesPerView: 5,
                }
            },
        });
    },
};
