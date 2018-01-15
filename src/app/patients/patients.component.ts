import { Component, OnInit, Injector } from '@angular/core';

import { PatientService } from './shared/patient.service';
import { AuthenticationService } from '../login/services/authentication.service';
import { Router } from '@angular/router';
import { User } from '../login/services/User.model';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css'],
  providers: [PatientService]
})
export class PatientsComponent implements OnInit {
  currentUser: User;
  constructor(private patientService: PatientService,
              private authenticationService: AuthenticationService,
              private router: Router) {
                this.ngOnInit();
  }

  ngOnInit() {
    this.currentUser = this.authenticationService.getUserLogin();


      if (this.currentUser.IsGroupAllow === false || this.currentUser.IsGroupAllow === undefined) {
        console.log('IsGroupAllow = false');
        this.router.navigate(['']);
      }
      console.log('IsGroupAllow = ' + this.currentUser.IsGroupAllow);
  }

  Logout() {
    // this.currentUser = undefined;
    this.authenticationService.setUserLogout();
    this.router.navigate(['']);
  }
}
