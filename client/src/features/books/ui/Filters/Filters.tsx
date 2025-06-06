import { FC } from "react";
import "./Filters.scss";

export const Filters: FC = () => {
    function HandleClickOnToggle(btn: HTMLButtonElement) {
        const content: Element | null = btn.nextElementSibling;
        btn.classList.toggle('active');
        if (content) {
            content.classList.toggle('expanded');
        };
    };
    
    return (
        <div className="catalog-sidebar">
            <div className="sidebar-group">
                <button onClick={(e) => HandleClickOnToggle(e.currentTarget)} className="sidebar-toggle">
                    Жанры
                    <svg viewBox="0 0 24 24" width="16" height="16">
                        <path d="M8.29 4.29a1 1 0 0 1 1.41 0l7.3 7.3a1 1 0 0 1 0 1.41l-7.3 7.3a1 1 0 1 1-1.41-1.41L14.58 12 8.29 5.71a1 1 0 0 1 0-1.42z"/>
                    </svg>
                </button>
                <div className="sidebar-content sidebar-content_genres">
                    <label className="filter-option"><input type="checkbox" name="genre" value="classic" /> Классика</label>
                    <label className="filter-option"><input type="checkbox" name="genre" value="fantasy" /> Фантастика</label>
                    <label className="filter-option"><input type="checkbox" name="genre" value="detective" /> Детективы</label>
                    <label className="filter-option"><input type="checkbox" name="genre" value="novel" /> Романы</label>
                    <label className="filter-option"><input type="checkbox" name="genre" value="fantasy" /> Фэнтези</label>
                    <label className="filter-option"><input type="checkbox" name="genre" value="science" /> Научная литература</label>
                    <label className="filter-option"><input type="checkbox" name="genre" value="poetry" /> Поэзия</label>
                    <label className="filter-option"><input type="checkbox" name="genre" value="historical" /> Исторические</label>
                    <label className="filter-option"><input type="checkbox" name="genre" value="biography" /> Биографии</label>
                    <label className="filter-option"><input type="checkbox" name="genre" value="psychology" /> Психология</label>
                    <label className="filter-option"><input type="checkbox" name="genre" value="children" /> Детские</label>
                    <label className="filter-option"><input type="checkbox" name="genre" value="adventure" /> Приключения</label>
                    <label className="filter-option"><input type="checkbox" name="genre" value="horror" /> Ужасы</label>
                    <label className="filter-option"><input type="checkbox" name="genre" value="humor" /> Юмор</label>
                    <label className="filter-option"><input type="checkbox" name="genre" value="business" /> Бизнес</label>
                </div>
            </div>
            <div className="sidebar-group">
                <button onClick={(e) => HandleClickOnToggle(e.currentTarget)} className="sidebar-toggle">
                    Авторы
                    <svg viewBox="0 0 24 24" width="16" height="16">
                        <path d="M8.29 4.29a1 1 0 0 1 1.41 0l7.3 7.3a1 1 0 0 1 0 1.41l-7.3 7.3a1 1 0 1 1-1.41-1.41L14.58 12 8.29 5.71a1 1 0 0 1 0-1.42z"/>
                    </svg>
                </button>
                <div className="sidebar-content sidebar-content_authors">
                    {/*  */}
                </div>
            </div>
            <div className="sidebar-group">
                <button onClick={(e) => HandleClickOnToggle(e.currentTarget)} className="sidebar-toggle">
                    Язык
                    <svg viewBox="0 0 24 24" width="16" height="16">
                        <path d="M8.29 4.29a1 1 0 0 1 1.41 0l7.3 7.3a1 1 0 0 1 0 1.41l-7.3 7.3a1 1 0 1 1-1.41-1.41L14.58 12 8.29 5.71a1 1 0 0 1 0-1.42z"/>
                    </svg>
                </button>
                <div className="sidebar-content sidebar-content_languages">
                    <label className="filter-option"><input type="checkbox" name="language" value="russian" /> Русская</label>
                    <label className="filter-option"><input type="checkbox" name="language" value="foreign" /> Зарубежная</label>
                </div>
            </div>
            <div className="sidebar-group">
                <button onClick={(e) => HandleClickOnToggle(e.currentTarget)} className="sidebar-toggle">
                    Возрастная категория
                    <svg viewBox="0 0 24 24" width="16" height="16">
                        <path d="M8.29 4.29a1 1 0 0 1 1.41 0l7.3 7.3a1 1 0 0 1 0 1.41l-7.3 7.3a1 1 0 1 1-1.41-1.41L14.58 12 8.29 5.71a1 1 0 0 1 0-1.42z"/>
                    </svg>
                </button>
                <div className="sidebar-content sidebar-content_ages">
                    <label className="filter-option"><input type="checkbox" name="age" value="0-6" /> Для детей (0-6 лет)</label>
                    <label className="filter-option"><input type="checkbox" name="age" value="7-12" /> Для детей (7-12 лет)</label>
                    <label className="filter-option"><input type="checkbox" name="age" value="13-18" /> Для подростков (13-18 лет)</label>
                    <label className="filter-option"><input type="checkbox" name="age" value="18+" /> Для взрослых (18+ лет)</label>
                </div>
            </div>
            <button className="form__btn form__btn--submit filter-submit-btn">Найти</button>
            <button className="form__btn form__btn--reset filter-reset">Сбросить поиск</button>
        </div>
    )
}