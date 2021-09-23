import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-TableDemo1',
  templateUrl: './TableDemo1.html',
  styleUrls: ['./TableDemo1.css']
})
export class TableDemo1Component implements OnInit {
  name = 'Set iframe source';
  //url: string = "https://angular.io/api/router/RouterLink";
  //url: string = "./Excel/Progressbar_Full_ Rectangle";
  //url = './Excel/Progressbar_Full_ Rectangle.html';
  url = './Excel/Convert Excel File To JSON.html';
  urlSafe: SafeResourceUrl;
  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.urlSafe= this.sanitizer.bypassSecurityTrustResourceUrl(this.url);

  }

}
