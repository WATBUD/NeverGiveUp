/**-----------------------------------------------------------------------------------------
 * Author:G-SPY Louis
 * KeyBoardStyle:KeyBoardStyle Class
 * Processing KeyBoardStyle
-----------------------------------------------------------------------------------------*/
import { Injectable } from '@angular/core'
@Injectable()
export class KeyBoardStyle {
    nowTargetIndex = 0
    nowTargetKey = 'GMMK NUMPAD'
    keyBoardList = {
        'GMMK NUMPAD': {
            ItemCss: [
                "margin-top: 32px;margin-left: 92px;display: flex;",
                "margin-top: 32px;margin-left: 154px;display: flex;",
                "margin-top: 32px;margin-left: 216px;display: flex;",
                "margin-top: 32px;margin-left: 279px;display: flex;",
                "margin-top: 95px;margin-left: 92px;display: flex;",
                "margin-top: 34px;margin-left: 367px;display: flex;border-radius: 31px;",
                "margin-top: 230px;margin-left: 364px;border-radius: 28px;height: 32px;width: 63px;display: flex;",
            ]
            ,
            coordinates:[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[0,1],[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[6,1],[0,2],[0,2],[1,2],[2,2],[3,2],[4,2],[4,2],[0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[0,4],[1,4],[2,4],[3,4]],
            // item_Data:[{
            //     coordinates:[],
            //     keyMapping:"",
            // }]
            // ,

            hasValueStyle:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
            ,
            // keyMapping:["NumLock","NumpadDivide","NumpadMultiply","NumpadSubtract","Numpad7","Numpad8","Numpad9","NumpadAdd","Numpad4","Numpad5","Numpad6","Numpad1","Numpad2","Numpad3","Numpad0","NumpadDecimal","NumpadEnter"],
            keyMapping:["Side Light","NumLock","NumpadDivide","NumpadMultiply","NumpadSubtract","ScrollWheel","Side Light","Side Light","Side Light","Numpad7","Numpad8","Numpad9","NumpadAdd","ScrollWheel","Side Light","Side Light","Side Light","Side Light","Numpad4","Numpad5","Numpad6","Side Light","Side Light","Side Light","Numpad1","Numpad2","Numpad3","NumpadEnter","Side Light","Side Light","Numpad0","NumpadDecimal","Side Light"],
            cssText: 'position: absolute;height: 100%;width: 100%;pointer-events: none;',
            BGImage: 'url(./image/Share/KB1.png)',
            BGImageKeyerEffects: 'url(./image/Share/KB1KeyerEffects.png)',
            centerBlockPoint:37,
            qigong_Step1_Range: [0, 15, 30, 58, 71, 82],
            qigong_Step2_Range: [22, 23, 38, 52, 51, 36],
            KeyTableArray: [[0, 14], [15, 29], [30, 44], [45, 58], [59, 72], [73, 82]],
            imageMaxWidth: 765,
            imageMaxHeight: 308,
        },
    }
    /**
     * getAssignTarget
     * @param name string:keyBoard name
    */
    getAssignTarget(name) {
        //console.log("keyBoardList",this.keyBoardList,this.nowTargetKey);
        return this.keyBoardList[name]
    }

    /**
     * get nowTargetkeyBoard name
    */
    getTarget() {
        //console.log("keyBoardList",this.keyBoardList,this.nowTargetKey);
        return this.keyBoardList[this.nowTargetKey]
    }

    /**
     * get nowTargetkeyBoard keyMapping
    */
    getTargetDefaultKeyArray() {
        return this.getTarget().keyMapping;
    }

    /**
     * find KeyMappingIndex
     * @param code string:Key name
    */
    findKeyMappingIndex(code = "") {
        let targetIndex = this.getTargetDefaultKeyArray().findIndex((x) => x == code)
        if (targetIndex == -1) {
            console.log('findKeyMappingIndex=lostcode',code);
        }
        return targetIndex;
    }

    /**
     * set keyBoardList cssText
     * @param target Array:HTMLElements List
    */
    applyStyles(target) {
        //console.log("applyStyles", this.getTarget().ItemCss,target);
        this.getTarget().ItemCss.forEach((element, index) => {
            //console.log("applyStyles_element", element);
            if(target[index]){
                //console.log("applyStyles_ItemCss_"+index, target[index].style.cssText);
                target[index].style.cssText = element;
            }
            else{
              console.log("applyStyles_ItemCss.forEach_Err",target[index],index);
            }
        });
        this.getTarget().keyMapping.forEach((element, index) => {
            if(target[index]){
                target[index].setAttribute('keyMapping', element);
                //console.log("applyStyles_keyMapping", index);
            }
            else{
              console.log("applyStyles_keyMapping.forEach_Err","color:red",target[index],index);
            }
        });
    }
}
