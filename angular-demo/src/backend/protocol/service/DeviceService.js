const EventEmitter = require('events');
const env = require('../../others/env');
var nedbObj = require('../../dbapi/AppDB');
var HID = require('../nodeDriver/HID');
var ModelOSeries = require('../device/mouse/ModelOSeries'); 
var CommonMouseSeries = require('../device/mouse/CommonMouseSeries');
var GmmkSeries = require('../device/keyboard/GmmkSeries');
var funcVar = require('../../others/FunctionVariable');
var evtType = require('../../others/EventVariable').EventTypes;


'use strict';
var _this;
class DeviceService extends EventEmitter {
    constructor() {
        env.log('DeviceService','DeviceService','begin')
        try {
            super();
            _this = this;
            _this.nedbObj = nedbObj.getInstance();
            _this.SupportDevice = [];
            _this.AllDevices = new Map();
            _this.hid = HID.HIDInstance;

            //device instance
            _this.ModelOSeries;
            _this.GmmkSeries;
        } catch(e) {
            env.log('ERROR','DeviceService',e)
        }
    }

    static getInstance() {
        if (this.instance) {
            env.log('DeviceService', 'getInstance', `Get exist DeviceService() INSTANCE`);
            
            return this.instance;
        }
        else {
            env.log('DeviceService', 'getInstance', `New DeviceService() INSTANCE`);
            this.instance = new DeviceService();

            return this.instance;
        }
    }
    
    OnDeviceMessage(Obj) {
        if (Obj.SN != undefined) 
            _this.emit(evtType.ProtocolMessage, Obj);
    }
    RunFunction(Obj, callback) {
        if(env.BuiltType == 1) {
            callback();
            return;
        }
        try {
            if( _this.AllDevices.size <= 0)
                throw new Error('Please initDevice first');
            
            if( !_this.AllDevices.has(Obj.SN))
                throw new Error('SN is Error');
            
            var dev = _this.AllDevices.get(Obj.SN);;
            var devfun = dev.SeriesInstance[Obj.Func];

            if(devfun === undefined)
                throw new Error(`devfun Error: ${Obj.Func}`)
            
            dev.SeriesInstance[Obj.Func](dev, Obj.Param, callback);

        } catch(e) {
            env.log('DeviceService', 'RunFunction', `Error ${e}`);
        }
    }

    NumTo16Decimal(rgb) {//HEX
        var hex = Number(rgb).toString(16).toUpperCase();
        
		while (hex.length < 4)
        {
            hex = "0" + hex;
        }
        return hex;
    };

    HIDEP2DataFromDevice(Obj,Obj2) {
        try {
            if(env.BuiltType == 1) {
                return;
            }
            var EP2Array = Obj;
            var DeviceInfo = Obj2;
            if (DeviceInfo.vid != undefined && DeviceInfo.pid != undefined) {
                var SN;
                for(var i = 0; i < _this.SupportDevice.length; i++) {
                    for (var iState = 0; iState < _this.SupportDevice[i].pid.length; iState++) {
                        if (_this.SupportDevice[i].vid[iState] == DeviceInfo.vid && _this.SupportDevice[i].pid[iState] == DeviceInfo.pid) {
                            SN = "0x"+ _this.NumTo16Decimal(_this.SupportDevice[i].vid[0]) + "0x"+ _this.NumTo16Decimal(_this.SupportDevice[i].pid[0]);
                            break;
                        }
                    }
                }
                //var SN = "0x"+ _this.NumTo16Decimal(DeviceInfo.vid) + "0x"+ _this.NumTo16Decimal(DeviceInfo.pid) ;

                var dev = _this.AllDevices.get(SN);
                var devfun = dev.SeriesInstance["HIDEP2Data"];
                if(devfun === undefined) {
                    env.log('DeviceService','HIDEP2DataFromDevice',`${Obj.Func}`);
                }
                else{
                    dev.SeriesInstance["HIDEP2Data"](dev, EP2Array);
                }

            }
            //--------------------
            return; 

        } catch(e) {
            env.log('DeviceService', 'HIDEP2DataFromDevice', `Error ${e}`);
        }
    }

