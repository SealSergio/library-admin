import { ErrorMessage } from "../../../../shared/components/Error/Error";
import { Loader } from "../../../../shared/components/Loader/Loader";
import { useGetAllAuthorsQuery } from "../../../authors/api/authorsApi";
import { useGetAllGenresQuery } from "../../api/genresApi";
import "./Filters.scss";

export const Filters: React.FC = () => {
    function HandleClickOnToggle(btn: HTMLButtonElement) {
        const content: Element | null = btn.nextElementSibling;
        btn.classList.toggle('active');
        if (content) {
            content.classList.toggle('expanded');
        };
    };

    const TOGGLE_SVG = <svg viewBox="0 0 24 24" width="16" height="16"><path d="M8.29 4.29a1 1 0 0 1 1.41 0l7.3 7.3a1 1 0 0 1 0 1.41l-7.3 7.3a1 1 0 1 1-1.41-1.41L14.58 12 8.29 5.71a1 1 0 0 1 0-1.42z"/></svg>;

    const authors = (() => {
        const { data, isError, isLoading } = useGetAllAuthorsQuery();
        return { data, isError, isLoading };
    })();

    const genres = (() => {
        const { data, isError, isLoading } = useGetAllGenresQuery();
        return { data, isError, isLoading };
    })();

    return (
        <div className="catalog-sidebar">
            <div className="sidebar-group">
                <button onClick={(e) => HandleClickOnToggle(e.currentTarget)} className="sidebar-toggle">
                    Жанры
                    {TOGGLE_SVG}
                </button>
                <div className="sidebar-content sidebar-content_genres">
                    {genres.data ? (
                        genres.data.map((genre) => (
                            <label key={genre} className="filter-option">
                                <input type="checkbox" name="genre" value={genre} />
                                {genre}
                            </label>
                        ))
                    ) : genres.isLoading ? (
                        <Loader />
                    ) : (
                        genres.isError && <ErrorMessage />
                    )}
                </div>
            </div>
            <div className="sidebar-group">
                <button onClick={(e) => HandleClickOnToggle(e.currentTarget)} className="sidebar-toggle">
                    Авторы
                    {TOGGLE_SVG}
                </button>
                <div className="sidebar-content sidebar-content_authors">
                    {authors.data ? (
                        authors.data.map((author) => (
                            <label key={author.id} className="filter-option">
                                <input type="checkbox" name="author" value={author.id} />
                                {author.author}
                            </label>
                        ))
                    ) : authors.isLoading ? (
                        <Loader />
                    ) : (
                        authors.isError && <ErrorMessage />
                    )}
                </div>
            </div>
            <div className="sidebar-group">
                <button onClick={(e) => HandleClickOnToggle(e.currentTarget)} className="sidebar-toggle">
                    Язык
                    {TOGGLE_SVG}
                </button>
                <div className="sidebar-content sidebar-content_languages">
                    <label className="filter-option"><input type="checkbox" name="language" value="russian" /> Русская</label>
                    <label className="filter-option"><input type="checkbox" name="language" value="foreign" /> Зарубежная</label>
                </div>
            </div>
            <div className="sidebar-group">
                <button onClick={(e) => HandleClickOnToggle(e.currentTarget)} className="sidebar-toggle">
                    Возрастная категория
                    {TOGGLE_SVG}
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