

    interface DataJsElement extends HTMLElement {
        dataset: {
            js: string;
        };
    }
    
    const settingsOn = document.querySelector('[data-js="icon__settings--off"]') as SVGSVGElement | null;
    const settingsOff = document.querySelector('[data-js="icon__settings--on"]') as SVGSVGElement | null;
    const settingsButton = document.querySelector('[data-js="footer__button--settings"]') as HTMLButtonElement | null;
    const homeOn = document.querySelector('[data-js="icon__home--off"]') as SVGSVGElement | null;
    const homeOff = document.querySelector('[data-js="icon__home--on"]') as SVGSVGElement | null;
    const homeButton = document.querySelector('[data-js="footer__button--home"]') as HTMLButtonElement | null;
    const bulbOn = document.querySelector('[data-js="icon__bulb--off"]');
    const bulbOff = document.querySelector('[data-js="icon__bulb--on"]');
    const bulbButton = document.querySelector('[data-js="footer__button--bulb"]');
    


    // Überprüfen, ob alle Elemente vorhanden sind
    if (settingsOff && settingsOn && settingsButton) {
        // Umschalten der Sichtbarkeit der SVGs beim Klicken auf den Button
        settingsButton.addEventListener("click", () => {
            settingsOff.classList.toggle('visually-hidden');
            settingsOn.classList.toggle('visually-hidden');
        });
    } else {
        console.error("Eines oder mehrere erforderliche Elemente fehlen im DOM.");
    }
    

    if (homeOff && homeOn && homeButton) {
        // Umschalten der Sichtbarkeit der SVGs beim Klicken auf den Button
        homeButton.addEventListener("click", () => {
            homeOff.classList.toggle('visually-hidden');
            homeOn.classList.toggle('visually-hidden');
        });
    } else {
        console.error("Eines oder mehrere erforderliche Elemente fehlen im DOM.");
    }



    if (bulbOff && bulbOn && bulbButton) {
        // Umschalten der Sichtbarkeit der SVGs beim Klicken auf den Button
        bulbButton.addEventListener("click", () => {
        bulbOff.classList.toggle('visually-hidden');
            bulbOn.classList.toggle('visually-hidden');
        });
    }
    else {
        console.error("Eines oder mehrere erforderliche Elemente fehlen im DOM.");
    }
