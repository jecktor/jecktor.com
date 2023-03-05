import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import addClasses from 'rehype-add-classes';

// https://astro.build/config
export default defineConfig({
  site: 'https://jecktor.com',
  integrations: [sitemap(), tailwind()],
  markdown: {
    extendDefaultPlugins: true,
    shikiConfig: {
      theme: 'one-dark-pro',
    },
    rehypePlugins: [
      [
        addClasses,
        {
          blockquote: 'pl-6 border-l-4 border-neutral-100',
          th: 'p-2 border border-neutral-500',
          td: 'p-2 border border-neutral-500',
          ol: 'list-decimal ml-[1.1rem] mb-6',
          ul: 'list-disc ml-[1.1rem] mb-6',
          table: 'w-full text-left mb-6',
          h1: 'text-4xl font-bold mb-3',
          h2: 'text-2xl font-bold mb-3',
          h3: 'text-xl font-bold mb-3',
          h4: 'text-lg font-bold mb-3',
          h5: 'font-bold mb-3',
          h6: 'font-bold mb-3',
          img: 'rounded-md mb-6',
          p: 'mb-6',
        },
      ],
    ],
  },
});
