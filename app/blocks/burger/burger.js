app.burger = {
    name: 'burger',
    description: 'burger-btn and burger-menu logic',
    init() {
        $('.burger-btn').on('click', function () {
            const $burgerBtn = $(this);

            if ($burgerBtn.attr('aria-expanded') === 'true') {
                $burgerBtn.attr('aria-expanded', false);
                $burgerBtn.attr('aria-label', 'Открыть меню');
                $('body').removeClass('_lock');
                $('.burger-btn').removeClass('active');
                $('.burger-menu').removeClass('active');
            } else {
                $burgerBtn.attr('aria-expanded', true);
                $burgerBtn.attr('aria-label', 'Закрыть меню');
                $('body').addClass('_lock');
                $('.burger-btn').addClass('active');
                $('.burger-menu').addClass('active');
            }
        });
    },
};
