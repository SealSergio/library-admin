export function Aside() {
    document.querySelector(".main-container").insertAdjacentHTML("afterbegin",
        `
            <aside class="aside">
                <div class="aside__inner">
                    <button class="aside-menu__btn aside__btn-close btn-reset">
                        Закрыть
                    </button>
                    <ul class="aside-menu">
                        <li class="aside-menu__item">
                            <button class="aside-menu__btn">
                                Книги
                            </button>
                        </li>
                        <li class="aside-menu__item">
                            <button class="aside-menu__btn">
                                Авторы
                            </button>
                        </li>
                        <li class="aside-menu__item">
                            <button class="aside-menu__btn aside-menu__btn--support">
                                Справка
                            </button>
                        </li>
                    </ul>
                </div>
            </aside> 
        `
    );
}
