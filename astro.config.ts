import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import playformCompress from '@playform/compress'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://glorywong.com',
  prefetch: {
    defaultStrategy: 'viewport',
  },
  integrations: [
    mdx(),
    sitemap(),
    tailwind(),
    playformCompress(),
  ],
})
