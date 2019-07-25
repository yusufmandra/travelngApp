import { TestBed } from '@angular/core/testing';

import { ThemefixesService } from './themefixes.service';

describe('ThemefixesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemefixesService = TestBed.get(ThemefixesService);
    expect(service).toBeTruthy();
  });
});
