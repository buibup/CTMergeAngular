import { Component, OnInit } from '@angular/core';

import { PatientService } from '../shared/patient.service';
import { PatientSctListService } from '../shared/patient-sct-list.service';
import { Patient } from '../shared/patient.model';

@Component({
  selector: 'app-patient-sct',
  templateUrl: './patient-sct.component.html',
  styleUrls: ['./patient-sct.component.css']
})
export class PatientSctComponent implements OnInit {

  constructor(private patientService: PatientService,
    public patientSctListService: PatientSctListService) { }

  ngOnInit() {
  }

  onGetPatient(hn: string, firstName: string, lastName: string) {
    if (typeof hn !== 'undefined' && hn) {
      this.patientService.getPatientSCTByHN(hn).subscribe(x => this.patientSctListService.set(x));
    } else {
      this.patientService.getPatientSCTByName(firstName, lastName).subscribe(x => this.patientSctListService.set(x, ));
    }
  }
}
