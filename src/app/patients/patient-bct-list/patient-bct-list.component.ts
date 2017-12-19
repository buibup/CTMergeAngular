
import { Component, OnInit, Input } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

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
    private patientService: PatientService,
    private toastr: ToastrService) { }

  ngOnInit() {
  }

  setClickedRow(index: number) {
    this.patientBctListService.selectedRow = index;
  }

  onMergePatient(bctHN: string, sctHN: string, patientBCTSelected: PatientVM) {

    if (this.isMerge(this.patientBctListService.patientSCTSelected, patientBCTSelected.SCT_HN, patientBCTSelected)) {
      if (confirm('Are you sure to unmerge patient ' + bctHN + ' with ' + sctHN + ' ?') === true) {
        this.patientService.mergePatient(bctHN, '')
        .subscribe(x => {
          this.toMerge(bctHN, '', x, patientBCTSelected);
          // this.toastr.warning('Unmerge Successfully', 'Patient Merge');
        });
      }
    }else {
      if (this.patientBctListService.patientSCTSelected === undefined ) {
        alert('Please choose patient for merge!!');
      }else {

        this.toPatientExist(this.patientBctListService.patientSCTSelected.HN, bctHN, sctHN, patientBCTSelected);
      }
    }
  }

  toMerge(bctHN: string, sctHN: string, isM: boolean, patientBCTSelected: PatientVM) {
    this.patientBctListService.hasMerge(isM);
    if (this.patientBctListService.isMerge) {
      this.patientService.getPatientBCT(this.patientBctListService.search).subscribe(x => this.patientBctListService.patientList = x);
      this.isMerge(this.patientBctListService.patientSCTSelected, sctHN, patientBCTSelected);
    }
  }

  isMerge(patientSCT?: Patient, sctHN?: string, patientVM?: PatientVM): boolean {
    if (patientSCT === undefined) {
     if (patientVM.SCT_HN !== null) {
       return true;
     }else {
       return false;
     }
    }

    if (patientSCT.HN === sctHN || patientVM.SCT_HN !== null) {
      return true;
    }

    return false;
  }

  toPatientExist(hnPatietnSCTSelected: string, bctHN: string, sctHN: string, patientBCTSelected: PatientVM) {
    this.patientService.hasPatientExist(hnPatietnSCTSelected)
    .subscribe( x => {
      this.hasPatientExist(x, bctHN, sctHN, x, patientBCTSelected);
    });
  }

  hasPatientExist(isPTExist: boolean, bctHN: string, sctHN: string, isMerge: boolean, patientBCTSelected: PatientVM) {
    if (isPTExist) {
      alert('This patient have merged with other patient.');
    }else {
      if (confirm('Are you sure to merge patient ' + bctHN + ' with ' + sctHN + ' ?') === true) {
        this.patientService.mergePatient(bctHN, sctHN)
        .subscribe(x => {
          this.toMerge(bctHN, sctHN, x, patientBCTSelected);
          // this.toastr.warning('Merge Successfully', 'Patient Merge');
        });
      }
    }
  }
}
