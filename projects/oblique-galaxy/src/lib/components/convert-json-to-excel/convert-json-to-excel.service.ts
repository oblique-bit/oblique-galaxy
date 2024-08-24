import {Injectable} from '@angular/core';
import * as XLSX from 'xlsx';
import {Observable, forkJoin, from, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class ConvertJsonToExcelService {
	private readonly excelType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
	private languageCodes: string[] = [];

	public convertJsonToExcel(languageCodes: string[], jsonsPath: string, fileName = 'output.xlsx'): void {
		this.languageCodes = languageCodes;

		const jsonFileObservables: Observable<Record<string, unknown>>[] = this.languageCodes.map(code =>
			this.getJSON(`${jsonsPath}${code}.json`).pipe(
				catchError(() => of({})) // Return an empty object if the file does not exist
			)
		);

		forkJoin(jsonFileObservables)
			.pipe(map(data => this.extractKeysAndValues(data)))
			.subscribe(dataToExport => {
				const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(dataToExport);
				const workbook: XLSX.WorkBook = XLSX.utils.book_new();
				XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');

				const excelBuffer: ArrayBuffer = XLSX.write(workbook, {
					bookType: 'xlsx',
					type: 'array'
				}) as ArrayBuffer;

				this.saveAsExcelFile(excelBuffer, fileName);
			});
	}

	private getJSON(filePath: string): Observable<Record<string, unknown>> {
		return from(fetch(filePath).then(response => response.json()));
	}

	private extractKeysAndValues(data: Record<string, unknown>[]): Record<string, string>[] {
		const dataToExport: Record<string, string>[] = [];
		const keys = new Set<string>();
		const availableLanguages: string[] = [];

		data.forEach((jsonData, index) => {
			if (Object.keys(jsonData).length > 0) {
				availableLanguages.push(this.languageCodes[index]);
				for (const key in jsonData) {
					if (Object.prototype.hasOwnProperty.call(jsonData, key)) {
						keys.add(key);
					}
				}
			}
		});

		keys.forEach(key => {
			const row: Record<string, string> = {keys: key};
			data.forEach((jsonData, index) => {
				if (availableLanguages.includes(this.languageCodes[index])) {
					row[`Value_${this.languageCodes[index]}`] = (jsonData[key] as string) || '';
				}
			});
			dataToExport.push(row);
		});

		return dataToExport;
	}

	private saveAsExcelFile(buffer: ArrayBuffer, fileName: string): void {
		const data: Blob = new Blob([buffer], {type: this.excelType});
		const link = document.createElement('a');
		link.href = URL.createObjectURL(data);
		link.download = fileName;
		link.click();
	}
}
