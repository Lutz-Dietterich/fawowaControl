"use strict";
let settings = false;
const settingsOff = document.querySelector('[data-js="icon__settings--off"]');
const settingsOn = document.querySelector('[data-js="icon__settings--on"]');
const settingsButton = document.querySelector('[data-js="footer__button--settings"]');
const settingsCard = document.querySelector('[data-js="card__settings"]');
let home = true;
const homeOff = document.querySelector('[data-js="icon__home--off"]');
const homeOn = document.querySelector('[data-js="icon__home--on"]');
const homeButton = document.querySelector('[data-js="footer__button--home"]');
const homeCard = document.querySelector('[data-js="card__home"]');
let light = false;
const lightOff = document.querySelector('[data-js="icon__light--off"]');
const lightOn = document.querySelector('[data-js="icon__light--on"]');
const lightButton = document.querySelector('[data-js="footer__button--light"]');
const lightCard = document.querySelector('[data-js="card__light"]');
/**
* Aktualisiert die Sichtbarkeit der Karten (Einstellungen, Home, Licht).
* Verwendet die Zustände der 'settings', 'home' und 'light' Variablen.
* Die 'visually-hidden' Klasse wird basierend auf diesen Zuständen hinzugefügt oder entfernt.
    * `settingsCardTemp?.classList.toggle('visually-hidden', !settings);`
    * Diese Zeile überprüft den Zustand von 'settings'. Wenn 'settings' 'true' ist, wird die Klasse 'visually-hidden' von der 'settingsCardTemp' entfernt.
    * Ist 'settings' 'false', wird die Klasse hinzugefügt.
* Der optionale Chaining-Operator `?.` wird verwendet, um sicherzustellen, dass kein Fehler auftritt, falls eines der Elemente im DOM nicht vorhanden ist.
*/
const updateCardVisibility = () => {
    settingsCard === null || settingsCard === void 0 ? void 0 : settingsCard.classList.toggle('visually-hidden', !settings);
    homeCard === null || homeCard === void 0 ? void 0 : homeCard.classList.toggle('visually-hidden', !home);
    lightCard === null || lightCard === void 0 ? void 0 : lightCard.classList.toggle('visually-hidden', !light);
};
settingsButton === null || settingsButton === void 0 ? void 0 : settingsButton.addEventListener("click", () => {
    if (!settings) {
        settings = !settings;
        settingsOff === null || settingsOff === void 0 ? void 0 : settingsOff.classList.toggle('visually-hidden');
        settingsOn === null || settingsOn === void 0 ? void 0 : settingsOn.classList.toggle('visually-hidden');
    }
    if (home) {
        home = !home;
        homeOff === null || homeOff === void 0 ? void 0 : homeOff.classList.toggle('visually-hidden');
        homeOn === null || homeOn === void 0 ? void 0 : homeOn.classList.toggle('visually-hidden');
    }
    if (light) {
        light = !light;
        lightOff === null || lightOff === void 0 ? void 0 : lightOff.classList.toggle('visually-hidden');
        lightOn === null || lightOn === void 0 ? void 0 : lightOn.classList.toggle('visually-hidden');
    }
    updateCardVisibility();
});
homeButton === null || homeButton === void 0 ? void 0 : homeButton.addEventListener("click", () => {
    if (settings) {
        settings = !settings;
        settingsOff === null || settingsOff === void 0 ? void 0 : settingsOff.classList.toggle('visually-hidden');
        settingsOn === null || settingsOn === void 0 ? void 0 : settingsOn.classList.toggle('visually-hidden');
    }
    if (!home) {
        home = !home;
        homeOff === null || homeOff === void 0 ? void 0 : homeOff.classList.toggle('visually-hidden');
        homeOn === null || homeOn === void 0 ? void 0 : homeOn.classList.toggle('visually-hidden');
    }
    if (light) {
        light = !light;
        lightOff === null || lightOff === void 0 ? void 0 : lightOff.classList.toggle('visually-hidden');
        lightOn === null || lightOn === void 0 ? void 0 : lightOn.classList.toggle('visually-hidden');
    }
    updateCardVisibility();
});
lightButton === null || lightButton === void 0 ? void 0 : lightButton.addEventListener("click", () => {
    if (settings) {
        settings = !settings;
        settingsOff === null || settingsOff === void 0 ? void 0 : settingsOff.classList.toggle('visually-hidden');
        settingsOn === null || settingsOn === void 0 ? void 0 : settingsOn.classList.toggle('visually-hidden');
    }
    if (home) {
        home = !home;
        homeOff === null || homeOff === void 0 ? void 0 : homeOff.classList.toggle('visually-hidden');
        homeOn === null || homeOn === void 0 ? void 0 : homeOn.classList.toggle('visually-hidden');
    }
    if (!light) {
        light = !light;
        lightOff === null || lightOff === void 0 ? void 0 : lightOff.classList.toggle('visually-hidden');
        lightOn === null || lightOn === void 0 ? void 0 : lightOn.classList.toggle('visually-hidden');
    }
    updateCardVisibility();
});
