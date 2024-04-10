interface Pagination {
	page: number
	pageSize: number
	pageCount: number
	total: number
}

interface Attributes {
	name: string
	slug: string
	description: string | null
	createdAt: string // Assuming ISO 8601 date format
	updatedAt: string // Assuming ISO 8601 date format
}

interface DataItem {
	id: number
	attributes: Attributes
}

interface Meta {
	pagination: Pagination
}

interface Categories {
	data: DataItem[]
	meta: Meta
}
