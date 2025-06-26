import { JSONFilePreset } from "lowdb/node";
import { Book } from "../routes";
import { writeFile } from 'fs/promises';

const database = await JSONFilePreset<Record<string, Book>>("books.json", {});

export interface IGetAllBooksOptions {
  page?: number;
  pageSize?: number;
  searchString?: string;
}

// export interface IGetAllBooksResult {
//   list: IBook[];
//   pageCount: number;
// }

export interface IGetAllBooksResult {
  list: Book[];
  pageCount: number;
}

export class Books {
  static getAllForUser(
    userId: string,
    { page, pageSize, searchString }: IGetAllBooksOptions = {},
  ): Book[] {
    // let list = Object.values(database.data)
      // .filter(obj =>obj.userId === userId);
    // let pageCount = 1;

    // if (searchString) {
    //   list = list.filter((post) =>
    //     post.text.toLowerCase().includes(searchString.toLowerCase()),
    //   );
    // }

    // if (page !== undefined && pageSize !== undefined) {
    //   pageCount = Math.ceil(list.length / pageSize);
      // list = list.slice(page * pageSize, (page + 1) * pageSize);
    // }

    return Object.values(database.data);
  }

  static async create(Book: Book): Promise<Book[]> {
    // const newBook = {
    //   ...Book,
    //   createdAt: Date.now(),
    // };

    await database.update((data) => {
      data[Book.id] = Book;
    });

    const jsonData = JSON.stringify(Object.values(database.data), null, 2); // Форматирование для читабельности
    await writeFile("books.json", jsonData, 'utf-8');

    return Object.values(database.data);
  }
}
