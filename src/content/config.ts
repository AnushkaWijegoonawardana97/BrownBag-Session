import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    id: z.string(),
    title: z.string(),
    excerpt: z.string(),
    coverImage: z.string(),
    category: z.string(),
    author: z.object({
      name: z.string(),
      avatar: z.string(),
    }),
    date: z.string(),
    readTime: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};
