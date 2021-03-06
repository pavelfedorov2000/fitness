(function ($) {
    $(document).ready(function () {
        //new WOW().init();
        app.blog.init();
        app.clubPhotos.init();
        app.clubTeam.init();
        app.clubsCompre.init();
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

        // Update the bar width:


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

        if (document.querySelectorAll('.children-sections-slider').length) {
            const childrenSectionsSlider = new Splide('.children-sections-slider', {
                type: 'loop',
                gap: '2.4rem',
                classes: {
                    arrows: 'splide__arrows slider-nav__arrows',
                    arrow: 'splide__arrow slider-nav__arrow',
                    prev: 'splide__arrow--prev slider-nav__arrow--prev',
                    next: 'splide__arrow--next slider-nav__arrow--next',
                    //pagination: 'slider-nav__pagination'
                },
                pagination: false,
            });

            const childrenSectionsSliderBar = childrenSectionsSlider.root.querySelector('.slider-nav__progress-bar');

            childrenSectionsSlider.on('mounted move', function () {
                const end = childrenSectionsSlider.Components.Controller.getEnd() + 1;
                //console.log(end);
                childrenSectionsSliderBar.style.width = String(100 * (childrenSectionsSlider.index + 1) / end) + '%';
                childrenSectionsSlider.root.querySelector('.slider-nav__counter--current').textContent = `0${childrenSectionsSlider.index + 1}`;
                childrenSectionsSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${end}`;
            });

            childrenSectionsSlider.mount();
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
            // ???????????? ????????????????
            this.??bjects = [];
            this.daClassname = "_dynamic_adapt_";
            // ???????????? DOM-??????????????????
            this.nodes = document.querySelectorAll("[data-da]");

            // ???????????????????? ??bjects ????????????????
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const ??bject = {};
                ??bject.element = node;
                ??bject.parent = node.parentNode;
                ??bject.destination = document.querySelector(dataArray[0].trim());
                ??bject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                ??bject.place = dataArray[2] ? dataArray[2].trim() : "last";
                ??bject.index = this.indexInParent(??bject.parent, ??bject.element);
                this.??bjects.push(??bject);
            }

            this.arraySort(this.??bjects);

            // ???????????? ???????????????????? ??????????-????????????????
            this.mediaQueries = Array.prototype.map.call(this.??bjects, function (item) {
                return '(' + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }, this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, function (item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            });

            // ?????????????????????? ?????????????????? ???? ??????????-????????????
            // ?? ?????????? ?????????????????????? ?????? ???????????? ??????????????
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ',');
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];

                // ???????????? ???????????????? ?? ???????????????????? ????????????????????????
                const ??bjectsFilter = Array.prototype.filter.call(this.??bjects, function (item) {
                    return item.breakpoint === mediaBreakpoint;
                });
                matchMedia.addListener(function () {
                    _this.mediaHandler(matchMedia, ??bjectsFilter);
                });
                this.mediaHandler(matchMedia, ??bjectsFilter);
            }
        };

        DynamicAdapt.prototype.mediaHandler = function (matchMedia, ??bjects) {
            if (matchMedia.matches) {
                for (let i = 0; i < ??bjects.length; i++) {
                    const ??bject = ??bjects[i];
                    ??bject.index = this.indexInParent(??bject.parent, ??bject.element);
                    this.moveTo(??bject.place, ??bject.element, ??bject.destination);
                }
            } else {
                for (let i = 0; i < ??bjects.length; i++) {
                    const ??bject = ??bjects[i];
                    if (??bject.element.classList.contains(this.daClassname)) {
                        this.moveBack(??bject.parent, ??bject.element, ??bject.index);
                    }
                }
            }
        };

        // ?????????????? ??????????????????????
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

        // ?????????????? ????????????????
        DynamicAdapt.prototype.moveBack = function (parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== undefined) {
                parent.children[index].insertAdjacentElement('beforebegin', element);
            } else {
                parent.insertAdjacentElement('beforeend', element);
            }
        }

        // ?????????????? ?????????????????? ?????????????? ???????????? ????????????????
        DynamicAdapt.prototype.indexInParent = function (parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };

        // ?????????????? ???????????????????? ?????????????? ???? breakpoint ?? place 
        // ???? ?????????????????????? ?????? this.type = min
        // ???? ???????????????? ?????? this.type = max
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