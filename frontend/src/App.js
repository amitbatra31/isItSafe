import { useState, createContext, useReducer } from "react";
import "./App.css";
import Login from "./Login";
import Medicine from "./Medicine";
import Home from "./Home";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
export const AuthContext = createContext();
const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  fname: null,
  lname: null,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      localStorage.setItem("user", JSON.stringify(action.payload.user_id));
      localStorage.setItem(
        "token",
        JSON.stringify(action.payload.verification_token)
      );
      localStorage.setItem(
        "fname",

        JSON.stringify(action.payload.customFieldInputValues["First Name"])
      );
      localStorage.setItem(
        "lname",

        JSON.stringify(action.payload.customFieldInputValues["Last Name"])
      );
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user_id,
        token: action.payload.verification_token,
        fname: action.payload.customFieldInputValues["First Name"],
        lname: action.payload.customFieldInputValues["Last Name"],
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      <div className="App">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="search" element={<Medicine />} />
          <Route
            path="login"
            element={!state.isAuthenticated ? <Login /> : <Home />}
          />
        </Routes>

        {/* <Medicine /> */}
        {/* <Home /> */}
        {/* {isAuthenticated ? (
        <>
          <UserInfo />
          <Medicine />
        </>
      ) : (
        <Login
          setIsAuthenticated={setIsAuthenticated}
          setUserId={setUserId}
          setToken={setToken}
          setPayload={setPayload}
        />
      )} */}
      </div>
    </AuthContext.Provider>
  );
}

export default App;
