import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintproductsComponent } from './printproducts.component';

describe('PrintproductsComponent', () => {
  let component: PrintproductsComponent;
  let fixture: ComponentFixture<PrintproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrintproductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
