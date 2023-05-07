/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'sans-serif'],
			},
			colors: {
				'primary-100': 'hsl(35, 77%, 62%)',
				'primary-200': 'hsl(5, 85%, 63%)',
				'neutral-100': 'hsl(36, 100%, 99%)',
				'neutral-200': 'hsl(233, 8%, 79%)',
				'neutral-300': 'hsl(236, 13%, 42%)',
				'neutral-400': 'hsl(240, 100%, 5%)',
			},
			fontSize: {
				body: '15px',
			},
		},
	},
	plugins: [],
}
