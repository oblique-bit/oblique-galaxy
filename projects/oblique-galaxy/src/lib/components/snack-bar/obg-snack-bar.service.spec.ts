import {TestBed} from '@angular/core/testing';
import {MatSnackBar} from '@angular/material/snack-bar';
import {ObgSnackBarService} from './obg-snack-bar.service';
import {ObgSnackBarComponent} from './obg-snack-bar.component';
import {ObIAlertType} from '@oblique/oblique';

describe('ObgSnackBarService', () => {
	let service: ObgSnackBarService;
	let snackBarMock: jest.Mocked<MatSnackBar>;

	beforeEach(() => {
		snackBarMock = {
			openFromComponent: jest.fn()
		} as unknown as jest.Mocked<MatSnackBar>;

		TestBed.configureTestingModule({
			providers: [ObgSnackBarService, {provide: MatSnackBar, useValue: snackBarMock}]
		});

		service = TestBed.inject(ObgSnackBarService);
	});

	it('should open snack bar with correct parameters', () => {
		const message = 'Test message';
		const typeAlert: ObIAlertType = 'warning';
		const duration = 3000;
		const horizontalPosition = 'center';
		const verticalPosition = 'top';

		service.openObgSnackBar(message, typeAlert, duration, horizontalPosition, verticalPosition);

		expect(snackBarMock.openFromComponent).toHaveBeenCalledWith(ObgSnackBarComponent, {
			data: {message, typeAlert},
			duration,
			horizontalPosition,
			verticalPosition
		});
	});

	it('should handle empty message', () => {
		const message = '';
		const typeAlert: ObIAlertType = 'info';
		const duration = 2000;
		const horizontalPosition = 'left';
		const verticalPosition = 'bottom';

		service.openObgSnackBar(message, typeAlert, duration, horizontalPosition, verticalPosition);

		expect(snackBarMock.openFromComponent).toHaveBeenCalledWith(ObgSnackBarComponent, {
			data: {message, typeAlert},
			duration,
			horizontalPosition,
			verticalPosition
		});
	});

	it('should handle null message', () => {
		const message = 'mockMessage';
		const typeAlert: ObIAlertType = 'success';
		const duration = 1000;
		const horizontalPosition = 'right';
		const verticalPosition = 'top';

		service.openObgSnackBar(message, typeAlert, duration, horizontalPosition, verticalPosition);

		expect(snackBarMock.openFromComponent).toHaveBeenCalledWith(ObgSnackBarComponent, {
			data: {message, typeAlert},
			duration,
			horizontalPosition,
			verticalPosition
		});
	});

	it('should handle undefined message', () => {
		const message = 'mockMessage';
		const typeAlert: ObIAlertType = 'error';
		const duration = 5000;
		const horizontalPosition = 'center';
		const verticalPosition = 'bottom';

		service.openObgSnackBar(message, typeAlert, duration, horizontalPosition, verticalPosition);

		expect(snackBarMock.openFromComponent).toHaveBeenCalledWith(ObgSnackBarComponent, {
			data: {message, typeAlert},
			duration,
			horizontalPosition,
			verticalPosition
		});
	});
});
