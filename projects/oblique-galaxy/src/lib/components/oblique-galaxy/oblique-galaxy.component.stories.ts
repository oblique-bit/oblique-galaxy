import {ObliqueGalaxyComponent} from './oblique-galaxy.component';
import {Meta, StoryObj, moduleMetadata} from '@storybook/angular';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {ObliqueModule} from '@oblique/oblique'; // More on how to set up stories at: https://storybook.js.org/docs/writing-stories

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ObliqueGalaxyComponent> = {
	title: 'Example/Galaxy',
	component: ObliqueGalaxyComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [HttpClientModule, BrowserAnimationsModule, MatButtonModule, ObliqueModule]
		})
	]
} as Meta;

export default meta;
type Story = StoryObj<ObliqueGalaxyComponent>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Default: Story = {};
