const navLinks = document.querySelectorAll('nav a')
const button = document.querySelector('button')
const aboutCard = document.querySelector('.aboutCard')
const aboutCardExtended = document.querySelector('.aboutCardExtended')
const goBack = document.querySelector('#goBack')
const projectIMG = document.querySelector('#projectIMG')
const project1 = document.querySelector('#project1')
const project2 = document.querySelector('#project2')
const project3 = document.querySelector('#project3')
const project1Button = document.querySelector('#project1Button')
const project2Button = document.querySelector('#project2Button')
const project3Button = document.querySelector('#project3Button')
const navbarButton = document.querySelector('#navBar')
const navBar = document.querySelector('nav')
let playClass = document.querySelectorAll('.play')
let pauseClass = document.querySelectorAll('.pause')
const dot1 = document.querySelector('#dot1')
const dot2 = document.querySelector('#dot2')
const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')
// const skillsParagraph = document.querySelectorAll('.skillsCard p')
const heroImageH1 = document.querySelector('.hero-image h1')
const secondHalf = document.querySelector('.secondHalf')
const firstHalf = document.querySelector('.firstHalf')
const fullImage = document.querySelector('.fullImage')





let play = true
let i;


const openingSite = () => {
    myVar = setTimeout(openingSite1, 3000);
}

const openingSite1 = () => {
    heroImageH1.style.visibility ='visible'
    firstHalf.style.display = 'none'
    secondHalf.style.display = 'none'
    fullImage.style.display = 'block'
}


openingSite()



navbarButton.onclick = () => {
    if (navBar.style.display == 'none') {
        navBar.style.display = 'block'
        navbarButton.style.right= '320px'
    } else {
        navBar.style.display= 'none'
        navbarButton.style.right= '20px'
    }
}

for (i = 0; i < navLinks.length; i++) {   
    navLinks[i].onclick = () => {
        navBar.style.display= 'none'
        navbarButton.style.right= '20px'
    }

}


button.onclick = () => {
    aboutCard.style.display='none'
    aboutCardExtended.style.display='inline-block'
    animation()
}

const animation = () => {
    myVar = setTimeout(animation1, 0020);
}

animation1 = () => {
    aboutCardExtended.style.width='1200px'
}


goBack.onclick = () => {
    aboutCardExtended.style.width='350px'
    animation2()
}

const animation2 = () => {
    myVar = setTimeout(animation3, 1500);
}

const animation3 = () => {
    aboutCard.style.display='inline-block'
    aboutCardExtended.style.display='none'
}

dot1.onclick = () => {
    page1.style.display = 'flex'
    page2.style.display = 'none'
    dot1.style.backgroundColor = 'darkslategrey';
    dot2.style.backgroundColor = 'grey';
}


dot2.onclick = () => {
    page1.style.display = 'none'
    page2.style.display = 'flex'
    dot1.style.backgroundColor = 'grey';
    dot2.style.backgroundColor = 'darkslategrey';
}



for (i = 0; i < playClass.length; i++) {   
    playClass[i].onclick = () => {
        if (play == true) {
        play = false
        for (i = 0; i < playClass.length; i++) {   
        playClass[i].style.display= 'none'
        }
        for (i = 0; i < pauseClass.length; i++) {   
        pauseClass[i].style.display= 'inline-block'    
        }}}
    }
    
    for (i = 0; i < pauseClass.length; i++) {   
    pauseClass[i].onclick = () => {
        if (play == false) {
        play = true
        for (i = 0; i < playClass.length; i++) {   
        playClass[i].style.display= 'inline-block'
        }
        for (i = 0; i < pauseClass.length; i++) {   
        pauseClass[i].style.display= 'none'    
        }}}
    }

project1Button.onclick = () => {
    project1.style.display = 'block'
    project2.style.display = 'none'
    project3.style.display = 'none'
    clearTimeout(myVar);
    timer()

    if (project1Button.classList == 'bottomButton') {
        project1Button.classList = 'bottomButtonOn'
    } if (project2Button.classList == 'bottomButtonOn') {
        project2Button.classList = 'bottomButton'
    } if (project3Button.classList == 'bottomButtonOn') {
        project3Button.classList = 'bottomButton'
    }

}

project2Button.onclick = () => {
    project1.style.display = 'none'
    project2.style.display = 'block'
    project3.style.display = 'none'
    clearTimeout(myVar);
    timer1()

    if (project1Button.classList == 'bottomButtonOn') {
        project1Button.classList = 'bottomButton'
    } if (project2Button.classList == 'bottomButton') {
        project2Button.classList = 'bottomButtonOn'
    } if (project3Button.classList == 'bottomButtonOn') {
        project3Button.classList = 'bottomButton'
    }
}

project3Button.onclick = () => {
    project1.style.display = 'none'
    project2.style.display = 'none'
    project3.style.display = 'block'
    clearTimeout(myVar);
    timer()

    if (project1Button.classList == 'bottomButtonOn') {
        project1Button.classList = 'bottomButton'
    } if (project2Button.classList == 'bottomButtonOn') {
        project2Button.classList = 'bottomButton'
    } if (project3Button.classList == 'bottomButton') {
        project3Button.classList = 'bottomButtonOn'
    }
}

const timer = () => {
    myVar = setTimeout(project1Slide, 10000);
}

const project1Slide = () => {
    if (play == true) {
        project1.style.display = 'none'
        project2.style.display = 'block'
        project3.style.display = 'none'
        timer1()
        if (project1Button.classList == 'bottomButtonOn') {
            project1Button.classList = 'bottomButton'
        } if (project2Button.classList == 'bottomButton') {
            project2Button.classList = 'bottomButtonOn'
        } if (project3Button.classList == 'bottomButtonOn') {
            project3Button.classList = 'bottomButton'
        }
    } else {
        timer()
    }
}

const timer1 = () => {
    myVar = setTimeout(project2Slide, 10000);
}

const project2Slide = () => {
    if (play == true) {
        project1.style.display = 'none'
        project2.style.display = 'none'
        project3.style.display = 'block'
        timer()
        if (project1Button.classList == 'bottomButtonOn') {
            project1Button.classList = 'bottomButton'
        } if (project2Button.classList == 'bottomButtonOn') {
            project2Button.classList = 'bottomButton'
        } if (project3Button.classList == 'bottomButton') {
            project3Button.classList = 'bottomButtonOn'
        }
    } else {
        timer1()
    }
}


var scroll = window.requestAnimationFrame ||
function(callback){ window.setTimeout(callback, 1000/60)};
var elementsToShow = document.querySelectorAll('.showOn'); 

function loop() {

Array.prototype.forEach.call(elementsToShow, function(element){
if (isElementInViewport(element)) {
element.classList.add('is-visible');
} else {
element.classList.remove('is-visible');
}
});

scroll(loop);
}

loop();

// Helper function from: http://stackoverflow.com/a/7557433/274826
function isElementInViewport(el) {
// special bonus for those using jQuery
if (typeof jQuery === "function" && el instanceof jQuery) {
el = el[0];
}
var rect = el.getBoundingClientRect();
return (
(rect.top <= 0
&& rect.bottom >= 0)
||
(rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
rect.top <= (window.innerHeight || document.documentElement.clientHeight))
||
(rect.top >= 0 &&
rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
);
}

timer()