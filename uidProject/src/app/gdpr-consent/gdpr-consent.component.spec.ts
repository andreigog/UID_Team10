import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GdprConsentComponent } from './gdpr-consent.component';

describe('GdprConsentComponent', () => {
  let component: GdprConsentComponent;
  let fixture: ComponentFixture<GdprConsentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GdprConsentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GdprConsentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
