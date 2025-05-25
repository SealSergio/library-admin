import { addStyles } from "../../functions/addStyles.js";

export function Login() {
    addStyles("../../../css/login.css");
    document.body.innerHTML = `
        <div class="login-window">
            <div class="login-window__content">
                <h1 class="login-window__title">
                    Войти
                </h1>
                <form class="login-window__form form">
                    <label class="form__label login-window__label">
                        <span class="form__label__title"></span>
                        <input class="form__input login-window__input" type="text" placeholder="Введите логин">
                    </label>
                    <label class="form__label login-window__label">
                        <span class="form__label__title"></span>
                        <input class="form__input login-window__input" type="password" placeholder="Введите пароль">
                    </label>
                    <button class="form__btn form__btn--submit" type="submit">
                        Войти
                    </button>
                </form>
            </div>
        </div>
    `;
}