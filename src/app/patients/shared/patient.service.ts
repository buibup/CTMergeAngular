
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Patient } from './patient.model';
import { PatientVM } from './patientVM.model';
import { resource } from 'selenium-webdriver/http';

import { AuthenticationService } from '../../login/services/authentication.service';
import { User } from '../../login/services/User.model';
import { Router } from '@angular/router';

@Injectable()
export class PatientService {
    mergeStatus: string;
    patientSCTSelected: Patient;
    patientBCTSelected: PatientVM;
    currentUser: User;

    url = 'http://10.105.10.114/CTMergeAPI/api/v1/';
    // url = 'http://localhost:31582/api/v1/';

    constructor(private http: Http,
                private authenticationService: AuthenticationService,
                private router: Router) {

      // this.currentUser = JSON.parse(localStorage.getItem('currentUser'));


      // if (this.currentUser.IsGroupAllow === false) {
      //   console.log('IsGroupAllow = false');
      //   this.router.navigate(['']);
      // }
      // console.log('IsGroupAllow = ' + this.currentUser.IsGroupAllow);
    }

    getPatientBCT(search: string): Observable<PatientVM[]> {
        return this.http.get(this.url + 'GetPatientBCT?search=' + search)
        .map((result: Response) => result.json() as PatientVM[]);
    }

    getPatientSCTByHN(hn: string): Observable<Patient[]> {
        return this.http.get(this.url + 'GetPatientSCTByHN?hn=' + hn)
        .map((result: Response) => result.json() as Patient[]);
    }

    getPatientSCTByName(firstName: string, lastName: string): Observable<Patient[]> {
        return this.http.get(this.url + 'GetPatientSCTByName?firstName=' + firstName + '&lastName=' + lastName)
        .map((result: Response) => result.json() as Patient[]);
    }

    mergePatient(bctHN: string, sctHN: string, status: string) {
        return this.http.get(this.url + 'PatienMerge?BCT_HN=' + bctHN
                                                  + '&SCT_HN=' + sctHN
                                                  + '&USERNAME=' + this.authenticationService.currentUser.SSUSR_Initials
                                                  + '&FULLNAME=' + this.authenticationService.currentUser.SSUSR_Name
                                                  + '&STATUS=' + status)
        .map((result: Response) => result.ok as boolean);
    }

    hasPatientExist(hn: string) {
      // return this.http.get(this.url + 'IsPatientExists?hn=' + hn)
      // .map((result: Response) => result.ok as boolean);

      return this.http.get(this.url + 'IsPatientExists?hn=' + hn)
      .map((res: Response) => res.json());
    }

    setPatientSCTSelected(patient: Patient) {
      this.patientSCTSelected = patient;
    }

    setPatientBCTSelected(patient: PatientVM) {
      this.patientBCTSelected = patient;
    }

}
