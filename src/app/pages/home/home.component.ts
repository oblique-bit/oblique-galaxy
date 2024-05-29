import {Component} from '@angular/core';
import {MatAnchor, MatButton} from '@angular/material/button';
import {ObAlertComponent, ObButtonDirective, ObExternalLinkDirective} from '@oblique/oblique';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {ObgPackagesOutdatedComponent} from 'oblique-galaxy';

@Component({
	selector: 'pwa-app-home',
	templateUrl: './home.component.html',
	styleUrl: './home.component.scss',
	standalone: true,
	imports: [
		MatCard,
		MatCardHeader,
		MatCardTitle,
		MatCardContent,
		MatCardActions,
		ObExternalLinkDirective,
		MatAnchor,
		ObButtonDirective,
		ObAlertComponent,
		ObgPackagesOutdatedComponent,
		MatButton
	]
})
export class HomeComponent {}
