import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IDFormComponent } from './id-form.component';

describe('IDFormComponent', () => {
  let component: IDFormComponent;
  let fixture: ComponentFixture<IDFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IDFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IDFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
