var dropdownIcon = $('.dropdown-icon');

$(document).ready(function () {
    dropdownIcon.click(function () {
        $(this).toggleClass('open'); // this toggle apply on .dropdownIcon.open
        $(this).next().toggleClass('open'); // this toggle apply to .submenu.open
    });
})