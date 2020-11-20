const env = require('../../../others/env');
var Mouse = require('./Mouse');
var evtType = require('../../../others/EventVariable').EventTypes;
var SupportData = require('../../../others/SupportData');
var AppObj = require("../../../dbapi/AppDB");

'use strict';
var _this;

class ModelOSeries extends Mouse {
    constructor(hid) {
        env.log('ModelOSeries','ModelOSeries class','begin');
        super();
        _this = this;
        _this.m_bSetFWEffect = false;//SET DB
        _this.m_bOpen = 0;//Marixtable 128
        _this.hid = hid;
        _this.AppDB = AppObj.getInstance();
        
        _this.MDFMapping = [
            {keyCode:'16', value:"Shift", MDFKey:0x02, translate:"Shift"},
            {keyCode:'17', value:"Ctrl", MDFKey:0x01, translate:"Ctrl"},
            {keyCode:'18', value:"Alt", MDFKey:0x04, translate:"Alt"},
            {keyCode:'91', value:'Left Win', MDFKey:0x08, translate:"Left Win"},
            {keyCode:'92', value:'Right Win', MDFKey:0x80, translate:"Right Win"},
        ];
        _this.ButtonMapping = [
            {ButtonID:0x01 , value:'LeftClick'},
            {ButtonID:0x03 , value:'ScorllClick'},
            {ButtonID:0x02 , value:'RightClick'},
            {ButtonID:0x05 , value:'Forward'},
            {ButtonID:0x04 , value:'Backward'},
            {ButtonID:0x14 , value:'DPISwitch'},
            {ButtonID:0x10 , value:'Scroll Up'},
            {ButtonID:0x11 , value:'Scroll Down'},
        
        ]
        

    }

