interface Pagination {
	page: number
	pageCount: number
	pageSize: number
	total: number
}
interface ArticleAttributes {
	createdAt: string // Assuming ISO 8601 date format
	description: string
	publishedAt: string // Assuming ISO 8601 date format
	slug: string
	title: string
	updatedAt: string
}

interface ArticleData {
	attributes: ArticleAttributes
	id: number
}

interface Article {
	data: ArticleData[]
	meta: {
		pagination: Pagination
	}
}
