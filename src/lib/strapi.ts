interface Props {
	endpoint: string //https://technodroid-dashboard-38b3922bb6c2.herokuapp.com/api/articles
	query?: Record<string, string>
	wrappedByKey?: string
	wrappedByList?: boolean
}

/**
 * Fetches data from the Strapi API
 * @param endpoint - The endpoint to fetch from
 * @param query - The query parameters to add to the url
 * @param wrappedByKey - The key to unwrap the response from
 * @param wrappedByList - If the response is a list, unwrap it
 * @returns
 */
export default async function fetchApi<T>({
	endpoint,
	query,
	wrappedByKey,
	wrappedByList
}: Props): Promise<T> {
	if (endpoint.startsWith('/')) {
		endpoint = endpoint.slice(1)
	}

	// const url = new URL(`/api/${endpoint}`) //should remove the explicit url and add it as a parameter from env
	const url = new URL(`${import.meta.env.API_URL + endpoint}`)

	if (query) {
		Object.entries(query).forEach(([key, value]) => {
			url.searchParams.append(key, value)
		})
	}
	const res = await fetch(url.toString())
	let data = await res.json()

	if (wrappedByKey) {
		data = data[wrappedByKey]
	}

	if (wrappedByList) {
		data = data[0]
	}

	return data as T //T is the type of the data fetched but defined in the function call
}
