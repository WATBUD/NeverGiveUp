(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/KeyBoardStyle.css":
/*!***********************************!*\
  !*** ./src/app/KeyBoardStyle.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input.KeyAssignUIStyle:focus {\r\n    outline: none !important;\r\n    border: 2px solid #ffc757;\r\n    border-radius: 10px;\r\n}\r\n\r\n.KeyAssignUIStyle {\r\n    position: absolute;\r\n    background-repeat: no-repeat;\r\n    width: 43px;\r\n    height: 11%;\r\n    float: left;\r\n    margin-top: 0.3%;\r\n    margin-left: 0.3%;\r\n    padding: 0;\r\n    background-color: #0000;\r\n    box-sizing: border-box;\r\n    border-radius: 16%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n    z-index: 4;\r\n}\r\n\r\n.KeyAssignHasValue {\r\n    background: red;\r\n    width: 60%;\r\n    height: 15%;\r\n    margin-bottom: 10px;\r\n    pointer-events: none;\r\n}\r\n\r\n.RGBColorBlockStyle {\r\n    position: absolute;\r\n    background-repeat: no-repeat;\r\n    width: 43px;\r\n    height: 11%;\r\n    float: left;\r\n    margin-top: 0.3%;\r\n    margin-left: 0.3%;\r\n    padding: 0;\r\n    background-color: #0000;\r\n    box-sizing: border-box;\r\n    border-radius: 16%;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: flex-end;\r\n}\r\n\r\n.RGBColorBlockP7 {\r\n    position: absolute;\r\n    background-repeat: no-repeat;\r\n    width: 6.3%;\r\n    height: 19%;\r\n    float: left;\r\n    margin-top: 0.3%;\r\n    margin-left: 0.3%;\r\n    padding: 0;\r\n    background-color: #0000;\r\n    box-sizing: border-box;\r\n    border-radius: 16%;\r\n}\r\n\r\n.KBUICommon {\r\n    position: absolute;\r\n    left: 2.6%;\r\n    top: 3%;\r\n    height: 292px;\r\n    width: 757px;\r\n    /* border: 2px solid red; */\r\n    box-sizing: border-box;\r\n    -webkit-transform: scale(1);\r\n            transform: scale(1);\r\n}\r\n\r\n.EventCanBoxSelectRange {\r\n    position: absolute;\r\n    left: 28%;\r\n    top: 21%;\r\n    height: 320px;\r\n    width: 825px;\r\n    background: rgba(255, 255, 255, 0);\r\n}\r\n"

/***/ }),

/***/ "./src/app/TTTTTTT.scss":
/*!******************************!*\
  !*** ./src/app/TTTTTTT.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".Keyboard-content {\n  WIDTH: 100%;\n  HEIGHT: 100%; }\n\n.ButtonStyle {\n  cursor: pointer;\n  text-align: center;\n  color: #fff;\n  font-size: 0.8vw;\n  font-weight: bold;\n  text-shadow: 2px 1px 1px #386379;\n  border: 1px solid #3180a7;\n  background: linear-gradient(to bottom, #6dbfe8 0%, #28a1de 50%, #28a1de 50%, #1f8cc2 51%, #1f8cc2 51%, #33a0d6 100%);\n  border-radius: 3px;\n  outline: none;\n  box-shadow: inset 0 1px 1px rgba(255, 255, 255, 0.7); }\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n      <input type=\"button\" id=\"AddSpace\" (click)=\"setMode('FastRunWithoutTrace',[255,255,0,1],false)\" onkeydown=\"\"\r\n      value=\"mode_FastRunWithoutTrace\" class=\"ButtonStyle\">\r\n      <input type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_T0()\" onkeydown=\"\"\r\n      value=\"mode_T0\" class=\"ButtonStyle\">\r\n      <input type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_T1()\" onkeydown=\"\"\r\n      value=\"mode_T1\" class=\"ButtonStyle\">\r\n      <input type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_T2()\" onkeydown=\"\"\r\n      value=\"mode_T2\" class=\"ButtonStyle\">\r\n      <input type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_T3()\" onkeydown=\"\"\r\n      value=\"mode_T3\" class=\"ButtonStyle\">\r\n      <input type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_Wave()\" onkeydown=\"\"\r\n      value=\"mode_Wave\" class=\"ButtonStyle\">\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_SpreadLeftAndRight()\" onkeydown=\"\"\r\n      value=\"mode_SpreadLeftAndRight\" class=\"ButtonStyle\">\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"setMode('AcidMode')\" onkeydown=\"\"\r\n      value=\"mode_gloriousMode\" class=\"ButtonStyle\">\r\n\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"GMMK_imgVisible()\" onkeydown=\"\"\r\n      value=\"GMMK_imgVisible\" class=\"ButtonStyle\">\r\n\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_Matrix3_Raindow()\" onkeydown=\"\"\r\n      value=\"mode_Matrix3_Raindow\" class=\"ButtonStyle\">\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_Matrix3()\" onkeydown=\"\"\r\n      value=\"mode_Matrix3\" class=\"ButtonStyle\">\r\n\r\n\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"setMode('Snowing',[255,255,0,1],false)\" onkeydown=\"\"\r\n      value=\"mode_Snowing\" class=\"ButtonStyle\">\r\n\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_Matrix2()\" onkeydown=\"\"\r\n      value=\"mode_Matrix2\" class=\"ButtonStyle\">\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"setMode('Starlight',[255,255,0,1],false)\" onkeydown=\"\"\r\n      value=\"mode_Starlight\" class=\"ButtonStyle\">\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"setMode('DigitTimes',[255,255,0,1],false)\" onkeydown=\"\"\r\n      value=\"mode_DigitTimes\" class=\"ButtonStyle\">\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"setMode('PassWithoutTrace',[255,0,0,1],false)\" onkeydown=\"\"\r\n      value=\"PassWithoutTrace\" class=\"ButtonStyle\">\r\n      \r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"setMode('HeartbeatSensor',[255,255,0,1],false)\" onkeydown=\"\"\r\n      value=\"mode_HeartbeatSensor\" class=\"ButtonStyle\">\r\n      \r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_Rainbow()\" onkeydown=\"\"\r\n      value=\"mode_Rainbow\" class=\"ButtonStyle\">\r\n   \r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_SlopeRight()\" onkeydown=\"\"\r\n      value=\"mode_SlopeRight\" class=\"ButtonStyle\">\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_SlopeMoveR()\" onkeydown=\"\"\r\n      value=\"mode_SlopeMoveR\" class=\"ButtonStyle\">\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_Cooking()\" onkeydown=\"\"\r\n      value=\"mode_Cooking\" class=\"ButtonStyle\">\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"setMode('RippleGraff',[0,0,255,1],true)\" onkeydown=\"\"\r\n      value=\"mode_RippleGraff\" class=\"ButtonStyle\">\r\n\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"setMode('Cross',[255,255,0,1],false)\" onkeydown=\"\"\r\n      value=\"mode_Cross\" class=\"ButtonStyle\">\r\n      \r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"setMode('RippleGraff',[255,255,0,1],false)\" onkeydown=\"\"\r\n      value=\"mode_RippleGraff_Single\" class=\"ButtonStyle\">\r\n\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"setMode('Blossom',[255,255,0,1],false)\" onkeydown=\"\"\r\n      value=\"mode_Blossom\" class=\"ButtonStyle\">\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_Breathing([[0,0,255,1]],false)\" onkeydown=\"\"\r\n      value=\"mode_Breath\" class=\"ButtonStyle\">\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_Breathing([[0,0,255,1]],false)\" onkeydown=\"\"\r\n      value=\"mode_Breathing\" class=\"ButtonStyle\">\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_Breathing([[0,0,255,1]],true)\" onkeydown=\"\"\r\n      value=\"mode_Breathing_rainbow\" class=\"ButtonStyle\">\r\n      \r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_NormallyOn([[0,0,255,1]],true)\" onkeydown=\"\"\r\n      value=\"mode_NormallyOn\" class=\"ButtonStyle\">\r\n\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"setMode('AcidMode',[[0,0,255,1]],false)\" onkeydown=\"\"\r\n      value=\"mode_AcidMode\" class=\"ButtonStyle\">\r\n\r\n      \r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"setMode('Kamehemeha',[255,255,0,1],true)\" onkeydown=\"\"\r\n      value=\"mode_Kamehemeha_rainbow\" class=\"ButtonStyle\">\r\n\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"setMode('Kamehemeha',[255,255,0,1],false)\" onkeydown=\"\"\r\n      value=\"mode_Kamehemeha_Single\" class=\"ButtonStyle\">\r\n\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_Wave1([[0,0,255,1]],true)\" onkeydown=\"\"\r\n      value=\"mode_Wave1_rainbow\" class=\"ButtonStyle\">\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_Wave1([[0,0,255,1]],false)\" onkeydown=\"\"\r\n      value=\"mode_Wave1\" class=\"ButtonStyle\">\r\n\r\n\r\n\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_NormallyOn([[0,0,255,1]],true)\" onkeydown=\"\"\r\n      value=\"mode_NormallyOn\" class=\"ButtonStyle\">\r\n\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"setMode('Pingpong',[0,0,255,1],true)\" onkeydown=\"\"\r\n      value=\"mode_Pingpong_rainbow\" class=\"ButtonStyle\">\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"setMode('Pingpong',[0,0,255,1],false)\" onkeydown=\"\"\r\n      value=\"mode_Pingpong\" class=\"ButtonStyle\">\r\n\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"setMode('Surmount',[0,0,255,1],false)\" onkeydown=\"\"\r\n      value=\"mode_Surmount\" class=\"ButtonStyle\">\r\n\r\n      <input  type=\"button\" id=\"AddSpace\" (click)=\"this.M_Light_CS.mode_BreatheSeparately()\" onkeydown=\"\"\r\n      value=\"mode_BreatheSeparately\" class=\"ButtonStyle\">\r\n\r\n      <!--  -->\r\n      <!-- <input id=\"PRESETS_RateSlider\" type=\"range\" min=\"0\" max=\"100\" class=\"slider\" step=\"5\" [(ngModel)]=\"zzzz\"> -->\r\n\r\n        <input id=\"PRESETS_RateSlider\" type=\"range\" min=\"0\" max=\"100\" class=\"slider\" step=\"5\" \r\n        [(ngModel)]=\"this.M_Light_CS.lightData.rate\"\r\n        (mouseup)=\"sliderChange()\"\r\n        (ngModelChange)=\"lightSliderMove('PRESETS_RateSlider')\"\r\n        onkeydown=\"event.preventDefault()\">\r\n\r\n        <!-- <div>{{ this.M_Light_CS.lightData.rate }}%</div> -->\r\n      \r\n      <!-- [style.background-color]=\"'blue'\" -->\r\n      <!-- [ngStyle]=\"{'background-image': PERKEY_BrightnessSlider_Background()} -->\r\n    <div style=\"\r\n                width: 50px;\r\n                height: 50px;\r\n                left: 500px;\r\n                background: red;\r\n            \"   [ngStyle]=\"{'background': PERKEY_BrightnessSlider_Background()}\">\r\n    </div>\r\n    <div [style.background]=\"PERKEY_BrightnessSlider_Background()\" style=\"\r\n    width: 50px;\r\n    height: 50px;\r\n    left: 500px;\r\n    background: red;\r\n\">\r\n</div>\r\n\r\n\r\n\r\n      <!-- background: linear-gradient(-225deg, rgba(0,0,0,0.6) 50%, rgba(0,36,61,0.6) 80%), -->\r\n      <div id=\"EventCanBoxSelectRange\" class=\"Keyboard-content\">\r\n          <div id=\"GMMK_0x320F0x5044\" class=\"Content1\">\r\n              <div style=\"position: absolute; display: flex\">\r\n                  <img id=\"GMMK_img\" \r\n                      src=\"assets/image/GMMK3.png\"\r\n                      style=\"width: 834px; height: 372px; z-index: 3;display: none;\"\r\n                  />\r\n                  <div id=\"keyAssignPrompt\"\r\n                      style=\"\r\n                          position: absolute;\r\n                          margin-top: -146px;\r\n                          margin-left: -65px;\r\n                          visibility: visible;\r\n                          width: 130px;\r\n                          display: flex;\r\n                          height: 117px;\r\n                          justify-content: center;\r\n                          align-items: flex-end;\r\n                          background-image: url('./image/keybinding/Indicator.png');\r\n                          z-index: 5;\r\n                      \"\r\n                      [style.display]=\"keybindingflag && !this.KeyBoardManager.notClickedYet ? 'flex' : 'none'\"\r\n                  >\r\n                      <div\r\n                          id=\"keyAssignPromptline\"\r\n                          style=\"background-color: rgb(255, 255, 255); position: absolute; width: 1px; display: flex\"\r\n                      ></div>\r\n                      <div\r\n                          id=\"KeyDefaultValue\"\r\n                          style=\"\r\n                              color: white;\r\n                              margin-bottom: 84px;\r\n                              width: 50%;\r\n                              text-overflow: ellipsis;\r\n                              overflow: hidden;\r\n                              white-space: nowrap;\r\n                              text-align: center;\r\n                          \"\r\n                      >\r\n                          {{ this.KeyBoardManager.getTarget().getNowModeTargetMatrixKey().defaultValue }}\r\n                      </div>\r\n                      <div id=\"SingleKeyClass\" style=\"position: absolute; color: white; margin-top: -57px\">\r\n                          {{ this.KeyBoardManager.getTarget().getNowModeTargetMatrixKey().recordBindCodeType }}\r\n                      </div>\r\n                      <div id=\"SingleKeyAssignValue\" style=\"    position: absolute;\r\n                                              color: white;\r\n                                              margin-top: -25px;\r\n                                              width: 50%;\r\n                                              text-overflow: ellipsis;\r\n                                              overflow: hidden;\r\n                                              white-space: nowrap;\r\n                                              text-align: center;\r\n                                              \">\r\n                          {{ switchChangAllkey() }}\r\n                      </div>\r\n                  </div>\r\n                  <!-- [style.background-color]=\"this.M_Light_CS.getIndexRGBCss(i)\" -->\r\n                  <div id=\"KeyLightUI_section\" style=\"position: absolute;\r\n                  display: flex;\r\n                  WIDTH:  834px;\r\n                  HEIGHT: 372px;\">\r\n                      <div [style.display]=\"lightingflag ? 'flex' : 'none'\"\r\n                          *ngFor=\"let item of KeyBoardStyle.getTarget().target; let i = index\" class=\"RGBColorBlockStyle\"\r\n                             \r\n                          [ngStyle]=\"{'background':this.M_Light_CS.getIndexRGBCss(i)}\"\r\n                          [attr.data-index]=\"i\">\r\n                        </div>\r\n                  </div>\r\n                  <!-- -->\r\n                  <!-- <div id=\"KeyAssignBlock_section\" style=\"position: absolute;\r\n                  display: flex;\r\n                  WIDTH: auto;\r\n                  HEIGHT: 100%;\">\r\n                      <div id=\"KeyAssignBlock\" [style.display]=\"keybindingflag ? 'flex' : 'none'\"\r\n                          *ngFor=\"let item of KeyBoardStyle.getTarget().target; let i = index\"\r\n                          (mouseover)=\"this.KeyBoardManager.getTarget().keyHoverIndex = i\" [style.background-color]=\"setkeyUIColor(i)\" \r\n                          class=\"KeyAssignUIStyle\">\r\n                          <div [ngClass]=\"{KeyAssignHasValue:this.KeyBoardManager.getTarget().getNowModeKeyMatrix()[i].changed}\" class=\"KeyAssignHasValue\"></div>\r\n                      </div>\r\n                  </div> -->\r\n\r\n              </div>\r\n          </div>\r\n\r\n\r\n      </div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(System) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _keyboard_KeyAssignManager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../keyboard/KeyAssignManager */ "./src/keyboard/KeyAssignManager.ts");
/* harmony import */ var _keyboard_KeyBoardManager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../keyboard/KeyBoardManager */ "./src/keyboard/KeyBoardManager.ts");
/* harmony import */ var _keyboard_KeyBoardStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../keyboard/KeyBoardStyle */ "./src/keyboard/KeyBoardStyle.ts");
/* harmony import */ var _keyboard_APModeModule__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../keyboard/APModeModule */ "./src/keyboard/APModeModule.ts");
/* harmony import */ var _backend_others_SupportData__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../backend/others/SupportData */ "./src/backend/others/SupportData.js");
/* harmony import */ var _backend_others_SupportData__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_backend_others_SupportData__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//let AllFunctionMapping =  System._nodeRequire('./backend/others/SupportData').AllFunctionMapping
// let Shortcuts_WindowsMapping =  System._nodeRequire('./backend/others/SupportData').Shortcuts_WindowsMapping
// let KeyMapping = System._nodeRequire('./backend/others/SupportData').KeyMapping






var AppComponent = /** @class */ (function () {
    function AppComponent(
    //private macroService: MacroService,
    cdr) {
        this.cdr = cdr;
        this.SideLightAreaArr = [false, false, false, false, false, false, false, false, false, false];
        this.SideLightAreaFlag = false;
        this.LightingGroupFunction = 1;
        //KeyboardKeyData: any = KeyMapping
        //Shortcuts_WindowsMapping: any = Shortcuts_WindowsMapping
        this.lightingflag = true;
        this.keybindingflag = false;
        this.performanceflag = false;
        this.RateValue = 60;
        this.OpacityValue = 60;
        this.WiredBrightnessValue = 60;
        this.WirelessBrightnessValue = 60;
        this.SepatateCheckValue = false;
        this.ColorData = [];
        this.Color = 'FF00FF';
        this.ColorMiniNum = 1;
        this.DeleteFlag = false;
        this.AddFlag = false;
        this.DeleteColorIconFlag = true;
        this.SyncCrossKeyboardCheckValue = true;
        this.FlashSideLightEnable = true;
        this.sidelightBreathingEnable = true;
        this.KeyBoardStyle = new _keyboard_KeyBoardStyle__WEBPACK_IMPORTED_MODULE_2__["KeyBoardStyle"]();
        this.M_Light_CS = new _keyboard_APModeModule__WEBPACK_IMPORTED_MODULE_3__["M_Light_CS"](83);
        this.KeyBoardManager = new _keyboard_KeyBoardManager__WEBPACK_IMPORTED_MODULE_1__["KeyBoardManager"](83);
        this.KeyAssignManager = new _keyboard_KeyAssignManager__WEBPACK_IMPORTED_MODULE_0__["KeyAssignManager"]();
        //Profile
        this.ProfileData = [];
        this.PollingRateData = [
            { name: '125Hz', value: 125, translate: '125Hz' },
            { name: '250Hz', value: 250, translate: '250Hz' },
            { name: '500Hz', value: 500, translate: '500Hz' },
            { name: '1000Hz', value: 1000, translate: '1000Hz' },
        ];
        this.buttonNum = 0;
        this.zzzz = 0;
        this.GMMK_imgFlag = false;
        console.log('KeyboardComponent__ciphertext', _backend_others_SupportData__WEBPACK_IMPORTED_MODULE_4__["AllFunctionMapping"]);
        console.log('KeyboardComponent__ciphertext', System);
    }
    AppComponent.prototype.setkeyUIColor = function () {
    };
    AppComponent.prototype.ngOnInit = function () {
        this.M_Light_CS.lightData = this.default_LightData();
    };
    AppComponent.prototype.ngOnDestroy = function () {
        console.log('Keyboardpage Destory');
        //this.ModelPreview.ClosePreview();
    };
    AppComponent.prototype.ngDoCheck = function () { };
    AppComponent.prototype.ngAfterViewChecked = function () {
        //Called after every check of the component's view. Applies to components only.
        //Add 'implements AfterViewChecked' to the class.
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
        //Add 'implements AfterViewInit' to the class.
        //this.macroService.setMacroPageEnter();
        this.LightPageRegisterEvent_Box_selection();
        this.DeveloperControl();
    };
    AppComponent.prototype.switchChangAllkey = function () {
    };
    AppComponent.prototype.LightPageRegisterEvent_Box_selection = function () {
        //var RGBCBSList = this.elementRef.nativeElement.querySelectorAll('.RGBColorBlockStyle')
        //console.log('RGBCBSList', RGBCBSList)
        this.M_Light_CS.BSApage1.setSelectContainer('EventCanBoxSelectRange');
        var RGBCBSList = document.getElementsByClassName('RGBColorBlockStyle');
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
        for (var index = 0; index < RGBCBSList.length; index++) {
            var element = RGBCBSList[index];
            element.setAttribute('data-index', String(index));
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
                "center_Point": [element.offsetLeft + (element.clientWidth / 2), element.offsetTop + (element.clientHeight / 2)],
            };
            this.M_Light_CS.AllBlockColor[index].coordinateData = obj;
            //console.log(String(index), obj);  
        }
        this.M_Light_CS.imageMaxWidth = 765;
        this.M_Light_CS.imageMaxHeight = 308;
    };
    AppComponent.prototype.GMMK_imgVisible = function () {
        var GMMK_img = document.getElementById('GMMK_img');
        //let RateContent = document.getElementById('RateContent')
        //let ColorContent = document.getElementById('ColorContent')
        this.GMMK_imgFlag = !this.GMMK_imgFlag;
        if (this.GMMK_imgFlag) {
            GMMK_img.style.display = 'flex';
        }
        else {
            GMMK_img.style.display = 'none';
        }
        //RateContent.style.display = 'flex'
        //ColorContent.style.display = 'flex'
    };
    AppComponent.prototype.default_LightData = function (defaultcolor) {
        if (defaultcolor === void 0) { defaultcolor = [255, 0, 0, 1]; }
        var T = {
            rate: 50,
            brightness: 50,
            colorHex: '#0000',
            colorPickerValue: defaultcolor,
            breathing: false,
            sideLightSync: false,
            brightness_Enable: false,
            rate_Enable: false,
            color_Enable: false,
            isRainbow: false,
            lightSelected: { name: 'GloriousMode', value: 0, translate: 'GloriousMode', }
        };
        return T;
    };
    AppComponent.prototype.PERKEY_BrightnessSlider_Background = function () {
        //return '-webkit-linear-gradient(left ,#FDBA3B 0%,#FDBA3B ' +50 +'%,#313131 ' +50 +'%, #313131 100%)';
        return '-webkit-linear-gradient(left ,#FDBA3B 0%,#FDBA3B 50%,#313131 50%, #313131 100%)';
    };
    /**
     * Wired Brightness slider move event
     */
    AppComponent.prototype.lightSliderMove = function (TargetName) {
        var showValue;
        if (TargetName == 'PRESETS_BrightnessSlider') {
            showValue = this.M_Light_CS.lightData.brightness;
        }
        if (TargetName == 'PRESETS_RateSlider') {
            showValue = this.M_Light_CS.lightData.rate;
        }
        console.log('lightSliderMove', TargetName, showValue);
        if (document.getElementById(TargetName)) {
            document.getElementById(TargetName).style.backgroundImage =
                '-webkit-linear-gradient(left ,#FDBA3B 0%,#FDBA3B ' +
                    showValue +
                    '%,#313131 ' +
                    showValue +
                    '%, #313131 100%)';
        }
    };
    AppComponent.prototype.sliderChange = function () {
        this.M_Light_CS.setAnimationSpeed();
        this.M_Light_CS.setNowLightMode();
        //this.M_Light_CS.mode_Kamehemeha([[0,0,255,1]],false);
    };
    AppComponent.prototype.setMode = function (modeName, color, isRainbow) {
        if (color === void 0) { color = [0, 0, 0, 1]; }
        if (isRainbow === void 0) { isRainbow = true; }
        console.log('%c setMode', 'color:rgb(255,77,255)', modeName, color);
        this.M_Light_CS.lightData.colorPickerValue = color;
        this.M_Light_CS.lightData.isRainbow = isRainbow;
        this.M_Light_CS.lightData.lightSelected.translate = modeName;
        this.M_Light_CS.setAnimationSpeed();
        this.M_Light_CS.setNowLightMode();
        this.M_Light_CS.setPassiveEffects();
    };
    AppComponent.prototype.DeveloperControl = function () {
        var _this = this;
        this.setMode('AcidMode');
        document.addEventListener('keydown', function (event) {
            //console.log("KeyShortcut_event.keyCode", event.keyCode);
            var recordValue = _backend_others_SupportData__WEBPACK_IMPORTED_MODULE_4__["AllFunctionMapping"].find(function (x) { return x.code == event.code; });
            var index2 = _this.KeyBoardStyle.findKeyMappingIndex(recordValue.code);
            console.log("recordValue", recordValue);
            console.log("index2", index2);
            _this.M_Light_CS.currentBlockIndex = index2;
            _this.M_Light_CS.setPassiveEffects();
            if (event.keyCode == 109) {
            }
            if (event.keyCode == 84) {
            }
            if (event.keyCode == 85) {
            }
            console.log("KeyShortcut_event.keyCode", event.keyCode);
            if (event.keyCode == 13) {
            }
            if (event.keyCode == 83) {
            }
            if (event.keyCode == 97) {
            }
            if (event.keyCode == 98) {
            }
            if (event.keyCode == 99) {
            }
            if (event.keyCode == 100) {
            }
            if (event.keyCode == 49) {
                ;
            }
            if (event.keyCode == 50) {
                ;
            }
            if (event.keyCode == 51) {
                ;
            }
            if (event.keyCode == 52) {
                ;
            }
            if (event.keyCode == 53) {
                ;
            }
            if (event.keyCode == 54) {
                ;
            }
            if (event.keyCode == 55) {
                ;
            }
            if (event.keyCode == 56) {
                ;
            }
            if (event.keyCode == 57) {
                ;
            }
            if (event.keyCode == 58) {
                ;
            }
            if (event.keyCode == 59) {
                ;
            }
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css"), __webpack_require__(/*! ./TTTTTTT.scss */ "./src/app/TTTTTTT.scss"), __webpack_require__(/*! ./KeyBoardStyle.css */ "./src/app/KeyBoardStyle.css")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ChangeDetectorRef"]])
    ], AppComponent);
    return AppComponent;
}());


