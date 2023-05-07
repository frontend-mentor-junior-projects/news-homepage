import { useState } from 'react'

const NAVIGATION_LINKS = ['Home', 'New', 'Popular', 'Trending', 'Categories']

const Header = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<header className='flex flex-row justify-between items-center h-[88px] sm:h-[176px] overflow-x-hidden'>
			<a href='/#'>
				<img src='/assets/images/logo.svg' alt='logo' className='h-8 sm:h-12' />
			</a>

			<nav>
				<button type='button' onClick={toggleMenu}>
					<img
						src='/assets/images/icon-menu.svg'
						alt='mobile menu'
						className='block lg:hidden'
					/>
				</button>
				{isMenuOpen && (
					<div
						className={`lg:hidden w-full h-full fixed inset-0 ${
							isMenuOpen ? '' : 'invisible'
						}`}
					>
						<div
							className={`w-full h-full duration-500 ease-out transition-all inset-0 absolute bg-black ${
								isMenuOpen ? 'opacity-50' : 'opacity-0'
							}`}
						/>
						<div
							className={`w-2/3 md:w-1/3 px-6 bg-white h-full absolute right-0 duration-300 ease-out transition-all ${
								isMenuOpen ? '' : 'translate-x-full}'
							}`}
						>
							<button type='button' onClick={closeMenu}>
								<img
									src='/assets/images/icon-menu-close.svg'
									alt='mobile menu'
									className='block lg:hidden float-right mt-6 md:mt-16'
								/>
							</button>

							<ul className='flex flex-col space-y-10 mt-[144px]'>
								{NAVIGATION_LINKS.map((link) => {
									return (
										<li
											key={link}
											className='text-neutral-400 hover:cursor-pointer hover:text-primary-200'
										>
											<a href='/#' onClick={closeMenu}>
												{link}
											</a>
										</li>
									)
								})}
							</ul>
						</div>
					</div>
				)}
				<div className='hidden lg:block'>
					<ul className='sm:flex sm:flex-row space-x-10'>
						{NAVIGATION_LINKS.map((link) => {
							return (
								<li
									key={link}
									className='text-neutral-400 hover:cursor-pointer hover:text-primary-200 transtion duration-300 ease-out'
								>
									<a href='/#' data-testid='mobile menu link'>
										{link}
									</a>
								</li>
							)
						})}
					</ul>
				</div>
			</nav>
		</header>
	)
}

export default Header
