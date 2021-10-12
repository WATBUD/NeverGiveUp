/**-----------------------------------------------------------------------------------------
 * Author:G-SPY Louis
 * KeyBoardStyle:M_SoundVolume Class
 * Processing M_SoundVolume
-----------------------------------------------------------------------------------------*/
export class M_SoundVolume {
    nowTargetIndex = 0;
    bindTarget = {
        bindProgramName: "Discord",
        audioSouceValue: 20,
    };
    showListflag = false;
    audioSouceList = [
        {
            bindProgramName: "Discord",
            audioSouceValue: 20,
        },
        {
            bindProgramName: "Spotify",
            audioSouceValue: 40,
        },
        {
            bindProgramName: "System Volume",
            audioSouceValue: 60,
        },
        {
            bindProgramName: "Chrome",
            audioSouceValue: 80,
        }
    ]
    lightData = this.default_lightData();

    constructor() {
        for (let index = 0; index < 8; index++) {
            this.audioSouceList.push(this.default_Data());
            //const element = this.audioSouceList[index];
        }

    }
    default_Data() {
        var T = {
            bindProgramName: "Chrome",
            audioSouceValue: 80,
        }
        return T;
    }

    /**
  * process default_LightData
  * * @param defaultcolor array:defaultcolor
  */
    default_lightData(defaultcolor = [255, 0, 0, 1]) {
        var T = {
            speed: 50,
            brightness: 50,
            clearStatus: false,
            colorHex: '#0000',
            colorPickerValue: defaultcolor,
            breathing: false,
            brightness_Enable: false,
            rate_Enable: false,
            color_Enable: false,
        }
        return T;
    }

    getSetValueData() {
        var obj = {
            lightData: this.lightData,
            bindTarget: this.bindTarget,
        }
        return obj;
    }

    /**
        * process getBindTarget
       */
    getBindTarget() {
        let targetData = this.audioSouceList.find((x) => x.bindProgramName == this.bindTarget.bindProgramName);
        if (targetData == undefined) {
            //console.log('%c getTargetBindProgramName=lostcode', 'color:rgb(255,75,255,1)');
            return this.default_Data();
        }
        return targetData;
    }
    setBindTarget(obj) {
        this.bindTarget.bindProgramName = obj.bindProgramName;
        this.bindTarget.audioSouceValue = obj.audioSouceValue;
    }
    /**
     * process lightData_Background Event
    */
    lightData_Background() {
        var value = this.bindTarget.audioSouceValue;
        return '-webkit-linear-gradient(left ,#FDBA3B 0%,#FDBA3B ' + value + '%,#313131 ' + value + '%, #313131 100%)';
    }

    /**
     * process getTargetBindProgramName
    */
    getTargetBindProgramName() {
        let targetData = this.audioSouceList.find((x) => x.bindProgramName == this.bindTarget.bindProgramName);

        if (targetData == undefined) {
            //console.log('%c getTargetBindProgramName=lostcode', 'color:rgb(255,75,255,1)');
            return "No Source";
        }
        return targetData.bindProgramName;
    }

}
