import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriverauthComponent } from './driverauth.component';

describe('DriverauthComponent', () => {
  let component: DriverauthComponent;
  let fixture: ComponentFixture<DriverauthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriverauthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriverauthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
