import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_server";
import GetData from "./data/getData";

const authService = new AuthService();
const getData = new GetData();
ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} getData={getData} />
  </React.StrictMode>,
  document.getElementById("root")
);
