$(function () {
    if (document.querySelectorAll('.page-slider').length && document.querySelectorAll('.footer').length) {
        document.querySelector('.footer').classList.add('swiper-slide');
    }

    function initSlider() {
        if (window.innerWidth > 1024 && !document.querySelector(".page-slider").classList.contains("swiper-initialized")) {
            const pageSlider = new Swiper(".page-slider", {
                direction: "vertical",
                spaceBetween: 0,
                slidesPerView: "auto",
                speed: 800,
                keyboard: {
                    enabled: true,
                    onlyInViewport: true,
                    pageUpDown: true
                },
                mousewheel: {
                    sensitivity: 1,
                },
                watchOverflow: true,
                init: false,
                allowTouchMove: false,
                parallax: true,
                on: {
                    init: function (swiper) {
                        document.querySelector('.swiper-slide-active').classList.remove('active');
                    },
                    slideChange: function (swiper) {
                        if (!document.querySelector('.swiper-slide-active').classList.contains('active')) {
                            document.querySelector('.swiper-slide-active').classList.add('active');
                        } else {
                            document.querySelector('.swiper-slide-active').classList.remove('active');
                        }
                    },
                    slideChangeTransitionEnd: function (swiper) {
                        if (!document.querySelector('.swiper-slide-active').classList.contains('active')) {
                            document.querySelector('.swiper-slide-active').classList.add('active');
                        } else {
                            document.querySelector('.swiper-slide-active').classList.remove('active');
                        }
                    },
                }
            });

            pageSlider.init();
        } else if (window.innerWidth < 1024 && document.querySelector(".page-slider").classList.contains("swiper-initialized")) {
            pageSlider.destroy(true, true);
        }
    }
    initSlider();

    window.addEventListener('resize', function () {
        initSlider();
    });
});