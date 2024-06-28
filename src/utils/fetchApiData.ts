import fetchApi from 'src/lib/strapi'

export const fetchArticles = async (page = 1, pageSize = 5, sort = 'createdAt:desc') => {
	const articles = await fetchApi<Article>({
		endpoint: 'articles',
		query: {
			populate: ['category', 'cover'].join(','),
			'pagination[page]': String(page),
			'pagination[pageSize]': String(pageSize),
			sort: sort
		}
	})

	return articles
}

export const fetchCategories = async () => {
	const categories = await fetchApi<Categories>({ endpoint: 'categories' })
	return categories
}
