import { z } from "zod";

export const GenreList = z.array(z.string());

export type GenreList = z.infer<typeof GenreList>;
