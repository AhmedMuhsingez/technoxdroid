import fetchApi from 'src/lib/strapi'

export const fetchArticles = async () => {
	const articles = await fetchApi<Article>({
		endpoint: 'articles',
		query: { populate: ['category', 'cover'].join(',') }
	})
	return articles.data
}

export const fetchCategories = async () => {
	const categories = await fetchApi<Categories>({ endpoint: 'categories' })
	return categories
}
