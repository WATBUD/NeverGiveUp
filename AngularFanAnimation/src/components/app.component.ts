// declare var System;
// declare var fs;
import { Component, OnInit, Input,ViewChild,ElementRef, ChangeDetectorRef,AfterViewInit  } from '@angular/core';
// declare var $: any;
//const { ipcRenderer } = System._nodeRequire('electron');
import {
    i18nManager,
    ImagePath,
    ColorModule,
    WindowsFn,
    TestGradient,
    SharesFunction,
    DeviceService,
 } from './Model/ModelManager';

import { DomSanitizer } from '@angular/platform-browser';
import { SL_DevicePageComponent } from './SL_DeviceFolder/SL_DevicePage';
import { AL_DevicePageComponent } from './AL_DeviceFolder/AL_DevicePage';
// let evtVar = System._nodeRequire('./backend/others/EventVariable');
// let funcVar = System._nodeRequire('./backend/others/FunctionVariable');
// let env = System._nodeRequire('./backend/others/env');
// let remote = System._nodeRequire('electron').remote;

@Component({
    selector: 'sm-app',
    templateUrl: './app.component.html',
    //template: '<h1>我的第一个 Angular 应用</h1>',
    styleUrls: ['../assets/css/UI.css','../assets/css/Global.css'],
    providers: []

})

export class AppComponent implements OnInit {
    //subscription: Subscription;
    langsMode: number = 0;
    @ViewChild(SL_DevicePageComponent) SL_DevicePage:SL_DevicePageComponent;
    @ViewChild(AL_DevicePageComponent) AL_DevicePage:AL_DevicePageComponent;
    GlobalManager
    realAppContent = false;
    deviceON = true;
    isMaximizeScreen=false;
    fanisOnOff=false;//off:軟體 on:主機板
    noticeShow=false;//off:軟體 on:主機板
    settingPage=false;
    i18nManager=new i18nManager();
    ImagePath=new ImagePath();
    SharesFN=new SharesFunction();
    DeviceService=new DeviceService();
    fileType='FALSL';
    onAppImportExport=false;
    gradientTextMenu: any = ["Rainbow","Static Color","Breathing","Color Cycle",
    "Runway","Runway Sync", "Staggered", "Mixing", "Meteor","Meteor Sync",
    "Firework", "Stack", "Stack Multi Color", "Neon"];
    switchPageBtn: any = [
        { name: 'UNI FAN SL', check:false, },
        { name: 'UNI FAN AL', check:true },
    ]
    SettingData={
        notShowAgainExport:false,
        AutoRunOnBoot:false,
        version:"2.0",
        language:0,
    }
    notShowAgainStaticTip=false;
    
    Notice_Mes={
        title:"default",
        content:"default",
        showType:"default",
    }
    onLoading=false;
    static instance=undefined;

    onPlugDevice=[];
    /*********************/
    moveknobcheck = true;
    GetMouseClickObjData(e) {
        // var objlog={
        // }
        // console.log('GetMouseClickObjData',objlog);
        
        // if (e.clientX > 64 && e.clientX < 251 && this.moveknobcheck == true) {
        //     this.moveknobcheck = false;
        // }
    }

