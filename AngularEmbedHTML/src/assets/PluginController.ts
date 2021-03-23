//import  * as a from "./TestHTML1/PluginSetting.json";

//import {default as a} from "./PluginSetting.json";

//const PluginSetting = require("./TestHTML1/PluginSetting.json");


export class PluginController{
    static instance=undefined;

    pluginList=['TestHTML1'];
    constructor(
    ) {
        PluginController.instance=this;

        console.log('%c PluginSetting_instance','background: blue; color: yellow');
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        } else {
            //console.log("new PluginController Class");
            this.instance = new PluginController();
            console.log('%c PluginController_getInstance_err','background: blue; color: yellow');
            return this.instance;
        }
    }

    onImport(event) {
        var file = event.srcElement.files[0];
        if (file) {
            var reader = new FileReader();
            reader.readAsText(file, "UTF-8");
            reader.onload = function (evt) {
                console.log(JSON.parse(evt.target.result));
            }
            reader.onerror = function (evt) {
                console.log('error reading file');
            }
        }
      }

    getPluginDataSetting(){

         var DataSetting=[];   
         for (let index = 0; index < this.pluginList.length; index++) {
             let element = this.pluginList[index];
            //var path="./TestHTML1/PluginSetting.json";
             var PluginSetting = require(`./${element}/PluginSetting.json`); 
             //var PluginSetting = require("./TestHTML1/PluginSetting.json"); 
             DataSetting.push(PluginSetting);
         }
         console.log('%c getPluginDataSetting','background: blue; color: red',DataSetting);
         return DataSetting;

    }
}
