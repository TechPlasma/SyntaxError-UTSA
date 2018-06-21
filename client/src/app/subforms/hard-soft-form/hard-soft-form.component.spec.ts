import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSoftFormComponent } from './hard-soft-form.component';

describe('HardSoftFormComponent', () => {
  let component: HardSoftFormComponent;
  let fixture: ComponentFixture<HardSoftFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardSoftFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardSoftFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
