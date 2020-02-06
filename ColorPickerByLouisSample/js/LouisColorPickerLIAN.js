var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");
var rText = document.getElementById("rText");
var gText = document.getElementById("gText");
var bText = document.getElementById("bText");
var hslArr;

var RecordColor=["ffffff","ffffff"];//預設 RGB 000 HSV 0 0 1

var RecordColorIndex=999;//預設 RGB 000 HSV 0 0 1
let RecordColorData={
	Index:999,

}


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





function EventRegister() {
	var hueRange=document.getElementById("hueRange");
	var huetxt=document.getElementById("huetxt");
	var HSVRange=document.getElementById("HSVRange");
	var HSVtxt=document.getElementById("HSVtxt");;
	//var SP=document.querySelector('.slider-picker');
	let DefultColorBtn=document.getElementById("DefultColorBtn");
	var Hexa = document.getElementById("Hexa");
	//HSVRange.style.backgroundColor = "rgb(255,0,0)";
	//HSVRange.style.backgroundColor="linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 255, 0.5) 100%);"
	// var template1="我是{0}，今年{1}了";
	// var template2="我是{name}，今年{age}了";
	// var result1=template1.format("loogn",22);
	huetxt.innerHTML+="_____"+stringFormat("rgb({0},{1},{2})",red.value,green.value,blue.value);
	
	//HSVRange.style.background="linear-gradient(red , yellow); "

	console.log(HSVRange.style.backgroundColor);
	hueRange.addEventListener('input', function (e){
		//hslArr[0]=parseInt( hslArr[0])/360;
        
		hslArr[0]=hueRange.value/360;
        var t=HSVtoRGB(hslArr[0],hslArr[1],hslArr[2]);
		huetxt.innerHTML=hueRange.value;
		huetxt.innerHTML+="_____"+t;
		// huetxt.innerHTML+="_____"+hslArr[0];
		// huetxt.innerHTML+="_____"+hslArr[1];
		// huetxt.innerHTML+="_____"+hslArr[2];
		HSVRange.style.backgroundColor = stringFormat("rgb({0},{1},{2})",t[0],t[1],t[2]);
		
		//HSVRange.style.background="linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 255, 0.5) 100%);"
	
	});
	HSVRange.addEventListener('input', function (e){
		//hslArr[0]=parseInt( hslArr[0])/360;
		hslArr[1]=HSVRange.value/100;
		//hslArr[0]=hueRange.value/360;
        var t=HSVtoRGB(hslArr[0],parseInt( hslArr[1]),parseInt( hslArr[2]));
		HSVtxt.innerHTML=HSVRange.value;
		HSVtxt.innerHTML+="_____"+t;
		// huetxt.innerHTML+="_____"+hslArr[0];
		// huetxt.innerHTML+="_____"+hslArr[1];
		// huetxt.innerHTML+="_____"+hslArr[2];
	});



	useJSAddEvent(red, "range", rText, "R");
	useJSAddEvent(rText, "number", red, "R");
	useJSAddEvent(green, "range", gText, "G");
	useJSAddEvent(gText, "number", green, "G");
	useJSAddEvent(blue, "range", bText, "B");
	useJSAddEvent(bText, "number", blue, "B");
	console.log("ColorArea",ColorArea.style.backgroundColor);
	console.log("DefultColorFrame1",DefultColorFrame1.style);
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

	DefultColorFrame1.addEventListener('mousedown', function (e) {
		//alert("you click "+DefultColorBtn.id);
		DefultColorFrame1.style.backgroundColor="#fab8b8";
		DefultColorFrame2.style.backgroundColor="#b8fab8";
		RecordColorData.Index=1;
		// RecordAreaBtn1.style.backgroundColor="#FF0000";
		// RecordAreaBtn2.style.backgroundColor="#FF0000";

	});
	DefultColorFrame2.addEventListener('mousedown', function (e) {
		//alert("you click "+DefultColorBtn.id);
	
		DefultColorFrame1.style.backgroundColor="#b8fab8";
		DefultColorFrame2.style.backgroundColor="#fab8b8";
		RecordColorData.Index=2;
		

	});
}
function useJSAddEvent(target, targetType, bingTarget, eventprepoty) {
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
				setshv_shb();
			});
			target.addEventListener('change', function (e) {
				bingTarget.value = target.value;
				setcolor(target.value, eventprepoty);
				setshv_shb();
				//document.getElementsByClassName("huetxt")[0].innerHTML=result;
				//HSL即色相、飽和度、亮度（英語：Hue, Saturation, Lightness）。
				//document.getElementsByClassName("huetxt")[0].innerHTML=result2[0];
			});
			break;


	};

}
function getButtonColor(e){
	    var BGCRValue=backGroundColorRgbToHex(e.style.backgroundColor);
		document.getElementById("Colortxt").innerHTML= BGCRValue;
		setRecordAreaColor(BGCRValue);
}

