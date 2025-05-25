import { createElement } from "../../functions/createElement.js";

export function BooksGrid(booksArray) {
    let booksGrid;
    if (document.querySelector(".books-grid")) {
        booksGrid = document.querySelector(".books-grid");
        booksGrid.innerHTML = '';
    } else {
        booksGrid = createElement("div", ["books-grid"], document.querySelector(".section-books"))
    };

    booksArray.forEach((book) => {
        const article = createElement("article", ["book-card"], booksGrid);

        article.innerHTML = `
            <div class="book-image">
                <img src="img/books/${book.img}" alt="Обложка книги">
            </div>
            <div class="book-details">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">${book.author}</p>
                <button class="details-btn">Подробнее</button>
            </div>
        `;

        // Обрабочик клика для создания модального окна
        // article.querySelector('.details-btn').addEventListener('click', () => {
        //     createBookModalWindow(book);
        // });
    });
}
