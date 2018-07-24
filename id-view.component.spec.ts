import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IDViewComponent } from './id-view.component';

describe('IDViewComponent', () => {
  let component: IDViewComponent;
  let fixture: ComponentFixture<IDViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IDViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IDViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
