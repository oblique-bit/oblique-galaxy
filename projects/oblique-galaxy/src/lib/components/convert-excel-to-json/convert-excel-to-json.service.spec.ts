import {TestBed} from '@angular/core/testing';
import {ConvertExcelToJsonService} from './convert-excel-to-json.service';
import {ObIconModule} from '@oblique/oblique';

describe('ConvertExcelToJsonService', () => {
	let service: ConvertExcelToJsonService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ObIconModule.forRoot()],
			providers: [ConvertExcelToJsonService]
		});
		service = TestBed.inject(ConvertExcelToJsonService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});

	it('should extract keys from jsonData', () => {
		const jsonData: unknown[][] = [
			['key1', 'value1'],
			['key2', 'value2'],
			['key3', 'value3']
		];
		const expectedKeys = ['key1', 'key2', 'key3'];
		// @ts-expect-error
		const result = service.extractKeys(jsonData);

		expect(result).toEqual(expectedKeys);
	});

	it('should return empty string for non-array rows', () => {
		const jsonData: unknown[][] = [['key1', 'value1'], 'invalidRow' as unknown as unknown[], ['key3', 'value3']];
		const expectedKeys = ['key1', '', 'key3'];
		// @ts-expect-error
		const result = service.extractKeys(jsonData);

		expect(result).toEqual(expectedKeys);
	});

	it('should process a valid Excel file and convert it to JSON', () => {
		const file = new File([new ArrayBuffer(1)], 'test.xlsx');
		const readerMock = {
			onload: jest.fn(),
			readAsArrayBuffer: jest.fn(function () {
				// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
				this.onload({target: {result: new ArrayBuffer(1)}});
			})
		};
		jest.spyOn(window, 'FileReader').mockImplementation(() => readerMock as unknown as FileReader);
		jest.spyOn(service, 'handleFileLoad').mockImplementation(() => {});

		service.processFile(file);

		expect(readerMock.readAsArrayBuffer).toHaveBeenCalledWith(file);
		expect(service.handleFileLoad).toHaveBeenCalled();
	});

	it('should extract columns from the first row of jsonData', () => {
		const jsonData: unknown[][] = [
			['key1', 'col1', 'col2'],
			['key2', 'val1', 'val2'],
			['key3', 'val3', 'val4']
		];
		const expectedColumns = ['col1', 'col2'];

		// @ts-expect-error
		const result = service.extractColumns(jsonData);

		expect(result).toEqual(expectedColumns);
	});

	it('should return an empty array if the first row is not an array', () => {
		const jsonData: unknown[][] = ['invalidRow' as unknown as unknown[], ['key2', 'val1', 'val2'], ['key3', 'val3', 'val4']];
		const expectedColumns: string[] = [];

		// @ts-expect-error
		const result = service.extractColumns(jsonData);

		expect(result).toEqual(expectedColumns);
	});

	it('should handle non-array rows in jsonData', () => {
		const keys = ['key', 'col1', 'col2'];
		const jsonData: unknown[][] = [['key', 'col1', 'col2'], 'invalidRow' as unknown as unknown[], ['key2', 'val3', 'val4']];
		const index = 0;
		const expectedJson = {
			col1: undefined,
			col2: 'val3'
		};

		// @ts-expect-error
		const result = service.createJsonObject(keys, jsonData, index);

		expect(result).toEqual(expectedJson);
	});

	it('should handle file load and process the data correctly', () => {
		const mockEvent = {
			target: {
				result: new ArrayBuffer(8)
			}
		} as ProgressEvent<FileReader>;

		const binaryString = 'test';
		// const workbook = {
		// 	SheetNames: ['Sheet1'],
		// 	Sheets: {
		// 		Sheet1: {}
		// 	}
		// };
		// const jsonData = [
		// 	['key1', 'col1', 'col2'],
		// 	['key2', 'val1', 'val2'],
		// 	['key3', 'val3', 'val4', 'test']
		// ];

		jest.spyOn(Uint8Array.prototype, 'reduce').mockReturnValue(binaryString);

		// @ts-expect-error
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		jest.spyOn(service, 'extractKeys').mockReturnValue(['key1', 'key2', 'key3']);
		// @ts-expect-error
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		jest.spyOn(service, 'extractColumns').mockReturnValue(['col1', 'col2']);
		// @ts-expect-error
		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-call
		const createJsonObjectSpy = jest.spyOn(service, 'createJsonObject').mockReturnValue({col1: 'val1', col2: 'val2'});
		// @ts-expect-error
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		jest.spyOn(service, 'saveJsonToFile').mockImplementation(() => {});

		service.handleFileLoad(mockEvent);
		expect(createJsonObjectSpy).toHaveBeenCalledTimes(2);
	});
});
