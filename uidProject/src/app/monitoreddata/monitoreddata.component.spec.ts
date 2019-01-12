import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoreddataComponent } from './monitoreddata.component';

describe('MonitoreddataComponent', () => {
  let component: MonitoreddataComponent;
  let fixture: ComponentFixture<MonitoreddataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoreddataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoreddataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
