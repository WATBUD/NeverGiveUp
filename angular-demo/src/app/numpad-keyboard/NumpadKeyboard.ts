import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  ColorModule, MacroScriptContent, MacroManager, Wave, APModeModule, LedChainFramesManager,
  AssociateManager, EffectCenter, KeyShortcut, AlertDevice, EventManager, ImgPathList
  , count_boolean, CreateFakeArray, SharesFunction, ProgressBar
} from '../../Module/TSImportManager';

import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { DeviceService } from './DeviceService';
import { KeyBoardManager } from './KeyBoardManager';
import { MacroService } from './MacroService';
import { KeyBoardStyle } from './KeyBoardStyle';
import { Built_ineffect, GloriousMode } from './Built_ineffect';
import { i18nManager } from './i18n';
import { ColorOutput } from '../ngcolor/color-output';
import { GetAppService } from './GetAppService';
import { LayoutManager } from './LayoutManager';
import { M_Light_Numpad } from './M_Light_Numpad';
import { KeyAssignManager } from './KeyAssignManager';
import { M_SoundVolume } from './M_SoundVolume';
declare var require: any;
import { KeyMapping,AllFunctionMapping,Shortcuts_WindowsMapping } from './SupportData'
@Component({
  selector: 'app-NumpadKeyboard',
  templateUrl: './NumpadKeyboard.html',
  styleUrls: ['./NumpadKeyboard.css', './KeyBoardStyle.scss', './Keybinding.scss', 'LightIngStyle.scss','./DropListStyle.scss']
})
export class NumpadKeyboardComponent implements OnInit {
  KeyBoardStyle = new KeyBoardStyle();
  KeyAssignManager = new KeyAssignManager();
  M_Light_PRESETS = new M_Light_Numpad(83);
  M_Light_PERKEY = new M_Light_Numpad(83);
  M_Light_Keybinding = new M_Light_Numpad(83);
  M_SoundVolume= new M_SoundVolume();
  Built_ineffect = new Built_ineffect();
  KeyBoardManager = new KeyBoardManager(83);
  LayoutManager = LayoutManager.getInstance();
  deviceService;
  QuestionMarkStatus = ""
  PerKeyArea = "";
  PreviewModeFlag = false;
  PerKey_NUMBERS_Visible = true;
  BrightnessFlag: any
  selectionStatus = true;
  startcolor: any;
  ColorModule = new ColorModule();
  colordata: ColorOutput;
  getAppService = new GetAppService();
  PERKEY_lightData=this.default_LightData();
  lightingPage = 'PRESETS';
  macroService = new MacroService();
  KeyBoardNotClickedYet;
  keybindingflag = true;
  lightingflag = false;
  performanceflag = false;

  KeyboardKeyData: any = KeyMapping;
  Shortcuts_WindowsMapping: any = Shortcuts_WindowsMapping;
  lighting_PERKEY_Effect: any = [
    { name: 'Color Layout Editor', value: 0, translate: 'Color Layout Editor' },
  ]
  lighting_PERKEY_SelectEffect: any
  pollingrateSelect: any
  PollingRateData: any = [
    { name: '125Hz', value: 125, translate: '125Hz' },
    { name: '250Hz', value: 250, translate: '250Hz' },
    { name: '500Hz', value: 500, translate: '500Hz' },
    { name: '1000Hz', value: 1000, translate: '1000Hz' },
  ]
  inputLatencySelect: any;
  inputLatencyData: any = [
    { name: '2ms', value: 2, translate: '2ms' },
    { name: '8ms', value: 8, translate: '8ms' },
    { name: '16ms', value: 16, translate: '16ms' },
  ]
  i18nManager = i18nManager.getInstance();
  constructor(private http: Http, private cdr: ChangeDetectorRef) {
    this.deviceService = new DeviceService(this.http);
    console.log('NumpadKeyboardComponent', AllFunctionMapping);

  }

  ngOnInit() {

  }

