import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material/snack-bar';
import { TranslateDirective, TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { ObgSnackBarComponent } from './obg-snack-bar.component';

describe('SnackBarComponent', () => {
	let component: ObgSnackBarComponent;
	let fixture: ComponentFixture<ObgSnackBarComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [ObgSnackBarComponent, TranslatePipe, TranslateDirective, TranslateModule.forRoot()],
			providers: [{ provide: MatSnackBarRef, useValue: { dismiss: () => { } } }, { provide: MAT_SNACK_BAR_DATA, useValue: { message: 'Test message', typeAlert: 'info' } }]
		}).compileComponents();

		fixture = TestBed.createComponent(ObgSnackBarComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	it('should set the correct typeAlert', () => {
		expect(component.typeAlert()).toBe('info');
	});

	it('should have default typeAlert as "info"', () => {
		expect(component.typeAlert()).toBe('info');
	});
});
