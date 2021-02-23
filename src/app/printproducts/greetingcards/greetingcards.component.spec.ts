import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GreetingcardsComponent } from './greetingcards.component';

describe('GreetingcardsComponent', () => {
  let component: GreetingcardsComponent;
  let fixture: ComponentFixture<GreetingcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GreetingcardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GreetingcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
