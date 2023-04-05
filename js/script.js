"use strict";
console.log(123);

//////////////////////////////
/// HEADER BTN FOR PRICING
//////////////////////////////
const btnToggle = document.querySelector(".toggle");
const btnToggleDot = document.querySelector(".dot");
const pricingMonthlyText = document.querySelector(".monthly");
const pricingAnnuallyText = document.querySelector(".annually");

btnToggle.addEventListener("click", () => {
	btnToggleDot.classList.toggle("dot--move");
	pricingAnnuallyText.classList.toggle("annually--active");
	pricingMonthlyText.classList.toggle("monthly--active");
});
