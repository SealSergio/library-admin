import { JSONFilePreset } from "lowdb/node";

export interface ICycle {
  cycleId: string;
  authorId: string;
  booksInCycle: string[];
}

const database = await JSONFilePreset<Record<string, ICycle>>("cycles.json", {});

export class Cycles {
  static getAllForUser(): ICycle[] {
    return Object.values(database.data);
  }
}
