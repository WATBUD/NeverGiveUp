
var env = require('../others/env');
var DeviceObj = require('./DeviceDB'); 
var AppSettingObj = require('./AppSettingDB');
var MacroObj = require('./MacroDB');;
var PluginDeviceObj = require('./PluginDB');

var Node_NeDB = require('./Node_NeDB'); 
var _this; 
class AppDB {
    constructor() {
        _this = this;
        _this.DeviceDB = new DeviceObj.DeviceDB();
        _this.AppSettingDB = new AppSettingObj.AppSettingDB();
        _this.MacroDB = new MacroObj.MacroDB();
        _this.PluginDB = new PluginDeviceObj.PluginDB();
        _this.Node_NeDB=Node_NeDB.DB.getInstance();
        // _this.setSupportDevice().then(()=>{  
        // });
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            console.log("new AppDB Class");
            this.instance = new AppDB();
            return this.instance;
        }
    }
    
    //----------------------------Plugin--------------------------------//

    getPluginDevice(){
        return new Promise(function (resolve, reject) {
            return _this.PluginDB.getPluginDevice().then(function(data){
                console.log('APPDB.getPluginDevice',data)
                resolve(data);
            });
        });
    }; 

    updatePluginDevice(obj){
        return new Promise(function (resolve, reject) {
            return _this.PluginDB.updatePluginDevice(obj).then(function(data){
                resolve(data);
            });
        });
    }; 

    updateAllPluginDevice(obj){
        return new Promise(function (resolve, reject) {
            return _this.PluginDB.updateAllPluginDevice(obj).then(function(data){
                resolve(data);
            });
        });
    };

    //----------------------------AppSetting----------------------------//

    getAppSetting(){
        return new Promise(function (resolve, reject) {
            return _this.AppSettingDB.getAppSetting().then(function(data){
                resolve(data);
            });
        });
    }; 

    saveAppSetting(obj){
        return new Promise(function (resolve, reject) {
            return _this.AppSettingDB.saveAppSetting(obj).then(function(data){
                resolve(data);
            });
        });
    }; 


    //----------------------------Device----------------------------//

    // getDevice(callback){
    //     _this.DeviceDB.getDevice(function(data){
    //         callback(data)
    //     });
    // }; 

    getSupportDevice() {
        return new Promise(function (resolve, reject) {
            return _this.DeviceDB.getSupportDevice().then(function(data) {
                resolve(data);
            });
        });
        
    }
    
    setSupportDevice_defaultProfile_test(_id,obj) {
        return new Promise(function (resolve, reject) {
            console.log('setSupportDevice_defaultProfile_test',_id,obj)
            var data={"_id":_id};
            var setdata={"defaultProfile" :obj} 
            return _this.Node_NeDB.updateCmd('SupportDevice',data,setdata,function(docs){  
                resolve(docs);     
            });  
        });
    }



    getDefultProfile(vid, pid) {
        return new Promise(function (resolve, reject) {
            return _this.DeviceDB.getDefultProfile(vid, pid).then(function(data) {
                resolve(data);
            });
        });
    }

    getDevice(sn) {
        return new Promise(function (resolve, reject) {
            return _this.DeviceDB.getDevice(sn).then(function(data) {
                resolve(data);
            });
        });
    }

    AddDevice(obj, callback){
        return new Promise(function (resolve, reject) {
            return _this.DeviceDB.AddDevice(obj).then(function(data) {
                resolve(data);
            });
        });
    }; 

    getAllDevice(){
        return new Promise(function (resolve, reject) {
            return _this.DeviceDB.getAllDevice().then(function(data) {
                resolve(data);
            });
        });
    }; 

    updateDevice(_id, obj){
        return new Promise(function (resolve, reject) {
            return _this.DeviceDB.updateDevice(_id, obj).then(function(data) {
                resolve(data);
            });
        });
    }; 

    //----------------------------Macro----------------------------//

    getMacro(){
        return new Promise(function (resolve, reject) {
            return _this.MacroDB.getMacro().then(function(data) {
                resolve(data);
            });
        });
    }; 

    getMacroById(id) {
        return new Promise(function (resolve, reject) {
            return _this.MacroDB.getMacroById(id).then(function(data) {
                resolve(data);
            });
        });
    }

    insertMacro(obj, callback){
        return new Promise((resolve, reject) => {
            return _this.MacroDB.insertMacro(obj, function(doc) {
                resolve(doc);
            });
        });
    }; 

    DeleteMacro(index) {
        return new Promise(function (resolve, reject) {
            return _this.MacroDB.DeleteMacro(index).then(function(data) {
                resolve(data);
            });
        });
    }; 

    updateMacro(id,obj){
        return new Promise(function (resolve, reject) {
            return _this.MacroDB.updateMacro(id,obj).then(function(data) {
                resolve(data);
            });
        });
    };

    
}

module.exports = AppDB;;