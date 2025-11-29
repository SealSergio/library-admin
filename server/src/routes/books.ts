import { Router } from "express";
import { z } from "zod";

import { authorizeRequest } from "../auth.js";
import { IGetAllBooksOptions, Books } from "../database/index.js";

export const booksRouter = Router();

const GetBooksSchema = z
  .object({
    page: z.string().default("0"),
    pageSize: z.string().default("10"),
    searchString: z.string().optional(),
  })
  .transform(
    ({
      page,
      pageSize,
      searchString,
    }): Omit<IGetAllBooksOptions, "userId"> => ({
      page: Number(page),
      pageSize: Number(pageSize),
      searchString,
    }),
  );

booksRouter.get("/", (req, res) => {
  const userId = authorizeRequest(req);
  // const userId = true;
  const queryParseResult = GetBooksSchema.safeParse(req.query);

  // if (!userId) {
  //   return res.status(401).send("Unauthorized");
  // }

  if (!queryParseResult.success) {
    return res.status(400).send(queryParseResult.error.message);
  }

  res.status(200).json(Books.getAllForUser(userId, queryParseResult.data));
});

const CycleSchema = z.object({
  cycleId: z.string(),
  cycleName: z.string(),
  authorId: z.string(),
  booksInCycle: z.array(z.string()),
});

const commentSchema = z.object({
  author: z.string(),
  text: z.string(),
});

export const CreateBookschema = z.object({
  id: z.string().length(5),
  title: z.string().min(1),
  authorId: z.string().length(3),
  description: z.string().min(20),
  quantity: z.number().positive(),
  comments: z.array(commentSchema).optional(),
  genres: z.array(z.string()),
  age: z.string(),
  // language: z.string(),
  isPartOfCycle: z.boolean(),
  cycle: CycleSchema.optional(),
});

export type Book = z.infer<typeof CreateBookschema>;

booksRouter.post("/", async (req, res) => {
  // const userId = authorizeRequest(req);

  // if (!userId) {
  //   return res.status(401).send("Unauthorized");
  // }

  const bodyParseResult = CreateBookschema.safeParse(req.body);

  if (!bodyParseResult.success) {
    return res.status(400).send(bodyParseResult.error.message);
  }

  const allBooks = await Books.create(bodyParseResult.data);

  res.status(201).send(allBooks);
});