    initDevice() { 
        env.log('DeviceService','initDevice','begin');
        var filterDevice = [];
        return new Promise((resolve,reject) => {
            _this.GetSupportDevice().then(()=>{  
                for(var i = 0; i < _this.SupportDevice.length; i++) {
                    var deviceresult = 0;
                    var StateID = -1;
                    //--------------FindDevice----------------
                    for (var iState = 0; iState < _this.SupportDevice[i].pid.length; iState++) {
                        
                        var result = _this.hid.FindDevice(_this.SupportDevice[i].set.usagepage, _this.SupportDevice[i].set.usage,_this.SupportDevice[i].vid[iState], _this.SupportDevice[i].pid[iState])
                        if(result != 0) {
                            StateID = iState;
                            deviceresult = result;
                            break;
                        }
                    }
                    //--------------FindDevice Done----------------
                    if (deviceresult != 0 || env.BuiltType == 1) {

                        var sn = _this.SupportDevice[i].vid[0]+_this.SupportDevice[i].pid[0]
                        var dev = {};
                        dev.BaseInfo = _this.SupportDevice[i];
                        dev.BaseInfo.DeviceId = deviceresult;
                        dev.BaseInfo.StateID = StateID;
                        dev.BaseInfo.SN = sn;
                        filterDevice.push(dev);
                        
                        //--------------DeviceCallback----------------
                        if(env.isWindows) {
                            for (let index = 0; index < _this.SupportDevice[i].get.length; index++) {
                                var getEndpoint = _this.SupportDevice[i].get[index];
                                var csCallback = 'DeviceDataCallback- '+ index +' : ';

                                var rtn = _this.hid.DeviceDataCallback(getEndpoint.usagepage, getEndpoint.usage,_this.SupportDevice[i].vid[StateID], _this.SupportDevice[i].pid[StateID],_this.HIDEP2DataFromDevice);
                                env.log('initDevice', csCallback, rtn);  
                            }
                        }
                        //--------------DeviceCallback----------------
                    }
                }

                filterDevice.reduce((sequence, dev) =>{
                    return sequence.then(() => {
                        _this.AllDevices.set(dev.BaseInfo.SN, dev);
                        return;
                    }).then(() => {
                        return _this.GetDeviceInst(dev);
                    }).catch((e)=> {
                        env.log('DeviceService','initDevice',`Error:${e}`);
                    });
                },Promise.resolve()).then(() => {
                    return _this.SavePluginDevice();
                }).then(() => {
                    resolve();
                }).catch((e) => {
                    env.log('DeviceService','initDevice',`Error:${e}`);
                });
            });
        });
    }

    GetSupportDevice() {
        return new Promise((resolve,reject) => {
            _this.nedbObj.getSupportDevice().then((data)=>{ 
                _this.SupportDevice = data;
                resolve();
            });
        });
    }

    GetDeviceInst(dev) {
        return new Promise(function (resolve, reject) {
            env.log('DeviceService','GetDeviceInst','begin');
            var cmdInst = undefined;
            if(dev.BaseInfo.routerID == "ModelOSeries") {
                if(_this.ModelOSeries == undefined) {
                    _this.ModelOSeries = ModelOSeries.getInstance(_this.hid);
                    _this.ModelOSeries.on(evtType.ProtocolMessage, _this.OnDeviceMessage);
                }
                cmdInst = _this.ModelOSeries;
            } else if(dev.BaseInfo.routerID == "CommonMouseSeries") {
                if(_this.CommonMouseSeries == undefined) {
                    _this.CommonMouseSeries = CommonMouseSeries.getInstance(_this.hid);
                }
                cmdInst = _this.CommonMouseSeries;
            } else if(dev.BaseInfo.routerID == "GmmkSeries") {
                if(_this.GmmkSeries == undefined) {
                    _this.GmmkSeries = GmmkSeries.getInstance(_this.hid);
                    _this.GmmkSeries.on(evtType.ProtocolMessage, _this.OnDeviceMessage);
                }
                cmdInst = _this.GmmkSeries;
            }

            if(cmdInst != undefined) {
                cmdInst.initDevice(dev).then(() => {
                    dev.SeriesInstance = cmdInst;
                    resolve();
                }).catch((e) => {
                    env.log('DeviceService','GetDeviceInst',`err: ${e}`)
                    resolve();
                });
            } else {
                env.log('DeviceService','GetDeviceInst','cmdInst undefined');
                resolve();
            }
        })
    }

