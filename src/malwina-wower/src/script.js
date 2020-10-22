const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("myLinks");

hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");
});