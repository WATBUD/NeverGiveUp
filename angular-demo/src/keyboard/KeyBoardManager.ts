import {  } from '@angular/material'
declare var System
import { ElementRef,Injectable } from '@angular/core'
import { KB61Prohibit } from './KeyBoardData'
import { AllFunctionMapping } from '../backend/others/SupportData'

// let AllFunctionMapping = System._nodeRequire('./backend/others/SupportData').AllFunctionMapping

@Injectable()
export class KeyBoardManager {
    defaultName = '未配置'
    profileindex = 0;
    KeyBoardArray: any
    maxKayCapNumber: number
    notClickedYet = true;
    profileLayers = [];
    profileLayerIndex = [0, 0, 0];
    layerMaxNumber = 3;
    //AllFunctionMapping=new AllFunctionMapping();
    constructor(inputmax) {
        this.maxKayCapNumber = inputmax
        this.KeyBoardArray = [
            new KeyBoard('硬體配置1', inputmax, 0),
            new KeyBoard('硬體配置2', inputmax, 1),
            new KeyBoard('硬體配置3', inputmax, 2),//profile
        ]
        var countIndex = 0;
        for (let index = 1; index <= this.KeyBoardArray.length; index++) {
            var tempArr = []
            for (let index2 = 1; index2 <= this.layerMaxNumber; index2++) {
                tempArr.push(
                    new KeyBoard('硬體配置' + index2 * index, inputmax, index2 * index),
                );
            }
            this.profileLayers.push(tempArr);
        }
    }
    setALLDefaultKeyArray(data) {
        console.log('setALLDefaultKeyArray', this.profileLayers);
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].setTargetDefaultKeyArray(data);
            for (let index2 = 0; index2 < this.layerMaxNumber; index2++) {
                this.profileLayers[index][index2].setTargetDefaultKeyArray(data);
            }
        }
    }
    
    



    getProfileLayerIndex(){
       return this.profileLayerIndex[this.profileindex];
    }
    changeProfileLayer() {
        this.notClickedYet = true;
        var T = this.getProfileLayerIndex();
        if (T < this.layerMaxNumber - 1) {
            T = T + 1;
        }
        else {
            T = 0;
        }
        this.profileLayerIndex[this.profileindex]=T;
        console.log('changeProfileLayer',  this.getProfileLayerIndex());
        console.log('changeProfileLayer_profile', this.getTarget());

    };

    keyAssignPromPrompt(event) {
        var KeyAssignPrompt = document.getElementById('KeyAssignPrompt')
        //KeyAssignPrompt.style.display='block';
        var H = event.target.offsetHeight
        var W = event.target.offsetWidth
        console.log('keyAssignPrompt', H, W, event)
        KeyAssignPrompt.style.left = event.target.offsetLeft + event.target.offsetWidth + 'px'
        KeyAssignPrompt.style.top = event.target.offsetTop + 'px'
        console.log('keyAssignPrompt', event.offsetX, event.offsetY)
    }

    clearAllKeyboardData(Name) {
        for (let index = 0; index < 4; index++) {
            this.KeyBoardArray[index] = new KeyBoard(Name + (index + 1), this.maxKayCapNumber, 0)
        }
    }
    i18nChangeName(Name) {
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].profileName = Name + ' ' + (index + 1)
        }
    }

    clearAllAssignRecordLed(FindName = '') {
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].clearAssignRecordLed(FindName)
        }
    }

    ChangeAllLookingforMacroName(changeName = '', targetName = '') {
        console.log('EnterKeyChangeMacroName', changeName, targetName)
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].ChangeMacroName(changeName, targetName)
        }
    }

    ChangeAllLookingforLCFMName(changeName = '', targetName = '') {
        console.log('EnterKeyChangeMacroName', changeName, targetName)
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].ChangeLCFMName(changeName, targetName)
        }
    }

    clearRecordMacroData(targetName = '') {
        console.log('clearRecordMacroData', targetName)
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].clearMacroName(targetName)
        }
    }

    getTarget() {
        if(this.layerMaxNumber>0){
            return this.profileLayers[this.profileindex][this.getProfileLayerIndex()];
        }
        else{
            return this.KeyBoardArray[this.profileindex]
        }
    }

    getAssignTarget(index) {
        return this.KeyBoardArray[index]
    }

 

    changeAll_KBIndex(index) {
        var KBMarr = this.KeyBoardArray
        for (let index = 0; index < KBMarr.length; index++) {
            KBMarr[index].recordAssignBtnIndex = index;
        }
    }



    delete_KeyBoard() {
        if (this.profileindex > 0) {
            var T = this.profileindex
            this.profileindex -= 1
            this.KeyBoardArray.splice(T, 1)
        } else if (this.profileindex == 0) {
            this.KeyBoardArray.splice(this.profileindex, 1)
        }
    }
    setDefault() { }
}