/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/system.js */ "./node_modules/webpack/buildin/system.js")))

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// // app routes
// import { routes } from './app.routes';
// let routerModule = RouterModule.forRoot(routes);
// routerModule = RouterModule.forRoot(routes, {useHash: true});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/backend/others/SupportData.js":
/*!*******************************************!*\
  !*** ./src/backend/others/SupportData.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var KeyMapping = [
    {"keyCode":"65","functionType":"Singlekey","value":"A","hid":4,"translate":"A","code":"KeyA"},
    {"keyCode":"66","functionType":"Singlekey","value":"B","hid":5,"translate":"B","code":"KeyB"},
    {"keyCode":"67","functionType":"Singlekey","value":"C","hid":6,"translate":"C","code":"KeyC"},
    {"keyCode":"68","functionType":"Singlekey","value":"D","hid":7,"translate":"D","code":"KeyD"},
    {"keyCode":"69","functionType":"Singlekey","value":"E","hid":8,"translate":"E","code":"KeyE"},
    {"keyCode":"70","functionType":"Singlekey","value":"F","hid":9,"translate":"F","code":"KeyF"},
    {"keyCode":"71","functionType":"Singlekey","value":"G","hid":10,"translate":"G","code":"KeyG"},
    {"keyCode":"72","functionType":"Singlekey","value":"H","hid":11,"translate":"H","code":"KeyH"},
    {"keyCode":"73","functionType":"Singlekey","value":"I","hid":12,"translate":"I","code":"KeyI"},
    {"keyCode":"74","functionType":"Singlekey","value":"J","hid":13,"translate":"J","code":"KeyJ"},
    {"keyCode":"75","functionType":"Singlekey","value":"K","hid":14,"translate":"K","code":"KeyK"},
    {"keyCode":"76","functionType":"Singlekey","value":"L","hid":15,"translate":"L","code":"KeyL"},
    {"keyCode":"77","functionType":"Singlekey","value":"M","hid":16,"translate":"M","code":"KeyM"},
    {"keyCode":"78","functionType":"Singlekey","value":"N","hid":17,"translate":"N","code":"KeyN"},
    {"keyCode":"79","functionType":"Singlekey","value":"O","hid":18,"translate":"O","code":"KeyO"},
    {"keyCode":"80","functionType":"Singlekey","value":"P","hid":19,"translate":"P","code":"KeyP"},
    {"keyCode":"81","functionType":"Singlekey","value":"Q","hid":20,"translate":"Q","code":"KeyQ"},
    {"keyCode":"82","functionType":"Singlekey","value":"R","hid":21,"translate":"R","code":"KeyR"},
    {"keyCode":"83","functionType":"Singlekey","value":"S","hid":22,"translate":"S","code":"KeyS"},
    {"keyCode":"84","functionType":"Singlekey","value":"T","hid":23,"translate":"T","code":"KeyT"},
    {"keyCode":"85","functionType":"Singlekey","value":"U","hid":24,"translate":"U","code":"KeyU"},
    {"keyCode":"86","functionType":"Singlekey","value":"V","hid":25,"translate":"V","code":"KeyV"},
    {"keyCode":"87","functionType":"Singlekey","value":"W","hid":26,"translate":"W","code":"KeyW"},
    {"keyCode":"88","functionType":"Singlekey","value":"X","hid":27,"translate":"X","code":"KeyX"},
    {"keyCode":"89","functionType":"Singlekey","value":"Y","hid":28,"translate":"Y","code":"KeyY"},
    {"keyCode":"90","functionType":"Singlekey","value":"Z","hid":29,"translate":"Z","code":"KeyZ"},
    {"keyCode":"48","functionType":"Singlekey","value":"0","hid":39,"translate":"0","code":"Digit0"},
    {"keyCode":"49","functionType":"Singlekey","value":"1","hid":30,"translate":"1","code":"Digit1"},
    {"keyCode":"50","functionType":"Singlekey","value":"2","hid":31,"translate":"2","code":"Digit2"},
    {"keyCode":"51","functionType":"Singlekey","value":"3","hid":32,"translate":"3","code":"Digit3"},
    {"keyCode":"52","functionType":"Singlekey","value":"4","hid":33,"translate":"4","code":"Digit4"},
    {"keyCode":"53","functionType":"Singlekey","value":"5","hid":34,"translate":"5","code":"Digit5"},
    {"keyCode":"54","functionType":"Singlekey","value":"6","hid":35,"translate":"6","code":"Digit6"},
    {"keyCode":"55","functionType":"Singlekey","value":"7","hid":36,"translate":"7","code":"Digit7"},
    {"keyCode":"56","functionType":"Singlekey","value":"8","hid":37,"translate":"8","code":"Digit8"},
    {"keyCode":"57","functionType":"Singlekey","value":"9","hid":38,"translate":"9","code":"Digit9"},
    {"keyCode":"8","functionType":"Singlekey","value":"Backspace","hid":42,"translate":"Backspace","code":"Backspace"},
    {"keyCode":"9","functionType":"Singlekey","value":"Tab","hid":43,"translate":"Tab","code":"Tab"},
    {"keyCode":"144","functionType":"Singlekey","value":"Num Lock","hid":83,"translate":"Num Lock","code":"NumLock"},
    {"keyCode":"13","functionType":"Singlekey","value":"Enter","hid":40,"translate":"Enter","code":"Enter"},
    {"keyCode":"16","functionType":"Singlekey","value":"Shift","hid":225,"translate":"Shift","code":"ShiftRight"},
    {"keyCode":"17","functionType":"Singlekey","value":"Ctrl","hid":224,"translate":"Ctrl","code":"ControlLeft"},
    {"keyCode":"18","functionType":"Singlekey","value":"Alt","hid":226,"translate":"Alt","code":"AltRight"},
    {"keyCode":"19","functionType":"Singlekey","value":"Break","hid":72,"translate":"Break","code":"Pause"},
    {"keyCode":"20","functionType":"Singlekey","value":"CapsLock","hid":57,"translate":"CapsLock","code":"CapsLock"},
    {"keyCode":"27","functionType":"Singlekey","value":"Esc","hid":41,"translate":"Esc","code":"Escape"},
    {"keyCode":"32","functionType":"Singlekey","value":"Space","hid":44,"translate":"Space","code":"Space"},
    {"keyCode":"33","functionType":"Singlekey","value":"PageUp","hid":75,"translate":"PageUp","code":"PageUp"},
    {"keyCode":"34","functionType":"Singlekey","value":"PageDown","hid":78,"translate":"PageDown","code":"PageDown"},
    {"keyCode":"35","functionType":"Singlekey","value":"End","hid":77,"translate":"End","code":"End"},
    {"keyCode":"36","functionType":"Singlekey","value":"Home","hid":74,"translate":"Home","code":"Home"},
    {"keyCode":"37","functionType":"Singlekey","value":"Left","hid":80,"translate":"Left","code":"ArrowLeft"},
    {"keyCode":"38","functionType":"Singlekey","value":"Up","hid":82,"translate":"Up","code":"ArrowUp"},
    {"keyCode":"39","functionType":"Singlekey","value":"Right","hid":79,"translate":"Right","code":"ArrowRight"},
    {"keyCode":"40","functionType":"Singlekey","value":"Down","hid":81,"translate":"Down","code":"ArrowDown"},
    {"keyCode":"44","functionType":"Singlekey","value":"PrintScreen","hid":"0x46","translate":"PrintScreen","code":"PrintScreen"},
    {"keyCode":"45","functionType":"Singlekey","value":"Insert","hid":73,"translate":"Insert","code":"Insert"},
    {"keyCode":"46","functionType":"Singlekey","value":"Delete","hid":76,"translate":"Delete","code":"Delete"},
    {"keyCode":"91","functionType":"Singlekey","value":"Left Win","hid":227,"translate":"Left Win","code":"MetaLeft"},
    {"keyCode":"92","functionType":"Singlekey","value":"Right Win","hid":231,"translate":"Right Win"},
    {"keyCode":"93","functionType":"Singlekey","value":"Menu","hid":101,"translate":"Menu","code":"ContextMenu"},
    {"keyCode":"106","functionType":"Singlekey","value":"*","hid":85,"translate":"*","code":"NumpadMultiply"},
    {"keyCode":"107","functionType":"Singlekey","value":"+","hid":87,"translate":"+","code":"NumpadAdd"},
    {"keyCode":"109","functionType":"Singlekey","value":"-","hid":86,"translate":"-","code":"NumpadSubtract"},
    {"keyCode":"111","functionType":"Singlekey","value":"/","hid":84,"translate":"/","code":"NumpadDivide"},
    {"keyCode":"112","functionType":"Singlekey","value":"F1","hid":58,"translate":"F1","code":"F1"},
    {"keyCode":"113","functionType":"Singlekey","value":"F2","hid":59,"translate":"F2","code":"F2"},
    {"keyCode":"114","functionType":"Singlekey","value":"F3","hid":60,"translate":"F3","code":"F3"},
    {"keyCode":"115","functionType":"Singlekey","value":"F4","hid":61,"translate":"F4","code":"F4"},
    {"keyCode":"116","functionType":"Singlekey","value":"F5","hid":62,"translate":"F5","code":"F5"},
    {"keyCode":"117","functionType":"Singlekey","value":"F6","hid":63,"translate":"F6","code":"F6"},
    {"keyCode":"118","functionType":"Singlekey","value":"F7","hid":64,"translate":"F7","code":"F7"},
    {"keyCode":"119","functionType":"Singlekey","value":"F8","hid":65,"translate":"F8","code":"F8"},
    {"keyCode":"120","functionType":"Singlekey","value":"F9","hid":66,"translate":"F9","code":"F9"},
    {"keyCode":"121","functionType":"Singlekey","value":"F10","hid":67,"translate":"F10","code":"F10"},
    {"keyCode":"122","functionType":"Singlekey","value":"F11","hid":68,"translate":"F11","code":"F11"},
    {"keyCode":"123","functionType":"Singlekey","value":"F12","hid":69,"translate":"F12","code":"F12"},
    {"keyCode":"145","functionType":"Singlekey","value":"Scroll Lock","hid":71,"translate":"Scroll Lock","code":"ScrollLock"},
    {"keyCode":"186","functionType":"Singlekey","value":";","hid":51,"translate":";","code":"Semicolon"},
    {"keyCode":"187","functionType":"Singlekey","value":"=","hid":46,"translate":"=","code":"Equal"},
    {"keyCode":"188","functionType":"Singlekey","value":",","hid":54,"translate":",","code":"Comma"},
    {"keyCode":"189","functionType":"Singlekey","value":"-","hid":45,"translate":"-","code":"Minus"},
    {"keyCode":"190","functionType":"Singlekey","value":"dot","hid":55,"translate":"dot","code":"Period"},
    {"keyCode":"191","functionType":"Singlekey","value":"/","hid":56,"translate":"/","code":"Slash"},
    {"keyCode":"192","functionType":"Singlekey","value":"~","hid":53,"translate":"~","code":"Backquote"},
    {"keyCode":"219","functionType":"Singlekey","value":"[","hid":47,"translate":"[","code":"BracketLeft"},
    {"keyCode":"220","functionType":"Singlekey","value":"|","hid":49,"translate":"|","code":"Backslash"},
    {"keyCode":"221","functionType":"Singlekey","value":"]","hid":48,"translate":"]","code":"BracketRight"},
    {"keyCode":"222","functionType":"Singlekey","value":"'","hid":52,"translate":"'","code":"Quote"}
]
var MediaMapping = [
    { keyCode: '1', value: 'None', "hid":0x04, hidMap: [0x00, 0x00], translate: '' },
    { keyCode: '1', value: 'Media Player', "hid":0x04, hidMap: [0x01, 0x83], translate: '' },
    { keyCode: '1', value: 'Play/Pause', "hid":0x04, hidMap: [0x00, 0xcd], translate: '' },
    { keyCode: '1', value: 'Next', "hid":0x04, hidMap: [0x00, 0xb5], translate: '' },
    { keyCode: '1', value: 'Previous', "hid":0x04, hidMap: [0x00, 0xb6], translate: '' },
    { keyCode: '1', value: 'Stop', "hid":0x04, hidMap: [0x00, 0xb7], translate: '' },
    { keyCode: '1', value: 'Mute', "hid":0x04, hidMap: [0x00, 0xe2], translate: '' },
    { keyCode: '1', value: 'Volume up', "hid":0x04, hidMap: [0x00, 0xe9], translate: '' },
    { keyCode: '1', value: 'Volume down', "hid":0x04, hidMap: [0x00, 0xea], translate: '' },
    { keyCode: '1', value: 'Next track', "hid":0x04, hidMap: [0x00, 0xb5], translate: '' },
    { keyCode: '1', value: 'Previous track', "hid":0x04, hidMap: [0x00, 0xb6], translate: '' },
]
var WindowsMapping = [
    { keyCode: '1', value: 'None', "hid":0x04, hidMap: [0x00, 0x00], translate: '' },
    { keyCode: '1', value: 'Email', "hid":0x04, hidMap: [0x01, 0x8a], translate: '' },
    { keyCode: '1', value: 'Calculator', "hid":0x04, hidMap: [0x01, 0x92], translate: '' },
    { keyCode: '1', value: 'My Computer', "hid":0x04, hidMap: [0x01, 0x94], translate: '' },
    { keyCode: '1', value: 'Explorer', "hid":0x04, hidMap: [0x01, 0x94], translate: '' },
    { keyCode: '1', value: 'WWW Home', "hid":0x04, hidMap: [0x02, 0x23], translate: '' },
    { keyCode: '1', value: 'WWW Refresh', "hid":0x04, hidMap: [0x02, 0x27], translate: '' },
    { keyCode: '1', value: 'WWW Stop', "hid":0x04, hidMap: [0x02, 0x26], translate: '' },
    { keyCode: '1', value: 'WWW Back', "hid":0x04, hidMap: [0x02, 0x24], translate: '' },
    { keyCode: '1', value: 'WWW Forward', "hid":0x04, hidMap: [0x02, 0x25], translate: '' },
    { keyCode: '1', value: 'WWW Search', "hid":0x04, hidMap: [0x02, 0x21], translate: '' },
]

var Shortcuts_WindowsMapping=[
    {"keyCode":"Shortcuts_Fun_25","functionType":"Shortcuts","value":"Email","hid":17,"translate":"Email","code":"Shortcuts_Fun_25"},
    {"keyCode":"Shortcuts_Fun_26","functionType":"Shortcuts","value":"Calculator","hid":16,"translate":"Calculator","code":"Shortcuts_Fun_26"},
    {"keyCode":"Shortcuts_Fun_27","functionType":"Shortcuts","value":"My Computer","hid":15,"translate":"My Computer","code":"Shortcuts_Fun_27"},
    {"keyCode":"Shortcuts_Fun_28","functionType":"Shortcuts","value":"Explorer","hid":15,"translate":"Explorer","code":"Shortcuts_Fun_28"},
    {"keyCode":"Shortcuts_Fun_29","functionType":"Shortcuts","value":"WWW Home","hid":8,"translate":"WWW Home","code":"Shortcuts_Fun_29"},
    {"keyCode":"Shortcuts_Fun_30","functionType":"Shortcuts","value":"WWW Refresh","hid":9,"translate":"WWW Refresh","code":"Shortcuts_Fun_30"},
    {"keyCode":"Shortcuts_Fun_31","functionType":"Shortcuts","value":"WWW Stop","hid":10,"translate":"WWW Stop","code":"Shortcuts_Fun_31"},
    {"keyCode":"Shortcuts_Fun_32","functionType":"Shortcuts","value":"WWW Back","hid":11,"translate":"WWW Back","code":"Shortcuts_Fun_32"},
    {"keyCode":"Shortcuts_Fun_33","functionType":"Shortcuts","value":"WWW Forward","hid":12,"translate":"WWW Forward","code":"Shortcuts_Fun_33"},
    {"keyCode":"Shortcuts_Fun_34","functionType":"Shortcuts","value":"WWW Search","hid":14,"translate":"WWW Search","code":"Shortcuts_Fun_34"},
]
var SupportLanguage = [
    { name: 'ENGLISH', value: 'en' },
    // {name:'繁體中文', value:"tw"},
    // {name:'简体中文', value:"cn"}
]

var AllFunctionMapping =[{"keyCode":"Multimedia_Fun_0","functionType":"Multimedia","value":"Media Player","hid":0,"translate":"Media Player","code":"Multimedia_Fun_0"},
{"keyCode":"Multimedia_Fun_1","functionType":"Multimedia","value":"Play/Pause","hid":1,"translate":"Play/Pause","code":"Multimedia_Fun_1"},
{"keyCode":"Multimedia_Fun_2","functionType":"Multimedia","value":"Next","hid":7,"translate":"Next","code":"Multimedia_Fun_2"},
{"keyCode":"Multimedia_Fun_3","functionType":"Multimedia","value":"Previous","hid":6,"translate":"Previous","code":"Multimedia_Fun_3"},
{"keyCode":"Multimedia_Fun_4","functionType":"Multimedia","value":"Stop","hid":5,"translate":"Stop","code":"Multimedia_Fun_4"},
{"keyCode":"Multimedia_Fun_5","functionType":"Multimedia","value":"Mute","hid":2,"translate":"Mute","code":"Multimedia_Fun_5"},
{"keyCode":"Multimedia_Fun_6","functionType":"Multimedia","value":"Volume up","hid":3,"translate":"Volume up","code":"Multimedia_Fun_6"},
{"keyCode":"Multimedia_Fun_7","functionType":"Multimedia","value":"Volume down","hid":4,"translate":"Volume down","code":"Multimedia_Fun_7"},
{"keyCode":"Multimedia_Fun_8","functionType":"Multimedia","value":"Next track","hid":7,"translate":"Next trac","code":"Multimedia_Fun_8"},
{"keyCode":"Multimedia_Fun_9","functionType":"Multimedia","value":"Previoustrack","hid":6,"translate":"Previoustrack","code":"Multimedia_Fun_9"},
{"keyCode":"KEYBOARD_Fun_10","functionType":"KEYBOARD","value":"Profilecycleup","hid":1,"translate":"Profilecycleup","code":"KEYBOARD_Fun_10"},
{"keyCode":"KEYBOARD_Fun_11","functionType":"KEYBOARD","value":"Profilecycledown","hid":2,"translate":"Profilecycledown","code":"KEYBOARD_Fun_11"},
{"keyCode":"KEYBOARD_Fun_12","functionType":"KEYBOARD","value":"Layercycleup","hid":3,"translate":"Layercycleup","code":"KEYBOARD_Fun_12"},
{"keyCode":"KEYBOARD_Fun_13","functionType":"KEYBOARD","value":"Layercycledown","hid":4,"translate":"Layercycledown","code":"KEYBOARD_Fun_13"},
{"keyCode":"MOUSE_Fun_14","functionType":"MOUSE","value":"Leftbutton","hid":1,"translate":"Leftbutton","code":"MOUSE_Fun_14"},
{"keyCode":"MOUSE_Fun_15","functionType":"MOUSE","value":"Rightbutton","hid":2,"translate":"Rightbutton","code":"MOUSE_Fun_15"},
{"keyCode":"MOUSE_Fun_16","functionType":"MOUSE","value":"Middlebutton","hid":3,"translate":"Middlebutton","code":"MOUSE_Fun_16"},
{"keyCode":"MOUSE_Fun_17","functionType":"MOUSE","value":"Forward","hid":5,"translate":"Forward","code":"MOUSE_Fun_17"},
{"keyCode":"MOUSE_Fun_18","functionType":"MOUSE","value":"Back","hid":4,"translate":"Back","code":"MOUSE_Fun_18"},
{"keyCode":"MOUSE_Fun_19","functionType":"MOUSE","value":"Scrollup","hid":6,"translate":"Scrollup","code":"MOUSE_Fun_19"},
{"keyCode":"MOUSE_Fun_20","functionType":"MOUSE","value":"Scrolldown","hid":7,"translate":"Scrolldown","code":"MOUSE_Fun_20"},
{"keyCode":"MOUSE_Fun_21","functionType":"MOUSE","value":"Profilecycleup","hid":1944,"translate":"Profilecycleup","code":"MOUSE_Fun_21"},
{"keyCode":"MOUSE_Fun_22","functionType":"MOUSE","value":"Profilecycledown","hid":1943,"translate":"Profilecycledown","code":"MOUSE_Fun_22"},
{"keyCode":"MOUSE_Fun_23","functionType":"MOUSE","value":"Batterystatuscheck","hid":1942,"translate":"Batterystatuscheck","code":"MOUSE_Fun_23"},
{"keyCode":"LaunchProgram","functionType":"LaunchProgram","value":"LaunchProgram","hid":1941,"translate":"LaunchProgram","code":"LaunchProgram"},
{"keyCode":"LaunchWebsite","functionType":"LaunchProgram","value":"LaunchWebsite","hid":1940,"translate":"LaunchWebsite","code":"LaunchWebsite"},
{"keyCode":"Shortcuts_Fun_25","functionType":"Shortcuts","value":"Email","hid":17,"translate":"Email","code":"Shortcuts_Fun_25"},
{"keyCode":"Shortcuts_Fun_26","functionType":"Shortcuts","value":"Calculator","hid":16,"translate":"Calculator","code":"Shortcuts_Fun_26"},
{"keyCode":"Shortcuts_Fun_27","functionType":"Shortcuts","value":"My Computer","hid":15,"translate":"My Computer","code":"Shortcuts_Fun_27"},
{"keyCode":"Shortcuts_Fun_28","functionType":"Shortcuts","value":"Explorer","hid":15,"translate":"Explorer","code":"Shortcuts_Fun_28"},
{"keyCode":"Shortcuts_Fun_29","functionType":"Shortcuts","value":"WWW Home","hid":8,"translate":"WWW Home","code":"Shortcuts_Fun_29"},
{"keyCode":"Shortcuts_Fun_30","functionType":"Shortcuts","value":"WWW Refresh","hid":9,"translate":"WWW Refresh","code":"Shortcuts_Fun_30"},
{"keyCode":"Shortcuts_Fun_31","functionType":"Shortcuts","value":"WWW Stop","hid":10,"translate":"WWW Stop","code":"Shortcuts_Fun_31"},
{"keyCode":"Shortcuts_Fun_32","functionType":"Shortcuts","value":"WWW Back","hid":11,"translate":"WWW Back","code":"Shortcuts_Fun_32"},
{"keyCode":"Shortcuts_Fun_33","functionType":"Shortcuts","value":"WWW Forward","hid":12,"translate":"WWW Forward","code":"Shortcuts_Fun_33"},
{"keyCode":"Shortcuts_Fun_34","functionType":"Shortcuts","value":"WWW Search","hid":14,"translate":"WWW Search","code":"Shortcuts_Fun_34"},
{"keyCode":"MacroFunction","functionType":"MacroFunction","value":"MacroFunction","hid":1923,"translate":"MacroFunction","code":"MacroFunction"},
{"keyCode":"ScrollWheel","functionType":"ScrollWheel","value":"ScrollWheel","hid":1922,"translate":"ScrollWheel","code":"ScrollWheel"},
{"keyCode":"Custom_Fnkey","functionType":"Custom_Fnkey","value":"FN","hid":"0x781","translate":"FN","code":"Custom_Fnkey"},
{"keyCode":"0","functionType":"Singlekey","value":"Left Click","hid":0xB0,"hid_ModelO:":0x01,"translate":"Left Click","code":"0"},
{"keyCode":"1","functionType":"Singlekey","value":"Scroll Click","hid":0xB2,"hid_ModelO:":0x03,"translate":"Scroll Click","code":"1"},
{"keyCode":"2","functionType":"Singlekey","value":"Right Click","hid":0xB1,"hid_ModelO:":0x02,"translate":"Right Click","code":"2"},
{"keyCode":"3","functionType":"Singlekey","value":"Back Key","hid": 0xB3,"hid_ModelO": 0x02, "translate":"Back Key","code":"3"},
{"keyCode":"4","functionType":"Singlekey","value":"Forward Key","hid": 0xB4,"hid_ModelO": 0x02,"translate":"Forward Key","code":"4"},
{"keyCode":"65","functionType":"Singlekey","value":"A","hid":0x04,"translate":"A","code":"KeyA"},
{"keyCode":"66","functionType":"Singlekey","value":"B","hid":0x05,"translate":"B","code":"KeyB"},
{"keyCode":"67","functionType":"Singlekey","value":"C","hid":0x06,"translate":"C","code":"KeyC"},
{"keyCode":"68","functionType":"Singlekey","value":"D","hid":0x07,"translate":"D","code":"KeyD"},
{"keyCode":"69","functionType":"Singlekey","value":"E","hid":0x08,"translate":"E","code":"KeyE"},
{"keyCode":"70","functionType":"Singlekey","value":"F","hid":0x09,"translate":"F","code":"KeyF"},
{"keyCode":"71","functionType":"Singlekey","value":"G","hid":0x0A,"translate":"G","code":"KeyG"},
{"keyCode":"72","functionType":"Singlekey","value":"H","hid":0x0B,"translate":"H","code":"KeyH"},
{"keyCode":"73","functionType":"Singlekey","value":"I","hid":0x0C,"translate":"I","code":"KeyI"},
{"keyCode":"74","functionType":"Singlekey","value":"J","hid":0x0D,"translate":"J","code":"KeyJ"},
{"keyCode":"75","functionType":"Singlekey","value":"K","hid":0x0E,"translate":"K","code":"KeyK"},
{"keyCode":"76","functionType":"Singlekey","value":"L","hid":0x0F,"translate":"L","code":"KeyL"},
{"keyCode":"77","functionType":"Singlekey","value":"M","hid":0x10,"translate":"M","code":"KeyM"},
{"keyCode":"78","functionType":"Singlekey","value":"N","hid":0x11,"translate":"N","code":"KeyN"},
{"keyCode":"79","functionType":"Singlekey","value":"O","hid":0x12,"translate":"O","code":"KeyO"},
{"keyCode":"80","functionType":"Singlekey","value":"P","hid":0x13,"translate":"P","code":"KeyP"},
{"keyCode":"81","functionType":"Singlekey","value":"Q","hid":0x14,"translate":"Q","code":"KeyQ"},
{"keyCode":"82","functionType":"Singlekey","value":"R","hid":0x15,"translate":"R","code":"KeyR"},
{"keyCode":"83","functionType":"Singlekey","value":"S","hid":0x16,"translate":"S","code":"KeyS"},
{"keyCode":"84","functionType":"Singlekey","value":"T","hid":0x17,"translate":"T","code":"KeyT"},
{"keyCode":"85","functionType":"Singlekey","value":"U","hid":0x18,"translate":"U","code":"KeyU"},
{"keyCode":"86","functionType":"Singlekey","value":"V","hid":0x19,"translate":"V","code":"KeyV"},
{"keyCode":"87","functionType":"Singlekey","value":"W","hid":0x1A,"translate":"W","code":"KeyW"},
{"keyCode":"88","functionType":"Singlekey","value":"X","hid":0x1B,"translate":"X","code":"KeyX"},
{"keyCode":"89","functionType":"Singlekey","value":"Y","hid":0x1C,"translate":"Y","code":"KeyY"},
{"keyCode":"90","functionType":"Singlekey","value":"Z","hid":0x1D,"translate":"Z","code":"KeyZ"},
{"keyCode":"48","functionType":"Singlekey","value":"0","hid":0x27,"translate":"0","code":"Digit0"},
{"keyCode":"49","functionType":"Singlekey","value":"1","hid":0x1E,"translate":"1","code":"Digit1"},
{"keyCode":"50","functionType":"Singlekey","value":"2","hid":0x1F,"translate":"2","code":"Digit2"},
{"keyCode":"51","functionType":"Singlekey","value":"3","hid":0x20,"translate":"3","code":"Digit3"},
{"keyCode":"52","functionType":"Singlekey","value":"4","hid":0x21,"translate":"4","code":"Digit4"},
{"keyCode":"53","functionType":"Singlekey","value":"5","hid":0x22,"translate":"5","code":"Digit5"},
{"keyCode":"54","functionType":"Singlekey","value":"6","hid":0x23,"translate":"6","code":"Digit6"},
{"keyCode":"55","functionType":"Singlekey","value":"7","hid":0x24,"translate":"7","code":"Digit7"},
{"keyCode":"56","functionType":"Singlekey","value":"8","hid":0x25,"translate":"8","code":"Digit8"},
{"keyCode":"57","functionType":"Singlekey","value":"9","hid":0x26,"translate":"9","code":"Digit9"},
{"keyCode":"8","functionType":"Singlekey","value":"Backspace","hid":42,"translate":"Backspace","code":"Backspace"},
{"keyCode":"9","functionType":"Singlekey","value":"Tab","hid":43,"translate":"Tab","code":"Tab"},
{"keyCode":"144","functionType":"Singlekey","value":"Num Lock","hid":83,"translate":"Num Lock","code":"NumLock"},
{"keyCode":"13","functionType":"Singlekey","value":"Enter","hid":40,"translate":"Enter","code":"Enter"},
{"keyCode":"16","functionType":"Singlekey","value":"Shift","hid":225,"translate":"Shift","code":"ShiftRight"},
{"keyCode":"16","functionType":"Singlekey","value":"Shift","hid":225,"translate":"Shift","code":"ShiftLeft"},
{"keyCode":"17","functionType":"Singlekey","value":"Ctrl","hid":224,"translate":"Ctrl","code":"ControlLeft"},
{"keyCode":"17","functionType":"Singlekey","value":"Ctrl","hid":224,"translate":"Ctrl","code":"ControlRight"},
{"keyCode":"18","functionType":"Singlekey","value":"Alt","hid":226,"translate":"Alt","code":"AltRight"},
{"keyCode":"18","functionType":"Singlekey","value":"Alt","hid":226,"translate":"Alt","code":"AltLeft"},
{"keyCode":"19","functionType":"Singlekey","value":"Break","hid":72,"translate":"Break","code":"Pause"},
{"keyCode":"20","functionType":"Singlekey","value":"CapsLock","hid":57,"translate":"CapsLock","code":"CapsLock"},
{"keyCode":"27","functionType":"Singlekey","value":"Esc","hid":41,"translate":"Esc","code":"Escape"},
{"keyCode":"32","functionType":"Singlekey","value":"Space","hid":44,"translate":"Space","code":"Space"},
{"keyCode":"33","functionType":"Singlekey","value":"PageUp","hid":75,"translate":"PageUp","code":"PageUp"},
{"keyCode":"34","functionType":"Singlekey","value":"PageDown","hid":78,"translate":"PageDown","code":"PageDown"},
{"keyCode":"35","functionType":"Singlekey","value":"End","hid":77,"translate":"End","code":"End"},
{"keyCode":"36","functionType":"Singlekey","value":"Home","hid":74,"translate":"Home","code":"Home"},
{"keyCode":"37","functionType":"Singlekey","value":"Left","hid":80,"translate":"Left","code":"ArrowLeft"},
{"keyCode":"38","functionType":"Singlekey","value":"Up","hid":82,"translate":"Up","code":"ArrowUp"},
{"keyCode":"39","functionType":"Singlekey","value":"Right","hid":79,"translate":"Right","code":"ArrowRight"},
{"keyCode":"40","functionType":"Singlekey","value":"Down","hid":81,"translate":"Down","code":"ArrowDown"},
{"keyCode":"44","functionType":"Singlekey","value":"PrintScreen","hid":"0x46","translate":"PrintScreen","code":"PrintScreen"},
{"keyCode":"45","functionType":"Singlekey","value":"Insert","hid":73,"translate":"Insert","code":"Insert"},
{"keyCode":"46","functionType":"Singlekey","value":"Delete","hid":76,"translate":"Delete","code":"Delete"},
{"keyCode":"91","functionType":"Singlekey","value":"Left Win","hid":227,"translate":"Left Win","code":"MetaLeft"},
{"keyCode":"92","functionType":"Singlekey","value":"Right Win","hid":231,"translate":"Right Win"},
{"keyCode":"93","functionType":"Singlekey","value":"Menu","hid":101,"translate":"Menu","code":"ContextMenu"},
{"keyCode":"96","functionType":"Singlekey","value":"Numpad0","hid":0x62,"translate":"Numpad0","code":"Numpad0"},
{"keyCode":"97","functionType":"Singlekey","value":"Numpad1","hid":0x59,"translate":"Numpad1","code":"Numpad1"},
{"keyCode":"98","functionType":"Singlekey","value":"Numpad2","hid":0x5a,"translate":"Numpad2","code":"Numpad2"},
{"keyCode":"99","functionType":"Singlekey","value":"Numpad3","hid":0x5b,"translate":"Numpad3","code":"Numpad3"},
{"keyCode":"100","functionType":"Singlekey","value":"Numpad4","hid":0x5c,"translate":"Numpad4","code":"Numpad4"},
{"keyCode":"101","functionType":"Singlekey","value":"Numpad5","hid":0x5d,"translate":"Numpad5","code":"Numpad5"},
{"keyCode":"102","functionType":"Singlekey","value":"Numpad6","hid":0x5e,"translate":"Numpad6","code":"Numpad6"},
{"keyCode":"103","functionType":"Singlekey","value":"Numpad7","hid":0x5f,"translate":"Numpad7","code":"Numpad7"},
{"keyCode":"104","functionType":"Singlekey","value":"Numpad8","hid":0x60,"translate":"Numpad8","code":"Numpad8"},
{"keyCode":"105","functionType":"Singlekey","value":"Numpad9","hid":0x61,"translate":"Numpad9","code":"Numpad9"},
{"keyCode":"13","functionType":"Singlekey","value":"NumpadEnter","hid":0x58,"translate":"NumpadEnter","code":"NumpadEnter"},
{"keyCode":"106","functionType":"Singlekey","value":"*","hid":85,"translate":"*","code":"NumpadMultiply"},
{"keyCode":"107","functionType":"Singlekey","value":"+","hid":87,"translate":"+","code":"NumpadAdd"},
{"keyCode":"109","functionType":"Singlekey","value":"-","hid":86,"translate":"-","code":"NumpadSubtract"},
{"keyCode":"111","functionType":"Singlekey","value":"/","hid":84,"translate":"/","code":"NumpadDivide"},
{"keyCode":"112","functionType":"Singlekey","value":"F1","hid":0x3A,"translate":"F1","code":"F1"},
{"keyCode":"113","functionType":"Singlekey","value":"F2","hid":0x3B,"translate":"F2","code":"F2"},
{"keyCode":"114","functionType":"Singlekey","value":"F3","hid":0x3C,"translate":"F3","code":"F3"},
{"keyCode":"115","functionType":"Singlekey","value":"F4","hid":0x3D,"translate":"F4","code":"F4"},
{"keyCode":"116","functionType":"Singlekey","value":"F5","hid":0x3E,"translate":"F5","code":"F5"},
{"keyCode":"117","functionType":"Singlekey","value":"F6","hid":0x3F,"translate":"F6","code":"F6"},
{"keyCode":"118","functionType":"Singlekey","value":"F7","hid":0x40,"translate":"F7","code":"F7"},
{"keyCode":"119","functionType":"Singlekey","value":"F8","hid":0x41,"translate":"F8","code":"F8"},
{"keyCode":"120","functionType":"Singlekey","value":"F9","hid":0x42,"translate":"F9","code":"F9"},
{"keyCode":"121","functionType":"Singlekey","value":"F10","hid":0x43,"translate":"F10","code":"F10"},
{"keyCode":"122","functionType":"Singlekey","value":"F11","hid":0x44,"translate":"F11","code":"F11"},
{"keyCode":"123","functionType":"Singlekey","value":"F12","hid":0x45,"translate":"F12","code":"F12"},
{"keyCode":"145","functionType":"Singlekey","value":"Scroll Lock","hid":71,"translate":"Scroll Lock","code":"ScrollLock"},
{"keyCode":"186","functionType":"Singlekey","value":";","hid":51,"translate":";","code":"Semicolon"},
{"keyCode":"187","functionType":"Singlekey","value":"=","hid":46,"translate":"=","code":"Equal"},
{"keyCode":"188","functionType":"Singlekey","value":",","hid":54,"translate":",","code":"Comma"},
{"keyCode":"189","functionType":"Singlekey","value":"-","hid":45,"translate":"-","code":"Minus"},
{"keyCode":"190","functionType":"Singlekey","value":"dot","hid":55,"translate":"dot","code":"Period"},
{"keyCode":"191","functionType":"Singlekey","value":"/","hid":56,"translate":"/","code":"Slash"},
{"keyCode":"192","functionType":"Singlekey","value":"~","hid":53,"translate":"~","code":"Backquote"},
{"keyCode":"219","functionType":"Singlekey","value":"[","hid":47,"translate":"[","code":"BracketLeft"},
{"keyCode":"220","functionType":"Singlekey","value":"|","hid":49,"translate":"|","code":"Backslash"},
{"keyCode":"221","functionType":"Singlekey","value":"]","hid":48,"translate":"]","code":"BracketRight"},
{"keyCode":"222","functionType":"Singlekey","value":"'","hid":52,"translate":"'","code":"Quote"}]





exports.KeyMapping = KeyMapping
exports.MediaMapping = MediaMapping
exports.WindowsMapping = WindowsMapping
exports.AllFunctionMapping = AllFunctionMapping
exports.Shortcuts_WindowsMapping = Shortcuts_WindowsMapping
exports.SupportLanguage = SupportLanguage

function ProfileDefault() {
    var Profile_Info_Default = {
        //ProfileID:1,
        MousePerformance: {
            iStage: 1,
            iXYSync: 2,
            iPollingRate: 500,
            iCalibration: 1,
        },
        MouseLighting: {
            Amplitude: 2500,
            Angle: 1,
            bQuickEffect: false,
            ColorNumber: 5,
            Decay: 50,
            Fire: 5,
            iBrightness: 50,
            iEffect: 1,
            iSpeed: 50,
            Width: 3,
        },
        MouseBtnList: [
            { id: 1, group: 1, function: 1, name: 'Left button' },
            { id: 2, group: 1, function: 2, name: 'Right button' },
            { id: 3, group: 1, function: 3, name: 'Middle button' },
            { id: 4, group: 4, function: 1, name: 'Lighting effect switch' },
            { id: 5, group: 1, function: 10, name: 'DPI increase loop' },
            { id: 6, group: 1, function: 4, name: 'Forward button' },
            { id: 7, group: 1, function: 5, name: 'Backward button' },
            { id: 8, group: 1, function: 13, name: 'Squeeze' },
        ],
    }
    return Profile_Info_Default
}
exports.ProfileDefault = ProfileDefault

var CountryCode = [
    { code: 'AF', value: 'Afghanistan' },
    { code: 'AX', value: 'Åland Islands' },
    { code: 'AL', value: 'Albania' },
    { code: 'DZ', value: 'Algeria' },
    { code: 'AS', value: 'American Samoa' },
    { code: 'AD', value: 'Andorra' },
    { code: 'AO', value: 'Angola' },
    { code: 'AI', value: 'Anguilla' },
    { code: 'AQ', value: 'Antarctica' },
    { code: 'AG', value: 'Antigua and Barbuda' },
    { code: 'AR', value: 'Argentina' },
    { code: 'AM', value: 'Armenia' },
    { code: 'AW', value: 'Aruba' },
    { code: 'AU', value: 'Australia' },
    { code: 'AT', value: 'Austria' },
    { code: 'AZ', value: 'Azerbaijan' },
    { code: 'BS', value: 'Bahamas' },
    { code: 'BH', value: 'Bahrain' },
    { code: 'BD', value: 'Bangladesh' },
    { code: 'BB', value: 'Barbados' },
    { code: 'BY', value: 'Belarus' },
    { code: 'BE', value: 'Belgium' },
    { code: 'BZ', value: 'Belize' },
    { code: 'BJ', value: 'Benin' },
    { code: 'BM', value: 'Bermuda' },
    { code: 'BT', value: 'Bhutan' },
    { code: 'BO', value: 'Bolivia, Plurinational State of' },
    { code: 'BQ', value: 'Bonaire, Sint Eustatius and Saba' },
    { code: 'BA', value: 'Bosnia and Herzegovina' },
    { code: 'BW', value: 'Botswana' },
    { code: 'BV', value: 'Bouvet Island' },
    { code: 'BR', value: 'Brazil' },
    { code: 'IO', value: 'British Indian Ocean Territory' },
    { code: 'BN', value: 'Brunei Darussalam' },
    { code: 'BG', value: 'Bulgaria' },
    { code: 'BF', value: 'Burkina Faso' },
    { code: 'BI', value: 'Burundi' },
    { code: 'KH', value: 'Cambodia' },
    { code: 'CM', value: 'Cameroon' },
    { code: 'CA', value: 'Canada' },
    { code: 'CV', value: 'Cape Verde' },
    { code: 'KY', value: 'Cayman Islands' },
    { code: 'CF', value: 'Central African Republic' },
    { code: 'TD', value: 'Chad' },
    { code: 'CL', value: 'Chile' },
    { code: 'CN', value: 'China' },
    { code: 'CX', value: 'Christmas Island' },
    { code: 'CC', value: 'Cocos (Keeling) Islands' },
    { code: 'CO', value: 'Colombia' },
    { code: 'KM', value: 'Comoros' },
    { code: 'CG', value: 'Congo' },
    { code: 'CD', value: 'Congo, the Democratic Republic of the' },
    { code: 'CK', value: 'Cook Islands' },
    { code: 'CR', value: 'Costa Rica' },
    { code: 'CI', value: "Côte d'Ivoire" },
    { code: 'HR', value: 'Croatia' },
    { code: 'CU', value: 'Cuba' },
    { code: 'CW', value: 'Curaçao' },
    { code: 'CY', value: 'Cyprus' },
    { code: 'CZ', value: 'Czech Republic' },
    { code: 'DK', value: 'Denmark' },
    { code: 'DJ', value: 'Djibouti' },
    { code: 'DM', value: 'Dominica' },
    { code: 'DO', value: 'Dominican Republic' },
    { code: 'EC', value: 'Ecuador' },
    { code: 'EG', value: 'Egypt' },
    { code: 'SV', value: 'El Salvador' },
    { code: 'GQ', value: 'Equatorial Guinea' },
    { code: 'ER', value: 'Eritrea' },
    { code: 'EE', value: 'Estonia' },
    { code: 'ET', value: 'Ethiopia' },
    { code: 'FK', value: 'Falkland Islands (Malvinas)' },
    { code: 'FO', value: 'Faroe Islands' },
    { code: 'FJ', value: 'Fiji' },
    { code: 'FI', value: 'Finland' },
    { code: 'FR', value: 'France' },
    { code: 'GF', value: 'French Guiana' },
    { code: 'PF', value: 'French Polynesia' },
    { code: 'TF', value: 'French Southern Territories' },
    { code: 'GA', value: 'Gabon' },
    { code: 'GM', value: 'Gambia' },
    { code: 'GE', value: 'Georgia' },
    { code: 'DE', value: 'Germany' },
    { code: 'GH', value: 'Ghana' },
    { code: 'GI', value: 'Gibraltar' },
    { code: 'GR', value: 'Greece' },
    { code: 'GL', value: 'Greenland' },
    { code: 'GD', value: 'Grenada' },
    { code: 'GP', value: 'Guadeloupe' },
    { code: 'GU', value: 'Guam' },
    { code: 'GT', value: 'Guatemala' },
    { code: 'GG', value: 'Guernsey' },
    { code: 'GN', value: 'Guinea' },
    { code: 'GW', value: 'Guinea-Bissau' },
    { code: 'GY', value: 'Guyana' },
    { code: 'HT', value: 'Haiti' },
    { code: 'HM', value: 'Heard Island and McDonald Islands' },
    { code: 'VA', value: 'Holy See (Vatican City State)' },
    { code: 'HN', value: 'Honduras' },
    { code: 'HK', value: 'Hong Kong' },
    { code: 'HU', value: 'Hungary' },
    { code: 'IS', value: 'Iceland' },
    { code: 'IN', value: 'India' },
    { code: 'ID', value: 'Indonesia' },
    { code: 'IR', value: 'Iran, Islamic Republic of' },
    { code: 'IQ', value: 'Iraq' },
    { code: 'IE', value: 'Ireland' },
    { code: 'IM', value: 'Isle of Man' },
    { code: 'IL', value: 'Israel' },
    { code: 'IT', value: 'Italy' },
    { code: 'JM', value: 'Jamaica' },
    { code: 'JP', value: 'Japan' },
    { code: 'JE', value: 'Jersey' },
    { code: 'JO', value: 'Jordan' },
    { code: 'KZ', value: 'Kazakhstan' },
    { code: 'KE', value: 'Kenya' },
    { code: 'KI', value: 'Kiribati' },
    { code: 'KP', value: "Korea, Democratic People's Republic of" },
    { code: 'KR', value: 'Korea, Republic of' },
    { code: 'KW', value: 'Kuwait' },
    { code: 'KG', value: 'Kyrgyzstan' },
    { code: 'LA', value: "Lao People's Democratic Republic" },
    { code: 'LV', value: 'Latvia' },
    { code: 'LB', value: 'Lebanon' },
    { code: 'LS', value: 'Lesotho' },
    { code: 'LR', value: 'Liberia' },
    { code: 'LY', value: 'Libya' },
    { code: 'LI', value: 'Liechtenstein' },
    { code: 'LT', value: 'Lithuania' },
    { code: 'LU', value: 'Luxembourg' },
    { code: 'MO', value: 'Macao' },
    { code: 'MK', value: 'Macedonia, the former Yugoslav Republic of' },
    { code: 'MG', value: 'Madagascar' },
    { code: 'MW', value: 'Malawi' },
    { code: 'MY', value: 'Malaysia' },
    { code: 'MV', value: 'Maldives' },
    { code: 'ML', value: 'Mali' },
    { code: 'MT', value: 'Malta' },
    { code: 'MH', value: 'Marshall Islands' },
    { code: 'MQ', value: 'Martinique' },
    { code: 'MR', value: 'Mauritania' },
    { code: 'MU', value: 'Mauritius' },
    { code: 'YT', value: 'Mayotte' },
    { code: 'MX', value: 'Mexico' },
    { code: 'FM', value: 'Micronesia, Federated States of' },
    { code: 'MD', value: 'Moldova, Republic of' },
    { code: 'MC', value: 'Monaco' },
    { code: 'MN', value: 'Mongolia' },
    { code: 'ME', value: 'Montenegro' },
    { code: 'MS', value: 'Montserrat' },
    { code: 'MA', value: 'Morocco' },
    { code: 'MZ', value: 'Mozambique' },
    { code: 'MM', value: 'Myanmar' },
    { code: 'NA', value: 'Namibia' },
    { code: 'NR', value: 'Nauru' },
    { code: 'NP', value: 'Nepal' },
    { code: 'NL', value: 'Netherlands' },
    { code: 'NC', value: 'New Caledonia' },
    { code: 'NZ', value: 'New Zealand' },
    { code: 'NI', value: 'Nicaragua' },
    { code: 'NE', value: 'Niger' },
    { code: 'NG', value: 'Nigeria' },
    { code: 'NU', value: 'Niue' },
    { code: 'NF', value: 'Norfolk Island' },
    { code: 'MP', value: 'Northern Mariana Islands' },
    { code: 'NO', value: 'Norway' },
    { code: 'OM', value: 'Oman' },
    { code: 'PK', value: 'Pakistan' },
    { code: 'PW', value: 'Palau' },
    { code: 'PS', value: 'Palestinian Territory, Occupied' },
    { code: 'PA', value: 'Panama' },
    { code: 'PG', value: 'Papua New Guinea' },
    { code: 'PY', value: 'Paraguay' },
    { code: 'PE', value: 'Peru' },
    { code: 'PH', value: 'Philippines' },
    { code: 'PN', value: 'Pitcairn' },
    { code: 'PL', value: 'Poland' },
    { code: 'PT', value: 'Portugal' },
    { code: 'PR', value: 'Puerto Rico' },
    { code: 'QA', value: 'Qatar' },
    { code: 'RE', value: 'Réunion' },
    { code: 'RO', value: 'Romania' },
    { code: 'RU', value: 'Russian Federation' },
    { code: 'RW', value: 'Rwanda' },
    { code: 'BL', value: 'Saint Barthélemy' },
    { code: 'SH', value: 'Saint Helena, Ascension and Tristan da Cunha' },
    { code: 'KN', value: 'Saint Kitts and Nevis' },
    { code: 'LC', value: 'Saint Lucia' },
    { code: 'MF', value: 'Saint Martin (French part)' },
    { code: 'PM', value: 'Saint Pierre and Miquelon' },
    { code: 'VC', value: 'Saint Vincent and the Grenadines' },
    { code: 'WS', value: 'Samoa' },
    { code: 'SM', value: 'San Marino' },
    { code: 'ST', value: 'Sao Tome and Principe' },
    { code: 'SA', value: 'Saudi Arabia' },
    { code: 'SN', value: 'Senegal' },
    { code: 'RS', value: 'Serbia' },
    { code: 'SC', value: 'Seychelles' },
    { code: 'SL', value: 'Sierra Leone' },
    { code: 'SG', value: 'Singapore' },
    { code: 'SX', value: 'Sint Maarten (Dutch part)' },
    { code: 'SK', value: 'Slovakia' },
    { code: 'SI', value: 'Slovenia' },
    { code: 'SB', value: 'Solomon Islands' },
    { code: 'SO', value: 'Somalia' },
    { code: 'ZA', value: 'South Africa' },
    { code: 'GS', value: 'South Georgia and the South Sandwich Islands' },
    { code: 'SS', value: 'South Sudan' },
    { code: 'ES', value: 'Spain' },
    { code: 'LK', value: 'Sri Lanka' },
    { code: 'SD', value: 'Sudan' },
    { code: 'SR', value: 'Suriname' },
    { code: 'SJ', value: 'Svalbard and Jan Mayen' },
    { code: 'SZ', value: 'Swaziland' },
    { code: 'SE', value: 'Sweden' },
    { code: 'CH', value: 'Switzerland' },
    { code: 'SY', value: 'Syrian Arab Republic' },
    { code: 'TW', value: 'Taiwan, Province of China' },
    { code: 'TJ', value: 'Tajikistan' },
    { code: 'TZ', value: 'Tanzania, United Republic of' },
    { code: 'TH', value: 'Thailand' },
    { code: 'TL', value: 'Timor-Leste' },
    { code: 'TG', value: 'Togo' },
    { code: 'TK', value: 'Tokelau' },
    { code: 'TO', value: 'Tonga' },
    { code: 'TT', value: 'Trinidad and Tobago' },
    { code: 'TN', value: 'Tunisia' },
    { code: 'TR', value: 'Turkey' },
    { code: 'TM', value: 'Turkmenistan' },
    { code: 'TC', value: 'Turks and Caicos Islands' },
    { code: 'TV', value: 'Tuvalu' },
    { code: 'UG', value: 'Uganda' },
    { code: 'UA', value: 'Ukraine' },
    { code: 'AE', value: 'United Arab Emirates' },
    { code: 'GB', value: 'United Kingdom' },
    { code: 'US', value: 'United States' },
    { code: 'UM', value: 'United States Minor Outlying Islands' },
    { code: 'UY', value: 'Uruguay' },
    { code: 'UZ', value: 'Uzbekistan' },
    { code: 'VU', value: 'Vanuatu' },
    { code: 'VE', value: 'Venezuela, Bolivarian Republic of' },
    { code: 'VN', value: 'Viet Nam' },
    { code: 'VG', value: 'Virgin Islands, British' },
    { code: 'VI', value: 'Virgin Islands, U.S.' },
    { code: 'WF', value: 'Wallis and Futuna' },
    { code: 'EH', value: 'Western Sahara' },
    { code: 'YE', value: 'Yemen' },
    { code: 'ZM', value: 'Zambia' },
    { code: 'ZW', value: 'Zimbabwe' },
]

exports.CountryCode = CountryCode


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/keyboard/APModeModule.ts":
/*!**************************************!*\
  !*** ./src/keyboard/APModeModule.ts ***!
  \**************************************/
