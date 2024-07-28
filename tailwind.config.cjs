/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,md,mdx,ts,jsx,tsx}',
		'./src/components/swiper/*.{astro,html,js,md,mdx,ts,jsx,tsx}'
	],
	theme: {
		extend: {
			colors: {
				background: {
					dark: '#18181a',
					light: '#f0f2f5',
					disabled: 'rgb(156 163 175)',
					muted: '#222224'
				},
				paper: {
					dark: '#242527'
				},

				action: {
					active: '#7D4B94',
					activeDark: '#7b3dad',
					disabled: '#9ca3af'
				},
				movies: {
					active: '#d63131',
					disabled: '#9ca3af'
				}
			},
			boxShadow: {
				lightCard: '0px 4px 16px -8px rgba(0,0,0,0.5)',
				lightCardHover: '0px 6px 16px -12px rgba(0,0,0,0.5)',

				darkCard: '2px 4px 6px 0px rgba(0,0,0,0.6)',
				darkCardHover: '2px 8px 6px -8px rgba(0,0,0,1)',

				navShadow: '0px 10px 12px -4px rgba(0,0,0,0.2)',

				profileShadow: '0px 4px 12px 0px rgba(131,79,140,0.8)'
			},

			fontFamily: {
				body: ['cairo', ...defaultTheme.fontFamily.sans]
			},
			gridTemplateColumns: {
				list: 'repeat(auto-fill, minmax(400px, max-content))'
			},
			keyframes: {
				scaleToLeftAndBack: {
					'0%, 100%': { transform: 'translateX(0)' },
					'50%': { transform: 'translateX(-50px)' }
				}
			},
			animation: {
				scaleToLeftAndBack: 'scaleToLeftAndBack 1s ease-in-out forwards'
			}
		}
	},
	plugins: [require('@tailwindcss/typography')]
}
