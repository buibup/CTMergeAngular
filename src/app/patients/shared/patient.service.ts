
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { PatientVM } from './patientVM.model';

@Injectable()
export class PatientService {
    selectedPatientVM: PatientVM;
    patientVMList: PatientVM[];
    constructor(private http: Http) { }

    getPatientBCT(search: string) {
        this.http.get('http://localhost:31582/api/v1/GetPatientBCT?search=' + search)
        .map((data: Response) => {
            return data.json() as PatientVM[];
        }).toPromise().then(x => {
            this.patientVMList = x;
        });
    }
}
