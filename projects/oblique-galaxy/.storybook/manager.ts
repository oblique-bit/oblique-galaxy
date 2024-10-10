// .storybook/manager.ts
import {addons} from '@storybook/manager-api';
import {create} from '@storybook/theming';

const theme = create({
	base: 'light', // or 'dark'
	brandTitle: 'Oblique Galaxy Storybook',
	brandUrl: 'https://oblique-bit.github.io/oblique-galaxy/',
	brandImage: 'logo/Oblique-galaxy-text-logo2.png',
	barTextColor: '#0b0909' // Set the text color to white
});

addons.setConfig({
	theme
});
