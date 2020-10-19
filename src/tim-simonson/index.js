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