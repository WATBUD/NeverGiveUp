// HSL即色相、飽和度、亮度（英語：Hue, Saturation, Lightness）。
// HSV即色相、飽和度、明度（英語：Hue, Saturation, Value），又稱HSB其中B即英語：Brightness。
//Louis Architecture => Hex=>SET RGB=>SET HSV

import { BoxSelectionArea } from './BoxSelectionArea'
import { Injectable } from '@angular/core'
import { P } from '@angular/core/src/render3'
import { identifierModuleUrl } from '@angular/compiler'
@Injectable()
class ModeParameter {
    frame_selection_range: any = []
    coordinateX: any = 0
    coordinateY: any = 0
    color_ShowLimit: number = 9
    red: number = 0
    green: number = 0
    blue: number = 0
    opacity: number = 50 //不透明度0~1
    direction: any = false
    separate: any = false
    amplitude: number = 200 //振幅200~8000
    fire: any = 0 //0~1
    number: any = 0 //1~10
    gap: number = 0 //0~500
    randomspeed: any = 0 //0~360
    bidirectional: any = false //true,false
    bump: any = 0 ///0~5;
    bandwidth: any = 50 //帶寬50~500
    soft: any = false //true,false
    radius: any = 0 //0~300
    fixed: any = false //true,false
    saturation: number = 0 //飽和度 0~1
    value: number = 0 //明度 0~1
    angle: any = 0 //0~360
    canEffectCenter: any = false
    gradient: any = false
    color_quantity: number = 9
    time: any = 0.5 //0.5~3
    check: any = true

    constructor(inputmax) {
        for (let index = 0; index < inputmax; index++) {
            this.frame_selection_range.push(true)
        }
    }
}

export class M_Light_CS {
    //左上,右上,左下,右下
    maxkaycapNumber = 0
    repeater;
    ledcoordinates: any = []
    AllBlockColor: any = [] //TOTAL NUMBER
    LightingEffectData: any = [
        { name: 'GloriousMode', value: 0, translate: 'GloriousMode' },
        { name: 'Wave#1', value: 1, translate: 'Wave#1' },
        { name: 'Wave#2', value: 3, translate: 'Wave#2' },
        { name: 'SpiralingWave', value: 4, translate: 'SpiralingWave' },
        { name: 'AcidMode', value: 5, translate: 'AcidMode' },
        { name: 'Breathing', value: 2, translate: 'Breathing' },
        { name: 'NormallyOn', value: 6, translate: 'NormallyOn' },
        { name: 'RippleGraff', value: 7, translate: 'Ripple Graff' },
        { name: 'PassWithoutTrace', value: 9, translate: 'PassWithoutTrace' },
        { name: 'FastRunWithoutTrace', value: 10, translate: 'FastRunWithoutTrace' },
        { name: 'Matrix2', value: 11, translate: 'Matrix2' },
        { name: 'Matrix3', value: 12, translate: 'Matrix3' },
        { name: 'Rainbow', value: 13, translate: 'Rainbow' },
        { name: 'HeartbeatSensor', value: 14, translate: 'HeartbeatSensor' },
        { name: 'DigitTimes', value: 15, translate: 'DigitTimes' },
        { name: 'Kamehemeha', value: 16, translate: 'Kamehemeha' },
        { name: 'Pingpong', value: 17, translate: 'Pingpong' },
        { name: 'Surmount', value: 18, translate: 'Surmount' },
        { name: 'LEDOFF', value: 8, translate: 'LEDOFF' },
    ]
    lightData;
    currentBlockIndex=0;
    mode_name: any = [
        'Wave',
        'ConicBand',
        'Spiral',
        'Cycle',
        'LinearWave',
        'Ripple',
        'Breathing',
        'Rain',
        'Fire',
        'Trigger',
        'AudioCap',
    ]
    minKeyWidth=43;
    nowSettingColorkeyName=''
    //mode_name:any=["波浪","撞擊","螺旋","循環","觸發","漣漪","呼吸","下雨","火焰","點亮","音樂"];
    imageMaxWidth=0;
    imageMaxHeight=0;
    recordModeArr: any = []
    currentModeIndex: any = 0
    BSApage1 = new BoxSelectionArea('RGBColorBlockStyle')
    twoDimensionalArray=new Array(26);//8*26;
    breakGradation=[[0,14],[15,29],[30,44],[45,58],[59,72],[73,82]];
    break_DimensionalArray=[];
    max_X_Number=26;
    max_Y_Number=8;
    max_H_Number=6;
    // x_Array=new Array(120);//8*26;
    // y_Array=new Array(120);//8*26;
    constructor(inputMax) {
        this.maxkaycapNumber = inputMax
        for (var i_block = 0; i_block < this.maxkaycapNumber; i_block++) {
            this.AllBlockColor.push({ color: [255,0,0,1],breathing:false,border: true,coordinateData:[]})
        }
        for (let index = 0; index < this.twoDimensionalArray.length; index++) {
                this.twoDimensionalArray[index]=[];
        }
        //coordinate:
        for (let index = 0; index < this.twoDimensionalArray.length; index++) {
            //var temp_=new Array(26);
            for (let index2 = 0; index2 < 8; index2++) {
                //const element = array[index];
                this.twoDimensionalArray[index].push(this.defaultModule());
            }
        }
        //for (var i_block = 0; i_block < this.maxkaycapNumber; i_block++) {
        for (let index = 0; index < this.breakGradation.length; index++) {
            var min = this.breakGradation[index][0];//14
            var max = this.breakGradation[index][1];//29
            var total = max - min;
            // if (i_block >= min && i_block <= max) {
            //     this.twoDimensionalArray[index].index=i_block;
            // }
            for (let i3 = 0; i3 <= total; i3++) {
                this.twoDimensionalArray[i3][index].blockIndex = i3 + min;
                //console.log('twoDimensionalArray', this.twoDimensionalArray[index][i3]=i3+min);

            }
        }
        // this.AllBlockColor.push({ color: [255, 0, 0, 1], breathing: false, border: true, coordinateData: [] })

        // var temp_=new Array(26);
        // this.twoDimensionalArray.push(temp_);
        //this.AllBlockColor[]
        console.log('twoDimensionalArray', this.twoDimensionalArray);
    }

    

   defaultModule(type = '') {
        var T = 
            {
                blockIndex:9999,
                color: [255,0,0,1],
            }
        
        return T
    }

    showTwoDimensionalArray(){      
        for (let index = 0; index < this.twoDimensionalArray.length; index++) {
            //var temp_=new Array(26);
            for (let index2 = 0; index2 < 8; index2++) {
                //const element = array[index];
                let target=this.twoDimensionalArray[index][index2];
                if(target.blockIndex!=9999){
                    this.AllBlockColor[target.blockIndex].color=target.color;
                }
            }
        }
    }

    resetTwoDimensionalArray(){
        for (let index = 0; index < this.twoDimensionalArray.length; index++) {
            //var temp_=new Array(26);
            for (let index2 = 0; index2 < this.twoDimensionalArray[index].length; index2++) {
                //const element = array[index];
                let target=this.twoDimensionalArray[index][index2];
                target.color=[0,0,0,1];           
            }
        }
    }



    
    findLightData(findValue) {
        let obj = this.LightingEffectData.find((x) => x.value == findValue)
        if (obj != undefined) {
            alert('Lighting Select fail');
        }
        return obj;
    } 
    setlightData(obj){
      
     this.lightData= JSON.parse(JSON.stringify(obj));
    }
    resetDefault(resetData) {
        this.lightData =resetData;
        for (var i = 0; i < this.maxkaycapNumber; i++) {
            this.AllBlockColor[i].color=[255,0,0,1];
        }
    }


