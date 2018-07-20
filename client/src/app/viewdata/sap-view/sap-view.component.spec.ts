import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SAPViewComponent } from './sap-view.component';

describe('SAPViewComponent', () => {
  let component: SAPViewComponent;
  let fixture: ComponentFixture<SAPViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SAPViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SAPViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
