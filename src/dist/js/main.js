"use strict";

/* TOGGLE MOBILE MENU */
var toggleMobileMenu = function toggleMobileMenu() {
  var overlay = $('#overlay');
  var menu = $("#header-menu-js");
  var menuCloses = $("#close-menu-js, #overlay");
  var btnBar = $("#button-bar-js");
  btnBar.click(function () {
    menu.addClass("show");
    overlay.addClass('show');
  });
  menuCloses.click(function () {
    if (menu.hasClass('show')) {
      menu.removeClass("show");
      overlay.removeClass('show');
    }

    return;
  });
};
/* RUN ALL FUNCTIONS */


$(document).ready(function () {
  toggleMobileMenu();
});