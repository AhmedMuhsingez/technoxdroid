interface CategoryAttributes {
	name: string
	slug: string
	description: string | null
	createdAt: string
	updatedAt: string
}

interface Category {
	id: number
	attributes: CategoryAttributes
}

interface Pagination {
	page: number
	pageSize: number
	pageCount: number
	total: number
}

interface Meta {
	pagination: Pagination
}

interface CategoriesResponse {
	data: Category[]
	meta: Meta
}
