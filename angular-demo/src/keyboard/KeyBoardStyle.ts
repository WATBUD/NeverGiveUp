import { Injectable } from '@angular/core'
import { identity } from 'lodash'
import { KB61Prohibit } from './KeyBoardData'

//let AllFunctionMapping = window['System']._nodeRequire('./backend/others/SupportData').AllFunctionMapping
import { AllFunctionMapping } from '../backend/others/SupportData'

@Injectable()
export class KeyBoardStyle {
    nowTargetIndex = 0
    nowTargetKey = 'GMMK Pro'
    //BGImage:'url(./image/Share/KB1KeyerEffects.png)',

    keyBoardList = {
        'GMMK Pro': {
            ItemCss: [
                "margin-top:22px;margin-left:22px;",
                "margin-top:22px;margin-left:78px;",
                "margin-top:22px;margin-left:124px;",
                "margin-top:22px;margin-left:169px;",
                "margin-top:22px;margin-left:215px;",
                "margin-top:22px;margin-left:271px;",
                "margin-top:22px;margin-left:316px;",
                "margin-top:22px;margin-left:361px;",
                "margin-top:22px;margin-left:408px;",
                "margin-top:22px;margin-left:463px;",
                "margin-top:22px;margin-left:508px;",
                "margin-top:22px;margin-left:554px;",
                "margin-top:22px;margin-left:600px;",
                "margin-top:22px;margin-left:655px;",
                "margin-top:22px;margin-left:722px;border-radius:25px;",
                "margin-top:76px;margin-left:23px;",
                "margin-top:76px;margin-left:68px;",
                "margin-top:76px;margin-left:113px;",
                "margin-top:76px;margin-left:158px;",
                "margin-top:76px;margin-left:203px;",
                "margin-top:76px;margin-left:249px;",
                "margin-top:76px;margin-left:294px;",
                "margin-top:76px;margin-left:339px;",
                "margin-top:76px;margin-left:384px;",
                "margin-top:76px;margin-left:429px;",
                "margin-top:76px;margin-left:474px;",
                "margin-top:76px;margin-left:520px;",
                "margin-top:76px;margin-left:565px;",
                "margin-top:76px;margin-left:611px;width:88px;",
                "margin-top:76px;margin-left:720px;",
                "margin-top:121px;margin-left:20px;width:67px;",
                "margin-top:121px;margin-left:90px;",
                "margin-top:121px;margin-left:137px;",
                "margin-top:121px;margin-left:182.1px;",
                "margin-top:121px;margin-left:227.1px;",
                "margin-top:121px;margin-left:272.1px;",
                "margin-top:121px;margin-left:317.1px;",
                "margin-top:121px;margin-left:362.1px;",
                "margin-top:121px;margin-left:407.1px;",
                "margin-top:121px;margin-left:452px;",
                "margin-top:121px;margin-left:497px;",
                "margin-top:121px;margin-left:543px;",
                "margin-top:121px;margin-left:588px;",
                "width:66px;margin-top:121px;margin-left:634px;",
                "margin-top:121px;margin-left:719px;",
                "margin-top:168px;margin-left:19px;width:82px;",
                "margin-top:168px;margin-left:103px;",
                "margin-top:168px;margin-left:148px;",
                "margin-top:168px;margin-left:193px;",
                "margin-top:168px;margin-left:238px;",
                "margin-top:168px;margin-left:283px;",
                "margin-top:168px;margin-left:328px;",
                "margin-top:168px;margin-left:373px;",
                "margin-top:168px;margin-left:418px;",
                "margin-top:168px;margin-left:464px;",
                "margin-top:168px;margin-left:509px;",
                "margin-top:168px;margin-left:554px;",
                "margin-top:168px;margin-left:599px;width:100px;",
                "margin-top:168px;margin-left:719px;",
                "width:98px;margin-top:212px;margin-left:24px;",
                "margin-top:212px;margin-left:125px;",
                "margin-top:212px;margin-left:170px;",
                "margin-top:212px;margin-left:215px;",
                "margin-top:212px;margin-left:260px;",
                "margin-top:212px;margin-left:305px;",
                "margin-top:212px;margin-left:351px;",
                "margin-top:212px;margin-left:395px;",
                "margin-top:212px;margin-left:441px;",
                "margin-top:212px;margin-left:486px;",
                "margin-top:212px;margin-left:531px;",
                "margin-top:212px;margin-left:577px;width:77px;",
                "margin-top:222px;margin-left:665px;",
                "margin-top:212px;margin-left:719px;",
                "width:53px;margin-top:258px;margin-left:24px;",
                "width:53px;margin-top:258px;margin-left:80px;",
                "width:53px;margin-top:258px;margin-left:136px;",
                "width:277px;border-radius:3px;margin-top:258px;margin-left:194px;",
                "margin-top:258px;margin-left:474px;",
                "margin-top:258px;margin-left:520px;",
                "margin-top:258px;margin-left:565px;",
                "margin-top:267px;margin-left:620px;",
                "margin-top:267px;margin-left:666px;",
                "margin-top:267px;margin-left:711px;",
            ]
            ,
            keyMapping: [
            "Escape","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","PrintScreen","ScrollWheel","Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace","Delete","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","PageUp","CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter","PageDown","ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ShiftRight","ArrowUp","End","ControlLeft","MetaLeft","AltLeft","Space","AltRight","Custom_Fnkey","ControlRight","ArrowLeft","ArrowDown","ArrowRight"
            ],
            target: new Array(83),
            cssText: 'position: absolute;height: 100%;width: 100%;pointer-events: none;',
            BGImage: 'url(./image/Share/KB1.png)',
            BGImageKeyerEffects: 'url(./image/Share/KB1KeyerEffects.png)',
            qigong_Step1_Range:[0,15,30,58,71,82],
            qigong_Step2_Range:[22,23, 38,52,51 ,36],
            breakGradation:[[0,14],[15,29],[30,44],[45,58],[59,72],[73,82]],
            imageMaxWidth:765,
            imageMaxHeight:308,
        },
        "GMMK V2":{
                ItemCss: [
                    "margin-top:22px;margin-left:22px;",
                    "margin-top:22px;margin-left:78px;",
                    "margin-top:22px;margin-left:124px;",
                    "margin-top:22px;margin-left:169px;",
                    "margin-top:22px;margin-left:215px;",
                    "margin-top:22px;margin-left:271px;",
                    "margin-top:22px;margin-left:316px;",
                    "margin-top:22px;margin-left:361px;",
                    "margin-top:22px;margin-left:408px;",
                    "margin-top:22px;margin-left:463px;",
                    "margin-top:22px;margin-left:508px;",
                    "margin-top:22px;margin-left:554px;",
                    "margin-top:22px;margin-left:600px;",
                    "margin-top:22px;margin-left:655px;",
                    "margin-top:22px;margin-left:722px;border-radius:25px;",
                    "margin-top:76px;margin-left:23px;",
                    "margin-top:76px;margin-left:68px;",
                    "margin-top:76px;margin-left:113px;",
                    "margin-top:76px;margin-left:158px;",
                    "margin-top:76px;margin-left:203px;",
                    "margin-top:76px;margin-left:249px;",
                    "margin-top:76px;margin-left:294px;",
                    "margin-top:76px;margin-left:339px;",
                    "margin-top:76px;margin-left:384px;",
                    "margin-top:76px;margin-left:429px;",
                    "margin-top:76px;margin-left:474px;",
                    "margin-top:76px;margin-left:520px;",
                    "margin-top:76px;margin-left:565px;",
                    "margin-top:76px;margin-left:611px;width:88px;",
                    "margin-top:76px;margin-left:720px;",
                    "margin-top:121px;margin-left:20px;width:67px;",
                    "margin-top:121px;margin-left:90px;",
                    "margin-top:121px;margin-left:137px;",
                    "margin-top:121px;margin-left:182.1px;",
                    "margin-top:121px;margin-left:227.1px;",
                    "margin-top:121px;margin-left:272.1px;",
                    "margin-top:121px;margin-left:317.1px;",
                    "margin-top:121px;margin-left:362.1px;",
                    "margin-top:121px;margin-left:407.1px;",
                    "margin-top:121px;margin-left:452px;",
                    "margin-top:121px;margin-left:497px;",
                    "margin-top:121px;margin-left:543px;",
                    "margin-top:121px;margin-left:588px;",
                    "width:66px;margin-top:121px;margin-left:634px;",
                    "margin-top:121px;margin-left:719px;",
                    "margin-top:168px;margin-left:19px;width:82px;",
                    "margin-top:168px;margin-left:103px;",
                    "margin-top:168px;margin-left:148px;",
                    "margin-top:168px;margin-left:193px;",
                    "margin-top:168px;margin-left:238px;",
                    "margin-top:168px;margin-left:283px;",
                    "margin-top:168px;margin-left:328px;",
                    "margin-top:168px;margin-left:373px;",
                    "margin-top:168px;margin-left:418px;",
                    "margin-top:168px;margin-left:464px;",
                    "margin-top:168px;margin-left:509px;",
                    "margin-top:168px;margin-left:554px;",
                    "margin-top:168px;margin-left:599px;width:100px;",
                    "margin-top:168px;margin-left:719px;",
                    "width:98px;margin-top:212px;margin-left:24px;",
                    "margin-top:212px;margin-left:125px;",
                    "margin-top:212px;margin-left:170px;",
                    "margin-top:212px;margin-left:215px;",
                    "margin-top:212px;margin-left:260px;",
                    "margin-top:212px;margin-left:305px;",
                    "margin-top:212px;margin-left:351px;",
                    "margin-top:212px;margin-left:395px;",
                    "margin-top:212px;margin-left:441px;",
                    "margin-top:212px;margin-left:486px;",
                    "margin-top:212px;margin-left:531px;",
                    "margin-top:212px;margin-left:577px;width:77px;",
                    "margin-top:222px;margin-left:665px;",
                    "margin-top:212px;margin-left:719px;",
                    "width:53px;margin-top:258px;margin-left:24px;",
                    "width:53px;margin-top:258px;margin-left:80px;",
                    "width:53px;margin-top:258px;margin-left:136px;",
                    "width:277px;border-radius:3px;margin-top:258px;margin-left:194px;",
                    "margin-top:258px;margin-left:474px;",
                    "margin-top:258px;margin-left:520px;",
                    "margin-top:258px;margin-left:565px;",
                    "margin-top:267px;margin-left:620px;",
                    "margin-top:267px;margin-left:666px;",
                ]
                ,
                keyMapping: [
                "Escape","F1","F2","F3","F4","F5","F6","F7","F8","F9","F10","F11","F12","PrintScreen","ScrollWheel","Backquote","Digit1","Digit2","Digit3","Digit4","Digit5","Digit6","Digit7","Digit8","Digit9","Digit0","Minus","Equal","Backspace","Delete","Tab","KeyQ","KeyW","KeyE","KeyR","KeyT","KeyY","KeyU","KeyI","KeyO","KeyP","BracketLeft","BracketRight","Backslash","PageUp","CapsLock","KeyA","KeyS","KeyD","KeyF","KeyG","KeyH","KeyJ","KeyK","KeyL","Semicolon","Quote","Enter","PageDown","ShiftLeft","KeyZ","KeyX","KeyC","KeyV","KeyB","KeyN","KeyM","Comma","Period","Slash","ShiftRight","ArrowUp","End","ControlLeft","MetaLeft","AltLeft","Space","AltRight","Custom_Fnkey","ControlRight","ArrowLeft","ArrowDown",
                ],
                cssText: 'position: absolute;height: 100%;width: 100%;pointer-events: none;',
                BGImage: 'url(./image/Share/KB1.png)',
                BGImageKeyerEffects: 'url(./image/Share/KB1KeyerEffects.png)',
                qigong_Step1_Range:[0,15,30,58,71,82],
                qigong_Step2_Range:[22,23, 38,52,51 ,36],
                breakGradation:[[0,14],[15,29],[30,44],[45,58],[59,72],[73,81]],
                imageMaxWidth:765,
                imageMaxHeight:308,
        
        }
    }

