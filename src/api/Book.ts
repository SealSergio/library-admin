import { z } from 'zod';
import { BookCard } from '../components/BookCard/BookCard';

export const BookSchema = z.object({
    id: z.string(),
    title: z.string(),
    author: z.string(),
    createdAt: z.number(),
});

export type Book = z.infer<typeof BookSchema>;

export const BookList = z.array(BookSchema);

export type BookList = z.infer<typeof BookList>;