export class KeyBoard {

    profileName = 'default';
    profileid;
    hibernate = true
    winLock = false
    hibernateTimeArr: any = [1, 3, 5, 10]
    hibernateTime: any = 3
    defaultName = "Default";
    pollingrate = 125;
    recordAssignBtnIndex: any = 0
    assignText: any = '設定按鍵:Y'
    maxKayCapNumber: any
    assignedKeyboardKeys: any = [[]] //61KEY
    assignedFnKeyboardKeys = [] //61KEY
    fnModeMartrix = [false, false, false]
    fnModeindex = 0;
    fiveDefaultLedCode: any = []
    fiveRecordIndex: any = 0
    keyHoverIndex = 0;
    profileLayerIndex=0;
    constructor(name = '', inputMax, profileid) {
        this.maxKayCapNumber = inputMax
        this.profileName = name;
        this.profileid = profileid;
        for (let index = 0; index < 1; index++) {
            for (let i2 = 0; i2 < this.maxKayCapNumber; i2++) {
                this.assignedKeyboardKeys[index].push(this.defaultModule())
            }
        }

        // for (let index = 0; index < 5; index++) {
        //     this.fiveDefaultLedCode.push({
        //         recordBindCodeName: 0,
        //         profileName: this.defaultName,
        //     })
        // }
    }
    setTargetDefaultKeyArray(data) {
        //console.log('setTargetDefaultKeyArray', data);
        for (let index = 0; index < data.length; index++) {
            var targetValue = AllFunctionMapping.find((x) => x.keyCode == data[index]).value
            //console.log('setTargetDefaultKeyArray_index', index, targetValue);
            this.getNowModeKeyMatrix()[index].defaultValue = targetValue;
            this.getNowModeKeyMatrix()[index].recordBindCodeType = '';
        }
    }

    getHibernateStepTime() {
        //console.log("getHibernateStepTime",this.hibernateTimeArr,this.hibernateTime);
        return this.hibernateTimeArr[this.hibernateTime]
    }

    clearAllKMacro() {
        for (let index = 0; index < this.assignedKeyboardKeys.length; index++) {
            for (let index2 = 0; index2 < this.maxKayCapNumber; index2++) {
                var target = this.assignedKeyboardKeys[index]
                if (target[index2].keyAssignType[0] == 'KMacro') {
                    target[index2].keyAssignType[0] = this.defaultName
                    target[index2].value = this.defaultName
                }
            }
        }
    }

    ChangeMacroName(changeName = '', targetName = '') {
        console.log('KeyChangeMacroName', changeName, targetName)
        for (let index = 0; index < this.assignedKeyboardKeys.length; index++) {
            var target = this.assignedKeyboardKeys[index]
            for (let index2 = 0; index2 < this.maxKayCapNumber; index2++) {
                let T = target[index2]
                if (T.value == targetName && T.keyAssignType[0] == 'KMacro') {
                    console.log('KeyChangeMacroName_t', T)
                    T.value = changeName
                }
            }
        }
    }


