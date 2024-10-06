import {Injectable, inject} from '@angular/core';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {ObgSnackBarComponent, SnackBarData} from './obg-snack-bar.component';
import {ObIAlertType} from '@oblique/oblique';

@Injectable({
	providedIn: 'root'
})
export class ObgSnackBarService {
	snackBar = inject(MatSnackBar);

	// eslint-disable-next-line @typescript-eslint/max-params
	public openObgSnackBar(
		message: string,
		typeAlert: ObIAlertType,
		duration: number,
		horizontalPosition: MatSnackBarHorizontalPosition,
		verticalPosition: MatSnackBarVerticalPosition
	): void {
		this.snackBar.openFromComponent(ObgSnackBarComponent, {
			data: {message, typeAlert} as SnackBarData,
			duration,
			horizontalPosition,
			verticalPosition
		});
	}
}
