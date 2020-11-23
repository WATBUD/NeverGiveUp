// HSL即色相、飽和度、亮度（英語：Hue, Saturation, Lightness）。
// HSV即色相、飽和度、明度（英語：Hue, Saturation, Value），又稱HSB其中B即英語：Brightness。
//Louis Architecture => Hex=>SET RGB=>SET HSV
//    "波紋",   "螺旋"   ,"循環""撞擊","爆炸","呼吸","下雨","火焰","單顆點亮","音樂"
//  Wave, ConicBand,Spiral,Cycle,LinearWave,Ripple,Breathing,Rain,Fire,Trigger,AudioCap：音樂
// var $ = require('jquery');
// window.$ = $;
// window.jQuery = $;
// Wave 波浪
// ConicBand 撞击
// Spiral 螺旋
// Cycle 循环
// LinearWave 触发
// Breathing 呼吸
// Ripple 涟漪
// Rain 下雨
// Fire 火焰
// trigger 点亮
// AudioCap 音樂
import { BoxSelectionArea } from './BoxSelectionArea'
import { Injectable } from '@angular/core'
@Injectable()
export class ModeParameter {
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
interface RGBMode {
    sortPosition: any
    iconpath: any
    showlimit: any
    name: any
    coordinateX: any
    coordinateY: any
    canEffectCenter: any
    opacity: number //不透明度0~1
    color: any //RGB
    speed: number //速度1~10
    bandwidth: number //帶寬50~500
    angle: any //0~360
    number: any //1~10
    fire: any //0~1
    gap: number //0~500
    bump: any ///0~5;
    randomspeed: any //0~360
    time: any //0.5~3
    radius: any //0~300
    amplitude: number //振幅200~8000
    separate: any //true,false
    direction: any //true,false
    soft: any //true,false
    fixed: any //true,false
    bidirectional: any //true,false
    saturation: number //飽和度 0~1
    value: number //明度 0~1
}
export class Wave extends ModeParameter implements RGBMode {
    sortPosition: any = 0
    iconpath: any = ['./image/ColorSet/Off/Wave.png', './image/ColorSet/On/Wave.png']
    showlimit: any = [1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0]

    name: any = 'Wave'

    speed: number = 5 //速度1~10~
    bandwidth: number = 200 //帶寬50~500

    constructor(inputmax) {
        super(inputmax)
        this.gradient = true //true,false
    }
}
class ConicBand extends ModeParameter implements RGBMode {
    sortPosition: any = 1
    iconpath: any = ['./image/ColorSet/Off/ConicBand.png', './image/ColorSet/On/ConicBand.png']
    showlimit: any = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    canEffectCenter: any = true
    name: any = 'ConicBand'
    speed: number = 5 //速度1~10
    bandwidth: number = 100 //帶寬50~500
    constructor(inputmax) {
        super(inputmax)
        this.gradient = true //true,false
    }
}
class Spiral extends ModeParameter implements RGBMode {
    sortPosition: any = 2
    iconpath: any = ['./image/ColorSet/Off/Spiral.png', './image/ColorSet/On/Spiral.png']
    showlimit: any = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]
    canEffectCenter: any = true
    name: any = 'Spiral'
    speed: number = 5 //速度1~10
    constructor(inputmax) {
        super(inputmax)
        this.gradient = true //true,false
    }
}
class Cycle extends ModeParameter implements RGBMode {
    sortPosition: any = 3
    iconpath: any = ['./image/ColorSet/Off/Cycle.png', './image/ColorSet/On/Cycle.png']
    showlimit: any = [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

    name: any = 'Cycle'

    speed: number = 2 //速度1~10
    bandwidth: number = 0 //帶寬50~500

    constructor(inputmax) {
        super(inputmax)
        this.gradient = true //true,false
    }
}
class LinearWave extends ModeParameter implements RGBMode {
    sortPosition: any = 4
    iconpath: any = ['./image/ColorSet/Off/LinearWave.png', './image/ColorSet/On/LinearWave.png']
    showlimit: any = [1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1]

    name: any = 'LinearWave'
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

    speed: number = 10 //速度1~10
    bump: any = false ///0~5;