    SavePluginDevice() {
        env.log('DeviceService','SavePluginDevice','SavePluginDevice');
        return new Promise((resolve, reject) => {
            let devList = {};
            devList.Keyboard = [];
            devList.Mouse = [];
            devList.Headset = [];
            for(var val of _this.AllDevices.values()) {
                if(val.BaseInfo.ModelType == 1) {
                    var Mouse = {
                        vid: val.BaseInfo.vid,
                        pid: val.BaseInfo.pid,
                        devicename: val.BaseInfo.devicename,
                        ModelType: val.BaseInfo.ModelType,
                        SN: val.BaseInfo.SN,
                        DeviceId: val.BaseInfo.DeviceId,
                        StateID: val.BaseInfo.StateID,
                        version_Wired: val.BaseInfo.version_Wired,
                        version_Wireless: val.BaseInfo.version_Wireless,
                        // img: val.BaseInfo.img
                    };
                    devList.Mouse.push(Mouse)
                } else if(val.BaseInfo.ModelType == 2) {
                    var Keyboaerd = {
                        vid: val.BaseInfo.vid,
                        pid: val.BaseInfo.pid,
                        devicename: val.BaseInfo.devicename,
                        ModelType: val.BaseInfo.ModelType,
                        SN: val.BaseInfo.SN,
                        DeviceId: val.BaseInfo.DeviceId,
                        StateID: val.BaseInfo.StateID,
                        version_Wired: val.BaseInfo.version_Wired,
                        version_Wireless: val.BaseInfo.version_Wireless,
                        // img: val.BaseInfo.img
                    };
                    devList.Keyboard.push(Keyboaerd)
                } else if(val.BaseInfo.ModelType == 3) {
                    var Headset = {
                        vid: val.BaseInfo.vid,
                        pid: val.BaseInfo.pid,
                        devicename: val.BaseInfo.devicename,
                        ModelType: val.BaseInfo.ModelType,
                        SN: val.BaseInfo.SN,
                        DeviceId: val.BaseInfo.DeviceId,
                        StateID: val.BaseInfo.StateID,
                        version_Wired: val.BaseInfo.version_Wired,
                        version_Wireless: val.BaseInfo.version_Wireless,                   
                         // img: val.BaseInfo.img
                    };
                    devList.Headset.push(Headset)
                }
            }
                _this.nedbObj.updateAllPluginDevice(devList).then(() => {
                    var Obj2 = {
                        Type: funcVar.FuncType.Device,
                        Func: evtType.RefreshDevice,
                        Param: ''
                    };
                    _this.emit(evtType.ProtocolMessage, Obj2);
                    resolve()
                })
        })
    }

