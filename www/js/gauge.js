"use strict";
const currentValue = document.querySelector('[data-js="settings-card__gauge--current-value"]');
const buttonMinus = document.querySelector('[data-js="settings-card__button-round--minus"]');
const buttonPlus = document.querySelector('[data-js="settings-card__button-round--plus"]');
const gaugeScale = document.querySelector('[data-js="settings-card__gauge--scale"]');
document.addEventListener("DOMContentLoaded", () => {
    if (currentValue) {
        const startValue = 725 - (parseInt(currentValue.value, 10) / 35) * (725 - 170);
        updateGauge(startValue - 5);
    }
});
function updateGauge(newValue) {
    let newOffset = 725 - (newValue / 35) * (725 - 170);
    gaugeScale === null || gaugeScale === void 0 ? void 0 : gaugeScale.setAttribute("stroke-dashoffset", newOffset.toString());
}
if (currentValue) {
    buttonMinus === null || buttonMinus === void 0 ? void 0 : buttonMinus.addEventListener("click", () => {
        let newValue = parseInt(currentValue.value, 10);
        if (newValue > 0) {
            currentValue.value = (newValue - 1).toString();
            updateGauge(newValue - 1);
        }
    });
    buttonPlus === null || buttonPlus === void 0 ? void 0 : buttonPlus.addEventListener("click", () => {
        let newValue = parseInt(currentValue.value, 10);
        if (newValue < 35) {
            currentValue.value = (newValue + 1).toString();
            updateGauge(newValue + 1);
        }
    });
}
;
