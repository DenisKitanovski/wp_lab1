import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PredmetDetaliComponent } from './predmet-detali/predmet-detali.component';
import {PredmetManagmentService} from './predmet-managment.service';

@NgModule({
  declarations: [
    AppComponent,
    PredmetDetaliComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [PredmetManagmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
