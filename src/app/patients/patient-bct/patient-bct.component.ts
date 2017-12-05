
import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { NgForm } from '@angular/forms';

import { PatientService } from '../shared/patient.service';
import { ToastrService } from 'ngx-toastr';
import { PatientVM } from '../shared/patientVM.model';
import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-patient-bct',
  templateUrl: './patient-bct.component.html',
  styleUrls: ['./patient-bct.component.css']
})
export class PatientBctComponent implements OnInit {

  patientVMList: PatientVM[];

  constructor(private patientService: PatientService, private toastr: ToastrService, private http: Http) {
    this.patientService.componentPatientBCT = this.onSetPatientVMList;
  }

  ngOnInit() {
  }

  onGetPatient(search: string) {
    this.patientService.getPatientBCT(search).subscribe(x => this.patientVMList = x);
  }

  onSetPatientVMList(data: PatientVM[]) {
    console.log(data);
    this.patientVMList = data;
  }
}
