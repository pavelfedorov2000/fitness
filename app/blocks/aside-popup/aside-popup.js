app.asidePopup = {
    name: 'asidePopup',
    description: 'your script description',
    init() {
        const $html = $('html');
        const $body = $('body');
        const $overlay = $('.overlay');

        $('[data-popup]').on('click', function (e) {
            e.preventDefault();
            const $popupBtn = $(this);

            $body.addClass('_lock');
            $html.addClass('disable-fix');
            $overlay.fadeIn('slow');
            $popupBtn.attr('aria-expanded', true);
            $(`#${$popupBtn.attr('data-popup')}`).addClass('active');
        });

        $(document).on('click', '.aside-popup__close-btn', function () {
            const $asidePopupCloseBtn = $(this);
            const $asidePopup = $asidePopupCloseBtn.closest('.aside-popup');

            $asidePopup.removeClass('active');
            $(`[data-popup="${$asidePopup.attr('id')}"]`).attr('aria-expanded', false);
            $overlay.fadeOut();
            $body.removeClass('_lock');
            $html.removeClass('disable-fix');
        });

        $(document).on('mouseup', function (e) {
            const $asidePopup = $('.aside-popup.active');

            if (!$asidePopup.is(e.target) && $asidePopup.has(e.target).length === 0) {
                $asidePopup.removeClass('active');
                $(`[data-popup="${$asidePopup.attr('id')}"]`).attr('aria-expanded', false);
                $overlay.fadeOut();
                $body.removeClass('_lock');
                $html.removeClass('disable-fix');
            }
        });

        $(document).on('click', '.info-workout-popup__btn', function () {
            const $infoWorkoutPopupBtn = $(this);
            const $infoWorkoutPopupForm = $infoWorkoutPopupBtn.closest('.aside-popup').find('.info-workout-popup__form');

            $infoWorkoutPopupBtn.hide();
            $infoWorkoutPopupForm.fadeIn();
        });

        $('.aside-popup form').on('submit', function (e, data) {
            const $asidePopupForm = $(this);
            const $asidePopup = $asidePopupForm.closest('.aside-popup');

            e.preventDefault();

            $.ajax({
                type: "POST",
                url: "",
                data: data,
            });

            $asidePopup.removeClass('active');
            $('.success-popup').addClass('active');
            $asidePopupForm.find('.input').each(function (index, input) {
                $(input).val('');
            });
            return false;
        });

        $('form:not(.info-workout-popup__form):not(.subscribe-form)').on('submit', function (e, data) {
            e.preventDefault();

            const $form = $(this);

            $.ajax({
                type: "POST",
                url: "",
                data: data,
            });

            $body.addClass('_lock');
            $html.addClass('disable-fix');
            $overlay.fadeIn();
            $('.success-popup').addClass('active');
            $form.find('.input').each(function (index, input) {
                $(input).val('');
            });
            return false;
        });

        $(document).on('click', '.success-popup__btn', function () {
            const $successPopupBtn = $(this);
            const $asidePopup = $successPopupBtn.closest('.aside-popup');
            const $asidePopupCloseBtn = $asidePopup.find('.aside-popup__close-btn');

            $asidePopupCloseBtn.trigger('click');
            $('.info-workout-popup__form').hide();
            $('.info-workout-popup__btn').show();
        });

        $(document).on('click', '.success-popup .aside-popup__close-btn', function () {
            $('.info-workout-popup__form').hide();
            $('.info-workout-popup__btn').show();
        });
    },
};
