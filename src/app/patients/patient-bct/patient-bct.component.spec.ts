import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientBctComponent } from './patient-bct.component';

describe('PatientBctComponent', () => {
  let component: PatientBctComponent;
  let fixture: ComponentFixture<PatientBctComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientBctComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientBctComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