    constructor(inputmax) {
        super(inputmax)
        this.soft = true //true,false
        this.bidirectional = true //true,false
        this.gradient = true //true,false
    }
}
class Ripple extends ModeParameter implements RGBMode {
    sortPosition: any = 5
    iconpath: any = ['./image/ColorSet/Off/Ripple.png', './image/ColorSet/On/Ripple.png']
    showlimit: any = [1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0]
    name: any = 'Ripple'
    speed: number = 10 //速度1~10
    gradient: any = true //true,false
    constructor(inputmax) {
        super(inputmax)
        this.soft = true //true,false
    }
}
class Breathing extends ModeParameter implements RGBMode {
    sortPosition: any = 6
    iconpath: any = ['./image/ColorSet/Off/Breathing.png', './image/ColorSet/On/Breathing.png']
    showlimit: any = [1, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    name: any = 'Breathing'
    speed: number = 2 //速度1~10
    bandwidth: number = 500 //帶寬50~500
    fixed: any = true //true,false
    constructor(inputmax) {
        super(inputmax)
    }
}
class Rain extends ModeParameter implements RGBMode {
    sortPosition: any = 7
    iconpath: any = ['./image/ColorSet/Off/Rain.png', './image/ColorSet/On/Rain.png']
    showlimit: any = [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    name: any = 'Rain'
    speed: number = 8 //速度1~10
    bandwidth: number = 500 //帶寬50~500
    fixed: any = true //true,false
    constructor(inputmax) {
        super(inputmax)
        this.number = 5
    }
}
class Fire extends ModeParameter implements RGBMode {
    sortPosition: any = 8
    iconpath: any = ['./image/ColorSet/Off/Fire.png', './image/ColorSet/On/Fire.png']
    showlimit: any = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    name: any = 'Fire'
    color: any = [
        '#FF2000',
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
    speed: number = 0 //速度1~10
    bandwidth: number = 0 //帶寬50~500
    gap: number = 0 //0~500
    time: any = 0 //0.5~3
    fixed: any = true //true,false
    constructor(inputmax) {
        super(inputmax)
        this.fire = 0.5 //0~1
        this.color_ShowLimit = 0
    }
}

class Trigger extends ModeParameter implements RGBMode {
    sortPosition: any = 9
    iconpath: any = ['./image/ColorSet/Off/Trigger.png', './image/ColorSet/On/Trigger.png']
    showlimit: any = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0]
    name: any = 'Trigger'
    color: any = [
        '#FF2000',
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
    speed: number = 0 //速度1~10
    bandwidth: number = 0 //帶寬50~500
    time: any = 3 //0.5~3
    constructor(inputmax) {
        super(inputmax)
        this.soft = true //true,false
    }
}
class AudioCap extends ModeParameter implements RGBMode {
    sortPosition: any = 10
    iconpath: any = ['./image/ColorSet/Off/AudioCap.png', './image/ColorSet/On/AudioCap.png']
    showlimit: any = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0]