function setRecordAreaColor(format_hex){

	if(RecordColorData.Index==1){

		RecordAreaBtn1.style.backgroundColor=format_hex;
	}
	else{
		RecordAreaBtn2.style.backgroundColor=format_hex;
	}

}





function backGroundColorRgbToHex(col)
{
  if(col.charAt(0)=='r')
  {
    col=col.replace('rgb(','').replace(')','').split(',');
    var r=parseInt(col[0], 10).toString(16);
    var g=parseInt(col[1], 10).toString(16);
    var b=parseInt(col[2], 10).toString(16);
    r=r.length==1?'0'+r:r;
    g=g.length==1?'0'+g:g;
    b=b.length==1?'0'+b:b;
    var colHex='#'+r+g+b;
    return colHex;
  }
}










function setshv_shb(){
	
	hslArr=rgb2HSV(red.value,green.value,blue.value);
	document.getElementsByClassName("HSVcs")[0].innerHTML="Hue:"+JSON.stringify(hslArr);
	//console.log(hslArr);
	document.getElementsByClassName("HSVcs")[3].innerHTML="HSVtoRGB:"+HSVtoRGB(hslArr[0]/360,hslArr[1],hslArr[2]);

	// document.getElementsByClassName("HSVcs")[0].innerHTML="Hue:"+hslArr[0];
	// document.getElementsByClassName("HSVcs")[1].innerHTML="Saturation:"+hslArr[1]);
	// document.getElementsByClassName("HSVcs")[2].innerHTML="V:"+hslArr[2]);
}




function Percentage(number) { 		
	return  Math.round(number)*100+"%"; //整數百分比
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
	var Hexa = document.getElementById("Hexa").value = "#" + result;
	CreateBG.style.backgroundColor = result;
	console.log(result);
	console.log(CreateBG.style.backgroundColor);
}


function fullColorHex(r, g, b) {
	var red = rgbToHex(r);
	var green = rgbToHex(g);
	var blue = rgbToHex(b);

	return red + green + blue;

};
function rgbToHex(rgb) {//HEX色碼
	var hex = Number(rgb).toString(16);
	if (hex.length < 2) {
		hex = "0" + hex;
	}
	return hex;
};
//hsv =hsb  轉換為0~360 ,0~1 ,0~1
function rgb2HSV (r,g,b) {
	var computedH = 0;
	var computedS = 0;
	var computedV = 0;
   
	//remove spaces from input RGB values, convert to int
	var r = parseInt( (''+r).replace(/\s/g,''),10 ); 
	var g = parseInt( (''+g).replace(/\s/g,''),10 ); 
	var b = parseInt( (''+b).replace(/\s/g,''),10 ); 
   
	if ( r==null || g==null || b==null ||
		isNaN(r) || isNaN(g)|| isNaN(b) ) {
	  alert ('Please enter numeric RGB values!');
	  return;
	}
	if (r<0 || g<0 || b<0 || r>255 || g>255 || b>255) {
	  alert ('RGB values must be in the range 0 to 255.');
	  return;
	}
	r=r/255; g=g/255; b=b/255;
	var minRGB = Math.min(r,Math.min(g,b));
	var maxRGB = Math.max(r,Math.max(g,b));
   
	// Black-gray-white
	if (minRGB==maxRGB) {
	 computedV = minRGB;
	 return [0,0,computedV];
	}
   
	// Colors other than black-gray-white:
	var d = (r==minRGB) ? g-b : ((b==minRGB) ? r-g : b-r);
	var h = (r==minRGB) ? 3 : ((b==minRGB) ? 1 : 5);
	computedH = 60*(h - d/(maxRGB - minRGB));
	computedS = (maxRGB - minRGB)/maxRGB;
	computedV = maxRGB;
	return [computedH,computedS,computedV];
}

