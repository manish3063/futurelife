// Import the necessary elements
import {
    Carousel,
    initTE,
  } from "tw-elements";
// Initialize the Carousel component
initTE({ Carousel });

//Product slider
let defaultTransform = 0;
const slideWidth = 398; // Width of each slide item
const itemsPerSlide = 4; // Number of items per slide

function goNext() {
    defaultTransform = defaultTransform - (slideWidth * itemsPerSlide);
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) >= slider.scrollWidth / 1.7) defaultTransform = 0;
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

next.addEventListener("click", goNext);

function goPrev() {
    var slider = document.getElementById("slider");
    if (Math.abs(defaultTransform) === 0) defaultTransform = 0;
    else defaultTransform = defaultTransform + (slideWidth * itemsPerSlide);
    slider.style.transform = "translateX(" + defaultTransform + "px)";
}

prev.addEventListener("click", goPrev);


  
