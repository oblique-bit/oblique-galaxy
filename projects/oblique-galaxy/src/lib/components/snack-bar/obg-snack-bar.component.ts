import {Component, Inject, ViewEncapsulation, inject, input, signal} from '@angular/core';
import {MAT_SNACK_BAR_DATA, MatSnackBarRef} from '@angular/material/snack-bar';
import {ObAlertComponent, ObIAlertType} from '@oblique/oblique';

export interface SnackBarData {
	message: string;
	typeAlert: ObIAlertType;
}

@Component({
	selector: 'obg-snack-bar',
	standalone: true,
	imports: [ObAlertComponent],
	templateUrl: './obg-snack-bar.component.html',
	styleUrl: './obg-snack-bar.component.scss',
	encapsulation: ViewEncapsulation.None
})
export class ObgSnackBarComponent {
	readonly typeAlert = input<ObIAlertType>('info');
	readonly typeAlertSignal = signal<ObIAlertType>(this.typeAlert());
	snackBarRef = inject(MatSnackBarRef);

	constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData) {
		this.typeAlertSignal.set(data.typeAlert);
	}
}
