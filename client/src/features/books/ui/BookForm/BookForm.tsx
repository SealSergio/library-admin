import { zodResolver } from '@hookform/resolvers/zod';
import { ChangeEvent, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import TextareaAutosize from "react-textarea-autosize";
import { Select } from '../../../../shared/components/Select/Select';
import { useSelect } from '../../../../shared/hooks/useSelect';
import { AuthorList } from "../../../authors/model/Author";
import { Book, BookSchema } from "../../model/Book";
import { GenresSelect } from '../GenresSelect/GenresSelect';
import "./BookForm.scss";
import { getNewBook, setNewBook } from '../../api/localStorage';

interface BookFormProps {
    genres: string[],
    authors: AuthorList,
}

export const BookForm: React.FC<BookFormProps> = ({ genres, authors }) => {
    const newBook = getNewBook();
    
    const [newBookId, setNewBookId] = useState<string | null>(newBook?.id || null);
    const [newBookTitle, setNewBookTitle] = useState<string | null>(newBook?.title || null);
    const [newBookQuantity, setNewBookQuantity] = useState<number>(newBook?.quantity || 0);
    const [newBookGenres, setNewBookGenres] = useState<string[]>(newBook?.genres || []);
    const [newBookAge, setNewBookAge] = useState<string | null>(newBook?.age || null);
    const [newBookAuthor, setNewBookAuthor] = useState<{id: string, name: string} | null>(newBook?.author || null);
    const [newBookCycle, setNewBookCycle] = useState(newBook?.cycle || null);
    const [newBookDescription, setNewBookDescription] = useState<string>(newBook?.description || "");

    const [showIdMessage, setShowIdMessage] = useState(false);

    const {
            selectRef: ageSelectRef,
            handleToggle: toggleAge,
            isOpen: isAgeSelectOpen
        } = useSelect<HTMLLabelElement>();

    const {
            selectRef: authorSelectRef,
            handleToggle: toggleAuthor,
            isOpen: isAuthorSelectOpen
        } = useSelect<HTMLLabelElement>();

    function handleOnInput(value: string | number, setData: React.Dispatch<React.SetStateAction<any>>) {
        setData(value);
    }

    useEffect(() => {
        setNewBook({
            id: newBookId,
            title: newBookTitle,
            // authorId: ,
            description: newBookDescription,
            genres: newBookGenres,
            quantity: newBookQuantity,
            cycle: newBookCycle
        })
    }, [newBookTitle, newBookGenres, newBookDescription,newBookQuantity, newBookCycle]);

    const {register, handleSubmit, formState: { errors }} = useForm({
        resolver: zodResolver(BookSchema),
    });

    const onSubmit = (data: Book | unknown) => {
        console.log(data);
    };

    return (
        <div className="book-form-wrapper">
            <h2 className="book-form__title">Добавить книгу</h2>
            <form className="book-form" onSubmit={handleSubmit(onSubmit)}>
                <div className="book-form__half book-form__half--left">
                    <label className="form__label book-form__label">
                        <span className="form__label__title">{showIdMessage ? "ID генерируется автоматически" : " ID"}</span>
                        <input
                            className="form__input book-form__input book-form__input--id"
                            type="text"
                            placeholder="ID"
                            readOnly
                            {...register("id")}
                            value={newBookId ? newBookId : ""}
                            onMouseEnter={() => setShowIdMessage(true)}
                            onMouseLeave={() => setShowIdMessage(false)}
                        />
                    </label>
                    <label className="form__label book-form__label">
                        <span className="form__label__title">Заголовок</span>
                        <input
                            className="form__input book-form__input"
                            type="text" placeholder="Заголовок"
                            {...register("title")}
                            onInput={(event) => handleOnInput(event.currentTarget.value, setNewBookTitle)}
                        />
                        {errors.title && <p>Заголовок должен содержать не менее 1 символа</p>}
                    </label>
                    <label className="form__label book-form__label label--age" ref={authorSelectRef}>
                        <span className="form__label__title">Автор</span>
                        <button
                            className={`form__input book-form__input book-form__input--age ${newBookAuthor === null && "defaultValue"}`}
                            onClick={toggleAuthor}
                            type="button">
                            {newBookAuthor ? newBookAuthor.name : "Автор"}
                        </button>
                        {isAuthorSelectOpen && (
                            <ul className="ageList">
                            {authors.map((author) => (
                                <li
                                    key={author.id}
                                    className="ageItem"
                                    onClick={() => setNewBookAuthor(author)}>
                                    {author.name}
                                </li>
                            ))}
                        </ul>
                        )}
                    </label>
                    <Link to={"/authors"}>
                        Новый автор
                    </Link>
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
                                value={newBookDescription}
                                onInput={(event) => handleOnInput(event.currentTarget.value, setNewBookDescription)}
                            />
                        </div>
                        {errors.description && <p>Описание должно содержать не менее 20 символов</p>}
                    </label>
                    <label className="form__label book-form__label">
                        <span className="form__label__title">Жанры</span>
                        <GenresSelect
                            genres={genres}
                            newBookGenres={newBookGenres}
                            setNewBookGenres={setNewBookGenres}
                        />
                    </label>
                    <label className="form__label book-form__label label--age" ref={ageSelectRef}>
                        <span className="form__label__title">Возраст</span>
                        <button
                            className={`form__input book-form__input book-form__input--age ${newBookAge === null && "defaultValue"}`}
                            onClick={toggleAge}
                            type="button">
                            {newBookAge ? newBookAge : "Возраст"}
                        </button>
                        {isAgeSelectOpen && (
                            <Select
                                items={["Любой", "0+", "6+", "12+", "16+"]}
                                handleClickOnItem={setNewBookAge}
                            />
                        )}
                    </label>
                    <label className="form__label book-form__label">
                        <span className="form__label__title">Количество экземпляров</span>
                        <input
                            className="form__input book-form__input"
                            type="number"
                            min="0"
                            placeholder="Экземпляры"
                            {...register("quantity", { valueAsNumber: true })}
                            value={newBookQuantity === 0 ? "" : newBookQuantity}
                            onInput={(event) => handleOnInput(Number(event.currentTarget.value), setNewBookQuantity)}
                        />
                        {errors.quantity && <p>Должно быть не менее одного экземпляра</p>}
                    </label>
                    <button className="form__btn form__btn--submit" type="submit">
                        Сохранить
                    </button>
                    <button className="form__btn form__btn--reset" type="button">
                        Удалить
                    </button>
                </div>
            </form>
        </div>
    )
}
