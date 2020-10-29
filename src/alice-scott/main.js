// About Me

function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "flex";
    evt.currentTarget.className += " active";
  }

  document.getElementById("defaultOpen").click();



// Projects
const openOverlay = (imageName) => {
    const allCards = document.querySelectorAll(".image-overlay")
    const cardArray = Array.from(allCards)

    for (let index = 0; index < cardArray.length; index++) {
        const element = cardArray[index];
        element.style.visibility = "hidden";
    }
    document.getElementById(imageName).style.visibility = "visible";
}

const closeOverlay = () => {
    const allCards = document.querySelectorAll(".image-overlay")
    const cardArray = Array.from(allCards)

    for (let index = 0; index < cardArray.length; index++) {
        const element = cardArray[index];
        element.style.visibility = "hidden";
    }
}

// Scroll to top button
const toTopButton = document.querySelector(".to-top-button");

toTopButton.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
});