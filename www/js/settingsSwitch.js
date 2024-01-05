"use strict";
let tempSettings = true;
let tempValue = 21;
console.log(tempValue);
const tempSettingsOff = document.querySelector('[data-js="icon__temp--off"]');
const tempSettingsOn = document.querySelector('[data-js="icon__temp--on"]');
const tempSettingsButton = document.querySelector('[data-js="setting-card__button-clean--temp"]');
const tempSettingsCardHeadline = "Temperatur";
const tempUnit = "°C";
let humSettings = false;
let humValue = 50;
const humSettingsOff = document.querySelector('[data-js="icon__hum--off"]');
const humSettingsOn = document.querySelector('[data-js="icon__hum--on"]');
const humSettingsButton = document.querySelector('[data-js="setting-card__button-clean--hum"]');
const humSettingsCardHeadline = "Luftfeuchte";
const humUnit = "%";
let headline = document.querySelector('[data-js="settings-card__title"]');
let setpointUnit = document.querySelector('[data-js="settings-card__setpoint--unit"]');
console.log(setpointUnit);
console.log(headline);
document.addEventListener('DOMContentLoaded', () => {
    if (headline) {
        if (tempSettings) {
            headline.innerText = tempSettingsCardHeadline;
        }
        if (humSettings) {
            headline.innerText = humSettingsCardHeadline;
        }
    }
});
const updateSettingsVisibility = () => {
    if (headline && setpointUnit) {
        if (tempSettings) {
            headline.innerText = tempSettingsCardHeadline;
            setpointUnit.innerText = tempUnit;
            if (currentValue) {
                currentValue.value = tempValue.toString();
            }
        }
        if (humSettings) {
            headline.innerText = humSettingsCardHeadline;
            setpointUnit.innerText = humUnit;
            if (currentValue) {
                currentValue.value = humValue.toString();
            }
        }
    }
};
tempSettingsButton === null || tempSettingsButton === void 0 ? void 0 : tempSettingsButton.addEventListener('click', () => {
    if (!tempSettings) {
        tempSettings = !tempSettings;
        tempSettingsOff === null || tempSettingsOff === void 0 ? void 0 : tempSettingsOff.classList.toggle('visually-hidden');
        tempSettingsOn === null || tempSettingsOn === void 0 ? void 0 : tempSettingsOn.classList.toggle('visually-hidden');
    }
    if (humSettings) {
        humSettings = !humSettings;
        humSettingsOff === null || humSettingsOff === void 0 ? void 0 : humSettingsOff.classList.toggle('visually-hidden');
        humSettingsOn === null || humSettingsOn === void 0 ? void 0 : humSettingsOn.classList.toggle('visually-hidden');
    }
    updateSettingsVisibility();
    updateScaleValue(tempValue); // This function is declared in setpoint.ts
});
humSettingsButton === null || humSettingsButton === void 0 ? void 0 : humSettingsButton.addEventListener('click', () => {
    if (tempSettings) {
        tempSettings = !tempSettings;
        tempSettingsOff === null || tempSettingsOff === void 0 ? void 0 : tempSettingsOff.classList.toggle('visually-hidden');
        tempSettingsOn === null || tempSettingsOn === void 0 ? void 0 : tempSettingsOn.classList.toggle('visually-hidden');
    }
    if (!humSettings) {
        humSettings = !humSettings;
        humSettingsOff === null || humSettingsOff === void 0 ? void 0 : humSettingsOff.classList.toggle('visually-hidden');
        humSettingsOn === null || humSettingsOn === void 0 ? void 0 : humSettingsOn.classList.toggle('visually-hidden');
    }
    updateSettingsVisibility();
    updateScaleValue(humValue); // This function is declared in setpoint.ts
});
