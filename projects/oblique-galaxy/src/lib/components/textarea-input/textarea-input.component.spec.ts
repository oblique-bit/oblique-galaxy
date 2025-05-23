import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TextareaInputComponent } from './textarea-input.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'translate' })
class TranslatePipeStub implements PipeTransform {
  transform(value: string): string {
    return value; // or 'Mock translation' if you prefer
  }
}

describe('TextareaInputComponent', () => {
	let component: TextareaInputComponent;
	let fixture: ComponentFixture<TextareaInputComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [BrowserAnimationsModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, TranslateModule.forRoot(), TranslatePipeStub], 
		}).compileComponents();

		fixture = TestBed.createComponent(TextareaInputComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should accept label @Input', () => {
		const label = 'Test Label';
		fixture.componentRef.setInput('label', label);
		fixture.detectChanges();
		expect(component.label()).toBe(label);
	});

	it('should accept placeholder @Input', () => {
		const placeholder = 'Test Placeholder';
		fixture.componentRef.setInput('placeholder', placeholder);
		fixture.detectChanges();
		expect(component.placeholder()).toBe(placeholder);
	});

	it('should accept disabled @Input', () => {
		fixture.componentRef.setInput('disabled', true);
		fixture.detectChanges();
		expect(component.disabled()).toBe(true);
	});

	it('should have default maxLength @Input', () => {
		expect(component.maxLength()).toBe(1000);
	});

	it('should accept maxLength @Input', () => {
		const maxLength = 500;
		fixture.componentRef.setInput('maxLength', maxLength)
		fixture.detectChanges();
		expect(component.maxLength()).toBe(maxLength);
	});

	it('should have default style @Input', () => {
		expect(component.style()).toBe('outline');
	});

	it('should accept style @Input', () => {
		const style = 'fill';
		fixture.componentRef.setInput('style', style)
		fixture.detectChanges();
		expect(component.style()).toBe(style);
	});

	it('should have undefined id @Input by default', () => {
		expect(component.id()).toBe('');
	});

	it('should accept id @Input', () => {
		const id = 'test-id';
		fixture.componentRef.setInput('id', id)
		fixture.detectChanges();
		expect(component.id()).toBe(id);
	});
});
