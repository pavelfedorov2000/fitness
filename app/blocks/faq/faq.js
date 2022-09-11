app.faq = {
    name: 'faq',
    description: 'your script description',
    init() {
        $('.faq-section__item-toggle').on('click', function () {
            const $faqSectionItemToggle = $(this);
            const $faqSectionItem = $faqSectionItemToggle.closest('.faq-section__item');
            const $faqSectionItemContent = $faqSectionItem.find('.faq-section__item-content');

            $faqSectionItemContent.slideToggle('300');

            if ($faqSectionItemToggle.attr('aria-expanded') === 'true') {
                $faqSectionItemToggle.attr('aria-expanded', false);
            } else {
                $faqSectionItemToggle.attr('aria-expanded', true);
            }
        });
    },
};
