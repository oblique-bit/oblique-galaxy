import { Meta, StoryObj, moduleMetadata, StoryFn } from '@storybook/angular';
import { FeedbackButtonComponent } from './feedback-button.component';
import { FeedbackFormComponent } from '../feedback-form/feedback-form.component';
import { CollectorService } from '../collector/collector.service';

export default {
	title: 'Components/FeedbackButton',
	component: FeedbackButtonComponent,
	tags: ['autodocs'],
	parameters: {
		docs: {
			description: {
				component: `
This component has been created by [@punix81](https://github.com/punix81).

This component is a Oblique service that fetches translation JSON files, extracts the data, and converts it into a downloadable Excel file. It handles multiple files in parallel and uses the xlsx library for Excel file generation
`
			}
		}
	},
	decorators: [
		moduleMetadata({
			imports: [FeedbackButtonComponent, FeedbackFormComponent],
			providers: [CollectorService],
		}),
	],
	argTypes: {
		collectorId: { control: 'text' },
	},
} as Meta<FeedbackButtonComponent>;

const template: StoryFn<FeedbackButtonComponent> = (args: Partial<FeedbackButtonComponent>) => ({
	props: args,
});

export const Default = template.bind({});
Default.args = {
	collectorId: '6dfd32b3',
};
