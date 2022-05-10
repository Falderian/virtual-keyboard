import { keyboardDiv, addEmpyTD } from "./components/scripts/createKeyboard";
import { addCssForTableBody, addIdForKeys, addKeysNames} from "./components/scripts/addCssForTable";
import { findKey } from "./components/scripts/keyboardEvents";
import { createInputArea } from "./components/scripts/createInputArea";
import { changeTheLang, whichLangIsCurr } from "./components/scripts/changeLang";
import { createLegend } from "./components/scripts/createLegendForChangeLang";
import { addListenerForClick } from "./components/scripts/inputForVirtKey";
import { changeToUpperCase } from "./components/scripts/changeToUpperCase";
/*async function loadJSON (url) {
    const res = await fetch(url);
    return await res.json();
}
loadJSON('./src/keyboard.JSON').then(data => {
    dataKeys = data.keyboard;   
    console.log(data.keyboard);
});*/

let dataKeys = require ('./src/keyboard.json');

createInputArea();
keyboardDiv();
addCssForTableBody();
addIdForKeys();
addKeysNames();
addEmpyTD();
findKey();
changeTheLang();
createLegend();
whichLangIsCurr();
addListenerForClick();
//changeToUpperCase();


export { dataKeys };