const env = require('../../../others/env');
var keyboard = require('./keyboard');
var SupportData = require('../../../others/SupportData');

'use strict';
var _this;

class GmmkSeries extends keyboard {
    constructor(hid) {
        env.log('GmmkSeries','GmmkSeries class','begin');
        super();
        _this = this;
        _this.m_bSetFWEffect = false;//SET DB
        _this.m_bSetHWDevice = false;
        _this.m_bOpen = 0;//Marixtable 128
        _this.hid = hid;

        
        // _this.Matrix_KEYCode_GMMK =  [  
        //     "lshift", "mute" , "rctrl", "right", "lctrl", "right", "lctrl", "f5"   ,
        //     "q"     , "tab"  , "a"    , "esc"  , "z"    , "pup"  ,"period", "n1"   ,
        //     "w"     ,"caps"  , "s"    ,"k45"   , "x"    , "pdown", "f1"   , "n2"   ,
        //     "e"     , "f3"   , "d"    , "f4"   , "c"    , "up"   , "f2"   , "n3"   , 
        //     "r"     , "t"    , "f"    , "g"    , "v"    , "b"    , "n5"   ,   "n4" ,
        //     "u"     , "y"    , "j"    ,  "h"   , "m"    , "n"    , "n6"   , "n7"   ,
        //     "i"     , "rqu"  , "k"    , "f6"   ,"comma" , "home" , "plus" , "n8"   ,
        //     "o"     , "f7"   , "l"    , "pdown","dot"   , "end"  , "f8"   , "n9"   ,
        //     "p"     , "lqu"  ,"sem"   , "quo"  ,"k42"   ,"qmark" ,"minus" , "n0"   ,
        //     "win"   ,"rshift", "fn"   ,"lalt"  ,"space" ,"ralt"  ,""      ,"insert",
        //     ""      ,"bksp"  , "k29"  , "f11"  ,"enter" , "f12"  , "f9"   , "f10"  ,
        // ];
        _this.Matrix_KEYCode_GMMK =  [ 
            "LShift","Mute","","Left","Ctrl","Right","Ctrl","F5",
            "Q","CapsLock","A","Esc","Z","PageUp","~","1",
            "W","C","S","k45","X","PageDown","F1","2",
            "E","F3","D","F4","C","Up","F2","Num 3",
            "R","T","F","G","V","B","5","4",
            "U","Y","J","H","M","N","6","7",
            "I","]","K","F6",",","Home","=","8",
            "O","F7","L","Down","dot","End","F8","9",
            "P","[",";","'","k42","/","-","0",
            "Left Win","RShift","fn","LAlt","Space","RAlt","","Insert",
            "","Backspace","k29","F11","Enter","F12","F9","F10"
        ];

        _this.Matrix_LEDCode_GMMK =  [  
            "Esc"     ,   "F1"   ,   "F2"   ,   "F3"   ,   "F4"  ,   "F5"  ,  "F6"  ,   "F7"  ,  "F8"   ,  "F9"   ,  "F10" ,   "F11" ,  "F12"   , "Insert"   , "Mute"   ,   ""     ,    ""     ,    ""     ,    ""     ,    ""     , 
            "~"       ,   "1"    ,   "2"    ,   "3"    ,   "4"   ,   "5"   ,  "6"   ,   "7"   ,  "8"    ,  "9"    ,  "0"   ,   "-"   ,  "="     , "Backspace", "Home"   ,   ""     ,    ""     ,    ""     ,    ""     ,    ""     , 
            "Tab"     ,   "Q"    ,   "W"    ,   "E"    ,   "R"   ,   "T"   ,  "Y"   ,   "U"   ,  "I"    ,  "O"    ,  "P"   ,   "["   ,  "]"     , "k29"      , "PageUp" ,   ""     ,    ""     ,    ""     ,    ""     ,    ""     , 
            "CapsLock",   "A"    ,   "S"    ,   "D"    ,   "F"   ,   "G"   ,  "H"   ,   "J"   ,  "K"    ,  "L"    ,  ";"   ,   "'"   , "k42"    , "Enter"    ,"PageDown",   ""     ,    ""     ,    ""     ,    ""     ,    ""     , 
            "Shift"   ,   "Z"    ,   "X"    ,   "C"    ,   "V"   ,   "B"   ,  "N"   ,   "M"   ,  ",   " ,  "dot"  ,  "/"   ,  "Shift", "k45"    , "Up"       ,  "End"   ,   ""     ,    ""     ,    ""     ,    ""     ,    ""     , 
            "Ctrl"    ,"Left Win",   "Alt"  ,   ""     ,   ""    , "Space" ,   ""   ,   ""    ,  "Alt"  ,  "fn"   , "Ctrl" ,   ""    , "Left"   , "Down"     , "Right"  ,   ""     ,    ""     ,    ""     ,    ""     ,    ""     , 
        ];
        _this.Matrix_KEYButtons_GMMK =  [//87 Keys  
            "Esc"     ,   "F1"   ,   "F2"   ,   "F3"   ,   "F4" ,   "F5"  ,  "F6"  ,   "F7"  ,  "F8"   ,  "F9"   ,  "F10" ,   "F11" ,  "F12"  ,"Insert"   , "Mute"   ,
            "~"       ,   "1"    ,   "2"    ,   "3"    ,   "4"  ,   "5"   ,  "6"   ,   "7"   ,  "8"    ,  "9"    ,  "0"   ,   "-"   ,  "="    ,"Backspace", "Home"   ,
            "Tab"     ,   "Q"    ,   "W"    ,   "E"    ,   "R"  ,   "T"   ,  "Y"   ,   "U"   ,  "I"    ,  "O"    ,  "P"   ,   "["   ,  "]"    ,"k29"      , "PageUp" ,
            "CapsLock",   "A"    ,   "S"    ,   "D"    ,   "F"  ,   "G"   ,  "H"   ,   "J"   ,  "K"    ,  "L"    ,  ";"   ,   "'"   ,  "Enter","PageDown" ,
            "Shift"   ,   "Z"    ,   "X"    ,   "C"    ,   "V"  ,   "B"   ,  "N"   ,   "M"   ,  ",   " ,  "dot"  ,  "/"   ,  "Shift",  "Up"   ,"End"      ,
            "Ctrl"    ,"Left Win",   "Alt"  , "Space"  ,   "Alt",   "fn"  , "Ctrl" ,   "Left", "Down"  ,  "Right" ]
        
        _this.Buttoninfo_Default  =  
        [   
            0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,
            0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x03 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01,
            0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01,
            0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01,
            0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01,
            0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x02 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01,
            0x01 ,0x01 ,0x01 ,0x02 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x02 ,0x02 ,0x02 ,0x01,
            0x01 ,0x01 ,0x01 ,0x01 ,0x02 ,0x01 ,0x02 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01 ,0x01,
            0x29 ,0x3a ,0x3b ,0x3c ,0x3d ,0x3e ,0x3f ,0x40 ,0x41 ,0x42 ,0x43 ,0x44 ,0x45 ,0x46 ,0x02 ,0x00,
            0x00 ,0x00 ,0x00 ,0x00 ,0x35 ,0x1e ,0x1f ,0x20 ,0x21 ,0x22 ,0x23 ,0x24 ,0x25 ,0x26 ,0x27 ,0x2d,
            0x2e ,0x2a ,0x4c ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x2b ,0x14 ,0x1a ,0x08 ,0x15 ,0x17 ,0x1c ,0x18,
            0x0c ,0x12 ,0x13 ,0x2f ,0x30 ,0x31 ,0x4b ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x39 ,0x04 ,0x16 ,0x07,
            0x09 ,0x0a ,0x0b ,0x0d ,0x0e ,0x0f ,0x33 ,0x34 ,0x32 ,0x28 ,0x4e ,0x00 ,0x00 ,0x00 ,0x00 ,0x00,
            0xe1 ,0x1d ,0x1b ,0x06 ,0x19 ,0x05 ,0x11 ,0x10 ,0x36 ,0x37 ,0x38 ,0xe5 ,0x64 ,0x52 ,0x4d ,0x00,
            0x00 ,0x00 ,0x00 ,0x00 ,0xe0 ,0xe3 ,0xe2 ,0x00 ,0x00 ,0x2c ,0x00 ,0x00 ,0xe6 ,0xa0 ,0xe4 ,0x00,
            0x50 ,0x51 ,0x4f ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00 ,0x00
        ];

        
    }