    static getInstance(hid) {
        if (this.instance) {
            env.log('ModelOSeries', 'getInstance', `Get exist ModelOSeries() INSTANCE`);
            return this.instance;
        }
        else {
            env.log('ModelOSeries', 'getInstance', `New ModelOSeries() INSTANCE`);
            this.instance = new ModelOSeries(hid);

            return this.instance;
        }

    }
    InitialDevice(dev,Obj,callback) {
        env.log('ModelOSeries','initDevice','Begin')
        dev.bwaitForPair = false;
        dev.m_bSetHWDevice = false;
        
        if(env.BuiltType == 0) {
            _this.ReadFWVersion(dev,0,function (ObjFWVersion) {
                
                if (dev.BaseInfo.version_Wired != null) {//Success
                    _this.SetProfileDataFromDB(dev,0,function () {
                        callback(0);
                        // setTimeout(function () {
                        //     _this.GetDeviceBatteryStats(dev,0,function (ObjBattery) {
                        //         var Obj2 = {
                        //             Func: evtType.GetBatteryStats,
                        //             SN: dev.BaseInfo.SN,
                        //             Param: ObjBattery
                        //         };
                        //         _this.emit(evtType.ProtocolMessage, Obj2);
                        //     });
                        // }, 1000);
                    });
                } else {
                    callback(0);
                }
                

            });
        }
        else
        {
            dev.BaseInfo.version_Wired = "00.03.01.00";
            dev.BaseInfo.version_Wireless = "00.03.01.00";
            callback(0);
        }
    }
    HIDEP2Data(dev,ObjData) {
        if (ObjData[0]== 0x01 && ObjData[1]== 0x02 ) //EP2 Launch Program
        {
        }
        else if (ObjData[0]== 0x04 && ObjData[1]== 0x02 ) //EP2 Switch Profile
        {
            dev.deviceData.profileindex = ObjData[2];
            var iProfile = ObjData[2];
            env.log('ModelOSeries','HIDEP2Data-SwitchProfile',iProfile)
            var Obj2 = {
                Func: evtType.SwitchUIProfile,
                SN: dev.BaseInfo.SN,
                Param: iProfile
            };

            _this.emit(evtType.ProtocolMessage, Obj2);
        }
        else if (ObjData[0]== 0x04 && ObjData[1]== 0x06 ) //EP2 Get Device Stats
        {
            if (ObjData[2] == 1) {//Wireless On
                dev.bwaitForPair = false;
                _this.GetBatteryStats(dev,0,function (ObjBattery) {
                    //-----------emit-------------------
                    var Obj2 = {
                        Func: "GetBatteryStats",
                        SN: dev.BaseInfo.SN,
                        Param: ObjBattery
                    };
                    _this.emit(evtType.ProtocolMessage, Obj2);
                    callback();
                });
            }
            else{
                setTimeout(function () {
                    _this.GetBatteryStats(dev,0,function (ObjBattery) {
                        if (ObjBattery.Status == 1) {//Status Error--->Battery Off
                            ObjBattery.Status = 0;
                            ObjBattery.Battery = 10;
                        }
                        //-----------emit-------------------
                        var Obj2 = {
                            Func: "GetBatteryStats",
                            SN: dev.BaseInfo.SN,
                            Param: ObjBattery
                        };
                        _this.emit(evtType.ProtocolMessage, Obj2);
                        callback();
                    });
                }, 5000);

            }
            
        }
        else if (ObjData[0]== 0x01 && ObjData[1]== 0x0f ) //EP2 Launch Program
        {
            _this.LaunchProgram(dev,ObjData[2]);
        }
    }
    LaunchProgram(dev,iKey) {

        var iProfile = dev.deviceData.profileindex -1;
        var KeyAssignData = dev.deviceData.profile[iProfile].keybinding[iKey];//Button
        switch (KeyAssignData.group) {
            case 2://Windows Shortcut/Launch      
                if (KeyAssignData.function == 1) {//Launch Program
                    var csProgram = KeyAssignData.param;
                    _this.RunApplication(csProgram);
                }    
                else if (KeyAssignData.function == 2) {//Launch WebSite
                    var csProgram = KeyAssignData.param;
                    _this.RunApplication(csProgram);
                }
                else if (KeyAssignData.function == 3) {//Windows Shortcut
                }
            break;
            default:
                break;
        }

    }
    GetWirelessMode(dev,Obj,callback){

        var bWireless = false;
        for (var iState = 0; iState < dev.BaseInfo.pid.length; iState++) {
            var StateSN = "0x"+ _this.NumTo16Decimal(dev.BaseInfo.vid[iState]) + "0x"+ _this.NumTo16Decimal(dev.BaseInfo.pid[iState]);
            if (dev.BaseInfo.SN == StateSN && iState>0) {
                bWireless = true;
                break;
            }
        }
        callback(bWireless);
    }
    ReadFWVersion(dev,Obj,callback){
        try{
            var Data = Buffer.alloc(65);
            //-----------------Wired-Mouse------------------
            Data[0] = 0x00;
            Data[1] = 0x00;
            Data[2] = 0x00;
            Data[3] = 0x02;//Mouse
            Data[4] = 0x03;
            Data[5] = 0x00;
            Data[6] = 0x81;
            //-----------------------------------
            _this.SetFeatureReport(dev, Data,50).then(function () {
                _this.GetFeatureReport(dev, Data,50).then(function (rtnData) {
                    if (rtnData[0] != 0xa1 || dev.BaseInfo.StateID == 0x01) {
                        dev.BaseInfo.version_Wired = '99.99.99.99';
                    }
                    else{
                        //var verHigh = _this.padLeft(parseInt(rtnData[6].toString(16), 10),2);//Version byte high 
                        var verHigh = rtnData[6].toString();//Version byte high 
                        var verMid = rtnData[7].toString();//Version byte mid 
                        var verLow = rtnData[8].toString();//Version byte low 
                        var verRev = rtnData[9].toString();//Version byte Reversed 
                        var strVertion = verHigh+'.'+verMid+'.'+verLow+'.'+verRev;
                        dev.BaseInfo.version_Wired = strVertion; 
                    }
                    //-----------------Wireless-MouseDongle------------------
                    var Data = Buffer.alloc(65);
                    Data[0] = 0x00;
                    Data[1] = 0x00;
                    Data[2] = 0x00;
                    Data[3] = 0x00;//Dongle
                    Data[4] = 0x03;
                    Data[5] = 0x00;
                    Data[6] = 0x81;
                    _this.SetFeatureReport(dev, Data,50).then(function () {
                        _this.GetFeatureReport(dev, Data,50).then(function (rtnData) {
                            if (dev.BaseInfo.StateID == 0x00) {
                                dev.BaseInfo.version_Wireless = '99.99.99.99';
                            }
                            else{
                                //var verHigh = _this.padLeft(rtnData[6],2);//Version byte high 
                                var verHigh = rtnData[6].toString();//Version byte high 
                                var verMid = rtnData[7].toString();//Version byte mid 
                                var verLow = rtnData[8].toString();//Version byte low 
                                var verRev = rtnData[9].toString();//Version byte Reversed 
                                var strVertion = verHigh+'.'+verMid+'.'+verLow+'.'+verRev;
                                dev.BaseInfo.version_Wireless = strVertion; 
                            }
                            callback(strVertion);
                        });
                    });
                });
            });
        
        } catch(e) {
            env.log('ModelOSeries','SetKeyMatrix',`Error:${e}`);
        }

    }
    GetDeviceBatteryStats(dev,Obj,callback){
        env.log('ModelOSeries','GetDeviceBatteryStats','Begin')
        try{
            if (dev.m_bSetHWDevice) 
                return;
            var Data = Buffer.alloc(65);
            Data[0] = 0x00;
            Data[1] = 0x00;
            Data[2] = 0x00;
            Data[3] = 0x02;//Mouse
            Data[4] = 0x02;
            Data[5] = 0x00;
            Data[6] = 0x83;

            //-----------------------------------
            _this.SetFeatureReport(dev, Data,50).then(function () {
                _this.GetFeatureReport(dev, Data,50).then(function (rtnData) {
                    
                    var arrStatus = [0xA1,0xA4,0xA2,0xA0,0xA3];//0:Success,1:Sleep,2:Failure,3:Busy,4:Unsupport
                    var Status = arrStatus.indexOf(rtnData[0]);                 
                    var ObjBattery = {
                        SN: dev.BaseInfo.SN,
                        Status:Status,
                        Battery: rtnData[7],
                        Charging:rtnData[6]
                    };
                    callback(ObjBattery);
                });
            });

        } catch(e) {
            env.log('ModelOSeries','SetKeyMatrix',`Error:${e}`);
        }
    
    }
    // abc() {
    //     console.log('ModelOSeries abc')
    // }
    ChangeProfileID(dev,Obj, callback) {

        // dev.deviceData.profileindex = Obj;
        env.log('ModelOSeries','ChangeProfileID','Begin')
        try{
            var Data = Buffer.alloc(65);

            Data[0] = 0x00;
            Data[1] = 0x00;
            Data[2] = 0x00;
            Data[3] = 0x02;//Mouse
            Data[4] = 0x01;
            Data[5] = 0x00;
            Data[6] = 0x05;

            Data[7] = Obj;
            //-----------------------------------
            return new Promise(function (resolve) {
                _this.SetFeatureReport(dev, Data,50).then(function () {
                    callback("ChangeProfileID Done");
                });
            });

        } catch(e) {
            env.log('ModelOSeries','SetKeyMatrix',`Error:${e}`);
        }
    }
    SetLEDEffect(dev, Obj, callback) {
        env.log('ModelOSeries','SetLEDEffect','Begin')
        try{
            var iEffect;
            var Colors = Obj.LightingData.Color;
            var iSpeed = (105-Obj.LightingData.RateValue)/5;
            if (Obj.LightingData.Effect == 6 || Obj.LightingData.Effect == 7)//Rave/Wave
            {
                iSpeed = (105-Obj.LightingData.RateValue)*2;
            }

            var iBrightness;
            var iProfile = Obj.iProfile;
            
            var arrEffectName = [1,2,3,4,5,6,7,8,0];
            iEffect = arrEffectName[Obj.LightingData.Effect];
           
            var iDataNum = Colors.length*3+5;

            var Data = Buffer.alloc(65);
            Data[0] = 0x00;
            Data[1] = 0x00;
            Data[2] = 0x00;
            Data[3] = 0x02;//Mouse
            Data[4] = iDataNum;
            Data[5] = 0x02;
            Data[6] = 0x00;   
            
            Data[7] = iProfile+1;//Profile
            Data[8] = 0xff;//zones-All zones
            Data[9] = iEffect;//Effect
            Data[10] = 0x00;//Direction
            Data[11] = iSpeed;//Speed
            if (iEffect == 2) //Seamless Breathing
            {
                Data[12] = 0xff;//R
                Data[13] = 0x00;//G
                Data[14] = 0x00;//B
            }
            else
            {
                for (var index = 0; index < Colors.length; index++) {
                    if (Colors[index].flag == false) {
                        Data[12+index*3+0] = 0;//R
                        Data[12+index*3+1] = 0;//G
                        Data[12+index*3+2] = 0;//B
                    }
                    else if (Colors[index].flag == true && Colors[index].R == 0 && Colors[index].G == 0 && Colors[index].B == 0 ) {
                        Data[12+index*3+0] = 1;//R
                        Data[12+index*3+1] = 0;//G
                        Data[12+index*3+2] = 0;//B
                    }
                    else {
                        Data[12+index*3+0] = Colors[index].R;//R
                        Data[12+index*3+1] = Colors[index].G;//G
                        Data[12+index*3+2] = Colors[index].B;//B
                    }
                }
            }
            _this.SetFeatureReport(dev, Data,30).then(function () 
            {
                callback("SetLEDEffect Done");
            });
        } catch(e) {
            env.log('ModelOSeries','SetLEDEffect',`Error:${e}`);
        }
    }
    SetLEDBright(dev, Obj, callback) {
        env.log('ModelOSeries','SetLEDBright','Begin')
        try{
            var iWiredBrightness = Obj.LightingData.WiredBrightnessValue/100*255;
            var iWirelessBrightness = Obj.LightingData.WirelessBrightnessValue/100*255;
            var bCheckValue = Obj.LightingData.SepatateCheckValue;
            var iProfile = Obj.iProfile;
            
               
            var Data = Buffer.alloc(65);
            Data[0] = 0x00;
            Data[1] = 0x00;
            Data[2] = 0x00;
            Data[3] = 0x02;//Mouse
            Data[4] = 0x02;
            Data[5] = 0x02;
            Data[6] = 0x02;   
            
            Data[7] = 1;//Mode WIRED
            Data[8] = iWiredBrightness;//Brightness(0-255)
            _this.SetFeatureReport(dev, Data,30).then(function () 
            {
                Data[7] = 0;//Mode WIRELESS
                if (bCheckValue)
                    Data[8] = iWirelessBrightness;//Brightness(0-255)
                else 
                    Data[8] = iWiredBrightness;//Brightness(0-255)
                _this.SetFeatureReport(dev, Data,30).then(function () 
                {
                    callback("SetLEDBright Done");
                });
            });
        } catch(e) {
            env.log('ModelOSeries','SetLEDEffect',`Error:${e}`);
        }
    }
    SetSleepTimetoDevice(dev, Obj, callback) {
        try{      
            var Data = Buffer.alloc(65);
            Data[0] = 0x00;
            Data[1] = 0x00;
            Data[2] = 0x00;
            Data[3] = 0x02;//Mouse
            Data[4] = 0x02;
            Data[5] = 0x00;
            Data[6] = 0x07;  
            if(Obj.sleep)
            {
                var iSleeptime = Obj.sleeptime * 60;
                Data[7] = (iSleeptime / 0xFF); 
                Data[8] = (iSleeptime & 0xFF); 
            }
            else
            {
                Data[7] = 0xff;  
                Data[8] = 0xff; 
            }
            
            _this.SetFeatureReport(dev, Data,30).then(function () 
            {
                callback("SetCalibration2Device Done");
            });
        } catch(e) {
            env.log('ModelOSeries','SetCalibration2Device',`Error:${e}`);
        }
    }
    SetImportProfileData(dev,Obj,callback) {
        var iProfile = dev.deviceData.profileindex-1;

        var ProfileData = dev.deviceData.profile[iProfile];
        var KeyAssignData = ProfileData.keybinding;
        var LightingData = ProfileData.lighting;
        var PerformanceData = ProfileData.performance;
    
        var ObjKeyAssign = {
            iProfile :iProfile,
            KeyAssignData:KeyAssignData
        }
        var ObjLighting = {
            iProfile :iProfile,
            LightingData:LightingData
        }
        var ObjPerformance = {
            iProfile :iProfile,
            PerformanceData:PerformanceData
        }
        _this.SetKeyFunction(dev, ObjKeyAssign, function(param1) {
            _this.SetLEDEffect(dev, ObjLighting, function(param2) {
                _this.SetLEDBright(dev, ObjLighting, function(param25) {
                    _this.SetPerformance(dev, ObjPerformance, function(param3) {
                        
                        _this.nedbObj.getMacro().then(function (doc) {
                            var MacroData = doc;
                            var ObjMacroData = {
                                MacroData:MacroData
                            }
                            _this.SetMacroFunction(dev, ObjMacroData, function(param2) {
                                callback("SetProfileDataFromDB Done");
                            });
                        });
                    });
                });
            });
        });
    }
    SetProfileDataFromDB(dev,Obj,callback) {
        if(env.BuiltType == 1) {
            callback();
            return;
        }

        (function SetProfileData(iProfile){ 
            var ProfileData = dev.deviceData.profile[iProfile];
            if (iProfile < 3 && ProfileData!= undefined) {
                var KeyAssignData = ProfileData.keybinding;
                var LightingData = ProfileData.lighting;
                var PerformanceData = ProfileData.performance;
    
                var ObjKeyAssign = {
                    iProfile :iProfile,
                    KeyAssignData:KeyAssignData
                }
                var ObjLighting = {
                    iProfile :iProfile,
                    LightingData:LightingData
                }
                var ObjPerformance = {
                    iProfile :iProfile,
                    PerformanceData:PerformanceData
                }
                _this.SetKeyFunction(dev, ObjKeyAssign, function(param1) {
                    //_this.SetMacroFunction(dev, ObjKeyAssign, function(param2) {
                        _this.SetLEDEffect(dev, ObjLighting, function(param3) {
                            _this.SetPerformance(dev, ObjPerformance, function(param4) {
                                _this.setProfileToDevice(dev, function(paramDB) {
                                    SetProfileData(iProfile+1);
                                });
                            });
                        });
                    //});
                });
            } else{
                _this.ChangeProfileID(dev,dev.deviceData.profileindex, function(paramDB){
                    //Set LEDBrightness
                    var iProfile = dev.deviceData.profileindex-1;
                    var ProfileData = dev.deviceData.profile[iProfile];
                    var LightingData = ProfileData.lighting;
                    var ObjLighting = {
                        iProfile :iProfile,
                        LightingData:LightingData
                    }
                    _this.SetLEDBright(dev, ObjLighting, function(param1) {
                        
                        //-------------dpiSelectIndex---------------
                        var ProfileData = dev.deviceData.profile[iProfile];
                        var PerformanceData = ProfileData.performance;
                        var ObjActiveDPI = {profile:iProfile,activeDPI:PerformanceData.dpiSelectIndex};
                        if (PerformanceData.dpiSelectIndex == undefined) {
                            ObjActiveDPI.activeDPI = 0;
                        }
                        //-------------dpiSelectIndex---------------
                        _this.SetActiveDPIStages2Device(dev, ObjActiveDPI, function(param2) {//Set ActiveDPIStage Into Device
                            callback("SetProfileDataFromDB Done");
                        });
                    });
                });
            }

        })(0);
    }
    SetKeyMatrix(dev, Obj, callback) {
        env.log('ModelOSeries','SetKeyMatrix','Begin')
        dev.deviceData.profile = Obj.profileData;//Assign profileData From Obj
        var iProfile = dev.deviceData.profileindex -1;//Assign profileindex From deviceData
        var switchUIflag = Obj.switchUIflag;
        try{
            dev.m_bSetHWDevice = true;
            switch (true) {
                case switchUIflag.keybindingflag://Set Device keybinding(Key Assignment)
                    _this.nedbObj.getMacro().then(function (doc) {
                        var MacroData = doc;
                        var KeyAssignData = Obj.profileData[iProfile].keybinding;
                        var ObjKeyAssign = {
                            iProfile :iProfile,
                            KeyAssignData:KeyAssignData
                        }
                        var ObjMacroData = {
                            MacroData:MacroData
                        }
                        _this.SetKeyFunction(dev, ObjKeyAssign, function(param1) {
                            _this.SetMacroFunction(dev, ObjMacroData, function(param2) {
                                _this.setProfileToDevice(dev, function(paramDB) {//Save DeviceData into Database
                                    dev.m_bSetHWDevice = false;
                                    callback("SetKeyMatrix Done");
                                });
                            });
                        });
                    });
                    break;
                case switchUIflag.lightingflag://Set Device Lighting
                    var LightingData = Obj.profileData[iProfile].lighting;
                    var ObjLighting = {
                        iProfile :iProfile,
                        LightingData:LightingData
                    }
                    _this.SetLEDEffect(dev, ObjLighting, function(param2) {
                        _this.SetLEDBright(dev, ObjLighting, function(param25) {
                            _this.setProfileToDevice(dev, function(paramDB) {//Save DeviceData into Database
                                dev.m_bSetHWDevice = false;
                                callback("SetKeyMatrix Done");
                            });
                        });
                    });
                    break;
                case switchUIflag.performanceflag://Set Device Performance
                    var PerformanceData = Obj.profileData[iProfile].performance;
                    var ObjPerformance = {
                        iProfile :iProfile,
                        PerformanceData:PerformanceData
                    }
                    _this.SetPerformance(dev, ObjPerformance, function(param1) {
                        //-------------dpiSelectIndex---------------
                        var ObjActiveDPI = {profile:iProfile,activeDPI:Obj.profileData[iProfile].performance.dpiSelectIndex};
                        if (ObjPerformance.PerformanceData.dpiSelectIndex == undefined) {
                            ObjActiveDPI.activeDPI = 0;
                        }
                        //-------------dpiSelectIndex---------------
                        _this.SetActiveDPIStages2Device(dev, ObjActiveDPI, function(param2) {//Set ActiveDPIStage Into Device
                            _this.setProfileToDevice(dev, function(paramDB) {//Save DeviceData into Database
                                dev.m_bSetHWDevice = false;
                                callback("SetKeyMatrix Done");
                            });
                        });
                    });
                    break;
            
            }
            
            
        } catch(e) {
            env.log('ModelOSeries','SetKeyMatrix',`Error:${e}`);
        }
    }
    SetPerformance(dev, ObjPerformance, callback) 
    {  
        //------------Total DPI levels-------------
        var DpiStage = ObjPerformance.PerformanceData.DpiStage;
        var DataDPIStages = Buffer.alloc(65);
        DataDPIStages[0] = ObjPerformance.iProfile+1;
        DataDPIStages[1] = DpiStage.length;//DPI Stages Number

        for (var i = 0; i < DpiStage.length; i++) //DPI resolution
        {
            DataDPIStages[2+i*4+0] = DpiStage[i].value>>8;    //DPI Stage X High Byte
            DataDPIStages[2+i*4+1] = DpiStage[i].value & 0xFF;//DPI Stage X Low Byte
            DataDPIStages[2+i*4+2] = DpiStage[i].value>>8;    //DPI Stage Y High Byte
            DataDPIStages[2+i*4+3] = DpiStage[i].value & 0xFF;//DPI Stage Y Low Byte
        }
        //------------Total DPI levels-------------
        //------------DPI stage Color-------------
        var DataDPIColor = Buffer.alloc(65);
        DataDPIColor[0] = ObjPerformance.iProfile+1;

        for (var i = 0; i < DpiStage.length; i++) //DPI resolution
        {
            var DPIColor = _this.hexToRgb(DpiStage[i].color)
            DataDPIColor[1+i*3+0] = DPIColor.color.R;//DPI Color R
            DataDPIColor[1+i*3+1] = DPIColor.color.G;//DPI Color G
            DataDPIColor[1+i*3+2] = DPIColor.color.B;//DPI Color B
        }
        //------------DPI stage Color-------------
        //-------------Calibration setting (Lod)---------------
        var DataCalibration = Buffer.alloc(65);
        DataCalibration[0] = ObjPerformance.PerformanceData.LodValue-1;
        //-------------Calibration setting (Lod)---------------
        //-------------Polling Rate---------------
        var DataPollingRate = Buffer.alloc(65);
        var arrRate = [125,250,500,1000];
        var arrRateValue = [8,4,2,1];
        var PollingRate = arrRate.indexOf(ObjPerformance.PerformanceData.pollingrate);
        if (PollingRate!= -1) {
            DataPollingRate[0] = arrRateValue[PollingRate];
        }        
        //-------------Polling Rate---------------
        //-------------Debounce time---------------
        var DataDebounce = Buffer.alloc(65);
        DataDebounce[0] = ObjPerformance.iProfile+1;
        DataDebounce[1] = ObjPerformance.PerformanceData.DebounceValue;
        //-------------Debounce time---------------

        _this.SetDPIStages2Device(dev, DataDPIStages, function(param1) {//Set DPIStage Into Device
            _this.SetDPIColor2Device(dev, DataDPIColor, function(param2) {//Set DPIColor Into Device
                _this.SetCalibration2Device(dev, DataCalibration, function(param3) {//Set Calibration Into Device
                    _this.SetPollingRate2Device(dev, DataPollingRate, function(param4) {//Set PollingRate Into Device
                        _this.SetDebounce2Device(dev, DataDebounce, function(param5) {//Set Debounce Into Device
                            callback("SetPerformance Done");
                        });
                    });
                });
            });
        });
    }
    
