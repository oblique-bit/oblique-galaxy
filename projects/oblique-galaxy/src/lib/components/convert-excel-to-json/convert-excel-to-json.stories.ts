import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {ObButtonDirective, ObDropZoneComponent, ObFileInfoComponent, ObFileUploadComponent, ObIconModule, multiTranslateLoader} from '@oblique/oblique';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {Meta, StoryFn, moduleMetadata} from '@storybook/angular';
import {ConvertExcelToJsonComponent} from './convert-excel-to-json.component';
import {ConvertExcelToJsonService} from './convert-excel-to-json.service';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientModule} from '@angular/common/http';

export default {
	title: 'Components/NgxTranslateTools/ConvertExcelToJson',
	component: ConvertExcelToJsonComponent,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
This component has been created by [@punix81](https://github.com/punix81).

This component is an Oblique service that retrieves a translation Excel file, splits it into one or more downloadable JSON files. For generating the JSON files, this service uses the xlsx library, ensuring precise and fast data conversion.
`
			}
		}
	},
	decorators: [
		moduleMetadata({
			imports: [
				ReactiveFormsModule,
				MatFormFieldModule,
				MatSelectModule,
				MatInputModule,
				MatButtonModule,
				ObButtonDirective,
				ObFileUploadComponent,
				ObFileInfoComponent,
				ObDropZoneComponent,
				ObIconModule.forRoot(),
				HttpClientModule,
				TranslateModule.forRoot(multiTranslateLoader())
			]
		})
	]
} as Meta;

const template: StoryFn<ConvertExcelToJsonComponent> = (args: Partial<ConvertExcelToJsonService>) => ({
	props: {
		...args
	}
});

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Default = template.bind({});
Default.args = {
	files: []
};
