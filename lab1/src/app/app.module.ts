import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import {StudentManagmentService} from './student-managment.service';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [StudentManagmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
