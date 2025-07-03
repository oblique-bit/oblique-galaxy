import {Component, input} from '@angular/core';
import {MatFormFieldModule, MatLabel} from '@angular/material/form-field';
import {FormInput} from './form-input';
import {CommonModule} from '@angular/common';
import {CdkTextareaAutosize} from '@angular/cdk/text-field';
import {MatInput} from '@angular/material/input';
import {TranslatePipe} from '@ngx-translate/core';

const DEFAULT_MAXLENGTH = 1000;

@Component({
	selector: 'obg-textarea-input',
	imports: [CommonModule, MatLabel, MatFormFieldModule, CdkTextareaAutosize, MatInput, TranslatePipe],
	standalone: true,
	templateUrl: './textarea-input.component.html',
	styleUrl: './textarea-input.component.scss'
})
export class TextareaInputComponent extends FormInput<string> {
	readonly label = input('');
	readonly placeholder = input('');
	readonly disabled = input<boolean>(false);
	readonly maxLength = input<number>(DEFAULT_MAXLENGTH);
	readonly style = input<'outline' | 'fill'>('outline');
	readonly id = input('');

	onTextChange(event: Event): void {
		const target = event.target as HTMLInputElement;
		const newValue = target.value;
		this.writeValue(newValue);
	}
}
