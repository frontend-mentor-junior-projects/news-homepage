import { Link } from 'react-router-dom'
import { Article } from 'services/News/types'

type CardProps = {
	type: 'featured' | 'new'
	article: Article

	label?: string
}

const Card = ({ type, article, label = '' }: CardProps) => {
	const fadeInAnimation = 'transition ease-out duration-300'

	if (type === 'featured') {
		return (
			<div className='flex flex-row max-w-md'>
				<img src={article.image} alt='' className='mr-6 h-[128px]' />

				<div>
					<span
						aria-hidden
						className='text-neutral-300 font-extrabold text-[24px] mb-2'
					>
						{label}
					</span>
					<Link
						to='/'
						className={`block text-neutral-400 font-extrabold hover:text-primary-200 hover:cursor-pointer mb-4 text-[16px] line-clamp-1 ${fadeInAnimation}`}
					>
						{article.title}
					</Link>
					<p className='text-neutral-300 text-body line-clamp-2'>
						{article.snippet}
					</p>
				</div>
			</div>
		)
	}

	if (type === 'new') {
		return (
			<div className='py-8 sm:py-8'>
				<Link
					to='/'
					className={`block text-neutral-100 font-extrabold hover:text-primary-100 hover:cursor-pointer mb-4 text-[16px] ${fadeInAnimation}`}
				>
					{article.title}
				</Link>
				<p className='text-neutral-200 text-body'>{article.snippet}</p>
			</div>
		)
	}

	return null
}

export default Card
