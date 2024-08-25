import {ComponentFixture, TestBed} from '@angular/core/testing';

import {ConvertJsonToExcelComponent} from './convert-json-to-excel.component';
import {ConvertJsonToExcelService} from './convert-json-to-excel.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

describe('ConvertJsonToExcelComponent', () => {
	let component: ConvertJsonToExcelComponent;
	let fixture: ComponentFixture<ConvertJsonToExcelComponent>;

	beforeEach(async () => {
		const mockConvertJsonToExcelService = {
			convertJsonToExcel: jest.fn()
		};

		await TestBed.configureTestingModule({
			imports: [ConvertJsonToExcelComponent, BrowserAnimationsModule],
			providers: [{provide: ConvertJsonToExcelService, useValue: mockConvertJsonToExcelService}]
		}).compileComponents();

		fixture = TestBed.createComponent(ConvertJsonToExcelComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should call convertJsonToExcel on service', () => {
		const spy = jest.spyOn(TestBed.inject(ConvertJsonToExcelService), 'convertJsonToExcel');

		component.onClickExportAsExcelFIle();
		expect(spy).toHaveBeenCalled();
	});
});
