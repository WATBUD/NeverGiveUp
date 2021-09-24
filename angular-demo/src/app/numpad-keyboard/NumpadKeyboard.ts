import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {
  ColorModule, MacroScriptContent, MacroManager, Wave, APModeModule, LedChainFramesManager,
  AssociateManager, EffectCenter, KeyShortcut, AlertDevice, EventManager, i18nManager, ImgPathList
  , count_boolean, CreateFakeArray, SharesFunction, ProgressBar, M_Light_CS, KeyAssignManager
} from '../../Module/TSImportManager';

import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { DeviceService } from './DeviceService';
import { KeyBoardManager } from './KeyBoardManager';
import { MacroService } from './MacroService';
import { KeyBoardStyle } from './KeyBoardStyle';

declare var require: any;
let AllFunctionMapping = require('./SupportData').AllFunctionMapping;
let KeyMapping = require('./SupportData').KeyMapping;
let Shortcuts_WindowsMapping = require('./SupportData').KeyMapping;
@Component({
  selector: 'app-NumpadKeyboard',
  templateUrl: './NumpadKeyboard.html',
  styleUrls: ['./NumpadKeyboard.css', './KeyBoardStyle.scss', './Keybinding.scss']
})
export class NumpadKeyboardComponent implements OnInit {
  KeyBoardStyle = new KeyBoardStyle();
  KeyAssignManager = new KeyAssignManager();
  M_Light_PRESETS = new M_Light_CS(83);
  M_Light_PERKEY = new M_Light_CS(83);
  KeyBoardManager = new KeyBoardManager(83);
  deviceService;
  macroService = new MacroService();
  KeyBoardNotClickedYet;
  keybindingflag = true;
  lightingflag = false;
  performanceflag = false;
  KeyboardKeyData: any = KeyMapping;
  Shortcuts_WindowsMapping: any = Shortcuts_WindowsMapping;
  constructor(private http: Http, private cdr: ChangeDetectorRef) {
    this.deviceService = new DeviceService(this.http);
    console.log('NumpadKeyboardComponent', AllFunctionMapping);

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.keyBindPageRegisterEvent();

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
      element.addEventListener('mousedown', (e: MouseEvent) => {
        if (this.KeyBoardManager.getTarget().checkNowModeTargetMatrixAssignKey(index, 'FN')) {
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
          // if (target.recordBindCodeType == "MacroFunction") {
          //     this.macroService.setMacroTypeValue(target.macro_RepeatType);
          //     this.macroService.setMacroSelectValue(target.macro_Data.value);
          // }
          console.log("KeyAssignUIStyleList__index", index, target);
        }
      })
    }
  }
  /**
   * process setkeyUIColor Event
  */
  setkeyUIColor(i) {
    if (this.KeyBoardManager.getTarget().recordAssignBtnIndex == i && !this.KeyBoardManager.notClickedYet) {
      return 'rgba(255, 255, 255, 0.65)';
    }
    else {
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
    var checkString = this.deviceService.getCurrentDevice();
    if (checkString == "GMMK PRO ISO" || checkString == "GMMK V2 65ISO" || checkString == "GMMK V2 96ISO") {
      if (transText == "|") {
        transText = "#"
      }
    }
    console.log('%c transText', 'background: blue; color: red', transText)
    return transText;
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
  }

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

    // this.keyboardrightTitleStatus()
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


}
