import { domBody } from "../variables/domElements";

const inputDiv = document.createElement('div');
const textarea = document.createElement('textarea');

const createInputArea = () =>  {
    domBody.appendChild(inputDiv);
    inputDiv.classList.add('input-div')
    inputDiv.appendChild(textarea);
    textarea.classList.add('text-area');
}

export {createInputArea};