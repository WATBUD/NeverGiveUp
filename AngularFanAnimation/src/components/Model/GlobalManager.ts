import { Injectable } from '@angular/core';
import {
    i18nManager,
    ImagePath,
    ColorModule,
    WindowsFn,
    TestGradient,
    SharesFunction,
    DeviceService,
 } from './ModelManager';
//let electron_Instance = window['System']._nodeRequire('electron').remote; 
@Injectable()
export class GlobalManager{
    currentDevice;
    notShowAgainStaticTip=false;
    Notice_Mes={
        ConnectError:false,
        InitExportTip:false,
        StaticMax48Tip:false,
        SyncTipMessage:false,
    }
    colorArrays=[];
    colorRecordIndex=0;
    defaultColor=[[255, 255, 0],[0,128, 0],[0, 0, 255],[75, 0, 130],[128, 0, 128],[255, 255, 255]];
    static instance=undefined;
    constructor(
    ) {
        GlobalManager.instance=this;

        for (let index = 0; index < this.defaultColor.length; index++) {
            this.colorArrays.push(new ColorModule());
            this.colorArrays[index].SetRGB(this.defaultColor[index]);
        }
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            console.log('%c GlobalManager_Instance_err','background: red; color: white');
        }
    }
    getColorTarget(){
        var target= this.colorArrays[this.colorRecordIndex];
        if(target!=undefined){
            return target;
            //console.log('%c AL_OverAll_List_setMode', 'color:rgb(255,75,255,1)', target);
        }
        else{
            alert('%c getColorTarget_undefined');
            console.log('%c getColorTarget_undefined','background: red; color: white',this.colorArrays,this.colorRecordIndex)
        }
    }



    showUITip(Type=""){
        switch (Type) {
            case "StaticMax48Tip":
                this.Notice_Mes.StaticMax48Tip = true;
                break;
            case "InitExportTip":
                this.Notice_Mes.InitExportTip = false;
                break;
            case "SyncTipMessage":
                this.Notice_Mes.SyncTipMessage = false;
                break;
            default:
                console.log('%c this.Notice_Mes_error', 'background: black; color: red', this.Notice_Mes);
                break;
        }
        //console.log('%c this.Notice_Mes','background: blue; color: red',this.Notice_Mes);
        //this.cdr.detectChanges();
    }




}
