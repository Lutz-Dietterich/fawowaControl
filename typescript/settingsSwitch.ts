
let tempSettings: boolean = true;
let tempValue: number = 21;
console.log(tempValue);
const tempSettingsOff = document.querySelector('[data-js="icon__temp--off"]') as SVGSVGElement | null;
const tempSettingsOn = document.querySelector('[data-js="icon__temp--on"]') as SVGSVGElement | null;
const tempSettingsButton = document.querySelector('[data-js="setting-card__button-clean--temp"]') as HTMLButtonElement | null;
const tempSettingsCardHeadline: string =  "Temperatur";
const tempUnit: string = "°C";

let humSettings: boolean = false;
let humValue: number = 50;
const humSettingsOff = document.querySelector('[data-js="icon__hum--off"]') as SVGSVGElement | null;
const humSettingsOn = document.querySelector('[data-js="icon__hum--on"]') as SVGSVGElement | null;
const humSettingsButton = document.querySelector('[data-js="setting-card__button-clean--hum"]') as HTMLButtonElement | null;
const humSettingsCardHeadline: string =  "Luftfeuchte";
const humUnit: string = "%";

let headline = document.querySelector('[data-js="settings-card__title"]') as HTMLElement | null;
let setpointUnit = document.querySelector('[data-js="settings-card__setpoint--unit]') as HTMLElement | null;

console.log(setpointUnit);

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


const updateSettingsVisibility = (): void => {
    if (headline) {
        if (tempSettings) {
        headline.innerText = tempSettingsCardHeadline;
            if (currentValue) {
                currentValue.value = tempValue.toString();
            }
        }
        if (humSettings) {
            headline.innerText = humSettingsCardHeadline;
            if (currentValue) {
                currentValue.value = humValue.toString();
            }
        }
    }
};

tempSettingsButton?.addEventListener('click', () => {
    if (!tempSettings) {
        tempSettings = !tempSettings;
        tempSettingsOff?.classList.toggle('visually-hidden');
        tempSettingsOn?.classList.toggle('visually-hidden');
    }
    if (humSettings) {
        humSettings = !humSettings;
        humSettingsOff?.classList.toggle('visually-hidden');
        humSettingsOn?.classList.toggle('visually-hidden');
    }
    updateSettingsVisibility();
    updateScaleValue(tempValue); // This function is declared in setpoint.ts
});

humSettingsButton?.addEventListener('click', () => {
    if (tempSettings) {
        tempSettings = !tempSettings;
        tempSettingsOff?.classList.toggle('visually-hidden');
        tempSettingsOn?.classList.toggle('visually-hidden');
    }
    if (!humSettings) {
        humSettings = !humSettings;
        humSettingsOff?.classList.toggle('visually-hidden');
        humSettingsOn?.classList.toggle('visually-hidden');
    }
    updateSettingsVisibility();
    updateScaleValue(humValue); // This function is declared in setpoint.ts
});