    check: any = true
    name: any = 'AudioCap'
    color: any = [
        '#FF2000',
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
    speed: number = 0 //速度1~10
    bandwidth: number = 0 //帶寬50~500
    time: any = 3 //0.5~3

    constructor(inputmax) {
        super(inputmax)
        this.amplitude = 500
        this.color_quantity = 1
        this.color_ShowLimit = 1
    }
}

class Static extends ModeParameter implements RGBMode {
    sortPosition: any = 11
    iconpath: any = ['./image/ColorSet/Off/Static.png', './image/ColorSet/On/Static.png']
    showlimit: any = [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    name: any = 'Static'
    speed: number = 5 //速度1~10
    constructor(inputmax) {
        super(inputmax)
        this.color_quantity = 1
        this.color_ShowLimit = 1
        this.bandwidth = 100
    }
}

export class KeyBoardLightLed {
    //左上,右上,左下,右下
    maxkaycapNumber = 0
    ledcoordinates: any = []
    AllBlockColor: any = [] //TOTAL NUMBER
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
    //mode_name:any=["波浪","撞擊","螺旋","循環","觸發","漣漪","呼吸","下雨","火焰","點亮","音樂"];
    imageMaxWidth=0;
    modeClassArr: any = []
    recordModeArr: any = []
    currentModeIndex: any = 0
    BSApage1 = new BoxSelectionArea('RGBColorBlockStyle')
    constructor(inputMax) {
        this.maxkaycapNumber = inputMax
        this.modeClassArr = [
            new Wave(this.maxkaycapNumber),
            new ConicBand(this.maxkaycapNumber),
            new Spiral(this.maxkaycapNumber),
            new Cycle(this.maxkaycapNumber),
            new LinearWave(this.maxkaycapNumber),
            new Ripple(this.maxkaycapNumber),
            new Breathing(this.maxkaycapNumber),
            new Rain(this.maxkaycapNumber),
            new Fire(this.maxkaycapNumber),
            new Trigger(this.maxkaycapNumber),
            new AudioCap(this.maxkaycapNumber),
        ]
        this.recordModeArr = [new Wave(this.maxkaycapNumber)]
        for (var i = 0; i < this.maxkaycapNumber; i++) {
            //61Key
            //this.AllBlockColor.push({color:"#FFFFFF",border:true});
            //this.AllBlockColor.push({ color: '#000000', border: true })
            //this.AllBlockColor.push({ color: '#000000', border: true })
            this.AllBlockColor.push({ color: 'red', border: true,coordinateData:[]})
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
    subBlockIndex(){
        if(this.currentBlockIndex>0){
            this.currentBlockIndex-=1;
        }
        else{
        }
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

        this.recordModeArr.push(new Wave(this.maxkaycapNumber))
    }

    setModeFrameRange() {
        let isAllTrue = this.BSApage1.checkArrayisAllTrue(this.AllBlockColor) //原本是否框著  TRUE=是
        var selectedEls = this.BSApage1.selectedEls
        if (isAllTrue) {
            for (var i = 0; i < this.BSApage1.selectedEls.length; i++) {
                this.AllBlockColor[selectedEls[i]].color = '#000000'
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
        var nowMode = this.recordModeArr[this.currentModeIndex]
        for (let index = 0; index < selectedEls.length; index++) {
            nowMode.frame_selection_range[selectedEls[index]] = !isAllTrue
        }

        this.updateframe_selection_range()
        this.BSApage1.mouseOn = false
        return 'Finish'
    }
    //原有邊框架構 因客戶要求不顯示邊框 這邊採用border判斷是否顯示此格
    updateframe_selection_range() {
        var range = this.recordModeArr[this.currentModeIndex].frame_selection_range
        // console.log("LEDModeSelect:range:",range);
        for (let i = 0; i < range.length; i++) {
            //const element = range[index];
            if (range[i] == true) {
                //console.log("LEDModeSelect:true:",i);
                this.AllBlockColor[i].border = true
            } else {
                //console.log("LEDModeSelect:false:",i);
                this.AllBlockColor[i].border = false
            }
        }
    }

    distanceCalculation(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2));//å…©é»žè·�é›¢
    }
    mode_Wave(){
        //this.addBlockIndex();
        this.currentBlockIndex=30;
        //this.getNowBlock().color = 'blue';
        var repeatMin=5;
        var repeatMax=200;
        var repeatCount=0;
        setInterval(()=>{
            var StartPoint = this.getNowBlock().coordinateData;
            var target = this.AllBlockColor;
            for (let index = 0; index < target.length; index++) {
                const element = target[index];
                console.log('this.KeyBoardLightLed.addBlockIndex();', element);
                //var compareResult = this.distanceCalculation(StartPoint.centerPoint[0], StartPoint.centerPoint[1], element.coordinateData.centerPoint[0], element.coordinateData.centerPoint[1]);
                //+(repeatCount*50)
                //console.log('setCoordinate', StartPoint.centerPoint[0],element.coordinateData.centerPoint[0])
                //var compareResult =Math.abs(0-element.coordinateData.centerPoint[0]);
                var compareResult =(repeatCount*180);
                repeatMax=compareResult+200;
                if (compareResult>element.coordinateData.x1[0] &&repeatMax<element.coordinateData.x2[0]) {
                    element.color = '#FFFF00';
                }
                else if (compareResult<element.coordinateData.x1[0] &&repeatMax>element.coordinateData.x1[0]) {
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




    showSelectionRange() {
        for (let index = 0; index < this.AllBlockColor.length; index++) {
            if (this.AllBlockColor[index].border) {
                this.AllBlockColor[index].color = '#FFFFFF'
            } else {
                this.AllBlockColor[index].color = '#000000'
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
