import { ColorModule } from '../Model/ColorModule';
//export var stopVar: any = [];
export class ModeParameter {
    LEDConcatenation: any = [true, true, false, false];
    syncConcatenation: any = [0, 0, 0, 0];
    speed: any = 3; // step
    bright: any = 4;//step
    dircetion: any = 1;//左1又2
    name: string;
    chooseGroup: any = 0;
    loopCount = 0;
    isSync = false;
    alpha = 1;
    colors: any;
    rainbowColors: any = ['#FF0000', '#FF7D00', '#FFFF00', '#00FF00', '#0000FF', '#00FFFF', '#FF00FF', '#FFFFFF'];//2種 第1種3顆跑步狀態 第2種地板顏色 [16 32]=3 [48 64 ]
    rainbow7Color() {
        return [[255, 0, 0, 1], [255, 165, 0, 1], [255, 255, 0, 1], [0, 255, 0, 1], [0, 127, 255, 1], [0, 0, 255, 1], [139, 0, 255, 1]];
    }
    getRandom(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    };
    constructor() {
    }
}
var effectBlockClass4 = ["Inner_Circle0", "Inner_Circle1", "Inner_Circle2", "Inner_Circle3"];
export class AL_EffectModule extends ModeParameter {
    effectBlockClass4 = ["Inner_Circle0", "Inner_Circle1", "Inner_Circle2", "Inner_Circle3"];
    onPlay: any = false;
    elementsName: any = "";
    stopVar: any = [];
    constructor(name = "") {
        super();
        this.elementsName = name;
    }
    stopAnimation(rangeMode) {
        this.onPlay = false;
        var TempName=this.elementsName;
        clearInterval(this.stopVar[TempName[0]]);
        clearInterval(this.stopVar[TempName[1]]);
        clearInterval(this.stopVar[TempName[2]]);

        // switch (rangeMode) {
        //     case 'Inner':
        //         clearInterval(this.stopVar[TempName[0]]);
        //         break;
        //     case 'Outer':
        //         clearInterval(this.stopVar[TempName[1]]);
        //         break;
        //     case 'OverAll':
        //         clearInterval(this.stopVar[TempName[0]]);
        //         clearInterval(this.stopVar[TempName[1]]);
        //         break;
        //     default:
        //         alert('stopAnimation error'+rangeMode);
        //         break;
        // }
        //clearInterval(this.stopVar[this.elementsName]);
    }
    stopAnimationAndClear(effectData) {
        this.onPlay = false;
        var ElementClass4=[]
        if(effectData.isSync){
            ElementClass4=effectBlockClass4;  
        }
        else{
            ElementClass4=[this.elementsName];
        }
        for (let index = 0; index < ElementClass4.length; index++) {
            var FGTArr = document.getElementsByClassName(ElementClass4[index]) as HTMLCollectionOf<HTMLElement>;
            for (let i2 = 0; i2 < FGTArr.length; i2++) {
                const element = FGTArr[i2];
                element.style.background = "Black";
            }
            clearInterval(this.stopVar[ElementClass4[index]]);
        }         
     
    }
    toCssRGB(RGBA = [0, 0, 0, 0]) {
        return 'rgb(' + RGBA[0] + ',' + RGBA[1] + ',' + RGBA[2] + ',' + RGBA[3] + ')';
    }
    toRadial_gradient(rgba,gradientValue){
        return 'radial-gradient('+this.toCssRGB(rgba)+' 10%,'+gradientValue+' 70%)';
        //return 'radial-gradient('+this.toCssRGB(rgba)+' 1%,'+this.toCssRGB(rgba)+' 50%)';
    }
    mode_Breath_Overall(effectData,rangeMode='Inner') {
        var TempName=this.elementsName;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays=effectData.colorArrays;
        var innerIndex=0;
        var outerIndex=0;
        var innerRainbowIndex = 0;
        var outerRainbowIndex = 0;
        var reInnerTempData = [];
        var reOuterTempData = [];
        var direction = 0;//0左1右
        for (let index = 1; index < innerArr.length+1; index++) {

            reInnerTempData.push({
                colors:colorArrays[innerIndex].getRGBA(),
                recordIndex: innerRainbowIndex,
                repeatTime: this.getRandom(5, 25),
                HTML_target: innerArr[index-1],
            });
            if (index % 8 == 0) {
                innerIndex+=1;
            }
            
        }
        for (let index = 1; index < outerArr.length + 1; index++) {
            reOuterTempData.push({
                colors: colorArrays[outerIndex].getRGBA(),
                recordIndex: outerRainbowIndex,
                repeatTime: this.getRandom(5, 25),
                HTML_target: outerArr[index - 1],
            });
            if (index % 12 == 0) {
                outerIndex += 1;
            }
        }
        if (rangeMode != "Outer") {
            var nowColor=[];
            var newColor=[];
            var repeatCount=0;
            var totalStep=255;
            var nowStep=0;
            this.stopVar[TempName[0]] = setInterval(() => {
                if(nowStep<totalStep){
                    nowStep+=5;
                }
                else{
                    nowStep=0;
                    repeatCount+=1;
                }
                for (let index = 0; index < reInnerTempData.length; index++) {
                    var data = reInnerTempData[index];
                    //var setRgba = this.rainbow7Color()[data.recordIndex];
                    if(repeatCount%2==1){
                        nowColor=[0,0,0,0];
                        newColor=JSON.parse(JSON.stringify(data.colors));
                    }
                    else{
                        nowColor=JSON.parse(JSON.stringify(data.colors));
                        newColor=[0,0,0,0];
                    }
                    var t_data = [0,0,0,1];
                    for (let i_step = 0; i_step < 4; i_step++) {
                        t_data[i_step] =(nowColor[i_step] * (totalStep - nowStep) + newColor[i_step] * nowStep) / totalStep;
                    }
                    
                    data.HTML_target.style.background =this.getColorEffectValue(t_data,0)
                    

                }

            }, effectData.repeatTime);
        }
        if (rangeMode != "Inner") {
            var nowColor=[];
            var newColor=[];
            var repeatCount=0;
            var totalStep=255;
            var nowStep=0;
            this.stopVar[TempName[1]] = setInterval(() => {
                if(nowStep<totalStep){
                    nowStep+=5;
                }
                else{
                    nowStep=0;
                    repeatCount+=1;
                }
                for (let index = 0; index < reOuterTempData.length; index++) {
                    var data = reOuterTempData[index];
                    var setRgba = this.rainbow7Color()[data.recordIndex];
                    if(repeatCount%2==1){
                        nowColor=[0,0,0,0];
                        newColor=JSON.parse(JSON.stringify(data.colors));
                    }
                    else{
                        nowColor=JSON.parse(JSON.stringify(data.colors));
                        newColor=[0,0,0,0];
                    }
                    var t_data = [0,0,0,1];
                    for (let i_step = 0; i_step < 4; i_step++) {
                        t_data[i_step] =(nowColor[i_step] * (totalStep - nowStep) + newColor[i_step] * nowStep) / totalStep;
                    }
                    
                    data.HTML_target.style.background =this.getColorEffectValue(t_data,1)
                    

                }

            }, effectData.repeatTime);
        }
        console.log('%c mode_Breath_Overall','color:rgb(255,77,255)',innerArr.length,outerArr.length,TempName,rangeMode);
    }
    mode_Breath_Colorful(effectData,Mode='Inner') {
        var TempName=this.elementsName;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var rainbowColorIndex = 0;
        var colorArrays=effectData.colorArrays;
        var innerIndex=0;
        var outerIndex=0;
        var reInnerTempData = [];
        var reOuterTempData = [];
        var direction = 0;//0左1右
        for (let index = 1; index < outerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex);
            reOuterTempData.push({
                colors:colorArrays[outerIndex].getRGBA(),
                recordIndex: rainbowColorIndex,
                repeatTime: this.getRandom(5, 25),
                HTML_target: outerArr[index-1],
            });
            if (index % 3 == 0) {
                if (outerIndex < 3) {
                    outerIndex += 1;
                }
                else {
                    outerIndex = 0;
                }
            }

        }
        var nowColor=[];
        var newColor=[];
        var repeatCount=0;
        var totalStep=255;
        var nowStep=0;
            this.stopVar[TempName[1]] = setInterval(() => {
                if(nowStep<totalStep){
                    nowStep+=5;
                }
                else{
                    nowStep=0;
                    repeatCount+=1;
                }
                for (let index = 0; index < reOuterTempData.length; index++) {
                    var data = reOuterTempData[index];
                    var setRgba = this.rainbow7Color()[data.recordIndex];
                    if(repeatCount%2==1){
                        nowColor=[0,0,0,0];
                        newColor=JSON.parse(JSON.stringify(data.colors));
                    }
                    else{
                        nowColor=JSON.parse(JSON.stringify(data.colors));
                        newColor=[0,0,0,0];
                    }
                    var t_data = [0,0,0,1];
                    for (let i_step = 0; i_step < 4; i_step++) {
                        t_data[i_step] =(nowColor[i_step] * (totalStep - nowStep) + newColor[i_step] * nowStep) / totalStep;
                    }
                    
                    data.HTML_target.style.background =this.getColorEffectValue(t_data,1)
                    

                }


            }, effectData.repeatTime);
        
