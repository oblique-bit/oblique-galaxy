import {Component} from '@angular/core';
import {MatAnchor, MatButton} from '@angular/material/button';
import {ObAlertComponent, ObButtonDirective, ObExternalLinkDirective} from '@oblique/oblique';
import {MatCard, MatCardActions, MatCardContent, MatCardHeader, MatCardTitle} from '@angular/material/card';
import {ReverseComponent} from 'oblique-galaxy';

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
		ReverseComponent,
		ObAlertComponent,
		MatButton
	]
})
export class HomeComponent {
	cards = [
		{title: 'Card 1', component: '<lib-reverse />', version: '1.0.0'},
		{title: 'Card 2', component: 'Component2', version: '1.1.0'},
		{title: 'Card 3', component: 'Component2', version: '1.1.0'}
		// Ajoutez autant de cartes que nécessaire
	];

	// constructor(private injector: Injector, private cfr: ComponentFactoryResolver) { }
}
