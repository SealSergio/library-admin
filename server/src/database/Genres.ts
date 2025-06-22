import { JSONFilePreset } from "lowdb/node";

const database = await JSONFilePreset<string[]>("genres.json", []);

export class Genres {
  static getAllForUser(): string[] {
    return Object.values(database.data);
  }
}
