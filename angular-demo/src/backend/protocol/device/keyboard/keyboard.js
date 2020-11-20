const env = require('../../../others/env');
var Device = require('../Device')
var nedbObj = require('../../../dbapi/AppDB')

'use strict';
var _this;

class Keyboard extends Device {
    constructor() {
        env.log('Keyboard','Keyboardclass','begin');
        super();
        _this = this;
        _this.nedbObj = nedbObj.getInstance();
    }

    static getInstance() {
        if (this.instance) {
            env.log('Keyboard', 'getInstance', `Get exist Keyboard() INSTANCE`);
            return this.instance;
        }
        else {
            env.log('Keyboard', 'getInstance', `New Keyboard() INSTANCE`);
            this.instance = new Keyboard();

            return this.instance;
        }
    }

    initDevice(dev) {
        var _this = this;
        env.log('Keyboard','initDevice','begin')
        return new Promise(function(resolve, reject) {
            _this.nedbObj.getDevice(dev.BaseInfo.SN).then((exist) => {
                if(exist) {
                    dev.deviceData = exist;
                    resolve();
                } else {
                    _this.SaveProfileToDevice(dev, (data) => {                       
                        dev.deviceData = data;
                        resolve();
                    });
                }
            })
        })
    }

    SaveProfileToDevice(dev, callback) {
        env.log('Device', 'SaveProfileToDevice', `SaveProfileToDevice`);
        var _this = this;
        var BaseInfo = dev.BaseInfo;
        var profile = BaseInfo.defaultProfile
        var profileLayerIndex = BaseInfo.profileLayerIndex;
        var profileLayers = BaseInfo.profileLayers;
        var layerMaxNumber = BaseInfo.layerMaxNumber;
        var obj = {
            vid: BaseInfo.vid,
            pid: BaseInfo.pid,
            SN: BaseInfo.SN,
            devicename: BaseInfo.devicename,
            ModelType: BaseInfo.ModelType,
            image: BaseInfo.img,
            battery: BaseInfo.battery,
            layerMaxNumber: layerMaxNumber,
            profile: profile,
            profileLayerIndex: profileLayerIndex,
            profileLayers: profileLayers,
            profileindex: 1
        }
        _this.nedbObj.AddDevice(obj).then(()=>{                     
            callback(obj)
        })
    }
}

module.exports = Keyboard;