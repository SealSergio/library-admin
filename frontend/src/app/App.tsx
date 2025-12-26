import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth } from "../features/auth/ui/Auth";
import { getCurrentMode, setNewMode } from "../shared/lib/mode/mode";

export const App = () => {
    if (getCurrentMode() === null) {
        setNewMode();
    };

    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={
                    <Auth
                />} />
            </Routes>
        </BrowserRouter>
    );
};
