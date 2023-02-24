import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import image from '@astrojs/image';
import tailwind from '@astrojs/tailwind';
import addClasses from 'rehype-add-classes';

// https://astro.build/config
export default defineConfig({
  site: 'https://jecktor.com',
  integrations: [sitemap(), react(), image(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    shikiConfig: {
      theme: 'one-dark-pro',
    },
    rehypePlugins: [
      [
        addClasses,
        {
          h1: 'text-4xl font-bold',
          h2: 'text-2xl font-bold',
          h3: 'text-xl font-bold',
          h4: 'text-lg font-bold',
          h5: 'font-bold',
          h6: 'font-bold',
          img: 'rounded-xl mb-6',
          p: 'mb-6',
        },
      ],
    ],
  },
});
