import {Component, Optional, Self, input} from '@angular/core';
import {NgControl} from '@angular/forms';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {ObFormFieldDirective} from '@oblique/oblique';
import {FormInput} from './form-input';
import {CommonModule} from '@angular/common';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {MatInput} from '@angular/material/input';
import {TranslateModule} from '@ngx-translate/core';

const DEFAULT_MAXLENGTH = 1000;

@Component({
	selector: 'obg-textarea-input',
	standalone: true,
	imports: [CommonModule, MatLabel, ObFormFieldDirective, MatFormFieldModule, CdkTextareaAutosize, MatInput, TranslateModule],
	templateUrl: './textarea-input.component.html',
	styleUrl: './textarea-input.component.scss'
})
export class TextareaInputComponent extends FormInput<string> {
	readonly label = input('');
	readonly placeholder = input('');
	readonly disabled = input<boolean | undefined>(undefined);
	readonly maxLength = input<number>(DEFAULT_MAXLENGTH);
	readonly style = input<'outline' | 'fill'>('outline');
	readonly id = input('');

	constructor(@Optional() @Self() public ngControl: NgControl) {
		super();
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
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
