import { AuthorList } from "../../../authors/model/Author";
import { GenreList } from "../../model/Genre";
import "./BookForm.scss";

interface BookFormProps {
    genres: GenreList,
    authors: AuthorList,
}

export const BookForm: React.FC<BookFormProps> = ({ genres, authors }) => {
    return (
        <div className="book-form-wrapper">
            <h2 className="book-form__title">Добавить книгу</h2>
            <form className="book-form">
                <div className="book-form__half book-form__half--left">
                    <label className="form__label book-form__label">
                        <span className="form__label__title">ID</span>
                        <input className="form__input book-form__input" type="text" placeholder="ID" disabled/>
                    </label>
                    <label className="form__label book-form__label">
                        <span className="form__label__title">Заголовок</span>
                        <input className="form__input book-form__input" type="text" placeholder="Заголовок"/>
                    </label>
                    <label className="form__label book-form__label">
                        <span className="form__label__title">Автор</span>
                        <input className="form__input book-form__input" type="text" placeholder="Автор"/>
                        <select name="authors"></select>
                    </label>
                    <label className="form__label form__label--checkbox book-form__label">
                        <span className="form__label__title">Часть цикла</span>
                        <input className="form__input book-form__input" type="checkbox" placeholder="Часть цикла"/>
                    </label>
                </div>
                <div className="book-form__half book-form__half_--ight">
                    <div className="book-form__img">Загрузите фото</div>
                    <label className="form__label book-form__label">
                        <span className="form__label__title">Описание</span>
                        <input className="form__input book-form__input" type="text" placeholder="Описание"/>
                    </label>
                    <label className="form__label book-form__label">
                        <span className="form__label__title">Жанры</span>
                        <input className="form__input book-form__input" type="text" placeholder="Жанры"/>
                        <select name="genres"></select>
                    </label>
                    <label className="form__label book-form__label">
                        <span className="form__label__title">Возраст</span>
                        <input className="form__input book-form__input" type="text" placeholder="Возраст"/>
                        <select name="age">
                            <option value="0-6">0-6</option>
                            <option value="7-12">7-12</option>
                            <option value="13-18">13-18</option>
                            <option value="18+">18+</option>
                        </select>
                    </label>
                    <label className="form__label book-form__label">
                        <span className="form__label__title">Количество экземпляров</span>
                        <input className="form__input book-form__input" type="number" placeholder="Описание"/>
                    </label>
                    <button className="form__btn form__btn--submit" type="submit">
                        Сохранить
                    </button>
                    <button className="form__btn form__btn--reset" type="submit">
                        Удалить
                    </button>
                </div>
            </form>
        </div>
    )
}
