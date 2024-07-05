import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

ReactDOM.createRoot(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

