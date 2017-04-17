var Submenu = $('.submenu');
var dropdownIcon = $('.dropdown-icon');


$(document).ready(function () {
    dropdownIcon.click(function () {
        Submenu.toggleClass('open');
        if(Submenu.hasClass('open')){
            dropdownIcon.css('background', "url('../img/mobile/mobile-collapse.png') no-repeat");
        } else {
            dropdownIcon.css('background', "url('../img/mobile/mobile-expand.png') no-repeat");
        }
    });
})