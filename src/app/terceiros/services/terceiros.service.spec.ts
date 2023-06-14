import { TestBed } from '@angular/core/testing';

import { TerceirosService } from './terceiros.service';

describe('TerceirosService', () => {
  let service: TerceirosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TerceirosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
