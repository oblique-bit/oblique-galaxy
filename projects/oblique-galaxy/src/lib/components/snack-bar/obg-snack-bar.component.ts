import {Component, Inject, Input, ViewEncapsulation} from '@angular/core';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
import {ObAlertComponent, ObIAlertType} from '@oblique/oblique';
import {TranslateModule} from '@ngx-translate/core';

export interface SnackBarData {
	message: string;
	typeAlert: ObIAlertType;
}

@Component({
	selector: 'obg-snack-bar',
	standalone: true,
	imports: [ObAlertComponent, TranslateModule],
	templateUrl: './obg-snack-bar.component.html',
	styleUrl: './obg-snack-bar.component.scss',
	encapsulation: ViewEncapsulation.None
})
export class ObgSnackBarComponent {
	@Input() typeAlert: ObIAlertType = 'info';

	constructor(@Inject(MAT_SNACK_BAR_DATA) public data: SnackBarData) {
		// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
		if (data.typeAlert) {
			this.typeAlert = data.typeAlert;
		}
	}
}
