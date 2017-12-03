
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { PatientService } from '../shared/patient.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-patient-bct',
  templateUrl: './patient-bct.component.html',
  styleUrls: ['./patient-bct.component.css']
})
export class PatientBctComponent implements OnInit {

  constructor(private patientService: PatientService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  onGetPatient(search: string) {
    this.patientService.getPatientBCT(search);
  }
}
