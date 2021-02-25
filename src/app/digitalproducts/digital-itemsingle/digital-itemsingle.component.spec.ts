import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalItemsingleComponent } from './digital-itemsingle.component';

describe('DigitalItemsingleComponent', () => {
  let component: DigitalItemsingleComponent;
  let fixture: ComponentFixture<DigitalItemsingleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalItemsingleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalItemsingleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
