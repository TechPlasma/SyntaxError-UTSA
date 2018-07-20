import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PCardViewComponent } from './pcard-view.component';

describe('PCardViewComponent', () => {
  let component: PCardViewComponent;
  let fixture: ComponentFixture<PCardViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PCardViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PCardViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