/*! exports provided: M_Light_CS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "M_Light_CS", function() { return M_Light_CS; });
/* harmony import */ var _BoxSelectionArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BoxSelectionArea */ "./src/keyboard/BoxSelectionArea.ts");
// HSL即色相、飽和度、亮度（英語：Hue, Saturation, Lightness）。
// HSV即色相、飽和度、明度（英語：Hue, Saturation, Value），又稱HSB其中B即英語：Brightness。
//Louis Architecture => Hex=>SET RGB=>SET HSV

var M_Light_CS = /** @class */ (function () {
    // x_Array=new Array(120);//8*26;
    // y_Array=new Array(120);//8*26;
    function M_Light_CS(inputMax) {
        //左上,右上,左下,右下
        this.maxkaycapNumber = 0;
        this.ledcoordinates = [];
        this.AllBlockColor = []; //TOTAL NUMBER
        this.animationSpeed = 1;
        this.currentBlockIndex = 0;
        this.minKeyWidth = 43;
        this.minKeyHeight = 41;
        this.settingPerkeyName = '';
        //mode_name:any=["波浪","撞擊","螺旋","循環","觸發","漣漪","呼吸","下雨","火焰","點亮","音樂"];
        this.imageMaxWidth = 0;
        this.imageMaxHeight = 0;
        this.recordModeArr = [];
        this.currentModeIndex = 0;
        this.BSApage1 = new _BoxSelectionArea__WEBPACK_IMPORTED_MODULE_0__["BoxSelectionArea"]('RGBColorBlockStyle');
        this.twoDimensionalArray = new Array(26); //8*26;
        this.breakGradation = [[0, 14], [15, 29], [30, 44], [45, 58], [59, 72], [73, 82]];
        this.qigong_Step2_Range = [22, 23, 38, 52, 51, 36];
        this.qigong_Step1_Range = [0, 15, 30, 58, 71, 82];
        this.centerBlockPoint = 37;
        this.break_DimensionalArray = [];
        this.max_X_Number = 26;
        this.max_Y_Number = 8;
        this.max_H_Number = 6;
        this.acceleration = 5;
        this.maxkaycapNumber = inputMax;
        for (var i_block = 0; i_block < this.maxkaycapNumber; i_block++) {
            this.AllBlockColor.push({ clearStatus: false, color: [0, 0, 0, 0], breathing: false, border: true, coordinateData: [], keyCode: '' });
        }
        for (var index = 0; index < this.twoDimensionalArray.length; index++) {
            this.twoDimensionalArray[index] = [];
        }
        //coordinate:
        for (var index = 0; index < this.twoDimensionalArray.length; index++) {
            //var temp_=new Array(26);
            for (var index2 = 0; index2 < 8; index2++) {
                //const element = array[index];
                this.twoDimensionalArray[index].push(this.defaultModule());
            }
        }
        //for (var i_block = 0; i_block < this.maxkaycapNumber; i_block++) {
        for (var index = 0; index < this.breakGradation.length; index++) {
            var min = this.breakGradation[index][0]; //14
            var max = this.breakGradation[index][1]; //29
            var total = max - min;
            // if (i_block >= min && i_block <= max) {
            //     this.twoDimensionalArray[index].index=i_block;
            // }
            for (var i3 = 0; i3 <= total; i3++) {
                this.twoDimensionalArray[i3][index].blockIndex = i3 + min;
                //console.log('twoDimensionalArray', this.twoDimensionalArray[index][i3]=i3+min);
            }
        }
        console.log('twoDimensionalArray', this.twoDimensionalArray);
    }
    M_Light_CS.prototype.defaultModule = function (type) {
        if (type === void 0) { type = ''; }
        var T = {
            blockIndex: 9999,
            color: [255, 0, 0, 1],
        };
        return T;
    };
    M_Light_CS.prototype.showTwoDimensionalArray = function () {
        for (var index = 0; index < this.twoDimensionalArray.length; index++) {
            //var temp_=new Array(26);
            for (var index2 = 0; index2 < 8; index2++) {
                //const element = array[index];
                var target = this.twoDimensionalArray[index][index2];
                if (target.blockIndex != 9999) {
                    this.AllBlockColor[target.blockIndex].color = target.color;
                }
            }
        }
    };
    M_Light_CS.prototype.resetTwoDimensionalArray = function (colors) {
        if (colors === void 0) { colors = [0, 0, 0, 1]; }
        for (var index = 0; index < this.twoDimensionalArray.length; index++) {
            //var temp_=new Array(26);
            for (var index2 = 0; index2 < this.twoDimensionalArray[index].length; index2++) {
                //const element = array[index];
                var target = this.twoDimensionalArray[index][index2];
                target.color = colors;
            }
        }
    };
    M_Light_CS.prototype.serCoordinateData = function (RGBList) {
        for (var index = 0; index < RGBList.length; index++) {
            var element = RGBList[index];
            //element.setAttribute('data-index', String(index));
            //element.setAttribute('coordinate', String(element));     
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
                "center_Point": [element.offsetLeft + (element.clientWidth / 2), element.offsetTop + (element.clientHeight / 2)],
            };
            this.AllBlockColor[index].coordinateData = obj;
        }
        console.log('serCoordinateData()', this.AllBlockColor);
    };
    M_Light_CS.prototype.setPerkey = function (index, Clear) {
        if (!Clear) {
            this.AllBlockColor[index].color = [0, 0, 0, 0];
            this.AllBlockColor[index].breathing = false;
        }
        else {
            this.AllBlockColor[index].color = JSON.parse(JSON.stringify(this.lightData.colorPickerValue));
            this.AllBlockColor[index].breathing = this.lightData.breathing;
            console.log('%c setPerkey', 'color:rgb(255,77,255)', this.AllBlockColor[index].breathing);
        }
    };
    M_Light_CS.prototype.setlightData = function (obj) {
        this.lightData = JSON.parse(JSON.stringify(obj));
    };
    M_Light_CS.prototype.resetDefault = function (resetData) {
        this.lightData = resetData;
        for (var i = 0; i < this.maxkaycapNumber; i++) {
            this.AllBlockColor[i].color = [0, 0, 0, 0];
        }
    };
    M_Light_CS.prototype.addBlockIndex = function () {
        if (this.currentBlockIndex < this.AllBlockColor.length - 1) {
            this.currentBlockIndex += 1;
        }
        else {
        }
    };
    M_Light_CS.prototype.setGroupArrayColor = function (groupArray, assignColor, isAll, clearStatus) {
        if (assignColor === void 0) { assignColor = []; }
        if (isAll === void 0) { isAll = false; }
        if (clearStatus === void 0) { clearStatus = false; }
        if (isAll) {
            groupArray = [];
            for (var i = 0; i < this.AllBlockColor.length; i++) {
                groupArray.push(i);
            }
        }
        if (assignColor.length < 1) {
            //console.log('setGroupArrayColor_assignColor', assignColor)
            assignColor = JSON.parse(JSON.stringify(this.lightData.colorPickerValue));
        }
        var target = this.AllBlockColor;
        var temp_Status = this.lightData.breathing;
        groupArray.forEach(function (value, index, array) {
            target[value].color = assignColor;
            target[value].breathing = temp_Status;
            target[value].clearStatus = clearStatus;
        });
    };
    M_Light_CS.prototype.subBlockIndex = function () {
        if (this.currentBlockIndex > 0) {
            this.currentBlockIndex -= 1;
        }
        else {
        }
    };
    M_Light_CS.prototype.setColorPickerValue = function (RGB_Arr) {
        var target = this.lightData.colorPickerValue;
        target[0] = RGB_Arr[0];
        target[1] = RGB_Arr[1];
        target[2] = RGB_Arr[2];
        target[3] = 1;
        this.lightData.colorHex = this.rgbToHex(target[0], target[1], target[2]);
    };
    M_Light_CS.prototype.rgbToHex = function (r, g, b) {
        r = Number(r);
        g = Number(g);
        b = Number(b);
        return "#" + this.componentToHex(r) + this.componentToHex(g) + this.componentToHex(b);
    };
    M_Light_CS.prototype.componentToHex = function (c) {
        var hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    };
    M_Light_CS.prototype.getNowBlock = function (index) {
        if (index === void 0) { index = -1; }
        if (index != -1) {
            return this.AllBlockColor[index];
        }
        else {
            return this.AllBlockColor[this.currentBlockIndex];
        }
    };
    M_Light_CS.prototype.ImportLedClassData = function (InputData) {
        console.log('ImportLedClassData', InputData);
        var arr = Object.keys(this.getTarget());
        for (var index = 0; index < arr.length; index++) {
            if (arr[index] != '') {
                this.getTarget()[arr[index]] = InputData[arr[index]];
            }
        }
    };
    M_Light_CS.prototype.ImportCreateLedData = function (InputData) {
        console.log('ImportCreateLedData', InputData);
        InputData = JSON.parse(JSON.stringify(InputData));
        this.recordModeArr.push(InputData);
    };
    M_Light_CS.prototype.getTarget = function () {
        //console.log(" this.recordModeArr[this.currentModeIndex];", this.recordModeArr[this.currentModeIndex]);
        return this.recordModeArr[this.currentModeIndex];
    };
    M_Light_CS.prototype.switchEffectMode = function (index) {
        // var clone = $.extend(
        //     true,
        //     Object.create(Object.getPrototypeOf(this.modeClassArr[index])),
        //     this.modeClassArr[index]
        // )
        // console.log('newSwitchEffectMode', clone)
        // this.recordModeArr[this.currentModeIndex] = clone
    };
    M_Light_CS.prototype.deleteChoose = function () {
        if (this.recordModeArr.length > 1) {
            this.recordModeArr.splice(this.currentModeIndex, 1);
        }
        if (this.currentModeIndex - 1 >= 0) {
            this.currentModeIndex -= 1;
        }
        this.updateframe_selection_range();
        console.log('deleteChoose', '=>currentModeIndex' + this.currentModeIndex);
    };
    M_Light_CS.prototype.addNewChoose = function () {
        if (this.recordModeArr.length > 10) {
            return;
        }
    };
    M_Light_CS.prototype.stringFormat = function () {
        if (arguments.length == 0)
            return null;
        var str = arguments[0];
        for (var i = 1; i < arguments.length; i++) {
            var re = new RegExp('\\{' + (i - 1) + '\\}', 'gm');
            str = str.replace(re, arguments[i]);
        }
        return str;
    };
    //原有邊框架構 因客戶要求不顯示邊框 這邊採用border判斷是否顯示此格
    M_Light_CS.prototype.updateframe_selection_range = function () {
    };
    M_Light_CS.prototype.distanceCalculation = function (x1, y1, x2, y2) {
        return Math.sqrt(Math.pow((x1 - x2), 2) + Math.pow((y1 - y2), 2)); //å…©é»žè·�é›¢
    };
    M_Light_CS.prototype.setNowLightMode = function () {
        var inputColor = [JSON.parse(JSON.stringify(this.lightData.colorPickerValue))];
        if (inputColor == undefined) {
            //this.lightData;
            console.log('%c setNowLightMode_undefined', 'color:rgb(255,77,255)', this.lightData);
            return;
        }
        this.setAnimationSpeed();
        clearInterval(this.repeater);
        this.setAllBlockColor([0, 0, 0, 1]);
        var target = this.lightData;
        switch (target.lightSelected.translate) {
            case 'GloriousMode':
                break;
            case 'Wave#1':
                //this.mode_Wave1(inputColor);
                break;
            case 'Wave#2':
                break;
            case 'SpiralingWave':
                break;
            case 'AcidMode':
                this.mode_AcidMode(inputColor);
                break;
            case 'Breathing':
                this.mode_Breathing(inputColor, target.isRainbow);
                break;
            case 'Breath':
                this.mode_Breath(inputColor, target.isRainbow);
                break;
            case 'NormallyOn':
                this.mode_NormallyOn(inputColor);
                break;
            case 'Matrix2':
                this.mode_Matrix2(inputColor, target.isRainbow);
                break;
            case 'Matrix3':
                this.mode_Matrix3(inputColor, target.isRainbow);
                break;
            case 'Rainbow':
                this.mode_Rainbow();
                break;
            case 'HeartbeatSensor':
                this.mode_HeartbeatSensor(inputColor);
                break;
            case 'DigitTimes':
                this.mode_DigitTimes(inputColor);
                break;
            case 'Kamehemeha':
                this.mode_Kamehemeha(inputColor, target.isRainbow);
                break;
            case 'Pingpong':
                this.mode_Pingpong(inputColor, target.isRainbow);
                break;
            case 'Surmount':
                this.mode_Surmount(inputColor, target.isRainbow, this.centerBlockPoint);
                break;
            case 'LEDOFF':
                this.mode_LEDOFF();
                break;
            case 'Starlight':
                this.mode_Starlight();
                break;
            case 'Snowing':
                this.mode_Snowing(inputColor, target.isRainbow);
                break;
            default:
                break;
        }
    };
    M_Light_CS.prototype.setPassiveEffects = function () {
        var inputColor = [JSON.parse(JSON.stringify(this.lightData.colorPickerValue))];
        if (inputColor == undefined) {
            //this.lightData;
            console.log('%c setPassiveEffects_undefined', 'color:rgb(255,77,255)', this.lightData);
            return;
        }
        var target = this.lightData;
        var index = this.currentBlockIndex;
        console.log('%c setPassiveEffects', 'color:rgb(255,77,255)', index);
        switch (target.lightSelected.translate) {
            case 'RippleGraff'://彩色擴散
                this.mode_RippleGraff(inputColor, target.isRainbow, index);
                break;
            case 'PassWithoutTrace'://單點
                this.mode_PassWithoutTrace(inputColor, index);
                break;
            case 'FastRunWithoutTrace'://一排
                this.mode_FastRunWithoutTrace(inputColor, false, index);
                break;
            case 'Cross'://十字
                this.mode_Cross(inputColor, false, index);
                break;
            case 'Blossom'://綻放
                this.mode_Blossom(inputColor, false, index);
                break;
            default:
                break;
        }
    };
    M_Light_CS.prototype.mode_NormallyOn = function (colors, isRainbow) {
        if (colors === void 0) { colors = [[0, 0, 0, 1]]; }
        if (isRainbow === void 0) { isRainbow = true; }
        clearInterval(this.repeater);
        var StartPoint = this.getNowBlock(50).coordinateData;
        //this.setAllBlockColor([0, 0, 255, 1]);
        this.setAllBlockColor(colors[this.getRandom(0, colors.length - 1)]);
        var repeatCountList = [];
        var target = this.AllBlockColor;
        var setRGB;
        var repeatCircleCount = 0;
        for (var i_compare = 0; i_compare < this.imageMaxWidth; i_compare += this.minKeyWidth) {
            //const element = array[index];
            if (isRainbow) {
                setRGB = this.rainbow7Color()[this.getRandom(0, colors.length - 1)];
            }
            else {
                setRGB = [0, 0, 255, 1];
            }
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                var dis = this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                if (dis <= i_compare && dis >= i_compare - this.minKeyWidth) {
                    //element.color = setRGB;
                    repeatCountList.push({
                        color: setRGB,
                        recordIndex: index,
                        repeatTime: this.getRandom(5, 25),
                    });
                }
            }
        }
        this.repeater = setInterval(function () {
        }, 50);
        //clearInterval(this.repeater);
    };
    M_Light_CS.prototype.mode_AcidMode = function (colors) {
        var _this = this;
        if (colors === void 0) { colors = []; }
        clearInterval(this.repeater);
        //colors = this.rainbow7Color();
        colors = [[255, 0, 0, 1], [0, 255, 0, 1], [0, 0, 255, 1]];
        var repeatCount = 0;
        var StartPoint = this.getNowBlock(50).coordinateData;
        var mode_step = 0;
        var step = 60;
        var nowStep = 0;
        this.setAllBlockColor([0, 0, 0, 1]);
        var repeatCountList = [];
        var target = this.AllBlockColor;
        var setRGB = this.rainbow7Color();
        var repeatCircleCount = 0;
        for (var i_compare = 0; i_compare < this.imageMaxWidth; i_compare += this.minKeyWidth) {
            //const element = array[index];
            //setRGB = [0, 0, 255, 1];
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                var dis = this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                if (dis <= i_compare && dis >= i_compare - this.minKeyWidth) {
                    repeatCountList.push({
                        color: colors[0],
                        recordIndex: index,
                        repeatTime: this.getRandom(5, 25),
                    });
                }
            }
        }
        console.log('repeatCountList', repeatCountList);
        this.repeater = setInterval(function () {
            //this.mode_reset();
            var t_Count = repeatCount % 3;
            var t_Count2;
            if (t_Count + 1 < colors.length) {
                t_Count2 = t_Count + 1;
            }
            else {
                t_Count2 = 0;
            }
            //console.log('t_Count',t_Count, t_Count2);
            for (var index = 0; index < repeatCountList.length; index++) {
                //var nowColor=[JSON.parse(JSON.stringify(repeatCountList[index].color)),[0,0,0,1]];
                var nowColor = JSON.parse(JSON.stringify(colors));
                var t_data = [0, 0, 0, 1];
                t_data[0] = (nowColor[t_Count][0] * (step - nowStep) + nowColor[t_Count2][0] * nowStep) / step;
                t_data[1] = (nowColor[t_Count][1] * (step - nowStep) + nowColor[t_Count2][1] * nowStep) / step;
                t_data[2] = (nowColor[t_Count][2] * (step - nowStep) + nowColor[t_Count2][2] * nowStep) / step;
                var target = _this.AllBlockColor;
                target[repeatCountList[index].recordIndex].color = t_data;
                //console.log('element.color', t_data, step, nowStep)
            }
            if (nowStep < step - 1) {
                nowStep += 1;
            }
            else {
                nowStep = 0;
                repeatCount += 1;
                //repeatCount=0;            
            }
        }, 50 * this.animationSpeed);
    };
    M_Light_CS.prototype.setAnimationSpeed = function () {
        //this.acceleration
        this.animationSpeed = 1 * (1 - this.lightData.rate / 400);
    };
    M_Light_CS.prototype.mode_Kamehemeha = function (colors, isRainbow) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 0, 0, 1]]; }
        if (isRainbow === void 0) { isRainbow = true; }
        clearInterval(this.repeater);
        if (isRainbow) {
            colors = this.rainbow7Color();
        }
        var centerBlockIndex = this.centerBlockPoint;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock(this.centerBlockPoint).coordinateData;
        var mode_step = 0;
        var step = 60;
        var nowStep = 0;
        this.setAllBlockColor([0, 0, 0, 1]);
        var target = this.AllBlockColor;
        var setRGB = this.rainbow7Color();
        var setArray = JSON.parse(JSON.stringify(this.qigong_Step1_Range));
        this.repeater = setInterval(function () {
            //this.mode_reset();  
            //this.setAllBlockColor([0, 0, 0, 1]);
            for (var index = 0; index < setArray.length; index++) {
                target[setArray[index]].color = colors[_this.getRandom(0, colors.length - 1)];
            }
            for (var index = 0; index < setArray.length; index++) {
                if (setArray[index] < centerBlockIndex) {
                    setArray[index] += 1;
                }
                else {
                    setArray[index] -= 1;
                }
            }
            repeatCount += 1;
            if (repeatCount > 7) {
                if (isRainbow) {
                    _this.mode_Kamehemeha2(colors, true);
                }
                else {
                    _this.mode_Kamehemeha2(colors, false);
                }
                //this.mode_RippleGraff([],false,37);              
            }
        }, 55 * this.animationSpeed);
    };
    M_Light_CS.prototype.mode_Kamehemeha2 = function (colors, isRainbow) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 0, 0, 1], [0, 255, 0, 1], [0, 0, 255, 1]]; }
        if (isRainbow === void 0) { isRainbow = true; }
        clearInterval(this.repeater);
        //colors = this.rainbow7Color();
        var repeatCount = 0;
        var StartPoint = this.getNowBlock(this.centerBlockPoint).coordinateData;
        if (isRainbow) {
            colors = this.rainbow7Color();
        }
        var step = 60;
        var nowStep = 0;
        var qigongRangeIndex = [0];
        this.setAllBlockColor([0, 0, 0, 1]);
        var repeatCountList = [];
        var target = this.AllBlockColor;
        for (var index = 0; index < target.length; index++) {
            var element = target[index];
            var dis = this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
            if (dis > 5 && dis <= this.minKeyWidth * 1.5) {
                repeatCountList.push({
                    color: colors[0],
                    recordIndex: index,
                    repeatTime: this.getRandom(5, 25),
                });
            }
        }
        for (var i_compare = 0; i_compare < this.imageMaxHeight / 2; i_compare += this.minKeyHeight) {
        }
        //console.log('repeatCountList', repeatCountList)
        this.repeater = setInterval(function () {
            _this.setAllBlockColor([0, 0, 0, 1]);
            var target = _this.AllBlockColor;
            for (var index = 0; index < qigongRangeIndex.length; index++) {
                target[_this.qigong_Step2_Range[qigongRangeIndex[index]]].color = colors[_this.getRandom(0, colors.length - 1)];
            }
            for (var index = 0; index < qigongRangeIndex.length; index++) {
                if (qigongRangeIndex[index] < _this.qigong_Step2_Range.length - 1) {
                    qigongRangeIndex[index] += 1;
                }
                else {
                    qigongRangeIndex[index] = 0;
                }
            }
            repeatCount += 1;
            if (repeatCount > 27) {
                if (isRainbow) {
                    _this.mode_RippleGraff(colors, true, _this.centerBlockPoint);
                }
                else {
                    _this.mode_RippleGraff(colors, false, _this.centerBlockPoint);
                }
            }
        }, 50 * this.animationSpeed);
    };
    /**
     * 排列Array順序
     * @param array
     * @param key
     */
    M_Light_CS.prototype.ArraySort = function (array, key) {
        return array.sort(function (a, b) {
            var x = a[key];
            var y = b[key];
            return x - y;
        });
    };
    M_Light_CS.prototype.mode_Surmount = function (colors, isRainbow, blockIndex) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 0, 0, 1]]; }
        if (isRainbow === void 0) { isRainbow = true; }
        if (blockIndex === void 0) { blockIndex = 48; }
        console.log('%cmode_Surmount_enter', 'color:rgb(255,75,255,1)', colors, this.repeater);
        clearInterval(this.repeater);
        //colors = this.rainbow7Color();
        //this.rainbow7Color();
        //this.currentBlockIndex = 48;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock(blockIndex).coordinateData;
        //var setRGB=[255,0,0,1];
        var mode_step = 0;
        var step = 30;
        var nowStep = 0;
        this.setAllBlockColor([0, 0, 0, 1]);
        this.repeater = setInterval(function () {
            //this.mode_reset();
            var target = _this.AllBlockColor;
            var setRGB;
            if (isRainbow) {
                setRGB = _this.rainbow7Color()[_this.getRandom(0, colors.length - 1)];
            }
            else {
                setRGB = colors[_this.getRandom(0, colors.length - 1)];
            }
            var compareResult = _this.minKeyWidth * repeatCount;
            var compareResultMax = _this.minKeyWidth * repeatCount - _this.minKeyWidth;
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                var dis = _this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                //console.log('mode_step', mode_step)
                if (mode_step == 0) {
                    if (dis <= compareResult && dis >= compareResultMax) {
                        element.color = setRGB;
                    }
                }
                else {
                    clearInterval(_this.repeater);
                    // var T = JSON.parse(JSON.stringify(element.color));
                    // T[0] = (T[0] * (step - nowStep) + 0 * nowStep) / step;
                    // T[1] = (T[1] * (step - nowStep) + 0 * nowStep) / step;
                    // T[2] = (T[2] * (step - nowStep) + 0 * nowStep) / step;
                    // element.color = T;
                    //console.log('element.color', T, step, nowStep)
                }
            }
            if (nowStep + 1 < step) {
                nowStep += 1;
            }
            else {
                nowStep = 0;
                mode_step = 0;
                repeatCount = 0;
                clearInterval(_this.repeater);
                //console.log('nowStep_end', mode_step, repeatCount, nowStep)
                _this.setAllBlockColor([0, 0, 0, 1]);
                if (_this.lightData.lightSelected.value == 16) {
                    _this.mode_Kamehemeha(colors, isRainbow);
                }
            }
            if (_this.minKeyWidth * repeatCount < _this.imageMaxWidth) {
                repeatCount += 1;
                //console.log('repeatCount', repeatCount)
            }
            else {
                mode_step = 1;
                //this.setAllBlockColor([0,0,0,1]);
            }
        }, Math.pow(50, this.animationSpeed));
        //clearInterval(this.repeater);
    };
    M_Light_CS.prototype.mode_RippleGraff = function (colors, isRainbow, blockIndex) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 0, 0, 1]]; }
        if (isRainbow === void 0) { isRainbow = true; }
        if (blockIndex === void 0) { blockIndex = 48; }
        //console.log('%c mode_RippleGraff_enter','color:rgb(255,75,255,1)',colors,this.AllBlockColor);
        clearInterval(this.repeater);
        var repeatCount = 0;
        var StartPoint = this.getNowBlock(blockIndex).coordinateData;
        //var setRGB=[255,0,0,1];
        var mode_step = 0;
        var step = 30;
        var nowStep = 0;
        this.setAllBlockColor([0, 0, 0, 1]);
        this.repeater = setInterval(function () {
            //this.mode_reset();
            var target = _this.AllBlockColor;
            var setRGB;
            if (isRainbow) {
                setRGB = _this.rainbow7Color()[_this.getRandom(0, colors.length - 1)];
            }
            else {
                setRGB = colors[_this.getRandom(0, colors.length - 1)];
            }
            var compareResult = _this.minKeyWidth * repeatCount;
            var compareResultMax = _this.minKeyWidth * repeatCount - _this.minKeyWidth;
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                var dis = _this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                if (mode_step == 0) {
                    //console.log('mode_step', mode_step)
                    //console.log('%c mode_RippleGraff_dis.compareResult','color:rgb(255,75,255,1)',dis,compareResult,compareResultMax);
                    if (dis <= compareResult && dis >= compareResultMax) {
                        element.color = setRGB;
                    }
                }
                else {
                    var T = JSON.parse(JSON.stringify(element.color));
                    T[0] = (T[0] * (step - nowStep) + 0 * nowStep) / step;
                    T[1] = (T[1] * (step - nowStep) + 0 * nowStep) / step;
                    T[2] = (T[2] * (step - nowStep) + 0 * nowStep) / step;
                    element.color = T;
                    //console.log('element.color', T, step, nowStep)
                }
            }
            if (nowStep + 1 < step) {
                nowStep += 1;
            }
            else {
                nowStep = 0;
                mode_step = 0;
                repeatCount = 0;
                clearInterval(_this.repeater);
                //console.log('nowStep_end', mode_step, repeatCount, nowStep)
                _this.setAllBlockColor([0, 0, 0, 1]);
                if (_this.lightData.lightSelected.value == 16) {
                    _this.mode_Kamehemeha(colors, isRainbow);
                }
            }
            if (_this.minKeyWidth * repeatCount < _this.imageMaxWidth) {
                repeatCount += 1;
                //console.log('repeatCount', repeatCount)
            }
            else {
                mode_step = 1;
                //this.setAllBlockColor([0,0,0,1]);
            }
        }, Math.pow(50, this.animationSpeed));
        //clearInterval(this.repeater);
    };
    M_Light_CS.prototype.mode_Blossom = function (colors, isRainbow, blockIndex) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 0, 0, 1]]; }
        if (isRainbow === void 0) { isRainbow = true; }
        if (blockIndex === void 0) { blockIndex = 48; }
        //console.log('%c mode_RippleGraff_enter','color:rgb(255,75,255,1)',colors,this.AllBlockColor);
        clearInterval(this.repeater);
        //colors = this.rainbow7Color();
        //this.rainbow7Color();
        //this.currentBlockIndex = 48;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock(blockIndex).coordinateData;
        //var setRGB=[255,0,0,1];
        var mode_step = 0;
        var step = 30;
        var nowStep = 0;
        this.setAllBlockColor([0, 0, 0, 1]);
        this.repeater = setInterval(function () {
            //this.mode_reset();
            var target = _this.AllBlockColor;
            var setRGB;
            if (isRainbow) {
                setRGB = _this.rainbow7Color()[_this.getRandom(0, colors.length - 1)];
            }
            else {
                setRGB = colors[_this.getRandom(0, colors.length - 1)];
            }
            var compareResult = _this.minKeyWidth * repeatCount;
            var compareResultMax = _this.minKeyWidth * repeatCount - _this.minKeyWidth;
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                var dis = _this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                if (mode_step == 0) {
                    //console.log('mode_step', mode_step)
                    console.log('%c mode_Blossom', 'color:rgb(255,75,255,1)', dis, compareResult, compareResultMax);
                    if (dis <= compareResult && dis >= compareResultMax) {
                        element.color = setRGB;
                    }
                }
                else {
                    var T = JSON.parse(JSON.stringify(element.color));
                    T[0] = (T[0] * (step - nowStep) + 0 * nowStep) / step;
                    T[1] = (T[1] * (step - nowStep) + 0 * nowStep) / step;
                    T[2] = (T[2] * (step - nowStep) + 0 * nowStep) / step;
                    element.color = T;
                    //console.log('element.color', T, step, nowStep)
                }
            }
            if (nowStep + 1 < step) {
                nowStep += 1;
            }
            else {
                nowStep = 0;
                mode_step = 0;
                repeatCount = 0;
                clearInterval(_this.repeater);
                //console.log('nowStep_end', mode_step, repeatCount, nowStep)
                _this.setAllBlockColor([0, 0, 0, 1]);
                if (_this.lightData.lightSelected.value == 16) {
                    _this.mode_Kamehemeha(colors, isRainbow);
                }
            }
            if (_this.minKeyWidth * repeatCount < 100) {
                repeatCount += 1;
                //console.log('repeatCount', repeatCount)
            }
            else {
                mode_step = 1;
                //this.setAllBlockColor([0,0,0,1]);
            }
        }, 50 * this.animationSpeed);
        //clearInterval(this.repeater);
    };
    M_Light_CS.prototype.mode_Cross = function (colors, isRainbow, blockIndex) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 0, 0, 1]]; }
        if (isRainbow === void 0) { isRainbow = true; }
        if (blockIndex === void 0) { blockIndex = 48; }
        //console.log('%c mode_RippleGraff_enter','color:rgb(255,75,255,1)',colors,this.AllBlockColor);
        clearInterval(this.repeater);
        //colors = this.rainbow7Color();
        //this.rainbow7Color();
        //this.currentBlockIndex = 48;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock(blockIndex).coordinateData;
        //var setRGB=[255,0,0,1];
        var mode_step = 0;
        var step = 30;
        var nowStep = 0;
        this.setAllBlockColor([0, 0, 0, 1]);
        var RangeList = [];
        for (var index = -StartPoint.center_Point[0]; index < this.imageMaxWidth; index += this.minKeyWidth / 2) {
            //var modStep=(target[index].coordinateData.center_Point[0]%this.imageMaxWidth)/this.imageMaxWidth;
            RangeList.push([index, StartPoint.center_Point[1]]);
        }
        for (var index = -StartPoint.center_Point[1]; index < this.imageMaxHeight; index += this.minKeyHeight) {
            //var modStep=(target[index].coordinateData.center_Point[0]%this.imageMaxWidth)/this.imageMaxWidth;
            RangeList.push([StartPoint.center_Point[0], index]);
            RangeList.push([StartPoint.center_Point[0] + this.minKeyWidth / 2, index]);
        }
        this.repeater = setInterval(function () {
            //this.mode_reset();
            var target = _this.AllBlockColor;
            var setRGB;
            if (isRainbow) {
                setRGB = _this.rainbow7Color()[_this.getRandom(0, colors.length - 1)];
            }
            else {
                setRGB = colors[_this.getRandom(0, colors.length - 1)];
            }
            var repeatCountList = [];
            var RanRange = [10, 100];
            var temp_point = [StartPoint[0] + 500];
            //var temp_target=JSON.parse(JSON.stringify(this.AllBlockColor));   
            console.log('RangeList', RangeList);
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                var dis = _this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                if (mode_step == 0) {
                    //console.log('%c mode_Cross','color:rgb(255,75,255,1)',dis);
                    for (var i2 = 0; i2 < RangeList.length; i2++) {
                        var T = RangeList[i2];
                        if (T[0] > element.coordinateData.top_Left[0] &&
                            T[0] < element.coordinateData.top_Right[0] &&
                            T[1] > element.coordinateData.top_Left[1] &&
                            T[1] < element.coordinateData.bottom_Left[1]) {
                            element.color = setRGB;
                            break;
                        }
                    }
                    var T = JSON.parse(JSON.stringify(element.color));
                    T[0] = (T[0] * (step - nowStep) + 0 * nowStep) / step;
                    T[1] = (T[1] * (step - nowStep) + 0 * nowStep) / step;
                    T[2] = (T[2] * (step - nowStep) + 0 * nowStep) / step;
                    element.color = T;
                }
                // else {
                //     var T = JSON.parse(JSON.stringify(element.color));
                //     T[0] = (T[0] * (step - nowStep) + 0 * nowStep) / step;
                //     T[1] = (T[1] * (step - nowStep) + 0 * nowStep) / step;
                //     T[2] = (T[2] * (step - nowStep) + 0 * nowStep) / step;
                //     element.color = T;
                //     //console.log('element.color', T, step, nowStep)
                // }
            }
            if (nowStep + 1 < step) {
                nowStep += 1;
            }
            else {
                nowStep = 0;
                mode_step = 0;
                clearInterval(_this.repeater);
                //console.log('nowStep_end', mode_step, repeatCount, nowStep)
                //this.setAllBlockColor([0, 0, 0, 1]);
            }
        }, 50 * this.animationSpeed);
        //clearInterval(this.repeater);
    };
    M_Light_CS.prototype.mode_Breathing = function (colors, isRainbow) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 0, 0, 1]]; }
        if (isRainbow === void 0) { isRainbow = true; }
        clearInterval(this.repeater);
        var repeatCount = 0;
        var StartPoint = this.getNowBlock(50).coordinateData;
        var mode_step = 0;
        var step = 60;
        var nowStep = 0;
        this.setAllBlockColor([0, 0, 0, 1]);
        var repeatCountList = [];
        var target = this.AllBlockColor;
        var setRGB;
        var repeatCircleCount = 0;
        console.log('%c mode_Breathing', 'color:rgb(255,75,255,1)', this.imageMaxWidth);
        for (var i_compare = 0; i_compare < this.imageMaxWidth; i_compare += this.minKeyWidth) {
            //const element = array[index];
            if (isRainbow) {
                setRGB = this.rainbow7Color()[this.getRandom(0, this.rainbow7Color().length - 1)];
            }
            else {
                setRGB = colors[0];
            }
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                var dis = this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                if (dis <= i_compare && dis >= i_compare - this.minKeyWidth) {
                    //element.color = setRGB;
                    repeatCountList.push({
                        color: setRGB,
                        recordIndex: index,
                        repeatTime: this.getRandom(5, 25),
                    });
                }
            }
        }
        console.log('repeatCountList', repeatCountList);
        this.repeater = setInterval(function () {
            //this.mode_reset();
            var t_Count = repeatCount % 2;
            var t_Count2 = 0;
            if (t_Count == 0) {
                t_Count2 = 1;
            }
            else {
                t_Count2 = 0;
            }
            for (var index = 0; index < repeatCountList.length; index++) {
                var nowColor = [JSON.parse(JSON.stringify(repeatCountList[index].color)), [0, 0, 0, 1]];
                var t_data = [0, 0, 0, 1];
                t_data[0] = (nowColor[t_Count][0] * (step - nowStep) + nowColor[t_Count2][0] * nowStep) / step;
                t_data[1] = (nowColor[t_Count][1] * (step - nowStep) + nowColor[t_Count2][1] * nowStep) / step;
                t_data[2] = (nowColor[t_Count][2] * (step - nowStep) + nowColor[t_Count2][2] * nowStep) / step;
                var target = _this.AllBlockColor;
                target[repeatCountList[index].recordIndex].color = JSON.parse(JSON.stringify(t_data));
                //console.log('element.color', t_data, step, nowStep)
            }
            if (nowStep < step - 1) {
                nowStep += 1;
            }
            else {
                nowStep = 0;
                repeatCount += 1;
                //repeatCount=0;            
            }
        }, 50 * this.animationSpeed);
        //clearInterval(this.repeater);
    };
    M_Light_CS.prototype.mode_Breath = function (colors, isRainbow) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 0, 0, 1]]; }
        if (isRainbow === void 0) { isRainbow = true; }
        clearInterval(this.repeater);
        var repeatCount = 0;
        var mode_step = 0;
        var step = 60;
        var nowStep = 0;
        var colors = this.rainbow7Color();
        var nowC_index = 0;
        this.setAllBlockColor([0, 0, 0, 1]);
        var repeatCountList = [];
        var target = this.AllBlockColor;
        var setRGB;
        var repeatCircleCount = 0;
        //colors=this.rainbow7Color();
        console.log('%c mode_Breathing', 'color:rgb(255,75,255,1)', this.imageMaxWidth);
        //setRGB = this.rainbow7Color()[this.getRandom(0, this.rainbow7Color().length - 1)];  
        for (var index = 0; index < target.length; index++) {
            //var element = target[index];
            repeatCountList.push({
                color: setRGB,
                recordIndex: index,
                repeatTime: this.getRandom(5, 25),
            });
        }
        console.log('repeatCountList', repeatCountList);
        this.repeater = setInterval(function () {
            //this.mode_reset();
            var t_Count = repeatCount % 2;
            var t_Count2 = 0;
            if (t_Count == 0) {
                t_Count2 = 1;
            }
            else {
                t_Count2 = 0;
            }
            for (var index = 0; index < repeatCountList.length; index++) {
                var nowColor = [JSON.parse(JSON.stringify(colors[nowC_index])), [0, 0, 0, 1]];
                var t_data = [0, 0, 0, 1];
                t_data[0] = (nowColor[t_Count][0] * (step - nowStep) + nowColor[t_Count2][0] * nowStep) / step;
                t_data[1] = (nowColor[t_Count][1] * (step - nowStep) + nowColor[t_Count2][1] * nowStep) / step;
                t_data[2] = (nowColor[t_Count][2] * (step - nowStep) + nowColor[t_Count2][2] * nowStep) / step;
                var target = _this.AllBlockColor;
                target[repeatCountList[index].recordIndex].color = JSON.parse(JSON.stringify(t_data));
                //console.log('element.color', t_data, step, nowStep)
            }
            if (nowStep < step - 1) {
                nowStep += 1;
            }
            else {
                nowStep = 0;
                repeatCount += 1;
                if (nowC_index < colors.length - 1) {
                    nowC_index += 1;
                }
                else {
                    nowC_index = 0;
                }
                //repeatCount=0;            
            }
        }, 50 * this.animationSpeed);
        //clearInterval(this.repeater);
    };
    M_Light_CS.prototype.mode_LEDOFF = function () {
        clearInterval(this.repeater);
        this.setAllBlockColor([0, 0, 0, 1]);
    };
    M_Light_CS.prototype.mode_Wave = function () {
        var _this = this;
        //this.addBlockIndex();
        clearInterval(this.repeater);
        this.currentBlockIndex = 30;
        var repeatMin = 5;
        var repeatMax = 200;
        var repeatCount = 0;
        this.repeater = setInterval(function () {
            //var StartPoint = this.getNowBlock().coordinateData;
            var target = _this.AllBlockColor;
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                var compareResult = (repeatCount * 180);
                repeatMax = compareResult + 200;
                if (compareResult > element.coordinateData.top_Left[0] && repeatMax < element.coordinateData.top_Right[0]) {
                    element.color = [255, 255, 0, 1];
                }
                else if (compareResult < element.coordinateData.top_Left[0] && repeatMax > element.coordinateData.top_Left[0]) {
                    element.color = [255, 255, 0, 1];
                }
                else {
                    element.color = [0, 255, 0, 1];
                }
            }
            if (repeatCount < 15 && repeatMax < _this.imageMaxWidth) {
                repeatCount += 1;
            }
            else {
                repeatCount = 0;
            }
        }, 500 * this.animationSpeed);
    };
    M_Light_CS.prototype.mode_SlopeMoveR = function () {
        var _this = this;
        //this.addBlockIndex();
        clearInterval(this.repeater);
        this.currentBlockIndex = 30;
        var repeatMin = 5;
        var repeatMax = 200;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock().coordinateData;
        //var SlopeEquation=this.SlopeEquation([0,0],[834,372]);//StartPoint.clientWidth
        var startX = -StartPoint.clientWidth * 5;
        this.repeater = setInterval(function () {
            var SlopeEquation = _this.slopeEquation([0 + startX, _this.imageMaxWidth / 85], [startX + StartPoint.clientWidth * 5, 372]);
            //console.log('SlopeEquation', SlopeEquation);
            var target = _this.AllBlockColor;
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                for (var i2 = 0; i2 < SlopeEquation.length; i2++) {
                    var T = SlopeEquation[i2];
                    //console.log('SlopeEquation[index]', i2, T, element.coordinateData.top_Left);
                    if (T[0] > element.coordinateData.top_Left[0] &&
                        T[0] < element.coordinateData.top_Right[0] &&
                        T[1] > element.coordinateData.top_Left[1] &&
                        T[1] < element.coordinateData.bottom_Left[1]) {
                        element.color = [0, 0, 255, 1];
                        continue;
                    }
                }
            }
            if (startX < _this.imageMaxWidth) {
                startX += 22;
            }
            else {
                startX = -StartPoint.clientWidth * 5;
                _this.mode_reset();
            }
        }, 25 * this.animationSpeed);
    };
    M_Light_CS.prototype.mode_SlopeRight = function () {
        var _this = this;
        //this.addBlockIndex();
        clearInterval(this.repeater);
        this.currentBlockIndex = 30;
        var repeatMin = 5;
        var repeatMax = 200;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock().coordinateData;
        //var SlopeEquation=this.SlopeEquation([0,0],[834,372]);//StartPoint.clientWidth
        var startX = -StartPoint.clientWidth * 5;
        this.repeater = setInterval(function () {
            var SlopeEquation = _this.slopeEquation([0 + startX, _this.imageMaxWidth / 85], [startX + StartPoint.clientWidth * 5, 372]);
            //console.log('SlopeEquation', SlopeEquation);
            _this.mode_reset();
            var target = _this.AllBlockColor;
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                for (var i2 = 0; i2 < SlopeEquation.length; i2++) {
                    var T = SlopeEquation[i2];
                    //console.log('SlopeEquation[index]', i2, T, element.coordinateData.top_Left);
                    if (T[0] > element.coordinateData.top_Left[0] &&
                        T[0] < element.coordinateData.top_Right[0] &&
                        T[1] > element.coordinateData.top_Left[1] &&
                        T[1] < element.coordinateData.bottom_Left[1]) {
                        element.color = [0, 0, 255, 1];
                        continue;
                    }
                }
            }
            if (startX < _this.imageMaxWidth) {
                startX += 22;
            }
            else {
                startX = -StartPoint.clientWidth * 5;
                _this.mode_reset();
            }
        }, 25 * this.animationSpeed);
    };
    M_Light_CS.prototype.mode_Pingpong2 = function () {
        var _this = this;
        clearInterval(this.repeater);
        this.currentBlockIndex = 0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        this.setAllBlockColor([0, 0, 0, 1]);
        var H_spacing = Math.trunc(this.imageMaxHeight / StartPoint.clientHeight);
        var w_range = Math.trunc(this.imageMaxWidth / this.minKeyWidth);
        var repeatCountList = [];
        var times = 0;
        //  this.twoDimensionalArray[0][0].color=[0,0,255,1];
        //     //this.getRandom(0,4),
        //     //this.getRandom(1,50)
        //     //var k = (movement + x) / this.imageMaxHeight;    // 回合數
        //     //var r = (movement + x) % this.imageMaxHeight;    // 餘數
        //     //console.log(x, y);
        var target = this.twoDimensionalArray;
        // var a2=[0,3,5,8,11,13];
        for (var index = 0; index < this.max_H_Number; index++) {
            //this.twoDimensionalArray[index][0].color=[0,0,255,1];
            repeatCountList.push({
                color: [0, 0, 255, 1],
                pos: [0, index],
                backupPos: [0, index],
                repeatTime: this.getRandom(0, 3),
            });
        }
        this.repeater = setInterval(function () {
            _this.resetTwoDimensionalArray();
            for (var i2 = 0; i2 < repeatCountList.length; i2++) {
                var T = repeatCountList[i2];
                if (T.repeatTime > 0) {
                    T.repeatTime -= 1;
                }
                if (T.repeatTime == 0) {
                    if (T.pos[0] + 1 < 10) {
                        T.pos[0] += 1;
                    }
                    else {
                        T.pos[0] = T.backupPos[0];
                        T.repeatTime = 0;
                    }
                    //console.log('repeatCountList;', i2,repeatCountList[i2].repeatCount);
                }
                _this.twoDimensionalArray[T.pos[0]][T.pos[1]].color = T.color;
            }
            _this.showTwoDimensionalArray();
        }, 50 * this.animationSpeed);
    };
    M_Light_CS.prototype.mode_Parallelogram = function () {
        var _this = this;
        clearInterval(this.repeater);
        this.currentBlockIndex = 0;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock().coordinateData;
        this.setAllBlockColor([0, 0, 0, 1]);
        //this.mode_reset();
        this.setAllBlockAlpha;
        //var SlopeEquation=this.SlopeEquation([0,0],[834,372]);//StartPoint.clientWidth
        var startX = -StartPoint.clientWidth * 5;
        var movewidth = 4;
        var horizontalList = [];
        //Math.trunc(3.7); // 3
        var H_range = Math.trunc(372 / 40);
        this.repeater = setInterval(function () {
            _this.setAllBlockColor([0, 0, 0, 1]);
            horizontalList = [];
            //console.log('SlopeEquation', SlopeEquation);
            var spacing = -5;
            for (var index = 0; index < 372; index += 40) {
                var ypos = index;
                //horizontalList.push([xpos, ypos]);
                spacing += 1;
                //var ypos = 25;
                for (var index2 = spacing * 22 + repeatCount * 43; index2 < spacing * 22 + 140 + repeatCount * 43; index2 += 1) {
                    var xpos = index2;
                    horizontalList.push([index2, ypos]);
                }
                // var xpos = index;
                // horizontalList.push([xpos, ypos]);
                //+(repeatCount*this.minKeyWidth)
            }
            console.log('horizontalList', horizontalList);
            var target = _this.AllBlockColor;
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                for (var i2 = 0; i2 < horizontalList.length; i2++) {
                    var T = horizontalList[i2];
                    //console.log('SlopeEquation[index]', i2, T, element.coordinateData.top_Left);
                    if (T[0] > element.coordinateData.top_Left[0] &&
                        T[0] < element.coordinateData.top_Right[0] &&
                        T[1] > element.coordinateData.top_Left[1] &&
                        T[1] < element.coordinateData.bottom_Left[1]) {
                        element.color = [0, 0, 255, 1];
                        continue;
                    }
                }
            }
            // if(startX<this.imageMaxWidth){
            //     startX+=22;
            // }
            // else{
            //     startX=-StartPoint.clientWidth*5;
            //     this.mode_reset();
            // }
            //clearInterval(this.repeater);
            //     var dis = this.distanceCalculation(0, 0, element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
            //repeatCount+=1;
            if (spacing * 22 + repeatCount * 43 < _this.imageMaxWidth) {
                repeatCount += 1;
            }
            else {
                repeatCount = 0;
            }
        }, 100 * this.animationSpeed);
    };
    M_Light_CS.prototype.mode_Pingpong = function (colors, isRainbow) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 0, 0, 1]]; }
        if (isRainbow === void 0) { isRainbow = true; }
        console.log('%cmode_Pingpong_enter', 'color:rgb(255,75,255,1)', colors, this.repeater);
        clearInterval(this.repeater);
        this.currentBlockIndex = 0;
        var intervalCount = 0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        if (isRainbow) {
            colors = this.rainbow7Color();
        }
        //console.log('StartPoint','color:green',JSON.stringify(StartPoint),this.AllBlockColor); 
        //var SlopeEquation=this.SlopeEquation([0,0],[834,372]);//StartPoint.clientWidth
        //Math.trunc(3.7); // 3
        var repeatCount = 0;
        this.repeater = setInterval(function () {
            _this.setAllBlockColor([0, 0, 0, 1]);
            var horizontalList = [];
            var setRGB = colors[_this.getRandom(0, colors.length - 1)];
            //console.log('repeatCount', repeatCount);
            var spacing = -5;
            if (repeatCount % 2 == 0) {
                for (var index = 0; index < _this.imageMaxHeight; index += StartPoint.clientHeight) {
                    var ypos = index;
                    spacing += 1;
                    var min = intervalCount * StartPoint.clientWidth + spacing * 22;
                    var max = intervalCount * StartPoint.clientWidth + StartPoint.clientWidth * 4 + spacing * 22;
                    for (var index2 = min; index2 < max; index2 += 1) {
                        var xpos = index2;
                        horizontalList.push([xpos, ypos]);
                    }
                }
            }
            else {
                var spacing = -5;
                for (var index = 0; index < _this.imageMaxHeight; index += StartPoint.clientHeight) {
                    spacing += 1;
                    var ypos = index;
                    var min = _this.imageMaxWidth - intervalCount * StartPoint.clientWidth - spacing * 22 - StartPoint.clientWidth * 4;
                    var max = _this.imageMaxWidth - intervalCount * StartPoint.clientWidth - spacing * 22;
                    //var spacing2 = this.minKeyWidth * intervalCount;
                    for (var index2 = max; index2 > min; index2 -= 1) {
                        var xpos = index2;
                        horizontalList.push([xpos, ypos]);
                    }
                }
            }
            //console.log('horizontalList', horizontalList); 
            var target = _this.AllBlockColor;
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                for (var i2 = 0; i2 < horizontalList.length; i2++) {
                    var T = horizontalList[i2];
                    if (T[0] > element.coordinateData.top_Left[0] &&
                        T[0] < element.coordinateData.top_Right[0] &&
                        T[1] > element.coordinateData.top_Left[1] &&
                        T[1] < element.coordinateData.bottom_Left[1]) {
                        element.color = colors[_this.getRandom(0, colors.length - 1)];
                        //element.color = setRGB;
                        continue;
                    }
                }
            }
            if (intervalCount * StartPoint.clientWidth * 2 < _this.imageMaxWidth) {
                intervalCount += 1;
            }
            else {
                intervalCount = 0;
                repeatCount += 1;
            }
        }, 100);
    };
    M_Light_CS.prototype.mode_BreatheSeparately = function () {
        clearInterval(this.repeater);
        var opacity = 1;
        var opacityCount = 0;
        //RGBcolors =[[255,0,0,1],[255,0,0,0.8],[0,255,0,1],[0,255,0,0.8],[0,0,255,1],[0,0,255,0.8]];
        var totalStep = 30;
        var intervalCount = 0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        var target = this.AllBlockColor;
        this.setAllBlockColor([0, 0, 255, 1]);
        var repeatCountList = [];
        var RanRange = [10, 100];
        //var temp_target=JSON.parse(JSON.stringify(this.AllBlockColor));   
        for (var index = 0; index < target.length; index++) {
            //var modStep=(target[index].coordinateData.center_Point[0]%this.imageMaxWidth)/this.imageMaxWidth;
            repeatCountList.push({
                color: 0,
                nowPos: 0,
                nowstep: 0,
                repeatCount: 1,
                repeatTime: this.getRandom(RanRange[0], RanRange[1]),
            });
        }
        //var SlopeEquation=this.SlopeEquation([0,0],[834,372]);//StartPoint.clientWidth
        var repeatCount = 0;
        var exist = [];
        this.repeater = setInterval(function () {
            if (opacityCount % 2 == 0) {
                opacity -= 0.05;
            }
            else {
                opacity += 0.05;
            }
            if (opacity >= 1 || opacity <= 0) {
                opacityCount += 1;
            }
            //var horizontalList = [];
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                // var resultL = exist.find((x) => x == index)
                // if (resultL != undefined) {
                //     break;
                // }
                if (element.breathing && element.clearStatus) {
                    //console.log('%c mode_BreatheSeparately_element','color:rgb(255,77,255)',  element);
                    element.color[3] = opacity;
                }
                else {
                }
                //continue;
                //break;
            }
        }, 100);
    };
    M_Light_CS.prototype.mode_Wave1 = function (colors, isRainbow) {
        var _this = this;
        if (colors === void 0) { colors = [[0, 0, 255, 1]]; }
        if (isRainbow === void 0) { isRainbow = true; }
        clearInterval(this.repeater);
        this.currentBlockIndex = 0;
        var RGBcolors = [];
        // for (let index = 0; index < 5; index++) {
        //     //const element = array[index];
        //     RGBcolors.push([255-index,0+index,0,1]);
        //     RGBcolors.push([0,255-index,0+index,1]);
        //     RGBcolors.push([0+index,0,255-index,1]);
        // }
        // console.log('RGBcolors', RGBcolors);
        RGBcolors = [[255, 0, 0, 1], [0, 255, 0, 1], [0, 0, 255, 1]];
        //RGBcolors =[[255,0,0,1],[255,0,0,0.8],[0,255,0,1],[0,255,0,0.8],[0,0,255,1],[0,0,255,0.8]];
        if (isRainbow) {
            //colors=this.rainbow7Color();
            colors = RGBcolors;
        }
        else {
            colors = [colors[0], [colors[0][0], colors[0][1], colors[0][2], 0.4]];
        }
        var totalStep = 3;
        var intervalCount = 0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        var target = this.AllBlockColor;
        this.setAllBlockColor([0, 0, 0, 1]);
        var temp_target = JSON.parse(JSON.stringify(this.AllBlockColor));
        for (var index = 0; index < temp_target.length; index++) {
            //console.log(' target[index].center_Point[0]', target[index].coordinateData.center_Point[0]);
            // var alpha=(target[index].coordinateData.center_Point[0]%this.imageMaxWidth)/this.imageMaxWidth;
            var modStep = (target[index].coordinateData.center_Point[0] % this.imageMaxWidth) / this.imageMaxWidth;
            //var ran=this.getRandom(0, colors.length - 1);
            var ran = (colors.length - 1) - Math.round(modStep * (colors.length - 1));
            //console.log('alpha',alpha);
            console.log('modStep', modStep);
            //var setRGB
            // if(isRainbow){
            // setRGB=colors[ran];
            // }
            temp_target[index].nowStep = modStep * totalStep;
            //temp_target[index].nowStep=0;
            temp_target[index].nowPos = 0;
            var temp_block = temp_target[index];
            var temp_colorData = [0, 0, 0, 1];
            var temp_C = colors[0];
            var nextColor = colors[1];
            if (isRainbow) {
                temp_target[index].nowPos = ran;
                if (ran < colors.length - 1) {
                    temp_C = colors[ran];
                    nextColor = colors[ran + 1];
                }
                else {
                    temp_C = colors[0];
                    nextColor = colors[0];
                }
            }
            temp_colorData[0] = (temp_C[0] * (totalStep - temp_block.nowStep) + nextColor[0] * temp_block.nowStep) / totalStep;
            temp_colorData[1] = (temp_C[1] * (totalStep - temp_block.nowStep) + nextColor[1] * temp_block.nowStep) / totalStep;
            temp_colorData[2] = (temp_C[2] * (totalStep - temp_block.nowStep) + nextColor[2] * temp_block.nowStep) / totalStep;
            temp_colorData[3] = (temp_C[3] * (totalStep - temp_block.nowStep) + nextColor[3] * temp_block.nowStep) / totalStep;
            // temp_target[index].color=[[colors[0][0],colors[0][1],colors[0][2],1-alpha*1],[colors[0][0],colors[0][1],colors[0][2],alpha*1]];
            // target[index].color=[colors[0][0],colors[0][1],colors[0][2],alpha*1];
            //temp_target[index].color=colors;
            target[index].color = temp_colorData;
        }
        console.log('temp_target', temp_target);
        //var SlopeEquation=this.SlopeEquation([0,0],[834,372]);//StartPoint.clientWidth
        var repeatCount = 0;
        var exist = [];
        this.repeater = setInterval(function () {
            //this.setAllBlockColor([0, 0, 0, 1]);
            var horizontalList = [];
            //var setRGB=colors[this.getRandom(0, colors.length - 1)];
            //console.log('repeatCount', repeatCount);
            var spacing = -5;
            for (var index = 0; index < _this.imageMaxHeight; index += StartPoint.clientHeight) {
                var ypos = index;
                spacing += 1;
                var min = intervalCount * StartPoint.clientWidth + spacing * 22;
                var max = intervalCount * StartPoint.clientWidth + StartPoint.clientWidth + spacing * 22;
                for (var index2 = min; index2 < max; index2 += StartPoint.clientWidth / 2) {
                    var xpos = index2;
                    horizontalList.push([xpos, ypos]);
                }
            }
            var _loop_1 = function (index) {
                var element = target[index];
                for (var i2 = 0; i2 < horizontalList.length; i2++) {
                    T = horizontalList[i2];
                    resultL = exist.find(function (x) { return x == index; });
                    //console.log('exist',exist);
                    if (resultL != undefined) {
                        //console.log('resultL',resultL);
                        break;
                        //return;
                    }
                    if (T[0] > element.coordinateData.top_Left[0] && T[0] < element.coordinateData.top_Right[0] && T[1] > element.coordinateData.top_Left[1] && T[1] < element.coordinateData.bottom_Left[1]) {
                        exist.push(index);
                        temp_block = temp_target[index];
                        //console.log('temp_block.color',temp_block.color);
                        tempColors = colors;
                        if (temp_block.nowStep + 1 < totalStep) {
                            temp_block.nowStep += 1;
                        }
                        else {
                            temp_block.nowStep = 0;
                            if (temp_block.nowPos + 1 < tempColors.length) {
                                temp_block.nowPos += 1;
                            }
                            else {
                                temp_block.nowPos = 0;
                            }
                        }
                        temp_C = tempColors[temp_block.nowPos];
                        if (temp_block.nowPos + 1 < tempColors.length) {
                            nextColor = tempColors[temp_block.nowPos + 1];
                        }
                        else {
                            nextColor = tempColors[0];
                        }
                        temp_colorData = [0, 0, 0, 1];
                        temp_colorData[0] = (temp_C[0] * (totalStep - temp_block.nowStep) + nextColor[0] * temp_block.nowStep) / totalStep;
                        temp_colorData[1] = (temp_C[1] * (totalStep - temp_block.nowStep) + nextColor[1] * temp_block.nowStep) / totalStep;
                        temp_colorData[2] = (temp_C[2] * (totalStep - temp_block.nowStep) + nextColor[2] * temp_block.nowStep) / totalStep;
                        temp_colorData[3] = (temp_C[3] * (totalStep - temp_block.nowStep) + nextColor[3] * temp_block.nowStep) / totalStep;
                        //temp_colorData[3] = (temp_C[3] * (totalStep - temp_block.nowStep) + nextColor[3] * temp_block.nowStep) / totalStep;
                        //console.log('temp_C',temp_C,nextColor,temp_block.nowStep,temp_block.nowPos,temp_colorData,tempColors.length);
                        element.color = temp_colorData;
                        //continue;
                        //break;
                    }
                }
            };
            var T, resultL, temp_block, tempColors, nextColor, temp_C, temp_colorData;
            //console.log('horizontalList;',horizontalList);
            for (var index = 0; index < target.length; index++) {
                _loop_1(index);
            }
            if (intervalCount * StartPoint.clientWidth < _this.imageMaxWidth) {
                intervalCount += 1;
            }
            else {
                intervalCount = 0;
                exist = [];
                repeatCount += 1;
            }
            // if(repeatCount>2){
            //     clearInterval(this.repeater);
            // }
        }, 100);
    };
    M_Light_CS.prototype.mode_Rainbow = function () {
        var _this = this;
        clearInterval(this.repeater);
        this.currentBlockIndex = 0;
        var rainbowColors = this.rainbow7Color();
        var StartPoint = this.getNowBlock(0).coordinateData;
        this.setAllBlockColor([0, 0, 0, 1]);
        var H_spacing = Math.trunc(this.imageMaxHeight / StartPoint.clientHeight);
        var w_range = Math.trunc(this.imageMaxWidth / this.minKeyWidth);
        var repeatCountList = [];
        var times = 0;
        //  this.twoDimensionalArray[0][0].color=[0,0,255,1];
        //     //this.getRandom(0,4),
        //     //this.getRandom(1,50)
        //     //var k = (movement + x) / this.imageMaxHeight;    // 回合數
        //     //var r = (movement + x) % this.imageMaxHeight;    // 餘數
        //     //console.log(x, y);
        var target = this.twoDimensionalArray;
        // var a2=[0,3,5,8,11,13];
        for (var index = 0; index < this.max_X_Number; index++) {
            //this.twoDimensionalArray[index][0].color=[0,0,255,1];
            for (var index2 = 0; index2 < rainbowColors.length; index2++) {
                repeatCountList.push({
                    nowPos: index2,
                    color: rainbowColors[index2],
                    pos: [index, index2],
                    backupPos: [index, index2],
                    step: 5,
                    nowStep: 0,
                });
            }
        }
        this.repeater = setInterval(function () {
            _this.resetTwoDimensionalArray();
            for (var i2 = 0; i2 < repeatCountList.length; i2++) {
                var T = repeatCountList[i2];
                if (T.nowStep + 1 < T.step) {
                    T.nowStep += 1;
                }
                else {
                    T.nowStep = 0;
                    T.nowPos += 1;
                }
                var temp_C = _this.rainbow7Color()[T.nowPos];
                var nextColor = [];
                if (T.nowPos + 1 < _this.rainbow7Color().length) {
                    nextColor = _this.rainbow7Color()[T.nowPos + 1];
                }
                else {
                    T.nowPos = 0;
                    1;
                    nextColor = _this.rainbow7Color()[T.nowPos];
                }
                T.color[0] = (temp_C[0] * (T.step - T.nowStep) + nextColor[0] * T.nowStep) / T.step;
                T.color[1] = (temp_C[1] * (T.step - T.nowStep) + nextColor[1] * T.nowStep) / T.step;
                T.color[2] = (temp_C[2] * (T.step - T.nowStep) + nextColor[2] * T.nowStep) / T.step;
                //console.log('T.step;',T.step,T.nowStep,temp_C,nextColor);
                _this.twoDimensionalArray[T.pos[0]][T.pos[1]].color = T.color;
            }
            _this.showTwoDimensionalArray();
        }, 50 * this.animationSpeed);
    };
    M_Light_CS.prototype.mode_Cooking = function () {
        var _this = this;
        clearInterval(this.repeater);
        this.currentBlockIndex = 0;
        var rainbowColors = this.rainbow7Color();
        var StartPoint = this.getNowBlock(0).coordinateData;
        this.setAllBlockColor([0, 0, 0, 1]);
        var H_spacing = Math.trunc(this.imageMaxHeight / StartPoint.clientHeight);
        var w_range = Math.trunc(this.imageMaxWidth / this.minKeyWidth);
        var repeatCountList = [];
        var times = 0;
        var target = this.twoDimensionalArray;
        // var a2=[0,3,5,8,11,13];
        for (var index = 0; index < this.max_X_Number; index++) {
            //this.twoDimensionalArray[index][0].color=[0,0,255,1];
            for (var index2 = 0; index2 < this.max_Y_Number; index2++) {
                repeatCountList.push({
                    nowPos: 0,
                    color: [0, 0, 0, 1],
                    pos: [index, index2],
                    backupPos: [index, index2],
                    repeatTime: this.getRandom(0, 3),
                });
            }
        }
        this.repeater = setInterval(function () {
            _this.resetTwoDimensionalArray([255, 0, 0, 1]); //
            for (var i2 = 0; i2 < repeatCountList.length; i2++) {
                var T = repeatCountList[i2];
                if (T.repeatTime > 0) {
                    T.repeatTime -= 1;
                }
                if (T.repeatTime == 0) {
                    if (T.pos[1] - 1 > 0) {
                        T.pos[1] -= 1;
                    }
                    else {
                        T.pos[1] = T.backupPos[1];
                        T.repeatTime = 0;
                    }
                    //console.log('repeatCountList;', i2,repeatCountList[i2].repeatCount);
                }
                _this.twoDimensionalArray[T.pos[0]][T.pos[1]].color = [0, 0, 0, 1];
            }
            _this.showTwoDimensionalArray();
        }, 50 * this.animationSpeed);
    };
    M_Light_CS.prototype.mode_Snowing = function (colors, isRainbow) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 0, 0, 1]]; }
        if (isRainbow === void 0) { isRainbow = true; }
        clearInterval(this.repeater);
        this.currentBlockIndex = 0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        this.setAllBlockColor([0, 0, 0, 1]);
        var H_spacing = Math.trunc(this.imageMaxHeight / StartPoint.clientHeight);
        var w_range = Math.trunc(this.imageMaxWidth / this.minKeyWidth);
        var repeatCountList = [];
        for (var x = StartPoint.top_Left[0]; x < this.imageMaxWidth; x += this.minKeyWidth) {
            //var xpos=[];
            //StartPoint.top_Left[1]
            var temp_list = [];
            //console.log('StartPoint.top_Left[1]',  StartPoint.top_Left[1],this.imageMaxHeight);
            for (var index2 = StartPoint.top_Left[1]; index2 < this.imageMaxHeight; index2 += StartPoint.clientHeight) {
                temp_list.push([x, index2]);
            }
            repeatCountList.push({
                color: [0, 255, 255, 1],
                i_list: temp_list,
                pos: 0,
                repeatCount: 6,
                repeatTime: this.getRandom(1, 25),
            });
            //this.getRandom(1,50)
            //var k = (movement + x) / this.imageMaxHeight;    // 回合數
            //var r = (movement + x) % this.imageMaxHeight;    // 餘數
            //console.log(x, y);
        }
        console.log('repeatCountList;', repeatCountList);
        this.repeater = setInterval(function () {
            _this.setAllBlockColor([0, 0, 0, 1]);
            //current_time+=5;
            for (var i2 = 0; i2 < repeatCountList.length; i2++) {
                var T = repeatCountList[i2];
                if (T.repeatTime > 0) {
                    repeatCountList[i2].repeatTime -= 1;
                }
                else if (T.repeatTime == 0 && T.repeatCount < T.i_list.length) {
                    repeatCountList[i2].repeatCount += 1;
                    //console.log('repeatCountList;', i2,repeatCountList[i2].repeatCount);
                }
                if (T.repeatCount >= T.i_list.length) {
                    repeatCountList[i2].repeatCount = 0;
                    repeatCountList[i2].repeatTime = _this.getRandom(1, 25);
                }
            }
            var target = _this.AllBlockColor;
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                for (var i2 = 0; i2 < repeatCountList.length; i2++) {
                    var T = repeatCountList[i2];
                    //console.log('T_now;', T);
                    var now = T.i_list[T.repeatCount];
                    //console.log('now;', now);
                    if (now[0] >= element.coordinateData.top_Left[0] &&
                        now[0] <= element.coordinateData.top_Right[0] &&
                        now[1] >= element.coordinateData.top_Left[1] &&
                        now[1] <= element.coordinateData.bottom_Left[1]) {
                        target[index].color = repeatCountList[i2].color;
                    }
                }
            }
        }, 100 * this.animationSpeed);
    };
    M_Light_CS.prototype.mode_DigitTimes = function (colors) {
        var _this = this;
        if (colors === void 0) { colors = [[0, 0, 255, 1]]; }
        clearInterval(this.repeater);
        this.currentBlockIndex = 0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        this.setAllBlockColor([0, 0, 0, 1]);
        var H_spacing = Math.trunc(this.imageMaxHeight / StartPoint.clientHeight);
        var w_range = Math.trunc(this.imageMaxWidth / this.minKeyWidth);
        var repeatCountList = [];
        var times = 0;
        //  this.twoDimensionalArray[0][0].color=[0,0,255,1];
        //     //this.getRandom(0,4),
        //     //this.getRandom(1,50)
        //     //var k = (movement + x) / this.imageMaxHeight;    // 回合數
        //     //var r = (movement + x) % this.imageMaxHeight;    // 餘數
        //     //console.log(x, y);
        var target = this.twoDimensionalArray;
        var a = [0, 3, 5];
        // var a2=[0,3,5,8,11,13];
        var randomList = [];
        for (var i = 0; i < this.breakGradation[0][1] - 1; i++) {
            randomList.push(this.getRandom(0, this.breakGradation[0][1] - 1)); //亂數產生，亂數產生的範圍是1~9
            for (var j = 0; j < i; j++) {
                while (randomList[j] == randomList[i]) {
                    j = 0; //如有重複，將變數j設為0，再次檢查 (因為還是有重複的可能)
                    randomList[i] = this.getRandom(0, this.breakGradation[0][1] - 1); //重新產生，存回陣列，亂數產生的範圍是1~9
                }
            }
        }
        for (var index = 0; index <= this.breakGradation[0][1]; index++) {
            //this.twoDimensionalArray[index][0].color=[0,0,255,1];
            repeatCountList.push({
                color: colors[0],
                pos: [index, index % (this.max_H_Number / 2)],
                backupPos: [index, index % (this.max_H_Number / 2)],
                repeatTime: this.getRandom(0, 3),
            });
        }
        this.repeater = setInterval(function () {
            _this.resetTwoDimensionalArray();
            for (var i2 = 0; i2 < repeatCountList.length; i2++) {
                var T = repeatCountList[i2];
                if (T.repeatTime > 0) {
                    T.repeatTime -= 1;
                }
                if (T.repeatTime == 0) {
                    if (T.pos[1] + 1 < _this.max_H_Number) {
                        if (T.pos[0] < 1) {
                            T.pos[1] += 1;
                        }
                        else {
                            T.pos[1] += 1;
                            T.pos[0] += 1;
                        }
                    }
                    else {
                        T.pos[0] = T.backupPos[0];
                        T.pos[1] = 0;
                        T.repeatTime = 1;
                    }
                    //console.log('repeatCountList;', i2,repeatCountList[i2].repeatCount);
                }
                _this.twoDimensionalArray[T.pos[0]][T.pos[1]].color = T.color;
            }
            _this.showTwoDimensionalArray();
        }, 500 * this.animationSpeed);
    };
    M_Light_CS.prototype.mode_SpreadLeftAndRight = function (setColor) {
        var _this = this;
        if (setColor === void 0) { setColor = [255, 0, 0, 1]; }
        //this.addBlockIndex();
        clearInterval(this.repeater);
        this.currentBlockIndex = 77;
        var repeatMin = 5;
        var repeatMax = 200;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock().coordinateData;
        this.repeater = setInterval(function () {
            _this.mode_reset();
            var target = _this.AllBlockColor;
            // sub_disL-=50;
            // sub_disR+=50;
            var horizontalList = [];
            if (repeatCount == 0) {
                _this.getNowBlock().color = setColor;
            }
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                var Ysdis = Math.abs(StartPoint.top_Left[1] - element.coordinateData.top_Left[1]);
                if (Ysdis < 10) {
                    horizontalList.push(index);
                }
            }
            var resultL = horizontalList.find(function (x) { return x == _this.currentBlockIndex - repeatCount; });
            var resultR = horizontalList.find(function (x) { return x == _this.currentBlockIndex + repeatCount; });
            if (resultL == undefined && resultR == undefined) {
                repeatCount = 0;
            }
            else {
                if (resultL != undefined) {
                    target[resultL].color = setColor;
                }
                if (resultR != undefined) {
                    target[resultR].color = setColor;
                }
                ;
                repeatCount += 1;
            }
        }, 50 * this.animationSpeed);
        //clearInterval(this.repeater);
    };
    M_Light_CS.prototype.mode_SinGraphics = function (colors) {
        var _this = this;
        if (colors === void 0) { colors = []; }
        colors = [[255, 0, 0, 1], [0, 255, 0, 1], [0, 0, 255, 1]];
        var Brightness = 1;
        clearInterval(this.repeater);
        this.currentBlockIndex = 43;
        var repeatMin = 5;
        var repeatMax = 200;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock().coordinateData;
        var horizontalList = [];
        var record = 0;
        //var radian = 75 * Math.PI / 180;    //計算出弧度
        var maxH = 268;
        this.repeater = setInterval(function () {
            _this.setAllBlockColor([0, 0, 0, 1]);
            //console.log('SlopeEquation', SlopeEquation);
            var spacing = -5;
            horizontalList = [];
            // for (let x = 0; x < 834; x++) { 
            //     const y = Math.sin(x * 2) * 100 ;
            //     horizontalList.push([x, y]);
            // }
            // for (let x = 0; x < this.imageMaxWidth; x++) { 
            //     const radians = x / this.imageMaxWidth * Math.PI * 2;
            //     const scale = (Math.sin(radians - Math.PI * 0.5) + 1) * 0.5*maxH; 
            //     const y = Math.sin(x * 0.02 + 6) * 5 * scale; 
            //     horizontalList.push([x, y]);
            // }
            for (var i_xpos = 0; i_xpos < 834; i_xpos++) {
                var ratio = Math.sin(i_xpos / 2 * Math.PI / 180);
                var xpos = 120 + i_xpos;
                //const scale = (Math.sin(radian - Math.PI * 0.5) + 1) * 0.5*maxH; 
                //var ypos=22+((ratio+1)/2*372);
                var h = 22 + ((ratio + 1) / 2 * 268);
                horizontalList.push([xpos, h]);
            }
            console.log('horizontalList', horizontalList);
            var target = _this.AllBlockColor;
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                for (var i2 = 0; i2 < horizontalList.length; i2++) {
                    var T = horizontalList[i2];
                    //console.log('SlopeEquation[index]', i2, T, element.coordinateData.top_Left);
                    if (T[0] > element.coordinateData.top_Left[0] &&
                        T[0] < element.coordinateData.top_Right[0] &&
                        T[1] > element.coordinateData.top_Left[1] &&
                        T[1] < element.coordinateData.bottom_Left[1]) {
                        element.color = [0, 0, 255, 1];
                        continue;
                    }
                }
            }
            if (record <= 0 || record >= 1) {
                repeatCount += 1;
            }
            if (repeatCount % 2 == 0) {
                record -= 0.15;
            }
            else {
                record += 0.15;
            }
        }, 150 * this.animationSpeed);
    };
    M_Light_CS.prototype.mode_HeartbeatSensor = function (colors) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 0, 0, 1], [0, 255, 0, 1], [0, 0, 255, 1]]; }
        var Brightness = 1;
        clearInterval(this.repeater);
        this.currentBlockIndex = 43;
        var repeatMin = 5;
        var repeatMax = 200;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        var horizontalList = [];
        for (var index = 0; index < this.imageMaxWidth; index += 40) {
            var ratio = Math.sin((index * Math.PI / 180));
            //var xpos=120+index;
            //const scale = (Math.sin(radian - Math.PI * 0.5) + 1) * 0.5*maxH; 
            var ypos = (ratio + 1) / 2 * 268;
            horizontalList.push({
                repeatCount: 0,
                coordinate: [index, StartPoint.top_Left[0] + ypos],
            });
            console.log('horizontalList', horizontalList);
        }
        var record = 0;
        //var radian = 75 * Math.PI / 180;    //計算出弧度
        var maxH = 268;
        this.repeater = setInterval(function () {
            _this.setAllBlockColor([0, 0, 0, 1]);
            var spacing = -5;
            for (var index = 0; index < horizontalList.length; index++) {
                var h_Item = horizontalList[index];
                if (h_Item['coordinate'][1] <= 0 || h_Item['coordinate'][1] >= _this.imageMaxHeight) {
                    h_Item['repeatCount'] += 1;
                }
                if (h_Item['repeatCount'] % 2 == 0) {
                    h_Item['coordinate'][1] -= 40;
                }
                else {
                    h_Item['coordinate'][1] += 40;
                }
                //console.log('horizontalList', horizontalList);    
            }
            console.log('horizontalList', horizontalList);
            var target = _this.AllBlockColor;
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                for (var i2 = 0; i2 < horizontalList.length; i2++) {
                    var T = horizontalList[i2].coordinate;
                    //console.log('SlopeEquation[index]', i2, T, element.coordinateData.top_Left);
                    if (T[0] >= element.coordinateData.top_Left[0] &&
                        T[0] <= element.coordinateData.top_Right[0] &&
                        T[1] >= element.coordinateData.top_Left[1] &&
                        T[1] <= element.coordinateData.bottom_Left[1]) {
                        element.color = colors[0];
                        continue;
                    }
                }
            }
        }, 60 * this.animationSpeed);
    };
    M_Light_CS.prototype.mode_Matrix3_Raindow = function (colors) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 0, 0, 1], [0, 255, 0, 1], [0, 0, 255, 1]]; }
        var Brightness = 1;
        clearInterval(this.repeater);
        this.currentBlockIndex = 43;
        var repeatMin = 5;
        var repeatMax = 200;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        var horizontalList = [];
        var target = this.AllBlockColor;
        var repeatCountList = [];
        for (var index = 0; index < target.length; index++) {
            var element = target[index];
            // for (let i2 = 0; i2 < horizontalList.length; i2++) {
            element.color = this.getRgbRandom();
            if (element.color[0] == 255) {
                repeatCountList.push(0);
            }
            else if (element.color[1] == 255) {
                repeatCountList.push(1);
            }
            else if (element.color[2] == 255) {
                repeatCountList.push(2);
            }
        }
        var record = 0;
        var maxH = 268;
        this.repeater = setInterval(function () {
            var randomList = [];
            for (var i = 0; i < 30; i++) {
                randomList.push(_this.getRandom(0, target.length - 1)); //亂數產生，亂數產生的範圍是1~9
                for (var j = 0; j < i; j++) {
                    while (randomList[j] == randomList[i]) {
                        j = 0; //如有重複，將變數j設為0，再次檢查 (因為還是有重複的可能)
                        randomList[i] = _this.getRandom(0, target.length - 1); //重新產生，存回陣列，亂數產生的範圍是1~9
                    }
                }
            }
            for (var index = 0; index < randomList.length; index++) {
                var element = target[randomList[index]];
                var subPos = repeatCountList[randomList[index]];
                if (element.color[subPos] > 0) {
                    element.color[subPos] -= 5;
                }
                if (subPos < 2) {
                    element.color[subPos + 1] += 5;
                }
                else {
                    element.color[0] += 5;
                }
                if (element.color[subPos] == 0) {
                    if (subPos + 1 < 3) {
                        repeatCountList[randomList[index]] += 1;
                    }
                    else {
                        repeatCountList[randomList[index]] = 0;
                    }
                }
            }
            var spacing = -5;
        }, 10 * this.animationSpeed);
    };
    M_Light_CS.prototype.mode_Matrix3 = function (colors, isRainbow) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 255, 0, 1]]; }
        if (isRainbow === void 0) { isRainbow = false; }
        clearInterval(this.repeater);
        this.currentBlockIndex = 0;
        var RGBcolors = [];
        RGBcolors = [[255, 0, 0, 1], [0, 255, 0, 1], [0, 0, 255, 1]];
        //RGBcolors =[[255,0,0,1],[255,0,0,0.8],[0,255,0,1],[0,255,0,0.8],[0,0,255,1],[0,0,255,0.8]];
        if (isRainbow) {
            //colors=this.rainbow7Color();
            colors = RGBcolors;
        }
        else {
            colors = [colors[0], [0, 0, 0, 1]];
        }
        var totalStep = 30;
        var intervalCount = 0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        var target = this.AllBlockColor;
        this.setAllBlockColor([0, 0, 0, 1]);
        var repeatCountList = [];
        var RanRange = [1, 25];
        //var temp_target=JSON.parse(JSON.stringify(this.AllBlockColor));
        for (var index = 0; index < target.length; index++) {
            //console.log(' target[index].center_Point[0]', target[index].coordinateData.center_Point[0]);
            // var alpha=(target[index].coordinateData.center_Point[0]%this.imageMaxWidth)/this.imageMaxWidth;
            var modStep = (target[index].coordinateData.center_Point[0] % this.imageMaxWidth) / this.imageMaxWidth;
            //var ran=this.getRandom(0, colors.length - 1);
            var ran = (colors.length - 1) - Math.round(modStep * (colors.length - 1));
            //console.log('alpha',alpha);
            //console.log('modStep',modStep);
            //nowstep:modStep*totalStep
            repeatCountList.push({
                color: 0,
                nowPos: 0,
                nowstep: 0,
                repeatCount: 1,
                repeatTime: this.getRandom(RanRange[0], RanRange[1]),
            });
            var temp_block = repeatCountList[index];
            var temp_C = colors[0];
            var nextColor = colors[1];
            if (isRainbow) {
                repeatCountList[index].nowPos = ran;
                if (ran < colors.length - 1) {
                    temp_C = colors[ran];
                    nextColor = colors[ran + 1];
                }
                else {
                    temp_C = colors[0];
                    nextColor = colors[0];
                }
            }
            var temp_colorData = [0, 0, 0, 1];
            temp_colorData[0] = (temp_C[0] * (totalStep - temp_block.nowStep) + nextColor[0] * temp_block.nowStep) / totalStep;
            temp_colorData[1] = (temp_C[1] * (totalStep - temp_block.nowStep) + nextColor[1] * temp_block.nowStep) / totalStep;
            temp_colorData[2] = (temp_C[2] * (totalStep - temp_block.nowStep) + nextColor[2] * temp_block.nowStep) / totalStep;
            temp_colorData[3] = (temp_C[3] * (totalStep - temp_block.nowStep) + nextColor[3] * temp_block.nowStep) / totalStep;
        }
        //var SlopeEquation=this.SlopeEquation([0,0],[834,372]);//StartPoint.clientWidth
        var repeatCount = 0;
        var exist = [];
        this.repeater = setInterval(function () {
            //this.setAllBlockColor([0, 0, 0, 1]);
            var horizontalList = [];
            //console.log('horizontalList;',horizontalList);
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                // var resultL = exist.find((x) => x == index)
                // if (resultL != undefined) {
                //     break;
                // }
                exist.push(index);
                var temp_block = repeatCountList[index];
                //console.log('temp_block.color',temp_block.color);
                var tempColors = colors;
                //var tempColors =temp_block.color;
                var nextColor;
                if (temp_block.repeatTime > 0) {
                    temp_block.repeatTime -= 1;
                }
                if (temp_block.repeatTime == 0) {
                    if (temp_block.nowStep + 1 < totalStep) {
                        temp_block.nowStep += 1;
                    }
                    else {
                        temp_block.nowStep = 0;
                        var newRand = _this.getRandom(RanRange[0], RanRange[1]);
                        temp_block.repeatTime = newRand;
                        if (temp_block.nowPos + 1 < tempColors.length) {
                            temp_block.nowPos += 1;
                        }
                        else {
                            temp_block.nowPos = 0;
                        }
                    }
                    var temp_C = tempColors[temp_block.nowPos];
                    if (temp_block.nowPos + 1 < tempColors.length) {
                        nextColor = tempColors[temp_block.nowPos + 1];
                    }
                    else {
                        nextColor = tempColors[0];
                    }
                    var temp_colorData = [0, 0, 0, 1];
                    temp_colorData[0] = (temp_C[0] * (totalStep - temp_block.nowStep) + nextColor[0] * temp_block.nowStep) / totalStep;
                    temp_colorData[1] = (temp_C[1] * (totalStep - temp_block.nowStep) + nextColor[1] * temp_block.nowStep) / totalStep;
                    temp_colorData[2] = (temp_C[2] * (totalStep - temp_block.nowStep) + nextColor[2] * temp_block.nowStep) / totalStep;
                    temp_colorData[3] = (temp_C[3] * (totalStep - temp_block.nowStep) + nextColor[3] * temp_block.nowStep) / totalStep;
                    element.color = temp_colorData;
                }
                //continue;
                //break;
            }
            if (intervalCount * StartPoint.clientWidth < _this.imageMaxWidth) {
                intervalCount += 1;
            }
            else {
                intervalCount = 0;
                exist = [];
                repeatCount += 1;
            }
            // if(repeatCount>2){
            //     clearInterval(this.repeater);
            // }
        }, 100);
    };
    M_Light_CS.prototype.mode_Matrix2 = function (colors, isRainbow) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 255, 0, 1]]; }
        if (isRainbow === void 0) { isRainbow = false; }
        clearInterval(this.repeater);
        this.currentBlockIndex = 0;
        var RGBcolors = [];
        RGBcolors = [[255, 0, 0, 1], [0, 255, 0, 1], [0, 0, 255, 1]];
        if (isRainbow) {
            //colors=this.rainbow7Color();
            colors = RGBcolors;
        }
        else {
            colors = [colors[0], [0, 0, 0, 1]];
        }
        var totalStep = 30;
        var intervalCount = 0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        var target = this.AllBlockColor;
        this.setAllBlockColor([0, 0, 0, 1]);
        var repeatCountList = [];
        var RanRange = [10, 100];
        //var temp_target=JSON.parse(JSON.stringify(this.AllBlockColor));
        for (var index = 0; index < target.length; index++) {
            //console.log(' target[index].center_Point[0]', target[index].coordinateData.center_Point[0]);
            // var alpha=(target[index].coordinateData.center_Point[0]%this.imageMaxWidth)/this.imageMaxWidth;
            var modStep = (target[index].coordinateData.center_Point[0] % this.imageMaxWidth) / this.imageMaxWidth;
            //var ran=this.getRandom(0, colors.length - 1);
            var ran = (colors.length - 1) - Math.round(modStep * (colors.length - 1));
            //console.log('alpha',alpha);
            //console.log('modStep',modStep);
            //nowstep:modStep*totalStep
            repeatCountList.push({
                color: 0,
                nowPos: 0,
                nowstep: 0,
                repeatCount: 1,
                repeatTime: this.getRandom(RanRange[0], RanRange[1]),
            });
            var temp_block = repeatCountList[index];
            var temp_C = colors[0];
            var nextColor = colors[1];
            if (isRainbow) {
                repeatCountList[index].nowPos = ran;
                if (ran < colors.length - 1) {
                    temp_C = colors[ran];
                    nextColor = colors[ran + 1];
                }
                else {
                    temp_C = colors[0];
                    nextColor = colors[0];
                }
            }
            var temp_colorData = [0, 0, 0, 1];
            temp_colorData[0] = (temp_C[0] * (totalStep - temp_block.nowStep) + nextColor[0] * temp_block.nowStep) / totalStep;
            temp_colorData[1] = (temp_C[1] * (totalStep - temp_block.nowStep) + nextColor[1] * temp_block.nowStep) / totalStep;
            temp_colorData[2] = (temp_C[2] * (totalStep - temp_block.nowStep) + nextColor[2] * temp_block.nowStep) / totalStep;
            temp_colorData[3] = (temp_C[3] * (totalStep - temp_block.nowStep) + nextColor[3] * temp_block.nowStep) / totalStep;
            // temp_target[index].color=[[colors[0][0],colors[0][1],colors[0][2],1-alpha*1],[colors[0][0],colors[0][1],colors[0][2],alpha*1]];
            // target[index].color=[colors[0][0],colors[0][1],colors[0][2],alpha*1];
            //temp_target[index].color=colors;
            //target[index].color=temp_colorData;
        }
        //var SlopeEquation=this.SlopeEquation([0,0],[834,372]);//StartPoint.clientWidth
        var repeatCount = 0;
        var exist = [];
        this.repeater = setInterval(function () {
            //this.setAllBlockColor([0, 0, 0, 1]);
            var horizontalList = [];
            //console.log('horizontalList;',horizontalList);
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                // var resultL = exist.find((x) => x == index)
                // if (resultL != undefined) {
                //     break;
                // }
                exist.push(index);
                var temp_block = repeatCountList[index];
                var tempColors = colors;
                var nextColor;
                //var tempColors =temp_block.color;
                if (temp_block.repeatTime > 0) {
                    temp_block.repeatTime -= 1;
                }
                if (temp_block.repeatTime == 0) {
                    if (temp_block.nowStep + 1 < totalStep) {
                        temp_block.nowStep += 1;
                    }
                    else {
                        temp_block.nowStep = 0;
                        var newRand = _this.getRandom(RanRange[0], RanRange[1]);
                        temp_block.repeatTime = newRand;
                        if (temp_block.nowPos + 1 < tempColors.length) {
                            temp_block.nowPos += 1;
                        }
                        else {
                            temp_block.nowPos = 0;
                        }
                    }
                    var temp_C = tempColors[temp_block.nowPos];
                    if (temp_block.nowPos + 1 < tempColors.length) {
                        nextColor = tempColors[temp_block.nowPos + 1];
                    }
                    else {
                        nextColor = tempColors[0];
                    }
                    var temp_colorData = [0, 0, 0, 1];
                    temp_colorData[0] = (temp_C[0] * (totalStep - temp_block.nowStep) + nextColor[0] * temp_block.nowStep) / totalStep;
                    temp_colorData[1] = (temp_C[1] * (totalStep - temp_block.nowStep) + nextColor[1] * temp_block.nowStep) / totalStep;
                    temp_colorData[2] = (temp_C[2] * (totalStep - temp_block.nowStep) + nextColor[2] * temp_block.nowStep) / totalStep;
                    temp_colorData[3] = (temp_C[3] * (totalStep - temp_block.nowStep) + nextColor[3] * temp_block.nowStep) / totalStep;
                    element.color = temp_colorData;
                }
                //continue;
                //break;
            }
            if (intervalCount * StartPoint.clientWidth < _this.imageMaxWidth) {
                intervalCount += 1;
            }
            else {
                intervalCount = 0;
                exist = [];
                repeatCount += 1;
            }
            // if(repeatCount>2){
            //     clearInterval(this.repeater);
            // }
        }, 100);
    };
    M_Light_CS.prototype.mode_Starlight = function (colors, isRainbow) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 255, 0, 1]]; }
        if (isRainbow === void 0) { isRainbow = false; }
        clearInterval(this.repeater);
        this.currentBlockIndex = 0;
        //colors=[[255,0,0,1]];
        var translatecolors = this.rainbow7Color();
        //colors=[[255,0,0,1],[0,0,0,1],[0,0,255,1],[0,0,0,1]];
        // colors=this.rainbow7Color()
        // for (let index = 0; index < colors.length; index ++) {
        //     translatecolors.push([0,0,0,1]);
        //     translatecolors.push(colors[index]);
        // }
        var totalStep = 5;
        var intervalCount = 0;
        var StartPoint = this.getNowBlock(0).coordinateData;
        var target = this.AllBlockColor;
        this.setAllBlockColor([0, 0, 0, 1]);
        var repeatCountList = [];
        var RanRange = [1, 200];
        //var temp_target=JSON.parse(JSON.stringify(this.AllBlockColor));
        for (var index = 0; index < target.length; index++) {
            var modStep = (target[index].coordinateData.center_Point[0] % this.imageMaxWidth) / this.imageMaxWidth;
            var ran = this.getRandom(0, translatecolors.length - 1);
            //var ran=(colors.length - 1)-Math.round(modStep* (colors.length - 1));
            //console.log('modStep',modStep);
            console.log('ran', ran);
            repeatCountList.push({
                nowColor: [0, 0, 0, 1],
                nextColor: translatecolors[ran],
                nowStep: 0,
                repeatCount: 0,
                repeatTime: this.getRandom(RanRange[0], RanRange[1]),
            });
            //target[index].color=repeatCountList[index].color;
        }
        //var SlopeEquation=this.SlopeEquation([0,0],[834,372]);//StartPoint.clientWidth
        this.repeater = setInterval(function () {
            //this.setAllBlockColor([0, 0, 0, 1]);
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                var temp_block = repeatCountList[index];
                var tempColors = translatecolors;
                //var tempColors =temp_block.color;
                if (temp_block.repeatTime > 0) {
                    temp_block.repeatTime -= 1;
                }
                else if (temp_block.repeatTime == 0) {
                    if (temp_block.nowStep + 1 < totalStep) {
                        temp_block.nowStep += 1;
                    }
                    else {
                        var newRand = _this.getRandom(RanRange[0], RanRange[1]);
                        temp_block.nowStep = 0;
                        temp_block.repeatCount += 1;
                        temp_block.nowColor = JSON.parse(JSON.stringify(temp_block.nextColor));
                        if (temp_block.repeatCount % 2) {
                            temp_block.nextColor = [0, 0, 0, 1];
                            temp_block.repeatTime = 40;
                        }
                        else {
                            temp_block.nextColor = JSON.parse(JSON.stringify(translatecolors[_this.getRandom(0, translatecolors.length - 1)]));
                            temp_block.repeatTime = _this.getRandom(RanRange[0], RanRange[1]);
                        }
                    }
                    console.log('temp_block', temp_block);
                    var temp_colorData = [0, 0, 0, 1];
                    for (var index2 = 0; index2 < temp_colorData.length - 1; index2++) {
                        temp_colorData[index2] = (temp_block.nowColor[index2] * (totalStep - temp_block.nowStep) + temp_block.nextColor[index2] * temp_block.nowStep) / totalStep;
                    }
                    element.color = temp_colorData;
                }
                //continue;
                //break;
            }
        }, 100);
    };
    M_Light_CS.prototype.mode_T0 = function (colors) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 0, 0, 1], [0, 255, 0, 1], [0, 0, 255, 1]]; }
        //this.addBlockIndex();
        var Brightness = 1;
        // var mode=0;
        // if(colors.length>1){
        //     mode=1;
        // }
        clearInterval(this.repeater);
        this.currentBlockIndex = 43;
        var repeatMin = 5;
        var repeatMax = 200;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock().coordinateData;
        var horizontalList = [];
        var target = this.AllBlockColor;
        var setColorArr;
        var randomValue = this.getRandom(0, colors.length - 1);
        var setColor = colors[randomValue];
        var step_End = false;
        console.log('setColor', setColor);
        this.mode_reset();
        if (repeatCount == 0) {
            this.getNowBlock().color = setColor;
        }
        for (var index = 0; index < target.length; index++) {
            var element = target[index];
            var Ysdis = Math.abs(StartPoint.top_Left[1] - element.coordinateData.top_Left[1]);
            if (Ysdis < 10) {
                horizontalList.push(index);
            }
        }
        this.repeater = setInterval(function () {
            setColor = colors[_this.getRandom(0, colors.length - 1)];
            var resultL = horizontalList.find(function (x) { return x == _this.currentBlockIndex - repeatCount; });
            var resultR = horizontalList.find(function (x) { return x == _this.currentBlockIndex + repeatCount; });
            if (step_End) {
                if (Brightness > 0) {
                    Brightness -= 0.05;
                    for (var index = 0; index < horizontalList.length; index++) {
                        var element = target[horizontalList[index]];
                        var temp = colors[_this.getRandom(0, colors.length - 1)];
                        temp[3] = Brightness;
                        element.color = temp;
                    }
                }
                else {
                    Brightness = 1;
                    //step_End = false;
                    //clearInterval(this.repeater);
                }
                return;
            }
            else if (resultL == undefined && resultR == undefined) {
                repeatCount = 0;
                step_End = true;
            }
            else {
                if (resultL != undefined) {
                    target[resultL].color = setColor;
                }
                if (resultR != undefined) {
                    target[resultR].color = setColor;
                }
                ;
                repeatCount += 1;
            }
        }, 50 * this.animationSpeed);
        // this.repeaterTimeout=if(Brightness>0){
        //     Brightness-=0.01;
        // }
        //clearInterval(this.repeater);
    };
    M_Light_CS.prototype.mode_T1 = function (colors) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 0, 0, 1], [0, 255, 0, 1], [0, 0, 255, 1]]; }
        var Brightness = 1;
        // var mode=0;
        // if(colors.length>1){
        //     mode=1;
        // }
        clearInterval(this.repeater);
        this.currentBlockIndex = 43;
        var repeatMin = 5;
        var repeatMax = 200;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock().coordinateData;
        var horizontalList = [];
        var target = this.AllBlockColor;
        var randomValue = this.getRandom(0, colors.length - 1);
        var setColor = colors[randomValue];
        var step_End = false;
        console.log('setColor', setColor);
        this.mode_reset();
        if (repeatCount == 0) {
            this.getNowBlock().color = setColor;
        }
        for (var index = 0; index < target.length; index++) {
            var element = target[index];
            var Ysdis = Math.abs(StartPoint.top_Left[1] - element.coordinateData.top_Left[1]);
            //if (Ysdis < 10) {
            horizontalList.push(index);
            //}
        }
        this.repeater = setInterval(function () {
            setColor = colors[_this.getRandom(0, colors.length - 1)];
            var resultL = horizontalList.find(function (x) { return x == _this.currentBlockIndex - repeatCount; });
            var resultR = horizontalList.find(function (x) { return x == _this.currentBlockIndex + repeatCount; });
            if (step_End) {
                if (Brightness > 0) {
                    Brightness -= 0.05;
                    for (var index = 0; index < horizontalList.length; index++) {
                        var element = target[horizontalList[index]];
                        var temp = colors[_this.getRandom(0, colors.length - 1)];
                        temp[3] = Brightness;
                        element.color = temp;
                    }
                }
                else {
                    Brightness = 1;
                    step_End = false;
                    clearInterval(_this.repeater);
                }
                return;
            }
            else if (resultL == undefined && resultR == undefined) {
                repeatCount = 0;
                step_End = true;
            }
            else {
                if (resultL != undefined) {
                    target[resultL].color = setColor;
                }
                if (resultR != undefined) {
                    target[resultR].color = setColor;
                }
                ;
                repeatCount += 1;
            }
        }, 50 * this.animationSpeed);
        // this.repeaterTimeout=if(Brightness>0){
        //     Brightness-=0.01;
        // }
        //clearInterval(this.repeater);
    };
    M_Light_CS.prototype.mode_gloriousMode = function () {
        var _this = this;
        //this.addBlockIndex();
        clearInterval(this.repeater);
        this.currentBlockIndex = 36;
        var rgbRepeat = 0;
        var repeatCount = 0;
        //this.mode_AllBlockColor([255,0,0,1]);
        var StartPoint = this.getNowBlock().coordinateData;
        var setRGB = [255, 0, 0, 1];
        var tempRGB = [255, 0, 0, 1];
        var repeatCountArr = [0, 0, 0];
        this.repeater = setInterval(function () {
            //this.mode_AllBlockColor([0,255,0,1]);
            //this.mode_reset();
            var target = _this.AllBlockColor;
            // sub_disL-=50;
            // sub_disR+=50;
            _this.getNowBlock().color = setRGB;
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                console.log('this.M_Light_PRESETS.addBlockIndex();', element);
                var dis = _this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                //+(repeatCount*50)
                //console.log('setCoordinate', StartPoint.center_Point[0],element.coordinateData.center_Point[0])
                var compareResult = _this.minKeyWidth * repeatCount;
                var compareResultMax = _this.minKeyWidth * repeatCount - _this.minKeyWidth;
                //repeatMax=compareResult+200;
                //var Ysdis=Math.abs(StartPoint.top_Left[1]-element.coordinateData.top_Left[1]);
                //if (Ysdis < 5) {
                if (dis < compareResult && dis > compareResultMax) {
                    element.color = setRGB;
                }
            }
            if (compareResult < _this.imageMaxWidth) {
                repeatCount += 1;
            }
            else {
                repeatCount = 0;
            }
        }, 500 * this.animationSpeed);
        //clearInterval(this.repeater);
    };
    M_Light_CS.prototype.mode_T3 = function () {
        var _this = this;
        //this.addBlockIndex();
        clearInterval(this.repeater);
        this.currentBlockIndex = 36;
        var repeatMin = 5;
        var repeatMax = 200;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock().coordinateData;
        this.repeater = setInterval(function () {
            _this.mode_reset();
            var target = _this.AllBlockColor;
            // sub_disL-=50;
            // sub_disR+=50;
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                console.log('this.M_Light_PRESETS.addBlockIndex();', element);
                var dis = _this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                //+(repeatCount*50)
                //console.log('setCoordinate', StartPoint.center_Point[0],element.coordinateData.center_Point[0])
                //var compareResult =Math.abs(0-element.coordinateData.center_Point[0]);
                //if()
                var compareValueL = StartPoint.center_Point[0] + (repeatCount * StartPoint.clientWidth);
                var compareValueR = StartPoint.center_Point[0] - (repeatCount * StartPoint.clientWidth);
                //repeatMax=compareResult+200;
                var Ysdis = Math.abs(StartPoint.top_Left[1] - element.coordinateData.top_Left[1]);
                if (Ysdis < 5) {
                    if (compareValueR > element.coordinateData.top_Left[0] && compareValueR < element.coordinateData.top_Right[0]) {
                        element.color = [255, 0, 0, 1];
                    }
                    else if (compareValueL > element.coordinateData.top_Left[0] && compareValueL < element.coordinateData.top_Right[0]) {
                        element.color = [255, 0, 0, 1];
                    }
                    else {
                        element.color = [0, 0, 0, 0];
                    }
                }
                // if (compareResult > repeatMin+(repeatCount*50) && compareResult < repeatMax+(repeatCount*50)) {
                //     element.color = [255,255,0,1];
                // }
                // else {
                //     element.color = [0,255,0,1];
                // }
            }
            if (repeatCount < 15 && compareValueL < _this.imageMaxWidth && compareValueR < _this.imageMaxWidth) {
                repeatCount += 1;
            }
            else {
                repeatCount = 0;
            }
        }, 500 * this.animationSpeed);
    };
    M_Light_CS.prototype.setAllBlockColor = function (rgba) {
        if (rgba === void 0) { rgba = [0, 0, 0, 1]; }
        var target = this.AllBlockColor;
        for (var index = 0; index < target.length; index++) {
            var element = target[index];
            element.color = JSON.parse(JSON.stringify(rgba));
        }
    };
    M_Light_CS.prototype.replaceAllBlockColor = function (AllBlock) {
        for (var index = 0; index < AllBlock.length; index++) {
            this.AllBlockColor[index].color = AllBlock[index].color;
            this.AllBlockColor[index].breathing = AllBlock[index].breathing;
            this.AllBlockColor[index].clearStatus = AllBlock[index].clearStatus;
        }
    };
    M_Light_CS.prototype.setAllBlockAlpha = function (alpha) {
        if (alpha === void 0) { alpha = 0; }
        var target = this.AllBlockColor;
        for (var index = 0; index < target.length; index++) {
            var color = target[index].color;
            if ((color[3] - 0.1) >= 0) {
                color[3] -= 0.1;
            }
            else {
                color[3] = 0;
            }
        }
    };
    M_Light_CS.prototype.mode_reset = function () {
        var target = this.AllBlockColor;
        for (var index = 0; index < target.length; index++) {
            var element = target[index];
            element.color = [0, 0, 0, 0];
        }
    };
    M_Light_CS.prototype.mode_FastRunWithoutTrace = function (colors, isRainbow, blockIndex) {
        var _this = this;
        if (colors === void 0) { colors = [[255, 0, 0, 1]]; }
        if (isRainbow === void 0) { isRainbow = false; }
        if (blockIndex === void 0) { blockIndex = 37; }
        //colors =[[255,0,0,1],[0,255,0,1],[0,0,255,1]];
        if (isRainbow) {
            colors = this.rainbow7Color();
        }
        else {
            colors.push([0, 0, 0, 1]);
        }
        clearInterval(this.repeater);
        this.currentBlockIndex = blockIndex;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock().coordinateData;
        this.setAllBlockColor([0, 0, 0, 1]);
        var totalStep = 10;
        var totalRepeatCount = 0;
        var horizontalList = {};
        var target = this.AllBlockColor;
        var randomValue = this.getRandom(0, colors.length - 1);
        var step_End = false;
        //this.mode_reset();
        //var c_temp=colors[this.getRandom(0,colors.length-1)];
        horizontalList[this.currentBlockIndex] = {
            color: colors[0]
        };
        for (var index = 0; index < target.length; index++) {
            var element = target[index];
            var Ysdis = Math.abs(StartPoint.top_Left[1] - element.coordinateData.top_Left[1]);
            if (Ysdis <= 10) {
                horizontalList[index] = {
                    color: colors[0],
                    nowPos: 0,
                    nowstep: 0,
                    repeatCount: 0,
                    repeatTime: this.getRandom(15, 20),
                };
            }
        }
        console.log('horizontalList', Object.keys(horizontalList));
        this.repeater = setInterval(function () {
            var LIndex = _this.currentBlockIndex - repeatCount;
            var RIndex = _this.currentBlockIndex + repeatCount;
            var resultL = horizontalList[LIndex];
            //horizontalList.find((x) => x == this.currentBlockIndex-repeatCount);
            var resultR = horizontalList[RIndex];
            //horizontalList.find((x) => x == this.currentBlockIndex+repeatCount);
            if (step_End) {
                var tempColors = colors;
                var nextColor;
                var arr = Object.keys(horizontalList);
                for (var index = 0; index < arr.length; index++) {
                    var index_num = parseInt(arr[index]);
                    var temp_block = horizontalList[index_num];
                    if (temp_block.nowStep + 1 <= totalStep) {
                        temp_block.nowStep += 1;
                    }
                    else {
                        temp_block.nowStep = 0;
                        temp_block.repeatCount += 1;
                        // var newRand = this.getRandom(15, 15);
                        // temp_block.repeatTime = newRand;
                        // if (temp_block.nowPos + 1 < tempColors.length) {
                        //     temp_block.nowPos += 1;
                        // }
                        // else {
                        //     temp_block.nowPos = 0;
                        // }
                        //step_End = false;
                        // if(temp_block.repeatCount==2){
                        //     clearInterval(this.repeater);
                        //     return;
                        // }
                        //clearInterval(this.repeater);
                    }
                    var temp_C = tempColors[temp_block.nowPos];
                    if (temp_block.nowPos + 1 < tempColors.length) {
                        nextColor = tempColors[temp_block.nowPos + 1];
                    }
                    else {
                        nextColor = tempColors[0];
                    }
                    // if(temp_block.repeatCount==2){
                    //     return;
                    // }
                    var temp_colorData = [0, 0, 0, 1];
                    temp_colorData[0] = (temp_C[0] * (totalStep - temp_block.nowStep) + nextColor[0] * temp_block.nowStep) / totalStep;
                    temp_colorData[1] = (temp_C[1] * (totalStep - temp_block.nowStep) + nextColor[1] * temp_block.nowStep) / totalStep;
                    temp_colorData[2] = (temp_C[2] * (totalStep - temp_block.nowStep) + nextColor[2] * temp_block.nowStep) / totalStep;
                    temp_colorData[3] = (temp_C[3] * (totalStep - temp_block.nowStep) + nextColor[3] * temp_block.nowStep) / totalStep;
                    if (temp_block.repeatCount != 2) {
                        target[index_num].color = temp_colorData;
                    }
                }
                //totalRepeatCount+=1
                if (horizontalList[arr[0]].repeatCount == 2) {
                    step_End = false;
                    clearInterval(_this.repeater);
                }
                return;
            }
            if (resultL == undefined && resultR == undefined) {
                repeatCount = 0;
                step_End = true;
            }
            else {
                if (resultL != undefined) {
                    target[LIndex].color = horizontalList[LIndex].color;
                }
                if (resultR != undefined) {
                    target[RIndex].color = horizontalList[RIndex].color;
                }
                ;
                repeatCount += 1;
            }
        }, 35 * this.animationSpeed);
    };
    M_Light_CS.prototype.mode_PassWithoutTrace = function (colors, index) {
        var _this = this;
        if (colors === void 0) { colors = [[0, 0, 255, 1]]; }
        if (index === void 0) { index = 20; }
        clearInterval(this.repeater);
        //this.currentBlockIndex=index;
        var randomColor = colors[this.getRandom(0, colors.length - 1)];
        this.setAllBlockColor([0, 0, 0, 1]);
        this.repeater = setInterval(function () {
            if (randomColor[3] <= 0) {
                clearInterval(_this.repeater);
            }
            var target = _this.AllBlockColor;
            target[index].color = randomColor;
            if (randomColor[0] > 0) {
                randomColor[0] -= 1;
            }
            if (randomColor[2] > 0) {
                randomColor[2] -= 1;
            }
            if (randomColor[2] > 0) {
                randomColor[2] -= 1;
            }
        }, 10);
    };
    M_Light_CS.prototype.rainbow7Color = function () {
        return [[255, 0, 0, 1], [255, 165, 0, 1], [255, 255, 0, 1], [0, 255, 0, 1], [0, 127, 255, 1], [0, 0, 255, 1], [139, 0, 255, 1]];
    };
    M_Light_CS.prototype.slopeEquation = function (point1, point2) {
        if (point1 === void 0) { point1 = [25, 0]; }
        if (point2 === void 0) { point2 = [320, 400]; }
        //斜率y2-y1/x2-x1;
        var Slope = (point2[1] - point1[1]) / (point2[0] - point1[0]); //x*1 y*1*Slope
        var LinearList = [];
        var temp_x = [point1[0], point1[1]];
        while (temp_x[0] < point2[0] && temp_x[1] < point2[1]) {
            temp_x[0] += 1;
            temp_x[1] += 1 * Slope;
            //console.log('temp_x=',temp_x);
            LinearList.push([temp_x[0], temp_x[1]]);
        }
        return LinearList;
    };
    M_Light_CS.prototype.mode_Diffusion = function (colors) {
        var _this = this;
        if (colors === void 0) { colors = []; }
        colors = [[255, 0, 0, 1]];
        colors = this.rainbow7Color();
        var Brightness = 1;
        // var mode=0;
        // if(colors.length>1){
        //     mode=1;
        // }
        clearInterval(this.repeater);
        this.currentBlockIndex = 32;
        var repeatMin = 5;
        var repeatMax = 200;
        var repeatCount = 0;
        var StartPoint = this.getNowBlock().coordinateData;
        var horizontalList = {};
        var target = this.AllBlockColor;
        var randomValue = this.getRandom(0, colors.length - 1);
        //console.log('setColor', setColor)
        this.mode_reset();
        // horizontalList[this.currentBlockIndex]={
        //        color:this.toCssRGB(colors[this.getRandom(0,colors.length-1)])
        // }
        // console.log('horizontalList', horizontalList)
        var T2 = colors[this.getRandom(0, colors.length - 1)];
        console.log('horizontalList', Object.keys(horizontalList));
        this.repeater = setInterval(function () {
            T2 = colors[_this.getRandom(0, colors.length - 1)];
            for (var index = 0; index < target.length; index++) {
                var element = target[index];
                var dis = _this.distanceCalculation(StartPoint.center_Point[0], StartPoint.center_Point[1], element.coordinateData.center_Point[0], element.coordinateData.center_Point[1]);
                if (dis < repeatCount * StartPoint.clientWidth) {
                    element.color = T2;
                }
                else {
                    //element.color=this.toCssRGB([0,0,255,0.4]);
                }
            }
            if (repeatCount * StartPoint.clientWidth < _this.imageMaxWidth - StartPoint.clientWidth) {
                repeatCount += 1;
            }
            else {
                repeatCount = 0;
                _this.mode_reset();
            }
        }, 250 * this.animationSpeed);
        // this.repeaterTimeout=if(Brightness>0){
        //     Brightness-=0.01;
        // }
        //clearInterval(this.repeater);
    };
    M_Light_CS.prototype.getIndexRGBCss = function (i) {
        //console.log('getIndexRGBCss', i)
        var target = this.AllBlockColor;
        if (target[i].color != undefined) {
            return this.toCssRGB(target[i].color);
        }
    };
    M_Light_CS.prototype.getRandom = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
    ;
    M_Light_CS.prototype.getRgbRandom = function () {
        var RGBcolors = [[255, 0, 0, 0.9], [0, 255, 0, 0.9], [0, 0, 255, 0.9]];
        return RGBcolors[this.getRandom(0, 2)];
    };
    ;
    M_Light_CS.prototype.toCssRGB = function (RGBA) {
        if (RGBA === void 0) { RGBA = [0, 0, 0, 0]; }
        return 'rgb(' + RGBA[0] + ',' + RGBA[1] + ',' + RGBA[2] + ',' + RGBA[3] + ')';
    };
    M_Light_CS.prototype.setDefault = function () { };
    return M_Light_CS;
}());



