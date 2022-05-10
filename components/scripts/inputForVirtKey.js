import { dataKeys } from "../../main";
import { textarea } from "./createInputArea";
import { currentLang } from "./changeLang";


let shiftIsPressed;

const addListenerForClick = () => {
    const allTD = document.querySelectorAll('td');
    const allPar = document.querySelectorAll('p');
    allTD.forEach(item => item.addEventListener('click', function(event) {
        if(event.target.innerText.length <= 1) textarea.textContent += event.target.innerText;
        switch (event.target.innerText) {
            case "Backspace" :
                let str = textarea.textContent;
                textarea.innerHTML = str.slice(0, -1);
        }
        isShiftPressed(event);
    }));    
}

const isShiftPressed = (event) => {
    const allPar = document.querySelectorAll('p');
    if(event.target.innerHTML === 'Shift') {
        document.getElementById(42).classList.add('active-key');        
        console.log(localStorage.getItem(currentLang));
        for(let i = 0; i < 64; i++) {
            allPar[i].innerHTML = dataKeys.keyboard[i].shiftEn;
        }
    }
    else {
        document.getElementById(42).classList.remove('active-key');
        for(let i = 0; i < 64; i++) {
            allPar[i].innerHTML = dataKeys.keyboard[i].en;
        }
    }
}


export { addListenerForClick };