        console.log('%c mode_Breath_Colorful','color:rgb(255,77,255)',reOuterTempData,innerArr.length,outerArr.length,TempName);
    }
    mode_Breathing_Rainbow(effectData,rangeMode='Inner') {
        var TempName=this.elementsName;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays=effectData.colorArrays;
        var innerIndex=0;
        var outerIndex=0;
        var innerRainbowIndex = 0;
        var outerRainbowIndex = 0;
        var reInnerTempData = [];
        var reOuterTempData = [];
        var direction = 0;//0左1右
        for (let index = 1; index < innerArr.length+1; index++) {

            reInnerTempData.push({
                colors:colorArrays[innerIndex].getRGBA(),
                recordIndex: innerRainbowIndex,
                HTML_target: innerArr[index-1],
            });
            if (index % 8 == 0) {
                //innerIndex+=1;
            }
            
        }
        for (let index = 1; index < outerArr.length + 1; index++) {
            reOuterTempData.push({
                colors: colorArrays[outerIndex].getRGBA(),
                recordIndex: outerRainbowIndex,
                HTML_target: outerArr[index - 1],
            });
            if (index % 12 == 0) {
               // outerIndex += 1;
            }
        }
        var setRgba = this.rainbow7Color();

        if (rangeMode != "Inner") {
            var outer_repeatCount=0;
            var outer_addCount=0;
            var totalStep=100;
            var outer_StartStep=0;
            var outer_SetColorindex=0;
            var o_nowColor;
            var o_newColor;
            this.stopVar[TempName[1]] = setInterval(() => {
                if(outer_repeatCount%2==0){
                    o_nowColor=JSON.parse(JSON.stringify(setRgba[outer_SetColorindex]));
                    o_newColor=[0,0,0,0];
                }
                else{
                    o_nowColor=[0,0,0,0];
                    o_newColor=JSON.parse(JSON.stringify(setRgba[outer_SetColorindex]));
                }
                for (let index = 0; index < reOuterTempData.length; index++) {
                    var data = reOuterTempData[index];
                    var t_data = [0,0,0,1];
                    //console.log('%c outer_StartStep','color:rgb(255,255,0)',t_data,outer_StartStep,totalStep);
                    for (let i_step = 0; i_step < 3; i_step++) {
                        t_data[i_step] =(o_nowColor[i_step] * (totalStep - outer_StartStep) + o_newColor[i_step] * outer_StartStep) / totalStep;
                    }
                    data.HTML_target.style.background =this.getColorEffectValue(t_data,1)         
                }
                if(outer_StartStep<totalStep){
                    outer_StartStep+=5;
                }
                else{
                    outer_StartStep=0;
                    outer_repeatCount+=1;
                    if(outer_SetColorindex<setRgba.length-1){
                        outer_SetColorindex+=1;
                    }
                    else{
                        outer_SetColorindex=0;
                    }
                }
            }, effectData.repeatTime);
        }
        //console.log('%c mode_Breathing_Rainbow','color:rgb(255,77,255)',innerArr.length,outerArr.length,TempName,rangeMode);
    }
    mode_Color_Cycle(effectData,Mode='Inner') {
        var TempName=this.elementsName;
        var innerArrGroupNum=8;
        var outerArrGroupNum=12;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays=effectData.colorArrays;
        var reInnerTempData = [];
        var InnerTempData4 = [];
        var innerColorsArray = [];
        var outerColorsArray = [];

        for (let c_2 = 0; c_2 < innerArrGroupNum; c_2++) {
            innerColorsArray.push(colorArrays[3].getRGBA());
        }
        if(effectData.dircetion==1){
            for (let index = 0; index < colorArrays.length-1; index++) {
                for (let c_2 = 0; c_2 < innerArrGroupNum; c_2++) {
                    innerColorsArray.push(colorArrays[index].getRGBA());
                }
            }
        }
        else{
            for (let index = colorArrays.length-1; index > -1; index--) {
                for (let c_2 = 0; c_2 < innerArrGroupNum; c_2++) {
                    innerColorsArray.push(colorArrays[index].getRGBA());
                }
            }
        }
        for (let c_2 = 0; c_2 < outerArrGroupNum; c_2++) {
            outerColorsArray.push(colorArrays[3].getRGBA());
        }
        if(effectData.dircetion==1){
            for (let index = 0; index < colorArrays.length-1; index++) {
                for (let c_2 = 0; c_2 < outerArrGroupNum; c_2++) {
                    outerColorsArray.push(colorArrays[index].getRGBA());
                }
            }
        }
        else{
            for (let index = colorArrays.length-1; index > -1; index--) {
                for (let c_2 = 0; c_2 < outerArrGroupNum; c_2++) {
                    outerColorsArray.push(colorArrays[index].getRGBA());
                }
            }
        }

        console.log('%c showColosArray','color:rgb(255,77,255)',innerColorsArray);

        for (let index = 1; index < innerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex,colorArrays[innerIndex].getRGBA());
            InnerTempData4.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: innerArr[index-1],
            });
            if (index % 8 == 0) {
                reInnerTempData.push(InnerTempData4);
                InnerTempData4=[];
                //innerIndex+=1;
            }
        }
        var outerTempData4 = [];
        var reOuterTempData = [];
        for (let index = 1; index < outerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex);
            outerTempData4.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: outerArr[index-1],
            });
            if (index % 12 == 0) {
                reOuterTempData.push(outerTempData4);
                outerTempData4=[];
            }
        }


        if (Mode != "Outer") {
            // for (let dindex = 0; dindex < reInnerTempData.length; dindex++) {
            //     var data = reInnerTempData[dindex];
            //     for (let i_index = 0; i_index < data.length; i_index++) {
            //         var HtmLdiv = data[i_index];
            //         HtmLdiv.HTML_target.style.background =this.getColorEffectValue(colorArrays[3].getRGBA(),0)
            //     }
            // }
            this.stopVar[TempName[0]] = setInterval(() => {               
                for (let dindex = 0; dindex < reInnerTempData.length; dindex++) {
                    var data = reInnerTempData[dindex];
                    for (let i_index = 0; i_index < data.length; i_index++) {
                        var HtmLdiv = data[i_index];
                        HtmLdiv.HTML_target.style.background =this.getColorEffectValue(innerColorsArray[i_index],0)
                    }
                }
                innerColorsArray=this.loopArrDisplacement(effectData.dircetion,innerColorsArray);
            }, effectData.repeatTime);
        }
        if (Mode != "Inner") {
            this.stopVar[TempName[1]] = setInterval(() => {               
                for (let dindex = 0; dindex < reOuterTempData.length; dindex++) {
                    var data = reOuterTempData[dindex];
                    for (let i_index = 0; i_index < data.length; i_index++) {
                        var HtmLdiv = data[i_index];
                        HtmLdiv.HTML_target.style.background =this.getColorEffectValue(outerColorsArray[i_index],1)
                    }
                }
                outerColorsArray=this.loopArrDisplacement(effectData.dircetion,outerColorsArray);
            }, effectData.repeatTime);
        }

        console.log('%c mode_Color_Cycle','color:rgb(255,77,255)',reOuterTempData,innerArr.length,outerArr.length,TempName);
    }
    mode_Runway(effectData,Mode='Inner') {
        var TempName = this.elementsName;
        var innerArrGroupNum = 4;
        var outerArrGroupNum = 6;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays = effectData.colorArrays;
        var reInnerTempData = [];
        var innerColorsArray = [];
        var outerColorsArray = [];
        for (let index = 1; index < innerArr.length+1; index++) {
            reInnerTempData.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: innerArr[index-1],
            });
            if(index-1<6){
                innerColorsArray.push(colorArrays[0].getRGBA());
            }
            else{
                innerColorsArray.push(colorArrays[1].getRGBA())
            }
        }
        console.log('%c reInnerTempData','color:rgb(255,77,255)',reInnerTempData);
        var reOuterTempData = [];
        for (let index = 1; index < outerArr.length+1; index++) {
            reOuterTempData.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: outerArr[index-1],
            });
            if(index-1<6){
                outerColorsArray.push(colorArrays[0].getRGBA());
            }
            else{
                outerColorsArray.push(colorArrays[1].getRGBA())
            }
        }
        effectData.dircetion=2;
        if (Mode != "Outer") {
            this.stopVar[TempName[0]] = setInterval(() => {
                innerColorsArray=this.loopArrDisplacement(effectData.dircetion,innerColorsArray);
                //var showArray=effectData.dircetion==1?JSON.parse(JSON.stringify(innerColorsArray)).reverse():innerColorsArray;
                for (let dindex = 0; dindex < reInnerTempData.length; dindex++) {
                    var data = reInnerTempData[dindex];
                    data.HTML_target.style.background = this.getColorEffectValue(innerColorsArray[dindex], 0)
                } 
            }, effectData.repeatTime);
        }
        if (Mode != "Inner") {
            this.stopVar[TempName[1]] = setInterval(() => {
                outerColorsArray=this.loopArrDisplacement(effectData.dircetion,outerColorsArray);
                //var showArray=effectData.dircetion==1?JSON.parse(JSON.stringify(outerColorsArray)).reverse():outerColorsArray;
                for (let dindex = 0; dindex < reOuterTempData.length; dindex++) {
                    var data = reOuterTempData[dindex];
                    data.HTML_target.style.background = this.getColorEffectValue(outerColorsArray[dindex], 1)
                } 
            }, effectData.repeatTime);
        }
        console.log('%c mode_Runway','color:rgb(255,77,255)',reOuterTempData,innerArr.length,outerArr.length,TempName);
    }
    mode_Stack(effectData,Mode='Inner') {
        var TempName=this.elementsName;
        var innerArrGroupNum=4;
        var outerArrGroupNum=6;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays=effectData.colorArrays;
        var reInnerTempData = [];
        var innerColorsArray = [];
        var outerColorsArray = [];
        //combination=innerColorsArray.concat(innerColorsArray2);
        for (let index = 1; index < innerArr.length+1; index++) {
            reInnerTempData.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: innerArr[index-1],
            });
            innerColorsArray.push(colorArrays[0].getRGBA());
        }
        console.log('%c reInnerTempData','color:rgb(255,77,255)',reInnerTempData);
      
        var outerTempData4 = [];
        var reOuterTempData = [];
        for (let index = 1; index < outerArr.length+1; index++) {
            reOuterTempData.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: outerArr[index-1],
            });
            outerColorsArray.push(colorArrays[0].getRGBA());
        }
        //console.log('%c showColosArray','color:rgb(255,77,255)',combination,outer_combination);
        if (Mode != "Outer") {
            this.stopVar[TempName[0]] = setInterval(() => {
                innerColorsArray = inner_loopArrDisplacement(innerColorsArray);
                var showArray=effectData.dircetion==1?JSON.parse(JSON.stringify(innerColorsArray)).reverse():innerColorsArray;
                for (let dindex = 0; dindex < reInnerTempData.length; dindex++) {
                    var data = reInnerTempData[dindex];
                    data.HTML_target.style.background = this.getColorEffectValue(showArray[dindex], 0)
                } 
            }, effectData.repeatTime);
        }
        if (Mode != "Inner") {
            this.stopVar[TempName[1]] = setInterval(() => {
                outerColorsArray = outer_loopArrDisplacement(outerColorsArray);
                var showArray=effectData.dircetion==1?JSON.parse(JSON.stringify(outerColorsArray)).reverse():outerColorsArray;
                for (let dindex = 0; dindex < reOuterTempData.length; dindex++) {
                    var data = reOuterTempData[dindex];
                    data.HTML_target.style.background = this.getColorEffectValue(showArray[dindex], 1)
                } 
            }, effectData.repeatTime);
        }
        var nowIndex = -1;
        var inner_TargetMax=32;
        function inner_loopArrDisplacement(Arr) {
            console.log('%c _this','color:rgb(255,77,255)',Arr);
            if (nowIndex == -1) {
                for (let index = 0; index <inner_TargetMax; index++) {
                    Arr[index] = colorArrays[0].getRGBA();
                }
                Arr[0] = colorArrays[1].getRGBA();
                nowIndex =0;
                console.log("repeat____==-1", nowIndex, inner_TargetMax,"colors[0]"+colorArrays[0].getRGBA());
            }
            if (nowIndex < inner_TargetMax-1) {
                var Temp = Arr[nowIndex + 1];
                Arr[nowIndex + 1] = Arr[nowIndex];
                Arr[nowIndex] = Temp;
                nowIndex += 1;
                console.log("repeat>>>>", nowIndex, inner_TargetMax);
            }
            else {
                inner_TargetMax<=0?inner_TargetMax=32:inner_TargetMax-= 1;
                nowIndex = -1;
                console.log("repeat<<<<", nowIndex, inner_TargetMax);
            }
            return Arr;
        }
        var outer_nowIndex = -1;
        var outer_TargetMax=64;
        function outer_loopArrDisplacement(Arr) {
            console.log('%c _this','color:rgb(255,77,255)',Arr);
            if (outer_nowIndex == -1) {
                for (let index = 0; index <outer_TargetMax; index++) {
                    Arr[index] = colorArrays[0].getRGBA();
                }
                Arr[0] = colorArrays[1].getRGBA();
                outer_nowIndex =0;
                console.log("repeat____==-1", outer_nowIndex, outer_TargetMax,"colors[0]"+colorArrays[0].getRGBA());
            }
            if (outer_nowIndex < outer_TargetMax-1) {
                var Temp = Arr[outer_nowIndex + 1];
                Arr[outer_nowIndex + 1] = Arr[outer_nowIndex];
                Arr[outer_nowIndex] = Temp;
                outer_nowIndex += 1;
                //console.log("repeat>>>>", outer_nowIndex, targetMax);
            }
            else {
                outer_TargetMax<=0?outer_TargetMax=64:outer_TargetMax-= 1;
                outer_nowIndex = -1;
                //console.log("repeat<<<<", outer_nowIndex, targetMax);
            }
            return Arr;
        }
        console.log('%c mode_Stack','color:rgb(255,77,255)',reOuterTempData,innerArr.length,outerArr.length,TempName);
    }
    mode_Wave(effectData,Mode='Inner') {
        var TempName=this.elementsName;
        var innerArrGroupNum=4;
        var outerArrGroupNum=6;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays=effectData.colorArrays;
        var reInnerTempData = [];
        var InnerTempData4 = [];
        var innerColorsArray = [];
        var outerColorsArray = [];
        for (let c_2 = 0; c_2 < 32; c_2++) {
            if(c_2<5){
                innerColorsArray.push(colorArrays[0].getRGBA());
            }
            else{
                innerColorsArray.push([0,0,0,0])
            }
        }
        //var T_2Check=[12,16,28,32];
        for (let index = 1; index < innerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex,colorArrays[innerIndex].getRGBA());
            InnerTempData4.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: innerArr[index-1],
            });
            if (index % 4 == 0) {
                if(index==12||index==16||index==28||index==32){
                    InnerTempData4=InnerTempData4.reverse();
                }            
                // for (let T_2 = 0; T_2 < T_2Check.length; index++) {
                //     if(index==T_2Check[T_2]){
                //         InnerTempData4=InnerTempData4.reverse();
                //     }                    
                // }
                reInnerTempData.push(InnerTempData4);
                InnerTempData4=[];
                //innerIndex+=1;
            }
        }
        var inner_Reorganization = [];
        var reorganizationSort=[0,3,4,7,6,5,2,1];
        for (let index = 0; index < reorganizationSort.length; index++) {
            var t_index=reorganizationSort[index];
            inner_Reorganization=inner_Reorganization.concat(reInnerTempData[t_index]);
        }
        console.log('%c reInnerTempData','color:rgb(255,77,255)',reInnerTempData,inner_Reorganization);


        for (let c_2 = 0; c_2 < 48; c_2++) {
            if(c_2<5){
                outerColorsArray.push(colorArrays[0].getRGBA());
            }
            else{
                outerColorsArray.push([0,0,0,0])
            }
        }
        var outerTempData4 = [];
        var reOuterTempData = [];
        for (let index = 1; index < outerArr.length+1; index++) {
            outerTempData4.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: outerArr[index-1],
            });
            if (index % 6 == 0) {
                if(index==18||index==24||index==42||index==48){
                    outerTempData4=outerTempData4.reverse();
                }  
                reOuterTempData.push(outerTempData4);
                outerTempData4=[];
            }
        }
        var outer_Reorganization = [];
        var reorganizationSort=[0,3,4,7,6,5,2,1];
        for (let index = 0; index < reorganizationSort.length; index++) {
            var t_index=reorganizationSort[index];
            outer_Reorganization=outer_Reorganization.concat(reOuterTempData[t_index]);

        }
        effectData.dircetion=2;
        //console.log('%c reOuterTempData','color:rgb(255,77,255)',reOuterTempData,outer_Reorganization);
        console.log('%c showColosArray','color:rgb(255,77,255)',innerColorsArray,outerColorsArray);
        if (Mode != "Outer") {
            this.stopVar[TempName[0]] = setInterval(() => {
                for (let dindex = 0; dindex < inner_Reorganization.length; dindex++) {
                    var data = inner_Reorganization[dindex];
                    data.HTML_target.style.background = this.getColorEffectValue(innerColorsArray[dindex], 0)
                }

                innerColorsArray = this.loopArrDisplacement(effectData.dircetion, innerColorsArray);
            }, effectData.repeatTime);
        }
        if (Mode != "Inner") {
            this.stopVar[TempName[1]] = setInterval(() => {
                for (let dindex = 0; dindex < outer_Reorganization.length; dindex++) {
                    var data = outer_Reorganization[dindex];
                    data.HTML_target.style.background = this.getColorEffectValue(outerColorsArray[dindex], 1)
                }
                outerColorsArray = this.loopArrDisplacement(effectData.dircetion, outerColorsArray);
    
            }, effectData.repeatTime);
        }
       

        console.log('%c mode_Wave','color:rgb(255,77,255)',reOuterTempData,innerArr.length,outerArr.length,TempName);
    }
    mode_Pac_Man(effectData,Mode='Inner') {
        var TempName = this.elementsName;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays = effectData.colorArrays;
        var reInnerTempData = [];
        var InnerTempData4 = [];
        var innerColorsArray = [];
        var innerColorsArray2 = [];
        var outerColorsArray = [];
        var outerColorsArray2 = [];
        var combination = [];
        var upArray;
        var downArray;
        var totalUPArray=this.totalInnerUpArray(4);
        var totalDownArray=this.totalInnerDownArray(4);
        function reset(){
            upArray =[];
            downArray = [];
            for (let index = 0; index < 4; index++) {
                upArray.push(0 + index * 8);
                downArray.push(7 + index * 8);
            }
        }

        
        // for (let index = 7; index > 4; index--) {
        // }
       var outer_combination=[];
        combination=innerColorsArray.concat(innerColorsArray2);
        for (let index = 1; index < innerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex,colorArrays[innerIndex].getRGBA());
            reInnerTempData.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: innerArr[index-1],
            })
        }
        // var inner_Reorganization = [];
        // var reorganizationSort=[0,2,4,6,7,5,3,1];
        // for (let index = 0; index < reorganizationSort.length; index++) {
        //     var t_index=reorganizationSort[index];
        //     inner_Reorganization=inner_Reorganization.concat(reInnerTempData[t_index]);

        // }
        //console.log('%c reInnerTempData','color:rgb(255,77,255)',reInnerTempData,inner_Reorganization);
        // for (let index = 0; index <colorArrays.length; index++) {
        //     for (let c_2 = 0; c_2 < 48; c_2++) {
        //      if(c_2<5){
        //          innerColorsArray.push(colorArrays[index].getRGBA());
        //      }
        //      else{
        //          innerColorsArray.push([0,0,0,0])
        //      }
        //  }
        // }
        //console.log('%c reOuterTempData','color:rgb(255,77,255)',reOuterTempData,outer_Reorganization);
        //console.log('%c showColosArray','color:rgb(255,77,255)',combination,outer_combination);
        reset();
        var animationStep=0;
        var posindex = 0;
        var step2={
            upValue:-1,
            downValue:0,
            loopCount:0,
            backConut:0,
            upBackConut:0,
            upstep:0,
        }
        var step3={
            upValue:-3,
            downValue:[7,6,5,4],
            loopCount:0,
            backConut:0,
            upBackConut:-1
        }
        this.stopVar[TempName[0]] = setInterval(() => {
            if(animationStep==0){
                for (let dindex = 0; dindex < upArray.length; dindex++) {
                    var data = reInnerTempData[upArray[dindex]];
                    data.HTML_target.style.background = this.getColorEffectValue(colorArrays[0].getRGBA(), 0)
                }
                for (let dindex = 0; dindex < downArray.length; dindex++) {
                    var data = reInnerTempData[downArray[dindex]];
                    data.HTML_target.style.background = this.getColorEffectValue(colorArrays[0].getRGBA(), 0)
                }
                if (posindex < 3) {
                    posindex += 1;
                    for (let index = 0; index < upArray.length; index++) {
                        upArray[index] += 1;
                        downArray[index] -= 1;
                    }
                }
                else {
                    posindex=0;
                    reset();
                    animationStep=1;
                }
            }
            if(animationStep==1){
                if (step2.loopCount <4) {
                    step2.upValue+= 1;
                    //step2.downValue-= 1;
                    step2.loopCount+=1;
                    reInnerTempData[totalUPArray[step2.upValue]].HTML_target.style.background = this.getColorEffectValue(colorArrays[1].getRGBA(), 0)

                }
                else {
                    // step2.upValue+= 1;
                    // step2.downValue-= 1;
                    // if(step2.backConut==2){
                    //     animationStep+=1;
                    // }

                    if (step2.backConut%2==0) {
                        //step2.upBackConut%3==0
                        console.log('%c step2.upBackConut%3','color:rgb(255,77,255)',step2.upBackConut%3);

                        if(step2.upBackConut%3==0){
                            reInnerTempData[totalUPArray[step2.upValue]].HTML_target.style.background =this.getColorEffectValue([0, 0, 0, 0], 0);
                            step2.upValue-= 1;
                        }
                        else{
                            step2.upValue+= 1;
                            reInnerTempData[totalUPArray[step2.upValue]].HTML_target.style.background = this.getColorEffectValue(colorArrays[1].getRGBA(), 0)
                        }
                        step2.upBackConut+=1;

                        // step2.backConut+=1;
                        //reInnerTempData[step2.downValue].HTML_target.style.background = this.getColorEffectValue([0, 0, 0, 0], 0)
                    }
                    else {
                        //reInnerTempData[step2.downValue].HTML_target.style.background = this.getColorEffectValue(colorArrays[1].getRGBA(), 0)
                    }        
                    //step2.backConut += 1;
                    // posindex=0;
                    // reset();
                    // animationStep+=1;
                }
            }
            if(animationStep==2){

                // for (let dindex = 0; dindex < totalUPArray.length; dindex++) {
                //     var data = reInnerTempData[upArray[dindex]];
                //     data.HTML_target.style.background = this.getColorEffectValue(colorArrays[0].getRGBA(), 0)
                // }
                // if(step3.loopCount<4){

                // }

            }

        console.log('%c mode_Tide','color:rgb(255,77,255)',step2);


        }, 1000);
        console.log('%c mode_Tide','color:rgb(255,77,255)',reInnerTempData,innerArr.length,outerArr.length,TempName);
    }
    
    mode_Tide(effectData,Mode='Inner') {
        var TempName = this.elementsName;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays = effectData.colorArrays;
        var reInnerTempData = [];
        var animationStep=0;
        var posindex = 0;
        for (let index = 1; index < innerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex,colorArrays[innerIndex].getRGBA());
            reInnerTempData.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: innerArr[index-1],
            })
        }
        var reOuterTempData = [];
        for (let index = 1; index < outerArr.length+1; index++) {
            reOuterTempData.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: outerArr[index-1],
            });
        }
        var totalInnerUpArray=this.totalInnerUpArray(4);
        var totalInnerDownArray=this.totalInnerDownArray(4);
        var totalOuterUpArray=this.totalOuterUpArray(4);
        var totalOuterDownArray=this.totalOuterDownArray(4);
        if (Mode != "Outer") {
            var step2={
                upValue:[-1,totalInnerUpArray.length],
                downValue:[-1,totalInnerUpArray.length],
                loopCount:0,
            }
            this.stopVar[TempName[0]] = setInterval(() => {
                if (animationStep == 0) {
                    if (step2.upValue[0] < totalInnerUpArray.length / 2 - 1) {
                        step2.upValue[0] += 1;
                        step2.upValue[1] -= 1;
                        step2.downValue[0] += 1;
                        step2.downValue[1] -= 1;
                        //console.log('%c mode_Tide', 'color:rgb(255,77,255)', step2.upValue[0]);  
                        var setcolor =colorArrays[step2.loopCount].getRGBA();
                        var data = reInnerTempData[totalInnerUpArray[step2.upValue[0]]];
                        data.HTML_target.style.background = this.getColorEffectValue(setcolor, 1)
                        var data = reInnerTempData[totalInnerUpArray[step2.upValue[1]]];
                        data.HTML_target.style.background = this.getColorEffectValue(setcolor, 1)
                        var data = reInnerTempData[totalInnerDownArray[step2.downValue[0]]];
                        data.HTML_target.style.background = this.getColorEffectValue(setcolor, 1)
                        var data = reInnerTempData[totalInnerDownArray[step2.downValue[1]]];
                        data.HTML_target.style.background = this.getColorEffectValue(setcolor, 1)
                    }
                    else {
                        step2.upValue = [-1, totalInnerUpArray.length];
                        step2.downValue = [-1, totalInnerDownArray.length];
                        if (step2.loopCount < 3) {
                            step2.loopCount += 1;
                        }
                        else {
                            step2.loopCount = 0;
                        }
                    }
                }
            }, effectData.repeatTime);
        }
        if (Mode != "Inner") {
            var I_step2={
                upValue:[-1,totalOuterUpArray.length],
                downValue:[-1,totalOuterDownArray.length],
                loopCount:0,
            }
            this.stopVar[TempName[1]] = setInterval(() => {
                if (animationStep == 0) {
                    if (I_step2.upValue[0] < totalOuterUpArray.length / 2 - 1) {
                        I_step2.upValue[0] += 1;
                        I_step2.upValue[1] -= 1;
                        I_step2.downValue[0] += 1;
                        I_step2.downValue[1] -= 1;
                        //console.log('%c mode_Tide', 'color:rgb(255,77,255)', I_step2.upValue[0]);  
                        var setcolor =colorArrays[I_step2.loopCount].getRGBA();
                        var data = reOuterTempData[totalOuterUpArray[I_step2.upValue[0]]];
                        data.HTML_target.style.background = this.getColorEffectValue(setcolor, 1)
                        var data = reOuterTempData[totalOuterUpArray[I_step2.upValue[1]]];
                        data.HTML_target.style.background = this.getColorEffectValue(setcolor, 1)
                        var data = reOuterTempData[totalOuterDownArray[I_step2.downValue[0]]];
                        data.HTML_target.style.background = this.getColorEffectValue(setcolor, 1)
                        var data = reOuterTempData[totalOuterDownArray[I_step2.downValue[1]]];
                        data.HTML_target.style.background = this.getColorEffectValue(setcolor, 1)
                    }
                    else {
                        I_step2.upValue = [-1, totalOuterUpArray.length];
                        I_step2.downValue = [-1, totalOuterDownArray.length];
                        if (I_step2.loopCount < 3) {
                            I_step2.loopCount += 1;
                        }
                        else {
                            I_step2.loopCount = 0;
                        }
                    }
                }
            }, effectData.repeatTime);
        }
        console.log('%c mode_Tide','color:rgb(255,77,255)',reInnerTempData,innerArr.length,outerArr.length,TempName,effectData.repeatTime);
    }
    mode_Mixing(effectData,Mode='Inner') {
        var TempName = this.elementsName;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays = effectData.colorArrays;
        var reInnerTempData = [];
        var posindex = 0;
        var fanUpNumber=4;
        for (let index = 1; index < innerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex,colorArrays[innerIndex].getRGBA());
            reInnerTempData.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: innerArr[index-1],
            })
        }

        var totalInnerUpArray=this.totalInnerUpArray(fanUpNumber);
        var totalInnerDownArray=this.totalInnerDownArray(fanUpNumber);
        var totalOuterUpArray=this.totalOuterUpArray(fanUpNumber);
        var totalOuterDownArray=this.totalOuterDownArray(fanUpNumber);
        if (Mode != "Outer") {
            var i_step={
                loopCount:0,
                loopDirection:0,
                tempUpArray:[],
                nowUpArray:[],
                setColor:colorArrays[0].getRGBA(),
                animationStep:0,
            }
            i_step.tempUpArray.push([0,0,0,0]);
            i_step.tempUpArray.push([0,0,0,0]);
            i_step.tempUpArray.push([0,0,0,0]);
            for (let index = 0; index < fanUpNumber*4/2; index++) {
                i_step.tempUpArray.push([0,0,0,0]);
            }
            var part=4;
            for (let index = 1; index <=part; index++) {
                i_step.tempUpArray.push(this.gerRGB_Alpha(i_step.setColor,index*1/part));
            }
            i_step.tempUpArray.push([0, 0, 0, 0]);
            i_step.tempUpArray.push([0, 0, 0, 0]);
            i_step.tempUpArray.push([0, 0, 0, 0]);
            i_step.nowUpArray=JSON.parse(JSON.stringify(i_step.tempUpArray));
            //i_step.tempUpArray=[];
            var i_step2 = {
                loopCount: 0,
                loopDirection: 0,
                tempUpArray: [],
                nowUpArray: [],
            }
            //var addColorindex=0;
            for (let index = 0; index < totalInnerUpArray.length/2; index++) {
                i_step2.tempUpArray.push([0, 0, 0, 0]);
            }
            var getColorMixing = this.getColorMixing([colorArrays[0].getRGBA(), colorArrays[1].getRGBA()]);
            for (let index = 0; index < totalInnerUpArray.length/2; index++) {
                i_step2.tempUpArray.push(getColorMixing);
            }
            i_step2.tempUpArray.push([0, 0, 0, 0]);
            i_step2.tempUpArray.push([0, 0, 0, 0]);
            i_step2.tempUpArray.push([0, 0, 0, 0]);
            i_step2.nowUpArray=JSON.parse(JSON.stringify(i_step2.tempUpArray));
            console.log('%c   i_step2.nowUpArray','color:rgb(255,77,255)',  i_step2.nowUpArray);

            //var _this=this;
            this.stopVar[TempName[0]] = setInterval(() => {
                if (i_step.animationStep == 0) {
                    if(i_step.loopDirection%2==0){
                        i_step.tempUpArray = this.loopArrDisplacement(2, i_step.tempUpArray);
                        if(i_step.loopCount>totalInnerUpArray.length/2+6){
                            i_step.loopCount=0;
                            i_step.loopDirection+=1;
                        }
                    }
                    else{
                        i_step.loopDirection=0;
                        i_step.tempUpArray=JSON.parse(JSON.stringify(i_step.nowUpArray));
                        i_step.animationStep=1;
                    }
                    for (let index = 0; index < totalInnerUpArray.length/2; index++) {
                        var data = reInnerTempData[totalInnerUpArray[index]];
                        data.HTML_target.style.background = this.getColorEffectValue(i_step.tempUpArray[index], 1)
                        var data = reInnerTempData[totalInnerDownArray[index]];
                        data.HTML_target.style.background = this.getColorEffectValue(i_step.tempUpArray[index], 1)
                    }
                    var rightUpArr=JSON.parse(JSON.stringify(totalInnerUpArray)).reverse();
                    var rightDownArr=JSON.parse(JSON.stringify(totalInnerDownArray)).reverse();
                    for (let index = 0; index < totalInnerUpArray.length/2; index++) {
                        var set_C=colorArrays[1].getRGBA();
                        if(i_step.tempUpArray[index]!=[0,0,0,0]){
                            set_C[3]=i_step.tempUpArray[index][3];
                        }
                        else{
                            set_C=[0,0,0,0];
                        }
                        var data = reInnerTempData[rightUpArr[index]];
                        data.HTML_target.style.background = this.getColorEffectValue(set_C, 1)
                        var data = reInnerTempData[rightDownArr[index]];
                        data.HTML_target.style.background = this.getColorEffectValue(set_C, 1)
                    }
                    i_step.loopCount+=1;
                    // if( i_step.loopCount>5)
                    // clearInterval(this.stopVar[TempName[0]]);

                }
                else{
                    if(i_step2.loopDirection%2==0){
                        i_step2.tempUpArray = this.loopArrDisplacement(1, i_step2.tempUpArray);
                        //i_step2.tempUpArray = this.loopArrDisplacement(1, i_step2.tempUpArray);
                        if(i_step2.loopCount>totalInnerUpArray.length){
                            i_step2.loopCount=0;
                            i_step2.loopDirection+=1;
                        }
                    }
                    else{
                        i_step2.loopDirection=0;
                        i_step2.tempUpArray=JSON.parse(JSON.stringify(i_step2.nowUpArray));
                        i_step.animationStep=0;
                    }
                    var rightUpArr=JSON.parse(JSON.stringify(totalInnerUpArray)).reverse();
                    var rightDownArr=JSON.parse(JSON.stringify(totalInnerDownArray)).reverse();
                    for (let index = 0; index < totalInnerUpArray.length/2; index++) {
                        var data = reInnerTempData[totalInnerUpArray[index]];
                        data.HTML_target.style.background = this.getColorEffectValue(i_step2.tempUpArray[index], 1)
                        var data = reInnerTempData[totalInnerDownArray[index]];
                        data.HTML_target.style.background = this.getColorEffectValue(i_step2.tempUpArray[index], 1)
                        var data = reInnerTempData[rightUpArr[index]];
                        data.HTML_target.style.background = this.getColorEffectValue(i_step2.tempUpArray[index], 1)
                        var data = reInnerTempData[rightDownArr[index]];
                        data.HTML_target.style.background = this.getColorEffectValue(i_step2.tempUpArray[index], 1)
                    }
                    i_step2.loopCount+=1;
                }
                console.log('%c mode_Mixing','color:rgb(255,77,255)',i_step,TempName,effectData.repeatTime);
            }, effectData.repeatTime);

        }
        var reOuterTempData = [];
        for (let index = 1; index < outerArr.length+1; index++) {
            reOuterTempData.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: outerArr[index-1],
            });
        }
        if (Mode != "Inner") {
            var o_Step={
                loopCount:0,
                loopDirection:0,
                tempUpArray:[],
                nowUpArray:[],
                setColor:colorArrays[0].getRGBA(),
                animationStep:0,
            }
            o_Step.tempUpArray.push([0,0,0,0]);
            o_Step.tempUpArray.push([0,0,0,0]);
            o_Step.tempUpArray.push([0,0,0,0]);
            for (let index = 0; index < fanUpNumber*12/2; index++) {
                o_Step.tempUpArray.push([0,0,0,0]);
            }
            var part=6;
            for (let index = 1; index <= part; index++) {
                o_Step.tempUpArray.push(this.gerRGB_Alpha(o_Step.setColor,index*1/part));
            }
            o_Step.tempUpArray.push([0, 0, 0, 0]);
            o_Step.tempUpArray.push([0, 0, 0, 0]);
            o_Step.tempUpArray.push([0, 0, 0, 0]);
            o_Step.nowUpArray=JSON.parse(JSON.stringify(o_Step.tempUpArray));
            //o_Step.tempUpArray=[];
            var o_Step2 = {
                loopCount: 0,
                loopDirection: 0,
                tempUpArray: [],
                nowUpArray: [],
            }
            //var addColorindex=0;       
            for (let index = 0; index < fanUpNumber * 12 / 4; index++) {
                o_Step2.tempUpArray.push([0, 0, 0, 0]);
            }
            var getColorMixing = this.getColorMixing([colorArrays[0].getRGBA(), colorArrays[1].getRGBA()]);
            for (let index = 0; index < fanUpNumber * 12 / 4; index++) {
                o_Step2.tempUpArray.push(getColorMixing);
            }
            o_Step2.tempUpArray.push([0, 0, 0, 0]);
            o_Step2.tempUpArray.push([0, 0, 0, 0]);
            o_Step2.tempUpArray.push([0, 0, 0, 0]);
            // for (let index = 0; index < fanUpNumber * 12 / 2; index++) {
            //     o_Step2.tempUpArray.push([0, 0, 0, 0]);
            // }
            o_Step2.nowUpArray=JSON.parse(JSON.stringify(o_Step2.tempUpArray));
            this.stopVar[TempName[1]] = setInterval(() => {
                if (o_Step.animationStep == 0) {
                    if(o_Step.loopDirection%2==0){
                        o_Step.tempUpArray = this.loopArrDisplacement(2, o_Step.tempUpArray);
                        if(o_Step.loopCount>totalOuterUpArray.length/2+6){
                            o_Step.loopCount=0;
                            o_Step.loopDirection+=1;
                        }
                    }
                    else{
                        o_Step.loopDirection=0;
                        o_Step.tempUpArray=JSON.parse(JSON.stringify(o_Step.nowUpArray));
                        o_Step.animationStep=1;
                    }
                    for (let index = 0; index < totalOuterUpArray.length/2; index++) {
                        console.log('%c  o_Step.tempUpArray','color:rgb(255,77,255)', o_Step.tempUpArray[index]);

                        var data = reOuterTempData[totalOuterUpArray[index]];
                        data.HTML_target.style.background = this.getColorEffectValue(o_Step.tempUpArray[index], 1)
                        var data = reOuterTempData[totalOuterDownArray[index]];
                        data.HTML_target.style.background = this.getColorEffectValue(o_Step.tempUpArray[index], 1)
                    }
                    var rightUpArr=JSON.parse(JSON.stringify(totalOuterUpArray)).reverse();
                    var rightDownArr=JSON.parse(JSON.stringify(totalOuterDownArray)).reverse();
                    for (let index = 0; index < totalOuterUpArray.length/2; index++) {
                        var set_C=colorArrays[1].getRGBA();
                        if(o_Step.tempUpArray[index]!=[0,0,0,0]){
                            set_C[3]=o_Step.tempUpArray[index][3];
                        }
                        else{
                            set_C=[0,0,0,0];
                        }
                        var data = reOuterTempData[rightUpArr[index]];
                        data.HTML_target.style.background = this.getColorEffectValue(set_C, 1)
                        var data = reOuterTempData[rightDownArr[index]];
                        data.HTML_target.style.background = this.getColorEffectValue(set_C, 1)
                    }
                    o_Step.loopCount+=1;
                }
                else{
                    if(o_Step2.loopDirection%2==0){
                        o_Step2.tempUpArray = this.loopArrDisplacement(1, o_Step2.tempUpArray);
                        //o_Step2.tempUpArray = this.loopArrDisplacement(1, o_Step2.tempUpArray);
                        if(o_Step2.loopCount>totalOuterUpArray.length){
                            o_Step2.loopCount=0;
                            o_Step2.loopDirection+=1;
                        }
                    }
                    else{
                        o_Step2.loopDirection=0;
                        o_Step2.tempUpArray=JSON.parse(JSON.stringify(o_Step2.nowUpArray));
                        o_Step.animationStep=0;
                    }
                    var rightUpArr=JSON.parse(JSON.stringify(totalOuterUpArray)).reverse();
                    var rightDownArr=JSON.parse(JSON.stringify(totalOuterDownArray)).reverse();
                    for (let index = 0; index < totalOuterUpArray.length/2; index++) {
                        var data = reOuterTempData[totalOuterUpArray[index]];
                        data.HTML_target.style.background = this.getColorEffectValue(o_Step2.tempUpArray[index], 1)
                        var data = reOuterTempData[totalOuterDownArray[index]];
                        data.HTML_target.style.background = this.getColorEffectValue(o_Step2.tempUpArray[index], 1)
                        var data = reOuterTempData[rightUpArr[index]];
                        data.HTML_target.style.background = this.getColorEffectValue(o_Step2.tempUpArray[index], 1)
                        var data = reOuterTempData[rightDownArr[index]];
                        data.HTML_target.style.background = this.getColorEffectValue(o_Step2.tempUpArray[index], 1)
                    }

                    o_Step2.loopCount+=1;
                }
            }, effectData.repeatTime);
        }
        //console.log('%c mode_Mixing','color:rgb(255,77,255)',i_step,TempName,effectData.repeatTime);
    }


    getColorMixing(RGBAList=[]){

        var RGBAMixing=[0,0,0,1];
        for (let index = 0; index < RGBAList.length; index++) {
            const element = RGBAList[index];
            RGBAMixing[0]+=element[0];
            RGBAMixing[1]+=element[1];
            RGBAMixing[2]+=element[2];
        }
        console.log('%c RGBAMixing','color:rgb(255,77,255)',RGBAMixing,RGBAList);

        for (let index = 0; index < RGBAMixing.length-1; index++) {
            const element = RGBAMixing[index];
            RGBAMixing[index]=RGBAMixing[index]/RGBAMixing.length;
        }
        return RGBAMixing;
    }
    mode_Scan(effectData,Mode='Inner') {
        var TempName = this.elementsName;
        var animationStep=0;
        var posindex = 0;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays = effectData.colorArrays;
        var reInnerTempData = [];
        for (let index = 1; index < innerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex,colorArrays[innerIndex].getRGBA());
            reInnerTempData.push({
                colors:colorArrays[0].getRGBA(),
                HTML_target: innerArr[index-1],
            })
        }
        var reOuterTempData = [];
        for (let index = 1; index < outerArr.length+1; index++) {
            reOuterTempData.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: outerArr[index-1],
            });
        }
        var fanUpNumber=4;
        var totalInnerUpArray=this.totalInnerUpArray(4);
        var totalInnerDownArray=this.totalInnerDownArray(4);
        var totalOuterUpArray=this.totalOuterUpArray(4);
        var totalOuterDownArray=this.totalOuterDownArray(4);

        for (let index = 1; index < totalInnerUpArray.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex,colorArrays[innerIndex].getRGBA());
            reInnerTempData.push({
                colors:colorArrays[0].getRGBA(),
                HTML_target: innerArr[index-1],
            })
        }
        var loopCount=0;
        var loopDirection=0;
        if (Mode != "Outer") {
            var i_step={
                loopCount:0,
                loopDirection:0,
                tempUpArray:[],
            }
            var setColor=colorArrays[0].getRGBA();
            i_step.tempUpArray.push([0,0,0,0]);
            i_step.tempUpArray.push([0,0,0,0]);
            i_step.tempUpArray.push([0,0,0,0]);
            for (let index = 0; index < fanUpNumber*8/2; index++) {
                i_step.tempUpArray.push([0,0,0,0]);
            }
            i_step.tempUpArray.push(this.gerRGB_Alpha(setColor,0.25));
            i_step.tempUpArray.push(this.gerRGB_Alpha(setColor,0.5));
            i_step.tempUpArray.push(this.gerRGB_Alpha(setColor,0.75));
            i_step.tempUpArray.push(this.gerRGB_Alpha(setColor,1));
            i_step.tempUpArray.push([0,0,0,0]);
            i_step.tempUpArray.push([0,0,0,0]);
            i_step.tempUpArray.push([0,0,0,0]);
            this.stopVar[TempName[0]] = setInterval(() => {
                if(i_step.loopDirection%2==0){
                    i_step.tempUpArray = this.loopArrDisplacement(2, i_step.tempUpArray);
                    if(i_step.loopCount>totalInnerUpArray.length+6){
                        i_step.loopCount=0;
                        i_step.loopDirection+=1;
                    }
                }
                else{
                    i_step.tempUpArray = this.loopArrDisplacement(1, i_step.tempUpArray);
                    if(i_step.loopCount>totalInnerUpArray.length+6){
                        i_step.loopCount=0;
                        i_step.loopDirection+=1;
                    }
                }

                for (let index = 0; index < totalInnerUpArray.length; index++) {
                    var data = reInnerTempData[totalInnerUpArray[index]];
                    data.HTML_target.style.background = this.getColorEffectValue(i_step.tempUpArray[index], 1)
                }
                for (let index = 0; index < totalInnerDownArray.length; index++) {
                    var data = reInnerTempData[totalInnerDownArray[index]];
                    data.HTML_target.style.background = this.getColorEffectValue(i_step.tempUpArray[index], 1)
                }
                i_step.loopCount+=1;
            }, effectData.repeatTime);
        }
        if (Mode != "Inner") {
            var o_step={
                loopCount:0,
                loopDirection:0,
                tempUpArray:[],
            }
            var setColor=colorArrays[0].getRGBA();
            o_step.tempUpArray.push([0,0,0,0]);
            o_step.tempUpArray.push([0,0,0,0]);
            o_step.tempUpArray.push([0,0,0,0]);
            for (let index = 0; index < fanUpNumber*12/2; index++) {
                o_step.tempUpArray.push([0,0,0,0]);
            }
            for (let index = 1; index < 6; index++) {
                o_step.tempUpArray.push(this.gerRGB_Alpha(setColor,index*1/6));
            }
            o_step.tempUpArray.push([0,0,0,0]);
            o_step.tempUpArray.push([0,0,0,0]);
            o_step.tempUpArray.push([0,0,0,0]);
            this.stopVar[TempName[1]] = setInterval(() => {
                if(o_step.loopDirection%2==0){
                    o_step.tempUpArray = this.loopArrDisplacement(2, o_step.tempUpArray);
                    if(o_step.loopCount>totalOuterUpArray.length+6){
                        o_step.loopCount=0;
                        o_step.loopDirection+=1;
                    }
                }
                else{
                    o_step.tempUpArray = this.loopArrDisplacement(1, o_step.tempUpArray);
                    if(o_step.loopCount>totalOuterUpArray.length+6){
                        o_step.loopCount=0;
                        o_step.loopDirection+=1;
                    }
                }

                for (let index = 0; index < totalOuterUpArray.length; index++) {
                    var data = reOuterTempData[totalOuterUpArray[index]];
                    data.HTML_target.style.background = this.getColorEffectValue(o_step.tempUpArray[index], 1)
                }
                for (let index = 0; index < totalOuterDownArray.length; index++) {
                    var data = reOuterTempData[totalOuterDownArray[index]];
                    data.HTML_target.style.background = this.getColorEffectValue(o_step.tempUpArray[index], 1)
                }
                o_step.loopCount+=1;
            }, effectData.repeatTime);
        }
        console.log('%c mode_Tide','color:rgb(255,77,255)',reInnerTempData,innerArr.length,outerArr.length,TempName,effectData.repeatTime);
    }
    mode_tornado(effectData,Mode='Inner') {
        var TempName=this.elementsName;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays=effectData.colorArrays;
        var reInnerTempData = [];
        var InnerTempData4 = [];
        for (let index = 1; index < innerArr.length+1; index++) {
            InnerTempData4.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: innerArr[index-1],
            });
            if (index % 8 == 0) {
                reInnerTempData.push(InnerTempData4);
                InnerTempData4=[];
            }
        }
        var outerTempData4 = [];
        var reOuterTempData = [];
        for (let index = 1; index < outerArr.length+1; index++) {
            outerTempData4.push({
                colors:colorArrays[0].getRGBA(),
                HTML_target: outerArr[index-1],
            });
            if (index % 12 == 0) {
                reOuterTempData.push(outerTempData4);
                outerTempData4=[];
            }
        }
        var mixingTempData=[];
        for (let index = 0; index < reInnerTempData.length; index++) {
            var reorganizationData= reInnerTempData[index].concat(reOuterTempData[index]);
            reorganizationData=effectData.dircetion==1?reorganizationData.reverse():reorganizationData;
            mixingTempData.push(reorganizationData);
        }
        console.log('%c mode_tornado_mixingTempData','color:rgb(255,77,255)',mixingTempData);
        var innerNowindex=0;
        var min_maxValue=[0,7];  
        var colorLength = colorArrays.length;
        var maxValue = 5;
        var nowColorConunt = 0;
        var nowRangeConunt = 0;
        //mixingTempData=effectData.dircetion==1?mixingTempData.reverse():mixingTempData;
        console.log('%c mixingTempData', 'color:rgb(255,77,255)', mixingTempData);

        this.stopVar[TempName[2]] = setInterval(() => {
            var setPos;
            if (nowRangeConunt % 2 == 0) {
                maxValue = 5;
                setPos = Math.round(innerNowindex * 8 / maxValue);
            }
            else {
                maxValue = 5;
                setPos = Math.round((innerNowindex) * 12 / maxValue) + 8;
                //setPos+=8;
            }
            var setColor = colorArrays[nowColorConunt % colorLength].getRGBA();
            //console.log('%c data_4', 'color:rgb(255,77,255)', nowColorConunt % colorLength, setPos, setColor);
            for (let dindex = 0; dindex < mixingTempData.length; dindex++) {
                var data_4 = mixingTempData[dindex];
                for (let index_20 = 0; index_20 < data_4.length; index_20++) {
                    var data_4_20 = data_4[index_20];
                    if (nowRangeConunt % 2 == 0) {
                        if (index_20 <= setPos) {
                            data_4_20.HTML_target.style.background = this.getColorEffectValue(setColor, 0)
                        }
                    }
                    else {
                        if (index_20 <= setPos && index_20 > 7) {
                            data_4_20.HTML_target.style.background = this.getColorEffectValue(setColor, 0)
                        }
                    }
                }
            }
            if (innerNowindex < maxValue) {
                innerNowindex += 1;
            }
            else {
                innerNowindex = 0;
                nowRangeConunt += 1;
                if (nowRangeConunt % 2 == 0) {
                    nowColorConunt += 1;
                }

            }

        }, effectData.repeatTime);

        console.log('%c mode_tornado','color:rgb(255,77,255)',reOuterTempData,innerArr.length,outerArr.length,TempName);
    }
    totalOuterUpArray(fanNnmber=1){
        var totalOuterUpArray;
        totalOuterUpArray =[];
        var fanCountValue=0;
        for (let f_index = 0; f_index < fanNnmber; f_index++) {           
            for (let index = 0; index < 6; index++) {
                totalOuterUpArray.push(index + f_index * 12);
            }
        }
        console.log('%c totalOuterUpArray','color:rgb(255,77,255)',totalOuterUpArray);
        return totalOuterUpArray;
    }
    totalOuterDownArray(fanNnmber=1){
        var totalOuterDownArray =[];
        var fanCountValue=0;
        for (let f_index = 0; f_index < fanNnmber; f_index++) {           
            for (let index = 11; index > 5; index--) {
                totalOuterDownArray.push(index + f_index * 12);
            }
        }
        console.log('%c totalOuterDownArray','color:rgb(255,77,255)',totalOuterDownArray);
        return totalOuterDownArray;
    }
    totalInnerUpArray(fanNnmber=1){
        var totalInnerUpArray;
        totalInnerUpArray =[];
        var fanCountValue=0;
        for (let f_index = 0; f_index < fanNnmber; f_index++) {           
            for (let index = 0; index < 4; index++) {
                totalInnerUpArray.push(index + f_index * 8);
            }
        }
        console.log('%c totalUPArray','color:rgb(255,77,255)',totalInnerUpArray);
        return totalInnerUpArray;
    }
    totalInnerDownArray(fanNnmber=1){
        var totalInnerDownArray =[];
        var fanCountValue=0;
        for (let f_index = 0; f_index < fanNnmber; f_index++) {           
            for (let index = 7; index > 3; index--) {
                totalInnerDownArray.push(index + f_index * 8);
            }
        }
        console.log('%c totalDownArray','color:rgb(255,77,255)',totalInnerDownArray);
        return totalInnerDownArray;
    }
    gerRGB_Alpha(RGBA=[0,0,0,1],magnification=0.5){
        var tempRGBA=JSON.parse(JSON.stringify(RGBA));
        tempRGBA[3]=magnification;
        return tempRGBA;
    }
    mode_Spring(effectData,Mode='Inner') {
        var TempName=this.elementsName;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays=effectData.colorArrays;
        var reInnerTempData = [];
        var InnerTempData4 = [];
        var innerColorsArray = [];
        var innerColorsArray2 = [];
        var outerColorsArray = [];
        var outerColorsArray2 = [];

       var combination=[];
       var outer_combination=[];
       for (let index = 0; index <colorArrays.length; index++) {
           for (let c_2 = 0; c_2 < 32; c_2++) {
            if(c_2<5){
                innerColorsArray.push(colorArrays[index].getRGBA());
            }
            else{
                innerColorsArray.push([0,0,0,0])
            }
        }
       }
        combination=innerColorsArray.concat(innerColorsArray2);
        for (let index = 1; index < innerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex,colorArrays[innerIndex].getRGBA());
            InnerTempData4.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: innerArr[index-1],
            });
            if (index % 4 == 0) {
                reInnerTempData.push(InnerTempData4);
                InnerTempData4=[];
                //innerIndex+=1;
            }
        }
        var inner_Reorganization = [];
        var reorganizationSort=[0,2,4,6,7,5,3,1];

        for (let index = 0; index < reorganizationSort.length; index++) {
            var t_index=reorganizationSort[index];
            inner_Reorganization=inner_Reorganization.concat(reInnerTempData[t_index]);

        }
        console.log('%c reInnerTempData','color:rgb(255,77,255)',reInnerTempData,inner_Reorganization);
        for (let index = 0; index <colorArrays.length; index++) {
            for (let c_2 = 0; c_2 < 48; c_2++) {
             if(c_2<5){
                 innerColorsArray.push(colorArrays[index].getRGBA());
             }
             else{
                 innerColorsArray.push([0,0,0,0])
             }
         }
        }
        outer_combination=outerColorsArray.concat(outerColorsArray2);
        var outerTempData4 = [];
        var reOuterTempData = [];
        for (let index = 1; index < outerArr.length+1; index++) {
            outerTempData4.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: outerArr[index-1],
            });
            if (index % 6 == 0) {
                reOuterTempData.push(outerTempData4);
                outerTempData4=[];
            }
        }
        var outer_Reorganization = [];
        var reorganizationSort=[0,2,4,6,7,5,3,1];
        for (let index = 0; index < reorganizationSort.length; index++) {
            var t_index=reorganizationSort[index];
            outer_Reorganization=outer_Reorganization.concat(reOuterTempData[t_index]);

        }
        //console.log('%c reOuterTempData','color:rgb(255,77,255)',reOuterTempData,outer_Reorganization);

        console.log('%c showColosArray','color:rgb(255,77,255)',combination,outer_combination);
        if (Mode != "Outer") {
            this.stopVar[TempName[0]] = setInterval(() => {
                for (let dindex = 0; dindex < inner_Reorganization.length; dindex++) {
                    var data = inner_Reorganization[dindex];
                    data.HTML_target.style.background = this.getColorEffectValue(combination[dindex], 0)
                }
                innerColorsArray = this.loopArrDisplacement(effectData.dircetion, combination);
            }, effectData.repeatTime);
        }
        if (Mode != "Inner") {
            this.stopVar[TempName[1]] = setInterval(() => {
                for (let dindex = 0; dindex < outer_Reorganization.length; dindex++) {
                    var data = outer_Reorganization[dindex];
                    data.HTML_target.style.background = this.getColorEffectValue(outer_combination[dindex], 1)
                }
                outerColorsArray = this.loopArrDisplacement(effectData.dircetion, outer_combination);
    
            }, effectData.repeatTime);
        }
       

        console.log('%c mode_Spring','color:rgb(255,77,255)',reOuterTempData,innerArr.length,outerArr.length,TempName);
    }
    mode_Meteor(effectData,Mode='Inner') {
        var TempName=this.elementsName;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays=effectData.colorArrays;
        var reInnerTempData = [];
        var InnerTempData4 = [];
        for (let index = 1; index < innerArr.length+1; index++) {
            InnerTempData4.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: innerArr[index-1],
            });
            if (index % 8 == 0) {
                reInnerTempData.push(InnerTempData4);
                InnerTempData4=[];
            }
        }
        var outerTempData4 = [];
        var reOuterTempData = [];
        for (let index = 1; index < outerArr.length+1; index++) {
            outerTempData4.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: outerArr[index-1],
            });
            if (index % 12 == 0) {
                reOuterTempData.push(outerTempData4);
                outerTempData4=[];
            }
        }
        var innerNowindex=-1;
        var innerNowCount=0;

        if (Mode != "Outer") {
            if(effectData.dircetion==2){
                innerNowindex=-1;
            }
            else{
                innerNowindex=9;
            }
            this.stopVar[TempName[0]] = setInterval(() => {
                if(effectData.dircetion==2){
                    if(innerNowindex<9){
                        innerNowindex+=1;    
                    }
                    else{
                        innerNowindex=-1;
                    }
                }
                else{
                    if(innerNowindex>-1){
                        innerNowindex-=1;    
                    }
                    else{
                        innerNowindex=9;
                    }
                }

                for (let dindex = 0; dindex < reInnerTempData.length; dindex++) {
                    var data_4=reInnerTempData[dindex];
                    for (let index = 0; index < data_4.length; index++) {
                        //var setTarget = data_4[index];
                        if(index==innerNowindex){
                            data_4[index].HTML_target.style.background = this.getColorEffectValue(colorArrays[dindex].getRGBA(), 0)
                        }
                        else{
                            data_4[index].HTML_target.style.background = this.getColorEffectValue([0,0,0,0], 0)
                        }
                    }
                }
            }, effectData.repeatTime);
        }
        var outerNowindex=-1;
        var outerNowCount=0;
        if (Mode != "Inner") {
            if(effectData.dircetion==2){
                outerNowindex=-1;
            }
            else{
                outerNowindex=9;
            }
            this.stopVar[TempName[1]] = setInterval(() => {
                if(effectData.dircetion==2){
                    if(outerNowindex<9){
                        outerNowindex+=1;    
                    }
                    else{
                        outerNowindex=-1;
                    }
                }
                else{
                    if(outerNowindex>-1){
                        outerNowindex-=1;    
                    }
                    else{
                        outerNowindex=9;
                    }
                }        
                for (let dindex = 0; dindex < reOuterTempData.length; dindex++) {
                    var data_4=reOuterTempData[dindex];
                    for (let index = 0; index < data_4.length; index++) {
                        //var setTarget = data_4[index];
                        if(index==outerNowindex){
                            data_4[index].HTML_target.style.background = this.getColorEffectValue(colorArrays[dindex].getRGBA(), 1)
                        }
                        else{
                            data_4[index].HTML_target.style.background = this.getColorEffectValue([0,0,0,0], 1)
                        }
                    }
                }
    
            }, effectData.repeatTime);
        }
        console.log('%c mode_Meteor','color:rgb(255,77,255)',reOuterTempData,innerArr.length,outerArr.length,TempName);
    }
    mode_Meteor_Rainbow(effectData,Mode='Inner') {
        var TempName=this.elementsName;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays=effectData.colorArrays;
        var reInnerTempData = [];
        var InnerTempData4 = [];
        for (let index = 1; index < innerArr.length+1; index++) {
            InnerTempData4.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: innerArr[index-1],
            });
            if (index % 8 == 0) {
                reInnerTempData.push(InnerTempData4);
                InnerTempData4=[];
            }
        }
        var outerTempData4 = [];
        var reOuterTempData = [];
        for (let index = 1; index < outerArr.length+1; index++) {
            outerTempData4.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: outerArr[index-1],
            });
            if (index % 12 == 0) {
                reOuterTempData.push(outerTempData4);
                outerTempData4=[];
            }
        }
        var innerNowindex=-1;
        var innerNowCount=0;

        var innerRainbowIndex=0;
        if (Mode != "Outer") {
            if(effectData.dircetion==2){
                innerNowindex=-1;
            }
            else{
                innerNowindex=9;
            }
            this.stopVar[TempName[0]] = setInterval(() => {
                if(effectData.dircetion==2){
                    if(innerNowindex<9){
                        innerNowindex+=1;    
                    }
                    else{
                        innerNowindex=-1;
                        if(innerRainbowIndex<this.rainbow7Color().length-1){
                            innerRainbowIndex+=1;
                        }
                        else{
                            innerRainbowIndex=0;
                        }
                    }
                }
                else{
                    if(innerNowindex>-1){
                        innerNowindex-=1;    
                    }
                    else{
                        innerNowindex=9;
                        if(innerRainbowIndex<this.rainbow7Color().length-1){
                            innerRainbowIndex+=1;
                        }
                        else{
                            innerRainbowIndex=0;
                        }
                    }
                }


                for (let dindex = 0; dindex < reInnerTempData.length; dindex++) {
                    var data_4=reInnerTempData[dindex];
                    for (let index = 0; index < data_4.length; index++) {
                        //var setTarget = data_4[index];
                        if(index==innerNowindex){
                            data_4[index].HTML_target.style.background = this.getColorEffectValue(this.rainbow7Color()[innerRainbowIndex], 0)
                        }
                        else{
                            data_4[index].HTML_target.style.background = this.getColorEffectValue([0,0,0,0], 0)
                        }
                    }
                }
            }, effectData.repeatTime);
        }
        var outerNowindex=-1;
        var outerNowCount=0;
        if (Mode != "Inner") {
            if(effectData.dircetion==2){
                outerNowindex=-1;
            }
            else{
                outerNowindex=9;
            }
            this.stopVar[TempName[1]] = setInterval(() => {
                if(effectData.dircetion==2){
                    if(outerNowindex<9){
                        outerNowindex+=1;    
                    }
                    else{
                        outerNowindex=-1;
                    }
                }
                else{
                    if(outerNowindex>-1){
                        outerNowindex-=1;    
                    }
                    else{
                        outerNowindex=9;
                    }
                }        
                for (let dindex = 0; dindex < reOuterTempData.length; dindex++) {
                    var data_4=reOuterTempData[dindex];
                    for (let index = 0; index < data_4.length; index++) {
                        //var setTarget = data_4[index];
                        if(index==outerNowindex){
                            data_4[index].HTML_target.style.background = this.getColorEffectValue(colorArrays[dindex].getRGBA(), 1)
                        }
                        else{
                            data_4[index].HTML_target.style.background = this.getColorEffectValue([0,0,0,0], 1)
                        }
                    }
                }
    
            }, effectData.repeatTime);
        }
        console.log('%c mode_Meteor','color:rgb(255,77,255)',reOuterTempData,innerArr.length,outerArr.length,TempName);
    }
    mode_Lottery(effectData,Mode='Inner') {
        var TempName=this.elementsName;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays=effectData.colorArrays;
        var reInnerTempData = [];
        var InnerTempData4 = [];
        for (let index = 1; index < innerArr.length+1; index++) {
            InnerTempData4.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: innerArr[index-1],
            });
            if (index % 8 == 0) {
                reInnerTempData.push(InnerTempData4);
                InnerTempData4=[];
            }
        }
        var outerTempData4 = [];
        var reOuterTempData = [];
        for (let index = 1; index < outerArr.length+1; index++) {
            outerTempData4.push({
                colors:colorArrays[0].getRGBA(),
                HTML_target: outerArr[index-1],
            });
            if (index % 12 == 0) {
                reOuterTempData.push(outerTempData4);
                outerTempData4=[];
            }
        }
        var innerNowindex=0;
        //var innerNowCount=0;
        var min_maxValue=[0,7];
        
        if (Mode != "Outer") {
            if(effectData.dircetion==2){
                innerNowindex=min_maxValue[0];
            }
            else{
                innerNowindex=min_maxValue[1];
            }
            this.stopVar[TempName[0]] = setInterval(() => {
                if(effectData.dircetion==2){
                    if(innerNowindex<min_maxValue[1]){
                        innerNowindex+=1;    
                    }
                    else{
                        innerNowindex=-1;
                    }
                }
                else{
                    if(innerNowindex>min_maxValue[0]){
                        innerNowindex-=1;    
                    }
                    else{
                        innerNowindex=min_maxValue[1];
                    }
                }
                for (let dindex = 0; dindex < reInnerTempData.length; dindex++) {
                    var data_4=reInnerTempData[dindex];
                    for (let index = 0; index < data_4.length; index++) {
                        if(index==innerNowindex){
                            data_4[index].HTML_target.style.background = this.getColorEffectValue(colorArrays[0].getRGBA(), 0)
                        }
                        else{
                            data_4[index].HTML_target.style.background = this.getColorEffectValue(colorArrays[1].getRGBA(), 0)
                        }
                    }
                }
               

            }, effectData.repeatTime);
        }
        var outerNowindex=0;
        var min_maxValue=[0,11];
        if (Mode != "Inner") {
            if(effectData.dircetion==2){
                outerNowindex=min_maxValue[0];
            }
            else{
                outerNowindex=min_maxValue[1];
            }
            this.stopVar[TempName[1]] = setInterval(() => {
                if(effectData.dircetion==2){
                    if(outerNowindex<min_maxValue[1]){
                        outerNowindex+=1;    
                    }
                    else{
                        outerNowindex=-1;
                    }
                }
                else{
                    if(outerNowindex>min_maxValue[0]){
                        outerNowindex-=1;    
                    }
                    else{
                        outerNowindex=min_maxValue[1];
                    }
                }
                for (let dindex = 0; dindex < reOuterTempData.length; dindex++) {
                    var data_4=reOuterTempData[dindex];
                    for (let index = 0; index < data_4.length; index++) {
                        //var setTarget = data_4[index];
                        if(index==outerNowindex){
                            data_4[index].HTML_target.style.background = this.getColorEffectValue(colorArrays[0].getRGBA(), 1)
                        }
                        else{
                            data_4[index].HTML_target.style.background = this.getColorEffectValue(colorArrays[1].getRGBA(), 1)
                        }
                    }
                }
    
            }, effectData.repeatTime);
        }
        console.log('%c mode_Lottery','color:rgb(255,77,255)',reOuterTempData,innerArr.length,outerArr.length,TempName);

    }
    mode_Mop_up(effectData,Mode='Inner') {
        var TempName = this.elementsName;
        var innerArrGroupNum = 4;
        var outerArrGroupNum = 6;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays = effectData.colorArrays;
        var reInnerTempData = [];
        var innerColorsArray = [];
        var outerColorsArray = [];
        //combination=innerColorsArray.concat(innerColorsArray2);
        for (let index = 1; index < innerArr.length+1; index++) {
            reInnerTempData.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: innerArr[index-1],
            });
            if(index-1<1){
                innerColorsArray.push(colorArrays[0].getRGBA());
            }
            else{
                innerColorsArray.push([0,0,0,0])
            }
        }
        console.log('%c reInnerTempData','color:rgb(255,77,255)',reInnerTempData);
        var reOuterTempData = [];
        for (let index = 1; index < outerArr.length+1; index++) {
            reOuterTempData.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: outerArr[index-1],
            });
            if(index-1<1){
                outerColorsArray.push(colorArrays[0].getRGBA());
            }
            else{
                outerColorsArray.push([0,0,0,0])
            }
        }
        effectData.dircetion=2;
        if (Mode != "Outer") {
            this.stopVar[TempName[0]] = setInterval(() => {
                innerColorsArray=inner_loopArrDisplacement(innerColorsArray);
                //var showArray=effectData.dircetion==1?JSON.parse(JSON.stringify(innerColorsArray)).reverse():innerColorsArray;
                for (let dindex = 0; dindex < reInnerTempData.length; dindex++) {
                    var data = reInnerTempData[dindex];
                    data.HTML_target.style.background = this.getColorEffectValue(innerColorsArray[dindex], 0)
                } 
            }, effectData.repeatTime);
        }
        if (Mode != "Inner") {
            this.stopVar[TempName[1]] = setInterval(() => {
                outerColorsArray=outer_loopArrDisplacement(outerColorsArray);
                //var showArray=effectData.dircetion==1?JSON.parse(JSON.stringify(outerColorsArray)).reverse():outerColorsArray;
                for (let dindex = 0; dindex < reOuterTempData.length; dindex++) {
                    var data = reOuterTempData[dindex];
                    data.HTML_target.style.background = this.getColorEffectValue(outerColorsArray[dindex],1)
                } 
            }, effectData.repeatTime);
        }
        var nowIndex = -1;
        var inner_TargetMax=32;
        var animatiomStep=0;
        //var _this=this;
        function inner_loopArrDisplacement(Arr) {
            //console.log('%c inner_loopArrDisplacement','color:rgb(255,77,255)',Arr,nowIndex);
            if(animatiomStep%2==0){
                for (let index = 0; index < Arr.length; index++) {
                    var target = Arr[index];
                    if(index==nowIndex){
                        Arr[index]=colorArrays[0].getRGBA();
                    }
                    else{
                        Arr[index]=[0,0,0,0];
                    }
                }
                if (nowIndex < inner_TargetMax) {
                    nowIndex+=1;
                    //Arr=_this.loopArrDisplacement(2,Arr);
                }
                else {
                    animatiomStep+=1;
                }
            }
            else{
                for (let index = 0; index < Arr.length; index++) {
                    var target = Arr[index];
                    if(index==nowIndex){
                        Arr[index]=colorArrays[1].getRGBA();
                    }
                    else{
                        Arr[index]=[0,0,0,0];
                    }
                }
                //Arr[nowIndex]=colorArrays[1].getRGBA();
                if (nowIndex > -1) {
                    //Arr=_this.loopArrDisplacement(1,Arr);
                    nowIndex-=1;
                }
                else {
                    animatiomStep+=1;
                }
            }
            return Arr;

          

        }
        var outer_nowIndex = -1;
        var outer_TargetMax=48;
        var outer_animatiomStep=0;
        function outer_loopArrDisplacement(Arr) {
            console.log('%c outer_loopArrDisplacement','color:rgb(255,77,255)',Arr,outer_nowIndex);
            if(outer_animatiomStep%2==0){
                for (let index = 0; index < Arr.length; index++) {
                    if(index==outer_nowIndex){
                        Arr[index]=colorArrays[0].getRGBA();
                    }
                    else{
                        Arr[index]=[0,0,0,0];
                    }
                }
                if (outer_nowIndex < outer_TargetMax) {
                    outer_nowIndex+=1;
                }
                else {
                    outer_animatiomStep+=1;
                }
            }
            else{
                for (let index = 0; index < Arr.length; index++) {
                    if(index==outer_nowIndex){
                        Arr[index]=colorArrays[1].getRGBA();
                    }
                    else{
                        Arr[index]=[0,0,0,0];
                    }
                }
                if (outer_nowIndex > -1) {
                    outer_nowIndex-=1;
                }
                else {
                    outer_animatiomStep+=1;
                }
            }
            return Arr;
        }
        console.log('%c mode_Mop_up','color:rgb(255,77,255)',reOuterTempData,innerArr.length,outerArr.length,TempName);
    }
    mode_Tail_Chasing(effectData,Mode='Inner') {
        var TempName=this.elementsName;
        var innerArrGroupNum=4;
        var outerArrGroupNum=6;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays=effectData.colorArrays;
        var reInnerTempData = [];
        var InnerTempData4 = [];
        var innerColorsArray = [];
        var innerColorsArray2 = [];
        var outerColorsArray = [];
        var outerColorsArray2 = [];

       var combination=[];
       var outer_combination=[];
        for (let c_2 = 0; c_2 < 32; c_2++) {
            if(c_2<6){
                innerColorsArray.push(colorArrays[0].getRGBA());
            }
            else if(c_2>12&&c_2<21){
                    innerColorsArray.push(colorArrays[1].getRGBA());
            }
            else{
                innerColorsArray.push([0,0,0,0])
            }
        }
        
        for (let c_2 = 0; c_2 < 32; c_2++) {
            if(c_2<6){
                innerColorsArray2.push(colorArrays[2].getRGBA());
            }
            else if(c_2>16&&c_2<23){
                innerColorsArray2.push(colorArrays[3].getRGBA());
            }
            else{
                innerColorsArray2.push([0,0,0,0])
            }
        }
        combination=innerColorsArray.concat(innerColorsArray2);
        for (let index = 1; index < innerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex,colorArrays[innerIndex].getRGBA());
            InnerTempData4.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: innerArr[index-1],
            });
            if (index % 4 == 0) {
                reInnerTempData.push(InnerTempData4);
                InnerTempData4=[];
                //innerIndex+=1;
            }
        }
        var inner_Reorganization = [];
        var reorganizationSort=[0,2,4,6,7,5,3,1];

        for (let index = 0; index < reorganizationSort.length; index++) {
            var t_index=reorganizationSort[index];
            inner_Reorganization=inner_Reorganization.concat(reInnerTempData[t_index]);

        }
        console.log('%c reInnerTempData','color:rgb(255,77,255)',reInnerTempData,inner_Reorganization);


        for (let c_2 = 0; c_2 < 48; c_2++) {
            if(c_2<6){
                outerColorsArray.push(colorArrays[0].getRGBA());
            }
            else if(c_2>24&&c_2<31){
                outerColorsArray.push(colorArrays[1].getRGBA());
            }
            else{
                outerColorsArray.push([0,0,0,0])
            }
        }
        for (let c_2 = 0; c_2 < 48; c_2++) {
            if(c_2<6){
                outerColorsArray2.push(colorArrays[2].getRGBA());
            }
            else if(c_2>24&&c_2<31){
                outerColorsArray2.push(colorArrays[3].getRGBA());
            }
            else{
                outerColorsArray2.push([0,0,0,0])
            }
        }
        outer_combination=outerColorsArray.concat(outerColorsArray2);
        var outerTempData4 = [];
        var reOuterTempData = [];
        for (let index = 1; index < outerArr.length+1; index++) {
            outerTempData4.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: outerArr[index-1],
            });
            if (index % 6 == 0) {
                reOuterTempData.push(outerTempData4);
                outerTempData4=[];
            }
        }
        var outer_Reorganization = [];
        var reorganizationSort=[0,2,4,6,7,5,3,1];
        for (let index = 0; index < reorganizationSort.length; index++) {
            var t_index=reorganizationSort[index];
            outer_Reorganization=outer_Reorganization.concat(reOuterTempData[t_index]);

        }
        //console.log('%c reOuterTempData','color:rgb(255,77,255)',reOuterTempData,outer_Reorganization);

        console.log('%c showColosArray','color:rgb(255,77,255)',combination,outer_combination);
        if (Mode != "Outer") {
            this.stopVar[TempName[0]] = setInterval(() => {
                for (let dindex = 0; dindex < inner_Reorganization.length; dindex++) {
                    var data = inner_Reorganization[dindex];
                    data.HTML_target.style.background = this.getColorEffectValue(combination[dindex], 0)
                }
                innerColorsArray = this.loopArrDisplacement(effectData.dircetion, combination);
            }, effectData.repeatTime);
        }
        if (Mode != "Inner") {
            this.stopVar[TempName[1]] = setInterval(() => {
                for (let dindex = 0; dindex < outer_Reorganization.length; dindex++) {
                    var data = outer_Reorganization[dindex];
                    data.HTML_target.style.background = this.getColorEffectValue(outer_combination[dindex], 1)
                }
                outerColorsArray = this.loopArrDisplacement(effectData.dircetion, outer_combination);
    
            }, effectData.repeatTime);
        }
       

        console.log('%c mode_Tail_Chasing','color:rgb(255,77,255)',reOuterTempData,innerArr.length,outerArr.length,TempName);
    }
    mode_Taichi(effectData,Mode='Inner') {
        var TempName=this.elementsName;
        var innerArrGroupNum=4;
        var outerArrGroupNum=6;

        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays=effectData.colorArrays;
        var reInnerTempData = [];
        var InnerTempData4 = [];
        var innerColorsArray = [];
        var outerColorsArray = [];

        for (let c_2 = 0; c_2 < outerArrGroupNum; c_2++) {
            outerColorsArray.push(colorArrays[1].getRGBA());
        }
        for (let c_2 = 0; c_2 < outerArrGroupNum; c_2++) {
            outerColorsArray.push(colorArrays[0].getRGBA());
        }


        for (let c_2 = 0; c_2 < innerArrGroupNum; c_2++) {
            innerColorsArray.push(colorArrays[0].getRGBA());
        }
        for (let c_2 = 0; c_2 < innerArrGroupNum; c_2++) {
            innerColorsArray.push(colorArrays[1].getRGBA());
        }
        console.log('%c showColosArray','color:rgb(255,77,255)',innerColorsArray);

        for (let index = 1; index < innerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex,colorArrays[innerIndex].getRGBA());
            InnerTempData4.push({
                colors:colorArrays[3].getRGBA(),
                HTML_target: innerArr[index-1],
            });
            if (index % 8 == 0) {
                reInnerTempData.push(InnerTempData4);
                InnerTempData4=[];
                //innerIndex+=1;
            }
        }
        var outerTempData4 = [];
        var reOuterTempData = [];
        for (let index = 1; index < outerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex);
            outerTempData4.push({
                colors:colorArrays[0].getRGBA(),
                HTML_target: outerArr[index-1],
            });
            if (index % 12 == 0) {
                reOuterTempData.push(outerTempData4);
                outerTempData4=[];
            }
        }


        this.stopVar[TempName[0]] = setInterval(() => {
            for (let dindex = 0; dindex < reInnerTempData.length; dindex++) {
                var data = reInnerTempData[dindex];
                for (let i_index = 0; i_index < data.length; i_index++) {
                    var HtmLdiv = data[i_index];
                    HtmLdiv.HTML_target.style.background = this.getColorEffectValue(innerColorsArray[i_index], 0)
                }
            }
            innerColorsArray = this.loopArrDisplacement(effectData.dircetion, innerColorsArray);
        }, effectData.repeatTime);

        this.stopVar[TempName[1]] = setInterval(() => {
            for (let dindex = 0; dindex < reOuterTempData.length; dindex++) {
                var data = reOuterTempData[dindex];
                for (let i_index = 0; i_index < data.length; i_index++) {
                    var HtmLdiv = data[i_index];
                    HtmLdiv.HTML_target.style.background = this.getColorEffectValue(outerColorsArray[i_index],1)
                }
            }
            var setdircetion;
            if(effectData.dircetion==1){
                setdircetion=2;
            }
            else{
                setdircetion=1;
            }
            outerColorsArray = this.loopArrDisplacement(setdircetion, outerColorsArray);
        }, effectData.repeatTime);
        

        console.log('%c mode_Color_Cycle','color:rgb(255,77,255)',reOuterTempData,innerArr.length,outerArr.length,TempName);
    }
    mode_Voice(effectData,Mode='Inner') {
        var TempName=this.elementsName;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var rainbowColorIndex = 0;
        var colorArrays=effectData.colorArrays;
        var innerIndex=0;
        var reInnerTempData = [];
        var direction = 0;//0左1右
        var InnerTempData4 = [];
        for (let index = 1; index < innerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex,colorArrays[innerIndex].getRGBA());
            InnerTempData4.push({
                colors:colorArrays[innerIndex].getRGBA(),
                HTML_target: innerArr[index-1],
            });
            if (index % 8 == 0) {
                reInnerTempData.push(InnerTempData4);
                InnerTempData4=[];
                //innerIndex+=1;
            }
        }
        var outerTempData4 = [];
        var reOuterTempData = [];
        var outerIndex=0;
        for (let index = 1; index < outerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex);
            outerTempData4.push({
                colors:colorArrays[outerIndex].getRGBA(),
                HTML_target: outerArr[index-1],
            });
            if (index % 12 == 0) {
                reOuterTempData.push(outerTempData4);
                outerTempData4=[];
            }
        }


        if (Mode != "Outer") {
            var inner_startIndex=[[1,2],[0,3],[7,4],[6,5]];
            inner_startIndex=effectData.dircetion==1?JSON.parse(JSON.stringify(inner_startIndex)).reverse():inner_startIndex;

            var inner_StartStep=0;  
            var inner_SetColorindex=0;
            var inner_repeatTimes=0;
            var inner_SetRGBA=colorArrays[0].getRGBA();
            this.stopVar[TempName[0]] = setInterval(() => {
                if(inner_StartStep>inner_startIndex.length-1){
                    inner_StartStep=inner_startIndex.length-1;
                    inner_repeatTimes+=1;
                    inner_SetRGBA=[0,0,0,0]; 
                }
                else if(inner_StartStep<0){
                    if(inner_SetColorindex<3){
                        inner_SetColorindex+=1;
                    }
                    else{
                        inner_SetColorindex=0;
                    }
                    inner_StartStep=0;
                    inner_repeatTimes+=1;
                    inner_SetRGBA=colorArrays[inner_SetColorindex].getRGBA();   
                }                  
                for (let dindex = 0; dindex < reInnerTempData.length; dindex++) {
                    var data = reInnerTempData[dindex];
                    for (let i_index = 0; i_index < inner_startIndex[inner_StartStep].length; i_index++) {
                        var target2 = inner_startIndex[inner_StartStep][i_index];
                        var HtmLdiv = data[target2];
                        HtmLdiv.HTML_target.style.background =this.getColorEffectValue(inner_SetRGBA,0)

                    }
                }
        
                if(inner_repeatTimes%2==0){ 
                    inner_StartStep+=1;
                }
                else{
                    inner_StartStep-=1;    
                }
                


            }, effectData.repeatTime);
        }
        if (Mode != "Inner") {
            var outer_startIndex=[[2,3],[1,4],[0,5],[11,6],[10,7],[9,8]];
            //var outer_startIndex=[[2,3],[1,4],[0,5],[11,6],[10,7],[9,8]];
            outer_startIndex=effectData.dircetion==1?JSON.parse(JSON.stringify(outer_startIndex)).reverse():outer_startIndex;
            //var outer_startIndex=[[2,3,1,4],[0,5,11,6],[10,7,9,8]];
            var outer_StartStep=0;  
            var outer_SetColorindex=0;
            var outer_repeatTimes=0;
            var outer_nowSetRGBA=colorArrays[0].getRGBA();
            this.stopVar[TempName[1]] = setInterval(() => {
                if(outer_StartStep>outer_startIndex.length-1){
                    outer_StartStep=outer_startIndex.length-1;
                    outer_repeatTimes+=1;
                    outer_nowSetRGBA=[0,0,0,0]; 
                }
                else if(outer_StartStep<0){
                    if(outer_SetColorindex<3){
                        outer_SetColorindex+=1;
                    }
                    else{
                        outer_SetColorindex=0;
                    }
                    outer_StartStep=0;
                    outer_repeatTimes+=1;
                    outer_nowSetRGBA=colorArrays[outer_SetColorindex].getRGBA();   
                }                  
                for (let dindex = 0; dindex < reOuterTempData.length; dindex++) {
                    var data = reOuterTempData[dindex];
                    for (let i_index = 0; i_index < outer_startIndex[outer_StartStep].length; i_index++) {
                        var target2 = outer_startIndex[outer_StartStep][i_index];
                        var HtmLdiv = data[target2];
                        HtmLdiv.HTML_target.style.background =this.getColorEffectValue(outer_nowSetRGBA,1)

                    }
                }
        
                if(outer_repeatTimes%2==0){ 
                    outer_StartStep+=1;
                }
                else{
                    outer_StartStep-=1;    
                }
                


            }, effectData.repeatTime*0.5);
        }

        console.log('%c mode_Voice','color:rgb(255,77,255)',reOuterTempData,innerArr.length,outerArr.length,TempName);
    }
    mode_Static_Color(effectData,Mode='Inner') {
        var TempName=this.elementsName;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var rainbowColorIndex = 0;
        var colorArrays=effectData.colorArrays;
        var innerIndex=0;
        var outerIndex=0;
        var reInnerTempData = [];
        var reOuterTempData = [];
        var direction = 0;//0左1右
        for (let index = 1; index < innerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex,colorArrays[innerIndex].getRGBA());
            reInnerTempData.push({
                colors:colorArrays[innerIndex].getRGBA(),
                recordIndex: rainbowColorIndex,
                repeatTime: this.getRandom(5, 25),
                HTML_target: innerArr[index-1],
            });
            if (index % 8 == 0) {
                //if(innerIndex<3){
                    innerIndex+=1;
            }
        }
        for (let index = 1; index < outerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex);
            reOuterTempData.push({
                colors:colorArrays[outerIndex].getRGBA(),
                recordIndex: rainbowColorIndex,
                repeatTime: this.getRandom(5, 25),
                HTML_target: outerArr[index-1],
            });
            if (index % 12 == 0) {
                    outerIndex+=1;
                
            }
        }
        if (Mode != "Outer") {
            this.stopVar[TempName[0]] = setInterval(() => {
                for (let index = 0; index < reInnerTempData.length; index++) {
                    var data = reInnerTempData[index];
                    data.HTML_target.style.background =this.getColorEffectValue(data.colors,0)

                }

            }, effectData.repeatTime);
        }
        if (Mode != "Inner") {
            this.stopVar[TempName[1]] = setInterval(() => {

                for (let index = 0; index < reOuterTempData.length; index++) {
                    var data = reOuterTempData[index];
                    data.HTML_target.style.background =this.getColorEffectValue(data.colors,1)

                }


            }, effectData.repeatTime);
        }
        console.log('%c mode_Static_Color','color:rgb(255,77,255)',innerArr.length,outerArr.length,TempName);
    }
    mode_Static_Colorful(effectData,Mode='Inner') {
        var TempName=this.elementsName;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var rainbowColorIndex = 0;
        var colorArrays=effectData.colorArrays;
        var innerIndex=0;
        var outerIndex=0;
        var reInnerTempData = [];
        var reOuterTempData = [];
        var direction = 0;//0左1右
        for (let index = 1; index < outerArr.length+1; index++) {
            //console.log('%c innerIndex','color:rgb(255,77,255)',innerIndex);
            reOuterTempData.push({
                colors:colorArrays[outerIndex].getRGBA(),
                recordIndex: rainbowColorIndex,
                repeatTime: this.getRandom(5, 25),
                HTML_target: outerArr[index-1],
            });
            if (index % 3 == 0) {
                if (outerIndex < 3) {
                    outerIndex += 1;


                }
                else {
                    outerIndex = 0;
                }
            }

        }
            this.stopVar[TempName[1]] = setInterval(() => {

                for (let index = 0; index < reOuterTempData.length; index++) {
                    var data = reOuterTempData[index];
                    data.HTML_target.style.background =this.getColorEffectValue(data.colors,1)

                }


            }, effectData.repeatTime);
        
        console.log('%c mode_Static_Colorful','color:rgb(255,77,255)',innerArr.length,outerArr.length,TempName);
    }
    mode_Rainbow(effectData,rangeMode='Inner') {
        var TempName=this.elementsName;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays=effectData.colorArrays;
        var innerIndex=0;
        var outerIndex=0;
        var innerRainbowIndex = 0;
        var outerRainbowIndex = 0;
        var reInnerTempData = [];
        var reOuterTempData = [];
        var direction = 0;//0左1右
        for (let index = 1; index < innerArr.length+1; index++) {

            reInnerTempData.push({
                colors:colorArrays[innerIndex].getRGBA(),
                recordIndex: innerRainbowIndex,
                repeatTime: this.getRandom(5, 25),
                HTML_target: innerArr[index-1],
            });

            if(innerRainbowIndex<this.rainbow7Color().length-1){
                innerRainbowIndex+=1;
            }
            else{
                innerRainbowIndex=0;
            }
            if (index % 8 == 0) {
                innerIndex+=1;
                innerRainbowIndex=0;
            }
            
        }
        for (let index = 1; index < outerArr.length + 1; index++) {
            reOuterTempData.push({
                colors: colorArrays[outerIndex].getRGBA(),
                recordIndex: outerRainbowIndex,
                repeatTime: this.getRandom(5, 25),
                HTML_target: outerArr[index - 1],
            });
            if (outerRainbowIndex < this.rainbow7Color().length - 1) {
                outerRainbowIndex += 1;
            }
            else {
                outerRainbowIndex = 0;
            }
            if (index % 12 == 0) {
                outerIndex += 1;
                outerRainbowIndex = 0;
            }
        }
        if (rangeMode != "Outer") {
            this.stopVar[TempName[0]] = setInterval(() => {
                for (let index = 0; index < reInnerTempData.length; index++) {
                    var data = reInnerTempData[index];
                    var setRgba = this.rainbow7Color()[data.recordIndex];
                    data.HTML_target.style.background =this.getColorEffectValue(setRgba,0)
                    if (direction == 1) {
                        if (data.recordIndex < this.rainbow7Color().length - 1) {
                            data.recordIndex += 1;

                        }
                        else {
                            data.recordIndex = 0;
                        }
                    }
                    else {
                        if (data.recordIndex > 0) {
                            data.recordIndex -= 1;
                        }
                        else {
                            data.recordIndex = this.rainbow7Color().length - 1;
                        }
                    }

                }

            }, effectData.repeatTime);
        }
        if (rangeMode != "Inner") {
            this.stopVar[TempName[1]] = setInterval(() => {
                for (let index = 0; index < reOuterTempData.length; index++) {
                    var data = reOuterTempData[index];
                    var setRgba = this.rainbow7Color()[data.recordIndex];
                    data.HTML_target.style.background =this.getColorEffectValue(setRgba,1)
                    if (direction == 1) {
                        if (data.recordIndex < this.rainbow7Color().length - 1) {
                            data.recordIndex += 1;

                        }
                        else {
                            data.recordIndex = 0;
                        }
                    }
                    else {
                        if (data.recordIndex > 0) {
                            data.recordIndex -= 1;
                        }
                        else {
                            data.recordIndex = this.rainbow7Color().length - 1;
                        }
                    }
                }

            }, effectData.repeatTime);
        }
        console.log('%c mode_Rainbow','color:rgb(255,77,255)',innerArr.length,outerArr.length,TempName,rangeMode);
    }
    mode_Warning(effectData,rangeMode='Inner') {
        var TempName=this.elementsName;
        var innerArr = document.getElementsByClassName(TempName[0]) as HTMLCollectionOf<HTMLElement>;
        var outerArr = document.getElementsByClassName(TempName[1]) as HTMLCollectionOf<HTMLElement>;
        var colorArrays=effectData.colorArrays;
        var innerIndex=0;
        var outerIndex=0;
        var innerRainbowIndex = 0;
        var outerRainbowIndex = 0;
        var reInnerTempData = [];
        var reOuterTempData = [];
        var direction = 0;//0左1右
        for (let index = 1; index < innerArr.length+1; index++) {

            reInnerTempData.push({
                colors:colorArrays[innerIndex].getRGBA(),
                recordIndex: innerRainbowIndex,
                HTML_target: innerArr[index-1],
            });
            if (index % 8 == 0) {
                //innerIndex+=1;
            }
            
        }
        for (let index = 1; index < outerArr.length + 1; index++) {
            reOuterTempData.push({
                colors: colorArrays[outerIndex].getRGBA(),
                recordIndex: outerRainbowIndex,
                HTML_target: outerArr[index - 1],
            });
            if (index % 12 == 0) {
               // outerIndex += 1;
            }
        }
        if (rangeMode != "Outer") {
            var repeatCount=0;
            var addCount=0;

            var inner_totalStep=5;
            var inner_StartStep=0;
            var inner_SetColorindex=0;
            var nowColor;
            var newColor;
            this.stopVar[TempName[0]] = setInterval(() => {
                if(repeatCount%2==0){
                    nowColor=JSON.parse(JSON.stringify(colorArrays[inner_SetColorindex].getRGBA()));
                    newColor=[0,0,0,0];
                }
                else{
                    nowColor=[0,0,0,0];
                    newColor=JSON.parse(JSON.stringify(colorArrays[inner_SetColorindex].getRGBA()));

                }
                for (let index = 0; index < reInnerTempData.length; index++) {
                    var data = reInnerTempData[index];
                    //var setRgba = this.rainbow7Color()[data.recordIndex];
                    //console.log('%c inner_StartStep','color:rgb(255,255,0)',t_data,inner_StartStep,inner_totalStep,nowColor,newColor);

                    var t_data = [0,0,0,1];
                    for (let i_step = 0; i_step < 3; i_step++) {
                        t_data[i_step] =(nowColor[i_step] * (inner_totalStep - inner_StartStep) + newColor[i_step] * inner_StartStep) / inner_totalStep;
                    }
                    data.HTML_target.style.background =this.getColorEffectValue(t_data,0)   
                }
                // if(inner_StartStep<inner_totalStep){
                //     inner_StartStep+=5;
                // }
                // else{
                //     inner_StartStep=0;
                //     repeatCount+=1;
                // }
                repeatCount+=1;
                addCount+=1;
                if(addCount%2==0){
                    if(inner_SetColorindex<3){
                        inner_SetColorindex+=1;
                    }
                    else{
                        inner_SetColorindex=0;
                    }
                }
            }, effectData.repeatTime);
            console.log('%c mode_Warning_reInnerTempData','color:rgb(255,77,255)',reInnerTempData);

        }
        if (rangeMode != "Inner") {
            var outer_repeatCount=0;
            var outer_addCount=0;
            var totalStep=5;
            var outer_StartStep=0;
            var outer_SetColorindex=0;
            var o_nowColor;
            var o_newColor;
            this.stopVar[TempName[1]] = setInterval(() => {
                if(outer_repeatCount%2==0){
                    o_nowColor=JSON.parse(JSON.stringify(colorArrays[outer_SetColorindex].getRGBA()));
                    o_newColor=[0,0,0,0];
                }
                else{
                    o_nowColor=[0,0,0,0];
                    o_newColor=JSON.parse(JSON.stringify(colorArrays[outer_SetColorindex].getRGBA()));
                }
                for (let index = 0; index < reOuterTempData.length; index++) {
                    var data = reOuterTempData[index];
                    var setRgba = this.rainbow7Color()[data.recordIndex];
                    var t_data = [0,0,0,1];
                    //console.log('%c outer_StartStep','color:rgb(255,255,0)',t_data,outer_StartStep,totalStep);
                    for (let i_step = 0; i_step < 3; i_step++) {
                        t_data[i_step] =(o_nowColor[i_step] * (totalStep - outer_StartStep) + o_newColor[i_step] * outer_StartStep) / totalStep;
                    }
                    data.HTML_target.style.background =this.getColorEffectValue(t_data,1)         
                }
                // if(outer_StartStep<totalStep){
                //     outer_StartStep+=5;
                // }
                // else{
                //     outer_StartStep=0;
                //     outer_repeatCount+=1;
                // }
                outer_repeatCount+=1;
                outer_addCount+=1;
                if(outer_addCount%2==0){
                    if(outer_SetColorindex<3){
                        outer_SetColorindex+=1;
                    }
                    else{
                        outer_SetColorindex=0;
                    }
                }

            }, effectData.repeatTime);
        }
        console.log('%c mode_Warning','color:rgb(255,77,255)',innerArr.length,outerArr.length,TempName,rangeMode);
    }
    loopArrDisplacement(directionSwitch=1,Arr) {
        if (directionSwitch==2) {
            var start = Arr[Arr.length - 1];//24
            for (let index = Arr.length - 1; index >= 0; index--) {
                if (index > 0) {
                    var Temp = Arr[index - 1];//23
                    Arr[index] = Temp;//24
                    
                }
                else {
                    Arr[0] = start;
                }
            }
        }
        else if (directionSwitch==1) {//反向陣列
            var Oringin = Arr[0];
            for (let index = 0; index < Arr.length; index++) {
                if (index < Arr.length - 1) {
                    var Temp = Arr[index + 1];
                    Arr[index] = Temp;
                }
                else {
                    Arr[index] = Oringin;
                }
            }
        }
        return Arr;
    }
    getColorEffectValue(t_data, type = 0) {
        switch (type) {
            case 0:
                return this.toRadial_gradient(t_data, '#0000');
            case 1:
                return this.toCssRGB(t_data);
            default:
                break;
        }
    }
}