    static getInstance(hid) {
        if (this.instance) {
            env.log('GmmkSeries', 'getInstance', `Get exist GmmkSeries() INSTANCE`);
            return this.instance;
        }
        else {
            env.log('GmmkSeries', 'getInstance', `New GmmkSeries() INSTANCE`);
            this.instance = new GmmkSeries(hid);

            return this.instance;
        }

    }
    HIDEP2Data(dev,ObjData) {
    }
    
    LaunchProgram(dev,iKey) {
        var iProfile = dev.deviceData.profileindex -1;
        var KeyAssignData = dev.deviceData.profile[iProfile].assignedKeyboardKeys[0][iKey];//Button
        
        switch (KeyAssignData.recordBindCodeType) {
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
    SetKeyMatrix(dev, KeyBoardManager, callback) {
        env.log('GmmkSeries','SetKeyMatrix','Begin')
        dev.deviceData.profile =KeyBoardManager.KeyBoardArray;//Assign profileData From Obj
        dev.deviceData.profileindex=KeyBoardManager.profileindex;    
        var iProfile = KeyBoardManager.profileindex;//Assign profileindex From deviceData
        var appProfileLayers=KeyBoardManager.profileLayers;
        var Temp3=KeyBoardManager.layerMaxNumber;
        //dev.deviceData.profile = KeyBoardManager.profileData;//Assign profileData From Obj
       //var iProfile = dev.deviceData.profileindex;//Assign profileindex From deviceData
        //_this.nedbObj.getMacro().then(function (doc) {
            //var MacroData = doc;
            //var KeyAssignData = Obj.profileData[iProfile].keybinding;
            
            //var KeyAssignData = KeyBoardManager[dev.deviceData.profileindex].assignedKeyboardKeys[0];
            var iLayerIndex = KeyBoardManager.profileLayerIndex[iProfile];
            var KeyAssignData = appProfileLayers[iProfile][iLayerIndex].assignedKeyboardKeys[0];
            var ObjKeyAssign = {
                iProfile :iProfile,
                KeyAssignData:KeyAssignData
            }
            // var ObjMacroData = {
            //     MacroData:MacroData
            // }
            _this.SetKeyFunction(dev, ObjKeyAssign, function(param1) {
                //_this.SetMacroFunction(dev, ObjMacroData, function(param2) {
                    //_this.setProfileToDevice(dev, function(paramDB) {//Save DeviceData into Database
                        dev.m_bSetHWDevice = false;
                        callback("SetKeyMatrix Done");
                    //});
                //});
            });
        //});

    }
    
    SetKeyFunction(dev, ObjKeyAssign, callback) 
    { 
        //------------KeyAssignment-------------
        //KeyMapping
        var KeyAssignData = ObjKeyAssign.KeyAssignData;
        var DataBuffer = _this.KeyAssignToData(KeyAssignData);
        //------------KeyAssignment-------------
         var Obj1 = {
             iProfile: ObjKeyAssign.iProfile,
             DataBuffer: DataBuffer
         }
        _this.SendButtonMatrix2Device(dev, Obj1).then(function() {
           callback("SetKeyFunction Done");
        });
    }
    SendButtonMatrix2Device(dev, Obj) {
        var iProfile=Obj.iProfile;
        var Data = Buffer.alloc(265);
        var DataBuffer = Obj.DataBuffer;

        Data[0] = 0x07;
        Data[1] = 0x03;
        Data[2] = 0x01; //DataProfile
        Data[3] = 0x01; //Layer

        var DataBuffer = Obj.DataBuffer;

        for (var i = 0; i < DataBuffer.length; i++)//30
        {
            Data[8 + i] = DataBuffer[i];
        }
        //-----------------------------------

        return new Promise(function (resolve) {
           _this.SetFeatureReport(dev, Data,150).then(function () {
                resolve("SendButtonMatrix2Device Done");
           });
        });

        //-----------------------------------
    };
    KeyAssignToData(KeyAssignData) {
        //var DataBuffer = Buffer.alloc(256);//104KeyData
        var DataBuffer = JSON.parse(JSON.stringify(_this.Buttoninfo_Default));
        //return DataBuffer;
        var iMacroCount = 0;
        for(var i = 0; i < KeyAssignData.length; i++)
        {   
            var iIndex = _this.Matrix_LEDCode_GMMK.indexOf(_this.Matrix_KEYButtons_GMMK[i]);
            var Temp_BtnList = KeyAssignData[i]; 

            switch (Temp_BtnList.recordBindCodeType) {
                case "SingleKey"://Keyboard Function/Combination Key
                case "MOUSE"://MOUSE Function
                    var KeyCode = 0;
                    for(var iMap=0; iMap<SupportData.AllFunctionMapping.length; iMap++){
                        if(Temp_BtnList.recordBindCodeName == SupportData.AllFunctionMapping[iMap].keyCode){
                            KeyCode = SupportData.AllFunctionMapping[iMap].hid;
                            break;
                        }
                    }
                    DataBuffer[iIndex] = 0x01;//key matrix type-0x01: Normal key
                    DataBuffer[120+iIndex] = KeyCode;//key matrix data

                    var arrcomplex=[Temp_BtnList.Ctrl,Temp_BtnList.Shift,Temp_BtnList.Alt,Temp_BtnList.Windows];
                    var bycomplex = 0;
                    for (var icomplex = 0; icomplex < arrcomplex.length; icomplex++) {
                        if (arrcomplex[icomplex] == true)
                            bycomplex |= Math.pow(2,icomplex);//Binary To Byte
                    }
                    if (bycomplex>0) {
                        DataBuffer[iIndex] = 0xe0;//Binary To Byte
                        DataBuffer[iIndex] += bycomplex;//Binary To Byte
                    }
                    
                break;
                case "Multimedia"://Multimedia Function
                    var KeyCode = 0;
                    for(var iMap=0; iMap<SupportData.AllFunctionMapping.length; iMap++){
                        if(Temp_BtnList.recordBindCodeName == SupportData.AllFunctionMapping[iMap].keyCode){
                            //KeyCode = SupportData.AllFunctionMapping[iMap].hidMap[1];
                            KeyCode = SupportData.AllFunctionMapping[iMap].hid;
                            break;
                        }
                    }
                    DataBuffer[iIndex] = 0x03;//key matrix type-0x03: Consumer key
                    DataBuffer[120+iIndex] = KeyCode;//key matrix data
                break;
                case "LaunchProgram"://LaunchProgram Function
                case "LaunchWebsite"://LaunchWebsite Function
                    DataBuffer[iIndex] = 0x04;//key matrix type-0x04: Launch Program
                    DataBuffer[120+iIndex] = 0x00;//key matrix data
                    break;
                case "Shortcuts"://Shortcuts Function
                    var KeyCode = 0;
                    for(var iMap=0; iMap<SupportData.AllFunctionMapping.length; iMap++){
                        if(Temp_BtnList.recordBindCodeName == SupportData.AllFunctionMapping[iMap].keyCode){
                            //KeyCode = SupportData.AllFunctionMapping[iMap].hidMap[1];
                            KeyCode = SupportData.AllFunctionMapping[iMap].hid;
                            break;
                        }
                    }
                    DataBuffer[iIndex] = 0x03;//key matrix type-0x03: Consumer key
                    DataBuffer[120+iIndex] = KeyCode;//key matrix data
                break;
                case "MacroFunction"://MacroFunction Function
                    DataBuffer[120+iIndex] = 0x05;//key matrix type-0x05: Macro
                break;
                default:               
                break;
            }
        }
        return DataBuffer;
    }

    
    SetFeatureReport(dev, buf,iSleep) {
        //env.log("InfarexK10Series","SetFeatureReport",dev.BaseInfo.DeviceId)
        return new Promise(function (resolve, reject) {
            if (env.DebugMode){
                resolve(true);
                return;
            }
            try{
                   var rtnData = _this.hid.SetFeatureReport(dev.BaseInfo.DeviceId,0x07, 256, buf);
                   //var rtnData = 264;
                   setTimeout(function(){
                    if(rtnData < 64)
                        env.log("InfarexK10Series SetFeatureReport","SetFeatureReport(error) return data length : ",JSON.stringify(rtnData));
                    resolve(rtnData);
                    },iSleep);
            }catch(err){
                //m_bOpen = 0;
                env.log("InfarexK10Series Error","SetFeatureReport",`ex:${err.message}`);
                resolve(err);
            }
        });
    }
}

module.exports = GmmkSeries;