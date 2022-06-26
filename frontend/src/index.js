import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
function AppWithCallbackAfterRender() {
  useEffect(() => {
    console.log("rendered");
  });
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
}
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<AppWithCallbackAfterRender />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
