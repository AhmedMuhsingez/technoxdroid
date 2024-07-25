type DataAttributes = {
	createdAt: string
	updatedAt: string
	contentArabic: string
	contentEnglish: string
	publishedAt: string
}

type Data = {
	id: number
	attributes: DataAttributes
}

type AboutPage = {
	data: Data
	meta: Record<string, unknown>
}