function RGBtoHSV(r, g, b) {
    if (arguments.length === 1) {
        g = r.g, b = r.b, r = r.r;
    }
    var max = Math.max(r, g, b), min = Math.min(r, g, b),
        d = max - min,
        h,
        s = (max === 0 ? 0 : d / max),
        v = max / 255;

    switch (max) {
        case min: h = 0; break;
        case r: h = (g - b) + d * (g < b ? 6: 0); h /= 6 * d; break;
        case g: h = (b - r) + d * 2; h /= 6 * d; break;
        case b: h = (r - g) + d * 4; h /= 6 * d; break;
    }

    return {
        h: h,
        s: s,
        v: v
    };
}

//Calculatergb2HSV

function HSVtoRGB(h, s, v) {
    var r, g, b, i, f, p, q, t;
    if (arguments.length === 1) {
        s = h.s, v = h.v, h = h.h;
    }
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);
    switch (i % 6) {
        case 0: r = v, g = t, b = p; break;
        case 1: r = q, g = v, b = p; break;
        case 2: r = p, g = v, b = t; break;
        case 3: r = p, g = q, b = v; break;
        case 4: r = t, g = p, b = v; break;
        case 5: r = v, g = p, b = q; break;
    }
	return [Math.round(r * 255),Math.round(g * 255),Math.round(b * 255)];
	// {
		
    //     r: Math.round(r * 255),
    //     g: Math.round(g * 255),
    //     b: Math.round(b * 255)
    // };
}






function rgb2hsl(rValue, gValue, bValue){
    var r1 = rValue / 255;
    var g1 = gValue / 255;
    var b1 = bValue / 255;
 
    var maxColor = Math.max(r1,g1,b1);
    var minColor = Math.min(r1,g1,b1);
	//Calculate L:
	
    var L = (maxColor + minColor) / 2 ;//最高顏色加最低顏色平均值取得亮度(L)
    var S = 0;
    var H = 0;
    if(maxColor != minColor){
        //Calculate S:
        if(L < 0.5){
            S = (maxColor - minColor) / (maxColor + minColor);
        }else{
            S = (maxColor - minColor) / (2.0 - maxColor - minColor);
        }
        //Calculate H:
        if(r1 == maxColor){
            H = (g1-b1) / (maxColor - minColor);
        }else if(g1 == maxColor){
            H = 2.0 + (b1 - r1) / (maxColor - minColor);
        }else{
            H = 4.0 + (r1 - g1) / (maxColor - minColor);
        }
    }
 
    L = L * 100;
    S = S * 100;
    H = H * 60;
    if(H<0){
        H += 360;
    }
    var result = [H, S, L];
    return result;
}
function hslToRgb(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}


function stringFormat() {
	if (arguments.length == 0)
		return null;
	var str = arguments[0];
	for (var i = 1; i < arguments.length; i++) {
		var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
		str = str.replace(re, arguments[i]);
	}
	return str;
}


String.prototype.format = function(args) {
    var result = this;
    if (arguments.length > 0) {    
        if (arguments.length == 1 && typeof (args) == "object") {
            for (var key in args) {
                if(args[key]!=undefined){
                    var reg = new RegExp("({" + key + "})", "g");
                    result = result.replace(reg, args[key]);
                }
            }
        }
        else {
            for (var i = 0; i < arguments.length; i++) {
                if (arguments[i] != undefined) {
                    //var reg = new RegExp("({[" + i + "]})", "g");//这个在索引大于9时会有问题
                    var reg = new RegExp("({)" + i + "(})", "g");
                    result = result.replace(reg, arguments[i]);
             }
          }
       }
   }
   return result;
}
