"use strict";
exports.__esModule = true;
var zzz_1 = require("zzz");
var ss = new zzz_1.aClass(1, 2);
function Greeter(greeting) {
    this.greeting = greeting;
}
Greeter.prototype.greet = function () {
    return "Hello, " + this.greeting;
};
var greeter = new Greeter("world");
var button = document.createElement('button');
button.textContent = "Say Hello";
button.onclick = function () {
    alert(greeter.greet());
};
document.body.appendChild(button);
