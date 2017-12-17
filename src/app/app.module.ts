import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MatButtonModule, MatCheckboxModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { PatientsComponent } from './patients/patients.component';
import { PatientBctComponent } from './patients/patient-bct/patient-bct.component';
import { PatientSctComponent } from './patients/patient-sct/patient-sct.component';
import { PatientBctListComponent } from './patients/patient-bct-list/patient-bct-list.component';
import { PatientSctListComponent } from './patients/patient-sct-list/patient-sct-list.component';

import { PatientBctListService } from './patients/shared/patient-bct-list.service';
import { PatientSctListService } from './patients/shared/patient-sct-list.service';

@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientBctComponent,
    PatientSctComponent,
    PatientBctListComponent,
    PatientSctListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MatButtonModule, MatCheckboxModule,
    NgbModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
  ],
  providers: [
    PatientBctListService,
    PatientSctListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
