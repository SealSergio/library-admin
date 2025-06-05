import { z } from "zod";

const commentSchema = z.object({
    author: z.string(),
    text: z.string(),
});

export const BookSchema = z.object({
    id: z.string().length(5),
    title: z.string(),
    author: z.string(),
    authorFirstname: z.string(),
    authorSecondname: z.string(),
    authorFamily: z.string(),
    description: z.string(),
    copies: z.number().positive(),
    comments: z.array(commentSchema),
    genres: z.array(z.string()),
    age: z.array(z.string()),
    language: z.string(),
    country: z.string(),
});

export type Book = z.infer<typeof BookSchema>;

export const BookList = z.array(BookSchema);

export type BookList = z.infer<typeof BookList>;

export type BookData = Book | null;
