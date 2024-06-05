import {ObgPackagesOutdatedComponent} from './obg-packages-outdated.component'; // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
import {Meta, StoryObj, moduleMetadata} from '@storybook/angular';
import {HttpClientModule} from '@angular/common/http';
import {PackagesOutdatedService} from './packages-outdated.service'; // More on how to set up stories at: https://storybook.js.org/docs/writing-stories

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ObgPackagesOutdatedComponent> = {
	title: 'Example/PackagesOutdated',
	component: ObgPackagesOutdatedComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [HttpClientModule, ObgPackagesOutdatedComponent],
			providers: [PackagesOutdatedService]
		})
	]
} as Meta;

export default meta;
type Story = StoryObj<ObgPackagesOutdatedComponent>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Default: Story = {};
