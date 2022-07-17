app.blog = {
    name: 'blog',
    description: 'your script description',
    init() {
        $(".blog-section__slider-item").slice(0, 2).show();
        $(".blog-section__success-item").slice(0, 1).show();
        $(".blog-section__more").on("click", function () {
            $(".blog-section__slider-item:hidden").slice(0, 2).slideDown();
            $(".blog-section__success-item:hidden").slice(0, 1).slideDown();
            if ($(".blog-section__slider-item:hidden").length == 0) {
                $(".blog-section__more").prop('disabled', true);
            }
        });
    },
};
