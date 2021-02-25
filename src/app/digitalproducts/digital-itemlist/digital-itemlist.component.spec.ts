import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DigitalItemlistComponent } from './digital-itemlist.component';

describe('DigitalItemlistComponent', () => {
  let component: DigitalItemlistComponent;
  let fixture: ComponentFixture<DigitalItemlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DigitalItemlistComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DigitalItemlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
