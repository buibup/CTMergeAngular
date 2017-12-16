import { Injectable } from '@angular/core';
import { PatientVM } from './patientVM.model';
import { Patient } from './patient.model';
import { PatientService } from './patient.service';

@Injectable()
export class PatientBctListService {

  patientList: PatientVM[];
  patientSCTSelected?: Patient;
  isMerge: boolean;
  search: string;
  selectedRow: number;

  set(patients: PatientVM[], patient?: Patient, search?: string) {
    this.patientList = patients;
    this.search = search;
    if (patient != null) {
    this.patientSCTSelected = patient;
    }
  }

  setPatientSCTSelected(patient: Patient) {
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
