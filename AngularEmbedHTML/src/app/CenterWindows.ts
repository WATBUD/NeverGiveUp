
export class CenterWindows {
    focusChild=0;
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

        this.focusChild=i;
    }

    reset(){

    }


    default_LightData(defaultcolor = [255,0,0,1]) {
        var T = {
            title:"Youtube",
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
