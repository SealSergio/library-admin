import { FC } from "react";
import "./Header.scss";

export const Header: FC = () => {
    // handleClickOnBtnUser();
    function handleClickOnBtnMode() {
        localStorage.setItem("dark-mode", (localStorage.getItem("dark-mode") === "true" ? "false" : "true"));
        document.body.classList.toggle("dark-mode");
    };

    return (
        <header className="header">
            <div className="container container--header">
                <h1 className="header__title">
                    <a href="#" target="_blank">Книжный дом 2.0</a>            
                </h1>
                <div className="header__btns-right">
                    <button className="header__btn header__btn--user btn-reset">Профиль</button>
                    <button onClick={handleClickOnBtnMode} className="header__btn header__btn--mode btn-reset">Тема</button>
                </div>
            </div>
        </header>
    )
}
