import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Account } from "../components/Account/Account";

export const App = () => {
    if ((localStorage.getItem("dark-mode")) === "true") {
        document.documentElement.classList.add("dark-mode");
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={
                    <Account
                />} />
            </Routes>
        </BrowserRouter>
    );
};
