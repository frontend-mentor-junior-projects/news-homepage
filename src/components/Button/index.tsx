type ButtonProps = {
	children: string
}

const Button = ({ children }: ButtonProps) => {
	return (
		<button
			type='button'
			className='ease-out duration-500 h-12 bg-primary-200 text-neutral-100 text-body font-bold px-10 hover:bg-neutral-400 tracking-[.25em] transition'
		>
			{children.toUpperCase()}
		</button>
	)
}

export default Button
