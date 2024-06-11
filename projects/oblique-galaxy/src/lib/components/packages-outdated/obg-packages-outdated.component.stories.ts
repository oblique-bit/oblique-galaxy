import {ObgPackagesOutdatedComponent} from './obg-packages-outdated.component'; // More on how to set up stories at: https://storybook.js.org/docs/writing-stories
import {Meta, StoryObj, moduleMetadata} from '@storybook/angular';
import {HttpClientModule} from '@angular/common/http';
import {PackagesOutdatedService} from './packages-outdated.service';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {ObliqueModule} from '@oblique/oblique';
import {of} from 'rxjs';
import {Packages} from './packages.model'; // eslint-disable-next-line @typescript-eslint/no-magic-numbers,@typescript-eslint/no-unsafe-assignment

// eslint-disable-next-line @typescript-eslint/no-magic-numbers,@typescript-eslint/no-unsafe-assignment
const mockPackages: Packages[] = [
	{
		name: 'mock-@angular-devkit/build-angular',
		current: '17.0.3',
		wanted: '17.0.3',
		latest: '18.0.0-beta.2',
		versionDiff: '0'
	},
	{
		name: 'mock-eslint',
		current: '8.57.0',
		wanted: '8.57.0',
		latest: '9.4.0',
		versionDiff: '0'
	},
	{
		name: 'mock-ng-packagr',
		current: '17.3.0',
		wanted: '17.3.0',
		latest: '18.0.0',
		versionDiff: '0'
	},
	{
		name: 'mock-prettier',
		current: '4.3.2',
		wanted: '4.3.2',
		latest: '4.3.2',
		versionDiff: '0'
	},
	{
		name: 'mock-tslib',
		current: '2.6.2',
		wanted: '2.6.3',
		latest: '2.6.3',
		versionDiff: '0'
	}
];

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
const meta: Meta<ObgPackagesOutdatedComponent> = {
	title: 'Example/PackagesOutdated',
	component: ObgPackagesOutdatedComponent,
	tags: ['autodocs'],
	decorators: [
		moduleMetadata({
			imports: [HttpClientModule, ObgPackagesOutdatedComponent, BrowserAnimationsModule, MatButtonModule, ObliqueModule],
			providers: [
				{
					provide: PackagesOutdatedService,
					useValue: {
						getOutdatedPackages: () => of(mockPackages),
						getLocalPackages: () => of(mockPackages) // Mock getLocalPackages method
					}
				}
			]
		})
	]
} as Meta;

export default meta;
type Story = StoryObj<ObgPackagesOutdatedComponent>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Default: Story = {
	argTypes: {
		packageStatus: {
			description: 'Array of package status',
			table: {
				type: {
					summary: 'Packages[]',
					detail: `Array of Packages objects. Each object has the following properties:
          - name: string
          - current: string
          - wanted: string
          - latest: string
          - versionDiff: string`
				}
			}
		}
	},
	args: {
		packageStatus: mockPackages
	}
};
