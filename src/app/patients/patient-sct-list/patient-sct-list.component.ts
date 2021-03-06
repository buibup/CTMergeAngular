import { Component, OnInit, Input } from '@angular/core';
import { PatientVM } from '../shared/patientVM.model';
import { Patient } from '../shared/patient.model';

import { PatientService } from '../shared/patient.service';
import { PatientBctListService } from '../shared/patient-bct-list.service';
import { PatientSctListService } from '../shared/patient-sct-list.service';

@Component({
  selector: 'app-patient-sct-list',
  templateUrl: './patient-sct-list.component.html',
  styleUrls: ['./patient-sct-list.component.css']
})
export class PatientSctListComponent implements OnInit {

  @Input() patientList: Patient[];

  constructor(private patientService: PatientService,
    public patientBctListService: PatientBctListService,
    public patientSctListService: PatientSctListService) { }

  ngOnInit() {
  }

  setClickedRow(index: number) {
    this.patientSctListService.selectedRow = index;
  }

  onGetPatientBCT(name: string, patient: Patient): void {
    this.patientService.getPatientBCT(name).subscribe(x => this.patientBctListService.set(x, patient));
  }

  OpenOpdSCT(HN: string): void {
    window.open('http://10.105.10.114/eprsct/OpdRecord?hn=' + HN);
  }
}
