import { domBody } from "../variables/domElements";

const divElement = document.createElement('div');
const keyboardFrame = document.createElement('table');
const keyboardBody = document.createElement('tbody');
const tableRow = document.createElement('tr');
const tableData = document.createElement('td');

const changeSizeTD = (int) => {
        let allTD = document.querySelectorAll("td");
        allTD[int].setAttribute('colspan', '2');
        allTD[int+1].remove();
}

const createSpaceBar = () => {
        let allTD = document.querySelectorAll("td");
        allTD[59].setAttribute('colspan', '8');
        for(let i = 0; i < 5; i++) {
                let rows = document.querySelectorAll('tr');
                rows[4].childNodes[i+6].remove();
        }
}

const keyboardDiv = () => {

        domBody.appendChild(divElement);
        divElement.appendChild(keyboardFrame);
        keyboardFrame.appendChild(keyboardBody);

        for(let i = 0; i < 5; i++) {
                let tableRow = document.createElement('tr');
                keyboardBody.appendChild(tableRow);
                for(let j = 0; j < 15; j++) {
                        let tableData = document.createElement('td');
                        keyboardBody.childNodes[i].appendChild(tableData);
                }
        }
        changeSizeTD(13);
        changeSizeTD(29);
        changeSizeTD(41);
        changeSizeTD(42);
        createSpaceBar();
}

const addEmpyTD = () => {
        let rows = document.querySelectorAll('tr');
        for(let i = 0; i < rows.length-1; i++) {
                let empyTD = document.createElement('td');
                rows[i].appendChild(empyTD);
        }
        document.getElementById(65).remove();
}
export { keyboardDiv, addEmpyTD, divElement, keyboardFrame, keyboardBody, tableRow, tableData };