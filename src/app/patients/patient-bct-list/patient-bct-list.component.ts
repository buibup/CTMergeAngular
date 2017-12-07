import { Component, OnInit, Input } from '@angular/core';
import { PatientVM } from '../shared/patientVM.model';

import { PatientBctListService } from '../shared/patient-bct-list.service';
import { PatientService } from '../shared/patient.service';

@Component({
  selector: 'app-patient-bct-list',
  templateUrl: './patient-bct-list.component.html',
  styleUrls: ['./patient-bct-list.component.css']
})
export class PatientBctListComponent implements OnInit {

  _bctHN: string;
  _sctHN: string;

  constructor(public patientBctListService: PatientBctListService, private patientService: PatientService) { }

  ngOnInit() {
  }

  onMergePatient(bctHN: string, sctHN: string) {
    this.patientService.mergePatient(bctHN, sctHN).subscribe(x => this.patientBctListService.hasMerge(x));
  }

}
