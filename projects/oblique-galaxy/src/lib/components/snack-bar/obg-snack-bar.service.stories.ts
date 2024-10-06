import {Meta, StoryObj, moduleMetadata} from '@storybook/angular';
import {MAT_SNACK_BAR_DATA, MatSnackBarHorizontalPosition, MatSnackBarModule, MatSnackBarVerticalPosition} from '@angular/material/snack-bar';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButton, MatButtonModule} from '@angular/material/button';
import {ObgSnackBarService} from './obg-snack-bar.service';
import {ObButtonDirective, ObIAlertType} from '@oblique/oblique';
import {Component, Input} from '@angular/core';
import {TranslateModule} from '@ngx-translate/core';
import {HttpClientTestingModule} from '@angular/common/http/testing';

@Component({
	selector: 'app-snack-bar-button',
	standalone: true,
	imports: [MatButton, ObButtonDirective],
	// eslint-disable-next-line @angular-eslint/component-max-inline-declarations
	template: ` <button type="button" mat-button obButton="primary" (click)="openSnackBar()">Ouvrir SnackBar</button>`
})
export class SnackBarButtonComponent {
	@Input() message!: string;
	@Input() typeAlert!: ObIAlertType;
	@Input() duration!: number;
	@Input() horizontalPosition!: MatSnackBarHorizontalPosition;
	@Input() verticalPosition!: MatSnackBarVerticalPosition;

	constructor(private readonly snackBarService: ObgSnackBarService) {}

	openSnackBar(): void {
		this.snackBarService.openObgSnackBar(this.message, this.typeAlert, this.duration, this.horizontalPosition, this.verticalPosition);
	}
}

const meta: Meta<ObgSnackBarService> = {
	title: 'Services/ObgSnackBar',
	component: ObgSnackBarService,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
Ce composant a été créé par [@punix81](https://github.com/punix81).

Le composant ObgSnackBar est un outil pratique pour les développeurs, affichant des messages d'alerte temporaires à l'utilisateur. Il améliore l'expérience utilisateur en fournissant des retours visuels immédiats.
`
			}
		}
	},
	decorators: [
		moduleMetadata({
			imports: [MatSnackBarModule, BrowserAnimationsModule, MatButtonModule, SnackBarButtonComponent, TranslateModule.forRoot(), HttpClientTestingModule],
			providers: [ObgSnackBarService, {provide: MAT_SNACK_BAR_DATA, useValue: {}}]
		})
	],
	argTypes: {
		message: {control: 'text'},
		typeAlert: {control: 'select', options: ['success', 'info', 'warning', 'error']},
		duration: {control: 'number'},
		horizontalPosition: {control: 'select', options: ['start', 'center', 'end', 'left', 'right']},
		verticalPosition: {control: 'select', options: ['top', 'bottom']}
	}
} as Meta;

export default meta;
type Story = StoryObj<ObgSnackBarService>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Default: Story = {
	render: args => ({
		props: {
			...args
		},
		template: `<app-snack-bar-button [message]="message" [typeAlert]="typeAlert" [duration]="duration" [horizontalPosition]="horizontalPosition" [verticalPosition]="verticalPosition"></app-snack-bar-button>`
	})
};
