
const currentValue = document.querySelector('[data-js="settings-card__setpoint--current-value"]') as HTMLInputElement | null;
const buttonMinus = document.querySelector('[data-js="settings-card__button-round--minus"]') as HTMLButtonElement | null;
const buttonPlus = document.querySelector('[data-js="settings-card__button-round--plus"]') as HTMLButtonElement | null;
const setpointScale = document.querySelector('[data-js="settings-card__setpoint--scale"]') as SVGCircleElement | null;

document.addEventListener("DOMContentLoaded", () => {
    if (currentValue) {
        currentValue.value = tempValue.toString();
        const startValue: number = (parseInt(currentValue.value, 10));
        updateSetpoint(startValue);
    }
});

const updateScaleValue = (scaleValue: number): void => {
    let newOffset = 725 - (scaleValue / (tempSettings ? 35 : 60)) * (725 - 170);
    setpointScale?.setAttribute("stroke-dashoffset", newOffset.toString());
};

const updateSetpoint = (newValue: number): void => {
    if (tempSettings) {
        tempValue = newValue;
    }
    if (humSettings) {
        humValue = newValue
    }
    updateScaleValue(newValue);
}


if (currentValue) {
    buttonMinus?.addEventListener("click", () => {
        let newValue: number = parseInt(currentValue.value, 10);
        if (newValue > 0) {
            currentValue.value = (newValue - 1).toString();
            updateSetpoint(newValue - 1);
        }
    });

    buttonPlus?.addEventListener("click", () => {
        let newValue = parseInt(currentValue.value, 10);
        if (newValue < (tempSettings ? 35 : 60)) {
            currentValue.value = (newValue + 1).toString();
            updateSetpoint(newValue + 1);
        }
    });
};
    