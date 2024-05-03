/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{astro,html,js,md,mdx,ts}'],
	theme: {
		extend: {
			colors: {
				white: '#f0f2f5'
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
