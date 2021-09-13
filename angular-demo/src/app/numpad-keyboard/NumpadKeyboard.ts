import { Component, OnInit } from '@angular/core';
import {
  ColorModule, MacroScriptContent, MacroManager, Wave, APModeModule, KeyBoardStyle, LedChainFramesManager,
  AssociateManager, EffectCenter, KeyShortcut, AlertDevice, EventManager, i18nManager, ImgPathList
  , count_boolean, CreateFakeArray, SharesFunction, ProgressBar, M_Light_CS, KeyAssignManager
} from '../../Module/TSImportManager';

import { Http, Response, Headers, RequestOptions } from '@angular/http'
import { DeviceService } from './DeviceService';
import { KeyBoardManager } from './KeyBoardManager';
import { MacroService } from './MacroService';

declare var require: any;
let AllFunctionMapping = require('./SupportData').AllFunctionMapping;

@Component({
  selector: 'app-NumpadKeyboard',
  templateUrl: './NumpadKeyboard.html',
  styleUrls: ['./NumpadKeyboard.css']
})
export class NumpadKeyboardComponent implements OnInit {
  KeyBoardStyle = new KeyBoardStyle();
  KeyAssignManager = new KeyAssignManager();
  M_Light_PRESETS = new M_Light_CS(83);
  M_Light_PERKEY = new M_Light_CS(83);
  KeyBoardManager = new KeyBoardManager(83);
  deviceService;
  macroService=new MacroService();
  KeyBoardNotClickedYet;
  keybindingflag=false;
  lightingflag=false;
  constructor(private http:Http) { 
    this.deviceService=new DeviceService(this.http);
    console.log('NumpadKeyboardComponent', AllFunctionMapping);

  }

  ngOnInit() {
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
    var checkString=this.deviceService.getCurrentDevice();
    if (checkString == "GMMK PRO ISO" || checkString == "GMMK V2 65ISO" || checkString == "GMMK V2 96ISO") {
      if (transText == "|") {
        transText = "#"
      }
    }
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
     * get File name exe
     * @param filename 
     */
    getFileName(filename) {

      return filename;
  }


}
