import { AuthorList } from "../../model/Author"

interface AuthorListProps {
    authors: AuthorList
}

export const AuthorListView: React.FC<AuthorListProps> = ({ authors }) => {
        return (
            <ul>
                {authors.map((author) => 
                        <li key={author.author}>{author.author}</li>
                    )}
            </ul>
        )
}