/***/ }),

/***/ "./src/keyboard/BoxSelectionArea.ts":
/*!******************************************!*\
  !*** ./src/keyboard/BoxSelectionArea.ts ***!
  \******************************************/
/*! exports provided: BoxSelectionArea */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoxSelectionArea", function() { return BoxSelectionArea; });
var BoxSelectionArea = /** @class */ (function () {
    function BoxSelectionArea(targetName) {
        if (targetName === void 0) { targetName = ''; }
        this.EventCanBoxSelect = false;
        this.mouseOn = false;
        this.startX = 0;
        this.startY = 0;
        this.searchTargetName = ''; //RGBColorBlockStyle
        this.offsetValue = [80, 80];
        this.selectedEls = [];
        this.searchTargetName = targetName;
        //var T2 = document.getElementById(parent).getBoundingClientRect();
    }
    BoxSelectionArea.prototype.mousedown = function (e) {
        //console.log("註冊.e1", this.EventCanBoxSelect,e.which,e.buttons);
        if (e.buttons !== 1 || e.which !== 1 || !this.EventCanBoxSelect)
            return;
        this.mouseOn = true;
        console.log('BoxSelectionArea成功註冊_dir.mousedown', e, this.searchTargetName);
        //console.dir(this.selectContainer,);
        this.startX = e.clientX - this.selectContainer.offsetLeft - this.offsetValue[0];
        //-this.selectContainer.scrollLeft;
        this.startY = e.clientY - this.selectContainer.offsetTop;
        //-this.selectContainer.scrollTop;
        //this.showCustomTestDataWindows(obj);
        if (!document.getElementById('selectDiv')) {
            var selDiv = document.createElement('div');
            selDiv.style.cssText =
                'position:absolute;width:0;height:0;\
                   margin:0;padding:0;border:1px dashed #blue;\
                   background-color:#aaa;z-index:1000;opacity:0.6;display:none;    pointer-events: none;';
            selDiv.id = 'selectDiv';
            selDiv.style.left = this.startX + 'px';
            selDiv.style.top = this.startY + 'px';
            this.selectContainer.appendChild(selDiv);
        }
        this.mousemove(e);
    };
    BoxSelectionArea.prototype.mousemove = function (e) {
        //var MainFrame = document.getElementById("MainFrame");
        if (!this.mouseOn)
            return;
        console.log('BoxSelectionArea.mousemove', this.searchTargetName);
        var _x = e.clientX - this.selectContainer.offsetLeft - this.offsetValue[0];
        //+this.selectContainer.scrollLeft;
        var _y = e.clientY - this.selectContainer.offsetTop;
        //+ this.selectContainer.scroll;
        // 获取非行间样式
        function getStyle(element, attr) {
            if (element.currentStyle) {
                return element.currentStyle[attr];
            }
            else {
                return getComputedStyle(element, null)[attr];
            }
        }
        // var target = getStyle(this.selectContainer, "transform");    //matrix(0.7, 0, 0, 0.7, 0, 0)
        // var oneposition = target.indexOf("(");
        // var twoposition = target.indexOf(",");
        // var Text = target.substring(oneposition + 1, twoposition);
        // console.log("内联 非行间样式", this.selectContainer.style.transform, Text);  //translate(500px)
        // console.log("BoxSelectionArea.mousemove", _x, _y, this.startX, this.startY);
        var selDiv = document.getElementById('selectDiv');
        selDiv.style.display = 'block';
        selDiv.style.left = Math.min(_x, this.startX) + 'px';
        /// parseFloat(Text)) + 'px';
        selDiv.style.top = Math.min(_y, this.startY) + 'px';
        /// parseFloat(Text)) + 'px';
        selDiv.style.width = Math.abs(_x - this.startX) + 'px';
        selDiv.style.height = Math.abs(_y - this.startY) + 'px';
    };
    BoxSelectionArea.prototype.mouseup = function (e) {
        //console.log('BoxSelectionArea.mouseup', this.mouseOn)
        var selDiv = document.getElementById('selectDiv'); //Custom Create Dom Id
        if (!this.mouseOn) {
            if (selDiv) {
                selDiv.style.display = 'none';
            }
            return 'Fail';
        }
        if (parseFloat(selDiv.style.width) <= 0) {
        }
        //console.log("selDiv_selDiv_mouseup", selDiv ,selDiv.offsetLeft,selDiv.offsetTop,selDiv.offsetWidth,selDiv.offsetHeight);
        //console.dir(selDiv) ;
        //var fileDivs = document.getElementsByClassName(this.searchTargetName)//Assign Search  Target
        var fileDivs = [];
        fileDivs = document.getElementsByClassName(this.searchTargetName);
        this.selectedEls = new Array(); //refresh
        var fLeft = selDiv.offsetLeft;
        //-this.selectContainer.offsetLeft;-(fileDivs[0].parentElement.offsetLeft
        var fTop = selDiv.offsetTop;
        //-this.selectContainer.offsetTop;
        var fWidth = selDiv.offsetWidth;
        var fHeight = selDiv.offsetHeight;
        for (var i = 0; i < fileDivs.length; i++) {
            //console.log("selectedEls.fileDivs_parentElement",fileDivs[i].parentElement.offsetLeft,this.selectContainer.offsetLeft);
            var targetRightX = fileDivs[i].offsetWidth + fileDivs[i].offsetLeft + fileDivs[0].parentElement.parentElement.offsetLeft;
            var targetDownY = fileDivs[i].offsetHeight + fileDivs[i].offsetTop + fileDivs[0].parentElement.parentElement.offsetTop;
            var targetLeftX = fileDivs[i].offsetLeft + fileDivs[0].parentElement.parentElement.offsetLeft;
            var targetUpY = fileDivs[i].offsetTop + fileDivs[0].parentElement.parentElement.offsetTop;
            var frameRangeRightX = fLeft + fWidth;
            var frameRangeDownY = fTop + fHeight;
            if (targetRightX > fLeft && targetDownY > fTop && targetLeftX < frameRangeRightX && targetUpY < frameRangeDownY) {
                //selectedEls.push(fileDivs[i]);
                this.selectedEls.push(i);
            }
        }
        //console.log("selectedEls.push_result",this.selectedEls);
        selDiv.style.display = 'none';
        this.mouseOn = false;
        return 'Finish';
    };
    BoxSelectionArea.prototype.setSelectContainer = function (Domname) {
        this.selectContainer = document.getElementById(Domname);
        console.log('BoxSelectionArea', this.selectContainer);
    };
    BoxSelectionArea.prototype.checkArrayisAllTrue = function (AllBlockColor) {
        console.log('checkArrayisAllTrue_inputdata', AllBlockColor);
        console.dir(AllBlockColor);
        for (var i = 0; i < this.selectedEls.length; i++) {
            //selectedEls.push(fileDivs[i]);
            if (AllBlockColor[this.selectedEls[i]].border == false) {
                console.log('checkArrayisAllTruefalse', 'index', this.selectedEls[i]);
                return false;
            }
        }
        //console.log("checkArrayisAllTruefalse","true");
        return true; // 當全部 checked才能回傳 true
    };
    BoxSelectionArea.prototype.checkArrayisAllTrueP7 = function (AllBlockColor) {
        console.log('checkArrayisAllTrueCustom_inputdata', AllBlockColor);
        for (var i = 0; i < this.selectedEls.length; i++) {
            if (AllBlockColor[this.selectedEls[i]] == false) {
                return false;
            }
        }
        return true; // 當全部 checked才能回傳 true
    };
    return BoxSelectionArea;
}());



