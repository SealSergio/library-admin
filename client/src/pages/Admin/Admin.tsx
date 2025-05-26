import { FC } from "react";
import "./Admin.scss";

import { Header } from "../../components/Header/Header";
import { Aside } from "../../components/Aside/Aside";
import { Main } from "../../components/Main/Main";

export const Admin: FC = () => {
    return (
        <>
            <Header />
            <div className="container container--admin-inner">
                <Aside />
                <Main content="books"/>
            </div>
        </>
      )
}