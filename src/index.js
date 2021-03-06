import React from "react";
import ReactDOM from "react-dom";
import "./stylesheets/main.scss";
import { HashRouter } from "react-router-dom";
import App from "./components/App";

ReactDOM.render(
  <HashRouter>
    <App />
  </HashRouter>,
  document.getElementById("root")
);
