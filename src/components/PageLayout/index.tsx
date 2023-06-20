import { useRef } from 'react'

import { Header } from 'components'

type PageLayoutProps = {
	mainRef: React.RefObject<HTMLElement>
	children: React.ReactNode
}

const PageLayout = ({ mainRef, children }: PageLayoutProps) => {
	const skipLinkRef = useRef<HTMLAnchorElement>(null)
	return (
		<div className='xl:w-[1104px] xl:mx-auto sm:mx-8 mx-4 bg-neutral-100'>
			<a
				ref={skipLinkRef}
				href='#main'
				className='skip-link'
				onClick={() => {
					mainRef.current?.focus()
				}}
			>
				Skip to content
			</a>

			<Header />

			{children}
		</div>
	)
}

export default PageLayout
