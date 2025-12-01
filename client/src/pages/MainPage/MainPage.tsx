import { Provider } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import { store } from "../../app/providers/store";
import { Aside } from "../../components/Aside/Aside";
import { Header } from "../../components/Header/Header";
import { AuthorsMain } from "../../features/authors/ui/AuthorsMain/AuthorsMain";
import { BooksMain } from "../../features/books/ui/BooksMain/BooksMain";
import { Support } from "../../features/support/ui/Support";
import "./MainPage.scss";
import { CyclesMain } from "../../features/cycles/ui/CyclesMain/CyclesMain";

export const MainPage: React.FC = () => {
    return (
        <>
            <Header />
            <div className="container container--admin-inner">
                <Aside />
                <Provider store={store}>
                    <main className="main">
                        <Routes>
                            <Route path="/books" element={<BooksMain />}/>
                            <Route path="/authors" element={<AuthorsMain />}/>
                            <Route path="/cycles" element={<CyclesMain />}/>
                            <Route path="/support" element={<Support />}/>
                            <Route index element={<Navigate to="/books" replace />} />
                        </Routes>
                    </main>
                </Provider>
            </div>
        </>
    );
}
