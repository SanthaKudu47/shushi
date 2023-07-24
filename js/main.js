import { animateHeader } from "./animations.js";
import { chip } from "./chips.js";
import { enableMobileNav } from "./mobileNav.js";
console.log("456554");

//generate chips

const chipsData = [
  { src: "", title: "All" },
  { src: "./assets/sushi-9.png", title: "Sushi" },
  { src: "./assets/sushi-8.png", title: "Ramen" },
  { src: "./assets/sushi-7.png", title: "Udon" },
  { src: "./assets/sushi-6.png", title: "Danggo" },
  { src: "", title: "All" },
];

const root = document.getElementById("chips-root");
if (root) {
  chipsData.forEach((data) => {
    root.append(chip(data.src, data.title));
  });
}


enableMobileNav();
animateHeader();
