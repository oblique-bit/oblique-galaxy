import {ObgObliqueGalaxyComponent} from './obg-oblique-galaxy.component';
import {Meta, StoryObj, applicationConfig, moduleMetadata} from '@storybook/angular';
import {provideAnimations} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {ObliqueModule} from '@oblique/oblique';
import {provideHttpClient} from '@angular/common/http';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ObgObliqueGalaxyComponent> = {
	title: 'Example/Galaxy',
	component: ObgObliqueGalaxyComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [MatButtonModule, ObliqueModule]
		}),
		applicationConfig({
			providers: [provideAnimations(), provideHttpClient()]
		})
	]
} as Meta;

export default meta;
type Story = StoryObj<ObgObliqueGalaxyComponent>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Default: Story = {
	args: {
		primary: 'This is the primary button',
		secondary: 'This is the secondary button',
		tertiary: 'This is the tertiary button'
	}
};
