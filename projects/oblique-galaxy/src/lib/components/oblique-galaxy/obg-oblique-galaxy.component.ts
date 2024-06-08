import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {ObButtonModule} from '@oblique/oblique';

@Component({
	selector: 'obg-oblique-galaxy',
	standalone: true,
	imports: [MatButton, ObButtonModule],
	// eslint-disable-next-line @angular-eslint/component-max-inline-declarations
	template: `<p>oblique-galaxy works!</p>
		<button mat-button obButton="primary" type="button">Primary</button>
		<button mat-button obButton="secondary" type="button">Secondary</button>
		<button mat-button obButton="tertiary" type="button">Tertiary</button>`
})
export class ObgObliqueGalaxyComponent {}