    SetActiveDPIStages2Device(dev, ObjActiveDPI, callback) {
        try{      
            var Data = Buffer.alloc(65);
            Data[0] = 0x00;
            Data[1] = 0x00;
            Data[2] = 0x00;
            Data[3] = 0x02;//Mouse
            Data[4] = 0x02;
            Data[5] = 0x01;
            Data[6] = 0x02;

            Data[7] = ObjActiveDPI.profile +1;
            Data[8] = ObjActiveDPI.activeDPI +1;
            _this.SetFeatureReport(dev, Data,30).then(function () 
            {
                callback("SetActiveDPIStages2Device Done");
            });
        } catch(e) {
            env.log('ModelOSeries','SetActiveDPIStages2Device',`Error:${e}`);
        }
    }
    SetDPIStages2Device(dev, DataBuffer, callback) {
        try{      
            var Data = Buffer.alloc(65);
            var iDataNum = DataBuffer[1]*4+2;
            Data[0] = 0x00;
            Data[1] = 0x00;
            Data[2] = 0x00;
            Data[3] = 0x02;//Mouse
            Data[4] = iDataNum;
            Data[5] = 0x01;
            Data[6] = 0x01;   
            
            for (var i = 0; i < 58; i++)
            {
                Data[7 + i] = DataBuffer[i];
            }
            _this.SetFeatureReport(dev, Data,30).then(function () 
            {
                callback("SetDPIStages2Device Done");
            });
        } catch(e) {
            env.log('ModelOSeries','SetDPIStages2Device',`Error:${e}`);
        }
    }
    SetDPIColor2Device(dev, DataBuffer, callback) {
        try{      
            var Data = Buffer.alloc(65);
            Data[0] = 0x00;
            Data[1] = 0x00;
            Data[2] = 0x00;
            Data[3] = 0x02;//Mouse
            Data[4] = 0x13;
            Data[5] = 0x02;
            Data[6] = 0x01;   
            
            for (var i = 0; i < 58; i++)
            {
                Data[7 + i] = DataBuffer[i];
            }
            _this.SetFeatureReport(dev, Data,30).then(function () 
            {
                callback("SetDPIStages2Device Done");
            });
        } catch(e) {
            env.log('ModelOSeries','SetDPIStages2Device',`Error:${e}`);
        }
    }
    SetCalibration2Device(dev, DataBuffer, callback) {
        try{      
            var Data = Buffer.alloc(65);
            Data[0] = 0x00;
            Data[1] = 0x00;
            Data[2] = 0x00;
            Data[3] = 0x02;//Mouse
            Data[4] = 0x01;
            Data[5] = 0x01;
            Data[6] = 0x07;   
            
            for (var i = 0; i < 58; i++)
            {
                Data[7 + i] = DataBuffer[i];
            }
            _this.SetFeatureReport(dev, Data,30).then(function () 
            {
                callback("SetCalibration2Device Done");
            });
        } catch(e) {
            env.log('ModelOSeries','SetCalibration2Device',`Error:${e}`);
        }
    }
    SetPollingRate2Device(dev, DataBuffer, callback) {
        try{      
            var Data = Buffer.alloc(65);
            Data[0] = 0x00;
            Data[1] = 0x00;
            Data[2] = 0x00;
            Data[3] = 0x02;//Mouse
            Data[4] = 0x01;
            Data[5] = 0x01;
            Data[6] = 0x00;   
            
            for (var i = 0; i < 58; i++)
            {
                Data[7 + i] = DataBuffer[i];
            }
            _this.SetFeatureReport(dev, Data,30).then(function () 
            {
                callback("SetPollingRate2Device Done");
            });
        } catch(e) {
            env.log('ModelOSeries','SetPollingRate2Device',`Error:${e}`);
        }
    }
    SetDebounce2Device(dev, DataBuffer, callback) {
        try{      
            var Data = Buffer.alloc(65);
            Data[0] = 0x00;
            Data[1] = 0x00;
            Data[2] = 0x00;
            Data[3] = 0x02;//Mouse
            Data[4] = 0x01;
            Data[5] = 0x00;
            Data[6] = 0x08;   
            
            for (var i = 0; i < 58; i++)
            {
                Data[7 + i] = DataBuffer[i];
            }
            _this.SetFeatureReport(dev, Data,30).then(function () 
            {
                callback("SetDebounce2Device Done");
            });
        } catch(e) {
            env.log('ModelOSeries','SetDPIStages2Device',`Error:${e}`);
        }
    }
    SetMacroFunction(dev, ObjMacroData, callback) 
    {     
        (function SetMacro(iMacro){ 
            if (iMacro < ObjMacroData.MacroData.length) 
            {
                var MacroData = ObjMacroData.MacroData[iMacro];//Button
                var BufferKey = _this.MacroToData(MacroData);
                var ObjMacroData2 = {MacroID:MacroData.id,MacroData:BufferKey};

                var DataDelete = Buffer.alloc(65);
                var DataCreate = Buffer.alloc(65);
                //Delete Macro
                DataDelete[0] = 0x00;
                DataDelete[1] = 0x00;
                DataDelete[2] = 0x00;
                DataDelete[3] = 0x02;//Mouse
                DataDelete[4] = 0x02;
                DataDelete[5] = 0x04;
                DataDelete[6] = 0x02;  
                DataDelete[7] = (MacroData.id/0xFF); 
                DataDelete[8] = (MacroData.id & 0xFF); 
                //Create Macro
                DataCreate[0] = 0x00;
                DataCreate[1] = 0x00;
                DataCreate[2] = 0x00;
                DataCreate[3] = 0x02;//Mouse
                DataCreate[4] = 0x06;
                DataCreate[5] = 0x04;
                DataCreate[6] = 0x01;  
                DataCreate[7] = (MacroData.id/0xFF); 
                DataCreate[8] = (MacroData.id & 0xFF); 
                DataCreate[9] = 0x00;  
                DataCreate[10] = 0x00; 
                DataCreate[11] = (BufferKey.length /0xFF); 
                DataCreate[12] = (BufferKey.length &0xFF); 

                _this.SetAndCheckStatus(dev, DataDelete,50).then(function () {
                    _this.SetAndCheckStatus(dev, DataCreate,50).then(function () {
                        _this.SetMacroDataToDevice(dev, ObjMacroData2,function () {
                            SetMacro(iMacro + 1);
                        });
                    });
                });
            }
            else
            {
                callback("SetMacroFunction Done");
            }
        })(0);
    }
    SetMacroDataToDevice(dev, ObjMacroData,callback) {
        var MacroID = ObjMacroData.MacroID;
        var MacroData = ObjMacroData.MacroData;

        (function SetMacroData(iMacro){ 
            var Data = Buffer.alloc(65);
            Data[0] = 0x00;
            Data[1] = 0x00;
            Data[2] = 0x00;
            Data[3] = 0x02;//Mouse
            Data[4] = 0x00;//Data Size
            Data[5] = 0x04;
            Data[6] = 0x03;  
            Data[7] = (MacroID/0xFF); 
            Data[8] = (MacroID & 0xFF); 

            var iMaxSize = 50;

            var iOffset = iMacro*iMaxSize;
            if (iOffset < MacroData.length) 
            {
                Data[11] = (iOffset/0xFF); 
                Data[12] = (iOffset & 0xFF); 
                var iSize = MacroData.length % iMaxSize;
                Data[13] = iSize; 
                if((MacroData.length-iOffset)/51>=1)
                    Data[13] = iMaxSize; 

                Data[4] = Data[13]+6;//Data Size
                for (var k = 0; k < iMaxSize; k++)
                {
                    if(iOffset+k >= MacroData.length)
                        break;
                    Data[14+k] = MacroData[iOffset+k];
                }
                var delaytime = 40;
                if(iMacro>=5)
                    delaytime = 60;

                _this.SetAndCheckStatus(dev, Data,delaytime).then(function () {
                    SetMacroData(iMacro + 1);
                });
            }
            else
            {
                callback();
            }

        })(0);
    }
    MacroToData(MacroData) 
    {
        var BufferKey = [];//MacroDataBuffer to Device
        var DataEvent = [];//DataEvent
        //------------Turns Hash Keys into Event Array-------------
        var Macrokeys=Object.keys(MacroData.content);
        for (var icontent = 0; icontent < Macrokeys.length; icontent++) {
            var Hashkeys = Macrokeys[icontent];
            for (var iData = 0; iData < MacroData.content[Hashkeys].data.length; iData++) {
                var MacroEvent ={keydown:true,key:Hashkeys,times:MacroData.content[Hashkeys].data[iData].startTime};
                DataEvent.push(MacroEvent);
                MacroEvent ={keydown:false,key:Hashkeys,times:MacroData.content[Hashkeys].data[iData].endTime};
                DataEvent.push(MacroEvent);
            }
        }
        //------------Sort Event Array By times-------------
        DataEvent = DataEvent.sort(function (a, b) {
            return a.times > b.times ? 1 : -1;
           });
        //------------Turns Event Array into BufferKey-------------
        for (var iEvent = 0; iEvent < DataEvent.length; iEvent++) {
            var KeyCode = 0x04;//A
            var bModifyKey = false;
            var bMouseButton = false;
            //Assign Keyboard KeyCode to KeyCode
            for(var i=0; i<SupportData.KeyMapping.length; i++){
                if(DataEvent[iEvent].key == SupportData.KeyMapping[i].value){
                    KeyCode = SupportData.KeyMapping[i].hid;
                    break;
                }
            }
            //Assign MDF KeyCode to KeyCode
            for(var i=0; i<_this.MDFMapping.length; i++){
                if(DataEvent[iEvent].key == _this.MDFMapping[i].value){
                    KeyCode = _this.MDFMapping[i].MDFKey;
                    bModifyKey = true;
                    break;
                }
            }
            //Assign Mouse KeyCode to KeyCode
            for(var i=0; i<SupportData.MouseMapping.length; i++){
                if(DataEvent[iEvent].key == SupportData.MouseMapping[i].value){
                    KeyCode = DataEvent[iEvent].keydown ? SupportData.MouseMapping[i].hid : 0;
                    bMouseButton = true;
                    break;
                }
            }
            
            var ID;
            //Assign Delay to Event
            if (iEvent>0) {
                var iDelay = DataEvent[iEvent].times - DataEvent[iEvent-1].times;

                ID = iDelay <= 255 ? 0x20 : 0x21;
                if (ID == 0x20) {//DELAY_1
                    BufferKey.push(ID);
                    BufferKey.push(iDelay);
                } else {//DELAY_2
                    BufferKey.push(ID);
                    //BufferKey.push(0x21);
                    BufferKey.push(iDelay / 0xFF);
                    BufferKey.push(iDelay & 0xFF);
                }
            }
            //Assign KeyCode Make/Break to Event
            if (bMouseButton)
                ID = DataEvent[iEvent].keydown ? 1 : 1;
            else if (bModifyKey)
                ID = DataEvent[iEvent].keydown ? 9 : 10;
            else
                ID = DataEvent[iEvent].keydown ? 2 : 3;
            BufferKey.push(ID);
            BufferKey.push(KeyCode);
            
        }
        return BufferKey;
    }
    SetKeyFunction(dev, ObjKeyAssign, callback) 
    {     
        //------------KeyAssignment-------------
        var iProfile = ObjKeyAssign.iProfile;
        (function SetAssignKey(iButton){ 
            if (iButton < ObjKeyAssign.KeyAssignData.length) 
            {
                var KeyAssignData = ObjKeyAssign.KeyAssignData[iButton];//Button

                var BufferKey = _this.KeyAssignToData(KeyAssignData);
        
                var DataBuffer = Buffer.alloc(58);//KeyData
                DataBuffer[0] = iProfile+1;//Profile
                //-------------------------------------
                DataBuffer[1] = _this.ButtonMapping[iButton].ButtonID;
                //-------------------------------------
                // DataBuffer[1] = iButton+1;//Button
                // if (_this.Matrix_KeyCode_ModelO[iButton] == "DPISwitch") {
                //     DataBuffer[1] = 0x14;
                // }
                //-------------------------------------
                DataBuffer[2] = 0;
                for (var i = 0; i < BufferKey.length; i++) //Buffer 6+3 to Buffer 6+58
                {
                    DataBuffer[3+i] = BufferKey[i];
                }
                //------------KeyAssignment-------------
                var Data = Buffer.alloc(65);

                Data[0] = 0x00;
                Data[1] = 0x00;
                Data[2] = 0x00;
                Data[3] = 0x02;//Mouse
                Data[4] = 0x09;
                Data[5] = 0x03;
                Data[6] = 0x00;
                for (var i = 0; i < DataBuffer.length; i++)//30
                {
                    Data[7 + i] = DataBuffer[i];
                }
                //-----------------------------------
                return new Promise(function (resolve) {
                    _this.SetAndCheckStatus(dev, Data,100).then(function () {
                        SetAssignKey(iButton + 1);
                    });
                });
                //-----------------------------------

            }
            else
            {
                callback("SetKeyFunction Done");
            }
            
        })(0);
    }
    
