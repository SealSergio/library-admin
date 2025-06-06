import { Router } from "express";
import { z } from "zod";

import { IGetAllBooksOptions, Authors } from "../database/index.js";

export const authorsRouter = Router();

const GetAuthorsSchema = z
  .object({
    id: z.string(),
    author: z.string(),
  });

authorsRouter.get("/", (req, res) => {
  // const queryParseResult = GetAuthorsSchema.safeParse(req.query);

  // if (!queryParseResult.success) {
  //   return res.status(400).send(queryParseResult.error.message);
  // }

  res.status(200).json(Authors.getAllForUser());
});
