import { useEffect, useState } from 'react'
import './App.scss'
import { RouterContext } from "./contexts";
import { UserContext } from './contexts/UserContext';
import { ROUTES } from "./Routes";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { Header } from "./components/Header/Header.js";
import { Aside } from "./components/Aside/Aside.js";
import { Main } from "./components/Main/Main.js";
import { Login } from "./components/Login/Login.js";
import { createElement } from "./functions/createElement.js";

const queryClient = new QueryClient()

function App() {
  const [currentRoute = '', setCurrentRoute] = useState(
    ROUTES.find(route => location.pathname.includes(route.path))?.id,
  );

  if ((localStorage.getItem("dark-mode")) === "true") {
      document.body.classList.add("dark-mode");
  }

  return (
    if (checkAuthorization()) {
        Header();
        createElement("div", ["container", "main-container"], document.body);
        Aside();
        Main("books");
    } else {
        Login();
    }
  )
}

export default App
