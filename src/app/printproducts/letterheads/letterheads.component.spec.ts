import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LetterheadsComponent } from './letterheads.component';

describe('LetterheadsComponent', () => {
  let component: LetterheadsComponent;
  let fixture: ComponentFixture<LetterheadsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LetterheadsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LetterheadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
