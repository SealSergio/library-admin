import { createElement } from "../../functions/createElement.js";

export async function BookForm(book) {
    const bookFormWrapper = createElement("div", ["book-form-wrapper"], document.querySelector(".main"));
    bookFormWrapper.innerHTML = `
        <h2 class="book-form__title">Добавить книгу</h2>
        <form class="book-form">
            <div class="book-form__half book-form__half--left">
                <label class="form__label book-form__label">
                    <span class="form__label__title">ID</span>
                    <input class="form__input book-form__input" type="text" placeholder="ID" disabled>
                </label>
                <label class="form__label book-form__label">
                    <span class="form__label__title">Заголовок</span>
                    <input class="form__input book-form__input" type="text" placeholder="Заголовок">
                </label>
                <label class="form__label book-form__label">
                    <span class="form__label__title">Автор</span>
                    <input class="form__input book-form__input" type="text" placeholder="Автор">
                    <select name="authors"></select>
                </label>
                <label class="form__label form__label--checkbox book-form__label">
                    <span class="form__label__title">Часть цикла</span>
                    <input class="form__input book-form__input" type="checkbox" placeholder="Часть цикла">
                </label>
            </div>
            <div class="book-form__half book-form__half_--ight">
                <div class="book-form__img">Загрузите фото</div>
                <label class="form__label book-form__label">
                    <span class="form__label__title">Описание</span>
                    <input class="form__input book-form__input" type="text" placeholder="Описание">
                </label>
                <label class="form__label book-form__label">
                    <span class="form__label__title">Жанры</span>
                    <input class="form__input book-form__input" type="text" placeholder="Жанры">
                    <select name="genres"></select>
                </label>
                <label class="form__label book-form__label">
                    <span class="form__label__title">Возраст</span>
                    <input class="form__input book-form__input" type="text" placeholder="Возраст">
                    <select name="age">
                        <option value="0-6">0-6</option>
                        <option value="7-12">7-12</option>
                        <option value="13-18">13-18</option>
                        <option value="18+">18+</option>
                    </select>
                </label>
                <label class="form__label book-form__label">
                    <span class="form__label__title">Количество экземпляров</span>
                    <input class="form__input book-form__input" type="number" placeholder="Описание">
                </label>
                <button class="form__btn form__btn--submit" type="submit">
                    Сохранить
                </button>
                <button class="form__btn form__btn--reset" type="submit">
                    Удалить
                </button>
            </div>
        </form>
    `;
}