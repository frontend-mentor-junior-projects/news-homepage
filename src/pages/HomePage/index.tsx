import { useRef } from 'react'

import { Card, FeaturedArticle, PageLayout } from 'components'
import NewsService from 'services/News/News.service'

const HomePage = () => {
	const mainRef = useRef<HTMLElement>(null)

	// Get featured article.
	const featuredArticle = NewsService.useFeaturedArticle()

	// Get featured articles.
	const featuredArticles = NewsService.useFeaturedArticles()

	// Get new articles.
	const newArticles = NewsService.useNewArticles()

	return (
		<PageLayout mainRef={mainRef}>
			<main ref={mainRef} id='main'>
				<div className='lg:grid lg:grid-cols-3 lg:gap-x-6 sm:mb-[72px] mb-16'>
					<FeaturedArticle article={featuredArticle} />

					{/* New Articles. */}
					<aside className='bg-neutral-400 sm:w-full mb-10 sm:mb-0 px-8 pt-8'>
						<h2 className='text-[24px] sm:text-[32px] text-primary-100 font-extrabold'>
							New
						</h2>

						<ul>
							{newArticles.map((newArticle, index) => {
								const isLast = index === newArticles.length - 1

								return (
									<li
										key={newArticle.id}
										className={`${
											isLast ? '' : 'border-b-[0.5px] border-neutral-100'
										}`}
									>
										<Card type='new' article={newArticle} />
									</li>
								)
							})}
						</ul>
					</aside>
				</div>

				{/* Featured Articles. */}
				<section>
					<ul className='space-y-8 sm:grid sm:grid-cols-2 sm:space-y-0 sm:gap-y-8 lg:grid lg:grid-cols-3 sm:gap-x-8 xl:mb-[128px] mb-20'>
						{/* eslint-disable-next-line @typescript-eslint/no-shadow */}
						{featuredArticles.map((featuredArticle, index) => {
							return (
								<li key={featuredArticle.id}>
									<Card
										type='featured'
										article={featuredArticle}
										label={`0${index + 1}`}
									/>
								</li>
							)
						})}
					</ul>
				</section>
			</main>
		</PageLayout>
	)
}

export default HomePage