    clearMacroName(targetName = '') {
        for (let index = 0; index < this.assignedKeyboardKeys.length; index++) {
            var target = this.assignedKeyboardKeys[index]
            for (let index2 = 0; index2 < this.maxKayCapNumber; index2++) {
                let T = target[index2]
                if (T.value == targetName && T.keyAssignType[0] == 'KMacro') {
                    T.value = this.defaultName
                }
            }
        }
    }



    ImportClassData(InputData) {
        console.log('ImportClassData', InputData)
        var tempData=JSON.parse(JSON.stringify(InputData));
        var excludeVar = ['KB61Prohibit', 'profileLayerIndex','profileName']
        var arr = Object.keys(this)
        for (let index = 0; index < arr.length; index++) {
            if (excludeVar.find((x) => x == arr[index])){
            }
            else {
                this[arr[index]] = tempData[arr[index]]
            }
        }
        // for (let index = 0; index < arr.length; index++) {

        // }
    }

    HasSet(checkIndex = 0) {
        var target = this.getNowModeKeyMatrix()
        var N = target[checkIndex].value
        var N2 = target[checkIndex].profileName
        var N3 = target[checkIndex].LongTimePressValue
        var N4 = target[checkIndex].InstantPressValue
        return N != '' || N2 != '' || N3 != '' || N4 != '' ? true : false
        // for (let index = 0; index <target.length; index++) {
        //     var element = target[index];

        // }
    }
    checkKeyAssignHasData(from = '') {
        var KeyAssignUIStyleList = document.querySelectorAll('.KeyAssignUIStyle')
        //var KeyAssignUIStyleList= this.elementRef.nativeElement.querySelectorAll(".KeyAssignUIStyle");
        for (let index = 0; index < KeyAssignUIStyleList.length; index++) {
            var Result = this.HasSet(index)
            let element = KeyAssignUIStyleList[index];
            Result ? (element.style.border = '2px solid #ffc757') : (element.style.border = '');
        }
    }
    getKeyTargetOptionFrequency() {
        var N = this.getNowModeTargetMatrixKey().macroOptionNumber
        console.log('getKeyTargetOptionFrequency', N)

        switch (true) {
            case N < 65535:
                return N
            case N == 65535:
                return 1
            case N == 65536:
                return 1
        }
    }
    checkNowModeTargetMatrixAssignKey(index, compareKeyCode) {
        //console.log('getNowModeTargetMatrixKey', this.getNowModeKeyMatrix()[this.recordAssignBtnIndex])
        if (this.getNowModeKeyMatrix()[index].defaultValue == compareKeyCode) {
            return false;
        }
        return true;
    }
    getNowModeKeyMatrix() {
        if (!this.assignedKeyboardKeys[this.fnModeindex]) {
            console.log(this);
        }
        else {
            return this.assignedKeyboardKeys[this.fnModeindex]
        }
    }
    getNowModeTargetMatrixKey() {
        //console.log('getNowModeTargetMatrixKey', this.getNowModeKeyMatrix()[this.recordAssignBtnIndex])
        return this.getNowModeKeyMatrix()[this.recordAssignBtnIndex]
    }

    switchLongTime_Instant_Status() {
        this.getNowModeTargetMatrixKey().LongTime_Instant_Status = !this.getNowModeTargetMatrixKey()
            .LongTime_Instant_Status
    }

    setFnModeMartrix(targetIndex) {
        this.fnModeMartrix[targetIndex] = !this.fnModeMartrix[targetIndex]
        for (let index = 0; index < this.fnModeMartrix.length; index++) {
            if (targetIndex != index) {
                this.fnModeMartrix[index] = false
            }
        }

        if (!this.fnModeMartrix.some((element) => element == true)) {
            this.fnModeindex = 0
        } else {
            this.fnModeindex = targetIndex + 1
        }
        console.log('setFnModeMartrix_改後', this.fnModeMartrix[targetIndex], this.fnModeindex)
        this.checkKeyAssignHasData('setFnModeMartrix')
    }

