import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './KeyBoard_RGB';
import { ColorTestComponent } from './ColorTest';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes  } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EntryPageComponent } from './EntryPage';
import { ScrollDemo1Component } from './ScrollDemoFolder/ScrollDemo1';
// import { AppRoutingModule } from './app-routing.module'; // CLI imports 
// // app routes
// import { routes } from './app.routes';
// let routerModule = RouterModule.forRoot(routes);
// routerModule = RouterModule.forRoot(routes, {useHash: true});

@NgModule({
  declarations: [
    AppComponent,
    ColorTestComponent,
    EntryPageComponent,
    ScrollDemo1Component,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [EntryPageComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
