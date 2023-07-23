app.select = {
    name: 'select',
    description: 'select',
    init() {
        $('.select__toggle').on('click', function () {
            const $selectToggle = $(this);
            const $selectDropdown = $selectToggle.closest('.select').find('.select__dropdown');
            const $selectItemNotActive = $selectToggle.closest('.select').siblings();
            const $selectToggleNotActive = $selectItemNotActive.find('.select__toggle');
            const $selectDropdownNotActive = $selectItemNotActive.find('.select__dropdown');

            $selectToggleNotActive.attr('aria-expanded', false);
            $selectDropdownNotActive.slideUp();

            if ($selectToggle.attr('aria-expanded') === 'false') {
                $selectToggle.attr('aria-expanded', true);
                $selectDropdown.slideDown();
            } else {
                $selectToggle.attr('aria-expanded', false);
                $selectDropdown.slideUp();
            }
        });

        $('.select__label').on('click', function () {
            const $selectOption = $(this);
            const $selectDropdown = $selectOption.closest('.select__dropdown');
            const $select = $selectOption.closest('.select');
            const $selectToggle = $select.find('.select__toggle');

            $selectToggle.text($selectOption.text());
            $selectToggle.attr('aria-expanded', false);
            $selectDropdown.slideUp();
        });

        document.addEventListener('mouseup', (e) => {
            if (!e.target.classList.contains('select__toggle') && !e.target.classList.contains('select__toggle-text')) {
                const $activeSelectToggle = $('.select__toggle[aria-expanded="true"]');

                $activeSelectToggle.attr('aria-expanded', false);
                $activeSelectToggle.closest('.select').find('.select__dropdown').slideUp();
            }
        });
    },
};
