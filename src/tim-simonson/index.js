window.onscroll = function() { scrollFunction() };
var header = document.getElementById("header");

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        header.style.height = "240px";
    } else {
        header.style.height = "200px";
        header.style.paddingTop = "20px";
    }
}