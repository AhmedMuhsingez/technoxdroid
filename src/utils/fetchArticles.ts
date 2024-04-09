import fetchApi from 'src/lib/strapi'

const data = await fetchApi<Article>({
	endpoint: 'articles'
	// query: { param1: 'value1', param2: 'value2' },
	// wrappedByKey: 'myKey',
	// wrappedByList: true
})
export default data
