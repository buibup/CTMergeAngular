import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientSctComponent } from './patient-sct.component';

describe('PatientSctComponent', () => {
  let component: PatientSctComponent;
  let fixture: ComponentFixture<PatientSctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientSctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientSctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
