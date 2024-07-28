//Article Res

interface Pagination {
	page: number
	pageSize: number
	pageCount: number
	total: number
}

interface ArticleAttributes {
	createdAt: string // Assuming ISO 8601 date format
	description: string
	publishedAt: string // Assuming ISO 8601 date format
	slug: string
	title: string
	updatedAt: string
	RichTextEditor: string
	category: CategoryResponse
	cover: ImageResponse
	isShortNews: boolean
}

interface ArticleData {
	attributes: ArticleAttributes
	id: number
}

interface Article {
	attributes: any
	[x: string]: any
	data: ArticleData[]
	meta: {
		pagination: Pagination
	}
}

//Category Res
interface CategoryAttributes {
	name: string
	slug: string
	description: string | null
	createdAt: string // Assuming ISO 8601 date format
	updatedAt: string // Assuming ISO 8601 date format
}

interface CategoryData {
	id: number
	attributes: CategoryAttributes
}

interface CategoryResponse {
	data: CategoryData
}

//Cover Res

interface ImageFormat {
	ext: string
	url: string
	hash: string
	mime: string
	name: string
	path: string | null
	size: number
	width: number
	height: number
	sizeInBytes: number
}

interface ImageAttributes {
	name: string
	alternativeText: string | null
	caption: string | null
	width: number
	height: number
	formats: {
		large: ImageFormat
		small: ImageFormat
		medium: ImageFormat
		thumbnail: ImageFormat
	}
}

interface ImageResponse {
	data: { attributes: ImageAttributes }
}

interface ArticleRes {
	category: string
	categoryName: string
	filteredArticles: ArticleData[]
}
