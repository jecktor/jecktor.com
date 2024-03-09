import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import addClasses from "rehype-add-classes";
import vesbones from "./vesbones.json";

export default defineConfig({
  site: "https://jecktor.com",
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: vesbones,
    },
    rehypePlugins: [
      [
        addClasses,
        {
          blockquote:
            "px-6 py-1 border-l-4 text-primary-100 border-primary-400",
          tr: "bg-base-700 [&:nth-child(even)]:bg-base-600",
          th: "p-2 border border-base-500",
          td: "p-2 border border-base-500",
          ol: "list-decimal ml-[1.1rem] mb-6",
          ul: "list-disc ml-[1.1rem] mb-6",
          table: "w-full text-left mb-6",
          thead: "bg-base-700 [&>tr]:bg-base-600",
          h1: "text-xl font-bold mb-3",
          h2: "text-xl font-bold mb-3",
          h3: "text-lg font-bold mb-3",
          h4: "font-bold mb-3",
          h5: "font-bold mb-3",
          h6: "font-bold mb-3",
          img: "mb-6 w-full",
        },
      ],
    ],
  },
});
