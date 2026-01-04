import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { Analytics } from "@vercel/analytics/react"


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
  <BrowserRouter>
    <App />
    <Analytics />
  </BrowserRouter>
  </Provider>
);