/***/ }),

/***/ "./src/keyboard/KeyAssignManager.ts":
/*!******************************************!*\
  !*** ./src/keyboard/KeyAssignManager.ts ***!
  \******************************************/
/*! exports provided: KeyAssignManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyAssignManager", function() { return KeyAssignManager; });
var KeyAssignManager = /** @class */ (function () {
    function KeyAssignManager() {
        this.assignValue = '';
        this.macro_RepeatType = 0;
        this.combinationkey = 0;
        this.combinationkeyEnable = false;
        this.shortcutsWindowsEnable = false;
        this.recordBindCodeName = "";
        this.recordBindCodeType = "";
    }
    /**
       * CodeNameType list
       * @flag
       * KEYBOARD
       * MOUSE
       * Multimedia
       * SingleKey
       * MacroFunction
       * Shortcuts
       * DISABLE
       * LaunchProgram
       * LaunchWebsite
       */
    KeyAssignManager.prototype.setNowCodeName = function (CodeName, CodeNameType) {
        this.recordBindCodeName = CodeName;
        this.recordBindCodeType = CodeNameType;
        if (CodeNameType = "Shortcuts") {
            this.setShortCut(CodeNameType);
        }
    };
    KeyAssignManager.prototype.resetDefaultVariable = function () {
        this.recordBindCodeType = "";
        this.recordBindCodeName = "";
        this.WebsitePath = "";
        this.ApplicationPath = "";
        this.combinationkeyEnable = false;
        this.shortcutsWindowsEnable = false;
        this.Shift = false;
        this.Ctrl = false;
        this.Alt = false;
        this.Windows = false;
    };
    /**
     * click Shortcut type
     * @flag
     * 1. Launch Program
     * 2. Launch Website
     * 3. Windows
     */
    KeyAssignManager.prototype.setShortCut = function (nameType) {
        if (nameType == "LaunchProgram") {
            this.WebsitePath = undefined;
        }
        else if (nameType == "LaunchWebsite") {
            this.ApplicationPath = undefined;
        }
        else {
            this.ApplicationPath = undefined;
            this.WebsitePath = undefined;
        }
    };
    /**
     * set Modify key
     */
    KeyAssignManager.prototype.setCombinationKeyEnable = function () {
        if (!this.combinationkeyEnable) {
            this.Shift = false;
            this.Alt = false;
            this.Ctrl = false;
            this.Windows = false;
        }
    };
    KeyAssignManager.prototype.updateVariable = function (TData) {
        //var target=this.KeyBoardManager.getTarget().getNowModeTargetMatrixKey();
        var arr = Object.keys(TData);
        for (var index = 0; index < arr.length; index++) {
            if (this[arr[index]] != undefined) {
                this[arr[index]] = TData[arr[index]];
            }
        }
    };
    return KeyAssignManager;
}());



