const themeButton = document.querySelector('.theme-button');
const themeButtonDark = document.querySelector('.theme-button__dark');
const mainBody = document.querySelector('main');
const contactBody = document.querySelector('.contact');


function switchBackground() {
    mainBody.classList.toggle("dark-background");
    contactBody.classList.toggle("transparency");
    contactBody.classList.toggle("light");
}

themeButton.addEventListener("click", function(event) {
    switchBackground();
    event.target.classList.toggle("show");
    // this.classList.toggle("hide");
})

let myTimer = setTimeout(myTitle, 2000);

function myTitle() {
    let greet = document.querySelector("#webdeveloper");
    greet.style.animationPlayState = "running";
}

let TextShadow = (function() {

    const eventSpace = document.querySelector('.subheading');
    const title = eventSpace.querySelector('#subheader');
    const step = 40;


    function shadowUpdate(e) {
        const { offsetWidth: width, offsetHeight: height } = eventSpace;
        let { offsetX: x, offsetY: y } = e;

        if (this !== e.target) {
            x += e.target.offsetLeft;
            y += e.target.offsetTop;
        }

        const xStep = Math.round((x / width * step) - (step / 2));
        const yStep = Math.round((y / height * step) - (step / 2));

        title.style.textShadow = `${-xStep}px ${-yStep}px 0 rgba(255, 215, 0, 0.6)`;
        title.style.transitionTimingFunction = "ease-out";

    }

    function handleMouseLeave(e) {

        title.style.textShadow = "-2px -2px 4px rgba(255, 255, 70, 0.678)";
    }
    return {
        eventSpace: eventSpace,
        shadowUpdate: shadowUpdate,
        handleMouseLeave: handleMouseLeave
    };
})();

TextShadow.eventSpace.addEventListener('mousemove', TextShadow.shadowUpdate);

TextShadow.eventSpace.addEventListener('mouseleave', TextShadow.handleMouseLeave);


function openHtmlModal() {
    $('#htmlmodal.tiny.modal').modal({
            inverted: false,
            centered: true
        })
        .modal('show');
}

function openCssModal() {
    $('#cssmodal.tiny.modal').modal({
            inverted: false,
            centered: true
        })
        .modal('show');
}

function openJsModal() {
    $('#jsmodal.tiny.modal').modal({
            inverted: false,
            centered: true
        })
        .modal('show');
}

function openPyModal() {
    $('#pymodal.tiny.modal').modal({
            inverted: false,
            centered: true
        })
        .modal('show');
}

function openSassModal() {
    $('#sassmodal.tiny.modal').modal({
            inverted: false,
            centered: true
        })
        .modal('show');
}

function openNpmModal() {
    $('#npmmodal.tiny.modal ').modal({
            inverted: false,
            centered: true
        })
        .modal('show');
}

function openGitModal() {
    $('#gitmodal.tiny.modal ').modal({
            inverted: false,
            centered: true
        })
        .modal('show');
}

function openBsModal() {
    $('#bsmodal.tiny.modal ').modal({
            inverted: false,
            centered: true
        })
        .modal('show');
}

function openReactModal() {
    $('#reactmodal.tiny.modal').modal({
            inverted: false,
            centered: true
        })
        .modal('show');
}

function openSvelteModal() {
    $('#sveltemodal.tiny.modal').modal({
            inverted: false,
            centered: true
        })
        .modal('show');
}

function openLinuxModal() {
    $('#linuxmodal.tiny.modal').modal({
            inverted: false,
            centered: true
        })
        .modal('show');
}

const boxesAnimation = anime({
    targets: ".subheading > h3",
    translateX: [20, -20],
    translateY: [10, 10],
    borderRadius: 50,
    // opacity: 10,
    duration: 24000,
    easing: "easeInOutElastic",
    elasticity: 2000,
    delay: (el, i, t) => i * 12,
    loop: true,
    direction: "alternate",

});
const animateletters = anime({
    targets: ".box",
    translateY: [-10, 20],
    borderRadius: 50,
    // opacity: 100,
    duration: 4000,
    easing: "easeInElastic",
    elasticity: 1000,
    direction: "alternate",
    loop: true
});
const animation = anime({
    targets: "header > nav > ul > a",
    // Properties
    translateX: [20, 40],
    borderRadius: 25,
    rotate: [0, -2],

    // Property Parameters
    duration: 3000,
    easing: "easeInOutQuint",
    // Animation Parameters
    direction: "forwards",
    loop: true
});