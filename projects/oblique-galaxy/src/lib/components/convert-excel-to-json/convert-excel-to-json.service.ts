import {Injectable} from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
	providedIn: 'root'
})
export class ConvertExcelToJsonService {
	processFile(file: File): void {
		const reader = new FileReader();
		reader.onload = event => this.handleFileLoad(event);
		reader.readAsArrayBuffer(file);
	}

	handleFileLoad(event: ProgressEvent<FileReader>): void {
		const data = event.target?.result;
		if (data instanceof ArrayBuffer) {
			const binaryString = new Uint8Array(data).reduce((acc, byte) => acc + String.fromCharCode(byte), '');
			const workbook = XLSX.read(binaryString, {type: 'binary'});
			const [sheetName] = workbook.SheetNames;
			const worksheet = workbook.Sheets[sheetName];
			const jsonData = XLSX.utils.sheet_to_json(worksheet, {header: 1});

			if (jsonData.length > 0 && jsonData.every(Array.isArray)) {
				const keys = this.extractKeys(jsonData as unknown[][]);
				const columns = this.extractColumns(jsonData as unknown[][]);

				columns.forEach((col, index) => {
					const json = this.createJsonObject(keys, jsonData as unknown[][], index);
					this.saveJsonToFile(col, json);
				});
			}
		}
	}

	private extractKeys(jsonData: unknown[][]): string[] {
		return jsonData.map(row => (Array.isArray(row) ? (row[0] as string) : ''));
	}

	private extractColumns(jsonData: unknown[][]): string[] {
		return Array.isArray(jsonData[0]) ? (jsonData[0].slice(1) as string[]) : [];
	}

	private createJsonObject(keys: string[], jsonData: unknown[][], index: number): Record<string, unknown> {
		const json: Record<string, unknown> = {};
		keys.slice(1).forEach((key, rowIndex) => {
			const dataRow = jsonData[rowIndex + 1];
			if (Array.isArray(dataRow)) {
				json[key] = dataRow[index + 1];
			}
		});
		return json;
	}

	private saveJsonToFile(fileName: string, json: object): void {
		const jsonString = JSON.stringify(json, null, 2);
		const blob = new Blob([jsonString], {type: 'application/json'});
		const url = URL.createObjectURL(blob);
		const element = document.createElement('a');
		element.href = url;
		element.download = `${fileName}.json`;
		element.click();
		URL.revokeObjectURL(url);
	}
}
