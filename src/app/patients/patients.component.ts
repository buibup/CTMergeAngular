import { Component, OnInit, Injector } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { PatientService } from './shared/patient.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [PatientService]
})
export class PatientsComponent implements OnInit {

  constructor(private patientService: PatientService, private toastr: ToastrService) { }

  ngOnInit() {
  }

  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
