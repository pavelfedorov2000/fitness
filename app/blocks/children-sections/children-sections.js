app.childrenSections = {
    name: 'childrenSections',
    description: 'your script description',
    init() {
        if (document.querySelectorAll('.children-sections .children-sections-slider').length) {
            const childrenSectionsSlider = new Splide('.children-sections .children-sections-slider', {
                type: 'loop',
                gap: '2.4rem',
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                },
                pagination: false,
            });

            const childrenSectionsSliderBar = childrenSectionsSlider.root.querySelector('.slider-nav__progress-bar');

            childrenSectionsSlider.on('mounted move', function () {
                const end = childrenSectionsSlider.Components.Controller.getEnd() + 1;
                childrenSectionsSliderBar.style.width = String(100 * (childrenSectionsSlider.index + 1) / end) + '%';
                childrenSectionsSlider.root.querySelector('.slider-nav__counter--current').textContent = `0${childrenSectionsSlider.index + 1}`;
                childrenSectionsSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${end}`;
            });

            childrenSectionsSlider.mount();
        }

        if (document.querySelectorAll('.club-services .children-sections-slider').length) {
            const childrenSectionsSlider = new Splide('.club-services .children-sections-slider', {
                type: 'loop',
                gap: '2.4rem',
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                },
                pagination: false,
            });

            const childrenSectionsSliderBar = childrenSectionsSlider.root.querySelector('.slider-nav__progress-bar');

            childrenSectionsSlider.on('mounted move', function () {
                const end = childrenSectionsSlider.Components.Controller.getEnd() + 1;
                childrenSectionsSliderBar.style.width = String(100 * (childrenSectionsSlider.index + 1) / end) + '%';
                childrenSectionsSlider.root.querySelector('.slider-nav__counter--current').textContent = `0${childrenSectionsSlider.index + 1}`;
                childrenSectionsSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${end}`;
            });

            childrenSectionsSlider.mount();
        }

        if (document.querySelectorAll('.business-classes-slider').length) {
            const businessClassesSlider = new Splide('.business-classes-slider', {
                type: 'loop',
                gap: '2.4rem',
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                },
                pagination: false,
            });

            const businessClassesSliderBar = businessClassesSlider.root.querySelector('.slider-nav__progress-bar');

            businessClassesSlider.on('mounted move', function () {
                const end = businessClassesSlider.Components.Controller.getEnd() + 1;
                businessClassesSliderBar.style.width = String(100 * (businessClassesSlider.index + 1) / end) + '%';
                businessClassesSlider.root.querySelector('.slider-nav__counter--current').textContent = `0${businessClassesSlider.index + 1}`;
                businessClassesSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${end}`;
            });

            businessClassesSlider.mount();
        }
    },
};
