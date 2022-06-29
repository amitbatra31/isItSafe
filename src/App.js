import { useState, createContext, useReducer, useEffect } from "react";
import "./App.css";
import Login from "./Login";
import Medicine from "./Medicine";
import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginBtn from "./LoginBtn";

function App() {
  const { isAuthenticated, loginWithRedirect, loginWithPopup } = useAuth0();
  const LoginNow = () => {
    loginWithRedirect({});
  };
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="search"
          element={!isAuthenticated ? <LoginNow /> : <Medicine />}
        />
        <Route
          path="login"
          element={!isAuthenticated ? <LoginNow /> : <Home />}
        />
      </Routes>
    </div>
  );
}

export default App;
