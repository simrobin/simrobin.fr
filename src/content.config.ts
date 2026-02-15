import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const experiences = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/data/experiences' }),
  schema: z.object({
    order: z.number(),
    startDate: z.string(),
    endDate: z.string(),
    title: z.string(),
    location: z.string(),
    missions: z.array(z.string()),
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.yaml', base: './src/data/education' }),
  schema: z.object({
    order: z.number(),
    startDate: z.string(),
    endDate: z.string(),
    title: z.string(),
    location: z.string(),
  }),
});

export const collections = { experiences, education };
