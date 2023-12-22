
let tempSettings: boolean = true;
const tempSettingsOff = document.querySelector('[data-js="icon__temp--off"]') as SVGSVGElement | null;
const tempSettingsOn = document.querySelector('[data-js="icon__temp--on"]') as SVGSVGElement | null;
const tempSettingsButton = document.querySelector('[data-js="setting-card__button-clean--temp"]') as HTMLButtonElement | null;
const tempSettingsCard = document.querySelector('[data-js="card__settings--temp"]') as HTMLElement | null;
const tempSettingsCardHeadline: string =  "Temperatur";

let humSettings: boolean = false;
const humSettingsOff = document.querySelector('[data-js="icon__hum--off"]') as SVGSVGElement | null;
const humSettingsOn = document.querySelector('[data-js="icon__hum--on"]') as SVGSVGElement | null;
const humSettingsButton = document.querySelector('[data-js="setting-card__button-clean--hum"]') as HTMLButtonElement | null;
const humSettingsCard = document.querySelector('[data-js="card__settings--hum"]') as HTMLElement | null;
const humSettingsCardHeadline: string =  "Luftfeuchte";

let headline = document.querySelector('[data-js="settings-card__title"]') as HTMLElement | null;


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
        }
        if (humSettings) {
            headline.innerText = humSettingsCardHeadline;
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
});

