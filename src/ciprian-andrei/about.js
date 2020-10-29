AOS.init();


// background
// skills
// hobbies

const background = document.querySelector('.background');
const backgroundDescription = document.querySelector('.background-description');
const experience = document.querySelector('.experience');
const experienceDescription = document.querySelector('.experience-description');
const hobbies = document.querySelector('.hobbies');
const hobbiesDescription = document.querySelector('.hobbies-description');
console.log('background: ', background);
background.addEventListener('click', ()=> {
    backgroundDescription.style.display = 'block';
    experienceDescription.style.display = 'none';
    hobbiesDescription.style.display = 'none';
});

experience.addEventListener('click', ()=> {
    experienceDescription.style.display = 'block';
    backgroundDescription.style.display = 'none';
    hobbiesDescription.style.display = 'none';
});

hobbies.addEventListener('click', ()=> {
    hobbiesDescription.style.display = 'block';
    experienceDescription.style.display = 'none';
    backgroundDescription.style.display = 'none';
});