  ngAfterViewInit() {

    var T_length = this.KeyBoardStyle.getTarget().keyMapping.length;
    this.M_Light_PRESETS = new M_Light_Numpad(T_length);
    this.M_Light_PERKEY = new M_Light_Numpad(T_length)
    this.KeyBoardManager = new KeyBoardManager(T_length);
    var deviceObj = {
      SN: "0x320F0x504B",
      devicename: "GMMK NUMPAD"
    }
    this.LayoutManager.setLayoutDevice(T_length, deviceObj);
    //this.LayoutManager = new LayoutManager(T_length, deviceObj.devicename);
    var temp_data = this.KeyBoardStyle.getTarget();
    console.log('%c KeyBoardStyle.getTarget', 'color:rgb(255,75,255,1)', temp_data);
    this.M_Light_PRESETS.qigong_Step1_Range = temp_data.qigong_Step1_Range;
    this.M_Light_PRESETS.qigong_Step2_Range = temp_data.qigong_Step2_Range;
    this.M_Light_PRESETS.centerBlockPoint = temp_data.centerBlockPoint;
    this.M_Light_PRESETS.setKeyTableArray(temp_data.KeyTableArray);
    this.M_Light_PRESETS.imageMaxWidth = temp_data.imageMaxWidth;
    this.M_Light_PRESETS.imageMaxHeight = temp_data.imageMaxHeight;
    this.M_Light_PRESETS.fakeCoordinates = temp_data.fakeCoordinates;
    this.M_Light_PRESETS.snowing_Special1 = temp_data.snowing_Special1;
    this.M_Light_PRESETS.qigong_Special1_Step = temp_data.qigong_Special1_Step;

    this.M_Light_PERKEY.imageMaxWidth = temp_data.imageMaxWidth;
    this.M_Light_PERKEY.imageMaxHeight = temp_data.imageMaxHeight;
    this.M_Light_PERKEY.mode_BreatheSeparatelyBlack();
    this.M_Light_Keybinding.imageMaxWidth = temp_data.imageMaxWidth;
    this.M_Light_Keybinding.imageMaxHeight = temp_data.imageMaxHeight;
    this.M_Light_Keybinding.mode_BreatheSeparatelyBlack();

    this.KeyBoardManager.setAllProfileFieldData('light_PRESETS_Data', new GloriousMode());
    this.PERKEY_lightData = this.default_LightData();
    this.LayoutManager.defaultData = this.default_LightData();
    this.keyBindPageRegisterEvent();
    this.lightPageRegister();
    document.addEventListener("keyup", (evemt2) => {
      var obj = {
        BlockIndex: 24,
      }
      var T_1 = this.KeyBoardStyle.getTarget().keyMapping;
      let index = T_1.findIndex((x) => x == evemt2.code);
      //this.KeyBoardStyle.getTarget().keyMapping;
      console.log('%c T_1', 'color:rgb(255,77,255)', T_1, index, evemt2);

      if (index != -1) {
        obj.BlockIndex = index;
      }

      this.setPassiveEffect(obj);

      //this.KeyBoardStyle.sss();
      //this.startcolor="FF0000";

    });
  }
  /**
* process default_LightData Event
*/
  default_LightData(defaultcolor = [255, 0, 0, 1]) {
    var T = {
      speed: 50,
      brightness: 50,
      clearStatus: false,
      colorHex: '#0000',
      colorPickerValue: defaultcolor,
      breathing: false,
      sideLightSync: false,
      sideLightColor: [0, 0, 0, 0],
      brightness_Enable: false,
      rate_Enable: false,
      color_Enable: false,
    }
    return T;
  }





  ngAfterViewChecked() {
    // let show = this.isShowExpand();
    // if (show != this.show) { // check if it change, tell CD update view
    //   this.show = show;
    this.cdr.detectChanges();
    //}
  }
  keyBindPageRegisterEvent() {
    var KeyAssignUIStyleList = document.getElementsByClassName('KeyAssignUIStyle')
    this.KeyBoardStyle.applyStyles(KeyAssignUIStyleList)
    this.KeyBoardManager.setALLDefaultKeyArray(this.KeyBoardStyle.getTargetDefaultKeyArray());
    //console.log("KeyAssignUIStyleList",KeyAssignUIStyleList);
    for (let index = 0; index < KeyAssignUIStyleList.length; index++) {
      let element = KeyAssignUIStyleList[index] as HTMLElement;
      element.removeEventListener('mousedown', undefined);
      if (this.keybindingflag == false) {
        element.style.display = 'none';
      }
      var T = index.toString()
      element.setAttribute('data-index', T)
      if (this.KeyBoardStyle.getTargetDefaultKeyArray()[index] == 'Side Light') {
        console.log('%c this.KeyBoardStyle.getTargetDefaultKeyArray()[index]', 'color:rgb(0,0,255)', this.KeyBoardStyle.getTargetDefaultKeyArray()[index]);
        continue;
      }
      element.addEventListener('mousedown', (e: MouseEvent) => {
        this.KeyBoardManager.notClickedYet = false;
        //var keyAssignPrompt_UI = document.getElementById("keyAssignPrompt") as HTMLElement;
        var keyAssignPromptline_UI = document.getElementById("keyAssignPromptline") as HTMLElement;
        var keyAssignTarget = e.target as HTMLElement;
        var Prompt_offset = ((keyAssignTarget.offsetTop + (keyAssignTarget.clientHeight / 2))) + 2;
        //keyAssignPrompt_UI.style.marginTop = Prompt_offset + 'px'
        keyAssignPromptline_UI.style.marginTop = Prompt_offset + 'px'
        keyAssignPromptline_UI.style.marginLeft = -50 + 'px'
        keyAssignPromptline_UI.style.width = (keyAssignTarget.offsetLeft) + 40 + 'px'
        this.KeyBoardManager.setAllProfileFieldData('recordAssignBtnIndex', index);
        var target = this.KeyBoardManager.getTarget().getNowModeTargetMatrixKey();
        this.KeyAssignManager.updateVariable(target);
        this.M_SoundVolume.bindTarget=target.d_SoundVolume.bindTarget;
        // if (target.recordBindCodeType == "MacroFunction") {
        //     this.macroService.setMacroTypeValue(target.macro_RepeatType);
        //     this.macroService.setMacroSelectValue(target.macro_Data.value);
        // }
        console.log("KeyAssignUIStyleList__index", index, target);
      })
    }
  }
  /**
 * process LightingGroup Event
*/
  SetLightingGroup(pageName) {
    this.lightingPage = pageName;
    this.setRGBcolor();//by SetLightingGroup
  }
  /**
   * switchSelectionStatust
   * true:PERKEY Edit 
   * false:PERKEY Erase
  */
  switchSelectionStatus(status = false) {
    if (!status) {
    }
    this.selectionStatus = status;
  }


