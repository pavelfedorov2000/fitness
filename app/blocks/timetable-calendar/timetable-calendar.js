app.timetableCalendar = {
    name: 'timetableCalendar',
    description: 'your script description',
    init() {
        const timetableCalendarSlider = new Swiper('.tape-slider', {
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
                    spaceBetween: 74,
                    slidesPerView: 7,
                }
            },
        });
    },
};
