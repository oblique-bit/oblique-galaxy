import {TestBed} from '@angular/core/testing';
import {ConvertExcelToJsonComponent} from './convert-excel-to-json.component';
import {ConvertExcelToJsonService} from './convert-excel-to-json.service';
import {ObIUploadEvent} from '@oblique/oblique';

describe('ConvertExcelToJsonComponent', () => {
	let component: ConvertExcelToJsonComponent;
	let convertExcelToJsonService: ConvertExcelToJsonService;

	beforeEach(() => {
		const convertExcelToJsonServiceMock = {
			processFile: jest.fn()
		};

		TestBed.configureTestingModule({
			providers: [ConvertExcelToJsonComponent, {provide: ConvertExcelToJsonService, useValue: convertExcelToJsonServiceMock}]
		});

		component = TestBed.inject(ConvertExcelToJsonComponent);
		convertExcelToJsonService = TestBed.inject(ConvertExcelToJsonService);
	});

	it('should call processFile with the selected file', () => {
		const file = new File([''], 'test.xlsx', {type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});
		// @ts-expect-error
		const event: ObIUploadEvent = {files: [file], type: 'change'};

		component.onFileSelected(event);

		expect(convertExcelToJsonService.processFile).toHaveBeenCalledWith(file);
	});

	it('should not call processFile if no files are selected', () => {
		// @ts-expect-error
		const event: ObIUploadEvent = {files: [], type: 'change'};

		component.onFileSelected(event);

		expect(convertExcelToJsonService.processFile).not.toHaveBeenCalled();
	});

	it('should not call processFile if the selected item is not a file', () => {
		// @ts-expect-error
		const event: ObIUploadEvent = {files: [{} as File], type: 'change'};

		component.onFileSelected(event);

		expect(convertExcelToJsonService.processFile).not.toHaveBeenCalled();
	});
});
