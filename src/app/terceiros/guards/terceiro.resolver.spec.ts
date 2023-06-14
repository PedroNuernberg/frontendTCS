import { TestBed } from '@angular/core/testing';

import { TerceiroResolver } from './terceiro.resolver';

describe('TerceiroResolver', () => {
  let resolver: TerceiroResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(TerceiroResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
