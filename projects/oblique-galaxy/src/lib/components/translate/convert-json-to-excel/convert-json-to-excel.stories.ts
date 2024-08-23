import {Meta, StoryObj, moduleMetadata} from '@storybook/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {HttpClientModule} from '@angular/common/http';
import {ConvertJsonToExcelComponent} from './convert-json-to-excel.component';
import {ConvertJsonToExcelService} from './convert-json-to-excel.service';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ConvertJsonToExcelComponent> = {
	title: 'Components/TranslateTools/ConvertJsonToExcel',
	component: ConvertJsonToExcelComponent,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
This component has been created by [@punix81](https://github.com/punix81).

The TextAreaCounter component is a handy tool for developers, displaying the number of characters remaining in a text area (textarea) in real time. Ideal for forms and text entries requiring character limits, it offers an enhanced user experience by providing immediate visual feedback.
`
			}
		}
	},
	decorators: [
		moduleMetadata({
			imports: [BrowserAnimationsModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, HttpClientModule],
			providers: [ConvertJsonToExcelService]
		})
	],
	args: {
		label: 'Default Label',
		placeholder: 'Enter text here...',
		disabled: false,
		maxLength: 1000,
		style: 'outline',
		id: 'textarea-input-default'
	}
} as Meta;

export default meta;
type Story = StoryObj<ConvertJsonToExcelComponent>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Default: Story = {
	argTypes: {}
};
