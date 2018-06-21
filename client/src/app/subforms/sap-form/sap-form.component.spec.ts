import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAPFormComponent } from './sap-form.component';

describe('SAPFormComponent', () => {
  let component: SAPFormComponent;
  let fixture: ComponentFixture<SAPFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAPFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAPFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
