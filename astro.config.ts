import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import playformCompress from '@playform/compress'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'astro/config'

import rehypeExternalLinks from 'rehype-external-links'

export default defineConfig({
  site: 'https://glorywong.com',

  prefetch: {
    defaultStrategy: 'viewport',
  },

  markdown: {
    shikiConfig: {
      themes: {
        light: 'vitesse-light',
        dark: 'monokai',
      },
      wrap: true,
    },
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['nofollow', 'noopener', 'noreferrer'],
        },
      ],
    ],
  },

  integrations: [
    mdx(),
    sitemap(),
    playformCompress(),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
})
