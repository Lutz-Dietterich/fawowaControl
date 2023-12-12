    
    let settings: boolean = false;
    const settingsOn = document.querySelector('[data-js="icon__settings--off"]') as SVGSVGElement | null;
    const settingsOff = document.querySelector('[data-js="icon__settings--on"]') as SVGSVGElement | null;
    const settingsButton = document.querySelector('[data-js="footer__button--settings"]') as HTMLButtonElement | null;

    let home: boolean = true;
    const homeOn = document.querySelector('[data-js="icon__home--off"]') as SVGSVGElement | null;
    const homeOff = document.querySelector('[data-js="icon__home--on"]') as SVGSVGElement | null;
    const homeButton = document.querySelector('[data-js="footer__button--home"]') as HTMLButtonElement | null;

    let light: boolean = false;
    const lightOn = document.querySelector('[data-js="icon__light--off"]') as SVGSVGElement | null;
    const lightOff = document.querySelector('[data-js="icon__light--on"]') as SVGSVGElement | null;
    const lightButton = document.querySelector('[data-js="footer__button--light"]') as HTMLButtonElement | null;
    


    if (settingsOff && settingsOn && settingsButton && homeOff && homeOn && homeButton && lightOff && lightOn && lightButton) {
        
        settingsButton.addEventListener("click", () => {
            
            if (!settings) {
            settings = !settings;
            settingsOff.classList.toggle('visually-hidden');
            settingsOn.classList.toggle('visually-hidden');
            }
            if (home) {
            home = !home;
            homeOff.classList.toggle('visually-hidden');
            homeOn.classList.toggle('visually-hidden');
            }
            if (light) {
            light = !light;
            lightOff.classList.toggle('visually-hidden');
            lightOn.classList.toggle('visually-hidden');
            }
        });
    
        homeButton.addEventListener("click", () => {

            if (settings) {
                settings = !settings;
                settingsOff.classList.toggle('visually-hidden');
                settingsOn.classList.toggle('visually-hidden');
                }
                if (!home) {
                home = !home;
                homeOff.classList.toggle('visually-hidden');
                homeOn.classList.toggle('visually-hidden');
                }
                if (light) {
                light = !light;
                lightOff.classList.toggle('visually-hidden');
                lightOn.classList.toggle('visually-hidden');
                }
        });

        lightButton.addEventListener("click", () => {

            if (settings) {
                settings = !settings;
                settingsOff.classList.toggle('visually-hidden');
                settingsOn.classList.toggle('visually-hidden');
                }
                if (home) {
                home = !home;
                homeOff.classList.toggle('visually-hidden');
                homeOn.classList.toggle('visually-hidden');
                }
                if (!light) {
                light = !light;
                lightOff.classList.toggle('visually-hidden');
                lightOn.classList.toggle('visually-hidden');
                }
        });

    } else {
        console.error("Eines oder mehrere erforderliche Elemente fehlen im DOM.");
    }

