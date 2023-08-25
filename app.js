// Import the necessary elements
import {
    Carousel,
    initTE,
  } from "tw-elements";
// Initialize the Carousel component
initTE({ Carousel });

const slideWidth = 398; // Width of each slide item
let itemsPerSlide = 4; // Number of items per slide (default)

function updateItemsPerSlide() {
  // Check the viewport width and adjust itemsPerSlide as needed
  if (window.innerWidth <= 1400) {
    console.log("Script is running");
    itemsPerSlide = 1; // Show only one item in mobile view (adjust the breakpoint as needed)
  } else {
    console.log("Script is not running");
    itemsPerSlide = 4; // Show four items in larger screens
  }
}

// Call the updateItemsPerSlide function initially and whenever the window is resized
updateItemsPerSlide();
window.addEventListener('resize', updateItemsPerSlide);

let defaultTransform = 0;

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







  
