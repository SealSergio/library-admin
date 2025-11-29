import { Router } from "express";
import { z } from "zod";

import { IGetAllBooksOptions, Cycles } from "../database/index.js";

export const cyclesRouter = Router();

const GetCyclesSchema = z
  .object({
    cycleId: z.string(),
    authorId: z.string(),
    booksInCycle: z.array(z.string()),
  });

cyclesRouter.get("/", (req, res) => {
  // const queryParseResult = GetCyclesSchema.safeParse(req.query);

  // if (!queryParseResult.success) {
  //   return res.status(400).send(queryParseResult.error.message);
  // }

  res.status(200).json(Cycles.getAllForUser());
});
