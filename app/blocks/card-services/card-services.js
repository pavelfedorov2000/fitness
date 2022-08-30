app.cardServices = {
    name: 'cardServices',
    description: 'your script description',
    init() {
        const progressBar = document.querySelector('.card-services__progress-rect');
        const cardServices = progressBar.closest('.card-services');
        const cardServicesTexts= cardServices.querySelector('.card-services__text').querySelectorAll('p');
        const sliderPaginationItems = cardServices.querySelectorAll('.slider-pagination__item');
        const cs = getComputedStyle(cardServices);
        let progressBarWidth = cs.getPropertyValue('--white-rect');
        const progressBarDelta = cs.getPropertyValue('--white-rect-delta');
        //console.log(progressBarWidth);
        //console.log(progressBarDelta);

        const cardServicesSlider = new Swiper('.card-services-slider', {
            loop: true,
            slidesPerView: 1,
            spaceBetween: 30,
            effect: "fade",
            speed: 1000,
            autoplay: {
                delay: 3000,
            },
            pagination: {
                el: '.swiper-pagination',
                type: 'progressbar'
            },
            on: {
                slideChange: function(swiper) {
                    console.log(swiper.realIndex);
                    cardServices.querySelector('.card-services__text').querySelector('p.active').classList.remove('active');
                    cardServicesTexts[swiper.realIndex].classList.add('active');
                    cardServices.querySelector('.slider-pagination__item.active').classList.remove('active');
                    sliderPaginationItems[swiper.realIndex].classList.add('active');
                    progressBarWidth += progressBarDelta;
                    progressBar.style.setProperty('width', progressBarWidth);
                }
            } 
        });
    },
};
