import 'tailwindcss/tailwind.css'
import type { Preview } from '@storybook/react'

import { withRouter } from 'storybook-addon-react-router-v6'

import CUSTOM_VIEWPORTS from './lib/Viewports'

const preview: Preview = {
	parameters: {
		actions: { argTypesRegex: '^on[A-Z].*' },
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/,
			},
		},
		options: {
			storySort: (a, b) =>
				a.id === b.id
					? 0
					: a.id.localeCompare(b.id, undefined, { numeric: true }),
		},
		viewport: {
			viewports: CUSTOM_VIEWPORTS,
		},
	},
	decorators: [withRouter],
}

export default preview
