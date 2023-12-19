
const currentValue = document.querySelector('[data-js="settings-card__gauge--current-value"]') as HTMLInputElement | null;
const buttonMinus = document.querySelector('[data-js="settings-card__button-round--minus"]') as HTMLButtonElement | null;
const buttonPlus = document.querySelector('[data-js="settings-card__button-round--plus"]') as HTMLButtonElement | null;
const gaugeScale = document.querySelector('[data-js="settings-card__gauge--scale"]') as SVGCircleElement | null;

document.addEventListener("DOMContentLoaded", () => {
    if (currentValue) {
        const startValue: number = 725 - (parseInt(currentValue.value, 10) / 35) * (725 - 170);
        updateGauge(startValue - 5);
    }
});

function updateGauge(newValue: number) {
    let newOffset = 725 - (newValue / 35) * (725 - 170);
    gaugeScale?.setAttribute("stroke-dashoffset", newOffset.toString());
}
if (currentValue) {
    buttonMinus?.addEventListener("click", () => {
        let newValue: number = parseInt(currentValue.value, 10);
        if (newValue > 0) {
            currentValue.value = (newValue - 1).toString();
            updateGauge(newValue - 1);
        }
    });

    buttonPlus?.addEventListener("click", () => {
        let newValue = parseInt(currentValue.value, 10);
        if (newValue < 35) {
            currentValue.value = (newValue + 1).toString();
            updateGauge(newValue + 1);
        }
    });
};
    