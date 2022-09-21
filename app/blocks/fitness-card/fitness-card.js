app.fitnessCard = {
    name: 'fitnessCard',
    description: 'your script description',
    init() {
        $('.fitness-card__list-col--1 .fitness-card__list-item').slice(0, 6).show();
        $('.fitness-card__list-col--2 .fitness-card__list-item').slice(0, 6).show();

        $('.fitness-card__btn').on('click', function () {
            const $fitnessCardBtn = $(this);

            $(".fitness-card__list-col--1 .fitness-card__list-item:hidden").slice(0, 2).slideDown();
            $(".fitness-card__list-col--2 .fitness-card__list-item:hidden").slice(0, 2).slideDown();

            if ($(".fitness-card__list-col .fitness-card__list-item:hidden").length === 0) {
                $fitnessCardBtn.prop('disabled', true);
            }
        });
    },
};
