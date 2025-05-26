import { FC } from "react";
import "./BookCard.scss";
import { Book } from "../../types/Book";

interface BookCardProps {
  book: Book;
}

export const BookCard: FC<BookCardProps> = ({book}) => {
    function handleClickOnBtnMore () {

    }

    return (
        <>
            <div className="book-image">
                <img src={`img/books/${book.id}.jpg`} alt="Обложка книги"/>
            </div>
            <div className="book-details">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <button onClick={handleClickOnBtnMore} className="details-btn">Подробнее</button>
            </div>        
        </>
    )
}
