import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './KeyBoard_RGB';
import { ColorTestComponent } from './ColorTest';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes  } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { EntryPageComponent } from './EntryPage';
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
