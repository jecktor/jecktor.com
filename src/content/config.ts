import { defineCollection, z } from "astro:content";

const works = defineCollection({
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    repo: z.string(),
    website: z.string(),
    stack: z.string().transform((val) => val.split(",")),
    hero: z.string(),
    gallery: z.array(z.string()),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

const posts = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    desc: z.string(),
    pubDate: z
      .string()
      .or(z.date())
      .transform((val) => new Date(val)),
  }),
});

export const collections = { works, posts };
