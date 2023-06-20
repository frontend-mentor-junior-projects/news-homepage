const FEATURED_ARTICLES = [
	{
		id: 0,
		title: 'Reviving Retro PCs',
		snippet: 'What happens when old PCs are given modern upgrades?',
		image: '/assets/images/image-retro-pcs.jpg',
	},
	{
		id: 1,
		title: 'Top 10 Laptops of 2022',
		snippet: 'Our best picks for various needs and budgets.',
		image: '/assets/images/image-top-laptops.jpg',
	},
	{
		id: 2,
		title: 'The Growth of Gaming',
		snippet: 'How the pandemic has sparked fresh opportunities.',
		image: '/assets/images/image-gaming-growth.jpg',
	},
]

const NEW_ARTICLES = [
	{
		id: 0,
		title: 'Hydrogen VS Electric Cars',
		snippet: 'Will hydrogen-fueled cars ever catch up to EVs?',
	},
	{
		id: 1,
		title: 'The Downsides of AI Artistry',
		snippet:
			'What are the possible adverse effects of on-demand AI image generation?',
	},
	{
		id: 2,
		title: 'Is VC Funding Drying Up?',
		snippet:
			'Private funding by VC firms is down 50% YOY. We take a look at what that means.',
	},
]

const FEATURED_ARTICLE = {
	title: 'The Bright Future of Web 3.0?',
	snippet:
		'We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?',
	images: {
		mobile: '/assets/images/image-web-3-mobile.jpg',
		desktop: '/assets/images/image-web-3-desktop.jpg',
	},
}

export default {
	FEATURED_ARTICLE,
	FEATURED_ARTICLES,
	NEW_ARTICLES,
}
