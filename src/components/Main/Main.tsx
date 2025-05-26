import { FC } from "react";
import "./Main.scss";
import { BookForm } from "../BookForm/BookForm";
import { Filters } from "../Filters/Filters";
import { BookListView } from "../BooksList/BookListView";
import { MainContent } from "../../types/Main";
import { Support } from "../Support/Support";

interface MainProps {
  content: MainContent;
}

export const Main: FC<MainProps> = ({content}) => {
    switch (content) {
        case "books":
            return (
                <main className="main">
                    <BookForm bookData={null}/>
                    <div className="section-books">
                        <Filters />
                        {/* <BookListView bookList={}/> */}
                    </div>
                </main>
            )
        case "authors":
            return (
                <main className="main">
                    {/* <AuthorForm authorData={null}/> */}
                    {/* <AuthorListView bookList={}/> */}
                </main>
            )
        case "support":
            return <Support />
    }
}
