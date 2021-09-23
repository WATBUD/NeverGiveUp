import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-native',
  templateUrl: './native.component.html',
  styleUrls: ['./native.component.css']
})
export class NativeComponent implements OnInit {
  name = 'Set iframe source';
  //url: string = "https://angular.io/api/router/RouterLink";
  //url: string = "./Excel/Progressbar_Full_ Rectangle";
  //url = './Excel/Progressbar_Full_ Rectangle.html';
  url = './Excel/Convert Excel File To JSON.html';
  urlSafe: SafeResourceUrl;
  zzzzz="Convert Excel File To JSON";
  constructor(public sanitizer: DomSanitizer) { }
  
  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

  }
}
