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
                "height: 42px;margin-top: 26px;",
                "margin-top: 30px;margin-left: 101px;display: flex;",
                "margin-top: 30px;margin-left: 157px;display: flex;",
                "margin-top: 30px;margin-left: 213px;display: flex;",
                "margin-top: 30px;margin-left: 269px;display: flex;",
                "margin-top: 31px;margin-left: 348px;display: flex;border-radius: 31px;",
                "display: flex;margin-left: 446px;margin-top: 26px;height: 42px;",
                "margin-top: 66px;height: 42px;",
                "margin-top: 108px;height: 42px;",
                "display: flex;margin-left: 101px;margin-top: 86px;",
                "margin-top: 86px;margin-left: 158px;",
                "margin-top: 85px;margin-left: 213px;",
                "margin-top: 85px;margin-left: 269px;height: 111px;",
                "margin-top: 206px;margin-left: 345px;border-radius: 28px;height: 32px;width: 63px;display: flex;",
                "margin-top: 65px;margin-left: 446px;height: 42px;",
                "margin-top: 106px;margin-left: 446px;height: 42px;",
                "margin-top: 150px;height: 42px;",
                "margin-top: 142px;margin-left: 101px;",
                "margin-top: 142px;margin-left: 157px;",
                "margin-top: 141px;margin-left: 213px;",
                "margin-top: 148px;margin-left: 446px;height: 42px;",
                "margin-top: 192px;height: 42px;",
                "margin-top: 233px;margin-left: 0px;height: 42px;",
                "margin-top: 197px;margin-left: 102px;",
                "margin-top: 197px;margin-left: 158px;",
                "margin-top: 197px;margin-left: 213px;",
                "margin-top: 197px;margin-left: 269px;height: 111px;",
                "margin-top: 190px;margin-left: 446px;height: 42px;",
                "margin-top: 232px;margin-left: 446px;height: 42px;",
                "margin-top: 274px;height: 42px;",
                "margin-top: 252px;margin-left: 101px;width: 112px;",
                "margin-top: 253px;margin-left: 213px;",
                "margin-top: 274px;margin-left: 446px;height: 42px;", ,
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
