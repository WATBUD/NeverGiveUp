
export class CenterWindows {
    foucsChild=0;
    pageIndex=0;
    childData=[];
    
    FwServerData=[];
    static instance;
    constructor(){

        for (let index = 0; index < 15; index++) {
            var T_data=this.default_LightData();
            let src="./assets/TestHTML1/"    
            T_data.path=src;
            // url(./image/DarkAlert.jpg);
            T_data.text="Sample"+index;
            console.log('T_data.path+ T_data.backgroudImage',T_data.path+ T_data.backgroudImage);

            this.childData.push(T_data);    
        }
    }
    static getInstance() {
        console.log('LayoutManager_getInstance',this.instance);
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new CenterWindows();
            return this.instance;
        }
    }
    getTarget(){

    }
 

    childDataExecute(i){
        console.log('%c childDataExecute', 'background: black; color: blue',i);

        this.foucsChild=i;
    }

    reset(){

    }


    default_LightData(defaultcolor = [255,0,0,1]) {
        var T = {
            title:"Youtube",
            foucs:false,
            text:"Sample1",
            backgroudImage:"./assets/TestHTML1/image/FunctionIcon.png",
            path:"./assets/TestHTML1/",
            nowVersion:"1",
        }
        return T;
    }

    




    /*
    * compare version
    * 比较版本号
    * 仅适用数字型的版本号
    * 0: 相等
    * 1: 大于
    * -1: 小于
    */
    versionCompare(version, targetVersion, exponent) {
        var getVersionNumber, length;
        exponent = exponent || 2;
        if (!version || !targetVersion) {
            console.log('Need two versions to compare!',version,targetVersion);
            throw new Error('Need two versions to compare!');
        }
        if (version === targetVersion) {
            return 0;
        }
        length = Math.max(version.split('.').length, targetVersion.split('.').length);
        let self = this;
        getVersionNumber = (function (length, exponent) {
            return function (version) {
                return self.versionToNumber(version, length, exponent);
            };
        })(length, exponent);
        version = getVersionNumber(version);
        targetVersion = getVersionNumber(targetVersion);
        return version > targetVersion ? 1 : (version < targetVersion ? -1 : 0);
    }
    versionToNumber(version, length, exponent) {
        let arr;
        if (arguments.length < 3) {
            return 0;
        }
        arr = version.split('.');
        version = 0;
        arr.forEach(function (value, index, array) {
            version += value * Math.pow(10, length * exponent - 1);
            length--;
        });
        return version;
    }
}
