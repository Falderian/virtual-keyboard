import { textarea } from "./createInputArea";
import { dataKeys } from "../../main";
import { currentLang } from "./changeLang";

const addListenerForClick = () => {
    const allTD = document.querySelectorAll('td');
    const allPar = document.querySelectorAll('p');
    
    allTD.forEach(item => item.addEventListener('click', function(event) {
        let lang = localStorage.getItem('currentLang');
        console.log(event.target.innerText);
        textarea.textContent += event.target.innerText;
    }));    
}


export { addListenerForClick };