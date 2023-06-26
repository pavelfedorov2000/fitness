app.burger = {
    name: 'burger',
    description: 'burger-btn and burger-menu logic',
    init() {
        $('.burger-btn').on('click', function () {
            const $burgerBtn = $(this);
            const $burgerMenu = $('.burger-menu');
            const $body = $('body');

            if ($burgerBtn.attr('aria-expanded') === 'true') {
                $burgerBtn.attr('aria-expanded', false);
                $burgerBtn.attr('aria-label', 'Открыть меню');
                $body.removeClass('_lock');
                $burgerBtn.removeClass('active');
                $burgerMenu.removeClass('active');
            } else {
                $burgerBtn.attr('aria-expanded', true);
                $burgerBtn.attr('aria-label', 'Закрыть меню');
                $body.addClass('_lock');
                $burgerBtn.addClass('active');
                $burgerMenu.addClass('active');
            }
        });
    },
};
