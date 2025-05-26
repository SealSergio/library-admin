import { FC } from "react";
import { BookList } from "../../types/Book";
import { BookCard } from "../BookCard/BookCard";
import "./BookList.scss";

export interface BookListProps  {
    bookList: BookList;
}

export const BookListView: FC<BookListProps> = ({bookList}) => {
    return (
        <ul className="books-grid">
            {bookList.map((book) => (
                <li key={book.id} className="book-card">
                    <BookCard book={book} />
                </li>
            ))}
        </ul>
    )
}
