import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadfileComponent } from './downloadfile.component';

describe('DownloadfileComponent', () => {
  let component: DownloadfileComponent;
  let fixture: ComponentFixture<DownloadfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
