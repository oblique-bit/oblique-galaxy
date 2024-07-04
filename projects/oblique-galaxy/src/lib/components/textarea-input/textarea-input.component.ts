import {Component, Input, Optional, Self} from '@angular/core';
import {NgControl} from '@angular/forms';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {ObFormFieldDirective} from '@oblique/oblique';
import {FormInput} from './form-input';
import {CommonModule, NgIf} from '@angular/common';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {MatInput} from '@angular/material/input';
import {TranslateModule} from '@ngx-translate/core';

const DEFAULT_MAXLENGTH = 1000;

@Component({
	selector: 'obg-textarea-input',
	standalone: true,
	imports: [
		CommonModule, // Include CommonModule here
		MatLabel,
		ObFormFieldDirective,
		MatFormFieldModule,
		NgIf,
		CdkTextareaAutosize,
		MatInput,
		TranslateModule
	],
	templateUrl: './textarea-input.component.html',
	styleUrl: './textarea-input.component.scss'
})
export class TextareaInputComponent extends FormInput<string> {
	@Input() label = '';
	@Input() placeholder = '';
	@Input() disabled?: boolean;
	@Input() maxLength = DEFAULT_MAXLENGTH;
	@Input() style: 'outline' | 'fill' = 'outline';
	@Input() id = '';

	constructor(@Optional() @Self() public ngControl: NgControl) {
		super();
		if (this.ngControl !== null) {
			this.ngControl.valueAccessor = this;
		}
	}

	onTextChange(event: Event): void {
		const target = event.target as HTMLInputElement;
		const newValue = target.value;
		this.writeValue(newValue);
	}
}