  /**
* register sliderChange Event
*/
  sliderChange() {
    this.PRESETS_SelectedChange();//from sliderChange
  }
  /**
   * process lightPage Event
  */
  lightPageRegister() {
    //var RGBCBSList = this.elementRef.nativeElement.querySelectorAll('.RGBColorBlockStyle')
    //console.log('RGBCBSList', RGBCBSList)
    var RGBList = document.getElementsByClassName('RGBColorBlockStyle') as HTMLCollectionOf<HTMLElement>;
    this.KeyBoardStyle.applyStyles(RGBList);
    var RGBList2 = document.getElementsByClassName('PERKEYBlockStyle') as HTMLCollectionOf<HTMLElement>;
    this.KeyBoardStyle.applyStyles(RGBList2);
    var RGBList3 = document.getElementsByClassName('SoundVolumeBlockStyle') as HTMLCollectionOf<HTMLElement>;
    this.KeyBoardStyle.applyStyles(RGBList3);
    for (let index = 0; index < RGBList2.length; index++) {
      let element = RGBList2[index];
      element.removeEventListener('mousedown', undefined);
      if (this.KeyBoardStyle.getTargetDefaultKeyArray()[index] == 'Side Light') {
        console.log('%c this.KeyBoardStyle.getTargetDefaultKeyArray()[index]', 'color:rgb(0,0,255)', this.KeyBoardStyle.getTargetDefaultKeyArray()[index]);
        continue;
      }
      element.addEventListener('mousedown', (e: MouseEvent) => {

        if (this.lightingPage == 'PERKEY') {
          this.M_Light_PERKEY.setPerkey(index, this.selectionStatus, this.PERKEY_lightData.colorPickerValue, this.PERKEY_lightData.breathing);
          this.PERKEY_lightData.sideLightSync = false;
          this.PerKeyArea = element.getAttribute("keymapping");
          this.M_Light_PERKEY.settingPerkeyName = this.PerKeyArea;
          console.log('lightPageRegister_element', e);
        }
      })
    }
    this.M_Light_PRESETS.setCoordinateData(RGBList);
    this.M_Light_PERKEY.setCoordinateData(RGBList2);
    this.M_Light_Keybinding.setCoordinateData(RGBList3);

    //   for (let index = 0; index < RGBList.length; index++) {
    //     let element = RGBList[index];
    //     //element.setAttribute('data-index', String(index));
    //     //element.setAttribute('coordinate', String(element));     
    //     var obj = {
    //         "clientHeight": element.clientHeight,
    //         "clientWidth": element.clientWidth,
    //         "offsetLeft": element.offsetLeft,
    //         "offsetTop": element.offsetTop,
    //         "scroll": element.scroll,
    //         "top_Left": [element.offsetLeft, element.offsetTop],
    //         "top_Right": [element.offsetLeft + element.clientWidth, element.offsetTop],
    //         "bottom_Left": [element.offsetLeft, element.offsetTop + element.clientHeight],
    //         "bottom_Right": [element.offsetLeft + element.clientWidth, element.offsetTop + element.clientHeight],
    //         "center_Point": [element.offsetLeft + (element.clientWidth/2), element.offsetTop + (element.clientHeight/2)],
    //     }

    //     this.M_Light_PRESETS.AllBlockColor[index].center_Point = this.KeyBoardStyle.getTarget().coordinates[index];
    // }
    //this.M_Light_PRESETS.setCoordinateData(this.KeyBoardStyle.getTarget());
    //this.M_Light_PERKEY.setCoordinateData(this.KeyBoardStyle.getTarget());
  }


  /**
   * move color picker
   * @param result
   */
  colorPickerChange(result: ColorOutput) {
    console.log('colorPickerChange');
    var RGB_Arr = [result.rgb.red, result.rgb.green, result.rgb.blue, 1];
    if (this.lightingPage == 'PRESETS') {
      this.Built_ineffect.Built_inSelected.colorPickerValue = RGB_Arr;
      this.setRGBcolor();//by colorPickerChange;
    }
    if (this.lightingPage == 'PERKEY') {
      var target = this.PERKEY_lightData;
      target.colorPickerValue = JSON.parse(JSON.stringify(RGB_Arr));
      target.colorHex = this.M_Light_PERKEY.rgbToHex(target[0], target[1], target[2]);

      if (this.PerKeyArea == "PerKey_SIDELIGHT" || this.PerKeyArea == "PerKey_ALL") {
        this.PERKEY_lightData.sideLightColor = JSON.parse(JSON.stringify(RGB_Arr));
      }
      this.PerKeyAreaCick(this.PerKeyArea);
    }
    if (this.keybindingflag == true) {
      let target = this.M_SoundVolume.lightData;
      target.colorPickerValue = JSON.parse(JSON.stringify(RGB_Arr));
      target.colorHex = this.M_Light_Keybinding.rgbToHex(target[0], target[1], target[2]);
      this.KeyBoardManager.getTarget().getNowModeTargetMatrixKey().d_SoundVolume.lightData.colorPickerValue = JSON.parse(JSON.stringify(RGB_Arr));
      this.SoundVolume_AreaCick(this.KeyBoardManager.getTarget().recordAssignBtnIndex);
    }
  }

