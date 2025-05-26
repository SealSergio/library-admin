import { randomUUID } from "crypto";
import { JSONFilePreset } from "lowdb/node";

export interface IBook {
  id: string,
  title: string,
  author: string,
  authorFirstname: string,
  authorSecondname: string,
  authorFamily: string,
  description: string,
  copies: number,
  comments: Array<string>,
  genres: Array<string>,
  age: Array<string>,
  language: string,
  country: string,
}

const database = await JSONFilePreset<Record<string, IBook>>("books.json", {});

export interface IGetAllBooksOptions {
  page?: number;
  pageSize?: number;
  searchString?: string;
}

export interface IGetAllBooksResult {
  list: IBook[];
  pageCount: number;
}

export class Books {
  static getAllForUser(
    userId: string,
    { page, pageSize, searchString }: IGetAllBooksOptions = {},
  ): IGetAllBooksResult {
    let list = Object.values(database.data)
      // .filter(obj =>obj.userId === userId);
    let pageCount = 1;

    // if (searchString) {
    //   list = list.filter((post) =>
    //     post.text.toLowerCase().includes(searchString.toLowerCase()),
    //   );
    // }

    // if (page !== undefined && pageSize !== undefined) {
    //   pageCount = Math.ceil(list.length / pageSize);
      // list = list.slice(page * pageSize, (page + 1) * pageSize);
    // }

    return {
      list,
      pageCount,
    };
  }

  // static async create(
  //   title: string,
  //   text: string,
  //   userId: string,
  // ): Promise<IBook> {
  //   const Book: IBook = {
  //     id: randomUUID(),
  //     title,
  //     text,
  //     userId,
  //     createdAt: Date.now(),
  //   };

  //   await database.update((data) => {
  //     data[Book.id] = Book;
  //   });

  //   return Book;
  // }
}
