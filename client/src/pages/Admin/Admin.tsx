import { FC } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Aside } from "../../components/Aside/Aside";
import { BookForm } from "../../components/BookForm/BookForm";
import { FetchBookListView } from "../../components/BooksList/FetchBookListView";
import { Filters } from "../../components/Filters/Filters";
import { Header } from "../../components/Header/Header";
import { Support } from "../../components/Support/Support";
import { BookListView } from "../../components/BooksList/BookListView";
import "./Admin.scss";

export const Admin: FC = () => {
    return (
        <>
            <Header />
            <div className="container container--admin-inner">
                <Aside />
                <main className="main">
                    <Routes>
                        <Route path="/books" element={
                            <>
                                <BookForm bookData={null}/>
                                <div className="section-books">
                                    <Filters />
                                    {/* <BookListView bookList={allBooks}/> */}
                                    <FetchBookListView />
                                </div>
                            </>
                        }/>
                        <Route path="/authors" element={
                            <>
                                {/* <AuthorForm authorData={null}/> */}
                                {/* <AuthorListView bookList={}/> */}
                            </>
                        }/>
                        <Route path="/support" element={
                            <Support />
                        }/>
                        <Route path="/" element={<Navigate to="/books" replace />} />
                    </Routes>
                </main>
            </div>
        </>
      )
}
