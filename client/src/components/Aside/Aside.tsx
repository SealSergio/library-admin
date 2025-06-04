import { FC } from "react";
import "./Aside.scss";
import {  Link } from "react-router-dom";

export const Aside: FC = () => {
    return (
        <aside className="aside">
            <div className="aside__inner">
                <button className="aside-menu__btn aside__btn-close btn-reset">
                    Закрыть
                </button>
                <ul className="aside-menu">
                    <li className="aside-menu__item">
                    <Link to={"/books"}>
                        <button className="aside-menu__btn">
                            Книги
                        </button>
                    </Link>
                    </li>
                    <li className="aside-menu__item">
                        <Link to={"/authors"}>
                            <button className="aside-menu__btn">
                                Авторы
                            </button>
                        </Link>
                    </li>
                    <li className="aside-menu__item">
                        <Link to={"/support"}>
                            <button className="aside-menu__btn aside-menu__btn--support">
                                Справка
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside> 
    )
}
