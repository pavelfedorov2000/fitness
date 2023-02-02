app.scrollBtn = {
    name: 'scrollBtn',
    description: 'your script description',
    init() {
        if ($('.scroll-btn').length) {
            const scrollBtn = document.querySelector('.scroll-btn');
            const scrollBtnSection = $('.page').children().eq(0)[0];

            scrollBtn.addEventListener('click', () => {
                window.scrollTo({
                    top: scrollBtnSection.getBoundingClientRect().height,
                    behavior: 'smooth'
                });
            });
        }
    },
};