    set_prohibit(Class = '') {
        var target = KB61Prohibit.get_prohibit(Class)
        console.log('get_prohibit', target)
        for (let index = 0; index < target.length; index++) {
            var T = this.getNowModeKeyMatrix()[target[index]]
            for (let KATindex = 0; KATindex < 3; KATindex++) {
                T.keyAssignType[KATindex] = 'K12'
            }
            T.value = '⊘'
            T.LongTimePressValue = '⊘'
            T.InstantPressValue = '⊘'
        }
    }
    cancel_prohibit() {
        console.log('cancel_prohibit_FNMode')
        let T = this.getNowModeKeyMatrix()
        for (let index = 0; index < T.length; index++) {
            for (let KATindex = 0; KATindex < 3; KATindex++) {
                if (T[index].keyAssignType[KATindex] == 'K12') {
                    T[index].keyAssignType[KATindex] = this.defaultName
                    T[index].LongTimePressValue = this.defaultName
                    T[index].InstantPressValue = this.defaultName
                    T[index].value = this.defaultName
                    T[index].m_Identifier = 0
                }
            }
        }
    }
    //"設定按鍵:"
    get_assign_promptText(Type) {
        switch (Type) {
            case 'LongTimePressValue':
                return this.getNowModeTargetMatrixKey().LongTimePressValue

                break

            case 'InstantPressValue':
                return this.getNowModeTargetMatrixKey().InstantPressValue
                break
            case 'NormalKeyPress':
                return this.getNowModeTargetMatrixKey().value
                break
        }
    }
    //"燈光設置:"
    get_Led_promptText() {
        //console.log("FNMode_get_Led_promptText");
        return this.getNowModeTargetMatrixKey().profileName
    }
    checkFnSetOnlyData(inputValue) {
        console.log('clearLostMacro_MCIarr')
        var V1 = this.getNowModeKeyMatrix()
        for (let index = 0; index < this.maxKayCapNumber; index++) {
            for (let KATindex = 0; KATindex < 3; KATindex++) {
                if (V1[index].keyAssignType[KATindex] == inputValue) {
                    V1[index] = this.defaultModule()
                }
            }
        }
    }
    setAssignTargetData(data) { 
        var target = this.getNowModeTargetMatrixKey()
        console.log('setAssignTargetData:', data, 'ManagerTarget:', target);
        var arrKeys = Object.keys(data);
        for (let index = 0; index < arrKeys.length; index++) {
            if (target[arrKeys[index]] != undefined) {
                target[arrKeys[index]] = data[arrKeys[index]];
            }
        }
        target.changed = true;

    }
    getNowModeTargetKeyPressStatus() {
        if (this.getNowModeTargetMatrixKey().openLongTimePress) {
            if (this.getNowModeTargetMatrixKey().LongTime_Instant_Status) {
                return 'LongTimePress'
            } else {
                return 'InstantPress'
            }
        } else {
            return 'NormalPress'
        }
    }
    setRecordLed(profileName, recordBindCodeName) {
        console.log('setRecordLedVar_', profileName, recordBindCodeName)
        var T = this.getNowModeTargetMatrixKey()
        T.profileName = profileName
        T.recordBindCodeName = recordBindCodeName
    }

    set_FiveLed(profileName, recordBindCodeName) {
        console.log('set_FiveLed', profileName, recordBindCodeName)
        var T = this.fiveDefaultLedCode[this.fiveRecordIndex]
        T.recordBindCodeName = recordBindCodeName
        T.profileName = profileName
    }

    resetAssignFive(index) {
        var T = this.fiveDefaultLedCode[index]
        T.recordBindCodeName = 0
        T.profileName = this.defaultName
    }

