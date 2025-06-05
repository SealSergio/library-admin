import { Navigate, Route, Routes } from "react-router-dom";
import { Aside } from "../../components/Aside/Aside";
import { Header } from "../../components/Header/Header";
import { AuthorsMain } from "../../features/authors/ui/AuthorsMain/AuthorsMain";
import { BooksMain } from "../../features/books/ui/BooksMain/BooksMain";
import { Support } from "../../features/support/ui/Support";
import "./MainPage.scss";
import { Provider } from "react-redux";
import { store } from "../../app/providers/store";

export const MainPage: React.FC = () => {
    return (
        <Provider store={store}>
            <Header />
            <div className="container container--admin-inner">
                <Aside />
                <main className="main">
                    <Routes>
                        <Route path="/books" element={<BooksMain />}/>
                        <Route path="/authors" element={<AuthorsMain />}/>
                        <Route path="/support" element={<Support />}/>
                        <Route path="/" element={<Navigate to="/books" replace />} />
                    </Routes>
                </main>
            </div>
        </Provider>
    );
}
