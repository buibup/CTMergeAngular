
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { of } from 'rxjs/Observable/of';

import { PatientVM } from './patientVM.model';

@Injectable()
export class PatientService {
    selectedPatientVM: PatientVM;
    patientVMList: PatientVM[];
    constructor(private http: Http) { }

    getPatientBCT(search: string): Observable<PatientVM[]> {
        return this.http.get('http://10.104.10.45/CTMergeAPI/api/v1/GetPatientBCT?search=' + search)
        .map((result: Response) => result.json() as PatientVM[] );
    }
}
