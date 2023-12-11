"use strict";
const settingsOn = document.querySelector('[data-js="icon__settings--off"]');
const settingsOff = document.querySelector('[data-js="icon__settings--on"]');
const settingsButton = document.querySelector('[data-js="footer__button--settings"]');
const homeOn = document.querySelector('[data-js="icon__home--off"]');
const homeOff = document.querySelector('[data-js="icon__home--on"]');
const homeButton = document.querySelector('[data-js="footer__button--home"]');
const bulbOn = document.querySelector('[data-js="icon__bulb--off"]');
const bulbOff = document.querySelector('[data-js="icon__bulb--on"]');
const bulbButton = document.querySelector('[data-js="footer__button--bulb"]');
// Überprüfen, ob alle Elemente vorhanden sind
if (settingsOff && settingsOn && settingsButton) {
    // Umschalten der Sichtbarkeit der SVGs beim Klicken auf den Button
    settingsButton.addEventListener("click", () => {
        settingsOff.classList.toggle('visually-hidden');
        settingsOn.classList.toggle('visually-hidden');
    });
}
else {
    console.error("Eines oder mehrere erforderliche Elemente fehlen im DOM.");
}
if (homeOff && homeOn && homeButton) {
    // Umschalten der Sichtbarkeit der SVGs beim Klicken auf den Button
    homeButton.addEventListener("click", () => {
        homeOff.classList.toggle('visually-hidden');
        homeOn.classList.toggle('visually-hidden');
    });
}
else {
    console.error("Eines oder mehrere erforderliche Elemente fehlen im DOM.");
}
if (bulbOff && bulbOn && bulbButton) {
    // Umschalten der Sichtbarkeit der SVGs beim Klicken auf den Button
    bulbButton.addEventListener("click", () => {
        bulbOff.classList.toggle('visually-hidden');
        bulbOn.classList.toggle('visually-hidden');
    });
}
else {
    console.error("Eines oder mehrere erforderliche Elemente fehlen im DOM.");
}
