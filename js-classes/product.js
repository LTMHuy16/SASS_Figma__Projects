// import {ProductOptions} from ‘./productOptions.js’
class Product {

    constructor() {
        this.element = document.querySelector(".js-product-form");
        this.optionsToggle = this.element.querySelectorAll(".js-select-toggle");
        this.bindEvents();
    }

    bindEvents() {
        new ProductOptions(this.element);
        this.optionSlideToggle();
    }

    optionSlideToggle() {
        this.optionsToggle.forEach((el) => {
            el.addEventListener("click", () => {
                const thisOption = el.closest(".js-variant-row");
                if (thisOption.classList.contains("is-open")) {
                    thisOption.classList.remove("is-open");
                } else {
                    thisOption.classList.add("is-open");
                }
            });
        });
    }
}
new Product();
