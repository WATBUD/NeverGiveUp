import { Injectable } from '@angular/core'
import { identity } from 'lodash'
import { KB61Prohibit } from './KeyBoardData'
@Injectable()
export class KeyBoardStyle {
    nowTargetIndex = 0
    nowTargetKey = 'GMMK Pro'
    //BGImage:'url(./image/Share/KB1KeyerEffects.png)',

    keyBoardList = {
        'GMMK Pro': {
            ItemCss: [
                "margin-top:22px;margin-left:22px;height:44px;display: flex;",
                "margin-top:22px;margin-left:78px;height:44px;display: flex;",
                "margin-top:22px;margin-left:124px;height:44px;display: flex;",
                "margin-top:22px;margin-left:169px;height:44px;display: flex;",
                "margin-top:22px;margin-left:215px;height:44px;display: flex;",
                "margin-top:22px;margin-left:271px;height:44px;display: flex;",
                "margin-top:22px;margin-left:316px;height:44px;display: flex;",
                "margin-top:22px;margin-left:361px;height:44px;display: flex;",
                "margin-top:22px;margin-left:408px;height:44px;display: flex;",
                "margin-top:22px;margin-left:463px;height:44px;display: flex;",
                "margin-top:22px;margin-left:508px;height:44px;display: flex;",
                "margin-top:22px;margin-left:554px;height:44px;display: flex;",
                "margin-top:22px;margin-left:600px;height:44px;display: flex;",
                "margin-top:22px;margin-left:655px;height:44px;display: flex;",
                "margin-top:22px;margin-left:722px;border-radius:25px;height:44px;display: flex;",
                "margin-top:76px;margin-left:23px;height:44px;display: flex;",
                "margin-top:76px;margin-left:68px;height:44px;display: flex;",
                "margin-top:76px;margin-left:113px;height:44px;display: flex;",
                "margin-top:76px;margin-left:158px;height:44px;display: flex;",
                "margin-top:76px;margin-left:203px;height:44px;display: flex;",
                "margin-top:76px;margin-left:249px;height:44px;display: flex;",
                "margin-top:76px;margin-left:294px;height:44px;display: flex;",
                "margin-top:76px;margin-left:339px;height:44px;display: flex;",
                "margin-top:76px;margin-left:384px;height:44px;display: flex;",
                "margin-top:76px;margin-left:429px;height:44px;display: flex;",
                "margin-top:76px;margin-left:474px;height:44px;display: flex;",
                "margin-top:76px;margin-left:520px;height:44px;display: flex;",
                "margin-top:76px;margin-left:565px;height:44px;display: flex;",
                "margin-top:76px;margin-left:611px;width:88px;height:44px;display: flex;",
                "margin-top:76px;margin-left:720px;height:44px;display: flex;",
                "margin-top:121px;margin-left:20px;width:67px;height:44px;display: flex;",
                "margin-top:121px;margin-left:90px;height:44px;display: flex;",
                "margin-top:121px;margin-left:137px;height:44px;display: flex;",
                "margin-top:121px;margin-left:182.1px;height:44px;display: flex;",
                "margin-top:121px;margin-left:227.1px;height:44px;display: flex;",
                "margin-top:121px;margin-left:272.1px;height:44px;display: flex;",
                "margin-top:121px;margin-left:317.1px;height:44px;display: flex;",
                "margin-top:121px;margin-left:362.1px;height:44px;display: flex;",
                "margin-top:121px;margin-left:407.1px;height:44px;display: flex;",
                "margin-top:121px;margin-left:452px;height:44px;display: flex;",
                "margin-top:121px;margin-left:497px;height:44px;display: flex;",
                "margin-top:121px;margin-left:543px;height:44px;display: flex;",
                "margin-top:121px;margin-left:588px;height:44px;display: flex;",
                "width:66px;margin-top:121px;margin-left:634px;height:44px;display: flex;",
                "margin-top:121px;margin-left:719px;height:44px;display: flex;",
                "margin-top:168px;margin-left:19px;width:82px;height:44px;display: flex;",
                "margin-top:168px;margin-left:103px;height:44px;display: flex;",
                "margin-top:168px;margin-left:148px;height:44px;display: flex;",
                "margin-top:168px;margin-left:193px;height:44px;display: flex;",
                "margin-top:168px;margin-left:238px;height:44px;display: flex;",
                "margin-top:168px;margin-left:283px;height:44px;display: flex;",
                "margin-top:168px;margin-left:328px;height:44px;display: flex;",
                "margin-top:168px;margin-left:373px;height:44px;display: flex;",
                "margin-top:168px;margin-left:418px;height:44px;display: flex;",
                "margin-top:168px;margin-left:464px;height:44px;display: flex;",
                "margin-top:168px;margin-left:509px;height:44px;display: flex;",
                "margin-top:168px;margin-left:554px;height:44px;display: flex;",
                "margin-top:168px;margin-left:599px;width:100px;height:44px;display: flex;",
                "margin-top:168px;margin-left:719px;height:44px;display: flex;",
                "width:98px;margin-top:212px;margin-left:24px;height:44px;display: flex;",
                "margin-top:212px;margin-left:125px;height:44px;display: flex;",
                "margin-top:212px;margin-left:170px;height:44px;display: flex;",
                "margin-top:212px;margin-left:215px;height:44px;display: flex;",
                "margin-top:212px;margin-left:260px;height:44px;display: flex;",
                "margin-top:212px;margin-left:305px;height:44px;display: flex;",
                "margin-top:212px;margin-left:351px;height:44px;display: flex;",
                "margin-top:212px;margin-left:395px;height:44px;display: flex;",
                "margin-top:212px;margin-left:441px;height:44px;display: flex;",
                "margin-top:212px;margin-left:486px;height:44px;display: flex;",
                "margin-top:212px;margin-left:531px;height:44px;display: flex;",
                "margin-top:212px;margin-left:577px;width:77px;height:44px;display: flex;",
                "margin-top:222px;margin-left:665px;height:44px;display: flex;",
                "margin-top:212px;margin-left:719px;height:44px;display: flex;",
                "width:53px;margin-top:258px;margin-left:24px;height:44px;display: flex;",
                "width:53px;margin-top:258px;margin-left:80px;height:44px;display: flex;",
                "width:53px;margin-top:258px;margin-left:136px;height:44px;display: flex;",
                "width:277px;border-radius:3px;margin-top:258px;margin-left:194px;height:44px;display: flex;",
                "margin-top:258px;margin-left:474px;height:44px;display: flex;",
                "margin-top:258px;margin-left:520px;height:44px;display: flex;",
                "margin-top:258px;margin-left:565px;height:44px;display: flex;",
                "margin-top:267px;margin-left:620px;height:44px;display: flex;",
                "margin-top:267px;margin-left:666px;height:44px;display: flex;",
                "margin-top:267px;margin-left:711px;height:44px;display: flex;",
            ]
            ,
            hasValueStyle:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
            ,
            keyMapping: [
                "Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "PrintScreen", "ScrollWheel", "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Delete", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "PageUp", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "PageDown", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight", "ArrowUp", "End", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "Custom_Fnkey", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"
            ],
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
        "GMMK_V2_65US": {
            ItemCss: [
                "margin-top: 13px; margin-left: 12px; width: 45px; height: 43px; display: flex; ",
                "margin-top: 13px; margin-left: 60px; width: 45px; height: 43px; display: flex; ",
                "margin-top: 13px; margin-left: 107px; width: 45px; height: 43px; display: flex; ",
                "margin-top: 13px; margin-left: 155px; width: 45px; height: 43px; display: flex; ",
                "margin-top: 13px; margin-left: 202px; width: 45px; height: 43px; display: flex; ",
                "margin-top: 13px;margin-left: 251px;width: 45px;height: 43px;display: flex;",
                "margin-top: 13px;margin-left: 299px;width: 45px;height: 43px;display: flex;",
                "margin-top: 13px;margin-left: 348px;width: 45px;height: 43px;display: flex;",
                "margin-top: 13px;margin-left: 395px;width: 45px;height: 43px;display: flex;",
                "margin-top: 13px;margin-left: 443px;width: 45px;height: 43px;display: flex;",
                "margin-top: 13px;margin-left: 491px;width: 45px;height: 43px;display: flex;",
                "margin-top: 13px;margin-left: 539px;width: 45px;height: 43px;display: flex;",
                "margin-top: 13px;margin-left: 587px;width: 45px;height: 43px;display: flex;",
                "margin-top: 13px;margin-left: 636px;width: 90px;height: 43px;display: flex;",
                "margin-top: 13px;margin-left: 730px;width: 45px;height: 43px;display: flex;",
                "margin-top: 61px;margin-left: 12px;width: 68px;height: 43px;display: flex;",
                "margin-top: 61px;margin-left: 85px;width: 43px;height: 43px;display: flex;",
                "margin-top: 61px;margin-left: 132px;width: 43px;height: 43px;display: flex;",
                "margin-top: 61px;margin-left: 181px;width: 43px;height: 43px;display: flex;",
                "margin-top: 61px;margin-left: 227px;width: 43px;height: 43px;display: flex;",
                "margin-top: 61px;margin-left: 275px;width: 43px;height: 43px;display: flex;",
                "margin-top: 61px;margin-left: 324px;width: 43px;height: 43px;display: flex;",
                "margin-top: 61px;margin-left: 371px;width: 43px;height: 43px;display: flex;",
                "margin-top: 61px;margin-left: 418px;width: 43px;height: 43px;display: flex;",
                "margin-top: 61px;margin-left: 467px;width: 43px;height: 43px;display: flex;",
                "margin-top: 61px;margin-left: 513px;width: 43px;height: 43px;display: flex;",
                "margin-top: 61px;margin-left: 563px;width: 43px;height: 43px;display: flex;",
                "margin-top: 61px;margin-left: 610px;width: 43px;height: 43px;display: flex;",
                "margin-top: 61px;margin-left: 658px;width: 66px;height: 43px;display: flex;",
                "margin-top: 61px;margin-left: 731px;width: 43px;height: 43px;display: flex;",
                "margin-top: 109px;margin-left: 14px;width: 77px;height: 43px;display: flex;",
                "margin-top: 109px;margin-left: 97px;width: 43px;height: 43px;display: flex;",
                "margin-top: 109px;margin-left: 144px;width: 43px;height: 43px;display: flex;",
                "margin-top: 109px;margin-left: 192px;width: 43px;height: 43px;display: flex;",
                "margin-top: 109px;margin-left: 241px;width: 43px;height: 43px;display: flex;",
                "margin-top: 109px;margin-left: 288px;width: 43px;height: 43px;display: flex;",
                "margin-top: 109px;margin-left: 337px;width: 43px;height: 43px;display: flex;",
                "margin-top: 109px;margin-left: 383px;width: 43px;height: 43px;display: flex;",
                "margin-top: 109px;margin-left: 431px;width: 43px;height: 43px;display: flex;",
                "margin-top: 109px;margin-left: 478px;width: 43px;height: 43px;display: flex;",
                "margin-top: 109px;margin-left: 526px;width: 43px;height: 43px;display: flex;",
                "margin-top: 109px;margin-left: 574px;width: 43px;height: 43px;display: flex;",
                "margin-top: 109px;margin-left: 622px;width: 104px;height: 43px;display: flex;",
                "margin-top: 109px;margin-left: 730px;width: 43px;height: 43px;display: flex;",
                "margin-top: 157px;margin-left: 14px;width: 103px;height: 43px;display: flex;",
                "margin-top: 157px;margin-left: 122px;width: 43px;height: 43px;display: flex;",
                "margin-top: 157px;margin-left: 170px;width: 43px;height: 43px;display: flex;",
                "margin-top: 157px;margin-left: 217px;width: 43px;height: 43px;display: flex;",
                "margin-top: 157px;margin-left: 264px;width: 43px;height: 43px;display: flex;",
                "margin-top: 157px;margin-left: 313px;width: 43px;height: 43px;display: flex;",
                "margin-top: 157px;margin-left: 361px;width: 43px;height: 43px;display: flex;",
                "margin-top: 157px;margin-left: 409px;width: 43px;height: 43px;display: flex;",
                "margin-top: 157px;margin-left: 457px;width: 43px;height: 43px;display: flex;",
                "margin-top: 157px;margin-left: 504px;width: 43px;height: 43px;display: flex;",
                "margin-top: 157px;margin-left: 552px;width: 43px;height: 43px;display: flex;",
                "margin-top: 157px;margin-left: 600px;width: 77px;height: 43px;display: flex;",
                "margin-top: 157px;margin-left: 683px;width: 43px;height: 43px;display: flex;",
                "margin-top: 157px;margin-left: 732px;width: 43px;height: 43px;display: flex;",
                "margin-top: 205px;margin-left: 14px;width: 52px;height: 43px;display: flex;",
                "margin-top: 204px;margin-left: 73px;width: 52px;height: 43px;display: flex;",
                "margin-top: 204px;margin-left: 134px;width: 52px;height: 43px;display: flex;",
                "margin-top: 204px;margin-left: 193px;width: 292px;height: 43px;border-radius: 6px;display: flex;",
                "margin-top: 204px;margin-left: 492px;width: 52px;height: 43px;display: flex;",
                "margin-top: 204px;margin-left: 552px;width: 52px;height: 43px;display: flex;",
                "margin-top: 204px;margin-left: 635px;width: 43px;height: 43px;display: flex;",
                "margin-top: 204px;margin-left: 683px;width: 43px;height: 43px;display: flex;",
                "margin-top: 204px;margin-left: 731px;width: 43px;height: 43px;display: flex;",
            ]
            ,
            hasValueStyle:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
            ,
            keyMapping: ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Delete", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "PageUp", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "PageDown", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight", "ArrowUp", "End", "ControlLeft", "MetaLeft", "AltLeft", "Space", "MetaRight", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight"],
            cssText: 'position: absolute;height: 100%;width: 100%;pointer-events: none;',
            BGImage: 'url(./image/Share/KB1.png)',
            BGImageKeyerEffects: 'url(./image/Share/KB1KeyerEffects.png)',
            centerBlockPoint:37,
            qigong_Step1_Range: [0, 15, 30, 33, 43, 54],
            qigong_Step2_Range: [21, 22, 37, 50, 49, 35],
            KeyTableArray: [[0, 14], [15, 29], [30, 43], [44, 57], [58, 66]],
            imageMaxWidth: 765,
            imageMaxHeight: 308,
        },
        'GMMK Pro ISO': {
            ItemCss: [
                "margin-top: 17px;margin-left: 22px;height: 44px;display: flex;",
                "margin-top: 17px;margin-left: 78px;height: 44px;display: flex;",
                "margin-top: 17px;margin-left: 124px;height: 44px;display: flex;",
                "margin-top: 17px;margin-left: 169px;height: 44px;display: flex;",
                "margin-top: 17px;margin-left: 215px;height: 44px;display: flex;",
                "margin-top: 17px;margin-left: 272px;height: 44px;display: flex;",
                "margin-top: 17px;margin-left: 317px;height: 44px;display: flex;",
                "margin-top: 17px;margin-left: 363px;height: 44px;display: flex;",
                "margin-top: 17px;margin-left: 408px;height: 44px;display: flex;",
                "margin-top: 17px;margin-left: 465px;height: 44px;display: flex;",
                "margin-top: 17px;margin-left: 510px;height: 44px;display: flex;",
                "margin-top: 17px;margin-left: 556px;height: 44px;display: flex;",
                "margin-top: 17px;margin-left: 602px;height: 44px;display: flex;",
                "margin-top: 17px;margin-left: 658px;height: 44px;display: flex;",
                "margin-top: 17px;margin-left: 723px;border-radius: 25px;height: 44px;display: flex;",
                "margin-top: 72px;margin-left: 22px;height: 44px;display: flex;",
                "margin-top: 72px;margin-left: 68px;height: 44px;display: flex;",
                "margin-top: 71px;margin-left: 113px;height: 44px;display: flex;",
                "margin-top: 71px;margin-left: 158px;height: 44px;display: flex;",
                "margin-top: 71px;margin-left: 203px;height: 44px;display: flex;",
                "margin-top: 72px;margin-left: 249px;height: 44px;display: flex;",
                "margin-top: 71px;margin-left: 294px;height: 44px;display: flex;",
                "margin-top: 71px;margin-left: 339px;height: 44px;display: flex;",
                "margin-top: 71px;margin-left: 386px;height: 44px;display: flex;",
                "margin-top: 71px;margin-left: 432px;height: 44px;display: flex;",
                "margin-top: 71px;margin-left: 477px;height: 44px;display: flex;",
                "margin-top: 71px;margin-left: 522px;height: 44px;display: flex;",
                "margin-top: 71px;margin-left: 565px;height: 44px;display: flex;",
                "margin-top: 71px;margin-left: 612px;width: 88px;height: 44px;display: flex;",
                "margin-top: 72px;margin-left: 723px;height: 44px;display: flex;",
                "margin-top: 118px;margin-left: 22px;width: 67px;height: 44px;display: flex;",
                "margin-top: 118px;margin-left: 91px;height: 44px;display: flex;",
                "margin-top: 118px;margin-left: 136px;height: 44px;display: flex;",
                "margin-top: 118px;margin-left: 182px;height: 44px;display: flex;",
                "margin-top: 118px;margin-left: 227px;height: 44px;display: flex;",
                "margin-top: 118px;margin-left: 272px;height: 44px;display: flex;",
                "margin-top: 118px;margin-left: 317px;height: 44px;display: flex;",
                "margin-top: 118px;margin-left: 363px;height: 44px;display: flex;",
                "margin-top: 118px;margin-left: 408px;height: 44px;display: flex;",
                "margin-top: 118px;margin-left: 454px;height: 44px;display: flex;",
                "margin-top: 118px;margin-left: 499px;height: 44px;display: flex;",
                "margin-top: 118px;margin-left: 544px;height: 44px;display: flex;",
                "margin-top: 118px;margin-left: 589px;height: 44px;display: flex;",
                "margin-top: 118px;margin-left: 722px;height: 44px;display: flex;",
                "margin-top: 163px;margin-left: 19px;width: 82px;height: 44px;display: flex;",
                "margin-top: 163px;margin-left: 102px;height: 44px;display: flex;",
                "margin-top: 163px;margin-left: 148px;height: 44px;display: flex;",
                "margin-top: 163px;margin-left: 193px;height: 44px;display: flex;",
                "margin-top: 163px;margin-left: 238px;height: 44px;display: flex;",
                "margin-top: 163px;margin-left: 283px;height: 44px;display: flex;",
                "margin-top: 163px;margin-left: 328px;height: 44px;display: flex;",
                "margin-top: 163px;margin-left: 373px;height: 44px;display: flex;",
                "margin-top: 163px;margin-left: 419px;height: 44px;display: flex;",
                "margin-top: 163px;margin-left: 465px;height: 44px;display: flex;",
                "margin-top: 163px;margin-left: 510px;height: 44px;display: flex;",
                "margin-top: 163px;margin-left: 555px;height: 44px;display: flex;",
                "margin-top: 163px;margin-left: 599px;width: 44px;height: 44px;display: flex;",
                "width: 58px;margin-top: 159px;margin-left: 646px;height: 83px;\
                clip-path: polygon(0px 0px, 100% 0px, 100% 100%, 20% 100%, 21% 48%, 0px 48%);border-radius: 8px;display: flex;transform: translate(-7px, -40px);",
                "width: 47px;margin-top: 163px;margin-left: 719px;height: 44px;display: flex;",
                "width: 57px;margin-top: 208px;margin-left: 22px;height: 44px;display: flex;",
                "width: 43px;margin-top: 208px;margin-left: 80px;height: 44px;display: flex;",
                "margin-top: 208px;margin-left: 125px;height: 44px;display: flex;",
                "margin-top: 208px;margin-left: 170px;height: 44px;display: flex;",
                "margin-top: 208px;margin-left: 216px;height: 44px;display: flex;",
                "margin-top: 208px;margin-left: 261px;height: 44px;display: flex;",
                "margin-top: 208px;margin-left: 306px;height: 44px;display: flex;",
                "margin-top: 209px;margin-left: 352px;height: 44px;display: flex;",
                "margin-top: 208px;margin-left: 397px;height: 44px;display: flex;",
                "margin-top: 208px;margin-left: 442px;height: 44px;display: flex;",
                "margin-top: 208px;margin-left: 487px;height: 44px;display: flex;",
                "margin-top: 208px;margin-left: 533px;width: 43px;height: 44px;display: flex;",
                "margin-top: 208px;margin-left: 578px;height: 44px;width: 77px;display: flex;",
                "width: 45px;margin-top: 216px;margin-left: 666px;height: 44px;display: flex;",
                "width: 47px;margin-top: 209px;margin-left: 720px;height: 44px;display: flex;",
                "width: 56px;height: 44px;margin-top: 253px;margin-left: 23px;display: flex;",
                "width: 56px;height: 44px;margin-top: 253px;margin-left: 80px;display: flex;",
                "width: 56px;height: 44px;margin-top: 253px;margin-left: 137px;display: flex;",
                "width: 280px;height: 44px;margin-top: 253px;margin-left: 194.5px;border-radius: 8px;display: flex;",
                "height: 44px;margin-top: 253px;margin-left: 476px;display: flex;",
                "height: 44px;margin-top: 253px;margin-left: 521px;display: flex;",
                "height: 44px;margin-top: 253px;margin-left: 567px;display: flex;",
                "height: 44px;margin-top: 263px;margin-left: 621px;display: flex;",
                "height: 44px;margin-top: 263px;margin-left: 667px;display: flex;",
                "height: 44px;margin-top: 263px;margin-left: 712px;display: flex;",
            ],
            hasValueStyle: [
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "margin-left: 15px",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
                "",
            ]
            ,
            keyMapping: [
                "Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "PrintScreen", "ScrollWheel", "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Delete", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "PageUp", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Backslash", "Enter","PageDown", "ShiftLeft", "IntlBackslash", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight", "ArrowUp", "End", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "Custom_Fnkey", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"
            ],
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
        'GMMK_V2_96US': {
            ItemCss: [
                "margin-top: 11px;margin-left: 10px;height: 39px;width: 36px;display: flex;",
                "margin-top: 10px;margin-left: 61px;height: 39px;width: 36px;display: flex;",
                "margin-top: 10px;margin-left: 103px;height: 39px;width: 36px;display: flex;",
                "margin-top: 10px;margin-left: 143px;height: 39px;width: 36px;display: flex;",
                "margin-top: 10px;margin-left: 185px;width: 36px;height: 39px;display: flex;",
                "margin-top: 10px;margin-left: 236px;width: 36px;height: 39px;display: flex;",
                "margin-top: 10px;margin-left: 277px;width: 36px;height: 39px;display: flex;",
                "margin-top: 10px;margin-left: 318px;width: 36px;height: 39px;display: flex;",
                "margin-top: 10px;margin-left: 359px;width: 36px;height: 39px;display: flex;",
                "margin-top: 10px;margin-left: 410px;width: 36px;height: 39px;display: flex;",
                "margin-top: 10px;margin-left: 451px;width: 36px;height: 39px;display: flex;",
                "margin-top: 10px;margin-left: 493px;width: 36px;height: 39px;display: flex;",
                "margin-top: 10px;margin-left: 533px;width: 36px;height: 39px;display: flex;",
                "margin-top: 10px;margin-left: 584px;width: 36px;height: 39px;display: flex;",
                "margin-top: 10px;margin-left: 636px;width: 36px;height: 39px;display: flex;",
                "margin-top: 10px;margin-left: 677px;width: 36px;height: 39px;display: flex;",
                "margin-top: 10px;margin-left: 718px;width: 36px;height: 39px;display: flex;",
                "margin-top: 10px;margin-left: 760px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 10px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 51px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 92px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 133px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 175px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 215px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 257px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 298px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 338px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 379px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 420px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 461px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 502px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 544px;width: 76px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 636px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 677px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 718px;width: 36px;height: 39px;display: flex;",
                "margin-top: 55px;margin-left: 759px;width: 36px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 8px;width: 60px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 72px;width: 36px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 113px;width: 36px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 154px;width: 36px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 195px;width: 36px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 236px;width: 36px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 277px;width: 36px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 317px;width: 36px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 358px;width: 36px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 399px;width: 36px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 440px;width: 36px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 481px;width: 36px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 522px;width: 36px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 562px;width: 58px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 635px;width: 36px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 677px;width: 36px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 718px;width: 36px;height: 39px;display: flex;",
                "margin-top: 95px;margin-left: 759px;width: 36px;height: 80px;display: flex;",
                "margin-top: 136px;margin-left: 12px;width: 64px;height: 39px;display: flex;",
                "margin-top: 136px;margin-left: 82px;width: 36px;height: 39px;display: flex;",
                "margin-top: 136px;margin-left: 122px;width: 36px;height: 39px;display: flex;",
                "margin-top: 136px;margin-left: 163px;width: 36px;height: 39px;display: flex;",
                "margin-top: 136px;margin-left: 204px;width: 36px;height: 39px;display: flex;",
                "margin-top: 136px;margin-left: 246px;width: 36px;height: 39px;display: flex;",
                "margin-top: 136px;margin-left: 287px;width: 36px;height: 39px;display: flex;",
                "margin-top: 136px;margin-left: 328px;width: 36px;height: 39px;display: flex;",
                "margin-top: 136px;margin-left: 368px;width: 36px;height: 39px;display: flex;",
                "margin-top: 136px;margin-left: 409px;width: 36px;height: 39px;display: flex;",
                "margin-top: 136px;margin-left: 450px;width: 36px;height: 39px;display: flex;",
                "margin-top: 136px;margin-left: 491px;width: 36px;height: 39px;display: flex;",
                "margin-top: 136px;margin-left: 534px;width: 86px;height: 39px;display: flex;",
                "margin-top: 136px;margin-left: 635px;width: 36px;height: 39px;display: flex;",
                "margin-top: 136px;margin-left: 677px;width: 36px;height: 39px;display: flex;",
                "margin-top: 136px;margin-left: 717px;width: 36px;height: 39px;display: flex;",
                "margin-top: 178px;margin-left: 12px;width: 86px;height: 39px;display: flex;",
                "margin-top: 178px;margin-left: 104px;width: 36px;height: 39px;display: flex;",
                "margin-top: 178px;margin-left: 145px;width: 36px;height: 39px;display: flex;",
                "margin-top: 178px;margin-left: 186px;width: 36px;height: 39px;display: flex;",
                "margin-top: 178px;margin-left: 226px;width: 36px;height: 39px;display: flex;",
                "margin-top: 178px;margin-left: 267px;width: 36px;height: 39px;display: flex;",
                "margin-top: 178px;margin-left: 308px;width: 36px;height: 39px;display: flex;",
                "margin-top: 178px;margin-left: 349px;width: 36px;height: 39px;display: flex;",
                "margin-top: 178px;margin-left: 390px;width: 36px;height: 39px;display: flex;",
                "margin-top: 178px;margin-left: 431px;width: 36px;height: 39px;display: flex;",
                "margin-top: 178px;margin-left: 472px;width: 36px;height: 39px;display: flex;",
                "margin-top: 178px;margin-left: 512px;width: 68px;height: 39px;display: flex;",
                "margin-top: 183px;margin-left: 590px;width: 36px;height: 39px;display: flex;",
                "margin-top: 178px;margin-left: 636px;width: 36px;height: 39px;display: flex;",
                "margin-top: 178px;margin-left: 677px;width: 36px;height: 39px;",
                "margin-top: 178px;margin-left: 717px;width: 36px;height: 39px;",
                "margin-top: 178px;margin-left: 758px;width: 36px;height: 79px;",
                "margin-top: 218px;margin-left: 12px;width: 44px;height: 39px;",
                "margin-top: 218px;margin-left: 64px;width: 44px;height: 39px;display: flex;",
                "margin-top: 218px;margin-left: 114px;width: 44px;height: 39px;display: flex;",
                "margin-top: 218px;margin-left: 165px;width: 249px;height: 39px;display: flex;border-radius: 5px;",
                "margin-top: 221px;margin-left: 421px;width: 35px;height: 36px;display: flex;",
                "margin-top: 221px;margin-left: 462px;width: 35px;height: 36px;display: flex;",
                "margin-top: 221px;margin-left: 503px;width: 35px;height: 36px;",
                "margin-top: 225px;margin-left: 550px;width: 35px;height: 36px;display: flex;",
                "margin-top: 225px;margin-left: 590px;width: 35px;height: 36px;display: flex;",
                "margin-top: 225px;margin-left: 632px;width: 35px;height: 36px;display: flex;",
                "margin-top: 220px;margin-left: 677px;width: 35px;height: 36px;",
                "margin-top: 220px;margin-left: 718px;width: 35px;height: 36px;",
            ]
            ,
            hasValueStyle:["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]
            ,
            keyMapping: ["Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "PrintScreen", "Delete", "Insert", "PageUp", "PageDown", "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "NumLock", "NumpadDivide", "NumpadMultiply", "NumpadSubtract", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Numpad7", "Numpad8", "Numpad9", "NumpadAdd", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "Numpad4", "Numpad5", "Numpad6", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight", "ArrowUp", "Numpad1", "Numpad2", "Numpad3", "NumpadEnter", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "Custom_Fnkey","ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight", "Numpad0", "NumpadDecimal"],
            cssText: 'position: absolute;height: 100%;width: 100%;pointer-events: none;',
            BGImage: 'url(./image/Share/KB1.png)',
            BGImageKeyerEffects: 'url(./image/Share/KB1KeyerEffects.png)',
            centerBlockPoint:62,
            qigong_Step1_Range: [0, 18, 36, 69, 86, 98],
            qigong_Step2_Range: [44, 45, 63, 78, 77, 61],
            KeyTableArray: [[0, 17], [18, 35], [36, 53], [54, 69], [70, 86], [87, 98]],
            imageMaxWidth: 765,
            imageMaxHeight: 308,
        },


    }

    constructor() 
    { 

    }

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
        var targetUI = target.getElementsByClassName('RGBKeyBoardUITransparent') as HTMLCollectionOf<HTMLElement>;
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
            //alert('findKeyMappingIndex=lost' + code);
            console.log('findKeyMappingIndex=lostcode',code);
        }
        return targetIndex;
    }
    applyStyles(target) {
        //this.getTargetKeyBoradUIcss('RGBKeyBoardUITransparent')
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
