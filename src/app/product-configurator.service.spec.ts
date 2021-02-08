import { TestBed } from '@angular/core/testing';

import { ProductConfiguratorService } from './product-configurator.service';

describe('ProductConfiguratorService', () => {
  let service: ProductConfiguratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductConfiguratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
