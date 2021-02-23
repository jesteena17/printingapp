import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchclientComponent } from './switchclient.component';

describe('SwitchclientComponent', () => {
  let component: SwitchclientComponent;
  let fixture: ComponentFixture<SwitchclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwitchclientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
