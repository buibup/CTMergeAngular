import { Injectable } from '@angular/core';
import { PatientVM } from './patientVM.model';
import { Patient } from './patient.model';
import { PatientService } from './patient.service';

@Injectable()
export class PatientBctListService {

  patientList: PatientVM[];
  patientSCTSelected: Patient;
  isMerge: boolean;


   set(patients: PatientVM[], patient: Patient) {
     this.patientList = patients;
     this.patientSCTSelected = patient;
   }

   hasMerge(merge: boolean) {
    this.isMerge = merge;
   }

   clear() {
     this.patientList = [];
     this.patientSCTSelected = null;
   }
}
