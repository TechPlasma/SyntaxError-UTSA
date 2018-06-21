import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PCardFormComponent } from './pcard-form.component';

describe('PCardFormComponent', () => {
  let component: PCardFormComponent;
  let fixture: ComponentFixture<PCardFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCardFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
