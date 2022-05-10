import { domBody } from "../variables/domElements";

const createLegend = () => {
    let divText = document.createElement('div');

    domBody.appendChild(divText);

    divText.classList.add('div-text');

    divText.textContent = 'Для смены языка нажмите ShiftLeft + AltLeft';
}

export { createLegend };