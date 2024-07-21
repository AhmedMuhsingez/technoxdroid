import fetchApi from 'src/lib/strapi'
export const fetchArticles = async (
	page = 1,
	pageSize = 5,
	sort = 'createdAt:desc',
	categorySlug: string = '/'
) => {
	const query = {
		populate: ['category', 'cover'].join(','),
		'pagination[page]': String(page),
		'pagination[pageSize]': String(pageSize),
		sort: sort
	}
	if (categorySlug) {
		query['filters[category][slug][$eq]'] = categorySlug
	}

	const articles = await fetchApi<Article>({
		endpoint: 'articles',
		query: query
	})

	return articles
}

export const fetchCategories = async () => {
	const categories = await fetchApi<Categories>({ endpoint: 'categories' })
	return categories
}
