import { useEffect, useState } from 'react'
import './App.scss'
import { RouterContext } from "./contexts";
import { UserContext } from './contexts/UserContext';
import { ROUTES } from "./Routes";
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

import { Login } from './pages/Login/Login';
import { Admin } from './pages/Admin/Admin';

// const queryClient = new QueryClient()

function App() {
//   const [currentRoute = '', setCurrentRoute] = useState(
//     ROUTES.find(route => location.pathname.includes(route.path))?.id,
//   );
  
  if ((localStorage.getItem("dark-mode")) === "true") {
    document.body.classList.add("dark-mode");
  }

  const isAuthorized = Boolean(localStorage.getItem("authorized"));

  switch (isAuthorized) {
    case true:
      return <Login />
    case false:
      return <Admin />
  }
}

export default App
