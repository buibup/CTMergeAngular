import { Component, OnInit, Input } from '@angular/core';

import { PatientVM } from '../shared/patientVM.model';
import { PatientBctListService } from '../shared/patient-bct-list.service';
import { PatientService } from '../shared/patient.service';
import { Patient } from '../shared/patient.model';

@Component({
  selector: 'app-patient-bct-list',
  templateUrl: './patient-bct-list.component.html',
  styleUrls: ['./patient-bct-list.component.css']
})
export class PatientBctListComponent implements OnInit {

  constructor(public patientBctListService: PatientBctListService,
    private patientService: PatientService) { }

  ngOnInit() {
  }

  onMergePatient(bctHN: string, sctHN: string, patientBCTSelected: PatientVM) {
    if (this.isMerge(this.patientBctListService.patientSCTSelected, patientBCTSelected.SCT_HN, patientBCTSelected)) {
      this.patientService.mergePatient(bctHN, '')
      .subscribe(x => this.toMerge(bctHN, '', x, patientBCTSelected));
    }else {
      this.patientService.mergePatient(bctHN, sctHN)
      .subscribe(x => this.toMerge(bctHN, sctHN, x, patientBCTSelected));
    }
  }

  toMerge(bctHN: string, sctHN: string, isM: boolean, patientBCTSelected: PatientVM) {
    this.patientBctListService.hasMerge(isM);
    if (this.patientBctListService.isMerge) {
      this.patientService.getPatientBCT(bctHN).subscribe(x => this.patientBctListService.patientList = x);
      this.isMerge(this.patientBctListService.patientSCTSelected, sctHN, patientBCTSelected);
    }
  }

  isMerge(patientSCT: Patient, sctHN: string, patientVM: PatientVM): boolean {
    if (patientSCT.HN === sctHN || patientVM.SCT_HN !== null) {
      return true;
    }

    return false;
  }
}
