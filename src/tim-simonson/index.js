// window.onscroll = function() { scrollFunction(); };
// var header = document.getElementById("header");

// function scrollFunction() {
//     if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//         header.style.height = "440px";
//     } else {
//         header.style.height = "220px";
//         // header.style.paddingTop = "20px";
//     }
// }

// window.addEventListener("load", function() {
//     var delay = 2;
//     var nodes = document.querySelectorAll(".animate");
//     for (var i = 0; i < nodes.length; i++) {
//         var words = nodes[i].innerText.split(" ");
//         nodes[i].innerHTML = "";
//         for (var i2 = 0; i2 < words.length; i2++) {
//             var item = document.createElement("span");
//             item.innerText = words[i2];
//             var calc = (delay + ((nodes.length + i2) / 3));
//             item.style.animationDelay = calc + "s";
//             nodes[i].appendChild(item);
//         }
//     }
// });
var myTimer = setTimeout(myTitle, 2000);

function myTitle() {
    var greet = document.querySelector("#webdeveloper");
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

// // Get the modal
// var modal = document.getElementById("modal-dialog");

// // Get the button that opens the modal
// var btn = document.getElementById("mySVG");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// var modal2 = document.getElementById("modal-dialog-css");
// var btn2 = document.getElementById("mySVGCSS");
// var span2 = document.getElementsById("close2")[0];

// btn2.onclick = function() {
//     modal2.style.display = "block";
// }
// span2.onclick = function() {
//     modal2.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal2) {
//         modal2.style.display = "none";
//     }
// }

function openHtmlModal() {
    $('#htmlmodal.tiny.modal').modal({
            inverted: true,
            centered: true
        })
        .modal('show');
}

function openCssModal() {
    $('#cssmodal.tiny.modal').modal({
            inverted: true,
            centered: true
        })
        .modal('show');
}

function openJsModal() {
    $('#jsmodal.tiny.modal').modal({
            inverted: true,
            centered: true
        })
        .modal('show');
}

function openPyModal() {
    $('#pymodal.tiny.modal').modal({
            inverted: true,
            centered: true
        })
        .modal('show');
}

function openSassModal() {
    $('#sassmodal.tiny.modal').modal({
            inverted: true,
            centered: true
        })
        .modal('show');
}

function openNpmModal() {
    $('#npmmodal.tiny.modal ').modal({
            inverted: true,
            centered: true
        })
        .modal('show');
}

function openGitModal() {
    $('#gitmodal.tiny.modal ').modal({
            inverted: true,
            centered: true
        })
        .modal('show');
}

function openBsModal() {
    $('#bsmodal.tiny.modal ').modal({
            inverted: true,
            centered: true
        })
        .modal('show');
}