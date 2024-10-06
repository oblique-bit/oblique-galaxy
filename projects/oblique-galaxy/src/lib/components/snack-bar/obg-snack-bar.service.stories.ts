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
	@Input() message = 'Message par défaut';
	@Input() typeAlert: ObIAlertType = 'warning';
	@Input() duration = 3000;
	@Input() horizontalPosition: MatSnackBarHorizontalPosition = 'center';
	@Input() verticalPosition: MatSnackBarVerticalPosition = 'top';

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
This component has been created by [@punix81](https://github.com/punix81).

The ObgSnackBarService is an Angular service based on the Angular Material SnackBar component. It allows you to display customizable snack-bar notifications using MatSnackBar, while incorporating alert elements based on the obAlert component, which can be found in the official Oblique documentation.

Key Features:
Fully Customizable: You can customize the content of the SnackBar with messages and alert types (ObIAlertType), using the obAlert configuration provided by Oblique.
Configurable Position: The service allows you to configure the position of the SnackBar on the screen, both horizontally (start, center, end, left, right) and vertically (top, bottom).
Customizable Duration: You can adjust the display duration of the SnackBar according to your needs.
Example of Integration in a TypeScript Page
Here’s an example that shows how to integrate the ObgSnackBarService into an Angular page or component:


    // Open a customized SnackBar
    this.snackBarService.openObgSnackBar(
      message,
      alertType,
      duration,
      horizontalPosition,
      verticalPosition
    );

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
	args: {
		message: 'Your alert message here',
		typeAlert: 'warning',
		duration: 3000,
		horizontalPosition: 'center',
		verticalPosition: 'top'
	},
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
