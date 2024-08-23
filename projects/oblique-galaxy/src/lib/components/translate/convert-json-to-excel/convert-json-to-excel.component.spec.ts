import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertJsonToExcelComponent } from './convert-json-to-excel.component';

describe('ConvertJsonToExcelComponent', () => {
  let component: ConvertJsonToExcelComponent;
  let fixture: ComponentFixture<ConvertJsonToExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertJsonToExcelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConvertJsonToExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
