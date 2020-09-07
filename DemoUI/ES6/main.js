import {aString,aObject} from './lib.js';
export class init{
    at=aString;

    constructor() {
        console.log('init',aString,aObject);
        document.getElementById('ShowMessage').innerHTML="TextMassage";
    }
}