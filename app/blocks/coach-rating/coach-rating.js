app.coachRating = {
    name: 'coachRating',
    description: 'your script description',
    init() {
        $('.coach-rating__head').on('click', function () {
            const $coachRatingHead = $(this);
            const $coachRatingBody = $coachRatingHead.closest('.coach-rating').find('.coach-rating__body');

            $coachRatingBody.slideToggle();
        });

        $(document).on('mouseup', function (e) {
            const $coachRatingHead = $('.coach-rating__head');
            const $coachRating = $coachRatingHead.closest('.coach-rating');

            if (!$coachRating.is(e.target) && $coachRating.has(e.target).length === 0) {
                $coachRating.find('.coach-rating__body').slideUp();
            }
        });
    },
};
