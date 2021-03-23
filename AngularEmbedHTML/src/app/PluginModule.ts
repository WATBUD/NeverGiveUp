
export class PluginModule {
    focusChild=0;
    pageIndex=0;
    pluginData=[];
    static instance;
    rootDirectory="./assets/"
    constructor(){


    }
    static getInstance() {
        console.log('LayoutManager_getInstance',this.instance);
        if (this.instance) {
            return this.instance;
        }
        else {
            this.instance = new PluginModule();
            return this.instance;
        }
    }
    getTarget(){

    }
    setPluginData(obj){
        this.pluginData=JSON.parse(JSON.stringify(obj));
        // for (let index = 0; index < 15; index++) {
        //     var T_data=this.default_LightData();
        //     let src="./assets/TestHTML1/"    
        //     T_data.path=src;
        //     // url(./image/DarkAlert.jpg);
        //     T_data.text="Plugin"+index;
        //     for (let index_2 = 0; index_2 < 10; index_2++) {
        //     T_data.functionList.push(index_2);
            
        //     }
        //     console.log('T_data.path+ T_data.backgroudImage',T_data.path+ T_data.backgroudImage);
        //     this.pluginData.push(T_data);
                
        // }

    }
    







    childDataExecute(i){
        console.log('%c childDataExecute', 'background: black; color: blue',i);
        //this.focusChild=i;
        this.pluginData[i].focus=!this.pluginData[i].focus;
    }

    reset(){

    }
      

    default_LightData(defaultcolor = [255,0,0,1]) {
        var T = {
            title:"Youtube",
            functionList:[],
            focus:false,
            text:"Sample1",
            backgroudImage:"./assets/TestHTML1/image/FunctionIcon.png",
            path:"./assets/TestHTML1/",
            nowVersion:"1",
            visable:false,
        }
        return T;
    }
}