    constructor() { }
    getAssignTarget(name) {
        //console.log("keyBoardList",this.keyBoardList,this.nowTargetKey);
        return this.keyBoardList[name]
    }
    getTarget() {
        //console.log("keyBoardList",this.keyBoardList,this.nowTargetKey);
        return this.keyBoardList[this.nowTargetKey]
    }

    getTargetKeyBoradUIcss(id) {
        //console.log("getTargetKeyBoradUIcss",id);
        //document.getElementById(id).style.cssText=this.keyBoardList[this.nowTargetKey].cssText;
        var T1 = document.getElementById(id)
        if ((T1.dataset.UITransparent = 'RGBTransparent')) {
            T1.style.backgroundImage = this.keyBoardList[this.nowTargetKey].BGImageKeyerEffects
        } else {
            T1.style.backgroundImage = this.keyBoardList[this.nowTargetKey].BGImage
        }
        //return this.keyBoardList[this.nowTargetKey].cssText;
    }

    getAssignKBCssStyles(name) {
        var target = document.getElementById(name)
        var targetArray = target.getElementsByClassName('SyncRGBColorBlockStyle');
        var targetUI = target.getElementsByClassName('RGBKeyBoardUITransparent') as unknown;
        targetUI[0].style.backgroundImage = this.keyBoardList[name].BGImageKeyerEffects
        for (const [key, value] of Object.entries(this.getAssignTarget(name).ItemCss)) {
            targetArray[key].style.cssText += value
            //console.log(key, value);
        }
    }
    getTargetDefaultKeyArray() {
        return this.getTarget().keyMapping;
    }
    findKeyMappingIndex(code = "") {
        let targetIndex = this.getTargetDefaultKeyArray().findIndex((x) => x == code)
        if (targetIndex == -1) {
            //console.error('this.nowMacroSelect.m_Identifier', this.nowMacroSelect.m_Identifier);
            alert('findKeyMappingIndex=lost' + code);
            console.log('findKeyMappingIndex', targetIndex);
        }
        else{
            return targetIndex;
        }

    }
    applyStyles(target) {
        //this.getTargetKeyBoradUIcss('RGBKeyBoardUITransparent')
        console.log("applyStyles", this.getTarget().ItemCss,target);

        this.getTarget().ItemCss.forEach((element, index) => {
            //console.log("applyStyles_element", element);
            if(target[index]){
                target[index].style.cssText += element;
                console.log("applyStyles_ItemCss", index);
            }
            else{
              console.log("applyStyles_ItemCss.forEach_Err",target[index],index);
            }
        });
        this.getTarget().keyMapping.forEach((element, index) => {
            if(target[index]){
                target[index].setAttribute('keyMapping', element);
                console.log("applyStyles_keyMapping", index);
            }
            else{
              console.log("applyStyles_keyMapping.forEach_Err","color:red",target[index],index);
            }
            //element.setAttribute('keyMapping', index);

        });
        // for (const [key, value] of Object.entries(this.getTarget().ItemCss)) {
        //     //element.style.width = '100px'
        //     //if(key!=="target" &&key!=="cssText"){
        //     target[key].style.cssText += value
        //     //target[key].style.width = value;
        //     //console.log(key, value);
        //     //}
        // }
    }
}