    reset_assign_default(type = '') {
        console.log('reset_assign_default', type)
        if (type == 'key') {
            var T = this.getNowModeTargetMatrixKey()
            for (var [key, value] of Object.entries(T)) {
                if (key != "keyAssignType") {
                    T[key] = this.defaultModule()[key];
                }

            }
        } else if (type == 'led') {
            var T = this.getNowModeTargetMatrixKey()
            T.profileName = this.defaultName
            T.recordBindCodeName = 0
        } else if (type == 'LongTime_or_Instant_Delete') {
            var T = this.getNowModeTargetMatrixKey()
            if (T.LongTime_Instant_Status) {
                T.keyAssignType[0] = this.defaultName
                T.LongTimePressValue = ''
            } else {
                T.keyAssignType[1] = this.defaultName
                T.InstantPressValue = ''
            }
        }
    }
    reset_AllKey() {
        var KeyArray = this.getNowModeKeyMatrix();
        for (let index = 0; index < KeyArray.length; index++) {
            for (var [key, value] of Object.entries(KeyArray[index])) {
                if (key != "defaultValue") {
                    KeyArray[index][key] = this.defaultModule()[key];
                }
            }
        }
    }

    defaultModule(type = '') {
        var T = {
            keyAssignType: ['', '', ''],
            LongTimePressValue: '',
            InstantPressValue: '',
            LongTime_Instant_Status: false,
            openLongTimePress: false,
            defaultValue: 'Default',
            value: this.defaultName,
            macro_RepeatType: 0,
            macro_Data: {},
            assignValue: '',
            profileName: '',
            recordBindCodeType: '',
            recordBindCodeName: this.defaultName,
            shortcutsWindowsEnable: false,
            ApplicationPath: "",
            WebsitePath: "",
            combinationkey: "",
            combinationkeyEnable: false,
            Shift: false,
            Alt: false,
            Ctrl: false,
            Windows: false,
            changed: false,
        }
        return T
    }
}

export class KeyBoardStyle {
    nowTargetIndex = 0
    nowTargetKey = 'GMMK'
    //BGImage:'url(./image/Share/KB1KeyerEffects.png)',

    keyBoardList = {
        'GMMK': {
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
                "27",
                "112",
                "113",
                "114",
                "115",
                "116",
                "117",
                "118",
                "119",
                "120",
                "121",
                "122",
                "123",
                "45",
                "ScrollWheel",
                "192",
                "49",
                "50",
                "51",
                "52",
                "53",
                "54",
                "55",
                "56",
                "57",
                "48",
                "189",
                "187",
                "8",
                "36",
                "9",
                "81",
                "87",
                "69",
                "82",
                "84",
                "89",
                "85",
                "73",
                "79",
                "80",
                "219",
                "221",
                "220",
                "33",
                "20",
                "65",
                "83",
                "68",
                "70",
                "71",
                "72",
                "74",
                "75",
                "76",
                "186",
                "222",
                "13",
                "34",
                "16",
                "90",
                "88",
                "67",
                "86",
                "66",
                "78",
                "77",
                "188",
                "190",
                "191",
                "16",
                "35",
                "38",
                "17",
                "91",
                "18",
                "32",
                "18",
                "Custom_Fnkey",
                "17",
                "37",
                "40",
                "39"
            ],
            table:[
                [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8],[0,9],[0,10],[0,11],[0,12],[0,13],[0,14],[0,15],
                [1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8],[1,9],[1,10],[1,11],[1,12],[1,13],[1,14],[1,15],
                [2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8],[2,9],[2,10],[2,11],[2,12],[2,13],[2,14],[2,15],
                [3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8],[3,9],[3,10],[3,11],[3,12],[3,13],[3,14],[3,15],
                [4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8],[4,9],[4,10],[4,11],[4,12],[4,13],[4,14],[4,15],
                [5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8],[5,9],[5,10],[5,11],[5,12],[5,13],[5,14],[5,15],
            ],
            target: new Array(83),
            cssText: 'position: absolute;height: 100%;width: 100%;pointer-events: none;',
            BGImage: 'url(./image/Share/KB1.png)',
            BGImageKeyerEffects: 'url(./image/Share/KB1KeyerEffects.png)',
        },
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
    applyStyles(target) {
        //this.getTargetKeyBoradUIcss('RGBKeyBoardUITransparent')
        this.getTarget().ItemCss.forEach((element, index) => {
            //console.log("applyStyles_element", element);
            //console.log("applyStyles_index", index);
            target[index].style.cssText += element;
        });
        // for (this.getTarget().ItemCss) {

        // }


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
