

declare var System
// let AllFunctionMapping =  System._nodeRequire('./backend/others/SupportData').AllFunctionMapping
// let Shortcuts_WindowsMapping =  System._nodeRequire('./backend/others/SupportData').Shortcuts_WindowsMapping
// let KeyMapping = System._nodeRequire('./backend/others/SupportData').KeyMapping
import { KeyAssignManager } from '../keyboard/KeyAssignManager'
import { KeyBoardManager, KeyBoardStyle } from '../keyboard/KeyBoardManager'
import { M_Light_CS } from '../keyboard/APModeModule'
import { MatDialogRef } from '@angular/material'

import {
    Component,
    OnInit,
    Output,
    Input,
    EventEmitter,
    SimpleChange,
    OnChanges,
    ViewChild,
    ElementRef,
    ChangeDetectorRef,
} from '@angular/core'
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css', './TTTTTTT.scss', './KeyBoardStyle.css']
})


export class AppComponent implements OnInit {
    //dbService = electron_Instance.getGlobal('AppProtocol').deviceService.nedbObj
    //dbService = dbObj;
    PerKeyArea: any
    SideLightAreaArr: any = [false, false, false, false, false, false, false, false, false, false]
    SideLightAreaFlag: any = false
    BrightnessFlag: any
    LightingGroupFunction: number = 1
    subscription: any
    RightContentClickEvent: any
    //KeyboardKeyData: any = KeyMapping
    //Shortcuts_WindowsMapping: any = Shortcuts_WindowsMapping
    lightingflag: boolean = true
    keybindingflag: boolean = false
    performanceflag: boolean = false
    RateValue: number = 60
    OpacityValue: number = 60
    WiredBrightnessValue: number = 60
    WirelessBrightnessValue: number = 60
    SepatateCheckValue: any = false
    startcolor: any
    ColorData: any = []
    ColorSelect: any
    Color: any = 'FF00FF'
    ColorR: any
    ColorG: any
    ColorB: any
    ColorMiniNum: number = 1
    DeleteFlag: boolean = false
    AddFlag: boolean = false
    DeleteColorIconFlag: boolean = true
    SyncCrossKeyboardCheckValue: boolean = true
    FlashSideLightEnable: boolean = true
    sidelightBreathingEnable: boolean = true
    KeyBoardStyle = new KeyBoardStyle()
    M_Light_CS = new M_Light_CS(83)
    KeyBoardManager = new KeyBoardManager(83)
    KeyAssignManager = new KeyAssignManager();

    //Profile
    ProfileData: any = []
    profileSelect: any
    //Lighting Effect
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
    lightingeffectSelect: any

    lighting_PREKEY_Effect: any = [
        { name: 'Color Layout Editor', value: 0, translate: 'Color Layout Editor' },
    ]
    lighting_PREKEY_SelectEffect: any
    //polling rate
    pollingrateSelect: any
    PollingRateData: any = [
        { name: '125Hz', value: 125, translate: '125Hz' },
        { name: '250Hz', value: 250, translate: '250Hz' },
        { name: '500Hz', value: 500, translate: '500Hz' },
        { name: '1000Hz', value: 1000, translate: '1000Hz' },
    ]

    buttonNum: number = 0
    currentDevice: any

    constructor(
        //private macroService: MacroService,
        private cdr: ChangeDetectorRef,
    ) {

        console.log('KeyboardComponent__ciphertext', KeyBoardManager)
    }
    setkeyUIColor() {

    }
    ngOnInit() {

    }

    ngOnDestroy() {
        console.log('Keyboardpage Destory')
        //this.ModelPreview.ClosePreview();
    }
    ngDoCheck() { }

