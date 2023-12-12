    
    let settings: boolean = false;
    const settingsOn = document.querySelector('[data-js="icon__settings--off"]') as SVGSVGElement | null;
    const settingsOff = document.querySelector('[data-js="icon__settings--on"]') as SVGSVGElement | null;
    const settingsButton = document.querySelector('[data-js="footer__button--settings"]') as HTMLButtonElement | null;
    const settingsCardTemp = document.querySelector('[data-js="card__settings--temp"]') as HTMLElement | null;

    let home: boolean = true;
    const homeOn = document.querySelector('[data-js="icon__home--off"]') as SVGSVGElement | null;
    const homeOff = document.querySelector('[data-js="icon__home--on"]') as SVGSVGElement | null;
    const homeButton = document.querySelector('[data-js="footer__button--home"]') as HTMLButtonElement | null;
    const homeCard = document.querySelector('[data-js="card__home"]') as HTMLElement | null;

    let light: boolean = false;
    const lightOn = document.querySelector('[data-js="icon__light--off"]') as SVGSVGElement | null;
    const lightOff = document.querySelector('[data-js="icon__light--on"]') as SVGSVGElement | null;
    const lightButton = document.querySelector('[data-js="footer__button--light"]') as HTMLButtonElement | null;
    const lightCard = document.querySelector('[data-js="card__light"]') as HTMLElement | null;
    


    const updateVisibility = (): void => {
        console.log('updateVisibility');
    
        if (settingsCardTemp) {
            if (settings) {
                settingsCardTemp.classList.remove('visually-hidden');
            } 
            if (!settings) {
                settingsCardTemp.classList.add('visually-hidden');
            }
        }
    
        if (homeCard) {
            if (home) {
                homeCard.classList.remove('visually-hidden');
            } 
            if (!home) {
                homeCard.classList.add('visually-hidden');
            }
        }
    
        if (lightCard) {
            if (light) {
                lightCard.classList.remove('visually-hidden');
            } 
            if (!light) {
                lightCard.classList.add('visually-hidden');
            }
        }
    };
    

    if (settingsOff && settingsOn && settingsButton && homeOff && homeOn && homeButton && lightOff && lightOn && lightButton && settingsCardTemp && homeCard && lightCard) {
        
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
            updateVisibility();
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
            updateVisibility();
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
            updateVisibility();
        });

    } else {
        console.error("Eines oder mehrere erforderliche Elemente fehlen im DOM.");
    }

