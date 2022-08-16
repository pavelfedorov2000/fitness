app.articleAside = {
    name: 'articleAside',
    description: 'your script description',
    init() {
        function fixSidebar() {
            if ($('.article-page').length && $(window).width() > 1024) {
                new StickySidebar('.article-page__sidebar', {
                    topSpacing: 0,
                    bottomSpacing: 32,
                    containerSelector: '.article-page__inner',
                    innerWrapperSelector: '.article-page__sidebar-inner'
                });

                new StickySidebar('.article-page__social', {
                    topSpacing: 95,
                    bottomSpacing: 32,
                    containerSelector: '.article-page__container',
                    innerWrapperSelector: '.article-page__social .social'
                });
            }
        }

        fixSidebar();

        window.addEventListener('resize', () => {
            fixSidebar();
        });
    },
};