    HotPlug(obj) {
        console.log('HotPlug1',obj)
        try {
            setTimeout(()=>{
                for(var i = 0; i < _this.SupportDevice.length; i++) {
                    if(obj.status == 1) {
                        env.log('initDevice', 'HotPlug', `${obj}`);  
                        var StateID = -1;
                        var deviceresult = 0;                    
                        for (var iState = 0; iState < _this.SupportDevice[i].pid.length; iState++) {
                            if(parseInt(_this.SupportDevice[i].vid[iState]) == obj.vid && parseInt(_this.SupportDevice[i].pid[iState]) == obj.pid) {
                                StateID = iState;
                                break;
                            }
                        }
                        if (StateID != -1) {  
                            for (var iState2 = 0; iState2 < _this.SupportDevice[i].pid.length; iState2++) {
                                var result = _this.hid.FindDevice(_this.SupportDevice[i].set.usagepage, _this.SupportDevice[i].set.usage,_this.SupportDevice[i].vid[iState2], _this.SupportDevice[i].pid[iState2])
                                if(result != 0)
                                {
                                    StateID = iState2;
                                    deviceresult = result;
                                    break;
                                }
                            }
                        }
                        //--------------FindDevice Done----------------
                        if (deviceresult != 0) {
                            //--------------DeviceCallback----------------
                            for (let index = 0; index < _this.SupportDevice[i].get.length; index++) {
                                var getEndpoint = _this.SupportDevice[i].get[index];
                                var csCallback = 'DeviceDataCallback- '+ index +' : ';
                            
                                var rtn = _this.hid.DeviceDataCallback(getEndpoint.usagepage, getEndpoint.usage,_this.SupportDevice[i].vid[StateID], _this.SupportDevice[i].pid[StateID],_this.HIDEP2DataFromDevice);
                                env.log('initDevice', csCallback, rtn);  
                            }
                            //--------------DeviceCallback----------------
                        
                            var sn = _this.SupportDevice[i].vid[0]+_this.SupportDevice[i].pid[0]
                            var dev = {};
                            dev.BaseInfo = _this.SupportDevice[i];
                            dev.BaseInfo.SN = sn;
                            dev.BaseInfo.DeviceId = deviceresult;
                            dev.BaseInfo.StateID = StateID;
                            dev.BaseInfo.battery = StateID ? true : false;

                            if(_this.AllDevices.has(sn)){
                                _this[dev.BaseInfo.routerID].ReadFWVersion(dev,0,function () {
                                    _this.SavePluginDevice();
                                });
                                return;
                            }
                            _this.AllDevices.set(sn, dev);
                            _this.GetDeviceInst(dev).then(()=>{
                                console.log('final');                    
                                _this.SavePluginDevice();
                            });      
                        }
                    } else {
                        var StateID = -1;
                        var deviceresult = 0;
                        //--------------Get UnPlug State----------------
                        for (var iState = 0; iState < _this.SupportDevice[i].pid.length; iState++) {
                            if(parseInt(_this.SupportDevice[i].vid[iState]) == obj.vid && parseInt(_this.SupportDevice[i].pid[iState]) == obj.pid) {
                                StateID = iState;
                                break;
                            }
                        }
                        //--------------Get UnPlug State----------------
                        if (StateID != -1) {
                            for (var iState = 0; iState < _this.SupportDevice[i].pid.length; iState++) {
                                var result = _this.hid.FindDevice(_this.SupportDevice[i].set.usagepage, _this.SupportDevice[i].set.usage,_this.SupportDevice[i].vid[iState], _this.SupportDevice[i].pid[iState])
                                if(result != 0)
                                {
                                    deviceresult = result;
                                    StateID = iState;
                                    break;
                                }
                            }
                            //-----------------------
                            if(deviceresult!=0) {
                                //--------------DeviceCallback----------------
                                for (let index = 0; index < _this.SupportDevice[i].get.length; index++) {
                                    var getEndpoint = _this.SupportDevice[i].get[index];
                                    var csCallback = 'DeviceDataCallback- '+ index +' : ';
                                
                                    var rtn = _this.hid.DeviceDataCallback(getEndpoint.usagepage, getEndpoint.usage,_this.SupportDevice[i].vid[StateID], _this.SupportDevice[i].pid[StateID],_this.HIDEP2DataFromDevice);
                                    env.log('initDevice', csCallback, rtn);  
                                }
                                //--------------DeviceCallback----------------

                                var sn = _this.SupportDevice[i].vid[0]+_this.SupportDevice[i].pid[0];
                                var dev = {};
                                dev.BaseInfo = _this.SupportDevice[i];
                                dev.BaseInfo.SN = sn;
                                dev.BaseInfo.DeviceId = deviceresult;
                                dev.BaseInfo.StateID = StateID;
                                dev.BaseInfo.battery = true;

                                if(_this.AllDevices.has(sn))
                                {
                                    _this[dev.BaseInfo.routerID].ReadFWVersion(dev,0,function () {      
                                        _this.SavePluginDevice();
                                        _this[dev.BaseInfo.routerID].GetBatteryStats(dev,0,function (ObjBattery) {

                                            var Obj2 = {
                                                Func: evtType.GetBatteryStats,
                                                SN: dev.BaseInfo.SN,
                                                Param: ObjBattery
                                            };
                                            _this.emit(evtType.ProtocolMessage, Obj2);
                                        });
                                    });
                                    return;
                                }
                                _this.AllDevices.set(sn, dev);
                                _this.GetDeviceInst(dev).then(()=>{
                                    console.log('final');                    
                                    _this.SavePluginDevice();
                                });   
                            }else{
                                var sn = _this.SupportDevice[i].vid[0]+_this.SupportDevice[i].pid[0];
                                _this.AllDevices.forEach(function (dev, devicesn){
                                    if(sn == devicesn) {
                                        _this.AllDevices.delete(sn);
                                        _this.SavePluginDevice();
                                         dev.SeriesInstance["DeleteBatteryTimeout"](dev, 0, function (ObjBattery) {});
                                    }
                                })
                            }

                        }
                        // else{
                        //     var sn = _this.SupportDevice[i].vid[0]+_this.SupportDevice[i].pid[0];
                        //     _this.AllDevices.delete(sn);
                        //     _this.SavePluginDevice();
                        // }

                            // if(result != 0) {
                            //     var sn = _this.SupportDevice[i].vid+_this.SupportDevice[i].pid
                            //     var dev = {};
                            //     dev.BaseInfo = _this.SupportDevice[i];
                            //     dev.BaseInfo.DeviceId = result;
                            //     _this.AllDevices.set(sn, dev);
                            //     _this.GetDeviceInst(dev).then(()=>{
                            //         console.log('final')
                            //     });
                            // } else {
                            //     var Obj2 = 
                            //     {
                            //         Type: funcVar.FuncType.Device,
                            //         Func: evtType.RefreshDevice,
                            //         Param: {
                            //             vid:_this.SupportDevice[i].vid,
                            //             pid:_this.SupportDevice[i].pid,
                            //             status: obj.status
                            //         }
                            //     };
                            //     _this.emit(evtType.ProtocolMessage, Obj2);
                            // }
                    }
                }
            },1500)
        } catch(e) {
            env.log('ERROR','HotPlug:',e)
        }
    }
}

module.exports = DeviceService;