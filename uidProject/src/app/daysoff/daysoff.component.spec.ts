import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DaysoffComponent } from './daysoff.component';

describe('DaysoffComponent', () => {
  let component: DaysoffComponent;
  let fixture: ComponentFixture<DaysoffComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DaysoffComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DaysoffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
