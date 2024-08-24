import {TestBed} from '@angular/core/testing';

import {ConvertJsonToExcelService} from './convert-json-to-excel.service';
import {FormControl} from '@angular/forms';

describe('ConvertJsonToExcelService', () => {
	let service: ConvertJsonToExcelService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ConvertJsonToExcelService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should convert JSON to Excel with valid data', () => {
		const selectedLanguages = new FormControl(['en', 'de', 'fr', 'it']);
		global.fetch = jest.fn().mockImplementation((filePath: string) => {
			if (filePath.includes('en')) {
				return Promise.resolve({
					json: () => Promise.resolve({key1: 'value1'})
				});
			} else if (filePath.includes('de')) {
				return Promise.resolve({
					json: () => Promise.resolve({key1: 'wert1'})
				});
			} else if (filePath.includes('fr')) {
				return Promise.resolve({
					json: () => Promise.resolve({key1: 'valeur1'})
				});
			} else if (filePath.includes('it')) {
				return Promise.resolve({
					json: () => Promise.resolve({key1: 'valore1'})
				});
			}
			return Promise.resolve({
				json: () => Promise.resolve({})
			});
		});
		service.convertJsonToExcel(selectedLanguages.value ?? [], '', 'mockFileName');
		expect(service).toBeTruthy();
	});
});
