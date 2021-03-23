import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer,SafeResourceUrl } from "@angular/platform-browser";

import { CenterWindows } from './CenterWindows';
import { PluginModule } from './PluginModule';
import { PluginController } from '../assets/PluginController';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';


declare var System;

//declare function tttTTTTTTTTTTTT();
// interface Window {
//   tttTTTTTTTTTTTT() : void;
//   testing123(p1 : string, p2: number) : void;

// }
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularEmbedHTML';
  htmlData;
  htmlString;
  iframe;
  CenterWindows=new CenterWindows();
  PluginModule=new PluginModule();
  PluginController=new PluginController();
  src="./assets/TestHTML1/index.html";    
  PluginData=[];
  constructor(
    private sanitizer: DomSanitizer

  ) {

  }





  
	ngOnInit() {
		//let src="./assets/TestHTML1/index.html"    
		this.iframe=this.sanitizer.bypassSecurityTrustResourceUrl(this.src);
    //tttTTTTTTTTTTTT();
    console.log('%c ngOnInit', 'background: black; color: yellow',System);
	}
  
  ngAfterViewInit(): void {
    console.log('%c ngAfterViewInit', 'background: black; color: yellow');
    // var T23=document.getElementById("resultFrame");
    // var aaa=document.getElementById("resultFrame").contentWindow;
    // var _this=this;
    // T23.onload = function(){
    //   //T23.contentWindow.ABCDEFGHU();
    // };
    // console.log(aaa.tttTTTTTTTTTTTT,aaa.screenX,aaa.ABCDEFGHU);
    // var TTT=window.frames["resultFrame"];
    // var iWindow = (<HTMLIFrameElement>T23).contentWindow;
    // //T23.contentWindow.ABCDEFGHU();
    // //var TTT=window.frames["resultFrame"];
    // console.log('%c T', 'background: black; color: yellow',iWindow,aaa);


    let dragSources = document.querySelectorAll('[draggable="true"]');
    var _this=this;
    dragSources.forEach(dragSource => {
        dragSource.addEventListener("dragstart", (e)=>{
          // e.preventDefault();
          // e.stopPropagation();
          console.log('%c dragstart', 'background: black; color: yellow',_this.src);
        });
        dragSource.addEventListener("dragend",(e)=>{
          // e.preventDefault();
          // e.stopPropagation();
          console.log('%c dragend', 'background: black; color: yellow',_this.src);
        });
        dragSource.addEventListener("dragover", (e)=>{
          e.preventDefault();
          e.stopPropagation();
          console.log('%c dragover', 'background: black; color: yellow',_this.src);
        });
        dragSource.addEventListener("dragleave",(e)=>{
          e.preventDefault();
          e.stopPropagation();
          console.log('%c dragleave', 'background: black; color: yellow',_this.src);
        });
    });
    
    this.CenterWindows.setChildData(this.PluginController.getPluginDataSetting());

    //this.PluginController.getInstance();
  }
  someMethod() {
    console.log('%c someMethod', 'background: black; color: yellow');

    var T23=document.getElementById("resultFrame");
    T23.contentWindow.ABCDEFGHU();
    T23.onload = function(){
      T23.contentWindow.ABCDEFGHU();
    };

    // const headers = new HttpHeaders({
    //   'Content-Type': 'text/plain',
    // });
    // const request = this.http.get<string>('https://developer.mozilla.org/en-US/docs/Learn/HTML/Forms/Your_first_HTML_form', {
    //   headers: headers,
    //   responseType: 'text'
    // }).subscribe(res => this.htmlString = res);
    // this.htmlData = this.sanitizer.bypassSecurityTrustHtml(this.htmlString); // this line bypasses angular security

  }


}


