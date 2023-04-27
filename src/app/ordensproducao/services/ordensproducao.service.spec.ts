import { TestBed } from '@angular/core/testing';

import { OrdensproducaoService } from './ordensproducao.service';

describe('OrdensproducaoService', () => {
  let service: OrdensproducaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdensproducaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
