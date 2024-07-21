export const URLS = {
	home: {
		builder: ({ currentPage = 1 }) => {
			const param = new URLSearchParams({
				page: String(currentPage)
			})

			return `/?${param.toString()}`
		}
	},

	categories: {
		builder: ({ currentPage = 1 }) => {
			const param = new URLSearchParams({
				page: String(currentPage)
			})
			return `?${param.toString()}`
		}
	}
}

export const SOCIAL_LINKS_FOOTER = [
	{
		name: 'Github',
		url: 'https://github.com/AhmedMuhsingez',
		icon: 'github',
		target: '_blank'
	},

	{
		name: 'Facebook',
		// url: 'https://www.facebook.com/TechnoxDroid',
		url: '',
		icon: 'facebook',
		target: '_blank'
	},
	{
		name: 'Instagram',
		// url: 'https://www.facebook.com/TechnoxDroid',
		url: '',
		icon: 'instagram',
		target: '_blank'
	}
]
