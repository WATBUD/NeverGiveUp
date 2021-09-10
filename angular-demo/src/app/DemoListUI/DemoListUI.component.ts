import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-DemoListUI',
  templateUrl: './DemoListUI.component.html',
  styleUrls: ['./DemoListUI.component.css']
})
export class DemoListUIComponent implements OnInit {
    constructor(private router: Router) { 
      //this.router.config
      console.log('%c this.router','color:rgb(255,75,255,1)',this.router);
  }
  ngOnInit() {
  }

}
