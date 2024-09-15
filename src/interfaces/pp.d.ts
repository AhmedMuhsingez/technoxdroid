type DataAttributes = {
	createdAt: string
	updatedAt: string
	arabic_pp: string
	english_pp: string
	publishedAt: string
}

type Data = {
	id: number
	attributes: DataAttributes
}

type PrivacyPolicy = {
	data: Data
	meta: Record<string, unknown>
}
