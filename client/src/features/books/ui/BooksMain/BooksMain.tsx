import { ErrorMessage } from "../../../../shared/components/Error/Error";
import { Loader } from "../../../../shared/components/Loader/Loader";
import { useGetAllAuthorsQuery } from "../../../authors/api/authors";
import { useGetAllBooksQuery } from "../../api/books";
import { useGetAllGenresQuery } from "../../api/genres";
import { BookForm } from "../BookForm/BookForm";
import { BookListView } from "../BooksListView/BookListView";
import { Filters } from "../Filters/Filters";

export const BooksMain: React.FC = () => {
    const books = (() => {
        const { data, isError, isLoading } = useGetAllBooksQuery();
        return { data, isError, isLoading };
    })();

    const authors = (() => {
        const { data, isError, isLoading } = useGetAllAuthorsQuery();
        return { data, isError, isLoading };
    })();

    const genres = (() => {
        const { data, isError, isLoading } = useGetAllGenresQuery();
        return { data, isError, isLoading };
    })();

    if (books.isLoading || authors.isLoading || genres.isLoading) {
        return (<Loader />);
    }

    if (books.isError || authors.isError || genres.isError) {
        return (<ErrorMessage />);
    }

    if (books.data && authors.data && genres.data) {
        return (
            <>
                <BookForm genres={genres.data} authors={authors.data}/>
                <div className="section-books">
                    <Filters genres={genres.data} authors={authors.data}/>
                    {books.data.length > 0 ? (
                        <BookListView bookList={books.data}/>
                    ) : (
                        <div>Нет книг</div>
                    )}
                </div>
            </>
        )
    }
}
