const nextBtn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: #CD4631;transform: ;msFilter:;"><path d="M10.707 17.707 16.414 12l-5.707-5.707-1.414 1.414L13.586 12l-4.293 4.293z"></path></svg>';

const prevBtn =
    '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="M13.293 6.293 7.586 12l5.707 5.707 1.414-1.414L10.414 12l4.293-4.293z"></path></svg>';

class SliderCarousel {
    constructor() {}

    topicsCarousel() {
        $("#topicsCarousel").owlCarousel({
            rtl: true,
            loop: true,
            margin: 14,
            nav: false,
            lazyLoadEager: 3,
            stageOuterClass: "owl-stage-outer slider__outer visible",
            responsive: {
                0: {
                    items: 1,
                    stagePadding: 10,
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
                    items: 3,
                },
            },
        });
    }

    testimonialCarousel() {
        $("#testimonialCarousel").owlCarousel({
            loop: true,
            margin: 20,
            nav: true,
            navClass: ["owl-btn owl-btn-prev", "owl-btn owl-btn-next"],
            navText: [prevBtn, nextBtn],
            stageOuterClass: "owl-stage-outer testimonial__outer slider__outer visible",
            responsive: {
                0: {
                    items: 1.1,
                },
                768: {
                    items: 2.2,
                },
                960: {
                    items: 2,
                    mouseDrag: false,
                    touchDrag: false,
                },
            },
        });
    }
}

const slider = new SliderCarousel();

slider.topicsCarousel();
slider.testimonialCarousel();
