const button = document.querySelector('button')
const aboutCard = document.querySelector('.aboutCard')
const aboutCardExtended = document.querySelector('.aboutCardExtended')
const goBack = document.querySelector('#goBack')
const projectIMG = document.querySelector('#projectIMG')
const project1 = document.querySelector('#project1')
const project1Button = document.querySelector('#project1Button')
const project2Button = document.querySelector('#project2Button')
const project2 = document.querySelector('#project2')
const navbarButton = document.querySelector('#navBar')
const navBar = document.querySelector('nav')


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

project1Button.onclick = () => {
    project1.style.display = 'block'
    project2.style.display = 'none'
}

project2Button.onclick = () => {
    project1.style.display = 'none'
    project2.style.display = 'block'
}

navbarButton.onclick = () => {
    if (navBar.style.display == 'none') {
        navBar.style.display = 'block'
        navbarButton.style.right= '350px'
    } else {
        navBar.style.display= 'none'
        navbarButton.style.right= '20px'
    }

}