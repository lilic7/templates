var home = $('.nav a[href="/"]');
var navLinks = $('nav a[href^="/' + location.pathname.split("/")[1] + '"]');


$(function() {
    if((location.pathname.split("/")[1]) === "")
        home.addClass('selected');
    else
        navLinks.addClass('selected');
});