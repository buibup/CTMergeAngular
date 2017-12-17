import { Component, OnInit } from '@angular/core';

import { PatientService } from '../shared/patient.service';
import { PatientSctListService } from '../shared/patient-sct-list.service';
import { Patient } from '../shared/patient.model';
import { PatientBctListService } from '../shared/patient-bct-list.service';

@Component({
  selector: 'app-patient-sct',
  templateUrl: './patient-sct.component.html',
  styleUrls: ['./patient-sct.component.css']
})
export class PatientSctComponent implements OnInit {

  constructor(private patientService: PatientService,
    public patientSctListService: PatientSctListService,
    private patientBctListService: PatientBctListService) { }

  ngOnInit() {
  }

  onGetPatient(hn: string, firstName: string, lastName: string) {
    // clear index selected
    this.patientSctListService.selectedRow = -1;
    // clear patient selected
    this.patientBctListService.setPatientSCTSelected(<Patient>undefined);

    if (typeof hn !== 'undefined' && hn) {
      this.patientService.getPatientSCTByHN(hn).subscribe(x => this.patientSctListService.set(x));
    } else if ( (firstName !== 'undefined' && firstName) || (lastName !== 'undefined' && lastName) )  {
      this.patientService.getPatientSCTByName(firstName, lastName).subscribe(x => this.patientSctListService.set(x));
    }else {
      this.patientSctListService.set([]);
    }
  }
}
