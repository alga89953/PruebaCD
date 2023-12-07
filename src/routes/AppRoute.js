import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { DashboardRoute } from "./DashboardRoute";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
// Importa la función específica en lugar del módulo 'firebase'
import { auth } from "../firebase/firebaseConfig";
import { onAuthStateChanged } from "firebase/auth";
import { login } from "../actions/auth";
import { PublicRoute } from "./PublicRoute";
import { PrivateRoute } from "./PrivateRoute";

export const AppRoute = () => {
  const dispatch = useDispatch();
  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Aquí usamos 'auth' y 'onAuthStateChanged' directamente
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        dispatch(login(user.uid, user.email));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setChecking(false);
    });

    // Desuscribirse del observador cuando se desmonte el componente
    return () => unsubscribe();
  }, [dispatch]);

  if (checking) {
    return <div>Loading...</div>;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
         <PublicRoute isAuth={isLoggedIn}>
          <Login/>
         </PublicRoute>
        } />
        <Route path="/*" element={
        <PrivateRoute isAuth={(isLoggedIn)}>
          <DashboardRoute/>
        </PrivateRoute>
        } />
      </Routes>
    </BrowserRouter>
  );
};
