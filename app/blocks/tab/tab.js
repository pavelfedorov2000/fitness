app.tab = {
    name: 'tab',
    description: 'tab',
    init() {
        $('.tab').on('click', function (e) {
            e.preventDefault();

            const $tab = $(this);
            const $tabNotActive = $tab.siblings();
            const $tabsContent = $tab.closest('section').find('.tabs-content');

            $($tabNotActive).removeClass('active');
            $tabsContent.removeClass('active');
            $tab.addClass('active');
            $($tab.attr('href')).addClass('active');
        });
    },
};
