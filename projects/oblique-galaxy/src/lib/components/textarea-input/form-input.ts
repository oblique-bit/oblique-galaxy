import {ControlValueAccessor} from '@angular/forms';

export class FormInput<T> implements ControlValueAccessor {
	value?: T;

	touched = false;
	isDisabled = false;

	onChange: (value: T) => void = (/* value */) => {
		// Intentionally left blank or perform a no-operation
	};
	onTouched: () => void = () => {
		// Intentionally left blank or perform a no-operation
	};

	writeValue(value: T): void {
		this.value = value;
		this.onChange(value);
		this.markAsTouched();
	}

	registerOnChange(onChange: (value: T) => void): void {
		this.onChange = onChange;
	}

	registerOnTouched(onTouched: () => void): void {
		this.onTouched = onTouched;
	}

	markAsTouched(): void {
		if (!this.touched) {
			this.onTouched();
			this.touched = true;
		}
	}

	setDisabledState(disabled: boolean): void {
		this.isDisabled = disabled;
	}
}
