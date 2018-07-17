import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultInfoComponent } from './default-info.component';

describe('DefaultInfoComponent', () => {
  let component: DefaultInfoComponent;
  let fixture: ComponentFixture<DefaultInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
