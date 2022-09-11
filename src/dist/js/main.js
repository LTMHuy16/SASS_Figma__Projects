"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var SliderCarousel = /*#__PURE__*/function () {
  function SliderCarousel() {
    _classCallCheck(this, SliderCarousel);
  }

  _createClass(SliderCarousel, [{
    key: "activeCarousel",
    value: function activeCarousel() {
      $(".js-active-carousel").owlCarousel({
        rtl: true,
        loop: true,
        margin: 14,
        nav: false,
        lazyLoadEager: 3,
        stageOuterClass: "owl-stage-outer slider__outer visible",
        responsive: {
          0: {
            items: 1,
            stagePadding: 30
          },
          560: {
            items: 2,
            stagePadding: 30
          },
          960: {
            items: 3,
            stagePadding: 30
          },
          1200: {
            items: 3
          }
        }
      });
    }
  }]);

  return SliderCarousel;
}();

var slider = new SliderCarousel();
slider.activeCarousel();
"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Menu = /*#__PURE__*/function () {
  function Menu() {
    _classCallCheck(this, Menu);

    this.body = document.querySelector("body");
    this.header = document.querySelector(".js-header");
    this.menu = document.querySelector(".js-header-menu");
    this.openButton = document.querySelector(".js-open-menu");
    this.closeButton = document.querySelector(".js-close-menu");
    this.overlay = document.querySelector(".js-overlay");
    this.menuLinks = document.querySelectorAll(".js-menu-link");
    this.bindEvents();
  }

  _createClass(Menu, [{
    key: "bindEvents",
    value: function bindEvents() {
      this.openMenu();
      this.closeMenuBtn();
      this.closeMenuOverlay();
      this.toggleSubMenu();
      this.toggleFixedHeader();
    }
  }, {
    key: "openMenu",
    value: function openMenu() {
      var _this = this;

      this.openButton.addEventListener("click", function () {
        _this.menu.classList.add("is-open");

        _this.overlay.classList.add("is-open");
      });
    }
  }, {
    key: "closeMenuBtn",
    value: function closeMenuBtn() {
      var _this2 = this;

      this.closeButton.addEventListener("click", function () {
        _this2.menu.classList.remove("is-open");

        _this2.overlay.classList.remove("is-open");
      });
    }
  }, {
    key: "closeMenuOverlay",
    value: function closeMenuOverlay() {
      var _this3 = this;

      this.overlay.addEventListener("click", function () {
        _this3.menu.classList.remove("is-open");

        _this3.overlay.classList.remove("is-open");
      });
    }
  }, {
    key: "toggleSubMenu",
    value: function toggleSubMenu() {
      this.menuLinks.forEach(function (el) {
        el.addEventListener("click", function () {
          console.log(el.nextElementSibling);
          el.nextElementSibling.classList.toggle("is-open");
        });
      });
    }
  }, {
    key: "toggleFixedHeader",
    value: function toggleFixedHeader() {
      var _this4 = this;

      window.addEventListener("scroll", function () {
        if (window.scrollY > 500) {
          _this4.header.classList.add("fixed");
        } else {
          _this4.header.classList.remove("fixed");
        }
      });
    }
  }]);

  return Menu;
}();

new Menu();