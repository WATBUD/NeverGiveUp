import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
// var fs = require('fs');
// var files = fs.readdirSync('/Excel');

@Component({
  selector: 'app-native',
  templateUrl: './native.component.html',
  styleUrls: ['./native.component.css']
})
export class NativeComponent implements OnInit {
  customURLList=[
  {
    URL:'./DemoUI/Excel/Convert Excel File To JSON.html',
    Name:'Convert Excel File To JSON',
  },
  {
    URL:'./DemoUI/Excel/Convert Excel File To JSON.html',
    Name:'Convert Excel File To JSON',
  }];
  name = 'Set iframe source';
  //url: string = "https://angular.io/api/router/RouterLink";
  //url: string = "./Excel/Progressbar_Full_ Rectangle";
  urlSafe: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer) { }
  //this.router.navigate
  setURLContext(URLstring="") {
    console.log('%c setURLContext','background: blue; color: red',URLstring)
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(URLstring);
  }

  ngOnInit() {
    console.log('%c sanitizer','background: blue; color: red',this.sanitizer)
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.customURLList[0].URL);

  }
}
