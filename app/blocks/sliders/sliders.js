app.sliders = {
    name: 'sliders',
    description: 'your script description',
    init() {
        function initSplideProgressBar(slider) {
            const sliderBar = slider.root.querySelector('.slider-nav__progress-bar');

            slider.on('mounted move', function () {
                const end = slider.Components.Controller.getEnd() + 1;
                //console.log(end);
                sliderBar.style.width = String(100 * (slider.index + 1) / end) + '%';
                slider.root.querySelector('.slider-nav__counter--current').textContent = `0${slider.index + 1}`;
                slider.root.querySelector('.slider-nav__counter--total').textContent = `0${end}`;
            });
        }

        if (document.querySelectorAll('.coach-photos-slider').length) {
            const coachPhotosSlider = new Splide('.coach-photos-slider', {
                type: 'loop',
                perPage: 3,
                perMove: 1,
                gap: `${getComputedStyle(document.documentElement).getPropertyValue('--section-padding')}`,
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
                        type: 'loop',
                        perPage: 2,
                        gap: `${getComputedStyle(document.documentElement).getPropertyValue('--offset-m')}`,
                    },
                    640: {
                        perPage: 1,
                        gap: `${getComputedStyle(document.documentElement).getPropertyValue('--offset-s')}`,
                    },
                },
            });

            initSplideProgressBar(coachPhotosSlider);

            coachPhotosSlider.mount();
        }

        if (document.querySelectorAll('.article-page-slider').length) {
            const articlePageSlider = new Splide('.article-page-slider', {
                type: 'loop',
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                    //pagination: 'slider-nav__pagination'
                },
                pagination: false
            });

            initSplideProgressBar(articlePageSlider);

            articlePageSlider.mount();
        }

        if (document.querySelectorAll('.sale-slider').length) {
            const saleSlider = new Splide('.sale-slider', {
                speed: 1000,
                type: 'loop',
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                    //pagination: 'slider-nav__pagination'
                },
                pagination: false
            });

            initSplideProgressBar(saleSlider);

            saleSlider.mount();
        }

        if (document.querySelectorAll('.blog-slider').length) {
            const blogSlider = new Splide('.blog-slider', {
                //type: 'loop',
                perPage: 2,
                gap: `${getComputedStyle(document.documentElement).getPropertyValue('--offset-s')}`,
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                    //pagination: 'slider-nav__pagination'
                },
                pagination: false,
                breakpoints: {
                    575: {
                        perPage: 1,
                    },
                },
            });

            initSplideProgressBar(blogSlider);

            if ($(window).width() <= 1024) {
                blogSlider.mount();
            }
        }

        if (document.querySelectorAll('.events-slider').length) {
            const eventsSlider = new Splide('.events-slider', {
                perPage: 5,
                gap: '9.4rem',
                classes: {
                    //arrow: 'splide__arrow',
                    //prev: 'splide__arrow--prev',
                    //next: 'splide__arrow--next',
                    //pagination: 'slider-nav__pagination'
                },
                pagination: false
            });

            /* const activeSlide = document.querySelector('.events-slider__item.is-active');
            console.log(activeSlide); */ // null
            const eventsSectionContentActive = document.querySelector('.events-section__content.active');
            const eventSliderSlides = document.querySelectorAll('.events-slider__item');

            eventsSlider.on('mounted move', function () {
                eventsSectionContentActive.classList.remove('active');
                //const slideId = activeSlide.getAttribute('id').split('-')[1].split('').slice(-1)[0];
                //console.log(saleSlider.index);
                //document.querySelector('.events-slider__item.is-active').classList.add('active');
                document.querySelectorAll('.events-section__content')[eventsSlider.index].classList.add('active');
                eventSliderSlides.forEach(slide => slide.classList.remove('active'));
                eventSliderSlides[eventsSlider.index].classList.add('active');
            });

            eventSliderSlides.forEach(slide => {
                slide.addEventListener('click', () => {
                    const slideId = slide.getAttribute('id').split('-')[1].split('').slice(-1)[0];
                    eventsSectionContentActive.classList.remove('active');
                    document.querySelector('.events-slider__item.active').classList.remove('active');
                    eventSliderSlides[slideId - 1].classList.add('active');
                    document.querySelectorAll('.events-section__content')[slideId - 1].classList.add('active');
                    eventsSlider.go(slideId - 1);
                });
            });

            eventsSlider.mount();
        }

        if (document.querySelectorAll('.club-vacancies-slider').length) {
            const clubVacanciesSlider = new Splide('.club-vacancies-slider', {
                type: 'loop',
                perPage: 2,
                gap: `${getComputedStyle(document.documentElement).getPropertyValue('--offset-m')}`,
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                },
                pagination: false,
                breakpoints: {
                    575: {
                        perPage: 1,
                        gap: 0
                    },
                },
            });

            initSplideProgressBar(clubVacanciesSlider);

            if ($(window).width() <= 1024) {
                clubVacanciesSlider.mount();
            }
        }

        if (document.querySelectorAll('.success-stories-slider').length) {
            const successStoriesSlider = new Splide('.success-stories-slider', {
                type: 'loop',
                speed: 1000,
                perPage: 3,
                perMove: 1,
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
                        gap: `${getComputedStyle(document.documentElement).getPropertyValue('--offset-s')}`,
                    },
                    767: {
                        perPage: 1
                    },
                },
            });

            initSplideProgressBar(successStoriesSlider);

            successStoriesSlider.mount();
        }

        if (document.querySelectorAll('.individual-lessons-slider').length) {
            const individualLessonsSlider = new Splide('.individual-lessons-slider', {
                type: 'loop',
                gap: `${getComputedStyle(document.documentElement).getPropertyValue('--offset-xxxl')}`,
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                },
                pagination: false,
                breakpoints: {
                    1024: {
                        gap: 0
                    },
                },
            });

            initSplideProgressBar(individualLessonsSlider);

            individualLessonsSlider.mount();
        }

        if (document.querySelectorAll('.services-more-slider').length) {
            const servicesMoreSlider = new Splide('.services-more-slider', {
                type: 'loop',
                perPage: 3,
                perMove: 1,
                gap: `${getComputedStyle(document.documentElement).getPropertyValue('--offset-xl')}`,
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                },
                pagination: false,
                breakpoints: {
                    1024: {
                        perPage: 2,
                        gap: `${getComputedStyle(document.documentElement).getPropertyValue('--offset-s')}`,
                    },
                    640: {
                        perPage: 1,
                        gap: 0
                    },
                },
            });

            initSplideProgressBar(servicesMoreSlider);

            servicesMoreSlider.mount();
        }

        if (document.querySelectorAll('.children-sections .children-sections-slider').length) {
            const childrenSectionsSlider = new Splide('.children-sections .children-sections-slider', {
                type: 'loop',
                gap: `${getComputedStyle(document.documentElement).getPropertyValue('--offset-m')}`,
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                },
                pagination: false,
            });

            initSplideProgressBar(childrenSectionsSlider);

            childrenSectionsSlider.mount();
        }

        if (document.querySelectorAll('.club-services .children-sections-slider').length) {
            const childrenSectionsSlider = new Splide('.club-services .children-sections-slider', {
                type: 'loop',
                //gap: `${getComputedStyle(document.documentElement).getPropertyValue('--offset-m')}`,
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                },
                pagination: false,
                /* breakpoints: {
                    1024: {
                        gap: 0
                    },
                }, */
            });

            initSplideProgressBar(childrenSectionsSlider);

            childrenSectionsSlider.mount();
        }

        if (document.querySelectorAll('.business-classes-slider').length) {
            const businessClassesSlider = new Splide('.business-classes-slider', {
                type: 'loop',
                gap: `${getComputedStyle(document.documentElement).getPropertyValue('--offset-m')}`,
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                },
                pagination: false,
                breakpoints: {
                    1024: {
                        gap: 0
                    },
                },
            });

            initSplideProgressBar(businessClassesSlider);

            businessClassesSlider.mount();
        }

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

            initSplideProgressBar(clubPhotosSlider);

            clubPhotosSlider.sync(clubPhotosThumbs);
            clubPhotosSlider.mount();
            clubPhotosThumbs.mount();
        }

        if (document.querySelectorAll('.club-team-slider').length && $(window).width() > 1024) {
            const clubTeamSlider = new Splide('.club-team-slider', {
                type: 'loop',
                autoWidth: true,
                height: '83.2rem',
                //perPage: 3,
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
                    640: {
                        perPage: 1,
                        gap: `${getComputedStyle(document.documentElement).getPropertyValue('--offset-s')}`
                    },
                },
            });

            initSplideProgressBar(clubTeamSlider);

            clubTeamSlider.mount();
        }

        if (document.querySelectorAll('.clubs-compare-slider').length) {
            const clubsCompareSlider = new Splide('.clubs-compare-slider', {
                type: 'loop',
                perPage: 3,
                perMove: 1,
                gap: `${getComputedStyle(document.documentElement).getPropertyValue('--offset-xl')}`,
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
                    767: {
                        perPage: 1,
                    },
                },
            });

            initSplideProgressBar(clubsCompareSlider);

            clubsCompareSlider.mount();
        }
    },
};
