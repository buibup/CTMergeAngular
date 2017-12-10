
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { Patient } from './patient.model';
import { PatientVM } from './patientVM.model';

@Injectable()
export class PatientService {

    patientVMList: PatientVM[];
    patientList: Patient[];

    patientSCTSelected: Patient;
    patientBCTSelected: PatientVM;

    constructor(private http: Http) { }

    getPatientBCT(search: string): Observable<PatientVM[]> {
        return this.http.get('http://10.104.10.45/CTMergeAPI/api/v1/GetPatientBCT?search=' + search)
        .map((result: Response) => result.json() as PatientVM[]);
    }

    getPatientSCTByHN(hn: string): Observable<Patient[]> {
        return this.http.get('http://10.104.10.45/CTMergeAPI/api/v1/GetPatientSCTByHN?hn=' + hn)
        .map((result: Response) => result.json() as Patient[]);
    }

    getPatientSCTByName(firstName: string, lastName: string): Observable<Patient[]> {
        return this.http.get('http://10.104.10.45/CTMergeAPI/api/v1/GetPatientSCTByName?firstName=' + firstName + '&lastName=' + lastName)
        .map((result: Response) => result.json() as Patient[]);
    }

    mergePatient(bctHN: string, sctHN: string, patient: Patient): Observable<boolean> {
        return this.http.get('http://10.104.10.45/CTMergeAPI/api/v1/PatienMerge?BCT_HN=' + bctHN + '&SCT_HN=' + sctHN)
        .map((result: Response) => result.ok as boolean);
    }

    setPatientSCTSelected(patient: Patient) {
      this.patientSCTSelected = patient;
    }

    setPatientBCTSelected(patient: PatientVM) {
      this.patientBCTSelected = patient;
    }

}
