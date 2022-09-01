app.clubZones = {
    name: 'clubZones',
    description: 'your script description',
    init() {
        const clubZones = document.querySelector('.club-zones');
        const sliderPaginationItems = clubZones && clubZones.querySelectorAll('.slider-pagination__item');

        new Swiper('.club-zones-slider', {
            loop: true,
            spaceBetween: 16,
            slidesPerView: 'auto',
            speed: 1000,
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar'
            },
            breakpoints: {
                1025: {
                    slidesPerView: 1,
                    effect: "fade",
                }
            },
            on: {
                slideChange: function (swiper) {
                    sliderPaginationItems[swiper.realIndex].classList.add('active');

                    if (swiper.realIndex === 0) {
                        clubZones.querySelectorAll('.slider-pagination__item.active').forEach(slide => slide.classList.remove('active'));
                        sliderPaginationItems[swiper.realIndex].classList.add('active');
                    }
                }
            }
        });

        $('.club-services .select__input').on('change', function () {
            const $selectInput = $(this);
            const $selectLabel = $selectInput.next();

            $('.club-services .tabs-content.active').removeClass('active');
            $(`#${$selectLabel.attr('data-tab')}`).addClass('active');
        });
    },
};
