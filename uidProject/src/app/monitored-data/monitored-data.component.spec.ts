import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitoredDataComponent } from './monitored-data.component';

describe('MonitoredDataComponent', () => {
  let component: MonitoredDataComponent;
  let fixture: ComponentFixture<MonitoredDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonitoredDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonitoredDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
