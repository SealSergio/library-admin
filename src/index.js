import { Header } from "./components/header/Header.js";
import { Aside } from "./components/aside/Aside.js";
import { Main } from "./components/main/Main.js";
import { Login } from "./components/login/Login.js";
import { createElement } from "./functions/createElement.js";
// import { addLoader, removeLoader } from "./functions/addLoader.js";

document.addEventListener("DOMContentLoaded", () => {
    if ((localStorage.getItem("dark-mode")) === "true") {
        document.body.classList.add("dark-mode");
    }
    // if (checkAuthorization()) {
    if (true) {
        Header();
        createElement("div", ["container", "main-container"], document.body);
        Aside();
        Main("books");
    } else {
        Login();
    }
});
