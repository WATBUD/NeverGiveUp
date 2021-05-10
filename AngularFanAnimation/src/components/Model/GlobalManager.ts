import { Injectable } from '@angular/core';
//let electron_Instance = window['System']._nodeRequire('electron').remote; 
@Injectable()
export class GlobalManager{
    NoDeviceindex=0;
    pluginDeviceData=[];
    //dbService = electron_Instance.getGlobal('AppProtocol').GlobalManager.nedbObj;
    currentDevice;
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





}
