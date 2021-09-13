import { BrowserModule } from '@angular/platform-browser';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './KeyBoard_RGBFolder/KeyBoard_RGB';
import { ColorTestComponent } from './ColorPickerUI/ColorTest';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes  } from '@angular/router';
import { HttpModule } from '@angular/http';
import { EntryPageComponent } from './EntryPage';
import { ScrollDemo1Component } from './ScrollDemoFolder/ScrollDemo1';
import { DemoListUIComponent } from './DemoListUI/DemoListUI.component';
import { TableDemo1Component } from './TableDemoFolder/TableDemo1';
import { NumpadKeyboardComponent } from './numpad-keyboard/NumpadKeyboard';
// let routerModule = RouterModule.forRoot(routes);
// routerModule = RouterModule.forRoot(routes, {useHash: true});
const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'KeyBoard_RGB', component: AppComponent },
  { path: 'ColorTest', component: ColorTestComponent },
  { path: 'ScrollDemo1', component: ScrollDemo1Component },
  { path: 'DemoListUI', component: DemoListUIComponent },
  { path: 'TableDemo1', component: TableDemo1Component },
  { path: 'numpad-keyboard', component: NumpadKeyboardComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    ColorTestComponent,
    EntryPageComponent,
    ScrollDemo1Component,
    DemoListUIComponent,
    TableDemo1Component,
    NumpadKeyboardComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(routes),

  ],
  providers: [],
  bootstrap: [EntryPageComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
