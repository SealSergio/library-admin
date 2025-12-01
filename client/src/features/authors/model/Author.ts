import { z } from "zod";

export const AuthorSchema = z.object({
    id: z.string(),
    name: z.string(),
    country: z.string(),
});

export type Author = z.infer<typeof AuthorSchema>;

export const AuthorList = z.array(AuthorSchema);

export type AuthorList = z.infer<typeof AuthorList>;

export type AuthorData = Author | null;
