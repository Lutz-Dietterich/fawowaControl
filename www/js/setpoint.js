"use strict";
const currentValue = document.querySelector('[data-js="settings-card__setpoint--current-value"]');
const buttonMinus = document.querySelector('[data-js="settings-card__button-round--minus"]');
const buttonPlus = document.querySelector('[data-js="settings-card__button-round--plus"]');
const setpointScale = document.querySelector('[data-js="settings-card__setpoint--scale"]');
document.addEventListener("DOMContentLoaded", () => {
    if (currentValue) {
        currentValue.value = tempValue.toString();
        const startValue = (parseInt(currentValue.value, 10));
        updatesetpoint(startValue);
    }
});
function updatesetpoint(newValue) {
    tempValue = newValue;
    let newOffset = 725 - (newValue / 35) * (725 - 170);
    setpointScale === null || setpointScale === void 0 ? void 0 : setpointScale.setAttribute("stroke-dashoffset", newOffset.toString());
}
if (currentValue) {
    buttonMinus === null || buttonMinus === void 0 ? void 0 : buttonMinus.addEventListener("click", () => {
        let newValue = parseInt(currentValue.value, 10);
        if (newValue > 0) {
            currentValue.value = (newValue - 1).toString();
            updatesetpoint(newValue - 1);
        }
    });
    buttonPlus === null || buttonPlus === void 0 ? void 0 : buttonPlus.addEventListener("click", () => {
        let newValue = parseInt(currentValue.value, 10);
        if (newValue < 35) {
            currentValue.value = (newValue + 1).toString();
            updatesetpoint(newValue + 1);
        }
    });
}
;
