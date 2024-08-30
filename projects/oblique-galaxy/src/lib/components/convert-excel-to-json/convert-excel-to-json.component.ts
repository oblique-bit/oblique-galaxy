import {Component} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormField, MatLabel} from '@angular/material/form-field';
import {MatOption, MatSelect} from '@angular/material/select';
import {MatInput} from '@angular/material/input';
import {MatButton} from '@angular/material/button';
import {ObButtonDirective, ObDropZoneComponent, ObFileInfoComponent, ObFileUploadComponent, ObIUploadEvent} from '@oblique/oblique';
import {ConvertExcelToJsonService} from './convert-excel-to-json.service';

@Component({
	selector: 'obg-convert-excel-to-json',
	standalone: true,
	imports: [
		MatFormField,
		MatLabel,
		MatSelect,
		MatOption,
		ReactiveFormsModule,
		MatInput,
		MatButton,
		ObButtonDirective,
		ObFileUploadComponent,
		ObFileInfoComponent,
		ObDropZoneComponent
	],
	templateUrl: './convert-excel-to-json.component.html'
})
export class ConvertExcelToJsonComponent {
	files: File[] = [];

	constructor(private readonly convertExcelToJsonService: ConvertExcelToJsonService) {}

	onFileSelected(event: ObIUploadEvent): void {
		const {files} = event;
		if (files.length > 0) {
			// eslint-disable-next-line @typescript-eslint/prefer-destructuring
			const file = files[0];
			if (file instanceof File) {
				this.convertExcelToJsonService.processFile(file);
			}
		}
	}
}
