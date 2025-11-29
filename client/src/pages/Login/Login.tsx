import { FC } from "react";
import "./Login.scss";

export const Login: FC = () => {
    return (
        <div className="login-window">
            <div className="login-window__content">
                <h1 className="login-window__title">
                    Войти
                </h1>
                <form className="login-window__form form">
                    <label className="form__label login-window__label">
                        <span className="form__label__title"></span>
                        <input className="form__input login-window__input" type="text" placeholder="Введите логин"/>
                    </label>
                    <label className="form__label login-window__label">
                        <span className="form__label__title"></span>
                        <input className="form__input login-window__input" type="password" placeholder="Введите пароль"/>
                    </label>
                    <button className="form__btn form__btn--submit" type="submit">
                        Войти
                    </button>
                </form>
            </div>
        </div>
    )
}