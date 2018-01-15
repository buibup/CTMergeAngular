import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { PatientService } from '../shared/patient.service';
import { PatientSctListService } from '../shared/patient-sct-list.service';
import { Patient } from '../shared/patient.model';
import { PatientBctListService } from '../shared/patient-bct-list.service';

@Component({
  selector: 'app-patient-sct',
  templateUrl: './patient-sct.component.html',
  styleUrls: ['./patient-sct.component.css']
})
export class PatientSctComponent implements OnInit {
  @ViewChild('HN') private erHN: ElementRef;

  // public ngAfterViewInit(): void {
  //   this.elementRef.nativeElement.focus();
  // }

  constructor(private patientService: PatientService,
    public patientSctListService: PatientSctListService,
    private patientBctListService: PatientBctListService) { }

  ngOnInit() {
    this.onGetPatient('', '', '');
    this.erHN.nativeElement.focus();
  }

  onGetPatient(hn: string, firstName: string, lastName: string) {
    // clear index selected
    this.patientSctListService.selectedRow = -1;
    // clear patient selected
    this.patientBctListService.setPatientSCTSelected(<Patient>undefined);

    if (typeof hn !== 'undefined' && hn && hn !== '') {
      this.patientService.getPatientSCTByHN(hn).subscribe(x => {
        this.patientSctListService.set(x);
        if (this.patientSctListService.patientList.length < 1) {
          this.patientService.getPatientSCTByName(hn, hn).subscribe(xx => this.patientSctListService.set(xx));
        }
      });
    // tslint:disable-next-line:max-line-length
    } else if ( (firstName !== 'undefined' && firstName && firstName !== '') || (lastName !== 'undefined' && lastName && lastName !== '') )  {
      this.patientService.getPatientSCTByName(firstName, lastName).subscribe(x => this.patientSctListService.set(x));
    } else {
      this.patientSctListService.set([]);
    }
  }

  isEmptyOrSpaces(str) {
    if (str === null || str.match(/^ *$/) !== null) {
      return '';
    } else {
      return str;
    }
  }
}
