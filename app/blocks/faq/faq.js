app.faq = {
    name: 'faq',
    description: 'your script description',
    init() {
        $('.faq-item__toggle').on('click', function () {
            const $faqSectionItemToggle = $(this);
            const $faqSectionItem = $faqSectionItemToggle.closest('.faq-item');
            const $faqSectionItemContent = $faqSectionItem.find('.faq-item__content');

            $faqSectionItemContent.slideToggle('300');

            if ($faqSectionItemToggle.attr('aria-expanded') === 'false') {
                $faqSectionItemToggle.attr('aria-expanded', true);
            } else {
                $faqSectionItemToggle.attr('aria-expanded', false);
            }
        });
    },
};
