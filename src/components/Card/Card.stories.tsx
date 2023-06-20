import { Meta, StoryObj } from '@storybook/react'
import samples from 'services/News/samples'

import Card from '.'

const meta: Meta<typeof Card> = {
	title: 'Card',
	component: Card,
	args: {
		label: '01',
		article: samples.FEATURED_ARTICLES[0],
	},
}

export default meta
type Story = StoryObj<typeof Card>

export const FeaturedArticleCard: Story = {
	args: {
		type: 'featured',
	},
}

export const NewArticleCard: Story = {
	args: {
		type: 'new',
	},
	decorators: [
		(Story) => {
			return (
				<div className='bg-neutral-400 w-[344px] px-4'>
					<Story />
				</div>
			)
		},
	],
}

export const FeaturedArticles: Story = {
	render: () => {
		return (
			<section className='space-y-8 sm:grid sm:grid-cols-2 sm:space-y-0 lg:space-y-0 lg:grid lg:grid-cols-3 sm:gap-x-8'>
				{samples.FEATURED_ARTICLES.map((featuredArticle, index) => {
					return (
						<Card
							type='featured'
							article={featuredArticle}
							label={`0${index + 1}`}
						/>
					)
				})}
			</section>
		)
	},
}

export const NewArticles: Story = {
	render: () => {
		return (
			<aside className='bg-neutral-400 w-[344px] mb-10 px-4 pt-8'>
				<h2 className='text-[24px] text-primary-100 font-extrabold'>New</h2>
				{samples.NEW_ARTICLES.map((newArticle, index) => {
					const isLast = index === samples.NEW_ARTICLES.length - 1

					return (
						<div
							className={`${
								isLast ? '' : 'border-b-[0.5px] border-neutral-100'
							}`}
						>
							<Card type='new' article={newArticle} />
						</div>
					)
				})}
			</aside>
		)
	},
	decorators: [
		(Story) => {
			return (
				<div className='sm:grid sm:grid-cols-3 sm:gap-x-8'>
					<Story />
				</div>
			)
		},
	],
}
