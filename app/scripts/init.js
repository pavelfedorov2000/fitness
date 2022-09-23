(function ($) {
    $(document).ready(function () {
        //new WOW().init();
        app.burger.init();
        app.asidePopup.init();
        app.blog.init();
        app.articleAside.init();
        app.faq.init();
        app.clubReviews.init();
        app.coachBio.init();
        app.clubZones.init();
        app.timetableCalendar.init();
        app.coachRating.init();
        app.sliders.init();
        app.fitnessCard.init();

        $("a[href^='#']").not("a[href='#']").not('.tab').click(function (e) {
            e.preventDefault();

            const $scrollLink = $(this);
            const href = $scrollLink.attr("href");

            if ($scrollLink.hasClass('clubs-page__nav-btn')) {
                $scrollLink.siblings().removeClass('active');
                $scrollLink.addClass('active');
            }

            $("html, body").animate({ scrollTop: $(href).offset().top + "px" });
            return false;
        });

        $('.tab').on('click', function (e) {
            e.preventDefault();

            const $tab = $(this);
            const $tabNotActive = $tab.siblings();
            const $tabsContent = $tab.closest('section').find('.tabs-content');

            $($tabNotActive).removeClass('active');
            $tabsContent.removeClass('active');
            $tab.addClass('active');
            $($tab.attr('href')).addClass('active');
        });

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

        if (!$('.promo-team').length) {
            da.init();
        }
    });
})(jQuery)