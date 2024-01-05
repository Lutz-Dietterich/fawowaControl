"use strict";
const currentValue = document.querySelector('[data-js="settings-card__setpoint--current-value"]');
const buttonMinus = document.querySelector('[data-js="settings-card__button-round--minus"]');
const buttonPlus = document.querySelector('[data-js="settings-card__button-round--plus"]');
const setpointScale = document.querySelector('[data-js="settings-card__setpoint--scale"]');
document.addEventListener("DOMContentLoaded", () => {
    if (currentValue) {
        currentValue.value = tempValue.toString();
        const startValue = (parseInt(currentValue.value, 10));
        updateSetpoint(startValue);
    }
});
const updateScaleValue = (scaleValue) => {
    let newOffset = 725 - (scaleValue / (tempSettings ? 35 : 60)) * (725 - 170);
    setpointScale === null || setpointScale === void 0 ? void 0 : setpointScale.setAttribute("stroke-dashoffset", newOffset.toString());
};
const updateSetpoint = (newValue) => {
    if (tempSettings) {
        tempValue = newValue;
    }
    if (humSettings) {
        humValue = newValue;
    }
    updateScaleValue(newValue);
};
if (currentValue) {
    buttonMinus === null || buttonMinus === void 0 ? void 0 : buttonMinus.addEventListener("click", () => {
        let newValue = parseInt(currentValue.value, 10);
        if (newValue > 0) {
            currentValue.value = (newValue - 1).toString();
            updateSetpoint(newValue - 1);
        }
    });
    buttonPlus === null || buttonPlus === void 0 ? void 0 : buttonPlus.addEventListener("click", () => {
        let newValue = parseInt(currentValue.value, 10);
        if (newValue < (tempSettings ? 35 : 60)) {
            currentValue.value = (newValue + 1).toString();
            updateSetpoint(newValue + 1);
        }
    });
}
;
