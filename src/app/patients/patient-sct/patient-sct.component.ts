import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { PatientService } from '../shared/patient.service';
import { PatientVM } from '../shared/patientVM.model';
import { Patient } from '../shared/patient.model';

@Component({
  selector: 'app-patient-sct',
  templateUrl: './patient-sct.component.html',
  styleUrls: ['./patient-sct.component.css']
})
export class PatientSctComponent implements OnInit {

  patientVMList: PatientVM[];
  patientList: Patient[];
  name: string;

  constructor(private patientService: PatientService) {
  }

  ngOnInit() {
  }

  onGetPatient(hn: string, firstName: string, lastName: string) {
    if (typeof hn !== 'undefined' && hn) {
      this.patientService.getPatientSCTByHN(hn).subscribe(x => this.patientList = x);
    } else {
      this.patientService.getPatientSCTByName(firstName, lastName).subscribe(x => this.patientList = x);
    }
  }

  onGetPatientBCT(search: string) {
    this.patientService.getPatientBCT(search).subscribe(x => this.patientService.patientVMList = x);
    if (this.patientService.componentPatientBCT) {
      this.patientService.componentPatientBCT(this.patientService.patientVMList);
    }
  }
}
