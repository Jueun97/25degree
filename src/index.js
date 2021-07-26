import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./app";
import AuthService from "./service/auth_server";
import GetData from "./service/getData";
import Images from "./service/images";

const authService = new AuthService();
const getData = new GetData();
const uploadImages = new Images();

ReactDOM.render(
  <React.StrictMode>
    <App authService={authService} uploadImages={uploadImages} getData={getData} />
  </React.StrictMode>,
  document.getElementById("root")
);
