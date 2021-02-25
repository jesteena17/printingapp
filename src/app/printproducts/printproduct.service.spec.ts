import { TestBed } from '@angular/core/testing';

import { PrintproductService } from './printproduct.service';

describe('PrintproductService', () => {
  let service: PrintproductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrintproductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
