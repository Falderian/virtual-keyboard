import { dataKeys } from "../../main";

const addCssForTableBody = () => {
    document.querySelector('table').classList.add('table-styles');
}

const addIdForKeys = () => {
    const allTD = document.querySelectorAll('td');
    for(let i = 0; i < allTD.length; i++) {
        allTD[i].setAttribute('id', `${i}`);
    }          
    for(let i = 61; i < 64; i++) {
        let datas = document.getElementById(i);
        datas.setAttribute('id', `${i}`-1);
}
}
const addKeysNames = () => {
    const allTD = document.querySelectorAll('td');
    allTD.forEach(item => {
        let par = document.createElement('p');
        item.appendChild(par);
    });
    const allPar = document.querySelectorAll('p');
    for(let i = 0; i < allPar.length; i++) {
        allPar[i].textContent = dataKeys.keyboard[i].en;
    }
}

const addArrowsKeys = () => {
    let arrowUp = document.getElementById(55);
    let arrowLeft = document.getElementById(62);
    let arrowDown = document.getElementById(63);
    let arrowRight = document.getElementById(64);

    arrowUp.classList.add('arrow-up');
    arrowUp.childNodes[0].classList.add('invisible');
    
    arrowLeft.classList.add('arrow-left');
    arrowLeft.childNodes[0].classList.add('invisible');

    arrowDown.classList.add('arrow-down');
    arrowDown.childNodes[0].classList.add('invisible');

    arrowRight.classList.add('arrow-right');
    arrowRight.childNodes[0].classList.add('invisible');
}


export { addCssForTableBody, addIdForKeys, addKeysNames, addArrowsKeys };