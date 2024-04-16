interface SiteConfig {
	author: string
	name: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
	liveWebAddress: string
}

export const siteConfig: SiteConfig = {
	author: 'TechnoDroid', // Site author
	name: 'TechnoDroid', // Site name.
	description: '', // Description to display in the meta tags
	lang: '',
	ogLocale: 'en_GB',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6, // Number of posts per page
	liveWebAddress: 'https://technoxdroid.com'
}
