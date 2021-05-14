import { Injectable } from '@angular/core';
//let electron_Instance = window['System']._nodeRequire('electron').remote; 
@Injectable()
export class GlobalManager{
    currentDevice;
    notShowAgainStaticTip=false;
    Notice_Mes={
        ConnectError:false,
        InitExportTip:true,
        StaticMax48Tip:true,
        SyncTipMessage:true,
    }
    static instance=undefined;
    constructor(
    ) {
        GlobalManager.instance=this;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            console.log('%c GlobalManager_Instance_err','background: red; color: white');
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
