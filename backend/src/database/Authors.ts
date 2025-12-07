import { JSONFilePreset } from "lowdb/node";

export interface IAuthor {
  id: string,
  author: string,
}

const database = await JSONFilePreset<Record<string, IAuthor>>("./src/data/authors.json", {});

export class Authors {
  static getAllForUser(): IAuthor[] {
    return Object.values(database.data);
  }
}
