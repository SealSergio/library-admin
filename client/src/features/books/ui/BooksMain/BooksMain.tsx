import { ErrorMessage } from "../../../../shared/components/Error/Error"
import { Loader } from "../../../../shared/components/Loader/Loader"
import { useGetAllBooksQuery } from "../../api/booksApi"
import { BookForm } from "../BookForm/BookForm"
import { BookListView } from "../BooksListView/BookListView"
import { Filters } from "../Filters/Filters"


export const BooksMain: React.FC = () => {
    const { data: books, isError, isLoading } = useGetAllBooksQuery();

    if (isError) {
        return (<ErrorMessage />)
    };
    if (isLoading) return (<Loader />);

    return (
        <>
            <BookForm bookData={null}/>
            <div className="section-books">
                <Filters />
                {books ? (
                    <BookListView bookList={books}/>
                ) : (
                    <Loader />
                )}
            </div>
        </>
    )
}