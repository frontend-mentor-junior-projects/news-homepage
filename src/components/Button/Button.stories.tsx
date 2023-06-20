import { Meta, StoryObj } from '@storybook/react'

import Button from '.'

const meta: Meta<typeof Button> = {
	title: 'Button',
	component: Button,
	args: {
		children: 'Read More',
	},
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {}
