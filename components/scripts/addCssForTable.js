import { dataKeys } from "../../main";

const addCssForTableBody = () => {
    document.querySelector('table').classList.add('table-styles');
}

const addIdForKeys = () => {
    const allTD = document.querySelectorAll('td');
    for(let i = 0; i < allTD.length; i++) {
        allTD[i].setAttribute('id', `${i}`);
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

export { addCssForTableBody, addIdForKeys, addKeysNames };