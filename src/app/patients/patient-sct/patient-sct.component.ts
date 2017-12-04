import { Component, OnInit } from '@angular/core';

import { PatientService } from '../shared/patient.service';
import { PatientVM } from '../shared/patientVM.model';
import { Patient } from '../shared/patient.model';

//import { PatientBctComponent } from '../patient-bct/patient-bct.component';

@Component({
  selector: 'app-patient-sct',
  templateUrl: './patient-sct.component.html',
  styleUrls: ['./patient-sct.component.css']
})
export class PatientSctComponent implements OnInit {

  patientVMList: PatientVM[];
  patientList: Patient[];
  constructor(private patientService: PatientService) { }

  ngOnInit() {
  }

  onGetPatient(hn: string, firstName: string, lastName: string) {
    if (typeof hn !== 'undefined' && hn) {
      this.patientService.getPatientSCTByHN(hn).subscribe(x => this.patientList = x);
    }else {
      this.patientService.getPatientSCTByName(firstName, lastName).subscribe(x => this.patientList = x);
    }
  }

  onGetPatientBCT(search: string) {
    console.log('onGetPatientBCT');
    this.patientService.getPatientBCT(search).subscribe(x => this.patientVMList = x);
  }
}
