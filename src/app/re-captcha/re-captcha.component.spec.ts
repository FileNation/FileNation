import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReCaptchaComponent } from './re-captcha.component';

describe('ReCaptchaComponent', () => {
  let component: ReCaptchaComponent;
  let fixture: ComponentFixture<ReCaptchaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReCaptchaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReCaptchaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
