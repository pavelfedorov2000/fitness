app.clubTeam = {
    name: 'clubTeam',
    description: 'your script description',
    init() {
        if (document.querySelectorAll('.club-team-slider').length) {
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
                pagination: false
            });

            const clubTeamSliderBar = clubTeamSlider.root.querySelector('.slider-nav__progress-bar');

            clubTeamSlider.on('mounted move', function () {
                const end = clubTeamSlider.Components.Controller.getEnd() + 1;
                //console.log(end);
                clubTeamSliderBar.style.width = String(100 * (clubTeamSlider.index + 1) / end) + '%';
                clubTeamSlider.root.querySelector('.slider-nav__counter--current').textContent = `0${clubTeamSlider.index + 1}`;
                clubTeamSlider.root.querySelector('.slider-nav__counter--total').textContent = `0${end}`;
            });

            clubTeamSlider.mount();
        }
    },
};