    ngAfterViewChecked(): void {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
    }
    ngAfterViewInit(): void {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        //this.macroService.setMacroPageEnter();
        this.LightPageRegisterEvent_Box_selection();
        this.DeveloperControl();
    }
    switchChangAllkey() {

    }
    LightPageRegisterEvent_Box_selection() {
        //var RGBCBSList = this.elementRef.nativeElement.querySelectorAll('.RGBColorBlockStyle')
        //console.log('RGBCBSList', RGBCBSList)
        this.M_Light_CS.BSApage1.setSelectContainer('EventCanBoxSelectRange')
        var RGBCBSList = document.getElementsByClassName('RGBColorBlockStyle') as HTMLCollectionOf<HTMLElement>;
        this.KeyBoardStyle.applyStyles(RGBCBSList);
        console.log(RGBCBSList.length);

        // RGBCBSList
        // var coordinates = document.getElementsByClassName('RGBColorBlockStyle') as HTMLCollectionOf<HTMLElement>;
        // var element = coordinates[0] as HTMLElement;

        // this.BoxSelectFnArrP1[0] = (e: MouseEvent) => {
        //     this.M_Light_CS.BSApage1.mousedown(e)
        // }
        // this.BoxSelectFnArrP1[1] = (e: MouseEvent) => {
        //     this.M_Light_CS.BSApage1.mousemove(e)
        // }
        // this.BoxSelectFnArrP1[2] = (e: MouseEvent) => {
        //     if (this.M_Light_CS.BSApage1.mouseup(e) == 'Finish') {
        //         this.M_Light_CS.setModeFrameRange()
        //         //this.setColorDataToServer('setModeFrameRange')
        //     }
        // }
        // this.M_Light_CS.BSApage1.selectContainer.addEventListener('mousedown', this.BoxSelectFnArrP1[0])
        // this.M_Light_CS.BSApage1.selectContainer.addEventListener('mousemove', this.BoxSelectFnArrP1[1])
        // this.M_Light_CS.BSApage1.selectContainer.addEventListener('mouseup', this.BoxSelectFnArrP1[2])

        for (let index = 0; index < RGBCBSList.length; index++) {
            let element = RGBCBSList[index];
            element.setAttribute('data-index', String(index))
            //element.setAttribute('coordinate',String(element.style.width));
            element.setAttribute('coordinate', String(element));
            var obj = {
                "clientHeight": element.clientHeight,
                "clientWidth": element.clientWidth,
                "offsetLeft": element.offsetLeft,
                "offsetTop": element.offsetTop,
                "scroll": element.scroll,
                "top_Left": [element.offsetLeft, element.offsetTop],
                "top_Right": [element.offsetLeft + element.clientWidth, element.offsetTop],
                "bottom_Left": [element.offsetLeft, element.offsetTop + element.clientHeight],
                "bottom_Right": [element.offsetLeft + element.clientWidth, element.offsetTop + element.clientHeight],
                "center_Point": [element.offsetLeft + (element.clientWidth/2), element.offsetTop + (element.clientHeight/2)],
            }
            this.M_Light_CS.AllBlockColor[index].coordinateData = obj;
            //console.log(String(index), obj);  

        }
        this.M_Light_CS.imageMaxWidth=765;
        this.M_Light_CS.imageMaxHeight=308;
    


    }
    GMMK_imgFlag=false;
    GMMK_imgVisible(){       
        let GMMK_img = document.getElementById('GMMK_img')
        //let RateContent = document.getElementById('RateContent')
        //let ColorContent = document.getElementById('ColorContent')
        this.GMMK_imgFlag=!this.GMMK_imgFlag;
        if(this.GMMK_imgFlag){
            GMMK_img.style.display = 'flex'
        }
        else{
            GMMK_img.style.display = 'none'
        }
        //RateContent.style.display = 'flex'
        //ColorContent.style.display = 'flex'
    }


    PERKEY_BrightnessSlider_Background(){
        //return '-webkit-linear-gradient(left ,#FDBA3B 0%,#FDBA3B ' +50 +'%,#313131 ' +50 +'%, #313131 100%)';

        return '-webkit-linear-gradient(left ,#FDBA3B 0%,#FDBA3B 50%,#313131 50%, #313131 100%)';
    }
   


    DeveloperControl() {
        //this.M_Light_CS.mode_gloriousMode();
        //this.M_Light_CS.mode_Pingpong();
        //this.M_Light_CS.mode_SinGraphics();
        //this.M_Light_CS.mode_Rain_Back_And_forth();
        //this.M_Light_CS.mode_Matrix2();
        //this.M_Light_CS.mode_Matrix3_Raindow();
        //this.M_Light_CS.mode_Matrix3_SingleColor();
        //this.M_Light_CS.mode_Matrix2();
        //this.M_Light_CS.mode_DigitTimes();
        //this.M_Light_CS.mode_Pingpong();
        //this.M_Light_CS.mode_PassWithoutTrace();
        //this.M_Light_CS.mode_Rainbow();
        //this.M_Light_CS.mode_RippleGraff();
        this.M_Light_CS.mode_Breathing();
        document.addEventListener('keydown', (event) => {
            console.log("KeyShortcut_event.keyCode", event.keyCode);
            if (event.keyCode == 107) {//+

            }
            if (event.keyCode == 109) {//-
             
            }
            if (event.keyCode == 84) {//T

            }
            if (event.keyCode == 85) {//U

            }
            console.log("KeyShortcut_event.keyCode", event.keyCode);
            if (event.keyCode == 13) {//Enter

            }
            if (event.keyCode == 83) {//S this.gradient.onPlay=false


            }
            if (event.keyCode == 97) {//1 this.gradient.onPlay=false

            }
            if (event.keyCode == 98) {//2 this.gradient.onPlay=false

            }
            if (event.keyCode == 99) {//3

            }
            if (event.keyCode == 100) {//4

            }
            if (event.keyCode == 49) {//Digit1

                ;
            }
            if (event.keyCode == 50) {//Digit2

                ;
            }
            if (event.keyCode == 51) {//Digit3

                ;
            }
            if (event.keyCode == 52) {//Digit4

                ;
            }
            if (event.keyCode == 53) {//Digit5

                ;
            }
            if (event.keyCode == 54) {//Digit6

                ;
            }
            if (event.keyCode == 55) {//Digit7

                ;
            }
            if (event.keyCode == 56) {//Digit8

                ;
            }
            if (event.keyCode == 57) {//Digit9

                ;
            }
            if (event.keyCode == 58) {//Digit10

                ;
            }
            if (event.keyCode == 59) {//Digit11

                ;
            }
        });
    }
}


