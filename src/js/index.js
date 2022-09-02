/* TOGGLE MOBILE MENU */

const toggleMobileMenu = () => {
    const overlay = $('#overlay');
    const menu = $("#header-menu-js");
    const menuCloses = $("#close-menu-js, #overlay");
    const btnBar = $("#button-bar-js");

    btnBar.click(() => {
        menu.addClass("show");
        overlay.addClass('show')
    });

    menuCloses.click(function () {
        if (menu.hasClass('show')) {
            menu.removeClass("show");
            overlay.removeClass('show')
        }

        return;
    });
};

/* RUN ALL FUNCTIONS */

$(document).ready(function () {
    toggleMobileMenu();
});
