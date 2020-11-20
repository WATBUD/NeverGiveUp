const EventEmitter = require('events');
const env = require('../../others/env');
var openurl = require('electron').shell;
var evtType = require('../../others/EventVariable').EventTypes;
var funcVar = require('../../others/FunctionVariable');

'use strict'
var _this;
class FWUpdateSilent extends EventEmitter {
    constructor() {
        env.log('FWUpdateSilent','FWUpdateSilent class','begin');
        super();
        _this = this;
        _this.LaunchWinSocket = require(`../nodeDriver/x64/LaunchWinSocket.node`);
        
        _this.TimerWaitForLaunch = null;//Timer For Function
        _this.WaitForLaunchCount = 0;
        _this.TimerGetProcess = null;//Timer For Function
        _this.LaunchStep = 0;
        _this.LaunchStepCount = 2;
        _this.LaunchPath = [];
        
        _this.TimerFakerProcess = null;//Timer For Function

        _this.CurrentProcess = 0;
        _this.ProcessFailCount = 0;
        _this.SuccessCount = 0;
    }

    static getInstance() {
        if (this.instance) {
            env.log('FWUpdateSilent', 'getInstance', `Get exist Device() INSTANCE`);
            return this.instance;
        }
        else {
            env.log('FWUpdateSilent', 'getInstance', `New Device() INSTANCE`);
            this.instance = new FWUpdateSilent();

            return this.instance;
        }
    }
    LaunchFWUpdate(Obj){
        _this.LaunchPath = [];
        _this.LaunchPath.push(Obj.execPath.replace('.zip', '.exe'));
        _this.LaunchPath.push(Obj.execPath.replace('.zip', 'Wireless.exe'));
        _this.LaunchStepCount = _this.LaunchPath.length;

        _this.SuccessCount = 0;
        _this.LaunchStep = 0;
        var ObjFWUpdate ={execPath:_this.LaunchPath[_this.LaunchStep],Step:_this.LaunchStep};
        _this.ExecuteFWUpdate(ObjFWUpdate);
    }
    ExecuteFWUpdate(Obj){
        // if(){
        //     _this.LaunchWinSocket.Executefile(Obj.execPath);
        // }else{
        //     _this.LaunchWinSocket.Executefile(Obj.execPath+"Wireless");
        // }
        _this.LaunchWinSocket.Executefile(Obj.execPath);

        _this.ProcessFailCount = 0;
        _this.WaitForLaunchCount = 0;
        clearInterval(_this.TimerWaitForLaunch);
        _this.TimerWaitForLaunch = null;
        _this.TimerWaitForLaunch = setInterval(_this.OnTimerWaitForLaunch, 1000);
    }
    OnTimerWaitForLaunch() {

        var csRtn1 = _this.LaunchWinSocket.SendMessageToSetver("FirmwareUpdater","GETPROGRESS");
        if (_this.WaitForLaunchCount >= 15) {
            _this.WaitForLaunchCount = 0;
            clearInterval(_this.TimerWaitForLaunch);
            _this.TimerWaitForLaunch = null;
            console.log("LaunchFWUpdate-Failed:")
            
            var Obj2 = {
                Func: evtType.SendFWUPDATE,
                SN: null,
                Param: {Data:"FAIL"}
            };
            _this.emit(evtType.ProtocolMessage, Obj2);
        }
        else if (csRtn1.indexOf("GETPROGRESSOK:") != -1) {
            var Obj2 = {
                Func: evtType.SendFWUPDATE,
                SN: null,
                Param: {Data:"START"}
            };
            _this.emit(evtType.ProtocolMessage, Obj2);
            
            
            var ProcessSum = 100/_this.LaunchStepCount*_this.LaunchStep;
            var Process2 = ProcessSum.toString();
            Obj2.Param.Data =Process2;
            _this.emit(evtType.ProtocolMessage, Obj2);

            _this.WaitForLaunchCount = 0;
            clearInterval(_this.TimerWaitForLaunch);
            _this.TimerWaitForLaunch = null;
            console.log("LaunchFWUpdate-Start To Update:")
            
            _this.StartFWUpdate();
            //------------------------            
            
        }
        _this.WaitForLaunchCount ++;
    }
    StartFWUpdate(){
        //"START" "GETPROGRESS"
        var csRtn1 = _this.LaunchWinSocket.SendMessageToSetver("FirmwareUpdater","START");//"START"
        console.log("LaunchWinSocket-Message:",csRtn1)
        
        if (csRtn1.indexOf("Device Not Found") != -1) {
            
            _this.TerminateFWUpdate(0,function(csRtn){
                _this.CurrentProcess = 0;
                clearInterval(_this.TimerFakeProcess);
                _this.TimerFakeProcess = null;
                _this.TimerFakeProcess = setInterval(_this.OnTimerFakeProcess, 20);
            });
        } else {
            clearInterval(_this.TimerGetProcess);
            _this.TimerGetProcess = null;
            _this.TimerGetProcess = setInterval(_this.OnTimerGetProcess, 100);
        }
    }
    OnTimerFakeProcess() {
        _this.CurrentProcess ++;
        var ProcessSum = 100/_this.LaunchStepCount*_this.LaunchStep + _this.CurrentProcess;

        if (ProcessSum >= 100/_this.LaunchStepCount * (_this.LaunchStep+1)){
            clearInterval(_this.TimerFakeProcess);
            _this.TimerFakeProcess = null;
            _this.FinishedFWUpdate();
        }else{
            var Process2 = ProcessSum.toString();    
            var Obj2 = {
                Func: evtType.SendFWUPDATE,
                SN: null,
                Param: {Data:Process2}
            };
            _this.emit(evtType.ProtocolMessage, Obj2);
        }
        
    }
    OnTimerGetProcess() {
        var csRtn1 = _this.LaunchWinSocket.SendMessageToSetver("FirmwareUpdater","GETPROGRESS");
        
        if (csRtn1.indexOf("PASS") != -1) {
            
            _this.SuccessCount++;
            clearInterval(_this.TimerGetProcess);
            _this.TimerGetProcess = null;
            
            _this.TerminateFWUpdate(0,function(csRtn){
                console.log("LaunchWinSocket TerminatePrecess:",csRtn)
                _this.FinishedFWUpdate();
            });
        }
        else
        {
            var Processlength = csRtn1.split("GETPROGRESSOK:").length;
            var Process = parseInt(csRtn1.split("GETPROGRESSOK:")[Processlength-1]/_this.LaunchStepCount);
            var CurProcess = parseInt(csRtn1.split("GETPROGRESSOK:")[Processlength-1]);

            if(_this.CurrentProcess == CurProcess && _this.ProcessFailCount >=80) {//FAIL
                clearInterval(_this.TimerGetProcess);
                _this.TimerGetProcess = null;
                _this.TerminateFWUpdate(0,function(csRtn){
                    console.log("LaunchWinSocket TerminatePrecess:",csRtn)
                    _this.ProcessFailCount = 0;
                    var Obj2 = {
                        Func: evtType.SendFWUPDATE,
                        SN: null,
                        Param: {Data:"FAIL"}
                    };
                    _this.emit(evtType.ProtocolMessage, Obj2);
                });
            } 
            else if(_this.CurrentProcess == CurProcess) {
                _this.ProcessFailCount ++;
            }else{
                _this.ProcessFailCount = 0;
                _this.CurrentProcess = CurProcess;
                //ProcessSum
                var ProcessSum = 100/_this.LaunchStepCount*_this.LaunchStep + Process;
    
                var Process2 = ProcessSum.toString();
                console.log("LaunchWinSocket-Message:GETPROGRESSOK:",Process2)
    
                var Obj2 = {
                    Func: evtType.SendFWUPDATE,
                    SN: null,
                    Param: {Data:Process2}
                };
                _this.emit(evtType.ProtocolMessage, Obj2);
            }
        }
    }
    TerminateFWUpdate(Obj,callback){

        var csRtn = _this.LaunchWinSocket.TerminatePrecess("FirmwareUpdater");
        //console.log("LaunchWinSocket TerminatePrecess:",csRtn)
        callback(csRtn);
    }
    
    FinishedFWUpdate(){
        _this.LaunchStep++;
        if (_this.LaunchStep == _this.LaunchStepCount) {//Finished
            console.log("FinishedFWUpdate")
            var Obj2 = {
                Func: evtType.SendFWUPDATE,
                SN: null,
                Param: {Data:"PASS"}
            };
            if (_this.SuccessCount<=0) {
                Obj2.Param.Data = "FAIL";
            }
            _this.emit(evtType.ProtocolMessage, Obj2);
        }
        else
        {
            var ProcessSum = 100/_this.LaunchStepCount*_this.LaunchStep + 0;
            var Process2 = ProcessSum.toString();
            var Obj2 = {
                Func: evtType.SendFWUPDATE,
                SN: null,
                Param: {Data:Process2}
            };
            _this.emit(evtType.ProtocolMessage, Obj2);

            console.log("ExecuteFWUpdate LaunchStep:",_this.LaunchStep)
            var ObjFWUpdate ={execPath:_this.LaunchPath[_this.LaunchStep],Step:_this.LaunchStep};
            _this.ExecuteFWUpdate(ObjFWUpdate);
        }
        
    }
}

module.exports = FWUpdateSilent;