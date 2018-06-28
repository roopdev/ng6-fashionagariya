import { TestBed, inject } from '@angular/core/testing';

import { CartLineService } from './cart-line.service';

describe('CartLineService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CartLineService]
    });
  });

  it('should be created', inject([CartLineService], (service: CartLineService) => {
    expect(service).toBeTruthy();
  }));
});
