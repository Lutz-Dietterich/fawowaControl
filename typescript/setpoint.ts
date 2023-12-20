
const currentValue = document.querySelector('[data-js="settings-card__setpoint--current-value"]') as HTMLInputElement | null;
const buttonMinus = document.querySelector('[data-js="settings-card__button-round--minus"]') as HTMLButtonElement | null;
const buttonPlus = document.querySelector('[data-js="settings-card__button-round--plus"]') as HTMLButtonElement | null;
const setpointScale = document.querySelector('[data-js="settings-card__setpoint--scale"]') as SVGCircleElement | null;

document.addEventListener("DOMContentLoaded", () => {
    if (currentValue) {
        const startValue: number = 725 - (parseInt(currentValue.value, 10) / 35) * (725 - 170);
        updatesetpoint(startValue - 5);
    }
});

function updatesetpoint(newValue: number) {
    let newOffset = 725 - (newValue / 35) * (725 - 170);
    setpointScale?.setAttribute("stroke-dashoffset", newOffset.toString());
}
if (currentValue) {
    buttonMinus?.addEventListener("click", () => {
        let newValue: number = parseInt(currentValue.value, 10);
        if (newValue > 0) {
            currentValue.value = (newValue - 1).toString();
            updatesetpoint(newValue - 1);
        }
    });

    buttonPlus?.addEventListener("click", () => {
        let newValue = parseInt(currentValue.value, 10);
        if (newValue < 35) {
            currentValue.value = (newValue + 1).toString();
            updatesetpoint(newValue + 1);
        }
    });
};
    