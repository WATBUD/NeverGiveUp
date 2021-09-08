import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-entry-page',
  templateUrl: './EntryPage.html',
  styleUrls: ['./EntryPage.css']
})
export class EntryPageComponent implements OnInit {
  constructor(private router: Router) { 

  }
  ngOnInit() {
    //this.router.navigate(['keyboardNumPad'], {queryParams: {Device: JSON.stringify(obj)}});
    //this.router.navigate(['ColorTest'], {queryParams: {Device: {}}});
    this.router.navigate(['ColorTest'], {});
  }
  ngAfterViewInit(){
    // setTimeout(() => {
    //   this.router.navigate(['ColorTest'], {});
    // }, 3000);
 }



}
