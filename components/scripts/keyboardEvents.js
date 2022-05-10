import { dataKeys } from "../../main";

let searchID;
let searchElement;

const findKey = () => {
    document.addEventListener('keydown', function(event){
        if(event.keyCode === 9) {document.getElementById(14).classList.add('active-key')}
        if(event.keyCode === 32) {document.getElementById(59).classList.add('active-key')}
        if(event.key === 'Meta') {document.getElementById(57).classList.remove('active-key');}
        else {
        for(let i = 0; i < 66; i ++) {            
            if(event.key === dataKeys.keyboard[i].en) {
                searchID = i;
                searchElement = document.getElementById(searchID);
                searchElement.classList.add('active-key');                
            }
        }
        }            
    });
    document.addEventListener('keyup', function(event){
        if(event.keyCode === 9) {document.getElementById(14).classList.remove('active-key')}
        if(event.keyCode === 32) {document.getElementById(59).classList.remove('active-key')}
        else {
        for(let i = 0; i < 66; i ++) {
            if(event.key === dataKeys.keyboard[i].en) {
                searchID = i;
                searchElement = document.getElementById(searchID);
                searchElement.classList.remove('active-key');
                if(event.key === 'Meta') {document.getElementById(57).classList.remove('active-key');};
            }
        }
        }            
    });
}

export { findKey };
