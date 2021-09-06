import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './KeyBoard_RGB';
import { ColorTest } from './ColorTest.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes  } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EntryPageComponent } from './EntryPage.component';
// import { AppRoutingModule } from './app-routing.module'; // CLI imports 
// // app routes
// import { routes } from './app.routes';
// let routerModule = RouterModule.forRoot(routes);
// routerModule = RouterModule.forRoot(routes, {useHash: true});

@NgModule({
  declarations: [
    AppComponent,
    ColorTest,
    EntryPageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EntryPageComponent]
})
export class AppModule { }
