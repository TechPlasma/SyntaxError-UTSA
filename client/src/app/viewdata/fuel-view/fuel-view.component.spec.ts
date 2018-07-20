import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuelViewComponent } from './fuel-view.component';

describe('FuelViewComponent', () => {
  let component: FuelViewComponent;
  let fixture: ComponentFixture<FuelViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuelViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuelViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
