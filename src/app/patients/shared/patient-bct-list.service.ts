import { Injectable } from '@angular/core';
import { PatientVM } from './patientVM.model';

@Injectable()
export class PatientBctListService {

  patientList: PatientVM[];
  isMerge: boolean;

   set(patients: PatientVM[]) {
     this.patientList = patients;
   }

   hasMerge(merge: boolean) {
    this.isMerge = merge;
   }

   clear() {
     this.patientList = [];
   }
}
