import {ComponentFixture, TestBed} from '@angular/core/testing';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {TranslateDirective, TranslatePipe} from '@ngx-translate/core';
import {ObgSnackBarComponent, SnackBarData} from './obg-snack-bar.component';

describe('SnackBarComponent', () => {
	let component: ObgSnackBarComponent;
	let fixture: ComponentFixture<ObgSnackBarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ObgSnackBarComponent, TranslatePipe, TranslateDirective],
			providers: [{provide: MAT_SNACK_BAR_DATA, useValue: {message: 'Test message', typeAlert: 'info'}}]
		}).compileComponents();

		fixture = TestBed.createComponent(ObgSnackBarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should set the correct typeAlert', () => {
		expect(component.typeAlert).toBe('info');
	});

	it('should have default typeAlert as "info"', () => {
		component = new ObgSnackBarComponent({message: 'Test message'} as SnackBarData);
		expect(component.typeAlert).toBe('info');
	});
});
