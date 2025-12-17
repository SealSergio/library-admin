import { ErrorMessage } from "../../../../shared/components/Error/Error";
import { Loader } from "../../../../shared/components/Loader/Loader";
import { useGetAllAuthorsQuery } from "../../api/authors";
import { AuthorListView } from "../AuthorListView/AuthorListView"
import { AuthorForm } from "../AuthorForm/AuthorFrom";


export const AuthorsMain: React.FC = () => {
    const { data: authors, isError, isLoading } = useGetAllAuthorsQuery();

    if (isError) return (<ErrorMessage />);
    if (isLoading) return (<Loader />);

    return (
        <>
            <AuthorForm authors={authors}/>
            {authors ? (
                <AuthorListView authors={authors}/>
            ) : (
                <div>Нет авторов</div>
            )}
        </>
    )
}
