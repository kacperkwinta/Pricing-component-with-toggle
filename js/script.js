"use strict";
console.log(123);

//////////////////////////////
/// HEADER BTN FOR PRICING
//////////////////////////////
const btnToggle = document.querySelector(".toggle");
const btnToggleDot = document.querySelector(".dot");

btnToggle.addEventListener("click", () => {
	btnToggleDot.classList.toggle("dot--move");
});
