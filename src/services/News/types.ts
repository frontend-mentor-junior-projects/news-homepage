export type Article = {
	title: string
	snippet: string
	image?: string
}

export type FeaturedArticle = {
	title: string
	snippet: string
	images: { mobile: string; desktop: string }
}
