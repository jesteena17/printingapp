import { TestBed } from '@angular/core/testing';

import { DigitalproductService } from './digitalproduct.service';

describe('DigitalproductService', () => {
  let service: DigitalproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigitalproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