/***/ }),

/***/ "./src/keyboard/KeyBoardData.ts":
/*!**************************************!*\
  !*** ./src/keyboard/KeyBoardData.ts ***!
  \**************************************/
/*! exports provided: KB61Prohibit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KB61Prohibit", function() { return KB61Prohibit; });
var KB61Prohibit = /** @class */ (function () {
    function KB61Prohibit() {
    }
    KB61Prohibit.get_prohibit = function (Class) {
        if (Class === void 0) { Class = ''; }
        var target;
        switch (Class) {
            case 'All':
                target = this.prohibitAll;
                break;
            case 'Num':
                target = this.prohibitNum;
                break;
            case 'Symbol':
                target = this.prohibitSymbol;
                break;
            case 'ABC':
                target = this.prohibitABC;
                break;
            case 'Control':
                target = this.prohibitControl;
                break;
        }
        if (Class != '') {
            var resultIndexArr = [];
            for (var one = 0; one < this.KeyIndexMatrix1.length; one++) {
                var element = this.KeyIndexMatrix1[one];
                for (var index2 = 0; index2 < target.length; index2++) {
                    if (target[index2] == element) {
                        resultIndexArr.push(one);
                    }
                }
            }
            console.log('KB61Prohibit_constructor', resultIndexArr);
            return resultIndexArr;
        }
    };
    KB61Prohibit.prohibitNum = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    KB61Prohibit.prohibitAll = [
        '`',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '-',
        '+',
        'Backspace',
        'Tab',
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        '[',
        ']',
        '\\',
        'Caps',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        ':',
        '"',
        'Enter',
        'LShift',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
        ',',
        '.',
        '/',
        'RShift',
        'LCtrl',
        'LWin',
        'LAlt',
        'Space',
        'RAlt',
        'RWin',
        'Menu',
        'RCtrl',
    ];
    KB61Prohibit.prohibitABC = [
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
    ];
    KB61Prohibit.prohibitControl = [
        '`',
        'Backspace',
        'Tab',
        'Caps',
        'Enter',
        'LShift',
        'RShift',
        'LCtrl',
        'LWin',
        'LAlt',
        'Space',
        'RAlt',
        'RWin',
        'Menu',
        'RCtrl',
    ];
    KB61Prohibit.prohibitSymbol = ['-', '+', '[', ']', '\\', ':', '"', ',', '.', '/'];
    KB61Prohibit.KeyIndexMatrix1 = [
        '`',
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '0',
        '-',
        '+',
        'Backspace',
        'Tab',
        'Q',
        'W',
        'E',
        'R',
        'T',
        'Y',
        'U',
        'I',
        'O',
        'P',
        '[',
        ']',
        '\\',
        'Caps',
        'A',
        'S',
        'D',
        'F',
        'G',
        'H',
        'J',
        'K',
        'L',
        ':',
        '"',
        'Enter',
        'LShift',
        'Z',
        'X',
        'C',
        'V',
        'B',
        'N',
        'M',
        ',',
        '.',
        '/',
        'RShift',
        'LCtrl',
        'LWin',
        'LAlt',
        'Space',
        'RAlt',
        'RWin',
        'Menu',
        'RCtrl',
    ]; //8
    return KB61Prohibit;
}());