    KeyAssignToData(KeyAssignData) 
    {
        var BufferKey = Buffer.alloc(55);//KeyData
          
        switch (KeyAssignData.group) {
            case 1://Macro Function
                if (KeyAssignData.param == 1) {//Toggle
                    BufferKey[0] = 0x12;//ID:Macro Button
                    BufferKey[1] = 0x02;//Size
                }
                else if (KeyAssignData.param == 2) {//Repeat while holding
                    BufferKey[0] = 0x11;//ID:Macro Button
                    BufferKey[1] = 0x02;//Size
                }else{
                    BufferKey[0] = 0x10;//ID:Macro Button
                    BufferKey[1] = 0x03;//Size
                    BufferKey[4] = 0x01;//Repeat Times
                    
                }
                BufferKey[2] = KeyAssignData.function >> 8;//Macro ID-Highbyte
                BufferKey[3] = KeyAssignData.function & 0xFF;//Macro ID-Lowbyte
                break;
            case 7://Key Function
            
                for(var iMap=0; iMap<SupportData.KeyMapping.length; iMap++){
                    if(KeyAssignData.function == SupportData.KeyMapping[iMap].value ){
                        var arrModifiers = [1,0,2,3,4];
                        
                        BufferKey[0] = 0x04;//ID:Keyboard Button
                        BufferKey[1] = 0x02;//Size
                        BufferKey[2] = 0x00;//Modifiers. 
                        for (var index = 0; index < KeyAssignData.param.length; index++) {
                            if (KeyAssignData.param[index] == true)
                                BufferKey[2] |= Math.pow(2,arrModifiers[index]);//Binary To Byte
                        }
                        if (SupportData.KeyMapping[iMap].Modifier != undefined)
                            BufferKey[2] |= SupportData.KeyMapping[iMap].Modifier
                        else
                            BufferKey[3] = SupportData.KeyMapping[iMap].hid;//key code. 
                        
                        //BufferKey[2] = 0x01;//Modifiers. 
                        //BufferKey[3] = 0x00;//Modifiers. 
                        break;
                    }
                }
            break;
            case 3://Mouse Function
                var arrMouseValue = [1,1,2,3,5,4,0x10,0x11,0x18,0x19,0x0c];
                BufferKey[0] = 0x01;//ID:Mouse Button
                BufferKey[1] = 0x01;//Size
                BufferKey[2] = arrMouseValue[KeyAssignData.function];//P1
                if (arrMouseValue[KeyAssignData.function] == 0x0c) {//Battery Indication
                    BufferKey[0] = 0x0C;//ID:Mouse Button
                    BufferKey[2] = 0x01;
                }
                else if (arrMouseValue[KeyAssignData.function] == 0x18) {//Profile loopUp 
                    BufferKey[0] = 0x08;//ID:Profile
                    BufferKey[2] = 0x03;
                }
                else if (arrMouseValue[KeyAssignData.function] == 0x19) {//Profile loopDown
                    BufferKey[0] = 0x08;//ID:Profile
                    BufferKey[2] = 0x04;
                }
            break;
            case 4://DPI Switch
                var arrDPIValue = [1,1,2,6,7,5];
                BufferKey[0] = 0x07;//ID:DPI
                BufferKey[1] = 0x01;//Size
                BufferKey[2] = arrDPIValue[KeyAssignData.function];//P1
                if (arrDPIValue[KeyAssignData.function] == 5) {//Sniper DPI
                    var DpiValue = KeyAssignData.param;
                    BufferKey[1] = 0x05;//Size
                    BufferKey[2] = 0x05;//Sniper DPI
                    BufferKey[3] = parseInt(DpiValue) >> 8;//Sniper DPI-X-Highbyte
                    BufferKey[4] = parseInt(DpiValue) & 0xFF;//Sniper DPI-X-Lowbyte
                    BufferKey[5] = parseInt(DpiValue) >> 8;//Sniper DPI-Y-Highbyte
                    BufferKey[6] = parseInt(DpiValue) & 0xFF;//Sniper DPI-Y-Lowbyte
                }
            break;
            case 5://Multi Media
                var hidMap = SupportData.MediaMapping[KeyAssignData.function].hidMap;
                BufferKey[0] = 0x05;//ID:consumer Keys
                BufferKey[1] = 0x02;//Size
                for (var index = 0; index < hidMap.length; index++) {
                    BufferKey[2+index] = hidMap[index];
                }

            break;
            case 2://Windows Shortcut/Launch      
                if (KeyAssignData.function == 1) {//Launch Program
                    BufferKey[0] = 0x05;//ID:consumer Keys
                    BufferKey[1] = 0x02;//Size
                    BufferKey[2] = KeyAssignData.value;//Button ID
                    BufferKey[3] = 0x0f;//Launch ID

                }    
                else if (KeyAssignData.function == 2) {//Launch WebSite
                    BufferKey[0] = 0x05;//ID:consumer Keys
                    BufferKey[1] = 0x02;//Size
                    BufferKey[2] = KeyAssignData.value;//Button ID
                    BufferKey[3] = 0x0f;//Launch ID
                }
                else if (KeyAssignData.function == 3) {//Windows Shortcut
                    var hidMap = SupportData.WindowsMapping[KeyAssignData.param].hidMap;
                    BufferKey[0] = 0x05;//ID:consumer Keys
                    BufferKey[1] = 0x02;//Size
                    for (var index = 0; index < hidMap.length; index++) {
                        BufferKey[2+index] = hidMap[index];
                    }
                }
            break;
            case 6://Disable
                BufferKey[0] = 0x00;//ID:Disable
                BufferKey[1] = 0x00;//Size
            break;
            default:               
            break;
        } 
        return BufferKey;
    }

    
    SetAndCheckStatus(dev, buf,iSleep) {
        //env.log("ModelOSeries","SetFeatureReport",dev.BaseInfo.DeviceId)
        return new Promise(function (resolve, reject) {
            try{
                var iTimes = 0;
                var bwireless = false;
                var rtnData;
                rtnData = _this.hid.SetFeatureReport(dev.BaseInfo.DeviceId,0x00, 65, buf);
                (function SetCheckStatus(iTimes,bwireless){ 
                    if (iTimes < 50) 
                    {
                        if (bwireless == true)
                        {
                            if (dev.bwaitForPair) 
                            {
                                setTimeout(function(){
                                    SetCheckStatus(iTimes+1,true);
                                },40);
                            }
                            else
                            {
                                resolve(rtnData);
                            }
                        }
                        else 
                        {
                            setTimeout(function(){
                                var BufferGet = Buffer.alloc(55);//KeyData
                                rtnData = _this.hid.GetFeatureReport(dev.BaseInfo.DeviceId,0x00, 65, BufferGet);
                            
                                if (rtnData[0]== 0xa2) {
                                    //dev.bwaitForPair = true;
                                    setTimeout(function(){
                                        _this.hid.SetFeatureReport(dev.BaseInfo.DeviceId,0x00, 65, buf);
                                        SetCheckStatus(iTimes+1,false);
                                    },40);
                                }
                                else if (rtnData[0]== 0xa0) {
                                    setTimeout(function(){
                                        SetCheckStatus(iTimes+1,false);
                                    },40);
                                }
                                else if (rtnData[0]== 0xa4) {
                                    //resolve(rtnData);
                                    dev.bwaitForPair = true;
                                    setTimeout(function(){
                                        SetCheckStatus(iTimes+1,true);
                                    },40);
                                }
                                else
                                {
                                    resolve(rtnData);
                                }
                            },iSleep);
                        }
                    }
                    else
                    {
                        env.log("ModelOSeries","SetAndCheckStatus","Fail");
                        resolve(0);
                    }
                })(0);
            }catch(err){
                env.log("DeviceApi Error","SetFeatureReport",`ex:${err.message}`);
                resolve(err);
            }
        });
    }
            
