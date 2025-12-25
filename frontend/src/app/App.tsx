import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Account } from "../components/Account/Account";
import { getCurrentMode, setNewMode } from "../shared/lib/mode/mode";

export const App = () => {
    if (getCurrentMode() === null) {
        setNewMode();
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
