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

interface ArticleAttributes {
	title: string
	description: string | null
	slug: string
	createdAt: string // Assuming ISO 8601 date format
	updatedAt: string // Assuming ISO 8601 date format
	publishedAt: string // Assuming ISO 8601 date format
	cover: {
		id: number
		formats: {
			large: ImageFormat
			small: ImageFormat
			medium: ImageFormat
			thumbnail: ImageFormat
			[key: string]: ImageFormat // In case there are additional formats
		}
		provider: string
		provider_metadata: any | null // You might want to specify the actual type if possible
		createdAt: string // Assuming ISO 8601 date format
		updatedAt: string // Assuming ISO 8601 date format
	}
	author: {
		id: number
		name: string
		email: string
		createdAt: string // Assuming ISO 8601 date format
		updatedAt: string // Assuming ISO 8601 date format
	}
	category: {
		id: number
		name: string
		slug: string
		description: string | null
		createdAt: string // Assuming ISO 8601 date format
		updatedAt: string // Assuming ISO 8601 date format
	}
	blocks: {
		id: number
		__component: string
		body: string
	}[]
}

interface ArticleData {
	id: number
	attributes: ArticleAttributes
}

interface ArticlesFullDetails {
	data: ArticleData[]
}