  /**
   * process PRESETS_BrightnessSlider Event
  */
  lightSliderMove(TargetName) {
    var showValue;
    if (TargetName == 'PRESETS_BrightnessSliderWired') {
      showValue = this.Built_ineffect.Built_inSelected.brightness;
    }
    else if (TargetName == 'PRESETS_BrightnessSliderWireless') {
      showValue = this.Built_ineffect.Built_inSelected.wirelessBrightness;
    }
    else if (TargetName == 'PRESETS_RateSlider') {
      showValue = this.Built_ineffect.Built_inSelected.speed;
    }
    //console.log('lightSliderMove',TargetName,showValue);
    return '-webkit-linear-gradient(left ,#FDBA3B 0%,#FDBA3B ' + showValue + '%,#313131 ' + showValue + '%, #313131 100%)'
  }

  /**
   * process Built_inSelectedChange Event
  */
  Built_inSelectedChange() {
    console.log('Built_inSelectedChange', this.Built_ineffect.Built_inSelected);
    this.setRGBcolor();//by Built_inSelectedChange;
  }
    /**
    * process PerKeyBreathingChange Event
    */
   PerKeyBreathingChange() {

  }
  /**
    * process soundVolume_BreathingChange Event
    */
   soundVolume_BreathingChange() {
    this.SoundVolume_AreaCick(this.KeyBoardManager.getTarget().recordAssignBtnIndex);
  }


