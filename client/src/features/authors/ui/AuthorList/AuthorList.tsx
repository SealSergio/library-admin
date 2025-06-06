import { ErrorMessage } from "../../../../shared/components/Error/Error";
import { Loader } from "../../../../shared/components/Loader/Loader";
import { useGetAllAuthorsQuery } from "../../api/authorsApi";


export const AuthorList: React.FC = () => {
        const { data: authors, isError, isLoading } = useGetAllAuthorsQuery();
    
        if (isError) return (<ErrorMessage />);
        if (isLoading) return (<Loader />);

        if (authors) console.log(authors);

        return (
            <ul>
                {authors ? (
                    authors.map((author) => 
                        <li>{author.author}</li>
                    )
                ) : (
                    <Loader />
                )}
            </ul>
        )
}