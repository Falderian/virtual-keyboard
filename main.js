import { keyboardDiv, addEmpyTD } from "./components/scripts/createKeyboard";
import { addCssForTableBody, addIdForKeys, addKeysNames} from "./components/scripts/addCssForTable";
import { findKey } from "./components/scripts/keyboardEvents";
import { createInputArea } from "./components/scripts/createInputArea";
import { changeTheLang } from "./components/scripts/changeLang";
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


export { dataKeys };