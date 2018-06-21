import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelFormComponent } from './fuel-form.component';

describe('FuelFormComponent', () => {
  let component: FuelFormComponent;
  let fixture: ComponentFixture<FuelFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
