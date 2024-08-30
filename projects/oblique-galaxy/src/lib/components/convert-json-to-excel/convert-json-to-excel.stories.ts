import {Meta, StoryFn, moduleMetadata} from '@storybook/angular';
import {FormControl, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ConvertJsonToExcelComponent} from './convert-json-to-excel.component';
import {ConvertJsonToExcelService} from './convert-json-to-excel.service';

export default {
	title: 'Components/NgxTranslateTools/ConvertJsonToExcel',
	component: ConvertJsonToExcelComponent,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
This component has been created by [@punix81](https://github.com/punix81).

This component is a Oblique service that fetches translation JSON files, extracts the data, and converts it into a downloadable Excel file. It handles multiple files in parallel and uses the xlsx library for Excel file generation

`
			}
		}
	},
	decorators: [
		moduleMetadata({
			imports: [ConvertJsonToExcelComponent, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule, BrowserAnimationsModule]
		})
	]
} as Meta<ConvertJsonToExcelComponent>;

const template: StoryFn<ConvertJsonToExcelComponent> = (args: Partial<ConvertJsonToExcelComponent>) => ({
	props: {
		...args,
		onClickExportAsExcelFIle: () => {
			const mockService = new ConvertJsonToExcelService();
			mockService.convertJsonToExcel(['en', 'de'], 'mockPath/', 'mockFileName.xlsx');
		}
	}
});

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Default = template.bind({});
Default.args = {
	languages: [
		{lang: 'English', code: 'en'},
		{lang: 'German', code: 'de'},
		{lang: 'French', code: 'fr'}
	],
	selectedLanguages: new FormControl(['en', 'de']),
	jsonsPath: new FormControl('assets/i18n/')
};
