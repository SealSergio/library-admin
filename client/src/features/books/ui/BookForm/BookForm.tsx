import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { AuthorList } from "../../../authors/model/Author";
import { Book, BookSchema } from "../../model/Book";
import { GenreList } from "../../model/Genre";
import "./BookForm.scss";
import TextareaAutosize from "react-textarea-autosize";
import { useState } from 'react';
import { GenresSelect } from '../GenresSelect/GenresSelect';

interface BookFormProps {
    genres: GenreList,
    authors: AuthorList,
}

export const BookForm: React.FC<BookFormProps> = ({ genres, authors }) => {
    const newBookData = localStorage.getItem("newBookData");
    const newBook = newBookData !== null ? JSON.parse(newBookData) : null;

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(BookSchema),
    });

    const onSubmit = (data: Book | unknown) => {
        console.log(data);
    };
    
    const currentSelectedGenres = newBook?.genres ? newBook.genres : [];
    const [selectedGenres, setSelectedGenres] = useState(currentSelectedGenres);

    return (
        <div className="book-form-wrapper">
            <h2 className="book-form__title">Добавить книгу</h2>
            <form className="book-form" onSubmit={(event) => {
                event.preventDefault();
                handleSubmit(onSubmit);
            }}>
                <div className="book-form__half book-form__half--left">
                    <label className="form__label book-form__label">
                        <span className="form__label__title">ID</span>
                        <input className="form__input book-form__input" type="text" placeholder="ID" disabled {...register("id")}/>
                        {/* {errors.id && <p>ID должен содержать 5 символов</p>} */}
                    </label>
                    <label className="form__label book-form__label">
                        <span className="form__label__title">Заголовок</span>
                        <input className="form__input book-form__input" type="text" placeholder="Заголовок" {...register("title")}/>
                        {errors.title && <p>Заголовок должен содержать не менее 1 символа</p>}
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
                        <div className="input-descr-wrapper">
                            <TextareaAutosize
                                className="form__input book-form__input textarea-descr"
                                placeholder="Описание"
                                {...register("description")}
                                maxRows={8}
                            />
                        </div>
                        {errors.description && <p>Описание должно содержать не менее 20 символов</p>}
                    </label>
                    <label className="form__label book-form__label">
                        <span className="form__label__title">Жанры</span>
                        <GenresSelect
                            genres={genres}
                            selectedGenres={selectedGenres}
                            setSelectedGenres={setSelectedGenres}
                        />
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
                        <input
                            className="form__input book-form__input"
                            type="number"
                            min="0"
                            placeholder="Экземпляры"/>
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
