import { Meta, StoryObj } from '@storybook/react'
import samples from 'services/News/samples'

import FeaturedArticle from '.'

const meta: Meta<typeof FeaturedArticle> = {
	title: 'Featured Article',
	component: FeaturedArticle,
	args: {
		article: samples.FEATURED_ARTICLE,
	},
	decorators: [
		(Story) => {
			return (
				<div className='sm:grid sm:grid-cols-3 sm:w-[1104px] sm:gap-12 text-body mx-auto'>
					<Story />
				</div>
			)
		},
	],
}

export default meta
type Story = StoryObj<typeof FeaturedArticle>

export const Default: Story = {}
