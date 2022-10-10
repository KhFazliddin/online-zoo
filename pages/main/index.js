"use strict";

const animalCards = document.querySelector(".animals_cards");
const leftArrowButton = document.querySelector(".left_arrow");
const rightArrowButton = document.querySelector(".right_arrow");

rightArrowButton.addEventListener("click", () => animalCards.scroll(320, 0));
leftArrowButton.addEventListener("click", () => animalCards.scroll(-320, 0));
let burgerMenu = document.querySelector(".burger-menu-icon");
let deleteBtn = document.querySelector(".menu .delete_button");

let overlay = document.querySelector(".menu");
console.log(overlay);
burgerMenu.addEventListener("click", () =>overlay.classList.toggle("menu_scroll"));
deleteBtn.addEventListener("click",()=>overlay.classList.toggle("menu_scroll"))