/***/ }),

/***/ "./src/keyboard/KeyBoardManager.ts":
/*!*****************************************!*\
  !*** ./src/keyboard/KeyBoardManager.ts ***!
  \*****************************************/
/*! exports provided: KeyBoardManager, KeyBoard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyBoardManager", function() { return KeyBoardManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyBoard", function() { return KeyBoard; });
/* harmony import */ var _KeyBoardData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./KeyBoardData */ "./src/keyboard/KeyBoardData.ts");
/* harmony import */ var _backend_others_SupportData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../backend/others/SupportData */ "./src/backend/others/SupportData.js");
/* harmony import */ var _backend_others_SupportData__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_backend_others_SupportData__WEBPACK_IMPORTED_MODULE_1__);


// let AllFunctionMapping = System._nodeRequire('./backend/others/SupportData').AllFunctionMapping
var KeyBoardManager = /** @class */ (function () {
    //AllFunctionMapping=new AllFunctionMapping();
    function KeyBoardManager(inputmax) {
        this.defaultName = '未配置';
        this.profileindex = 0;
        this.notClickedYet = true;
        this.profileLayers = [];
        this.profileLayerIndex = [0, 0, 0];
        this.layerMaxNumber = 3;
        this.maxKayCapNumber = inputmax;
        this.KeyBoardArray = [
            new KeyBoard('硬體配置1', inputmax, 0),
            new KeyBoard('硬體配置2', inputmax, 1),
            new KeyBoard('硬體配置3', inputmax, 2),
        ];
        var countIndex = 0;
        for (var index = 1; index <= this.KeyBoardArray.length; index++) {
            var tempArr = [];
            for (var index2 = 1; index2 <= this.layerMaxNumber; index2++) {
                tempArr.push(new KeyBoard('硬體配置' + index2 * index, inputmax, index2 * index));
            }
            this.profileLayers.push(tempArr);
        }
    }
    KeyBoardManager.prototype.setALLDefaultKeyArray = function (data) {
        console.log('setALLDefaultKeyArray', this.profileLayers);
        var KBMarr = this.KeyBoardArray;
        for (var index = 0; index < KBMarr.length; index++) {
            KBMarr[index].setTargetDefaultKeyArray(data);
            for (var index2 = 0; index2 < this.layerMaxNumber; index2++) {
                this.profileLayers[index][index2].setTargetDefaultKeyArray(data);
            }
        }
    };
    KeyBoardManager.prototype.getProfileLayerIndex = function () {
        return this.profileLayerIndex[this.profileindex];
    };
    KeyBoardManager.prototype.changeProfileLayer = function () {
        this.notClickedYet = true;
        var T = this.getProfileLayerIndex();
        if (T < this.layerMaxNumber - 1) {
            T = T + 1;
        }
        else {
            T = 0;
        }
        this.profileLayerIndex[this.profileindex] = T;
        console.log('changeProfileLayer', this.getProfileLayerIndex());
        console.log('changeProfileLayer_profile', this.getTarget());
    };
    ;
    KeyBoardManager.prototype.keyAssignPromPrompt = function (event) {
        var KeyAssignPrompt = document.getElementById('KeyAssignPrompt');
        //KeyAssignPrompt.style.display='block';
        var H = event.target.offsetHeight;
        var W = event.target.offsetWidth;
        console.log('keyAssignPrompt', H, W, event);
        KeyAssignPrompt.style.left = event.target.offsetLeft + event.target.offsetWidth + 'px';
        KeyAssignPrompt.style.top = event.target.offsetTop + 'px';
        console.log('keyAssignPrompt', event.offsetX, event.offsetY);
    };
    KeyBoardManager.prototype.clearAllKeyboardData = function (Name) {
        for (var index = 0; index < 4; index++) {
            this.KeyBoardArray[index] = new KeyBoard(Name + (index + 1), this.maxKayCapNumber, 0);
        }
    };
    KeyBoardManager.prototype.i18nChangeName = function (Name) {
        var KBMarr = this.KeyBoardArray;
        for (var index = 0; index < KBMarr.length; index++) {
            KBMarr[index].profileName = Name + ' ' + (index + 1);
        }
    };
    KeyBoardManager.prototype.clearAllAssignRecordLed = function (FindName) {
        if (FindName === void 0) { FindName = ''; }
        var KBMarr = this.KeyBoardArray;
        for (var index = 0; index < KBMarr.length; index++) {
            KBMarr[index].clearAssignRecordLed(FindName);
        }
    };
    KeyBoardManager.prototype.ChangeAllLookingforMacroName = function (changeName, targetName) {
        if (changeName === void 0) { changeName = ''; }
        if (targetName === void 0) { targetName = ''; }
        console.log('EnterKeyChangeMacroName', changeName, targetName);
        var KBMarr = this.KeyBoardArray;
        for (var index = 0; index < KBMarr.length; index++) {
            KBMarr[index].ChangeMacroName(changeName, targetName);
        }
    };
    KeyBoardManager.prototype.ChangeAllLookingforLCFMName = function (changeName, targetName) {
        if (changeName === void 0) { changeName = ''; }
        if (targetName === void 0) { targetName = ''; }
        console.log('EnterKeyChangeMacroName', changeName, targetName);
        var KBMarr = this.KeyBoardArray;
        for (var index = 0; index < KBMarr.length; index++) {
            KBMarr[index].ChangeLCFMName(changeName, targetName);
        }
    };
    KeyBoardManager.prototype.clearRecordMacroData = function (targetName) {
        if (targetName === void 0) { targetName = ''; }
        console.log('clearRecordMacroData', targetName);
        var KBMarr = this.KeyBoardArray;
        for (var index = 0; index < KBMarr.length; index++) {
            KBMarr[index].clearMacroName(targetName);
        }
    };
    KeyBoardManager.prototype.getTarget = function () {
        if (this.layerMaxNumber > 0) {
            return this.profileLayers[this.profileindex][this.getProfileLayerIndex()];
        }
        else {
            return this.KeyBoardArray[this.profileindex];
        }
    };
    KeyBoardManager.prototype.getAssignTarget = function (index) {
        return this.KeyBoardArray[index];
    };
    KeyBoardManager.prototype.changeAll_KBIndex = function (index) {
        var KBMarr = this.KeyBoardArray;
        for (var index_1 = 0; index_1 < KBMarr.length; index_1++) {
            KBMarr[index_1].recordAssignBtnIndex = index_1;
        }
    };
    KeyBoardManager.prototype.delete_KeyBoard = function () {
        if (this.profileindex > 0) {
            var T = this.profileindex;
            this.profileindex -= 1;
            this.KeyBoardArray.splice(T, 1);
        }
        else if (this.profileindex == 0) {
            this.KeyBoardArray.splice(this.profileindex, 1);
        }
    };
    KeyBoardManager.prototype.setDefault = function () { };
    return KeyBoardManager;
}());

