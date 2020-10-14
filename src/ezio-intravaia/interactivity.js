let button = document.querySelector('button')
let aboutCard = document.querySelector('.aboutCard')
let aboutCardExtended = document.querySelector('.aboutCardExtended')
let goBack = document.querySelector('#goBack')

button.onclick = () => {
    aboutCard.style.display='none'
    aboutCardExtended.style.display='inline-block'
    animation()
}

let animation = () => {
    myVar = setTimeout(animation1, 0020);
}

animation1 = () => {
    aboutCardExtended.style.width='1200px'
}


goBack.onclick = () => {
    aboutCardExtended.style.width='350px'
    animation2()
}

let animation2 = () => {
    myVar = setTimeout(animation3, 1500);
}

animation3 = () => {
    aboutCard.style.display='inline-block'
    aboutCardExtended.style.display='none'
}
