import Button from '../Button'
import { FeaturedArticle as FeaturedArticleType } from '../utils'

type FeaturedArticleTitleProps = {
	children: string | React.ReactNode

	className?: string
}

const FeaturedArticleTitle = ({
	children,
	className = '',
}: FeaturedArticleTitleProps) => {
	return (
		<h1
			className={`sm:mb-0 mb-6 font-extrabold text-neutral-400 text-[32px] leading-[40px] sm:text-[48px] ${className} sm:leading-[56px]`}
		>
			{children}
		</h1>
	)
}

type FeaturedArticleProps = {
	article: FeaturedArticleType
}

const FeaturedArticle = ({ article }: FeaturedArticleProps) => {
	return (
		<div className='sm:col-span-2 sm:mb-16 lg:mb-0'>
			<img
				src={article.images.mobile}
				alt=''
				className='sm:hidden block mb-8'
			/>
			<img
				src={article.images.desktop}
				alt=''
				className='sm:block hidden mb-8 xl:h-[316px] sm:h-[364px]'
			/>

			<div className='sm:grid sm:grid-cols-2 sm:gap-x-12 mb-16 sm:mb-0'>
				<FeaturedArticleTitle className='sm:hidden block'>
					The Bright
					<br />
					Future of Web
					<br />
					3.0?
				</FeaturedArticleTitle>

				<FeaturedArticleTitle className='sm:block hidden'>
					The Bright
					<br />
					Future of
					<br />
					Web 3.0?
				</FeaturedArticleTitle>

				<div>
					<p className='text-body text-neutral-300 mb-8 sm:mb-10'>
						{article.snippet}
					</p>

					<Button>Read More</Button>
				</div>
			</div>
		</div>
	)
}

export default FeaturedArticle