    constructor(private sanitizer: DomSanitizer,
        private cdr: ChangeDetectorRef) {
        //開啟App時通知Electron 將系統icon load起來
        let langObj = []; langObj.push('OPEN L-Connect'); langObj.push('EXIT L-Connect');
        
        AppComponent.instance=this;
    }


    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            //console.log("new ImgPathList Class");
            //this.instance = new GlobalManager();
            console.log('%c ImgPathList_getInstance_err', 'background: blue; color: red');
            return this.instance;
        }
    }

    ngOnInit() {
                //this.changeWinSystemTaskBar();//by ngOnInit 
        // //-----------------ScreenSize取螢幕解析度-----------------
        // let windowsMenu = this;
        // ElectronEventService.on('icpEvent').subscribe((e: any) => { //硬體被動傳值

        // });
        console.log('%c ngOnInit','color:rgb(255,77,255)');
        this.onLoading=true;
        function changesize(){ 
            window.resizeTo(960,540); //指定預開啟的寬度與高度
            } 
            window.onload=changesize; 
            window.onresize=changesize;
    }

    ngAfterViewInit(){
        //this.DeviceService.currentDevice=this.SL_DevicePage;
        console.log('ngAfterViewInit:~~~~~~~~~~~~~~~~~~~~~~',this.SL_DevicePage,this.AL_DevicePage);  

        //var TTTTindex=this.switchPageBtn.findindex((x) => x.check == true);
        let TTTTindex = this.switchPageBtn.findIndex(
            (x) => x.check == true
        )
        //var TTTT=this.switchPageBtn.find((x) => x.check == true);
        //this.DeviceService.switchDeviceData('');
        if(TTTTindex!=-1){
            switch (TTTTindex) {
                case 0:
                    this.DeviceService.currentDevice=this.SL_DevicePage;
                    break;
                case 1:
                    this.DeviceService.currentDevice=this.AL_DevicePage;
                    break;

                default:
                    break;
            }
        }
        else{
            console.log('%c switchPageBtn.find_error','color:rgb(255,77,255)',TTTTindex);

        }
        console.log('ngAfterViewInit:~~~~~~~~~~~~~~~~~~~~~~',this.DeviceService.currentDevice);  

        // console.log('obj:', obj);
        //this.ImportProfile(); 
        //this.ExportProfile();
        this.DeviceService.getTarget().packaged_Code();
        this.cdr.detectChanges();//Invoke change detection explicitly then Angular will update the DOM immediately.
        this.onLoading=false;

    }


    showUITip(Type=""){
        this.noticeShow=true;
        this.Notice_Mes.showType=Type;
        switch (Type) {
            case "SyncTipMessage":
            this.Notice_Mes.title=this.i18nManager.getTarget('Notice')
            this.Notice_Mes.content=this.i18nManager.getTarget('SyncTipMessage')
                break;
            case "InitExportTip":
            this.Notice_Mes.title=this.i18nManager.getTarget('Notice')
            this.Notice_Mes.content=this.i18nManager.getTarget('InitExportTip')
            break;
            case "ConnectError": 
            this.Notice_Mes.title=this.i18nManager.getTarget('Tips')
            this.Notice_Mes.content=this.i18nManager.getTarget('ConnectError')
            break;
            case "StaticMax48Tip": 
            this.Notice_Mes.title=this.i18nManager.getTarget('Notice')
            this.Notice_Mes.content=this.i18nManager.getTarget('StaticMax48Tip')
            break;
            // "<span (click)=\"HyperLinkGO(0)\" style=\"text-decoration: underline;\">"+this.i18nManager.getTarget('HyperLink')
            // +"</span>"
            
            // var createDiv = document.createElement('div');
            // createDiv.classList.add("circle");
            // createDiv.style.cssText = 'position: absolute;\
            // background-color: yellow;\ssss
            // width: 5%;\
            // height: 100%;';
            // createDiv.id = 'RGBcircle' + circlecs.length;
            // e.target.appendChild(createDiv);
            // createDiv.addEventListener("mousedown", RGBcircleEventArr[0]);
            default:
                break;
        }
        console.log('%c this.Notice_Mes','background: blue; color: red',this.Notice_Mes);

        //this.cdr.detectChanges();

    }
    closeUITip(Type=""){
        this.noticeShow=false;
        this.DeviceService.getTarget().applyDataToServer('SettingData');
        switch (Type) {
            case "":
                
                break;
            case "":
                
            break;
            case "": 
               
                break;
            default:
                break;
        }
    }

    switchFanisOnOff(){
        this.fanisOnOff=!this.fanisOnOff;
        if(this.fanisOnOff){
            this.showUITip('SyncTipMessage');
            this.DeviceService.getTarget().stopAllAnimation();
        }
        else{
            this.closeUITip('SyncTipMessage');
            this.DeviceService.getTarget().startAllAnimation();
        }
        this.DeviceService.getTarget().applyDataToServer('fanisOnOff');//by switchFanisOnOff

    }
    

    HyperLinkGO(index){

    }
 
    ImportProfile() {


    }
    ExportProfile() {    
      
    }

    switchAutoRunOnBoot(defaultValue){
        if(defaultValue==undefined){
            this.SettingData.AutoRunOnBoot=!this.SettingData.AutoRunOnBoot;
        }
        else{
            this.SettingData.AutoRunOnBoot=defaultValue;

        }
    }
    switchSettingPage(defaultValue){
        if(defaultValue==undefined){
            this.settingPage= this.settingPage;
        }
        else{
            this.settingPage=defaultValue;
            this.DeviceService.getTarget().applyDataToServer('SettingData');
        }

    }


    checkDrop(e){
        this.DeviceService.getTarget().checkDrop(e);
    }
    
    

    changeWinSystemTaskBar(ordertype) {


    }

    onClickPageBtn(index) {
        console.log('index:', index);
        this.switchPageBtn.forEach((element, i) => { //開啟指定按鈕 關閉其他所有按鈕
            if (index == i) {
                this.switchPageBtn[i].check = true;
            }
            else {
                this.switchPageBtn[i].check = false;
            }
        });
    }


    


}



