type DataAttributes = {
	english_pp(english_pp: any): unknown
	arabic_pp(arabic_pp: any): unknown
	[x: string]: string
	arabic_pp: string
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
