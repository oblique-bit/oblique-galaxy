import {Component} from '@angular/core';
import {MatButton} from '@angular/material/button';
import {ObButtonModule} from '@oblique/oblique';

@Component({
	selector: 'obg-oblique-galaxy',
	imports: [MatButton, ObButtonModule],
	standalone: true,
	// eslint-disable-next-line @angular-eslint/component-max-inline-declarations
	template: `<p>oblique-galaxy works!</p>
		<button mat-button obButton="primary" type="button">Primary</button>
		<button mat-button obButton="secondary" type="button">Secondary</button>
		<button mat-button obButton="tertiary" type="button">Tertiary</button>`,
	styleUrl: './obg-oblique-galaxy.component.scss'
})
export class ObgObliqueGalaxyComponent {}
