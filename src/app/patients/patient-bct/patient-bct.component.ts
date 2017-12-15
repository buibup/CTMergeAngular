
import { Component, OnInit, Input, Output } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { NgForm } from '@angular/forms';

import { PatientService } from '../shared/patient.service';
import { ToastrService } from 'ngx-toastr';
import { PatientVM } from '../shared/patientVM.model';
import { Patient } from '../shared/patient.model';
// import { Input } from '@angular/core/src/metadata/directives';
import { PatientBctListService } from '../shared/patient-bct-list.service';

@Component({
  selector: 'app-patient-bct',
  templateUrl: './patient-bct.component.html',
  styleUrls: ['./patient-bct.component.css']
})
export class PatientBctComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  constructor(private patientService: PatientService,
    public patientBctListService: PatientBctListService,
    private toastr: ToastrService, private http: Http) { }

  ngOnInit() {
  }

  onGetPatient(search: string) {
    this.patientBctListService.selectedRow = -1;
    this.patientService.getPatientBCT(search)
    .subscribe(x => this.patientBctListService.set(x, this.patientBctListService.patientSCTSelected, search));
  }
}