  /**
   * RGB input
   */
  setRGBcolor() {
    console.log('setRGBcolor', this.lightingflag, this.lightingPage);
    if (this.lightingflag) {
      var target;
      if (this.lightingPage == 'PRESETS') {
        target = this.Built_ineffect.Built_inSelected;
      }
      if (this.lightingPage == 'PERKEY') {
        target = this.PERKEY_lightData;
      }
      // if (this.lightingPage == 'PERKEY') {
      //   target = this.per;
      // }
      var rgbArr = target.colorPickerValue;
      console.log('setRGBcolor_Target', JSON.parse(JSON.stringify(target)));
      for (let index = 0; index < 3; index++) {

        if (isNaN(parseInt(rgbArr[index])) == true) {
          console.log('setRGBcolor_isNaN_0');
          rgbArr[index] = 0;
        }
        else {
          rgbArr[index] = parseInt(rgbArr[index]);
        }
      }
      if (rgbArr[0] > 255) rgbArr[0] = 255;
      if (rgbArr[1] > 255) rgbArr[1] = 255;
      if (rgbArr[2] > 255) rgbArr[2] = 255;
      if (rgbArr[0] < 0) rgbArr[0] = 0;
      if (rgbArr[1] < 0) rgbArr[1] = 0;
      if (rgbArr[2] < 0) rgbArr[2] = 0;
      console.log('setRGBcolor', rgbArr);
      let ColortObj = this.ColorModule.rgbToHex(rgbArr[0], rgbArr[1], rgbArr[2]);
      target.colorHex = ColortObj,
        this.startcolor = 'FFFFFF';
      this.cdr.detectChanges();
      this.startcolor = ColortObj.split('#')[1]//#0000=>00000
      console.log('ColortObj', ColortObj, this.startcolor);
      if (this.lightingPage == 'PERKEY') {
        this.PerKeyAreaCick(this.PerKeyArea);
      }
      if (this.lightingPage == 'PRESETS') {
        this.PRESETS_SelectedChange();//by setRGBcolor();
      }
      this.cdr.detectChanges();

    }
  }
  /**
   * Select Lighting Effect
   */
  PRESETS_SelectedChange() {
    this.M_Light_PRESETS.setAllBlockColor([0, 0, 0, 1]);
    this.PreviewModeFlag = false;
    this.setNowLightMode();
  }
  /**
   * process PerKeyAreaCick Event
   * @param GroupName string:PerKeyAreaGroupName
  */
  PerKeyAreaCick(GroupName) {
    this.PerKeyArea = GroupName;
    var searchArr = [];
    this.PERKEY_lightData.sideLightSync = false;
    switch (this.PerKeyArea) {
      case 'PerKey_WASD':
        searchArr = ["KeyW", "KeyA", "KeyS", "KeyD"];
        this.M_Light_PERKEY.settingPerkeyName = 'WASD';
        break;
      case 'PerKey_NUMBERS':
        searchArr = ["Numpad0","Numpad1","Numpad2","Numpad3","Numpad4","Numpad5","Numpad6","Numpad7","Numpad8","Numpad9","NumpadDecimal"]
        this.M_Light_PERKEY.settingPerkeyName = 'NUMBERS';
        break;
      case 'PerKey_FKEYS':
        searchArr = ["F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"];
        this.M_Light_PERKEY.settingPerkeyName = 'FKEYS';
        break;
      case 'PerKey_MODIFIERS':
        searchArr = ["NumLock","NumpadDivide","NumpadMultiply","NumpadSubtract","NumpadAdd","NumpadEnter"];
        this.M_Light_PERKEY.settingPerkeyName = 'MODIFIERS';
        break;
      case 'PerKey_ARROWKEYS':
        searchArr = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"]
        this.M_Light_PERKEY.settingPerkeyName = 'ARROWKEYS';
        break;
      case 'PerKey_SIDELIGHT':
        searchArr = ["Side Light"]
        this.M_Light_PERKEY.settingPerkeyName = 'SIDE LIGHT';
        break;
      case 'PerKey_ALL':
        this.M_Light_PERKEY.settingPerkeyName = 'ALL';
        break;
      case '':
        break;
      default:
        searchArr.push(this.PerKeyArea);
        break;
    }
    var setArr = [];
    for (let index = 0; index < searchArr.length; index++) {
      var index2 = this.KeyBoardStyle.findKeyMappingIndex(searchArr[index])
      if (index2 != -1) {
        setArr.push(index2);
      }
    }
    if(this.PerKeyArea=="PerKey_SIDELIGHT"){
      setArr=[0,7,8,16,21,22,29,
      6,14,15,20,27,28,32];

    }
    console.log('%c PerKeyAreaCick_setArr', 'background: blue; color: red', setArr, this.PerKeyArea);
    var flag = this.PerKeyArea;
    var clearStatus = this.selectionStatus;
    var target = this.PERKEY_lightData;
    if (clearStatus) {
      if (flag == "PerKey_ALL" || flag == "PerKey_SIDELIGHT") {
        target.sideLightSync = true;
        target.sideLightColor = JSON.parse(JSON.stringify(target.colorPickerValue));
      }
      var obj = {
        groupArray: setArr,
        isAll: flag == "PerKey_ALL",
        clearStatus: clearStatus,
        colorPickerValue: target.colorPickerValue,
        breathing: target.breathing
      }
      this.M_Light_PERKEY.setGroupArrayColor(obj);
    }
    else {
      if (flag == "PerKey_ALL" || flag == "PerKey_SIDELIGHT") {
        target.sideLightSync = false;
        target.sideLightColor = [0, 0, 0, 0];
      }
      var obj2 = {
        groupArray: setArr,
        isAll: flag == "PerKey_ALL",
        clearStatus: clearStatus,
        colorPickerValue: [0, 0, 0, 0],
        breathing: target.breathing
      }
      this.M_Light_PERKEY.setGroupArrayColor(obj2);
    }
  }
  /**
   * process PerKeyAreaCick Event
   * @param GroupName string:PerKeyAreaGroupName
  */
 SoundVolume_AreaCick(index) {
  if(this.KeyBoardManager.notClickedYet==true){
    return;
  }
  console.log('%c SoundVolume_AreaCick', 'background: blue; color: red', index);
  var setArr=[];
  setArr.push(index);
 // var flag = this.PerKeyArea;
  var target = this.M_SoundVolume.lightData;
    // if (flag == "PerKey_ALL" || flag == "PerKey_SIDELIGHT") {
    //   target.sideLightSync = true;
    //   target.sideLightColor = JSON.parse(JSON.stringify(target.colorPickerValue));
    // }
    var singleColor=[];
    if (target.clearStatus==false) {
      singleColor=[0,0,0,0];
    }
    else{
      singleColor=target.colorPickerValue;
    }
    var obj = {
      groupArray: setArr,
      isAll: false,
      clearStatus: target.clearStatus,
      colorPickerValue: singleColor,
      breathing: target.breathing
    }
    
    this.M_Light_Keybinding.setGroupArrayColor(obj);

}

  /**
       * process sensitivity_Background Event
      */
  sensitivity_Background() {
    var value = this.KeyAssignManager.sensitivity;
    return '-webkit-linear-gradient(left ,#FDBA3B 0%,#FDBA3B ' + value + '%,#313131 ' + value + '%, #313131 100%)';
  }

