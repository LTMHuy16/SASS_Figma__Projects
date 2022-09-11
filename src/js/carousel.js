class SliderCarousel {
    constructor() {
    }

    activeCarousel() {
        $(".js-active-carousel").owlCarousel({
            rtl:true,
            loop: true,
            margin: 14,
            nav: false,
            lazyLoadEager: 3,
            stageOuterClass: "owl-stage-outer slider__outer visible",
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 30,
                },
                560: {
                    items: 2,
                    stagePadding: 30,
                },
                960: {
                    items: 3,
                    stagePadding: 30,
                },
                1200: {
                    items: 3
                }
            },
        });
    }
}

const slider = new SliderCarousel();

slider.activeCarousel();
