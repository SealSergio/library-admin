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

const CreateBookschema = z.object({
  title: z.string().min(1),
  text: z.string().min(10),
});

// booksRouter.post("/", async (req, res) => {
//   const userId = authorizeRequest(req);

//   if (!userId) {
//     return res.status(401).send("Unauthorized");
//   }

//   const bodyParseResult = CreateBookschema.safeParse(req.body);

//   if (!bodyParseResult.success) {
//     return res.status(400).send(bodyParseResult.error.message);
//   }

//   const { text, title } = bodyParseResult.data;

//   const post = await Books.create(title, text, userId);

//   res.status(201).send(post.id);
// });