  /**
   * process NowLightMode Event
  */
  setNowLightMode() {
    var T_CS = this.M_Light_PRESETS;
    var target = JSON.parse(JSON.stringify(this.Built_ineffect.Built_inSelected));
    var inputColor = [target.colorPickerValue];
    if (inputColor == undefined) {
      console.log('%c setNowLightMode_undefined', 'color:rgb(255,77,255)', T_CS.lightData);
      return;
    }
    this.M_Light_PRESETS.lightData = target;
    T_CS.onSetModeRefresh();
    switch (target.PointEffectName) {
      case 'GloriousMode':
        //T_CS.mode_ConicRipple(inputColor, true, this.M_Light_PRESETS.centerBlockPoint);\
        T_CS.mode_Fake_ConicRipple(inputColor, true);
        break;
      case 'SpiralingWave':
        T_CS.mode_Spiral(inputColor, target.Multicolor, 0);
        break;
      case 'AcidMode':
        T_CS.mode_AcidMode(inputColor);
        break;
      case 'Breathing':
        if (target.Multicolor) {
          T_CS.mode_BreathingMulticolor(inputColor, true);
        }
        else {
          T_CS.mode_CycleBreath(inputColor, false);
        }
        break;
      case 'NormallyOn':
        if (target.Multicolor) {
          T_CS.mode_NormallyOnMulticolor(inputColor);
        }
        else {
          T_CS.mode_NormallyOn(inputColor);
        }
        break;
      case 'Matrix2':
        T_CS.mode_Starlight(inputColor, target.Multicolor, 1);
        //T_CS.mode_Matrix2(inputColor, target.Multicolorzzzzcz,0.5);
        break;
      case 'Matrix3':
        T_CS.mode_Matrix3(inputColor, target.Multicolor, 1);
        break;
      case 'Rainbow':
        T_CS.mode_Rainbow([], true, 80, 150);
        break;
      case 'HeartbeatSensor':
        if (target.Multicolor) {
          T_CS.mode_HeartbeatSensor([[255, 0, 0, 1], [0, 255, 0, 1], [0, 0, 255, 1]]);
        }
        else {
          T_CS.mode_HeartbeatSensor(inputColor);
        }
        break;
      case 'DigitTimes':
        if (target.Multicolor) {
          T_CS.mode_snowing_Special1([[255, 0, 0, 1], [0, 255, 0, 1], [0, 0, 255, 1]]);
          //T_CS.mode_DigitTimes([[255, 0, 0, 1], [0, 255, 0, 1], [0, 0, 255, 1]]);
        }
        else {
          T_CS.mode_snowing_Special1(inputColor);
        }
        break;
      case 'Kamehemeha':
        T_CS.mode_qigong_Special1_Step(inputColor, target.Multicolor)
        break;
      case 'Pingpong':
        T_CS.mode_Pingpong(inputColor, target.Multicolor);
        break;
      case 'Surmount':
        T_CS.mode_Surmount(inputColor, target.Multicolor, T_CS.centerBlockPoint);
        break;
      case 'LEDOFF':
        T_CS.mode_LEDOFF();
        break;
      case 'Starlight':
        T_CS.mode_Starlight(inputColor);
        break;
      case 'Snowing':
        T_CS.mode_snowing_Special1(inputColor, target.Multicolor);
        //T_CS.mode_Snowing(inputColor, target.Multicolor);
        break;
      case 'WaveSync':
        T_CS.mode_WaveSync(inputColor, true, 20);
        break;
      case 'Wave1':
        if (target.Multicolor) {
          T_CS.mode_WaveSync(inputColor, true, 80, 150);
        }
        else {
          T_CS.mode_WaveSync(inputColor, false, 100, 250);
        }
        break;
      case 'Wave2':
        if (target.Multicolor) {
          T_CS.mode_WaveSync(inputColor, true, 80, 150);
        }
        else {
          T_CS.mode_WaveSync(inputColor, false, 300, 100);
        }
        break;

      default:
        break;
    }
  }
  /**
   * process multicolor_Change Event
  */
  multicolor_Change() {
    this.Built_ineffect.Built_inSelected.color_Enable = !this.Built_ineffect.Built_inSelected.Multicolor;
    this.PRESETS_SelectedChange();//by multicolor_Change();
  }
  /**
   * process setkeyUIColor Event
  */
  setkeyUIColor(i) {
    if (this.KeyBoardManager.getTarget().recordAssignBtnIndex == i && !this.KeyBoardManager.notClickedYet) {
      return 'rgba(255, 255, 255, 0.65)';
    }
    else {
      if (this.KeyBoardStyle.getTargetDefaultKeyArray()[i] == 'Side Light') {
        return '#0000';
      }
      if (this.KeyBoardManager.getTarget().keyHoverIndex == i) {
        return 'rgba(253, 186, 59, 0.65)';
      }
      else {
        return '#0000';
      }
    }
  }
  /**
   * process AssignKeyTipStyle Event
  */
  getAssignKeyTipStyle(index) {
    var TTT = document.getElementById('KeyAssignHasValue' + index);
    var isVisible = this.KeyBoardManager.getTarget().getNowModeKeyMatrix()[index].changed;
    if (TTT != null && isVisible == true) {
      TTT.style.cssText = "background: #fdba3b;width: 60%;height: 7px;margin-bottom: 10px;pointer-events: none;" + this.KeyBoardStyle.getTarget().hasValueStyle[index]

    }
    else {
      TTT.style.cssText = "";
    }
    //console.log('%c getAssignKeyTipStyle','background: blue; color: red',event)
  }
  /**
* process getDeviceDefaultKey Event
*/
  getDeviceDefaultKey() {

    var transText = this.KeyBoardManager.getTarget().getNowModeTargetMatrixKey().defaultValue;

    //console.log('getDeviceDefaultKey', this.currentDevice.deviceData.devicename);
    // var checkString = this.deviceService.getCurrentDevice();
    // if (checkString == "GMMK PRO ISO" || checkString == "GMMK V2 65ISO" || checkString == "GMMK V2 96ISO") {
    //   if (transText == "|") {
    //     transText = "#"
    //   }
    // }
    // if(transText!=null){
    //   transText="";
    // }
    return transText;
    // try {
    //   return transText;
    // } catch (error) {
    //   return "ss";
    // }
  }

