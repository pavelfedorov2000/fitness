app.clubPhotos = {
    name: 'clubPhotos',
    description: 'your script description',
    init() {
        if (document.querySelectorAll('.club-photos-slider').length) {
            const clubPhotosSlider = new Splide('.club-photos-slider', {
                type: 'loop',
                type: 'fade',
                rewind: true,
                pagination: false,
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                    //pagination: 'slider-nav__pagination'
                },
            });

            const clubPhotosThumbs = new Splide('.club-photos-thumbs', {
                fixedWidth: '10.4rem',
                fixedHeight: '10.4rem',
                gap: '2.2rem',
                rewind: true,
                pagination: false,
                arrows: false,
                isNavigation: true,
                /* breakpoints: {
                    600: {
                        fixedWidth: 60,
                        fixedHeight: 44,
                    },
                }, */
            });

            const clubPhotosSliderBar = clubPhotosSlider.root.querySelector('.slider-nav__progress-bar');

            clubPhotosSlider.on('mounted move', function () {
                const end = clubPhotosSlider.Components.Controller.getEnd() + 1;
                //console.log(end);
                clubPhotosSliderBar.style.width = String(100 * (clubPhotosSlider.index + 1) / end) + '%';
                clubPhotosSlider.root.querySelector('.slider-nav__counter--current').textContent = `0${clubPhotosSlider.index + 1}`;
                clubPhotosSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${end}`;
            });

            clubPhotosSlider.sync(clubPhotosThumbs);
            clubPhotosSlider.mount();
            clubPhotosThumbs.mount();
        }
    },
};
