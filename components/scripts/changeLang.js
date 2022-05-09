import { dataKeys } from "../../main";

let currentLang = 'en';
let shiftIsPressed;  

const changeTheLang = () => {      
    document.addEventListener('keydown', function(event) {
        if(event.key === 'Shift') shiftIsPressed = 1;
        console.log(event.key);
        if(shiftIsPressed && event.key === 'Alt') {
            console.log('CHANGE');
            currentLang === 'en' ? changeLangToRu() : changeLangToEn();
        }
    });
    document.addEventListener('keyup', function(event) {
        event.key === 'Shift' ? shiftIsPressed = 0: shiftIsPressed = 0;        
    });
}

const changeLangToRu = () => {
    const allPar = document.querySelectorAll('p');
    for(let i = 0; i < allPar.length; i++) {
        allPar[i].innerHTML = dataKeys.keyboard[i].ru;
    }
    currentLang = 'ru';
    console.log(currentLang);
}

const changeLangToEn = () => {
    const allPar = document.querySelectorAll('p');
    for(let i = 0; i < allPar.length; i++) {
        allPar[i].innerHTML = dataKeys.keyboard[i].en;
    }
    currentLang = 'en';
    console.log(currentLang);
}

export { changeTheLang };