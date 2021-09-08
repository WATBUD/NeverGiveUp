import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ColorTestComponent } from './ColorTest';
import { AppComponent } from './KeyBoard_RGB';

import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'KeyBoard_RGB', component: AppComponent },
  { path: 'ColorTest', component: ColorTestComponent },
  
];

@NgModule({
  imports: [ 
    CommonModule,
    RouterModule.forRoot(routes) 
  ],
  exports: [ RouterModule ],
  declarations: []
})

export class AppRoutingModule { 




}
