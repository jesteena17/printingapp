import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalproductsComponent } from './digitalproducts.component';

describe('DigitalproductsComponent', () => {
  let component: DigitalproductsComponent;
  let fixture: ComponentFixture<DigitalproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
