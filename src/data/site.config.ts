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
	author: 'TechnoXDroid', // Site author
	name: 'تكنو اكس درويد', // Site name.
	description: '', // Description to display in the meta tags
	lang: 'ar',
	ogLocale: 'ar',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 5, // Number of posts per page
	liveWebAddress: 'https://technoxdroid.com'
}
