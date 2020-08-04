import { TestBed } from '@angular/core/testing';

import { ProductsStateService } from './products-state.service';

describe('ProductsStateService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductsStateService = TestBed.get(ProductsStateService);
    expect(service).toBeTruthy();
  });
});
