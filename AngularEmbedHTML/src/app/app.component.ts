import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DomSanitizer,SafeResourceUrl } from "@angular/platform-browser";

import { CenterWindows } from './CenterWindows';
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

  constructor(
    private sanitizer: DomSanitizer

  ) {

  }

	ngOnInit() {
		let src="./assets/TestHTML1/index.html"    //此处链接到你写的大转盘代码处
		this.iframe=this.sanitizer.bypassSecurityTrustResourceUrl(src);
    //tttTTTTTTTTTTTT();
    console.log('%c ngOnInit', 'background: black; color: blue',System);
	}
  
  ngAfterViewInit(): void {
    console.log('%c ngAfterViewInit', 'background: black; color: blue');
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
    // console.log('%c T', 'background: black; color: blue',iWindow,aaa);


 
  }
  someMethod() {
    console.log('%c someMethod', 'background: black; color: blue');

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


