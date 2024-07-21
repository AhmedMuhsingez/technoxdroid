export const URLS = {
	home: {
		builder: ({ currentPage = 1 }) => {
			const x = new URLSearchParams({
				page: String(currentPage)
			})

			return `/?${x.toString()}`
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
