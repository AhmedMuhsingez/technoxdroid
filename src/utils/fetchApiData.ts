import fetchApi from 'src/lib/strapi'
export const fetchArticles = async (
	page = 1,
	pageSize = 5,
	sort = 'createdAt:desc',
	categorySlug: string = '/'
) => {
	const query = {
		populate: ['category', 'cover', 'author'].join(','),
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

export const fetchSimilarArticles = async (category: string = '/') => {
	const query = {
		populate: ['category', 'cover', 'author'].join(','),
		'pagination[page]': String(1),
		'pagination[pageSize]': String(3)
	}
	if (category) {
		query['filters[category][slug][$eq]'] = category
	}
	const articles = await fetchApi<Article>({
		endpoint: 'articles',
		query: query
	})
	return articles
}

export const fetchCategories = async () => {
	const categories = await fetchApi<CategoriesResponse>({ endpoint: 'categories' })
	return categories
}

export const fetchAboutPage = async () => {
	const aboutPage = await fetchApi<AboutPage>({ endpoint: 'about' })
	return aboutPage
}

export const fetchPrivacyPolicy = async () => {
	const privacyPolicy = await fetchApi<PrivacyPolicy>({ endpoint: 'privacy-policy' })
	return privacyPolicy
}