    getNameSortposition(name) {
        console.log('getNameSortposition_indexOf=', this.mode_name.indexOf(name))
        return this.mode_name.indexOf(name)
    }
    addBlockIndex(){
        if(this.currentBlockIndex<this.AllBlockColor.length-1){
            this.currentBlockIndex+=1;
        }
        else{
        }
    }
    setGroupArrayColor(groupArray,assignColor){  
        var target=this.AllBlockColor;
        groupArray.forEach(function(value, index, array){//array=GroupArray
            target[value].color = assignColor ;
        });
    }
    subBlockIndex(){
        if(this.currentBlockIndex>0){
            this.currentBlockIndex-=1;
        }
        else{
        }
    }
    setColorPickerValue(RGB_Arr){
       var target=this.lightData.colorPickerValue;
       target[0]=RGB_Arr[0];
       target[1]=RGB_Arr[1];
       target[2]=RGB_Arr[2];
       target[3]=1;
       this.lightData.colorHex=this.rgbToHex(target[0],target[1],target[2]);
       
    }
    rgbToHex(r, g, b) {
        r = Number(r);
        g = Number(g);
        b = Number(b);
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    }
    componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }
    getNowBlock(index=-1) {
        if(index!=-1){
            return this.AllBlockColor[index];
        }
        else{
            return this.AllBlockColor[this.currentBlockIndex];
        }
    }
    ImportLedClassData(InputData) {
        console.log('ImportLedClassData', InputData)
        var arr = Object.keys(this.getTarget())
        for (let index = 0; index < arr.length; index++) {
            if (arr[index] != '') {
                this.getTarget()[arr[index]] = InputData[arr[index]]
            }
        }
    }
    
    ImportCreateLedData(InputData) {
        console.log('ImportCreateLedData', InputData)
        InputData = JSON.parse(JSON.stringify(InputData))
        this.recordModeArr.push(InputData)
    }

    getTarget() {
        //console.log(" this.recordModeArr[this.currentModeIndex];", this.recordModeArr[this.currentModeIndex]);
        return this.recordModeArr[this.currentModeIndex]
    }
    switchEffectMode(index) {
        // var clone = $.extend(
        //     true,
        //     Object.create(Object.getPrototypeOf(this.modeClassArr[index])),
        //     this.modeClassArr[index]
        // )
        // console.log('newSwitchEffectMode', clone)
        // this.recordModeArr[this.currentModeIndex] = clone
    }
    deleteChoose() {
        if (this.recordModeArr.length > 1) {
            this.recordModeArr.splice(this.currentModeIndex, 1)
        }
        if (this.currentModeIndex - 1 >= 0) {
            this.currentModeIndex -= 1
        }

        this.updateframe_selection_range()
        console.log('deleteChoose', '=>currentModeIndex' + this.currentModeIndex)
    }
    addNewChoose() {
        if (this.recordModeArr.length > 10) {
            return
        }
    }


    stringFormat() {
        if (arguments.length == 0)
            return null;
        var str = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
            str = str.replace(re, arguments[i]);
        }
        return str;
    }

    //原有邊框架構 因客戶要求不顯示邊框 這邊採用border判斷是否顯示此格
    updateframe_selection_range() {
    }

    distanceCalculation(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));//å…©é»žè·�é›¢
    }
    
    setNowLightMode() {
        switch (this.lightData.lightSelected.translate) {
            case 'GloriousMode':
                break;
            case 'Wave#1':
                break;
            case 'Wave#2':
                break;
            case 'SpiralingWave':
                break;
            case 'AcidMode':
                break;
            case 'Breathing':
                break;
            case 'NormallyOn':
                break;
            case 'RippleGraff'://彩色擴散
                break;
            case 'PassWithoutTrace'://單點
                break;
            case 'FastRunWithoutTrace'://一排
                break;
            case 'Matrix2':
                break;
            case 'Matrix3':
                break;
            case 'Rainbow':
                break;
            case 'HeartbeatSensor':
                break;
            case 'DigitTimes':
                break;
            case 'Kamehemeha':
                break;
            case 'Pingpong':
                break;
            case 'Surmount':
                break;
            case 'LEDOFF':
                this.mode_LEDOFF();
                break;
            default:
                break;
        }
    }
    //     case 'RippleGraff'://彩色擴散
    //     break;
    // case 'PassWithoutTrace'://單點
    //     break;

    mode_RippleGraff(colors = [], isRainbow = true) {
        clearInterval(this.repeater);
        colors = this.rainbow7Color();
        //this.rainbow7Color();
        this.currentBlockIndex = 48;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock().coordinateData;
        //var setRGB=[255,0,0,1];
        var mode_step = 0;
        var step = 30;
        var nowStep = 0;
        this.setAllBlockColor([0, 0, 0, 1]);
        this.repeater = setInterval(() => {
            //this.mode_reset();
            var target = this.AllBlockColor;
            var setRGB;
            if (isRainbow) {
                setRGB = this.rainbow7Color()[this.getRandom(0, colors.length - 1)];
            }
            else {
                setRGB = [255, 0, 0, 1];
            }
            var compareResult = this.minKeyWidth * repeatCount;
            var compareResultMax = this.minKeyWidth * repeatCount - this.minKeyWidth;
            for (let index = 0; index < target.length; index++) {
                var element = target[index];
                var dis = this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                console.log('mode_step', mode_step)
                if (mode_step == 0) {
                    if (dis < compareResult && dis > compareResultMax) {
                        element.color = setRGB;
                    }
                }
                else {
                    var T = JSON.parse(JSON.stringify(element.color));
                    T[0] = (T[0] * (step - nowStep) + 0 * nowStep) / step;
                    T[1] = (T[1] * (step - nowStep) + 0 * nowStep) / step;
                    T[2] = (T[2] * (step - nowStep) + 0 * nowStep) / step;
                    element.color = T;
                    console.log('element.color', T, step, nowStep)
                }

            }
            if (nowStep + 1 < step) {
                nowStep += 1;
            }
            else {
                nowStep = 0;
                mode_step = 0;
                repeatCount = 0;
                console.log('nowStep_end', mode_step, repeatCount, nowStep)
                this.setAllBlockColor([0, 0, 0, 1]);
            }
            if (this.minKeyWidth * repeatCount < this.imageMaxWidth) {
                repeatCount += 1;
                //console.log('repeatCount', repeatCount)
            }
            else {
                mode_step = 1;
                //this.setAllBlockColor([0,0,0,1]);
            }
        }, 50)
        //clearInterval(this.repeater);
    }


    mode_LEDOFF() {
        var target = this.AllBlockColor;
        for (let index = 0; index < target.length; index++) {
            let element = target[index];
            element.color = 'black';
        }
    }
    mode_Wave(){
        //this.addBlockIndex();
        clearInterval(this.repeater);
        this.currentBlockIndex=30;
        //this.getNowBlock().color = [0,0,255,1];
        var repeatMin=5;
        var repeatMax=200;
        var repeatCount=0;
        this.repeater=setInterval(()=>{
            var StartPoint = this.getNowBlock().coordinateData;
            var target = this.AllBlockColor;
            for (let index = 0; index < target.length; index++) {
                const element = target[index];
                console.log('this.M_Light_PRESETS.addBlockIndex();', element);
                //var compareResult = this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                //+(repeatCount*50)
                //console.log('setCoordinate', StartPoint.center_Point[0],element.coordinateData.center_Point[0])
                //var compareResult =Math.abs(0-element.coordinateData.center_Point[0]);
                var compareResult =(repeatCount*180);
                repeatMax=compareResult+200;
                if (compareResult>element.coordinateData.top_Left[0] &&repeatMax<element.coordinateData.top_Right[0]) {
                    element.color = [255,255,0,1];
                }
                else if (compareResult<element.coordinateData.top_Left[0] &&repeatMax>element.coordinateData.top_Left[0]) {
                    element.color = [255,255,0,1];
                }
                // if (compareResult > repeatMin+(repeatCount*50) && compareResult < repeatMax+(repeatCount*50)) {
                //     element.color = [255,255,0,1];
                // }
                else {
                    element.color = [0,255,0,1];
                }
            }
            if(repeatCount<15 &&repeatMax<this.imageMaxWidth){
                repeatCount+=1;
            }
            else{
                repeatCount=0;
            }
        },500)
    }
    mode_SlopeMoveR(){
        //this.addBlockIndex();
        clearInterval(this.repeater);
        this.currentBlockIndex=30;
        //this.getNowBlock().color = [0,0,255,1];
        var repeatMin=5;
        var repeatMax=200;
        var repeatCount=0;
        var StartPoint = this.getNowBlock().coordinateData;

        //var SlopeEquation=this.SlopeEquation([0,0],[834,372]);//StartPoint.clientWidth
        var startX=-StartPoint.clientWidth*5;

        this.repeater=setInterval(()=>{
            var SlopeEquation=this.SlopeEquation([0+startX,this.imageMaxWidth/85],[startX+StartPoint.clientWidth*5,372]);
            //console.log('SlopeEquation', SlopeEquation);
            var target = this.AllBlockColor;
            for (let index = 0; index < target.length; index++) {
                const element = target[index];
                for (let i2 = 0; i2 < SlopeEquation.length; i2++) {
                    var T = SlopeEquation[i2];
                    //console.log('SlopeEquation[index]', i2, T, element.coordinateData.top_Left);

                    if (T[0] > element.coordinateData.top_Left[0] &&
                        T[0] < element.coordinateData.top_Right[0] &&
                        T[1] > element.coordinateData.top_Left[1] &&
                        T[1] < element.coordinateData.bottom_Left[1]
                    ) {
                        element.color = [0,0,255,1];
                        continue;
                    }
                }
            }
            if(startX<this.imageMaxWidth){
                startX+=22;
            }
            else{
                startX=-StartPoint.clientWidth*5;
                this.mode_reset();
            }
        },25)
    }
    mode_SlopeRight(){
        //this.addBlockIndex();
        clearInterval(this.repeater);
        this.currentBlockIndex=30;
        //this.getNowBlock().color = [0,0,255,1];
        var repeatMin=5;
        var repeatMax=200;
        var repeatCount=0;
        var StartPoint = this.getNowBlock().coordinateData;

        //var SlopeEquation=this.SlopeEquation([0,0],[834,372]);//StartPoint.clientWidth
        var startX=-StartPoint.clientWidth*5;

        this.repeater=setInterval(()=>{
            var SlopeEquation=this.SlopeEquation([0+startX,this.imageMaxWidth/85],[startX+StartPoint.clientWidth*5,372]);
            //console.log('SlopeEquation', SlopeEquation);
            this.mode_reset();

            var target = this.AllBlockColor;
            for (let index = 0; index < target.length; index++) {
                const element = target[index];
                for (let i2 = 0; i2 < SlopeEquation.length; i2++) {
                    var T = SlopeEquation[i2];
                    //console.log('SlopeEquation[index]', i2, T, element.coordinateData.top_Left);

                    if (T[0] > element.coordinateData.top_Left[0] &&
                        T[0] < element.coordinateData.top_Right[0] &&
                        T[1] > element.coordinateData.top_Left[1] &&
                        T[1] < element.coordinateData.bottom_Left[1]
                    ) {
                        element.color = [0,0,255,1];
                        continue;
                    }
                }
            }
            if(startX<this.imageMaxWidth){
                startX+=22;
            }
            else{
                startX=-StartPoint.clientWidth*5;
                this.mode_reset();
            }
            //clearInterval(this.repeater);

            //     var dis = this.distanceCalculation(0, 0, element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                
            //     //var compareResult = this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
            //     //+(repeatCount*50)
            //     //console.log('setCoordinate', StartPoint.center_Point[0],element.coordinateData.center_Point[0])
            //     //var compareResult =Math.abs(0-element.coordinateData.center_Point[0]);
            //     var compareResult =repeatCount*50;
            //     repeatMax=compareResult+200;
            //     //if (compareResult>dis &&repeatMax<element.coordinateData.top_Right[0]) {

            //     if (dis>compareResult) {
            //         element.color = [255,255,0,1];
            //     }
            //     else {
            //         element.color = [0,255,0,1];
            //     }
            // }
            // if(repeatCount<15 &&repeatMax<this.imageMaxWidth){
            //     repeatCount+=1;
            // }
            // else{
            //     repeatCount=0;
            // }
        },25)
    }
    mode_Pingpong(){
        clearInterval(this.repeater);
        this.currentBlockIndex=0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        this.setAllBlockColor([0,0,0,1]);
        var H_spacing=Math.trunc(this.imageMaxHeight/StartPoint.clientHeight);
        var w_range=Math.trunc(this.imageMaxWidth/this.minKeyWidth);
        var repeatCountList=[];
        var times=0;
       //  this.twoDimensionalArray[0][0].color=[0,0,255,1];
        //     //this.getRandom(0,4),
        //     //this.getRandom(1,50)
        //     //var k = (movement + x) / this.imageMaxHeight;    // 回合數
        //     //var r = (movement + x) % this.imageMaxHeight;    // 餘數
        //     //console.log(x, y);
       var target = this.twoDimensionalArray;
      // var a2=[0,3,5,8,11,13];
        for (let index = 0; index < this.max_H_Number; index++) {
            //this.twoDimensionalArray[index][0].color=[0,0,255,1];

            repeatCountList.push({
                color: [0, 0, 255, 1],
                pos: [0,index],
                backupPos:[0,index],
                repeatTime: this.getRandom(0,3),
            });
        }

        this.repeater=setInterval(()=>{
            this.resetTwoDimensionalArray();
            for (let i2 = 0; i2 < repeatCountList.length; i2++) {
                var T = repeatCountList[i2];
                if (T.repeatTime > 0) {
                    T.repeatTime -= 1;
                }
                if (T.repeatTime == 0) {
                    if (T.pos[0] + 1 < 10) {
                            T.pos[0] += 1;              
                    }
                    else {
                        T.pos[0]=T.backupPos[0];
                        T.repeatTime = 0;
                    }
                    //console.log('repeatCountList;', i2,repeatCountList[i2].repeatCount);
                }
                this.twoDimensionalArray[T.pos[0]][T.pos[1]].color=T.color;              
            }
            this.showTwoDimensionalArray();
        },50);
    }
    mode_P2(){
        clearInterval(this.repeater);
        this.currentBlockIndex=0;
        //this.getNowBlock().color = [0,0,255,1];
        var repeatCount=0;
        var StartPoint = this.getNowBlock().coordinateData;
        this.setAllBlockColor([0,0,0,1]);
        //this.mode_reset();
        this.setAllBlockAlpha
        //var SlopeEquation=this.SlopeEquation([0,0],[834,372]);//StartPoint.clientWidth
        var startX=-StartPoint.clientWidth*5;
        var movewidth=4;

        var horizontalList=[];
        //Math.trunc(3.7); // 3
        var H_range=Math.trunc(372/40);
        this.repeater=setInterval(()=>{
            this.setAllBlockColor([0,0,0,1]);
            horizontalList=[];
            //console.log('SlopeEquation', SlopeEquation);
            var spacing=-5;
            for (let index = 0; index < 372; index += 40) {  
                var ypos = index;
                //horizontalList.push([xpos, ypos]);
                spacing += 1;
                //var ypos = 25;
                for (let index2 = spacing*22+repeatCount*43; index2 < spacing*22+140+repeatCount*43; index2+=1) {
                    var xpos = index2;      
                    horizontalList.push([index2, ypos]);
                }
                // var xpos = index;
                // horizontalList.push([xpos, ypos]);
                //+(repeatCount*this.minKeyWidth)
            }
            console.log('horizontalList', horizontalList);

            
            var target = this.AllBlockColor;
            for (let index = 0; index < target.length; index++) {
                const element = target[index];
                //console.log('_mode_Pingpong;', element);
                for (let i2 = 0; i2 < horizontalList.length; i2++) {
                    var T = horizontalList[i2];
                    //console.log('SlopeEquation[index]', i2, T, element.coordinateData.top_Left);
                    if (T[0] > element.coordinateData.top_Left[0] &&
                        T[0] < element.coordinateData.top_Right[0] &&
                        T[1] > element.coordinateData.top_Left[1] &&
                        T[1] < element.coordinateData.bottom_Left[1]
                    ) {
                        element.color = [0,0,255,1];
                        continue;
                    }
                }
            }
            // if(startX<this.imageMaxWidth){
            //     startX+=22;
            // }
            // else{
            //     startX=-StartPoint.clientWidth*5;
            //     this.mode_reset();
            // }
            //clearInterval(this.repeater);
            //     var dis = this.distanceCalculation(0, 0, element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
            //repeatCount+=1;
            if(spacing*22+repeatCount*43<this.imageMaxWidth){
                repeatCount+=1;
            }
            else{
                repeatCount=0;
                //this.setAllBlockColor([255,255,255,1]);
            }
        },100)
    }
    mode_Rainbow(){
        clearInterval(this.repeater);
       this.currentBlockIndex=0;
       var rainbowColors=this.rainbow7Color();
       var StartPoint = this.getNowBlock(0).coordinateData;
       this.setAllBlockColor([0,0,0,1]);
       var H_spacing=Math.trunc(this.imageMaxHeight/StartPoint.clientHeight);
       var w_range=Math.trunc(this.imageMaxWidth/this.minKeyWidth);
       var repeatCountList=[];
       var times=0;
      //  this.twoDimensionalArray[0][0].color=[0,0,255,1];
       //     //this.getRandom(0,4),
       //     //this.getRandom(1,50)
       //     //var k = (movement + x) / this.imageMaxHeight;    // 回合數
       //     //var r = (movement + x) % this.imageMaxHeight;    // 餘數
       //     //console.log(x, y);
      var target = this.twoDimensionalArray;
     // var a2=[0,3,5,8,11,13];
       for (let index = 0; index < this.max_X_Number; index++) {
           //this.twoDimensionalArray[index][0].color=[0,0,255,1];
           for (let index2 = 0; index2 < rainbowColors.length; index2++) {
               repeatCountList.push({
                   nowPos:index2,
                   color: rainbowColors[index2],
                   pos: [index,index2],
                   backupPos:[index,index2],
                   step: 5,
                   nowStep: 0,
               });
           }
       }
       this.repeater=setInterval(()=>{
           this.resetTwoDimensionalArray();
           for (let i2 = 0; i2 < repeatCountList.length; i2++) {
               var T = repeatCountList[i2];   
               if (T.nowStep + 1 < T.step) {
                T.nowStep+=1;
               }
               else{
                T.nowStep=0;
                T.nowPos+=1;
               }
               var temp_C=this.rainbow7Color()[T.nowPos];
               var nextColor=[];
               if (T.nowPos + 1 < this.rainbow7Color().length) {
                   nextColor = this.rainbow7Color()[T.nowPos + 1];
               }
               else {
                   T.nowPos = 0;1
                   nextColor = this.rainbow7Color()[T.nowPos];
               }
               T.color[0]= (temp_C[0]*(T.step-T.nowStep)+nextColor[0]*T.nowStep)/T.step;
               T.color[1]= (temp_C[1]*(T.step-T.nowStep)+nextColor[1]*T.nowStep)/T.step;
               T.color[2]= (temp_C[2]*(T.step-T.nowStep)+nextColor[2]*T.nowStep)/T.step;
               console.log('T.step;',T.step,T.nowStep,temp_C,nextColor);

            //    if (T.repeatTime > 0) {
            //        T.repeatTime -= 1;
            //    }
            //    if (T.repeatTime == 0) {
            //        if (T.pos[1] - 1 > 0) {
            //            T.pos[1] -=1;              
            //        }
            //        else {
            //            T.pos[1]=T.backupPos[1];
            //            T.repeatTime = 0;
            //        }
            //        //console.log('repeatCountList;', i2,repeatCountList[i2].repeatCount);
            //    }
               this.twoDimensionalArray[T.pos[0]][T.pos[1]].color=T.color;              
           }
           this.showTwoDimensionalArray();
       },50);
   }
    mode_Cooking(){
         clearInterval(this.repeater);
        this.currentBlockIndex=0;
        var rainbowColors=this.rainbow7Color();
        var StartPoint = this.getNowBlock(0).coordinateData;
        this.setAllBlockColor([0,0,0,1]);
        var H_spacing=Math.trunc(this.imageMaxHeight/StartPoint.clientHeight);
        var w_range=Math.trunc(this.imageMaxWidth/this.minKeyWidth);
        var repeatCountList=[];
        var times=0;
       var target = this.twoDimensionalArray;
      // var a2=[0,3,5,8,11,13];
         
        for (let index = 0; index < this.max_X_Number; index++) {
            //this.twoDimensionalArray[index][0].color=[0,0,255,1];
            for (let index2 = 0; index2 < this.max_Y_Number; index2++) {
                repeatCountList.push({
                    nowPos:0,
                    color:[0,0,0,1],
                    pos: [index,index2],
                    backupPos:[index,index2],
                    repeatTime: this.getRandom(0,3),
                });
            }

        }

        this.repeater=setInterval(()=>{
            this.resetTwoDimensionalArray();
            for (let i2 = 0; i2 < repeatCountList.length; i2++) {
                var T = repeatCountList[i2];
                if (T.repeatTime > 0) {
                    T.repeatTime -= 1;
                }
                if (T.repeatTime == 0) {
                    if (T.pos[1] - 1 > 0) {
                        T.pos[1] -=1;              
                    }
                    else {
                        T.pos[1]=T.backupPos[1];
                        T.repeatTime = 0;
                    }
                    //console.log('repeatCountList;', i2,repeatCountList[i2].repeatCount);
                }
                this.twoDimensionalArray[T.pos[0]][T.pos[1]].color=T.color;              
            }
            this.showTwoDimensionalArray();
        },50);
    }
    mode_Snowing(){
        clearInterval(this.repeater);
        this.currentBlockIndex=0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        this.setAllBlockColor([0,0,0,1]);
        var H_spacing=Math.trunc(this.imageMaxHeight/StartPoint.clientHeight);
        var w_range=Math.trunc(this.imageMaxWidth/this.minKeyWidth);
        var repeatCountList=[];
        for (let x=StartPoint.top_Left[0]; x<this.imageMaxWidth; x+=this.minKeyWidth) {
            //var xpos=[];
            //StartPoint.top_Left[1]
            var temp_list=[];
            //console.log('StartPoint.top_Left[1]',  StartPoint.top_Left[1],this.imageMaxHeight);

            for (let index2 = StartPoint.top_Left[1];index2 < this.imageMaxHeight; index2+=StartPoint.clientHeight) {
                temp_list.push([x,index2]);
            }
            repeatCountList.push({
                color:[0,255,255,1],
                i_list:temp_list,
                pos:0,
                repeatCount:6,
                repeatTime:this.getRandom(1,25),
            });
            //this.getRandom(1,50)
            //var k = (movement + x) / this.imageMaxHeight;    // 回合數
            //var r = (movement + x) % this.imageMaxHeight;    // 餘數
            //console.log(x, y);
        }
        console.log('repeatCountList;', repeatCountList); 
        this.repeater=setInterval(()=>{
            this.setAllBlockColor([0,0,0,1]);
            //current_time+=5;
            for (let i2 = 0; i2 < repeatCountList.length; i2++) {
                var T = repeatCountList[i2];
                if(T.repeatTime>0){
                    repeatCountList[i2].repeatTime-=1;
                }
                else if(T.repeatTime==0&& T.repeatCount<T.i_list.length){
                    repeatCountList[i2].repeatCount+=1;
                   //console.log('repeatCountList;', i2,repeatCountList[i2].repeatCount);
                }              
                if(T.repeatCount>=T.i_list.length){
                    repeatCountList[i2].repeatCount=0;
                    repeatCountList[i2].repeatTime=this.getRandom(1,25);
                }      
            }
            var target = this.AllBlockColor;
            
            for (let index = 0; index < target.length; index++) {
                const element = target[index];
                for (let i2 = 0; i2 < repeatCountList.length; i2++) {
                    var T = repeatCountList[i2];
                    //console.log('T_now;', T);
                    var now=T.i_list[T.repeatCount];
                    //console.log('now;', now);
                    if (now[0] >= element.coordinateData.top_Left[0] &&
                        now[0] <= element.coordinateData.top_Right[0] &&
                        now[1] >= element.coordinateData.top_Left[1] &&
                        now[1] <= element.coordinateData.bottom_Left[1]
                    )
                    {
                        target[index].color=repeatCountList[i2].color;
                    }                
                }
            }

        },100)
    }
    mode_DigitTimes(){
        clearInterval(this.repeater);
        this.currentBlockIndex=0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        this.setAllBlockColor([0,0,0,1]);
        var H_spacing=Math.trunc(this.imageMaxHeight/StartPoint.clientHeight);
        var w_range=Math.trunc(this.imageMaxWidth/this.minKeyWidth);
        var repeatCountList=[];
        var times=0;
       //  this.twoDimensionalArray[0][0].color=[0,0,255,1];
        //     //this.getRandom(0,4),
        //     //this.getRandom(1,50)
        //     //var k = (movement + x) / this.imageMaxHeight;    // 回合數
        //     //var r = (movement + x) % this.imageMaxHeight;    // 餘數
        //     //console.log(x, y);
       var target = this.twoDimensionalArray;
       var a=[0,3,5];
      // var a2=[0,3,5,8,11,13];
       var randomList=[];
       for (let i = 0; i < this.breakGradation[0][1]-1
        ; i++) {
           randomList.push(this.getRandom(0, this.breakGradation[0][1]-1));   //亂數產生，亂數產生的範圍是1~9
           for (let j = 0; j < i; j++) {
               while (randomList[j] == randomList[i])    //檢查是否與前面產生的數值發生重複，如果有就重新產生
               {
                   j = 0;  //如有重複，將變數j設為0，再次檢查 (因為還是有重複的可能)
                   randomList[i] = this.getRandom(0, this.breakGradation[0][1]-1);   //重新產生，存回陣列，亂數產生的範圍是1~9
               }
           }
       }
        for (let index = 0; index <= this.breakGradation[0][1]; index++) {
            //this.twoDimensionalArray[index][0].color=[0,0,255,1];

            repeatCountList.push({
                color: [0, 0, 255, 1],
                pos: [index,index%(this.max_H_Number/2)],
                backupPos:[index,index%(this.max_H_Number/2)],
                repeatTime: this.getRandom(0,3),
            });
        }

        this.repeater=setInterval(()=>{
            this.resetTwoDimensionalArray();
            for (let i2 = 0; i2 < repeatCountList.length; i2++) {
                var T = repeatCountList[i2];
                if (T.repeatTime > 0) {
                    T.repeatTime -= 1;
                }
                if (T.repeatTime == 0) {
                    if (T.pos[1] + 1 < this.max_H_Number) {
                        if(T.pos[0]<1){
                            T.pos[1] += 1;
                        }
                        else{
                            T.pos[1] += 1;
                            T.pos[0] += 1;
                        }

                    }
                    else {
                        T.pos[0]=T.backupPos[0];
                        T.pos[1]=0;
                        T.repeatTime = 1;
                    }
                    //console.log('repeatCountList;', i2,repeatCountList[i2].repeatCount);
                }
                this.twoDimensionalArray[T.pos[0]][T.pos[1]].color=T.color;              
            }
            this.showTwoDimensionalArray();
        },500);


    }
    mode_SpreadLeftAndRight(setColor=[255,0,0,1]){
        //this.addBlockIndex();
        clearInterval(this.repeater);
        this.currentBlockIndex=77;
        //this.getNowBlock().color = [0,0,255,1];
        var repeatMin=5;
        var repeatMax=200;
        var repeatCount=0;
        var StartPoint = this.getNowBlock().coordinateData;
 
        this.repeater=setInterval(()=>{
            this.mode_reset();

            var target = this.AllBlockColor;
            // sub_disL-=50;
            // sub_disR+=50;
            var horizontalList=[];
            if(repeatCount==0){
                this.getNowBlock().color=setColor;
            }
            for (let index = 0; index < target.length; index++) {
                const element = target[index];
                var Ysdis=Math.abs(StartPoint.top_Left[1]-element.coordinateData.top_Left[1]);
                if (Ysdis < 10) {
                    horizontalList.push(index);               
                }
            }
            var resultL = horizontalList.find((x) => x == this.currentBlockIndex-repeatCount);
            var resultR = horizontalList.find((x) => x == this.currentBlockIndex+repeatCount);
            if (resultL == undefined && resultR == undefined) {
                repeatCount=0;
            }
            else{
                if (resultL != undefined) {
                    target[resultL].color = setColor;
                }
                if (resultR != undefined) {
                    target[resultR].color = setColor
                };
                repeatCount+=1;

            }
           
        },50)
        //clearInterval(this.repeater);
    }
    mode_SinGraphics(colors=[]){
        colors =[[255,0,0,1],[0,255,0,1],[0,0,255,1]];
        var Brightness=1;
        // var mode=0;
        // if(colors.length>1){
        //     mode=1;
        // }
        clearInterval(this.repeater);
        this.currentBlockIndex=43;
        //this.getNowBlock().color = 'blue';
        var repeatMin=5;
        var repeatMax=200;
        var repeatCount=0;
        var StartPoint = this.getNowBlock().coordinateData;
        var horizontalList=[];
        var record=0;
        //var radian = 75 * Math.PI / 180;    //計算出弧度

        var maxH=268;
        this.repeater=setInterval(()=>{
            this.setAllBlockColor([0,0,0,1]);
            //console.log('SlopeEquation', SlopeEquation);
            var spacing=-5;
            horizontalList=[];
            // for (let x = 0; x < 834; x++) { 
            //     const y = Math.sin(x * 2) * 100 ;
            //     horizontalList.push([x, y]);

            // }
            // for (let x = 0; x < this.imageMaxWidth; x++) { 
            //     const radians = x / this.imageMaxWidth * Math.PI * 2;
            //     const scale = (Math.sin(radians - Math.PI * 0.5) + 1) * 0.5*maxH; 
            //     const y = Math.sin(x * 0.02 + 6) * 5 * scale; 
            //     horizontalList.push([x, y]);

            // }
            
            for (let i_xpos = 0; i_xpos < 834; i_xpos++) {
                var ratio  =Math.sin(i_xpos/2 * Math.PI / 180);
                var xpos=120+i_xpos;
                //const scale = (Math.sin(radian - Math.PI * 0.5) + 1) * 0.5*maxH; 
                //var ypos=22+((ratio+1)/2*372);

                var h =22+((ratio+1)/2*268);

                horizontalList.push([xpos, h]);
            }
            for (let i2 = 0; i2 < horizontalList.length; i2++) {
                var T = horizontalList[i2];
                //console.log('SlopeEquation[index]', i2, T, element.coordinateData.top_Left);
                if (T[1]%372) {

                }
            }

            console.log('horizontalList', horizontalList);    
            var target = this.AllBlockColor;
            for (let index = 0; index < target.length; index++) {
                const element = target[index];
                for (let i2 = 0; i2 < horizontalList.length; i2++) {
                    var T = horizontalList[i2];
                    //console.log('SlopeEquation[index]', i2, T, element.coordinateData.top_Left);
                    if (T[0] > element.coordinateData.top_Left[0] &&
                        T[0] < element.coordinateData.top_Right[0] &&
                        T[1] > element.coordinateData.top_Left[1] &&
                        T[1] < element.coordinateData.bottom_Left[1]
                    ) {
                        element.color = [0,0,255,1];
                        continue;
                    }
                }
            }
            
            // if(startX<this.imageMaxWidth){
            //     startX+=22;
            // }
            // else{
            //     startX=-StartPoint.clientWidth*5;
            //     this.mode_reset();
            // }
            //clearInterval(this.repeater);
            //     var dis = this.distanceCalculation(0, 0, element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
            //repeatCount+=1;
            //if(spacing*22+repeatCount*43<this.imageMaxWidth){
                // if(maxH==0||maxH==225){
                //     repeatCount+=1;
                // }
                // if(repeatCount%2==0){
                //     maxH-=5;
                // }
                // else{
                //     maxH+=5;
                // }
                //repeatCount+=1;
                //record+=0.15;
                if(record<=0||record>=1){
                    repeatCount+=1;
                }
                if(repeatCount%2==0){
                    record-=0.15;
                }
                else{
                    record+=0.15;
                }
            //}
            //else{
                //repeatCount=0;
                //this.setAllBlockColor([255,255,255,1]);
            //}
        },150)
    }
    mode_HeartbeatSensor(colors=[]){
        colors =[[255,0,0,1],[0,255,0,1],[0,0,255,1]];
        var Brightness=1;
        // var mode=0;
        // if(colors.length>1){
        //     mode=1;
        // }
        

        clearInterval(this.repeater);
        this.currentBlockIndex=43;
        //this.getNowBlock().color = 'blue';
        var repeatMin=5;
        var repeatMax=200;
        var repeatCount=0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        var horizontalList=[]
        ;
        for (let index = 0; index < this.imageMaxWidth; index+=40) {
            var ratio  =Math.sin((index * Math.PI / 180))
                //var xpos=120+index;
                //const scale = (Math.sin(radian - Math.PI * 0.5) + 1) * 0.5*maxH; 
            var ypos=(ratio+1)/2*268;
            horizontalList.push(
                {
                    repeatCount:0,
                    coordinate:[index,StartPoint.top_Left[0]+ypos],
                }    
               );
            console.log('horizontalList', horizontalList);    
        }

        var record=0;
        //var radian = 75 * Math.PI / 180;    //計算出弧度
        var maxH=268;
        this.repeater=setInterval(()=>{
            this.setAllBlockColor([0,0,0,1]);
            var spacing=-5;
            for (let index = 0; index < horizontalList.length; index++) {
                var h_Item=horizontalList[index];
                if(h_Item['coordinate'][1]<=0||h_Item['coordinate'][1]>=this.imageMaxHeight){
                    h_Item['repeatCount']+=1;
                }
                if(h_Item['repeatCount']%2==0){
                    h_Item['coordinate'][1]-=40;
                }
                else{
                    h_Item['coordinate'][1]+=40;
                }   
                //console.log('horizontalList', horizontalList);    
            }
    
            console.log('horizontalList', horizontalList);    
            var target = this.AllBlockColor;
            for (let index = 0; index < target.length; index++) {
                const element = target[index];
                for (let i2 = 0; i2 < horizontalList.length; i2++) {
                    var T = horizontalList[i2].coordinate;
                    //console.log('SlopeEquation[index]', i2, T, element.coordinateData.top_Left);
                    if (T[0] >= element.coordinateData.top_Left[0] &&
                        T[0] <= element.coordinateData.top_Right[0] &&
                        T[1] >= element.coordinateData.top_Left[1] &&
                        T[1] <= element.coordinateData.bottom_Left[1]
                    ) {
                        element.color = [0,0,255,1];
                        continue;
                    }
                }
            }

        },60)
    }
    mode_Matrix3_Raindow(colors=[]){
        colors =[[255,0,0,1],[0,255,0,1],[0,0,255,1]];
        var Brightness=1;
        clearInterval(this.repeater);
        this.currentBlockIndex=43;
        var repeatMin=5;
        var repeatMax=200;
        var repeatCount=0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        var horizontalList=[];
        var target = this.AllBlockColor;
        var repeatCountList=[];
        for (let index = 0; index < target.length; index++) {
            const element = target[index];
            // for (let i2 = 0; i2 < horizontalList.length; i2++) {
                element.color=this.getRgbRandom();
                if(element.color[0]==255){
                    repeatCountList.push(0);
                }
                else if(element.color[1]==255){
                    repeatCountList.push(1);
                }
                else if(element.color[2]==255){
                    repeatCountList.push(2);
                }
        }
        var record=0;
        var maxH=268;
        this.repeater=setInterval(()=>{
            var randomList=[];
            for (let i = 0; i < 30; i++) {
                randomList.push(this.getRandom(0, target.length-1));   //亂數產生，亂數產生的範圍是1~9
                for (let j = 0; j < i; j++) {
                    while (randomList[j] == randomList[i])    //檢查是否與前面產生的數值發生重複，如果有就重新產生
                    {
                        j = 0;  //如有重複，將變數j設為0，再次檢查 (因為還是有重複的可能)
                        randomList[i] = this.getRandom(0, target.length-1);   //重新產生，存回陣列，亂數產生的範圍是1~9
                    }
                }
            }
            for (let index = 0; index < randomList.length; index++) {
                const element = target[randomList[index]];
                let subPos = repeatCountList[randomList[index]];
                if(element.color[subPos]>0)
                {
                    element.color[subPos] -= 5;
                }
                if(subPos<2){
                    element.color[subPos+1] += 5;
                }
                else{
                    element.color[0] += 5;
                }
                if(element.color[subPos]==0){
                    if(subPos+1<3){
                        repeatCountList[randomList[index]]+=1;
                    }
                    else{
                        repeatCountList[randomList[index]]=0;
                    }                  
                }
               

            }
            var spacing=-5;
        },10)
    }
    mode_Matrix3_SingleColor(colors=[]){
        colors =[[255,0,0,1],[0,255,0,1],[0,0,255,1]];
        var Brightness=1;
        clearInterval(this.repeater);
        this.currentBlockIndex=43;
        var repeatMin=5;
        var repeatMax=200;
        var repeatCount=0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        var horizontalList=[];
        this.setAllBlockColor([0,0,0,1]);
        var target = this.AllBlockColor;
        var repeatCountList=[];
        for (let index = 0; index < target.length; index++) {
            const element = target[index];
            // for (let i2 = 0; i2 < horizontalList.length; i2++) {
                //element.color=this.getRgbRandom();
                element.color=[0,0,this.getRandom(0,255),1];
                repeatCountList.push({
                    color:element.color,
                    pos:2,
                    repeatCount:1,
                    repeatTime:this.getRandom(5,99),
                });
                if(element.color[0]==255){
                    repeatCountList.push({
                        color:element.color,
                        pos:0,
                        repeatCount:1,
                        repeatTime:this.getRandom(5,25),
                    });
                }
                else if(element.color[1]==255){
                    repeatCountList.push({
                        color:element.color,
                        pos:1,
                        repeatCount:1,
                        repeatTime:this.getRandom(5,25),
                    });
                }
                else if(element.color[2]==255){
                    repeatCountList.push({
                        color:element.color,
                        pos:2,
                        repeatCount:1,
                        repeatTime:this.getRandom(5,25),
                    });
                }
            console.log('repeatCountList;', repeatCountList); 
        }
        var record=0;
        var maxH=268;
        var decreasing=1;
        this.repeater=setInterval(()=>{
            // var randomList=[];
            // for (let i = 0; i < 30; i++) {
            //     randomList.push(this.getRandom(0, target.length-1));   //亂數產生，亂數產生的範圍是1~9
            //     for (let j = 0; j < i; j++) {
            //         while (randomList[j] == randomList[i])    //檢查是否與前面產生的數值發生重複，如果有就重新產生
            //         {
            //             j = 0;  //如有重複，將變數j設為0，再次檢查 (因為還是有重複的可能)
            //             randomList[i] = this.getRandom(0, target.length-1);   //重新產生，存回陣列，亂數產生的範圍是1~9
            //         }
            //     }
            // }
            for (let index = 0; index < repeatCountList.length; index++) {
                let list = repeatCountList[index];
                if(list.repeatTime>0){
                    list.repeatTime-=1;
                }
                if(list.repeatTime==0){
                    if(list.repeatCount%2==0)    
                    {
                        list.color[list.pos]-=decreasing;
                    }
                    else{
                        list.color[list.pos]+=decreasing;
                    }
                    this.AllBlockColor[index].color=list.color;
                    if(list.color[list.pos]==0||list.color[list.pos]==255) {
                        list.repeatCount+=1;
                        var newRand=this.getRandom(5,25);
                        list.repeatTime=newRand;
                        console.log('repeatCount+=1;', newRand);

                        
                    }
                }
               
               
                // if(element.color[subPos]>0)
                // {
                //     element.color[subPos] -= 5;
                // }
                // // if(subPos<2){
                // //     element.color[subPos+1] += 5;
                // // }
                // // else{
                // //     element.color[0] += 5;
                // // }
                // if(element.color[subPos]==0){
                //     if(subPos+1<3){
                //         repeatCountList[randomList[index]]+=1;
                //     }
                //     else{
                //         repeatCountList[randomList[index]]=0;
                //     }                  
                // }        
            }
        },1)
    }
    mode_Matrix2(colors=[],rainbow=false){
        colors =[[255,0,0,1],[0,255,0,1],[0,0,255,1]];
        var Brightness=1;
        clearInterval(this.repeater);
        this.currentBlockIndex=43;
        var StartPoint = this.getNowBlock(0).coordinateData;
        var horizontalList=[];
        this.setAllBlockColor([0,0,0,1]);
        var target = this.AllBlockColor;
        var repeatCountList=[];
        for (let index = 0; index < target.length; index++) {
            const element = target[index];
            // for (let i2 = 0; i2 < horizontalList.length; i2++) {
                //element.color=this.getRgbRandom();
                element.color=[0,0,0,1];
                var temp_pos;
                if(rainbow){
                    temp_pos=this.getRandom(0,2)
                }
                else{
                    temp_pos=2
                }       
                repeatCountList.push({
                    color:element.color,
                    pos:temp_pos,
                    repeatCount:1,
                    repeatTime:this.getRandom(150,800),
                });
                if(element.color[0]==255){
                    repeatCountList.push({
                        color:element.color,
                        pos:0,
                        repeatCount:1,
                        repeatTime:this.getRandom(5,25),
                    });
                }
                else if(element.color[1]==255){
                    repeatCountList.push({
                        color:element.color,
                        pos:1,
                        repeatCount:1,
                        repeatTime:this.getRandom(5,25),
                    });
                }
                else if(element.color[2]==255){
                    repeatCountList.push({
                        color:element.color,
                        pos:2,
                        repeatCount:1,
                        repeatTime:this.getRandom(5,25),
                    });
                }
            console.log('repeatCountList;', repeatCountList); 
        }
        var decreasing=1;
        this.repeater=setInterval(()=>{
            // var randomList=[];
            // for (let i = 0; i < 30; i++) {
            //     randomList.push(this.getRandom(0, target.length-1));   //亂數產生，亂數產生的範圍是1~9
            //     for (let j = 0; j < i; j++) {
            //         while (randomList[j] == randomList[i])    //檢查是否與前面產生的數值發生重複，如果有就重新產生
            //         {
            //             j = 0;  //如有重複，將變數j設為0，再次檢查 (因為還是有重複的可能)
            //             randomList[i] = this.getRandom(0, target.length-1);   //重新產生，存回陣列，亂數產生的範圍是1~9
            //         }
            //     }
            // }
            for (let index = 0; index < repeatCountList.length; index++) {
                let list = repeatCountList[index];
                if(list.repeatTime>0){
                    list.repeatTime-=1;
                }
                if(list.repeatTime==0){
                    if(list.repeatCount%2==0)    
                    {
                        list.color[list.pos]-=decreasing;
                    }
                    else{
                        list.color[list.pos]+=decreasing;
                    }
                    this.AllBlockColor[index].color=list.color;
                    if(list.color[list.pos]==0||list.color[list.pos]==255) {
                        list.repeatCount+=1;
                        var newRand=this.getRandom(150,800);
                        list.repeatTime=newRand;
                        console.log('repeatCount+=1;', newRand);
                        if(list.color[list.pos]==0){
                            if(rainbow){
                                list.pos=this.getRandom(0,2)
                            }
                            else{
                                list.pos=2;
                            }
                        }
                                       
                    }
                }
               
               
                // if(element.color[subPos]>0)
                // {
                //     element.color[subPos] -= 5;
                // }
                // // if(subPos<2){
                // //     element.color[subPos+1] += 5;
                // // }
                // // else{
                // //     element.color[0] += 5;
                // // }
                // if(element.color[subPos]==0){
                //     if(subPos+1<3){
                //         repeatCountList[randomList[index]]+=1;
                //     }
                //     else{
                //         repeatCountList[randomList[index]]=0;
                //     }                  
                // }        
            }
        },1)
    }
    mode_T0(colors=[]){
        colors =[[255,0,0,1],[0,255,0,1],[0,0,255,1]];
        //this.addBlockIndex();
        var Brightness=1;
        // var mode=0;
        // if(colors.length>1){
        //     mode=1;
        // }
        clearInterval(this.repeater);
        this.currentBlockIndex=43;
        //this.getNowBlock().color = [0,0,255,1];
        var repeatMin=5;
        var repeatMax=200;
        var repeatCount=0;
        var StartPoint = this.getNowBlock().coordinateData;
        var horizontalList=[];
        var target = this.AllBlockColor;
        var setColorArr;
        var randomValue=this.getRandom(0,colors.length-1);
             
        var setColor=colors[randomValue];
        var step_End=false;
        console.log('setColor', setColor)
        this.mode_reset();
        if(repeatCount==0){
            this.getNowBlock().color=setColor;
        } 
        for (let index = 0; index < target.length; index++) {
            const element = target[index];
            var Ysdis=Math.abs(StartPoint.top_Left[1]-element.coordinateData.top_Left[1]);
            if (Ysdis < 10) {
                horizontalList.push(index);               
            }
        }
        
        this.repeater=setInterval(()=>{
            setColor=colors[this.getRandom(0,colors.length-1)];
            var resultL = horizontalList.find((x) => x == this.currentBlockIndex-repeatCount);
            var resultR = horizontalList.find((x) => x == this.currentBlockIndex+repeatCount);
            if (step_End) {
                if (Brightness > 0) {
                    Brightness -= 0.05;
                    for (let index = 0; index < horizontalList.length; index++) {
                        const element = target[horizontalList[index]];
                        var temp=colors[this.getRandom(0,colors.length-1)];
                        temp[3]=Brightness;
                        element.color =temp;
                    }
                }
                else {
                    Brightness = 1;
                    //step_End = false;
                    //clearInterval(this.repeater);
                }
                return;
            }
            else
            if (resultL == undefined && resultR == undefined) {

                repeatCount=0;
                step_End=true;
            }
            else{
                if (resultL != undefined) {
                    target[resultL].color = setColor;
                }
                if (resultR != undefined) {
                    target[resultR].color = setColor;
                };
                repeatCount+=1;
            }
        },50)
        // this.repeaterTimeout=if(Brightness>0){
        //     Brightness-=0.01;
        // }
        //clearInterval(this.repeater);
    }
    mode_T1(colors=[]){
        colors =[[255,0,0,1],[0,255,0,1],[0,0,255,1]];
        var Brightness=1;
        // var mode=0;
        // if(colors.length>1){
        //     mode=1;
        // }
        clearInterval(this.repeater);
        this.currentBlockIndex=43;
        //this.getNowBlock().color = [0,0,255,1];
        var repeatMin=5;
        var repeatMax=200;
        var repeatCount=0;
        var StartPoint = this.getNowBlock().coordinateData;
        var horizontalList=[];
        var target = this.AllBlockColor;
        var randomValue=this.getRandom(0,colors.length-1);
        var setColor=colors[randomValue];


        var step_End=false;
        console.log('setColor', setColor)
        this.mode_reset();
        if(repeatCount==0){
            this.getNowBlock().color=setColor;
        } 
        for (let index = 0; index < target.length; index++) {
            const element = target[index];
            var Ysdis=Math.abs(StartPoint.top_Left[1]-element.coordinateData.top_Left[1]);
            //if (Ysdis < 10) {
                horizontalList.push(index);               
            //}
        }
        
        this.repeater=setInterval(()=>{
            setColor=colors[this.getRandom(0,colors.length-1)];
            var resultL = horizontalList.find((x) => x == this.currentBlockIndex-repeatCount);
            var resultR = horizontalList.find((x) => x == this.currentBlockIndex+repeatCount);
            if (step_End) {
                if (Brightness > 0) {
                    Brightness -= 0.05;
                    for (let index = 0; index < horizontalList.length; index++) {
                        const element = target[horizontalList[index]];
                        var temp=colors[this.getRandom(0,colors.length-1)];
                        temp[3]=Brightness;
                        element.color =temp;
                    }
                }
                else {
                    Brightness = 1;
                    step_End = false;
                    clearInterval(this.repeater);
                }
                return;
            }
            else
            if (resultL == undefined && resultR == undefined) {

                repeatCount=0;
                step_End=true;
            }
            else{
                if (resultL != undefined) {
                    target[resultL].color = setColor;
                }
                if (resultR != undefined) {
                    target[resultR].color = setColor
                };
                repeatCount+=1;
            }
        },50)
        // this.repeaterTimeout=if(Brightness>0){
        //     Brightness-=0.01;
        // }
        //clearInterval(this.repeater);
    }
    mode_T2(colors=[]){
        colors =[[255,0,0,1],[0,255,0,1],[0,0,255,1]];
        var Brightness=1;
        // var mode=0;
        // if(colors.length>1){
        //     mode=1;
        // }
        clearInterval(this.repeater);
        this.currentBlockIndex=43;
        //this.getNowBlock().color = [0,0,255,1];
        var repeatMin=5;
        var repeatMax=200;
        var repeatCount=0;
        var StartPoint = this.getNowBlock().coordinateData;
        var horizontalList=[];
        var target = this.AllBlockColor;
        var randomValue=this.getRandom(0,colors.length-1);
        var setColor=colors[randomValue];


        var step_End=false;
        console.log('setColor', setColor)
        this.mode_reset();
        if(repeatCount==0){
            this.getNowBlock().color=setColor;
        } 
        for (let index = 0; index < target.length; index++) {
            const element = target[index];
            var Ysdis=Math.abs(StartPoint.top_Left[1]-element.coordinateData.top_Left[1]);
            //if (Ysdis < 10) {
                horizontalList.push(index);               
            //}
        }
        
        this.repeater=setInterval(()=>{
            setColor=colors[this.getRandom(0,colors.length-1)];
            var resultL = horizontalList.find((x) => x == this.currentBlockIndex-repeatCount);
            var resultR = horizontalList.find((x) => x == this.currentBlockIndex+repeatCount);
            if (step_End) {
                if (Brightness > 0) {
                    Brightness -= 0.05;
                    for (let index = 0; index < horizontalList.length; index++) {
                        const element = target[horizontalList[index]];
                        var temp=colors[this.getRandom(0,colors.length-1)];
                        temp[3]=Brightness;
                        element.color =temp;
                    }
                }
                else {
                    Brightness = 1;
                    step_End = false;
                    //clearInterval(this.repeater);
                }
                return;
            }
            else
            if (resultL == undefined && resultR == undefined) {
                repeatCount=0;
                step_End=true;
            }
            else{
                if (resultL != undefined) {
                    target[resultL].color = setColor;
                }
                if (resultR != undefined) {
                    target[resultR].color = setColor
                };
                repeatCount+=1;
            }
        },50)
        // this.repeaterTimeout=if(Brightness>0){
        //     Brightness-=0.01;
        // }
        //clearInterval(this.repeater);
    }
    mode_gloriousMode(){
        //this.addBlockIndex();
        clearInterval(this.repeater);
        this.currentBlockIndex=36;
        var rgbRepeat=0;
        var repeatCount=0;
        //this.mode_AllBlockColor([255,0,0,1]);
        var StartPoint = this.getNowBlock().coordinateData;
        var setRGB=[255,0,0,1];
        var tempRGB=[255,0,0,1];
        var repeatCountArr=[0,0,0];
        this.repeater=setInterval(()=>{
            //this.mode_AllBlockColor([0,255,0,1]);
            //this.mode_reset();
            var target = this.AllBlockColor;
            // sub_disL-=50;
            // sub_disR+=50;
            this.getNowBlock().color = setRGB;

            for (let index = 0; index < target.length; index++) {
                const element = target[index];
                console.log('this.M_Light_PRESETS.addBlockIndex();', element);
                var dis = this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                //+(repeatCount*50)
                //console.log('setCoordinate', StartPoint.center_Point[0],element.coordinateData.center_Point[0])
                var compareResult =this.minKeyWidth*repeatCount;
                var compareResultMax =this.minKeyWidth*repeatCount-this.minKeyWidth;
                //repeatMax=compareResult+200;
                //var Ysdis=Math.abs(StartPoint.top_Left[1]-element.coordinateData.top_Left[1]);
                //if (Ysdis < 5) {
                    if (dis<compareResult&& dis>compareResultMax) {
                        element.color =setRGB;
                        // if(tempRGB[0]>0){
                        //     tempRGB[0]-=5;
                        //     tempRGB[1]+=5;
                        // }
                        // else if(tempRGB[1]>0){
                        //     tempRGB[1]-=5;
                        //     tempRGB[2]+=5;
                        // }
                        // else if(tempRGB[2]>0){
                        //     tempRGB[2]-=5;
                        //     tempRGB[3]+=5;
                        // }
                        // var temp=[tempRGB[0],tempRGB[1],tempRGB[2],tempRGB[3]];
                        // element.color = temp;
                    }
                    
                    // else{
                    //     element.color = [0,0,0,0];
                    // }
                //}
                // if (compareResult > repeatMin+(repeatCount*50) && compareResult < repeatMax+(repeatCount*50)) {
                //     element.color = [255,255,0,1];
                // }
                // else {
                //     element.color = [0,255,0,1];
                // }
            }
            if(compareResult<this.imageMaxWidth){
                repeatCount+=1;
            }
            else{
                repeatCount=0;
                // rgbRepeat+=1;
                // if(rgbRepeat%3==0){
                //     setRGB=[255,0,0,1];
                // }
                // else if(rgbRepeat%3==1){
                //     setRGB=[0,255,0,1];
                // }
                // else if(rgbRepeat%3==2){
                //     setRGB=[0,0,255,1];
                // }
                //this.mode_AllBlockColor([0,255,0,1]);
            }
        },500)
        //clearInterval(this.repeater);
    }
    mode_T3(){
        //this.addBlockIndex();
        clearInterval(this.repeater);
        this.currentBlockIndex=36;
        //this.getNowBlock().color = [0,0,255,1];
        var repeatMin=5;
        var repeatMax=200;
        var repeatCount=0;
        var StartPoint = this.getNowBlock().coordinateData;
 
        this.repeater=setInterval(()=>{
            this.mode_reset();
            var target = this.AllBlockColor;
            // sub_disL-=50;
            // sub_disR+=50;

            for (let index = 0; index < target.length; index++) {
                const element = target[index];
                console.log('this.M_Light_PRESETS.addBlockIndex();', element);
                var dis = this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                //+(repeatCount*50)
                //console.log('setCoordinate', StartPoint.center_Point[0],element.coordinateData.center_Point[0])
                //var compareResult =Math.abs(0-element.coordinateData.center_Point[0]);
                //if()
                var compareValueL =StartPoint.center_Point[0]+(repeatCount*StartPoint.clientWidth);
                var compareValueR =StartPoint.center_Point[0]-(repeatCount*StartPoint.clientWidth);

                //repeatMax=compareResult+200;
                var Ysdis=Math.abs(StartPoint.top_Left[1]-element.coordinateData.top_Left[1]);
                if (Ysdis < 5) {
                    if (compareValueR > element.coordinateData.top_Left[0] && compareValueR < element.coordinateData.top_Right[0]) {
                        element.color = [255,0,0,1];
                    }
                    else if (compareValueL > element.coordinateData.top_Left[0] && compareValueL < element.coordinateData.top_Right[0]) {
                        element.color = [255,0,0,1];
                    }
                    //else if (compareResult < element.coordinateData.top_Left[0] && repeatMax > element.coordinateData.top_Left[0]) {
                    else{
                        element.color = [0,0,0,0];
                    }
                }
                // if (compareResult > repeatMin+(repeatCount*50) && compareResult < repeatMax+(repeatCount*50)) {
                //     element.color = [255,255,0,1];
                // }
                // else {
                //     element.color = [0,255,0,1];
                // }
            }
            if(repeatCount<15 &&compareValueL<this.imageMaxWidth&&compareValueR<this.imageMaxWidth){
                repeatCount+=1;
            }
            else{
                repeatCount=0;
            }
        },500)
        //clearInterval(this.repeater);
    }
    setAllBlockColor(rgba=[0,0,0,1]) {
        var target = this.AllBlockColor;
        for (let index = 0; index < target.length; index++) {
            const element = target[index];
            element.color = rgba;
        }
    }
    setAllBlockAlpha(alpha=0) {
        var target = this.AllBlockColor;
        for (let index = 0; index < target.length; index++) {
            var color = target[index].color;
            if((color[3]-0.1)>=0){
                color[3]-=0.1;
            }
            else{
                color[3]=0;
            }
        }
    }
    mode_reset() {
        var target = this.AllBlockColor;
        for (let index = 0; index < target.length; index++) {
            const element = target[index];
            element.color = [0,0,0,0];
        }
    }
    mode_FastRunWithoutTrace(colors=[]){
        colors =[[255,0,0,1],[0,255,0,1],[0,0,255,1]];
        var Brightness=1;
        clearInterval(this.repeater);
        this.currentBlockIndex=43;
        //this.getNowBlock().color = [0,0,255,1];
        var repeatMin=5;
        var repeatMax=200;
        var repeatCount=0;
        var StartPoint = this.getNowBlock().coordinateData;
        var horizontalList={
        };
        var target = this.AllBlockColor;
        var randomValue=this.getRandom(0,colors.length-1);
        var step_End=false;
        this.mode_reset();
        horizontalList[this.currentBlockIndex]={
               color:colors[this.getRandom(0,colors.length-1)]
        }
        for (let index = 0; index < target.length; index++) {
            const element = target[index];
            var Ysdis=Math.abs(StartPoint.top_Left[1]-element.coordinateData.top_Left[1]);
            if (Ysdis < 10) {
                horizontalList[index]={
                    color:colors[this.getRandom(0,colors.length-1)]
                }
            }
        }
        // console.log('horizontalList', horizontalList)
        console.log('horizontalList',Object.keys(horizontalList))
        this.repeater=setInterval(()=>{
            var LIndex=this.currentBlockIndex-repeatCount;
            var RIndex=this.currentBlockIndex+repeatCount;
            var resultL = horizontalList[LIndex];
            //horizontalList.find((x) => x == this.currentBlockIndex-repeatCount);
            var resultR = horizontalList[RIndex];
            //horizontalList.find((x) => x == this.currentBlockIndex+repeatCount);
            if (step_End) {
                if (Brightness > 0) {
                    Brightness -= 0.05;
                    var arr=Object.keys(horizontalList);
                    for (let index = 0; index < arr.length; index++) {
                        var index_num=parseInt(arr[index])
                        var temp=horizontalList[index_num].color;
                        temp[3]=Brightness;
                        target[index_num].color =temp;
                    }
                }
                else {
                    Brightness = 1;
                    step_End = false;
                    clearInterval(this.repeater);
                }
                return;
            }
            else
            if (resultL == undefined && resultR == undefined) {
                repeatCount=0;
                step_End=true;
            }
            else{
                if (resultL != undefined) {
                    target[LIndex].color = horizontalList[LIndex].color;
                }
                if (resultR != undefined) {
                    target[RIndex].color = horizontalList[RIndex].color;
                };
                repeatCount+=1;
            }
        },50)
    }
    mode_PassWithoutTrace(colors=[],index=20) {
        colors =[[0,0,255,1]];
        clearInterval(this.repeater);
        //this.currentBlockIndex=index;
        var randomColor=colors[this.getRandom(0,colors.length-1)];
        this.setAllBlockColor([0,0,0,1]);
        this.repeater = setInterval(() => {
            if(randomColor[3]<=0){
                clearInterval(this.repeater);
            }
            var target = this.AllBlockColor;
            target[index].color = randomColor
            if (randomColor[0] > 0) {
                randomColor[0] -= 1;
            }
            if (randomColor[2] > 0) {
                randomColor[2] -= 1;
            }
            if (randomColor[2] > 0) {
                randomColor[2] -= 1;
            }                               
        }, 10)
    }
    rainbow7Color(){

       return [[255,0,0,1],[255, 165, 0,1],[255, 255, 0,1],[0, 255, 0 ,1],[0, 127, 255,1],[0, 0, 255,1],[139, 0, 255,1]];

    }
    SlopeEquation(point1=[25,0],point2=[320,400]){
        //斜率y2-y1/x2-x1;
        var Slope =(point2[1]-point1[1])/(point2[0]-point1[0]);//x*1 y*1*Slope
        var LinearList=[];
        var temp_x=[point1[0],point1[1]];
        while (temp_x[0]<point2[0]&&temp_x[1]<point2[1]) {
            temp_x[0]+=1;
            temp_x[1]+=1*Slope;
            //console.log('temp_x=',temp_x);
            LinearList.push([temp_x[0],temp_x[1]]);
        }
        return LinearList;
    }
    mode_Diffusion(colors=[]){
        colors =[[255,0,0,1]];
        colors =this.rainbow7Color();
        var Brightness=1;
        // var mode=0;
        // if(colors.length>1){
        //     mode=1;
        // }
        clearInterval(this.repeater);
        this.currentBlockIndex=32;
        //this.getNowBlock().color = [0,0,255,1];
        var repeatMin=5;
        var repeatMax=200;
        var repeatCount=0;
        var StartPoint = this.getNowBlock().coordinateData;
        var horizontalList={
        };
        var target = this.AllBlockColor;
        var randomValue=this.getRandom(0,colors.length-1);
        //console.log('setColor', setColor)
        this.mode_reset();
        // horizontalList[this.currentBlockIndex]={
        //        color:this.toCssRGB(colors[this.getRandom(0,colors.length-1)])
        // }
        // console.log('horizontalList', horizontalList)

        var T2=colors[this.getRandom(0,colors.length-1)];
        console.log('horizontalList',Object.keys(horizontalList))
        this.repeater=setInterval(()=>{
            T2=colors[this.getRandom(0,colors.length-1)];
            for (let index = 0; index < target.length; index++) {
                const element = target[index];
                var dis = this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                if (dis<repeatCount*StartPoint.clientWidth) {
                    element.color=T2;
                }
                else{
                    //element.color=this.toCssRGB([0,0,255,0.4]);
                }
            }
            //var A=this.imageMaxWidth%StartPoint.clientWidth;
        console.log('       repeatCount*StartPoint.clientWidth',        repeatCount*StartPoint.clientWidth)

     
            if(repeatCount*StartPoint.clientWidth<this.imageMaxWidth-StartPoint.clientWidth){
                repeatCount+=1;
            }
            else{
                repeatCount=0;
                this.mode_reset();
            }
        },250)
        // this.repeaterTimeout=if(Brightness>0){
        //     Brightness-=0.01;
        // }
        //clearInterval(this.repeater);
    }
    getIndexRGBCss(i){
            var target = this.AllBlockColor;
        if(target[i].color!=undefined){
            return this.toCssRGB(target[i].color);
        }

    }
    getRandom(min,max){
        return Math.floor(Math.random()*(max-min+1))+min;
    };
    getRgbRandom(){
        var RGBcolors =[[255,0,0,0.9],[0,255,0,0.9],[0,0,255,0.9]];
        return RGBcolors[this.getRandom(0,2)];
    }; 
    
    toCssRGB(RGBA=[255,0,0,1]){
          return 'rgb('+RGBA[0] + ',' + RGBA[1] + ',' + RGBA[2] + ',' + RGBA[3] + ')';
    }
    setDefault() { }
}