    SetFeatureReport(dev, buf,iSleep) {
        //env.log("ModelOSeries","SetFeatureReport",dev.BaseInfo.DeviceId)
        return new Promise(function (resolve, reject) {
            try{
                   var rtnData = _this.hid.SetFeatureReport(dev.BaseInfo.DeviceId,0x00, 65, buf);
                   setTimeout(function(){
                    // if(rtnData != 65)
                    //     env.log("DeviceApi SetFeatureReport","SetFeatureReport(error) return data length : ",JSON.stringify(rtnData));
                    resolve(rtnData);
                    },iSleep);
            }catch(err){
                env.log("DeviceApi Error","SetFeatureReport",`ex:${err.message}`);
                resolve(err);
            }
        });
    }

    GetFeatureReport(dev, buf,iSleep) {
        //env.log("ModelOSeries","SetFeatureReport",dev.BaseInfo.DeviceId)
        return new Promise(function (resolve, reject) {
            try{
                   var rtnData = _this.hid.GetFeatureReport(dev.BaseInfo.DeviceId,0x00, 65, buf);
                   setTimeout(function(){
                    // if(rtnData != 65)
                    //     env.log("DeviceApi GetFeatureReport","GetFeatureReport(error) return data length : ",JSON.stringify(rtnData));
                    resolve(rtnData);
                    },iSleep);
            }catch(err){
                env.log("DeviceApi Error","GetFeatureReport",`ex:${err.message}`);
                resolve(err);
            }
        });
    }
    SavingProfile2Device(dev) {
        return new Promise(function (resolve) {
            var Data = Buffer.alloc(264);
            var DataBuffer = Buffer.alloc(432);

            Data[0] = 0x07;
            Data[1] = 0xa6;
            Data[2] = 0x01; //AP Mode
            Data[3] = 0x4b; //XPG Mouse Headshot
            
            //Profile:1~5
            if (m_CurrentData.CurrentSW>2) //Profile4-VirtualProfile
            {
                Data[6] = 4; //Profile4-VirtualProfile
            } 
            else 
            {
                Data[6] = m_CurrentData.CurrentSW+1; //Number of profiles
            }

            // //-----------------------------------
            _this.SetFeatureReport(dev, Data,5).then(function () {
                resolve("12");
            });
            
        });
    }
}

module.exports = ModelOSeries;