  /**
* process switchChangAllkey Event
*/
  switchChangAllkey() {
    let index = AllFunctionMapping.findIndex(
      (x) => x.code == this.KeyBoardManager.getTarget().getNowModeTargetMatrixKey().recordBindCodeName
    )
    if (index != -1) {
      var target = this.KeyBoardManager.getTarget().getNowModeTargetMatrixKey();
      //console.log('switchChangAllkey',this.KeyBoardManager.getTarget().getNowModeTargetMatrixKey());
      switch (target.recordBindCodeType) {
        case 'LaunchProgram':
          return this.getFileName(target.ApplicationPath);
        case 'LaunchWebsite':
          return target.WebsitePath;
        case 'MacroFunction':
          //console.log('case MacroFunction:',target);   
          var obj = this.macroService.find_Data('m_Identifier', target.macro_Data.m_Identifier);
          if (obj != undefined) {
            return obj.name;
          }
          else {
            return '';
        }

      }
      //console.log('AllFunctionMapping_index', index);
      var combinationkey = ""
      var count = 0
      if (target.combinationkeyEnable) {
        if (target.Shift) {
          combinationkey += "Shift"
          if (count > 0) {
            combinationkey += "+"
          }
          count += 1;
        }
        if (target.Alt) {
          if (count > 0) {
            combinationkey += "+"
          }
          combinationkey += "Alt"
          count += 1;
        }
        if (target.Ctrl) {
          if (count > 0) {
            combinationkey += "+"
          }
          combinationkey += "Ctrl"
          count += 1;
        }
        if (target.Windows) {
          if (count > 0) {
            combinationkey += "+"
          }
          combinationkey += "Windows"
          count += 1;
        }
        if (target.hasFNStatus) {
          if (count > 0) {
            combinationkey += "+"
          }
          combinationkey += "FN"
          count += 1;
        }
        console.log('switchChangAllkey_count', count);
      };
      if (count > 0) {
        combinationkey += "+"
      }
      var trans = AllFunctionMapping[index].translate;
      var result = combinationkey + trans;
      return result;
    }
    else{
      return this.KeyBoardManager.getTarget().getNowModeTargetMatrixKey().recordBindCodeName;
    }
  }
  /**
   * select polling rate
   */
  PollingRateSelect() { }
  /**
/**
 * process SetGroupFunction Event
 * @param type string:BindCodeType
 * @param defaultKeyCode string:BindCodeName
*/
  SetGroupFunction(type, defaultKeyCode) {
    console.log('SetGroupFunction', type, this.KeyAssignManager.recordBindCodeType)
    try {
      var target = this.KeyAssignManager;
      if (target.recordBindCodeType != type) {
        target.resetDefaultVariable();
        target.recordBindCodeType = type
        target.recordBindCodeName = defaultKeyCode;
        var target_kb = this.KeyBoardManager.getTarget().getNowModeTargetMatrixKey();
        if (target_kb.recordBindCodeType == target.recordBindCodeType) {
          this.KeyAssignManager.updateVariable(target_kb);
        }
        switch (target.recordBindCodeType) {
          case 'MacroFunction':
            this.cdr.detectChanges();
            this.macroService.setMacroPageEnter();
            break;

        }
      }

    } catch (e) {
      console.error('SetGroupFunction error', e)
    }
  }
  /**
   * clcik Keyboard top bar
   * @param flag 1:lighting 2:keybinding 3:performance
   */
  changeKeyboardTopbar(flag) {
    this.lightingflag = false
    this.keybindingflag = false
    this.performanceflag = false
    switch (flag) {
      case 1:
        this.lightingflag = !this.lightingflag;
        break
      case 2:
        this.keybindingflag = !this.keybindingflag;
        break
      case 3:
        this.performanceflag = !this.performanceflag;
        break
      default:
        break
    }
    //this.Reinit()//from changeKeyboardTopbar
    // this.reloadProfileData();//from changeKeyboardTopbar

    this.keyboardrightTitleStatus()
  }
  /**
 * Keyboard title status
 */
  keyboardrightTitleStatus() {
    let elem = document.getElementById('Keyboard-right-titile') as HTMLImageElement;
    document.getElementById('Keyboard-right').style.width = '400px'
    if (this.lightingflag) elem.src = 'image/Lighting-title.png'
    else if (this.keybindingflag) elem.src = 'image/Keybinding-title.png'
    else if (this.performanceflag) elem.src = 'image/performance-title.png'
    else document.getElementById('Keyboard-right').style.width = '0px'
    //this.setRGBcolor();//by keyboardrightTitleStatus
  }
  /**
 * process changeProfileLayer Event
*/
  changeProfileLayer() {
    this.KeyBoardManager.changeProfileLayer()
    this.KeyAssignManager.resetDefaultVariable();
    //this.reloadProfileData();//by changeProfileLayer
  }
  /**
   * get File name exe
   * @param filename 
   */
  getFileName(filename) {

    return filename;
  }
  /**
   * process PERKEY_BrightnessSlider Event
  */
 PERKEY_BrightnessSlider_Background() {
  var value = this.PERKEY_lightData.brightness;
  return '-webkit-linear-gradient(left ,#FDBA3B 0%,#FDBA3B ' + value + '%,#313131 ' + value + '%, #313131 100%)';
}

