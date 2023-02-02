app.accordion = {
    name: 'accordion',
    description: 'accordion script',
    init() {
        $('.accordion-title').on('click', function () {
            const $accordionTitle = $(this);
            const $accordionContent = $accordionTitle.next();
            const $accordionItemNotActive = $accordionTitle.parent().siblings();
            const $accordionItemNotActiveSummary = $accordionItemNotActive.find('.accordion-title');
            const $accordionItemNotActiveContent = $accordionItemNotActive.find('.accordion-content');

            if ($accordionTitle.hasClass('footer__title') && $(window).width() > 1024) return;

            $accordionItemNotActiveSummary.removeClass('active');
            $accordionItemNotActiveContent.slideUp('300');
            $accordionTitle.toggleClass('active');
            $accordionContent.slideToggle('300');
        });
    },
};