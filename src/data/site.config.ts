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
	name: 'تكنودرويد', // Site name.
	description: 'صفحة مهتمة بنشر آخر الأخبار التقنية والثقافية - تابعنا لمعرفة كل ما هو جديد دائماً', // Description to display in the meta tags
	lang: 'ar',
	ogLocale: 'ar',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 5, // Number of posts per page
	liveWebAddress: 'https://technoxdroid.com'
}
