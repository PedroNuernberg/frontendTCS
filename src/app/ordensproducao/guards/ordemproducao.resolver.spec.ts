import { TestBed } from '@angular/core/testing';

import { OrdemproducaoResolver } from './ordemproducao.resolver';

describe('OrdemproducaoResolver', () => {
  let resolver: OrdemproducaoResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(OrdemproducaoResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
