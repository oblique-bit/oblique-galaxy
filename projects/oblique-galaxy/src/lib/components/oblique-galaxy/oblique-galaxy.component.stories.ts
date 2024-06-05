import {ObliqueGalaxyComponent} from './oblique-galaxy.component';
import {Meta, StoryObj} from '@storybook/angular'; // More on how to set up stories at: https://storybook.js.org/docs/writing-stories

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ObliqueGalaxyComponent> = {
	title: 'Example/Galaxy',
	component: ObliqueGalaxyComponent,
	tags: ['autodocs']
} as Meta;

export default meta;
type Story = StoryObj<ObliqueGalaxyComponent>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Default: Story = {};
