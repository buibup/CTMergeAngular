import { Component, OnInit, Input } from '@angular/core';
import { PatientVM } from '../shared/patientVM.model';

import { PatientBctListService } from '../shared/patient-bct-list.service';

@Component({
  selector: 'app-patient-bct-list',
  templateUrl: './patient-bct-list.component.html',
  styleUrls: ['./patient-bct-list.component.css']
})
export class PatientBctListComponent implements OnInit {

  constructor(public patientBctListService: PatientBctListService) { }

  ngOnInit() {
  }

}
