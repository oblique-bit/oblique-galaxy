import { TestBed } from '@angular/core/testing';

import { ConvertJsonToExcelService } from './convert-json-to-excel.service';

describe('ConvertJsonToExcelService', () => {
  let service: ConvertJsonToExcelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConvertJsonToExcelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
