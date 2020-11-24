// HSL即色相、飽和度、亮度（英語：Hue, Saturation, Lightness）。
// HSV即色相、飽和度、明度（英語：Hue, Saturation, Value），又稱HSB其中B即英語：Brightness。
//Louis Architecture => Hex=>SET RGB=>SET HSV

import { BoxSelectionArea } from './BoxSelectionArea'
import { Injectable } from '@angular/core'
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
    color: any = [
        '#ff0000',
        '#ff8000',
        '#80ff00',
        '#00ff00',
        '#00ffff',
        '#0000ff',
        '#8000ff',
        '#ff00ff',
        '#ff0080',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
        '#ffffff',
    ] //RGB
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
    nowSettingColorkeyName=''
    //mode_name:any=["波浪","撞擊","螺旋","循環","觸發","漣漪","呼吸","下雨","火焰","點亮","音樂"];
    imageMaxWidth=0;
    recordModeArr: any = []
    currentModeIndex: any = 0
    BSApage1 = new BoxSelectionArea('RGBColorBlockStyle')
    constructor(inputMax) {
        this.maxkaycapNumber = inputMax
        for (var i = 0; i < this.maxkaycapNumber; i++) {
            this.AllBlockColor.push({ color: '#FF0000', border: true,coordinateData:[]})
        }
        this.resetDefault();
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
    resetDefault() {
        this.lightData = this.defaultSetlightData();
        for (var i = 0; i < this.maxkaycapNumber; i++) {
            this.AllBlockColor[i].color='#FF0000';
        }
    }
    defaultSetlightData(type = '') {
        var T = {
            rate:50,
            brightness:50,
            colorHex:'#0000',
            colorPickerValue:[255,0,0],
            sideLightSync:true,
            lightSelected:{ name: 'GloriousMode', value: 0, translate: 'GloriousMode' }
        }
        return T
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
    getNowBlock() {
        return this.AllBlockColor[this.currentBlockIndex];
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

    setModeFrameRange() {
        let isAllTrue = this.BSApage1.checkArrayisAllTrue(this.AllBlockColor) //原本是否框著  TRUE=是
        var selectedEls = this.BSApage1.selectedEls
        if (isAllTrue) {
            for (var i = 0; i < this.BSApage1.selectedEls.length; i++) {
                this.AllBlockColor[selectedEls[i]].color = '#0000'
                this.AllBlockColor[selectedEls[i]].border = false
            }
        } else {
            for (var i = 0; i < this.BSApage1.selectedEls.length; i++) {
                this.AllBlockColor[selectedEls[i]].color = '#FFFFFF'
                this.AllBlockColor[selectedEls[i]].border = true
            }
        }
        console.log('Result_isAllTrue', isAllTrue)
        console.log('Result_selectedEls', selectedEls)

        this.updateframe_selection_range()
        this.BSApage1.mouseOn = false
        return 'Finish'
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
            case 'RippleGraff':
                break;
            case 'PassWithoutTrace':
                break;
            case 'FastRunWithoutTrace':
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
        //this.getNowBlock().color = 'blue';
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
                    element.color = '#FFFF00';
                }
                else if (compareResult<element.coordinateData.top_Left[0] &&repeatMax>element.coordinateData.top_Left[0]) {
                    element.color = '#FFFF00';
                }
                // if (compareResult > repeatMin+(repeatCount*50) && compareResult < repeatMax+(repeatCount*50)) {
                //     element.color = '#FFFF00';
                // }
                else {
                    element.color = '#00FF00';
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

    mode_T2(){
        //this.addBlockIndex();
        clearInterval(this.repeater);
        this.currentBlockIndex=30;
        //this.getNowBlock().color = 'blue';
        var repeatMin=5;
        var repeatMax=200;
        var repeatCount=0;
        var StartPoint = this.getNowBlock().coordinateData;
        var sub_disL=StartPoint.center_Point[0];
        var sub_disR=StartPoint.center_Point[1];
        this.repeater=setInterval(()=>{
            var target = this.AllBlockColor;
            for (let index = 0; index < target.length; index++) {
                const element = target[index];
                console.log('this.M_Light_PRESETS.addBlockIndex();', element);
                var dis = this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                //+(repeatCount*50)
                //console.log('setCoordinate', StartPoint.center_Point[0],element.coordinateData.center_Point[0])
                //var compareResult =Math.abs(0-element.coordinateData.center_Point[0]);
                //if()
                var compareResult =(repeatCount*180);
                var sub_disL=StartPoint.top_Left[1];
                var sub_disR=StartPoint.top_Right[1];

                repeatMax=compareResult+200;
                var Ysdis=Math.abs(StartPoint.top_Left[1]-element.coordinateData.top_Left[1]);
                if (Ysdis < 5) {
                    if (compareResult > element.coordinateData.top_Left[0] && repeatMax < element.coordinateData.top_Right[0]) {
                        element.color = '#FFFF00';
                    }
                    else if (compareResult < element.coordinateData.top_Left[0] && repeatMax > element.coordinateData.top_Left[0]) {
                        element.color = '#FFFF00';
                    }
                }
                // if (compareResult > repeatMin+(repeatCount*50) && compareResult < repeatMax+(repeatCount*50)) {
                //     element.color = '#FFFF00';
                // }
                else {
                    element.color = '#00FF00';
                }
            }
            if(repeatCount<15 &&repeatMax<this.imageMaxWidth){
                repeatCount+=1;
            }
            else{
                repeatCount=0;
            }
        },500)
        //clearInterval(this.repeater);
    }





    showSelectionRange() {
        for (let index = 0; index < this.AllBlockColor.length; index++) {
            if (this.AllBlockColor[index].border) {
                this.AllBlockColor[index].color = '#FFFFFF'
            } else {
                this.AllBlockColor[index].color = '#0000'
            }
        }
    }
    setCoordinate(X, Y) {
        console.log('setCoordinate', X, Y)
        this.recordModeArr[this.currentModeIndex].coordinateX = X
        this.recordModeArr[this.currentModeIndex].coordinateY = Y
    }
    setDefault() { }
}
