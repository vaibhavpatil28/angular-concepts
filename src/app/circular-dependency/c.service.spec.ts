import { TestBed } from '@angular/core/testing';

import { CService } from './c.service';

describe('CService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CService = TestBed.get(CService);
    expect(service).toBeTruthy();
  });
});
