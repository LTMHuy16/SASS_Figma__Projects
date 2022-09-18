class Header {
    constructor() {
        this.body = document.querySelector("body");
        this.header = document.querySelector(".js-header");
        this.menu = document.querySelector(".js-header-menu");
        this.openButton = document.querySelector(".js-open-menu");
        this.closeButton = document.querySelector(".js-close-menu");
        this.overlay = document.querySelector(".js-overlay");
        this.menuLinks = document.querySelectorAll(".js-menu-parent");

        this.bindEvents();
    }

    bindEvents() {
        this.openMenu();
        this.closeMenuBtn();
        this.closeMenuOverlay();
        this.toggleSubMenu();
        this.toggleFixedHeader();
    }

    openMenu() {
        this.openButton.addEventListener("click", () => {
            this.menu.classList.add("is-open");
            this.overlay.classList.add("is-open");
        });
    }

    closeMenuBtn() {
        this.closeButton.addEventListener("click", () => {
            this.menu.classList.remove("is-open");
            this.overlay.classList.remove("is-open");
        });
    }

    closeMenuOverlay() {
        this.overlay.addEventListener("click", () => {
            this.menu.classList.remove("is-open");
            this.overlay.classList.remove("is-open");
        });
    }

    toggleSubMenu() {
        this.menuLinks.forEach((el) => {
            el.addEventListener("click", () => {
                console.log(el.nextElementSibling);
                el.nextElementSibling.classList.toggle("is-open");
            });
        });
    }

    toggleFixedHeader() {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                this.header.classList.add("fixed");
            } else {
                this.header.classList.remove("fixed");
            }
        });
    }
}

new Header();
