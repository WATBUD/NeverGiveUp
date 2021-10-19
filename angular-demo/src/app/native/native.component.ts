import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Router,ActivatedRoute } from '@angular/router';
//import { ActivatedRoute } from '@angular/route';
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
    URL:'./DemoUI/Input/KeyDownArrayGenerator.html',
    Name:'KeyDownArrayGenerator',
  },
  {
    URL:'./DemoUI/Input/GeneratorArrayText.html',
    Name:'GeneratorArrayText',
  }];
  name = 'Set iframe source';
  sub;
  //url: string = "https://angular.io/api/router/RouterLink";
  //url: string = "./Excel/Progressbar_Full_ Rectangle";
  urlSafe: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer,private route : ActivatedRoute) {
    this.sub = this.route.queryParams.subscribe(params => {
      
      //this.page = +params['page'] || 0;
      try {
        var target=this.customURLList.find(params['page']);
        if(target!=undefined){
          this.setURLContext(target.URL);
        }
      } catch (error) {
        
      }

    });

   }
  //this.router.navigate
  setURLContext(URLstring="") {

    console.log('%c setURLContext','background: blue; color: red',URLstring)
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(URLstring);
  }

  ngOnInit() {
    console.log('%c sanitizer','background: blue; color: red',this.sanitizer)
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.customURLList[1].URL);

  }
}
