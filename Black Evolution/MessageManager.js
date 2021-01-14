'use strict';

var Message_UI=document.getElementById('Message_UI');

// document.removeEventListener("mousedown", undefined);
// document.removeEventListener("mousedown", 'SSS');


document.addEventListener('mousedown',zz);
//document.removeEventListener("mousedown",zz);
document.addEventListener('mousedown',AAA);

//document.removeEventListener("mousedown",sss);

document.removeEventListener("mousedown",null);
function zz(){
    console.log("FFFF");
    Message_UI.innerHTML+=
    "<div id=\"messageAttack\" class=\"Message_Item\">\
    您攻擊了 zz 造成 &lt;250&gt;傷害\
    </div>"
}
function AAA(){
    console.log("FFFF");
    Message_UI.innerHTML+=
    "<div id=\"messageAttack\" class=\"Message_Item\">\
    您攻擊了 AAA 造成 &lt;250&gt;傷害\
    </div>"
}





// setInterval(function () {
//     Message_UI.innerHTML+=
//     "<div id=\"messageAttack\" class=\"Message_Item\">\
//     您攻擊了 哥布林 造成 &lt;250&gt;傷害\
//     </div>"
//     //Message_UI.appendChild(createDiv);
// }, 500);
// var createDiv = document.createElement('div');
// createDiv.classList.add("circle");

// createDiv.style.cssText = 'position: absolute;\
// background-color: yellow;\ssss
// width: 5%;\
// height: 100%;';
//createDiv.id = 'RGBcircle' + circlecs.length;
// Message_UI.addEventListener("mousedown", (e) => {
//   console.log("mousedown", e);
//   if (e.target.className == "layerRange") {
   
//   }
// });


