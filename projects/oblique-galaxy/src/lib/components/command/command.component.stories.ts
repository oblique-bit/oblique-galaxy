import {Meta, StoryObj, applicationConfig, moduleMetadata} from '@storybook/angular';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {CommandComponent} from './command.component';
import {ObIconModule} from '@oblique/oblique';
import {provideAnimations} from '@angular/platform-browser/animations';
import {provideHttpClient} from '@angular/common/http';

const meta: Meta<CommandComponent> = {
	title: 'Components/Command',
	component: CommandComponent,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
This component has been created by [@gillerr](https://github.com/gillerr).

The Command component is a CopyToClipboard designed to provide a simple functionality for copying text to the clipboard. It allows users to copy either projected content or text provided through an input into their clipboard with a single click. The component integrates Angular Material and CDK to enhance the user experience, particularly through the use of icons, tooltips, and animations.
`
			}
		}
	},
	decorators: [
		moduleMetadata({
			imports: [MatIconModule, MatTooltipModule, ObIconModule.forRoot(), CommandComponent]
		}),
		applicationConfig({
			providers: [provideAnimations(), provideHttpClient()]
		})
	]
};

export default meta;
type Story = StoryObj<CommandComponent>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Default: Story = {
	render: () => ({
		template: `<obg-command>a text to copy to the clipboard</obg-command>`
	})
};
