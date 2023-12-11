"use strict";
const settingsOn = document.querySelector('[data-js="icon__settings--off"]');
const settingsOff = document.querySelector('[data-js="icon__settings--on"]');
const settingsButton = document.querySelector('[data-js="footer__button--settings"]');
let settings = false;
const homeOn = document.querySelector('[data-js="icon__home--off"]');
const homeOff = document.querySelector('[data-js="icon__home--on"]');
const homeButton = document.querySelector('[data-js="footer__button--home"]');
let home = true;
const lightOn = document.querySelector('[data-js="icon__light--off"]');
const lightOff = document.querySelector('[data-js="icon__light--on"]');
const lightButton = document.querySelector('[data-js="footer__button--light"]');
let light = false;
if (settingsOff && settingsOn && settingsButton && homeOff && homeOn && homeButton && lightOff && lightOn && lightButton) {
    settingsButton.addEventListener("click", () => {
        if (!settings) {
            settings = !settings;
            settingsOff.classList.toggle('visually-hidden');
            settingsOn.classList.toggle('visually-hidden');
        }
        if (home) {
            home = !home;
            homeOff.classList.toggle('visually-hidden');
            homeOn.classList.toggle('visually-hidden');
        }
        if (light) {
            light = !light;
            lightOff.classList.toggle('visually-hidden');
            lightOn.classList.toggle('visually-hidden');
        }
    });
    homeButton.addEventListener("click", () => {
        if (settings) {
            settings = !settings;
            settingsOff.classList.toggle('visually-hidden');
            settingsOn.classList.toggle('visually-hidden');
        }
        if (!home) {
            home = !home;
            homeOff.classList.toggle('visually-hidden');
            homeOn.classList.toggle('visually-hidden');
        }
        if (light) {
            light = !light;
            lightOff.classList.toggle('visually-hidden');
            lightOn.classList.toggle('visually-hidden');
        }
    });
    lightButton.addEventListener("click", () => {
        if (settings) {
            settings = !settings;
            settingsOff.classList.toggle('visually-hidden');
            settingsOn.classList.toggle('visually-hidden');
        }
        if (home) {
            home = !home;
            homeOff.classList.toggle('visually-hidden');
            homeOn.classList.toggle('visually-hidden');
        }
        if (!light) {
            light = !light;
            lightOff.classList.toggle('visually-hidden');
            lightOn.classList.toggle('visually-hidden');
        }
    });
}
else {
    console.error("Eines oder mehrere erforderliche Elemente fehlen im DOM.");
}
