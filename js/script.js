"use strict";

//////////////////////////////
/// BTN FOR PRICING
//////////////////////////////
const btnToggle = document.querySelector(".toggle");
const btnToggleDot = document.querySelector(".dot");
const pricingMonthlyText = document.querySelector(".monthly");
const pricingAnnuallyText = document.querySelector(".annually");
const prices = document.querySelectorAll(".card__price");

btnToggle.addEventListener("click", function () {
	btnToggleDot.classList.toggle("dot--move");
	pricingAnnuallyText.classList.toggle("annually--active");
	pricingMonthlyText.classList.toggle("monthly--active");
	changePrice();
});

function changePrice() {
	const pricesYear = [`$199.99`, `$249.99`, `$399.99`];
	const pricesMonth = [`$19.99`, `$24.99`, `$39.99`];

	if (pricingMonthlyText.classList.contains("monthly--active")) {
		for (let i = 0; i < prices.length; i++) {
			prices[i].innerHTML = [pricesMonth[i]];
		}
	}
	if (pricingAnnuallyText.classList.contains("annually--active")) {
		for (let i = 0; i < prices.length; i++) {
			prices[i].innerHTML = [pricesYear[i]];
		}
	}
}
