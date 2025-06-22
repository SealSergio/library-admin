import React from 'react';
import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import { MainPage } from "../pages/MainPage/MainPage";
import { Login } from "../pages/Login/Login";

export const App = () => {
    if ((localStorage.getItem("dark-mode")) === "true") {
        document.body.classList.add("dark-mode");
    };

    const isAuthorized = Boolean(localStorage.getItem("isAuthorized"));

    return (
        <BrowserRouter>
            {isAuthorized ? <MainPage /> : <Login />}
        </BrowserRouter>
    );
}
