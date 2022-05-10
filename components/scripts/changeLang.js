import { dataKeys } from "../../main";

let currentLang;
let shiftIsPressed;

const changeTheLang = () => {      
    document.addEventListener('keydown', function(event) {
        if(event.key === 'Shift') shiftIsPressed = 1;
        if(shiftIsPressed && event.key === 'Alt') {
            currentLang = localStorage.getItem('currentLang');
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
    localStorage.setItem('currentLang', 'ru');
}

const changeLangToEn = () => {
    const allPar = document.querySelectorAll('p');
    for(let i = 0; i < allPar.length; i++) {
        allPar[i].innerHTML = dataKeys.keyboard[i].en;
    }
    currentLang = 'en';
    localStorage.setItem('currentLang', 'en');
}

const whichLangIsCurr = () => {
    let lang = localStorage.getItem('currentLang');
    lang === 'ru' ? changeLangToRu(): changeLangToEn;
}

export { changeTheLang, whichLangIsCurr };