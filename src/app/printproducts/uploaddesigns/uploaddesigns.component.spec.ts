import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploaddesignsComponent } from './uploaddesigns.component';

describe('UploaddesignsComponent', () => {
  let component: UploaddesignsComponent;
  let fixture: ComponentFixture<UploaddesignsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploaddesignsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploaddesignsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
