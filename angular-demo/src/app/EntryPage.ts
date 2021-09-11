declare var require: any
import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
@Component({
  selector: 'app-entry-page',
  templateUrl: './EntryPage.html',
  styleUrls: ['./EntryPage.css']
})
export class EntryPageComponent implements OnInit {
  constructor(private router: Router) {
    //this.router.config
    console.log('%c this.router', 'color:rgb(255,75,255,1)', this.router,i18n_File);
  }
  ngOnInit() {
    //this.router.navigate(['keyboardNumPad'], {queryParams: {Device: JSON.stringify(obj)}});
    //this.router.navigate(['ColorTest'], {queryParams: {Device: {}}});
    //this.router.navigate(['ColorTest'], {});
    //this.router.navigate(['ScrollDemo1'], {});
    //this.router.navigate(['KeyBoard_RGB'], {});
    //this.router.navigate(['DemoListUI'], {});
    // window.onresize = resize;

    // function resize()
    // {
    //  alert("检测到resize事件!");
    // }

  }
  ngAfterViewInit() {
    // setTimeout(() => {
    // }, 3000);
    // document.onkeyup = null;
    // document.addEventListener('keyup', (event) => {
    //   console.log("KeyShortcut_event.keyCode", event.keyCode);
    //   if (event.keyCode == 8 && this.router.url != "/DemoListUI") {//Backspace
    //     this.router.navigate(['DemoListUI'], {});
    //   }
    // });


    //   document.addEventListener('keydown', (event) => {

    //  }

  }
}

