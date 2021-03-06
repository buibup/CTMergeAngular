import { Injectable } from '@angular/core';
import { Patient } from '../shared/patient.model';

@Injectable()
export class PatientSctListService {

  patientList: Patient[];
  selectedRow: number;

  set(patients: Patient[]) {
    this.patientList = patients;
  }

  clear() {
    this.patientList = [];
  }

}
