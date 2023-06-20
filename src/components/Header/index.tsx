import { useState } from 'react'

import Constants from 'lib/Constants'
import { Link } from 'react-router-dom'

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
			<Link to='/'>
				<img
					src='/assets/images/logo.svg'
					alt="New's homepage logo"
					className='h-8 sm:h-12'
				/>
			</Link>

			<nav>
				<button type='button' onClick={toggleMenu} className='block lg:hidden'>
					<img src='/assets/images/icon-menu.svg' alt='Menu' />
				</button>

				{/* For mobile devices. */}
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
								{Constants.NAVIGATION_LINKS.map((link) => {
									return (
										<li
											key={link.name}
											className='text-neutral-400 hover:cursor-pointer hover:text-primary-200'
										>
											<Link
												to='/'
												aria-label={link.accessibleName}
												onClick={closeMenu}
											>
												{link.name}
											</Link>
										</li>
									)
								})}
							</ul>
						</div>
					</div>
				)}

				{/* For desktop devices. */}
				<div className='hidden lg:block'>
					<ul className='sm:flex sm:flex-row space-x-10'>
						{Constants.NAVIGATION_LINKS.map((link) => {
							return (
								<li
									key={link.name}
									className='text-neutral-400 hover:cursor-pointer hover:text-primary-200 transtion duration-300 ease-out'
								>
									<Link
										to='/'
										aria-label={link.accessibleName}
										data-testid='mobile menu link'
									>
										{link.name}
									</Link>
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