  /**
   * process onLayoutSelectChange Event
  */
  onLayoutSelectChange() {
    this.LayoutManager.setSelectChange();
    //console.log('%c onLayoutSelectChange_nowlayoutSelect','background: blue; color: red',JSON.stringify(this.LayoutManager.getMacroFromIdentifier()));
    console.log('%c onLayoutSelectChange', 'background: blue; color: red', JSON.stringify(this.LayoutManager.getMacroFromIdentifier()));
    var target = this.LayoutManager.getMacroFromIdentifier().content;

    if (target != undefined) {
      this.M_Light_PERKEY.replaceAllBlockColor(target.AllBlockColor);
      this.PERKEY_lightData = target.lightData;
      this.setRGBcolor();//by onLayoutSelectChange
    }
  }

/*****************************NEW　*******************************/

  /**
 * process keyBindSave Event
*/
keyBindSave() {
  // if (this.lightingflag) {
  //     //if(this.lightingPage == 'PRESETS'){
  //     console.log('%c KB_ProfileImport', 'color:yellow', this.Built_ineffect.Built_inSelected);
  //     this.KeyBoardManager.getTarget().light_PRESETS_Data = JSON.parse(JSON.stringify(this.Built_ineffect.Built_inSelected));
  //     //}
  //     //if(this.lightingPage == 'PERKEY'){
  //     this.PerKeyAreaCick(this.PerKeyArea);
  //     console.log('%c M_Light_PERKEY.AllBlockColor', 'color:rgb(255,75,255,1)', this.M_Light_PERKEY.AllBlockColor);
  //     this.LayoutManager.updateContentToDB(this.M_Light_PERKEY.AllBlockColor, this.PERKEY_lightData);
  //     this.KeyBoardManager.getTarget().light_PERKEY_Data.value = this.LayoutManager.getMacroFromIdentifier().value;
  //     //}
  // }
  if (this.keybindingflag) {
    if (this.KeyAssignManager.recordBindCodeType != '') {
      if (this.KeyAssignManager.recordBindCodeType == "MacroFunction") {
        console.log('this.KeyAssignManager.recordBindCodeType=="MacroFunction"', this.macroService.nowMacroSelect);
        this.KeyAssignManager.macro_Data = JSON.parse(JSON.stringify(this.macroService.getMacroFromIdentifier()));
        this.KeyAssignManager.macro_RepeatType = this.macroService.get_RepeatType();
      }
      if (this.KeyAssignManager.recordBindCodeType == "SOUND CONTROL") {
        this.KeyAssignManager.d_SoundVolume = JSON.parse(JSON.stringify(this.M_SoundVolume.getSetValueData()));
        
      }
      this.KeyBoardManager.getTarget().setAssignTargetData(this.KeyAssignManager);
    }
  }
  // if (this.performanceflag) {
  //     this.KeyBoardManager.getTarget().pollingrate = this.pollingrateSelect.value;
  //     this.KeyBoardManager.getTarget().inputLatency= this.inputLatencySelect.value;
  // }
  //this.setKeyMatrixToBackend();

}

  /**
   * process NowKeyBindClassUI
  */
 getNowKeyBindClassUI(searchName = "") {
  var defaultValue = this.KeyBoardManager.getTarget().getNowModeTargetMatrixKey().defaultValue;
  //console.log('%c getNowKeyBindClassUI_searchName','background: blue; color: red',defaultValue)
  if (defaultValue == searchName) {
    return true;
  }
  else {
    return false;
  }
}
  /**
 * process PassiveEffect Event
 * @param obj object:PassiveEffectData
*/
setPassiveEffect(obj) {
  var target_cs = this.M_Light_PRESETS;
  var target = JSON.parse(JSON.stringify(this.Built_ineffect.Built_inSelected));
  var inputColor = [target.colorPickerValue];
  if (inputColor == undefined) {
    console.log('%c setPassiveEffects_undefined', 'color:rgb(255,77,255)', target_cs.lightData);
    return;
  }
  this.M_Light_PRESETS.lightData = target;
  var index = this.M_Light_PRESETS.currentBlockIndex = obj.BlockIndex;
  console.log('%c setPassiveEffects', 'color:rgb(255,77,255)', index);
  switch (target.PointEffectName) {
    case 'RippleGraff'://彩色擴散
      target_cs.mode_RippleGraff(inputColor, target.Multicolor, index);
      break;
    case 'PassWithoutTrace'://單點
      if (target.Multicolor) {
        var colors = [[255, 0, 0, 1], [0, 255, 0, 1], [0, 0, 255, 1]];
        inputColor = [colors[this.M_Light_PRESETS.getRandom(0, colors.length - 1)]];
      }
      target_cs.mode_PassWithoutTrace(inputColor, index);
      break;
    case 'FastRunWithoutTrace'://一排
      //target_cs.mode_FastRunWithoutTrace(inputColor, target.Multicolor, index,this.KeyBoardStyle.getTarget().withoutTraceFakeCoordinates);
      target_cs.mode_withoutTraceFakeCoordinates(inputColor, target.Multicolor, index,this.KeyBoardStyle.getTarget().withoutTraceFakeCoordinates);
      break;
    case 'Cross'://十字
      target_cs.mode_Cross(inputColor, false, index);
      break;
    case 'Blossom'://綻放
      target_cs.mode_Blossom(inputColor, false, index);
      break;
    default:
      break;
  }
}


}


