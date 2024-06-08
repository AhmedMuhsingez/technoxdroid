import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'

import react from '@astrojs/react'

// https://astro.build/config
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
