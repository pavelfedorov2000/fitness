app.clubsCompre = {
    name: 'clubsCompre',
    description: 'your script description',
    init() {
        if (document.querySelectorAll('.clubs-compare-slider').length) {
            const clubsCompareSlider = new Splide('.clubs-compare-slider', {
                type: 'loop',
                perPage: 3,
                gap: '4rem',
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                    //pagination: 'slider-nav__pagination'
                },
                pagination: false,
                breakpoints: {
                    1024: {
                        perPage: 2,
                        gap: `${getComputedStyle(document.documentElement).getPropertyValue('--offset-m')}`
                    },
                    500: {
                        perPage: 1
                    },
                },
            });

            const clubsCompareSliderBar = clubsCompareSlider.root.querySelector('.slider-nav__progress-bar');

            clubsCompareSlider.on('mounted move', function () {
                const end = clubsCompareSlider.Components.Controller.getEnd() + 1;
                //console.log(end);
                clubsCompareSliderBar.style.width = String(100 * (clubsCompareSlider.index + 1) / end) + '%';
                clubsCompareSlider.root.querySelector('.slider-nav__counter--current').textContent = `0${clubsCompareSlider.index + 1}`;
                clubsCompareSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${end}`;
            });

            clubsCompareSlider.mount();
        }
    },
};
