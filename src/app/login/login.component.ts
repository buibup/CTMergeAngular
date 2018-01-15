import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';

import { Patient } from '../patients/shared/patient.model';
import { User } from './services/User.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;
  user: User;
  error = '';

  constructor(private authenticationService: AuthenticationService, private router: Router) {
    // this.authenticationService.setUserLogout();
  }

  ngOnInit() {
     this.authenticationService.setUserLogout();
  }

  login() {
    this.loading = true;
    if (this.model.username) {
      this.authenticationService.getUserAuthen(this.model.username, this.model.password)
                                  .subscribe(x => {
                                                // console.log(x);
                                                if (x.SSUSR_Initials !== null) {
                                                  if (x.IsGroupAllow === true) {
                                                    this.authenticationService.setUserLogin(x);
                                                    console.log('authentication success');
                                                    this.router.navigate(['patients']);
                                                  } else {
                                                    console.log('Not Permission');
                                                    this.error = 'Not Permission';
                                                    this.loading = false;
                                                  }

                                                } else {
                                                  this.error = 'Username or password is incorrect';
                                                  this.loading = false;
                                                  console.log('Username or password is incorrect');
                                                }
                                              },
                                              err => {
                                                if (err.toString().indexOf('URL: null')) {
                                                  err = 'Please Check Network!!';
                                                }

                                                this.error = err;
                                                console.log('authentication error');
                                              });
    }
  }

}
