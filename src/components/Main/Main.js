import { BookForm } from "../bookForm/BookForm.js";
import { createElement } from "../../functions/createElement.js";
import { getAllBooks } from "../../functions/fetchReguest.js";
import { Filters } from "../Filters/Filters.js";
import { BooksGrid } from "../booksGrid/BooksGrid.js";

export async function Main(content) {
    const main = createElement("main", ["main"], document.querySelector(".main-container"));

    switch (content) {
        case "books":
            BookForm("newBook");
            createElement("section", ["section-books"], main);
            Filters();
            BooksGrid(await getAllBooks());
            break;
        case "authors":
            Form("newAuthor");
            AuthorsGrid();
            break;
        case "support":
            Support();
            break;
        default:
            Main("books");
    }
}
