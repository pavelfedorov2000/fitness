(function ($) {
    $(document).ready(function () {
        //new WOW().init();
        app.blog.init();
        app.clubPhotos.init();
        app.clubTeam.init();
        app.clubsCompre.init();
        app.articleAside.init();
        app.faq.init();
        app.childrenSections.init();
        app.clubReviews.init();
        app.coachBio.init();
        //app.burger.init();
        //app.slider.init();
        //app.menu.init();
        //app.popup.init();
        //app.validation.init();


        //smoooth scroll to section
        /* document.querySelectorAll('.menu__link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                window.scrollTo({
                    top: document.getElementById(link.getAttribute('data-section')).offsetTop,
                    behavior: "smooth"
                });
                body.classList.remove('_lock');
                burgerBtn.classList.remove('.is-active');
                burgerMenu.classList.remove('.is-active');
            });
        }); */

        //const totalIndex = saleSlider.Components.Controller.getEnd() + 1;
        //saleSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${totalIndex}`;

        if (document.querySelectorAll('.coach-photos-slider').length) {
            const coachPhotosSlider = new Splide('.coach-photos-slider', {
                //type: 'loop',
                perPage: 3,
                gap: '8rem',
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                    //pagination: 'slider-nav__pagination'
                },
                pagination: false
            });

            const coachPhotosSliderBar = coachPhotosSlider.root.querySelector('.slider-nav__progress-bar');

            coachPhotosSlider.on('mounted move', function () {
                const end = coachPhotosSlider.Components.Controller.getEnd() + 1;
                //console.log(end);
                coachPhotosSliderBar.style.width = String(100 * (coachPhotosSlider.index + 1) / end) + '%';
                coachPhotosSlider.root.querySelector('.slider-nav__counter--current').textContent = `0${coachPhotosSlider.index + 1}`;
                coachPhotosSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${end}`;
            });

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

            const articlePageSliderBar = articlePageSlider.root.querySelector('.slider-nav__progress-bar');

            articlePageSlider.on('mounted move', function () {
                const end = articlePageSlider.Components.Controller.getEnd() + 1;
                //console.log(end);
                articlePageSliderBar.style.width = String(100 * (articlePageSlider.index + 1) / end) + '%';
                articlePageSlider.root.querySelector('.slider-nav__counter--current').textContent = `0${articlePageSlider.index + 1}`;
                articlePageSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${end}`;
            });

            articlePageSlider.mount();
        }


        if (document.querySelectorAll('.sale-slider').length) {
            const saleSlider = new Splide('.sale-slider', {
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

            const saleSliderBar = saleSlider.root.querySelector('.slider-nav__progress-bar');

            saleSlider.on('mounted move', function () {
                const end = saleSlider.Components.Controller.getEnd() + 1;
                //console.log(end);
                saleSliderBar.style.width = String(100 * (saleSlider.index + 1) / end) + '%';
                saleSlider.root.querySelector('.slider-nav__counter--current').textContent = `0${saleSlider.index + 1}`;
                saleSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${end}`;
            });

            saleSlider.mount();
        }

        if (document.querySelectorAll('.blog-slider').length) {
            const blogSlider = new Splide('.blog-slider', {
                //type: 'loop',
                perPage: 2,
                gap: 16,
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

            const blogSliderBar = blogSlider.root.querySelector('.slider-nav__progress-bar');

            //const totalIndex = saleSlider.Components.Controller.getEnd() + 1;
            //saleSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${totalIndex}`;

            // Update the bar width:
            blogSlider.on('mounted move', function () {
                const end = blogSlider.Components.Controller.getEnd() + 1;
                //console.log(end);
                blogSliderBar.style.width = String(100 * (blogSlider.index + 1) / end) + '%';
                blogSlider.root.querySelector('.slider-nav__counter--current').textContent = `0${blogSlider.index + 1}`;
                blogSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${end}`;
            });

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
                gap: '2.4rem',
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
                        gap: '1.7rem',
                    },
                },
            });

            const clubVacanciesSliderBar = clubVacanciesSlider.root.querySelector('.slider-nav__progress-bar');

            clubVacanciesSlider.on('mounted move', function () {
                const end = clubVacanciesSlider.Components.Controller.getEnd() + 1;
                //console.log(end);
                clubVacanciesSliderBar.style.width = String(100 * (clubVacanciesSlider.index + 1) / end) + '%';
                clubVacanciesSlider.root.querySelector('.slider-nav__counter--current').textContent = `0${clubVacanciesSlider.index + 1}`;
                clubVacanciesSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${end}`;
            });

            if ($(window).width() <= 1024) {
                clubVacanciesSlider.mount();
            }
        }

        if (document.querySelectorAll('.success-stories-slider').length) {
            const successStoriesSlider = new Splide('.success-stories-slider', {
                type: 'loop',
                perPage: 3,
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                    //pagination: 'slider-nav__pagination'
                },
                pagination: false
            });

            const successStoriesSliderBar = successStoriesSlider.root.querySelector('.slider-nav__progress-bar');

            successStoriesSlider.on('mounted move', function () {
                const end = successStoriesSlider.Components.Controller.getEnd() + 1;
                //console.log(end);
                successStoriesSliderBar.style.width = String(100 * (successStoriesSlider.index + 1) / end) + '%';
                successStoriesSlider.root.querySelector('.slider-nav__counter--current').textContent = `0${successStoriesSlider.index + 1}`;
                successStoriesSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${end}`;
            });

            successStoriesSlider.mount();
        }

        if (document.querySelectorAll('.individual-lessons-slider').length) {
            const individualLessonsSlider = new Splide('.individual-lessons-slider', {
                type: 'loop',
                gap: '6.4rem',
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                },
                pagination: false
            });

            const individualLessonsSliderBar = individualLessonsSlider.root.querySelector('.slider-nav__progress-bar');

            individualLessonsSlider.on('mounted move', function () {
                const end = individualLessonsSlider.Components.Controller.getEnd() + 1;
                individualLessonsSliderBar.style.width = String(100 * (individualLessonsSlider.index + 1) / end) + '%';
                individualLessonsSlider.root.querySelector('.slider-nav__counter--current').textContent = `0${individualLessonsSlider.index + 1}`;
                individualLessonsSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${end}`;
            });

            individualLessonsSlider.mount();
        }

        if (document.querySelectorAll('.services-more-slider').length) {
            const servicesMoreSlider = new Splide('.services-more-slider', {
                type: 'loop',
                perPage: 3,
                gap: '4rem',
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                },
                pagination: false
            });

            const servicesMoreSliderBar = servicesMoreSlider.root.querySelector('.slider-nav__progress-bar');

            servicesMoreSlider.on('mounted move', function () {
                const end = servicesMoreSlider.Components.Controller.getEnd() + 1;
                servicesMoreSliderBar.style.width = String(100 * (servicesMoreSlider.index + 1) / end) + '%';
                servicesMoreSlider.root.querySelector('.slider-nav__counter--current').textContent = `0${servicesMoreSlider.index + 1}`;
                servicesMoreSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${end}`;
            });

            servicesMoreSlider.mount();
        }


        // Custom jquery select
        $('.select__title').on('click', function () {
            const $selectTitle = $(this);
            const $selectContent = $selectTitle.next();
            const $selectItemNotActive = $selectTitle.closest('.select').siblings();
            const $selectTitleNotActive = $selectItemNotActive.find('.select__title');
            const $selectContentNotActive = $selectItemNotActive.find('.select__content');

            $selectTitleNotActive.removeClass('active');
            $selectContentNotActive.slideUp('300');
            $selectTitle.toggleClass('active');
            $selectContent.slideToggle('300');
        });

        $('.select__label').on('click', function () {
            const $selectOption = $(this);
            const $selectContent = $selectOption.closest('.select__content');
            const $select = $selectOption.closest('.select');
            const $selectTitle = $select.find('.select__title');

            $selectTitle.text($selectOption.text());
            $selectTitle.removeClass('active');
            $selectContent.slideUp('300');
        });

        $('.accordeon-title').on('click', function () {
            const $accordeonTitle = $(this);
            const $accordeonContent = $accordeonTitle.next();
            const $accordeonItemNotActive = $accordeonTitle.parent().siblings();
            const $accordeonItemNotActiveSummary = $accordeonItemNotActive.find('.accordeon-title');
            const $accordeonItemNotActiveContent = $accordeonItemNotActive.find('.accordeon-content');

            $accordeonItemNotActiveSummary.removeClass('active');
            $accordeonItemNotActiveContent.slideUp('300');
            $accordeonTitle.toggleClass('active');
            $accordeonContent.slideToggle('300');
        });

        function DynamicAdapt(type) {
            this.type = type;
        }

        DynamicAdapt.prototype.init = function () {
            const _this = this;
            // массив объектов
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            // массив DOM-элементов
            this.nodes = document.querySelectorAll("[data-da]");

            // наполнение оbjects объктами
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }

            this.arraySort(this.оbjects);

            // массив уникальных медиа-запросов
            this.mediaQueries = Array.prototype.map.call(this.оbjects, function (item) {
                return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }, this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            });

            // навешивание слушателя на медиа-запрос
            // и вызов обработчика при первом запуске
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ',');
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];

                // массив объектов с подходящим брейкпоинтом
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, function (item) {
                    return item.breakpoint === mediaBreakpoint;
                });
                matchMedia.addListener(function () {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                });
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };

        DynamicAdapt.prototype.mediaHandler = function (matchMedia, оbjects) {
            if (matchMedia.matches) {
                for (let i = 0; i < оbjects.length; i++) {
                    const оbject = оbjects[i];
                    оbject.index = this.indexInParent(оbject.parent, оbject.element);
                    this.moveTo(оbject.place, оbject.element, оbject.destination);
                }
            } else {
                for (let i = 0; i < оbjects.length; i++) {
                    const оbject = оbjects[i];
                    if (оbject.element.classList.contains(this.daClassname)) {
                        this.moveBack(оbject.parent, оbject.element, оbject.index);
                    }
                }
            }
        };

        // Функция перемещения
        DynamicAdapt.prototype.moveTo = function (place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === 'last' || place >= destination.children.length) {
                destination.insertAdjacentElement('beforeend', element);
                return;
            }
            if (place === 'first') {
                destination.insertAdjacentElement('afterbegin', element);
                return;
            }
            destination.children[place].insertAdjacentElement('beforebegin', element);
        }

        // Функция возврата
        DynamicAdapt.prototype.moveBack = function (parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== undefined) {
                parent.children[index].insertAdjacentElement('beforebegin', element);
            } else {
                parent.insertAdjacentElement('beforeend', element);
            }
        }

        // Функция получения индекса внутри родителя
        DynamicAdapt.prototype.indexInParent = function (parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };

        // Функция сортировки массива по breakpoint и place 
        // по возрастанию для this.type = min
        // по убыванию для this.type = max
        DynamicAdapt.prototype.arraySort = function (arr) {
            if (this.type === "min") {
                Array.prototype.sort.call(arr, function (a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) {
                            return 0;
                        }

                        if (a.place === "first" || b.place === "last") {
                            return -1;
                        }

                        if (a.place === "last" || b.place === "first") {
                            return 1;
                        }

                        return a.place - b.place;
                    }

                    return a.breakpoint - b.breakpoint;
                });
            } else {
                Array.prototype.sort.call(arr, function (a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) {
                            return 0;
                        }

                        if (a.place === "first" || b.place === "last") {
                            return 1;
                        }

                        if (a.place === "last" || b.place === "first") {
                            return -1;
                        }

                        return b.place - a.place;
                    }

                    return b.breakpoint - a.breakpoint;
                });
                return;
            }
        };

        const da = new DynamicAdapt("max");
        da.init();
    });
})(jQuery)