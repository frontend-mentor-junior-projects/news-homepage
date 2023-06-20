import samples from './samples'

const useFeaturedArticle = () => {
	// Fetch featured article.
	return samples.FEATURED_ARTICLE
}

const useFeaturedArticles = () => {
	// Fetch featured articles.
	return samples.FEATURED_ARTICLES
}

const useNewArticles = () => {
	// Fetch new articles.
	return samples.NEW_ARTICLES
}

export default { useFeaturedArticle, useFeaturedArticles, useNewArticles }
