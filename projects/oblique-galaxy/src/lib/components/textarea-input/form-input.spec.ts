import {FormInput} from './form-input';

describe('FormInput', () => {
	let formInput: FormInput<string>;

	beforeEach(() => {
		formInput = new FormInput<string>();
	});

	it('should create an instance', () => {
		expect(formInput).toBeTruthy();
	});

	it('should set value', () => {
		formInput.writeValue('test value');
		expect(formInput.value).toBe('test value');
	});

	it('should mark as touched when value is written', () => {
		formInput.writeValue('test');
		expect(formInput.touched).toBeTruthy();
	});

	it('should call onChange when value is changed', () => {
		let changedValue = null;
		formInput.registerOnChange(value => (changedValue = value));
		formInput.writeValue('new value');
		expect(changedValue).toBe('new value');
	});

	it('should not mark as touched on new instance', () => {
		expect(formInput.touched).toBeFalsy();
	});

	it('should call onTouched when marked as touched', () => {
		let wasTouched = false;
		formInput.registerOnTouched(() => (wasTouched = true));
		formInput.markAsTouched();
		expect(wasTouched).toBeTruthy();
	});

	it('should set disabled state', () => {
		formInput.setDisabledState(true);
		expect(formInput.isDisabled).toBeTruthy();
	});
});
