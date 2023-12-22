
let settings: boolean = false;
const settingsOff = document.querySelector('[data-js="icon__settings--off"]') as SVGSVGElement | null;
const settingsOn = document.querySelector('[data-js="icon__settings--on"]') as SVGSVGElement | null;
const settingsButton = document.querySelector('[data-js="footer__button--settings"]') as HTMLButtonElement | null;
const settingsCard = document.querySelector('[data-js="card__settings"]') as HTMLElement | null;

let home: boolean = true;
const homeOff = document.querySelector('[data-js="icon__home--off"]') as SVGSVGElement | null;
const homeOn = document.querySelector('[data-js="icon__home--on"]') as SVGSVGElement | null;
const homeButton = document.querySelector('[data-js="footer__button--home"]') as HTMLButtonElement | null;
const homeCard = document.querySelector('[data-js="card__home"]') as HTMLElement | null;

let light: boolean = false;
const lightOff = document.querySelector('[data-js="icon__light--off"]') as SVGSVGElement | null;
const lightOn = document.querySelector('[data-js="icon__light--on"]') as SVGSVGElement | null;
const lightButton = document.querySelector('[data-js="footer__button--light"]') as HTMLButtonElement | null;
const lightCard = document.querySelector('[data-js="card__light"]') as HTMLElement | null;


/**
* Aktualisiert die Sichtbarkeit der Karten (Einstellungen, Home, Licht).
* Verwendet die Zustände der 'settings', 'home' und 'light' Variablen.
* Die 'visually-hidden' Klasse wird basierend auf diesen Zuständen hinzugefügt oder entfernt.
    * `settingsCardTemp?.classList.toggle('visually-hidden', !settings);`
    * Diese Zeile überprüft den Zustand von 'settings'. Wenn 'settings' 'true' ist, wird die Klasse 'visually-hidden' von der 'settingsCardTemp' entfernt.
    * Ist 'settings' 'false', wird die Klasse hinzugefügt.
* Der optionale Chaining-Operator `?.` wird verwendet, um sicherzustellen, dass kein Fehler auftritt, falls eines der Elemente im DOM nicht vorhanden ist.
*/


const updateCardVisibility = (): void => {      

settingsCard?.classList.toggle('visually-hidden', !settings);
homeCard?.classList.toggle('visually-hidden', !home);
lightCard?.classList.toggle('visually-hidden', !light);
};



settingsButton?.addEventListener("click", () => {
    if (!settings) {
        settings = !settings;
        settingsOff?.classList.toggle('visually-hidden');
        settingsOn?.classList.toggle('visually-hidden');
    }
    if (home) {
        home = !home;
        homeOff?.classList.toggle('visually-hidden');
        homeOn?.classList.toggle('visually-hidden');
    }
    if (light) {
        light = !light;
        lightOff?.classList.toggle('visually-hidden');
        lightOn?.classList.toggle('visually-hidden');
    }
    updateCardVisibility();
});

homeButton?.addEventListener("click", () => {
    if (settings) {
        settings = !settings;
        settingsOff?.classList.toggle('visually-hidden');
        settingsOn?.classList.toggle('visually-hidden');
    }
    if (!home) {
        home = !home;
        homeOff?.classList.toggle('visually-hidden');
        homeOn?.classList.toggle('visually-hidden');
    }
    if (light) {
        light = !light;
        lightOff?.classList.toggle('visually-hidden');
        lightOn?.classList.toggle('visually-hidden');
    }
    updateCardVisibility();
});

lightButton?.addEventListener("click", () => {
    if (settings) {
        settings = !settings;
        settingsOff?.classList.toggle('visually-hidden');
        settingsOn?.classList.toggle('visually-hidden');
    }
    if (home) {
        home = !home;
        homeOff?.classList.toggle('visually-hidden');
        homeOn?.classList.toggle('visually-hidden');
    }
    if (!light) {
        light = !light;
        lightOff?.classList.toggle('visually-hidden');
        lightOn?.classList.toggle('visually-hidden');
    }
    updateCardVisibility();
});