var KeyBoard = /** @class */ (function () {
    function KeyBoard(name, inputMax, profileid) {
        if (name === void 0) { name = ''; }
        this.profileName = 'default';
        this.hibernate = true;
        this.winLock = false;
        this.hibernateTimeArr = [1, 3, 5, 10];
        this.hibernateTime = 3;
        this.defaultName = "Default";
        this.pollingrate = 125;
        this.recordAssignBtnIndex = 0;
        this.assignText = '設定按鍵:Y';
        this.assignedKeyboardKeys = [[]]; //61KEY
        this.assignedFnKeyboardKeys = []; //61KEY
        this.fnModeMartrix = [false, false, false];
        this.fnModeindex = 0;
        this.fiveDefaultLedCode = [];
        this.fiveRecordIndex = 0;
        this.keyHoverIndex = 0;
        this.profileLayerIndex = 0;
        this.maxKayCapNumber = inputMax;
        this.profileName = name;
        this.profileid = profileid;
        for (var index = 0; index < 1; index++) {
            for (var i2 = 0; i2 < this.maxKayCapNumber; i2++) {
                this.assignedKeyboardKeys[index].push(this.defaultModule());
            }
        }
        // for (let index = 0; index < 5; index++) {
        //     this.fiveDefaultLedCode.push({
        //         recordBindCodeName: 0,
        //         profileName: this.defaultName,
        //     })
        // }
    }
    KeyBoard.prototype.setTargetDefaultKeyArray = function (data) {
        var _loop_1 = function (index) {
            targetValue = _backend_others_SupportData__WEBPACK_IMPORTED_MODULE_1__["AllFunctionMapping"].find(function (x) { return x.keyCode == data[index]; }).value;
            //console.log('setTargetDefaultKeyArray_index', index, targetValue);
            this_1.getNowModeKeyMatrix()[index].defaultValue = targetValue;
            this_1.getNowModeKeyMatrix()[index].recordBindCodeType = '';
        };
        var this_1 = this, targetValue;
        //console.log('setTargetDefaultKeyArray', data);
        for (var index = 0; index < data.length; index++) {
            _loop_1(index);
        }
    };
    KeyBoard.prototype.getHibernateStepTime = function () {
        //console.log("getHibernateStepTime",this.hibernateTimeArr,this.hibernateTime);
        return this.hibernateTimeArr[this.hibernateTime];
    };
    KeyBoard.prototype.clearAllKMacro = function () {
        for (var index = 0; index < this.assignedKeyboardKeys.length; index++) {
            for (var index2 = 0; index2 < this.maxKayCapNumber; index2++) {
                var target = this.assignedKeyboardKeys[index];
                if (target[index2].keyAssignType[0] == 'KMacro') {
                    target[index2].keyAssignType[0] = this.defaultName;
                    target[index2].value = this.defaultName;
                }
            }
        }
    };
    KeyBoard.prototype.ChangeMacroName = function (changeName, targetName) {
        if (changeName === void 0) { changeName = ''; }
        if (targetName === void 0) { targetName = ''; }
        console.log('KeyChangeMacroName', changeName, targetName);
        for (var index = 0; index < this.assignedKeyboardKeys.length; index++) {
            var target = this.assignedKeyboardKeys[index];
            for (var index2 = 0; index2 < this.maxKayCapNumber; index2++) {
                var T = target[index2];
                if (T.value == targetName && T.keyAssignType[0] == 'KMacro') {
                    console.log('KeyChangeMacroName_t', T);
                    T.value = changeName;
                }
            }
        }
    };
    KeyBoard.prototype.clearMacroName = function (targetName) {
        if (targetName === void 0) { targetName = ''; }
        for (var index = 0; index < this.assignedKeyboardKeys.length; index++) {
            var target = this.assignedKeyboardKeys[index];
            for (var index2 = 0; index2 < this.maxKayCapNumber; index2++) {
                var T = target[index2];
                if (T.value == targetName && T.keyAssignType[0] == 'KMacro') {
                    T.value = this.defaultName;
                }
            }
        }
    };
    KeyBoard.prototype.ImportClassData = function (InputData) {
        console.log('ImportClassData', InputData);
        var tempData = JSON.parse(JSON.stringify(InputData));
        var excludeVar = ['KB61Prohibit', 'profileLayerIndex', 'profileName'];
        var arr = Object.keys(this);
        var _loop_2 = function (index) {
            if (excludeVar.find(function (x) { return x == arr[index]; })) {
            }
            else {
                this_2[arr[index]] = tempData[arr[index]];
            }
        };
        var this_2 = this;
        for (var index = 0; index < arr.length; index++) {
            _loop_2(index);
        }
        // for (let index = 0; index < arr.length; index++) {
        // }
    };
    KeyBoard.prototype.HasSet = function (checkIndex) {
        if (checkIndex === void 0) { checkIndex = 0; }
        var target = this.getNowModeKeyMatrix();
        var N = target[checkIndex].value;
        var N2 = target[checkIndex].profileName;
        var N3 = target[checkIndex].LongTimePressValue;
        var N4 = target[checkIndex].InstantPressValue;
        return N != '' || N2 != '' || N3 != '' || N4 != '' ? true : false;
        // for (let index = 0; index <target.length; index++) {
        //     var element = target[index];
        // }
    };
    KeyBoard.prototype.checkKeyAssignHasData = function (from) {
        if (from === void 0) { from = ''; }
        var KeyAssignUIStyleList = document.querySelectorAll('.KeyAssignUIStyle');
        //var KeyAssignUIStyleList= this.elementRef.nativeElement.querySelectorAll(".KeyAssignUIStyle");
        for (var index = 0; index < KeyAssignUIStyleList.length; index++) {
            var Result = this.HasSet(index);
            var element = KeyAssignUIStyleList[index];
            //Result ? (element.style.border = '2px solid #ffc757') : (element.style.border = '');
        }
    };
    KeyBoard.prototype.getKeyTargetOptionFrequency = function () {
        var N = this.getNowModeTargetMatrixKey().macroOptionNumber;
        console.log('getKeyTargetOptionFrequency', N);
        switch (true) {
            case N < 65535:
                return N;
            case N == 65535:
                return 1;
            case N == 65536:
                return 1;
        }
    };
    KeyBoard.prototype.checkNowModeTargetMatrixAssignKey = function (index, compareKeyCode) {
        //console.log('getNowModeTargetMatrixKey', this.getNowModeKeyMatrix()[this.recordAssignBtnIndex])
        if (this.getNowModeKeyMatrix()[index].defaultValue == compareKeyCode) {
            return false;
        }
        return true;
    };
    KeyBoard.prototype.getNowModeKeyMatrix = function () {
        if (!this.assignedKeyboardKeys[this.fnModeindex]) {
            console.log(this);
        }
        else {
            return this.assignedKeyboardKeys[this.fnModeindex];
        }
    };
    KeyBoard.prototype.getNowModeTargetMatrixKey = function () {
        //console.log('getNowModeTargetMatrixKey', this.getNowModeKeyMatrix()[this.recordAssignBtnIndex])
        return this.getNowModeKeyMatrix()[this.recordAssignBtnIndex];
    };
    KeyBoard.prototype.switchLongTime_Instant_Status = function () {
        this.getNowModeTargetMatrixKey().LongTime_Instant_Status = !this.getNowModeTargetMatrixKey()
            .LongTime_Instant_Status;
    };
    KeyBoard.prototype.setFnModeMartrix = function (targetIndex) {
        this.fnModeMartrix[targetIndex] = !this.fnModeMartrix[targetIndex];
        for (var index = 0; index < this.fnModeMartrix.length; index++) {
            if (targetIndex != index) {
                this.fnModeMartrix[index] = false;
            }
        }
        if (!this.fnModeMartrix.some(function (element) { return element == true; })) {
            this.fnModeindex = 0;
        }
        else {
            this.fnModeindex = targetIndex + 1;
        }
        console.log('setFnModeMartrix_改後', this.fnModeMartrix[targetIndex], this.fnModeindex);
        this.checkKeyAssignHasData('setFnModeMartrix');
    };
    KeyBoard.prototype.set_prohibit = function (Class) {
        if (Class === void 0) { Class = ''; }
        var target = _KeyBoardData__WEBPACK_IMPORTED_MODULE_0__["KB61Prohibit"].get_prohibit(Class);
        console.log('get_prohibit', target);
        for (var index = 0; index < target.length; index++) {
            var T = this.getNowModeKeyMatrix()[target[index]];
            for (var KATindex = 0; KATindex < 3; KATindex++) {
                T.keyAssignType[KATindex] = 'K12';
            }
            T.value = '⊘';
            T.LongTimePressValue = '⊘';
            T.InstantPressValue = '⊘';
        }
    };
    KeyBoard.prototype.cancel_prohibit = function () {
        console.log('cancel_prohibit_FNMode');
        var T = this.getNowModeKeyMatrix();
        for (var index = 0; index < T.length; index++) {
            for (var KATindex = 0; KATindex < 3; KATindex++) {
                if (T[index].keyAssignType[KATindex] == 'K12') {
                    T[index].keyAssignType[KATindex] = this.defaultName;
                    T[index].LongTimePressValue = this.defaultName;
                    T[index].InstantPressValue = this.defaultName;
                    T[index].value = this.defaultName;
                    T[index].m_Identifier = 0;
                }
            }
        }
    };
    //"設定按鍵:"
    KeyBoard.prototype.get_assign_promptText = function (Type) {
        switch (Type) {
            case 'LongTimePressValue':
                return this.getNowModeTargetMatrixKey().LongTimePressValue;
            case 'InstantPressValue':
                return this.getNowModeTargetMatrixKey().InstantPressValue;
            case 'NormalKeyPress':
                return this.getNowModeTargetMatrixKey().value;
        }
    };
    //"燈光設置:"
    KeyBoard.prototype.get_Led_promptText = function () {
        //console.log("FNMode_get_Led_promptText");
        return this.getNowModeTargetMatrixKey().profileName;
    };
    KeyBoard.prototype.checkFnSetOnlyData = function (inputValue) {
        console.log('clearLostMacro_MCIarr');
        var V1 = this.getNowModeKeyMatrix();
        for (var index = 0; index < this.maxKayCapNumber; index++) {
            for (var KATindex = 0; KATindex < 3; KATindex++) {
                if (V1[index].keyAssignType[KATindex] == inputValue) {
                    V1[index] = this.defaultModule();
                }
            }
        }
    };
    KeyBoard.prototype.setAssignTargetData = function (data) {
        var target = this.getNowModeTargetMatrixKey();
        console.log('setAssignTargetData:', data, 'ManagerTarget:', target);
        var arrKeys = Object.keys(data);
        for (var index = 0; index < arrKeys.length; index++) {
            if (target[arrKeys[index]] != undefined) {
                target[arrKeys[index]] = data[arrKeys[index]];
            }
        }
        target.changed = true;
    };
    KeyBoard.prototype.getNowModeTargetKeyPressStatus = function () {
        if (this.getNowModeTargetMatrixKey().openLongTimePress) {
            if (this.getNowModeTargetMatrixKey().LongTime_Instant_Status) {
                return 'LongTimePress';
            }
            else {
                return 'InstantPress';
            }
        }
        else {
            return 'NormalPress';
        }
    };
    KeyBoard.prototype.setRecordLed = function (profileName, recordBindCodeName) {
        console.log('setRecordLedVar_', profileName, recordBindCodeName);
        var T = this.getNowModeTargetMatrixKey();
        T.profileName = profileName;
        T.recordBindCodeName = recordBindCodeName;
    };
    KeyBoard.prototype.set_FiveLed = function (profileName, recordBindCodeName) {
        console.log('set_FiveLed', profileName, recordBindCodeName);
        var T = this.fiveDefaultLedCode[this.fiveRecordIndex];
        T.recordBindCodeName = recordBindCodeName;
        T.profileName = profileName;
    };
    KeyBoard.prototype.resetAssignFive = function (index) {
        var T = this.fiveDefaultLedCode[index];
        T.recordBindCodeName = 0;
        T.profileName = this.defaultName;
    };
    KeyBoard.prototype.reset_assign_default = function (type) {
        if (type === void 0) { type = ''; }
        console.log('reset_assign_default', type);
        if (type == 'key') {
            var T = this.getNowModeTargetMatrixKey();
            for (var _i = 0, _a = Object.entries(T); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (key != "keyAssignType") {
                    T[key] = this.defaultModule()[key];
                }
            }
        }
        else if (type == 'led') {
            var T = this.getNowModeTargetMatrixKey();
            T.profileName = this.defaultName;
            T.recordBindCodeName = 0;
        }
        else if (type == 'LongTime_or_Instant_Delete') {
            var T = this.getNowModeTargetMatrixKey();
            if (T.LongTime_Instant_Status) {
                T.keyAssignType[0] = this.defaultName;
                T.LongTimePressValue = '';
            }
            else {
                T.keyAssignType[1] = this.defaultName;
                T.InstantPressValue = '';
            }
        }
    };
    KeyBoard.prototype.reset_AllKey = function () {
        var KeyArray = this.getNowModeKeyMatrix();
        for (var index = 0; index < KeyArray.length; index++) {
            for (var _i = 0, _a = Object.entries(KeyArray[index]); _i < _a.length; _i++) {
                var _b = _a[_i], key = _b[0], value = _b[1];
                if (key != "defaultValue") {
                    KeyArray[index][key] = this.defaultModule()[key];
                }
            }
        }
    };
    KeyBoard.prototype.defaultModule = function (type) {
        if (type === void 0) { type = ''; }
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
        };
        return T;
    };
    return KeyBoard;
}());



/***/ }),

/***/ "./src/keyboard/KeyBoardStyle.ts":
/*!***************************************!*\
  !*** ./src/keyboard/KeyBoardStyle.ts ***!
  \***************************************/
/*! exports provided: KeyBoardStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KeyBoardStyle", function() { return KeyBoardStyle; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var KeyBoardStyle = /** @class */ (function () {
    function KeyBoardStyle() {
        this.nowTargetIndex = 0;
        this.nowTargetKey = 'GMMK Pro';
        //BGImage:'url(./image/Share/KB1KeyerEffects.png)',
        this.keyBoardList = {
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
                ],
                keyMapping: [
                    "Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "PrintScreen", "ScrollWheel", "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Delete", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "PageUp", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "PageDown", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight", "ArrowUp", "End", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "Custom_Fnkey", "ControlRight", "ArrowLeft", "ArrowDown", "ArrowRight"
                ],
                target: new Array(83),
                cssText: 'position: absolute;height: 100%;width: 100%;pointer-events: none;',
                BGImage: 'url(./image/Share/KB1.png)',
                BGImageKeyerEffects: 'url(./image/Share/KB1KeyerEffects.png)',
                qigong_Step1_Range: [0, 15, 30, 58, 71, 82],
                qigong_Step2_Range: [22, 23, 38, 52, 51, 36],
                breakGradation: [[0, 14], [15, 29], [30, 44], [45, 58], [59, 72], [73, 82]],
                imageMaxWidth: 765,
                imageMaxHeight: 308,
            },
            "GMMK V2": {
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
                ],
                keyMapping: [
                    "Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12", "PrintScreen", "ScrollWheel", "Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Delete", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "PageUp", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "PageDown", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ShiftRight", "ArrowUp", "End", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "Custom_Fnkey", "ControlRight", "ArrowLeft", "ArrowDown",
                ],
                cssText: 'position: absolute;height: 100%;width: 100%;pointer-events: none;',
                BGImage: 'url(./image/Share/KB1.png)',
                BGImageKeyerEffects: 'url(./image/Share/KB1KeyerEffects.png)',
                qigong_Step1_Range: [0, 15, 30, 58, 71, 82],
                qigong_Step2_Range: [22, 23, 38, 52, 51, 36],
                breakGradation: [[0, 14], [15, 29], [30, 44], [45, 58], [59, 72], [73, 81]],
                imageMaxWidth: 765,
                imageMaxHeight: 308,
            }
        };
    }
    KeyBoardStyle.prototype.getAssignTarget = function (name) {
        //console.log("keyBoardList",this.keyBoardList,this.nowTargetKey);
        return this.keyBoardList[name];
    };
    KeyBoardStyle.prototype.getTarget = function () {
        //console.log("keyBoardList",this.keyBoardList,this.nowTargetKey);
        return this.keyBoardList[this.nowTargetKey];
    };
    KeyBoardStyle.prototype.getTargetKeyBoradUIcss = function (id) {
        //console.log("getTargetKeyBoradUIcss",id);
        //document.getElementById(id).style.cssText=this.keyBoardList[this.nowTargetKey].cssText;
        var T1 = document.getElementById(id);
        if ((T1.dataset.UITransparent = 'RGBTransparent')) {
            T1.style.backgroundImage = this.keyBoardList[this.nowTargetKey].BGImageKeyerEffects;
        }
        else {
            T1.style.backgroundImage = this.keyBoardList[this.nowTargetKey].BGImage;
        }
        //return this.keyBoardList[this.nowTargetKey].cssText;
    };
    KeyBoardStyle.prototype.getAssignKBCssStyles = function (name) {
        var target = document.getElementById(name);
        var targetArray = target.getElementsByClassName('SyncRGBColorBlockStyle');
        var targetUI = target.getElementsByClassName('RGBKeyBoardUITransparent');
        //targetUI[0].style.backgroundImage = this.keyBoardList[name].BGImageKeyerEffects
        for (var _i = 0, _a = Object.entries(this.getAssignTarget(name).ItemCss); _i < _a.length; _i++) {
            var _b = _a[_i], key = _b[0], value = _b[1];
            targetArray[key].style.cssText += value;
            //console.log(key, value);
        }
    };
    KeyBoardStyle.prototype.getTargetDefaultKeyArray = function () {
        return this.getTarget().keyMapping;
    };
    KeyBoardStyle.prototype.findKeyMappingIndex = function (code) {
        if (code === void 0) { code = ""; }
        var targetIndex = this.getTargetDefaultKeyArray().findIndex(function (x) { return x == code; });
        if (targetIndex == -1) {
            //console.error('this.nowMacroSelect.m_Identifier', this.nowMacroSelect.m_Identifier);
            alert('findKeyMappingIndex=lost' + code);
            console.log('findKeyMappingIndex', targetIndex);
        }
        else {
            return targetIndex;
        }
    };
    KeyBoardStyle.prototype.applyStyles = function (target) {
        //this.getTargetKeyBoradUIcss('RGBKeyBoardUITransparent')
        console.log("applyStyles", this.getTarget().ItemCss, target);
        this.getTarget().ItemCss.forEach(function (element, index) {
            //console.log("applyStyles_element", element);
            if (target[index]) {
                target[index].style.cssText += element;
                console.log("applyStyles_ItemCss", index);
            }
            else {
                console.log("applyStyles_ItemCss.forEach_Err", target[index], index);
            }
        });
        this.getTarget().keyMapping.forEach(function (element, index) {
            if (target[index]) {
                target[index].setAttribute('keyMapping', element);
                console.log("applyStyles_keyMapping", index);
            }
            else {
                console.log("applyStyles_keyMapping.forEach_Err", "color:red", target[index], index);
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
    };
    KeyBoardStyle = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], KeyBoardStyle);
    return KeyBoardStyle;
}());



/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Louis\Desktop\Louis\NeverGiveUp\angular-demo\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map