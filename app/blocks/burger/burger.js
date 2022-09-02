app.burger = {
    name: 'burger',
    description: 'burger-btn and burger-menu logic',
    init() {
        $('.burger-btn').on('click', function () {
            const $burgerBtn = $(this);

            if ($burgerBtn.hasClass('active')) {
                $('body').removeClass('_lock');
                $('.burger-btn').removeClass('active');
                $('.burger-menu').removeClass('active');
            } else {
                $('body').addClass('_lock');
                $('.burger-btn').addClass('active');
                $('.burger-menu').addClass('active');
            }
        });
    },
};
