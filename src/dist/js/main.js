"use strict";

/* TOGGLE MOBILE MENU */
var navbarEvents = function navbarEvents() {
  $('.js-open-menu, .js-close-menu').click(function () {
    $('.js-header-menu').toggleClass('is-open');
  });
};
/* RUN ALL FUNCTIONS */


$(document).ready(function () {
  navbarEvents();
});