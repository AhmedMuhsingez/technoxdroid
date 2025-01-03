import { defineConfig } from 'astro/config'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel'
import react from '@astrojs/react'

export default defineConfig({
	output: 'server',
	adapter: vercel(),
	site: 'https://technoxdroid.com/',

	markdown: {
		drafts: true,
		shikiConfig: {
			theme: 'material-theme-palenight',
			wrap: true
		}
	},
	image: {
		service: {
			entrypoint: 'astro/assets/services/noop'
		}
	},
	integrations: [sitemap(), tailwind(), react()]
})
