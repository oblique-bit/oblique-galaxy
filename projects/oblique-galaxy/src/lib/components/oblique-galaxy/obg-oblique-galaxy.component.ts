import {Component} from '@angular/core';
import {MatAnchor, MatButton, MatIconButton} from '@angular/material/button';
import {ObButtonModule} from '@oblique/oblique';
import {MatIcon} from '@angular/material/icon';

@Component({
	selector: 'obg-oblique-galaxy',
	standalone: true,
	imports: [MatButton, ObButtonModule, MatIcon, MatIconButton, MatAnchor],
	styleUrl: './obg-oblique-galaxy.component.scss',
	// eslint-disable-next-line @angular-eslint/component-max-inline-declarations
	template: `<p>oblique-galaxy works!</p>
		<button mat-button obButton="primary" type="button">Primary</button>
		<button mat-button obButton="secondary" type="button">Secondary</button>
		<button mat-button obButton="tertiary" type="button">Tertiary</button>
		<h1>test</h1> `
})
export class ObgObliqueGalaxyComponent {}
