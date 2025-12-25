import { DeletionIcon, EditingIcon } from "../../../../shared/components/Icons/Icons";
import { BookList } from "../../../books/model/Book";
import { GenreList } from "../../model/Genre";
import "./GenresList.scss";

interface GenresListProps {
    genres: GenreList,
    books: BookList,
}

export const GenresList: React.FC<GenresListProps> = ({ genres, books }) => {
    return (
        <div className="author__table-wrapper">
            <table className="author__table">
                <thead>
                    <tr>
                        <th>Жанр</th>
                        <th>Сколько книг</th>
                        <th>Изменить</th>
                        <th>Удалить</th>
                    </tr>
                </thead>
                <tbody>
                    {genres.map((genre) => 
                        <tr key={genre.genreTitle}>
                            <td>{genre.genreTitle}</td>
                            <td>{(books.filter((book) => book.genres.some((currentBookGenre) =>
                                currentBookGenre.genreTitle === genre.genreTitle))).length}
                            </td>
                            <td>
                                <EditingIcon customClass={null}/>
                            </td>
                            <td>
                                <DeletionIcon customClass={null}/>
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}