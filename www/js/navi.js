"use strict";
let settings = false;
const settingsOn = document.querySelector('[data-js="icon__settings--off"]');
const settingsOff = document.querySelector('[data-js="icon__settings--on"]');
const settingsButton = document.querySelector('[data-js="footer__button--settings"]');
const settingsCardTemp = document.querySelector('[data-js="card__settings--temp"]');
let home = true;
const homeOn = document.querySelector('[data-js="icon__home--off"]');
const homeOff = document.querySelector('[data-js="icon__home--on"]');
const homeButton = document.querySelector('[data-js="footer__button--home"]');
const homeCard = document.querySelector('[data-js="card__home"]');
let light = false;
const lightOn = document.querySelector('[data-js="icon__light--off"]');
const lightOff = document.querySelector('[data-js="icon__light--on"]');
const lightButton = document.querySelector('[data-js="footer__button--light"]');
const lightCard = document.querySelector('[data-js="card__light"]');
const updateVisibility = () => {
    setTimeout(() => {
        console.log('updateVisibility');
        if (settingsCardTemp) {
            if (settings) {
                settingsCardTemp.classList.remove('visually-hidden');
            }
            if (!settings) {
                settingsCardTemp.classList.add('visually-hidden');
            }
        }
        if (homeCard) {
            if (home) {
                homeCard.classList.remove('visually-hidden');
            }
            if (!home) {
                homeCard.classList.add('visually-hidden');
            }
        }
        if (lightCard) {
            if (light) {
                lightCard.classList.remove('visually-hidden');
            }
            if (!light) {
                lightCard.classList.add('visually-hidden');
            }
        }
    }, 500);
};
if (settingsOff && settingsOn && settingsButton && homeOff && homeOn && homeButton && lightOff && lightOn && lightButton && settingsCardTemp && homeCard && lightCard) {
    settingsButton.addEventListener("click", () => {
        updateVisibility();
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
        updateVisibility();
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
        updateVisibility();
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
