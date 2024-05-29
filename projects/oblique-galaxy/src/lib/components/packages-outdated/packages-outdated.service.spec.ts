import { TestBed } from '@angular/core/testing';

import { PackagesOutdatedService } from './packages-outdated.service';

describe('PackagesOutdatedService', () => {
  let service: PackagesOutdatedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackagesOutdatedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
