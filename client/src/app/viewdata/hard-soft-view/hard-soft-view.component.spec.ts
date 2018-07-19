import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HardSoftViewComponent } from './hard-soft-view.component';

describe('HardSoftViewComponent', () => {
  let component: HardSoftViewComponent;
  let fixture: ComponentFixture<HardSoftViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HardSoftViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HardSoftViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
