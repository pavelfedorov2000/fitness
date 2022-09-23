app.asidePopup = {
    name: 'asidePopup',
    description: 'your script description',
    init() {
        /* $(document).on('click', '.timetable-card__btn, .workout-card__btn', function () {
            $('body').addClass('_lock');
            $('html').addClass('disable-fix');
            $('.overlay').fadeIn('slow');
            $('.info-workout-popup').addClass('active');
        });

        $(document).on('click', '.success-story-start__btn', function () {
            $('body').addClass('_lock');
            $('html').addClass('disable-fix');
            $('.overlay').fadeIn('slow');
            $('.request-popup').addClass('active');
        }); */

        $('[data-popup]').on('click', function (e) {
            e.preventDefault();
            const $popupBtn = $(this);

            $('body').addClass('_lock');
            $('html').addClass('disable-fix');
            $('.overlay').fadeIn('slow');
            $(`#${$popupBtn.attr('data-popup')}`).addClass('active');
        });

        $(document).on('click', '.aside-popup__close-btn', function () {
            const $asidePopupCloseBtn = $(this);
            const $asidePopup = $asidePopupCloseBtn.closest('.aside-popup');

            $asidePopup.removeClass('active');
            $('.overlay').fadeOut();
            $('body').removeClass('_lock');
            $('html').removeClass('disable-fix');
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
                data: data, // data - объект
            });

            $asidePopup.removeClass('active');
            $('.success-popup').addClass('active');
            $asidePopupForm.find('input').each(function (index, input) {
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
