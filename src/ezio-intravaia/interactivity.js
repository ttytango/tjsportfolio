const button = document.querySelector('button')
const aboutCard = document.querySelector('.aboutCard')
const aboutCardExtended = document.querySelector('.aboutCardExtended')
const goBack = document.querySelector('#goBack')
const projectIMG = document.querySelector('#projectIMG')
const project1 = document.querySelector('#project1')
const project1Button = document.querySelector('#project1b')
const project2 = document.querySelector('#project2')


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
    project1.style.display = 'none'
    project2.style.display = 'block'
}
