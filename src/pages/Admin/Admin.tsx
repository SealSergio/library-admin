import { FC } from "react";

import { Header } from "../../components/Header/Header";
import { Aside } from "../../components/Aside/Aside";
import { BookListView } from "../../components/BooksGrid/BookListView";

export const Admin: FC = () => {
    return (
        <>
          <Header />
          <div className="container container--admin-inner">
            <Aside />
            <div className="section-books">
                {/* <BookListView bookList={}/> */}
            </div>
          </div>
        </>
      )
}