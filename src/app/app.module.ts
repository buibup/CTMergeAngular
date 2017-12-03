import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientBctComponent } from './patients/patient-bct/patient-bct.component';
import { PatientSctComponent } from './patients/patient-sct/patient-sct.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientBctComponent,
    PatientSctComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
