/* TOGGLE MOBILE MENU */

const navbarEvents = () => {
    $('.js-open-menu, .js-close-menu').click(() => {
        $('.js-header-menu').toggleClass('is-open');
    })
};

/* RUN ALL FUNCTIONS */

$(document).ready(function () {
    navbarEvents();
});
