import { Card, FeaturedArticle, Header } from 'components'
import utils from 'components/utils'

const HomePage = () => {
	return (
		<div className='xl:w-[1104px] xl:mx-auto sm:mx-8 mx-4 bg-neutral-100'>
			<Header />

			<main>
				<div className='lg:grid lg:grid-cols-3 lg:gap-x-6 sm:mb-[72px] mb-16'>
					<FeaturedArticle article={utils.FEATURED_ARTICLE} />

					{/* New Articles. */}
					<aside className='bg-neutral-400 sm:w-full mb-10 sm:mb-0 px-8 pt-8'>
						<h2 className='text-[24px] sm:text-[32px] text-primary-100 font-extrabold'>
							New
						</h2>

						<ul>
							{utils.NEW_ARTICLES.map((newArticle, index) => {
								const isLast = index === utils.NEW_ARTICLES.length - 1

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
						{utils.FEATURED_ARTICLES.map((featuredArticle, index) => {
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
		</div>
	)
}

export default HomePage
