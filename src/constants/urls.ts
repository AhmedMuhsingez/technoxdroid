export const URLS = {
	home: {
		builder: ({ currentPage = 1 }) => {
			const x = new URLSearchParams({
				page: String(currentPage)
			})

			return `/?${x.toString()}`
		}
	}
}
