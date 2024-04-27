import fetchApi from 'src/lib/strapi'

// export async function fetchArticles() {
// 	const articles = await fetchApi<Article>({
// 		endpoint: 'articles'
// 		// query: { param1: 'value1', param2: 'value2' },
// 		// wrappedByKey: 'myKey',
// 		// wrappedByList: true
// 	})
// 	return articles
// }

// export const prerender = true

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
