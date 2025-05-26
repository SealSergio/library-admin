import { FC } from "react";
import "./Aside.scss";

export const Aside: FC = () => {
    return (
        <aside className="aside">
            <div className="aside__inner">
                <button className="aside-menu__btn aside__btn-close btn-reset">
                    Закрыть
                </button>
                <ul className="aside-menu">
                    <li className="aside-menu__item">
                        <button className="aside-menu__btn">
                            Книги
                        </button>
                    </li>
                    <li className="aside-menu__item">
                        <button className="aside-menu__btn">
                            Авторы
                        </button>
                    </li>
                    <li className="aside-menu__item">
                        <button className="aside-menu__btn aside-menu__btn--support">
                            Справка
                        </button>
                    </li>
                </ul>
            </div>
        </aside> 
    )
}
