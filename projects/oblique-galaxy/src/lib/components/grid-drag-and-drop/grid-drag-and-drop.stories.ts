import {Meta, StoryObj, applicationConfig, moduleMetadata} from '@storybook/angular';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {ObliqueModule} from '@oblique/oblique';
import {GridData, ObgGridDragAndDropComponent} from './obg-grid-drag-and-drop.component';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';

const gridData: GridData<string> = {
	columnNames: ['test 1', 'Column 2', 'Column 3', 'Column 4'],
	rowsData: [
		{
			title: 'Row 1',
			items: [
				['1t1', '1t1_2'],
				['1t2', '1t2_2'],
				['1t3', '1t3_2'],
				['1t3', '1t3_2']
			]
		},
		{
			title: 'Row 2',
			items: [
				['2t1', 't1_2'],
				['2t2', 't2_2'],
				['2t3', 't3_2'],
				['2t4', 't4_2', 'eaedas4', 'asdf4', 'asdfasd4']
			]
		},
		{
			title: 'Row 3',
			items: [
				['3t1', 't1_2'],
				['3t2', 't2_2'],
				['3t3', 't3_2'],
				['3t4', 't4_2', 'eaedas4', 'asdf4', 'asdfasd4']
			]
		},
		{
			title: 'Row 4',
			items: [
				['4t1', 't1_2'],
				['4t2', 't2_2'],
				['4t3', 't3_2'],
				['4t4', 't4_2', 'eaedas4', 'asdf4', 'asdfasd4']
			]
		},
		{
			title: 'Row 5',
			items: [
				['5t1', 't1_2'],
				['5t2', 't2_2'],
				['5t3', 't3_2'],
				['5t4', 't4_2', 'eaedas4', 'asdf4', 'asdfasd4']
			]
		}
	]
};
const showGridHeader = true;

const meta: Meta<ObgGridDragAndDropComponent<string>> = {
	title: 'Components/GridDragAndDrop',
	component: ObgGridDragAndDropComponent,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
This component has been created by [@punix81](https://github.com/punix81).

The ObgGridDragAndDropComponent is a standalone Angular component that allows creating an interactive grid with drag-and-drop functionality. It uses Angular CDK's drag-and-drop modules to enable users to rearrange items within the grid.
`
			}
		}
	},
	decorators: [
		moduleMetadata({
			imports: [ObgGridDragAndDropComponent, BrowserAnimationsModule, MatButtonModule, ObliqueModule]
		}),
		applicationConfig({
			providers: [provideHttpClient(withInterceptorsFromDi())]
		})
	]
};

export default meta;
type Story = StoryObj<ObgGridDragAndDropComponent<string>>;

// eslint-disable-next-line @typescript-eslint/naming-convention
export const Default: Story = {
	args: {
		gridData,
		showGridHeader,
		gridDataChange: (gridDataTmp: GridData<string>) => {
			console.warn('Grid data changed:', gridDataTmp);
		}
	}
};
