import { expect } from '@storybook/jest'
import { Meta, StoryObj } from '@storybook/react'
import { userEvent, within } from '@storybook/testing-library'
import CUSTOM_VIEWPORTS from 'lib/Viewports'

import Header from '.'

const meta: Meta<typeof Header> = {
	title: 'Header',
	component: Header,
	decorators: [
		(Story) => {
			return (
				<div className='sm:w-[1104px] text-body mx-auto'>
					<Story />
				</div>
			)
		},
	],
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {}

export const MobileMenuOpen: Story = {
	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)

		const mobileMenu = canvas.getByAltText('mobile menu')
		await userEvent.click(mobileMenu)

		const mobileMenuLinks = canvas.getAllByTestId('mobile menu link')

		expect(mobileMenuLinks.length).toBe(5)
	},
	parameters: {
		viewport: {
			defaultViewport: CUSTOM_VIEWPORTS.mobile375.name,
		},
	},
}
