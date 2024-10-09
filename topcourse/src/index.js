import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// line 4 and 5 for using toast ,can easily find on internet.
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <App />
    <ToastContainer />
    {/* to show a toast container */}
  </>
);