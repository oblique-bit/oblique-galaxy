import {Injectable} from '@angular/core';
import * as XLSX from 'xlsx';
import {HttpClient} from '@angular/common/http';
import {Observable, catchError, forkJoin, of} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ConvertJsonToExcelService {
	private readonly excelType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
	private languageCodes: string[] = []; // Add more language codes as needed

	constructor(private readonly http: HttpClient) {}

	// Method to extract keys and values from JSON files and convert to Excel
	// eslint-disable-next-line @typescript-eslint/default-param-last
	public convertJsonToExcel(fileName = 'output.xlsx', languageCodes: string[], jsonsPath: string): void {
		this.languageCodes = languageCodes;
		const jsonFileObservables: Observable<Record<string, unknown>>[] = this.languageCodes.map(code =>
			this.getJSON(`${jsonsPath}${code}.json`).pipe(
				catchError(() => of({})) // Return an empty object if the file does not exist
			)
		);

		forkJoin(jsonFileObservables)
			.pipe(map(data => this.extractKeysAndValues(data)))
			.subscribe(dataToExport => {
				// Generate an Excel sheet from the data
				const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
				const workbook: XLSX.WorkBook = XLSX.utils.book_new();
				XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

				// Export the Excel file
				const excelBuffer: ArrayBuffer = XLSX.write(workbook, {
					bookType: 'xlsx',
					type: 'array'
				}) as ArrayBuffer;

				// Save the file
				this.saveAsExcelFile(excelBuffer, fileName);
			});
	}

	// Method to fetch JSON data from URL
	private getJSON(url: string): Observable<Record<string, unknown>> {
		return this.http.get<Record<string, unknown>>(url);
	}

	// Method to extract keys and values from JSON data
	private extractKeysAndValues(data: Record<string, unknown>[]): Record<string, string>[] {
		const dataToExport: Record<string, string>[] = [];
		const keys = new Set<string>();
		const availableLanguages: string[] = [];

		// Collect all keys and determine available languages
		data.forEach((jsonData, index) => {
			if (Object.keys(jsonData).length > 0) {
				availableLanguages.push(this.languageCodes[index]);
				for (const key in jsonData) {
					if (jsonData.hasOwnProperty(key)) {
						keys.add(key);
					}
				}
			}
		});

		// Create rows with values for each key
		keys.forEach(key => {
			const row: Record<string, string> = {Cle: key};
			data.forEach((jsonData, index) => {
				if (availableLanguages.includes(this.languageCodes[index])) {
					row[`Value_${this.languageCodes[index]}`] = (jsonData[key] as string) || '';
				}
			});
			dataToExport.push(row);
		});

		return dataToExport;
	}

	// Method to save the Excel file
	private saveAsExcelFile(buffer: ArrayBuffer, fileName: string): void {
		const data: Blob = new Blob([buffer], {type: this.excelType});
		const link = document.createElement('a');
		link.href = URL.createObjectURL(data);
		link.download = fileName;
		link.click();
	}
}
