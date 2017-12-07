import { Injectable } from '@angular/core';
import { PatientVM } from './patientVM.model';

@Injectable()
export class PatientBctListService {

  patientList: PatientVM[];

   set(patients: PatientVM[]) {
     this.patientList = patients;
   }

   clear() {
     this.patientList = [];
   }
}
