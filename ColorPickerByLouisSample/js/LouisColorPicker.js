var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var rText = document.getElementById("rText");
var gText = document.getElementById("gText");
var bText = document.getElementById("bText");

var CreateBGFn = (function CreateBG() {
	var init = function init() {
		var elem = document.querySelectorAll('#CreateBG');
		var size = elem.length;
		var div = document.getElementById("CreateBG");
		var input = document.createElement("textarea");
		var button = document.createElement("button");
		div.style.width = 100;
		div.style.height = 60;
		input.name = "post";
		// input.maxLength = "5000";
		input.cols = "80";
		input.rows = "40";

		//div.appendChild(input); //appendChild
		//div.appendChild(button);
		div.style.backgroundColor = "blue";
		div.style.color = "red";
		// for (var i = 0; i < size; i++)
		// 	new InputSlider(elem[i]);
	};
	return {
		initiiii: init,
	};

})();

window.addEventListener("load", function () {
	CreateBGFn.initiiii();
	EventRegister();


}, true);


//alert(red.type+"_"+rText.type6+red.value);//range text
//console.log(InputSliderManager.initiiii);

function useJSAddEvent(target, targetType, bingTarget, eventprepoty) {
	//var targetVal=target.value();
	var result;
	switch (targetType) {
		case "number":
			target.addEventListener('click', function (e) {
				this.select();
			});
			target.addEventListener('input', function (e) {

				if (target.value > 255) {

					target.value = 255;
				}
				else if (target.value < 1) {
					console.log(target.value);
					target.value = 0;
				}
				bingTarget.value = target.value;

				setcolor(target.value, eventprepoty);
				
			});
			break;
		case "range":
			target.addEventListener('input', function (e) {
				bingTarget.value = target.value;
				setcolor(target.value, eventprepoty);
			});
			target.addEventListener('change', function (e) {
				bingTarget.value = target.value;
				setcolor(target.value, eventprepoty);
			});

			break;


	};


}


function EventRegister() {
	var SP=document.querySelector('.slider-picker');
	var stylett = getComputedStyle(SP);
	var SPclass = document.getElementById("SP");
	var startX = null;
	var start_value = 0;
	console.log(SP);
	console.log(SPclass.style.width);
	console.log(SP.style.width);
	console.log(stylett.width);
	var mouseMove = function mouseMove(e) {
		if (action >= 0)
			elem.style.width = e.clientX - valueX + 'px';
		if (action <= 0)
			elem.style.height = e.clientY - valueY + 'px';
	};
	SP.addEventListener("click", function(e) {
		document.removeEventListener("mousemove", sliderMotion);
		
	});
	SP.addEventListener("mousedown", function(e) {
		startX = e.clientX;
		document.body.style.cursor = "e-resize";    
		document.addEventListener("mouseup", slideEnd);
		document.addEventListener("mousemove", sliderMotion);
	});
	var slideEnd = function slideEnd(e) {
		document.removeEventListener("mousemove", sliderMotion);
		document.body.style.cursor = "auto";
		SP.style.cursor = "pointer";
	};
	var sliderMotion = function sliderMotion(e) {
				var HD2=document.getElementById("hueDivID");
				console.log(SP.style.width);
				console.log(SP);
				var proportion = e.pageX - HD2.offsetWidth;    
				var pagx=e.pageX;

				if(pagx>360){		
					pagx=360;	
				}
				else if (e < 0){
					pagx=0;
		
				}
				SP.style.left=pagx+'px';
				console.log(pagx);

	};
	useJSAddEvent(red, "range", rText, "R");
	useJSAddEvent(rText, "number", red, "R");
	useJSAddEvent(green, "range", gText, "G");
	useJSAddEvent(gText, "number", green, "G");
	useJSAddEvent(blue, "range", bText, "B");
	useJSAddEvent(bText, "number", blue, "B");
	console.log(ColorArea.style.backgroundColor);
	console.log(DFBtn.style.backgroundColor);
	var Hexa = document.getElementById("Hexa");
	Hexa.addEventListener('input', function (e) {
		console.log(hexToRgb(this.value));
		console.log(this.value);
		if (hexToRgb(this.value) == null) {
			console.log("無效色碼");
			
		}

		else {
			
			rText.value = hexToRgb(this.value).r;
			gText.value = hexToRgb(this.value).g;
			bText.value = hexToRgb(this.value).b;
			CreateBG.style.backgroundColor = this.value;
		}

	});

	DFBtn1.addEventListener('mousedown', function (e) {
		alert("you click "+DFBtn1.id);
		
		// console.log(hexToRgb(this.value));
		// console.log(this.value);
		// if (hexToRgb(this.value) == null) {
		// 	console.log("無效色碼");
			
		// }

		// else {
			
		// 	rText.value = hexToRgb(this.value).r;
		// 	gText.value = hexToRgb(this.value).g;
		// 	bText.value = hexToRgb(this.value).b;
		// 	CreateBG.style.backgroundColor = this.value;
		// }

	});





}


function hexToRgb(hex) {
	try {

		var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
		return result ? {
			r: parseInt(result[1], 16),
			g: parseInt(result[2], 16),
			b: parseInt(result[3], 16)
		} : null;
	}
	catch{
		return 1;
	}
}


function setcolor(value, name) {
	var result;
	switch (name) {
		case "R":
			result = fullColorHex(value, green.value, blue.value);
			break;
		case "G":
			result = fullColorHex(red.value, value, blue.value);
			break;
		case "B":
			result = fullColorHex(red.value, green.value, value);
			break;

	};
	//document.getElementById("bgcolor").style.backgroundColor = result;
	var Hexa = document.getElementById("Hexa").value = "#" + result;
	CreateBG.style.backgroundColor = result;
	console.log(result);
	console.log(CreateBG.style.backgroundColor);
	// element.style.backgroundColor = color.toHSLA();
	//element.style.color = color.toHex();
	// rgbToHex(123); // returns 7b string
	// rgbToHex(2); // returns 02 string
	//document.getElementById("bgcolor").style.color=fullColorHex(10, 20, 30);
}


function fullColorHex(r, g, b) {
	var red = rgbToHex(r);
	var green = rgbToHex(g);
	var blue = rgbToHex(b);

	return red + green + blue;

};
function rgbToHex(rgb) {
	var hex = Number(rgb).toString(16);
	if (hex.length < 2) {
		hex = "0" + hex;
	}
	return hex;
};



