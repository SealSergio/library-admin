import { BrowserRouter } from "react-router-dom";
import "./App.scss";

import { Admin } from "../pages/MainPage/Admin";
import { Login } from "../pages/Login/Login";

function App() {
    if ((localStorage.getItem("dark-mode")) === "true") {
        document.body.classList.add("dark-mode");
    }

    const isAuthorized = Boolean(localStorage.getItem("isAuthorized"));

    return (
        <BrowserRouter>
            {isAuthorized ? <Admin /> : <Login />}
        </BrowserRouter>
    )
}

export default App